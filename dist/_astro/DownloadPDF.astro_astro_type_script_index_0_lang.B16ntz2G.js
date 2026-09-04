async function e(){let e=window.location.origin,t=[];document.querySelectorAll(`style`).forEach(e=>{e.textContent&&t.push(e.textContent)});let n=document.querySelectorAll(`link[rel="stylesheet"]`),r=await Promise.allSettled(Array.from(n).map(async t=>{let n=t.href;if(!n.startsWith(e))return``;try{let t=await fetch(n);if(!t.ok)return``;let r=await t.text(),i=n.substring(0,n.lastIndexOf(`/`)+1);return r.replace(/url\((["']?)((?:\.\.?\/[^)"']+|\/[^)"']+)[^)"']*)\1\)/g,(t,n,r)=>`url(${n}${new URL(r.startsWith(`/`)?r:i+r,e).href}${n})`)}catch{return``}}));for(let e of r)e.status===`fulfilled`&&e.value&&t.push(e.value);return t.join(`
`).replace(/url\((["']?)((?:\.\.?\/[^)"']+|\/[^)"']+)[^)"']*)\1\)/g,(t,n,r)=>`url(${n}${new URL(r,e).href}${n})`)}function t(e){let t=window.location.origin;e.querySelectorAll(`img`).forEach(e=>{let n=e.getAttribute(`src`);if(!(!n||n.startsWith(`data:`)||n.startsWith(`http`)))try{e.src=new URL(n,t).href}catch{}})}var n=`186mm`;function r(e,t=.45){let n=Array.from(e.querySelectorAll(`.katex-display`)),r=n.map(e=>{let n=e.clientWidth,r=e.querySelector(`:scope > .katex`),i=Math.max(e.scrollWidth,r?.scrollWidth??0);return!n||!i||i<=n+1?1:Math.max(t,n/i)});n.forEach((e,t)=>{let n=r[t]??1;n<1&&e.style.setProperty(`font-size`,`${(n*100).toFixed(2)}%`,`important`),e.style.setProperty(`overflow`,`visible`,`important`)})}function i(e,t){let n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT),r=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT),i=[{name:`color`},{name:`background-color`,skip:`rgba(0, 0, 0, 0)`},{name:`font-size`},{name:`display`,skip:`inline`}];for(;n.nextNode()&&r.nextNode();){let e=n.currentNode,t=r.currentNode;if(!(e instanceof HTMLElement)||!(t instanceof HTMLElement)||e.closest(`.katex, .katex-display`))continue;let a=getComputedStyle(e);for(let{name:e,skip:n}of i){let r=a.getPropertyValue(e);!r||r===`transparent`||r===n||t.style.setProperty(e,r)}}}function a(e,t,r){return`<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>${e}</title>
<style>
${r}

/* 打印分页 — A4 纸宽 210mm，留 12mm 页边距 = ${n} 可用宽度 */
@page { size: A4; margin: 12mm; }

/* 布局：屏幕预览与打印共用，避免预览尺寸与实际出纸不一致 */
html, body, #container, main, .wrap, .article, .post, .block, .post.block,
.md, .body, .content, .post-content, article {
  width: 100% !important;
  max-width: none !important;
  min-width: 0 !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}

body {
  background: #fff;
  font-size: 13.5px;
  line-height: 1.6;
}

/* 屏幕预览时模拟 A4 版心，宽度与打印一致且不产生横向滚动条 */
@media screen {
  html { overflow-x: hidden; }
  body {
    box-sizing: border-box;
    width: ${n} !important;
    max-width: 100% !important;
    margin: 0 auto !important;
  }
}

/* 溢出控制 */
table { max-width: 100%; word-break: break-word; }
pre { max-width: 100%; white-space: pre-wrap; word-break: break-word; }
img { max-width: 100%; height: auto; }

/* 公式：宽度受版心约束，超宽部分由 fitDisplayMath 等比缩小 */
.katex-display,
.katex-display > .katex,
.katex {
  max-width: 100%;
}

@media print {
  /* 分页控制：只在真正需要的地方避免内部分页，其余段落/列表允许自然断页 */
  h2, h3, h4 { break-before: avoid; break-after: avoid; }
  .post-header { break-after: avoid; }
  /* 不可分割块 */
  pre, blockquote, table, img { break-inside: avoid; }
  .katex-display, .katex, .katex-inline { break-inside: avoid; }
  pre { overflow-x: hidden; }
}
</style>
</head>
<body>${t.outerHTML}</body>
</html>`}function o(){document.querySelectorAll(`[data-pdf-download]`).forEach(n=>{if(n.dataset.pdfBound===`true`)return;n.dataset.pdfBound=`true`;let o=n.querySelector(`[data-pdf-button]`),s=n.querySelector(`[data-pdf-icon]`),c=n.querySelector(`[data-pdf-label]`),l=n.querySelector(`[data-pdf-error]`),u=n.querySelector(`[data-pdf-error-message]`);if(!o||!s||!c||!l||!u)return;let d=!1,f=e=>{d=e,o.disabled=e,s.className=e?`i-ri-loader-4-line animate-spin`:`i-ri-file-download-line`,c.textContent=e?`正在准备打印...`:`下载 PDF`},p=e=>{l.hidden=!e,l.style.display=e?`flex`:`none`,u.textContent=e??``};o.addEventListener(`click`,async()=>{if(d)return;f(!0),p();let o=null,s;try{let c=document.querySelector(`article.post.block`);if(!c)throw Error(`未找到文章内容`);let l=await e(),u=c.cloneNode(!0);i(c,u),t(u);for(let e of[`.pdf-download-area`,`ai-similar-posts`,`.ai-summary-card`])u.querySelectorAll(e).forEach(e=>e.remove());let d=a(n.dataset.title??document.title,u,l);if(o=window.open(`about:blank`,`print-${Date.now()}`),!o)throw Error(`弹窗被浏览器拦截，请允许本站弹出窗口后重试`);let p=new DOMParser().parseFromString(d,`text/html`);o.document.documentElement.innerHTML=p.documentElement.innerHTML,o.document.documentElement.lang=p.documentElement.lang,requestAnimationFrame(()=>{requestAnimationFrame(()=>{o&&r(o.document)})}),await new Promise(e=>{let t=()=>{if(!o)return e();if(Array.from(o.document.images).every(e=>e.complete)){s!==void 0&&window.clearTimeout(s),o.print(),e();return}window.setTimeout(t,200)};s=window.setTimeout(()=>{o?.print(),e()},8e3),window.setTimeout(t,400)}),window.setTimeout(()=>{o?.close(),f(!1)},800)}catch(e){p(e instanceof Error?e.message:`PDF 生成失败，请稍后重试`),console.error(`[DownloadPDF] 生成失败:`,e),s!==void 0&&window.clearTimeout(s),o?.close(),f(!1)}})})}document.addEventListener(`astro:page-load`,o),o();