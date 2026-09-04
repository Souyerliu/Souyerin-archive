/**
 * Satteri only recognises display-math fences at the start of a line. Older
 * posts indent `$$` to align formulas with list content, which otherwise makes
 * one math node consume the rest of the document. Normalise those fence lines
 * while leaving fenced code examples untouched.
 */
export function normalizeIndentedDisplayMath(source: string): string {
  let codeFence: { marker: string; length: number } | undefined;

  return source
    .split("\n")
    .map((line) => {
      const content = line.endsWith("\r") ? line.slice(0, -1) : line;
      const carriageReturn = line.endsWith("\r") ? "\r" : "";
      const fence = content.match(/^\s*(`{3,}|~{3,})/);

      if (codeFence) {
        if (fence && fence[1][0] === codeFence.marker && fence[1].length >= codeFence.length) {
          codeFence = undefined;
        }
        return line;
      }

      if (fence) {
        codeFence = {
          marker: fence[1][0],
          length: fence[1].length,
        };
        return line;
      }

      return /^[\t ]+\$\$[\t ]*$/.test(content) ? `$$${carriageReturn}` : line;
    })
    .join("\n");
}

/**
 * MDX needs to retain list nesting around indented formulas. Converting the
 * formula to the existing Katex component avoids Satteri's indented `$$`
 * limitation without pulling the following list content out of its parent.
 */
export function normalizeIndentedMdxDisplayMath(source: string): string {
  const lines = source.split("\n");
  const output: string[] = [];
  let codeFence: { marker: string; length: number } | undefined;
  let standardMath = false;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const content = line.endsWith("\r") ? line.slice(0, -1) : line;
    const fence = content.match(/^\s*(`{3,}|~{3,})/);

    if (codeFence) {
      output.push(line);
      if (fence && fence[1][0] === codeFence.marker && fence[1].length >= codeFence.length) {
        codeFence = undefined;
      }
      continue;
    }

    if (fence) {
      codeFence = {
        marker: fence[1][0],
        length: fence[1].length,
      };
      output.push(line);
      continue;
    }

    if (standardMath) {
      output.push(line);
      if (/^\s*\$\$[\t ]*$/.test(content)) standardMath = false;
      continue;
    }

    if (/^\$\$(?!.*\$\$)/.test(content)) {
      standardMath = true;
      output.push(line);
      continue;
    }

    const indentedOpening = content.match(/^([\t ]+)\$\$(.*)$/);
    const listOpening = content.match(/^(\s*(?:[-+*]|\d+[.)])\s+)\$\$(.*)$/);
    if (!indentedOpening && !listOpening) {
      output.push(line);
      continue;
    }

    let closingIndex = index + 1;
    while (closingIndex < lines.length && !/^\s*\$\$[\t ]*\r?$/.test(lines[closingIndex])) {
      closingIndex += 1;
    }

    if (closingIndex === lines.length) {
      output.push(line);
      continue;
    }

    const openingValue = (listOpening?.[2] ?? indentedOpening?.[2] ?? "").trim();
    const formulaLines = lines.slice(index + 1, closingIndex);
    const commonIndentation = Math.min(
      ...formulaLines
        .filter((formulaLine) => formulaLine.trim())
        .map((formulaLine) => formulaLine.match(/^[\t ]*/)?.[0].length ?? 0),
    );
    const bodyValue = formulaLines
      .map((formulaLine) => formulaLine.slice(commonIndentation))
      .join("\n")
      .trim();
    const value = [openingValue, bodyValue].filter(Boolean).join("\n");
    // Up to three leading spaces are valid at the document root. Removing one
    // also keeps the component nested when the formula belongs to a list item.
    const componentPrefix = listOpening ? listOpening[1] : indentedOpening![1].slice(1);
    const encodedValue = Buffer.from(value, "utf8").toString("base64");
    output.push(`${componentPrefix}<Katex valueBase64="${encodedValue}" displayMode />`);
    index = closingIndex;
  }

  return output.join("\n");
}
import { Buffer } from "node:buffer";
