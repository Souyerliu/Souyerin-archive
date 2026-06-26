import{o as ae,a as se,i as A}from"./if.BSZK1ef6.js";import{d as ie,c as le,p as ce,u as de,s as b,a as l,t as _,b as C,e as L,f as me,g as e,h as o,i as M,j as s,r as c,k as pe}from"./custom-element.LXc0pPsm.js";import{s as ue}from"./slot.FyTlHx_L.js";import{a as be}from"./css.CH9wcItQ.js";import{s as X}from"./attributes.BtBqTLuQ.js";import{s as B}from"./class.C-8ZMDG4.js";import{s as z}from"./style.D0FOYbFZ.js";import{b as H}from"./this.4gjUYIsb.js";const P={src:"/_astro/arrow-down-s-line.C4R9Le1k.svg"},U={src:"/_astro/arrow-up-s-line.iUkzHvps.svg"},j={src:"/_astro/check-fill.Di9c9L1U.svg"},I={src:"/_astro/file-copy-fill.DeSCJhyB.svg"},K={src:"/_astro/fullscreen-line.BkUoy_24.svg"},Y={src:"/_astro/fullscreen-exit-line.DBtvXyzK.svg"};var fe=M('<span class="lang-text svelte-ipr7k2"> </span>'),ve=M('<button class="collapse-btn svelte-ipr7k2"></button>'),ke=M(`<div><div class="header svelte-ipr7k2"><div class="controls svelte-ipr7k2"><div class="dot red svelte-ipr7k2"></div> <div class="dot yellow svelte-ipr7k2"></div> <div class="dot green svelte-ipr7k2"></div> <!></div> <div class="actions svelte-ipr7k2"><button class="action-btn svelte-ipr7k2" aria-label="Copy code"></button> <button class="action-btn svelte-ipr7k2"></button></div></div> <div><div class="content-wrapper svelte-ipr7k2" style="font-family: 'Maple Mono', 'Courier New', monospace;"><!></div> <!></div></div>`);const ge={hash:"svelte-ipr7k2",code:`\r
  /* 基础布局 */
  @font-face {font-family:"Maple Mono";src:url("../assets/fonts/MapleMono-CN-Regular.ttf") format("truetype");font-display:swap;
  }.codeblock.svelte-ipr7k2 {margin:1.5rem 0;border-radius:0.5rem;overflow:hidden;box-shadow:var(--codeblock-shadow);font-family:"Maple Mono", "Courier New", monospace;}.dark.codeblock.svelte-ipr7k2 {box-shadow:none;}\r
\r
  /* Header 样式 */.header.svelte-ipr7k2 {display:flex;justify-content:space-between;align-items:center;padding:0.5rem 1rem;background-color:var(--surface-code-header);min-height:1.5rem;border-top-right-radius:0.5rem;border-top-left-radius:0.5rem;}.controls.svelte-ipr7k2 {display:flex;align-items:center;gap:0.6rem;margin-left:0.8125rem;}.dot.svelte-ipr7k2 {width:0.9375rem;height:0.9375rem;border-radius:50%;}.red.svelte-ipr7k2 {background:var(--codeblock-dot-red);}.yellow.svelte-ipr7k2 {background:var(--codeblock-dot-yellow);}.green.svelte-ipr7k2 {background:var(--codeblock-dot-green);}.lang-text.svelte-ipr7k2 {margin-left:0.75rem;font-size:1rem;color:var(--text-color-muted);text-transform:uppercase;}.actions.svelte-ipr7k2 {display:flex;flex-direction:row;gap:0.75rem;padding-right:1.5rem;color:var(--text-color-muted);}.action-btn.svelte-ipr7k2 {border:none;cursor:pointer;background-color:var(--codeblock-action-color);width:1.1rem;height:1.1rem;mask-size:contain;mask-repeat:no-repeat;mask-position:center;-webkit-mask-size:contain;-webkit-mask-repeat:no-repeat;-webkit-mask-position:center;transition:background-color 0.2s;}.action-btn.svelte-ipr7k2:hover {background-color:var(--codeblock-action-hover-color);}\r
\r
  /* 内容容器 - 支持折叠 */.content-container.svelte-ipr7k2 {position:relative;transition:max-height 0.3s ease-in-out;}.content-container.collapsed.svelte-ipr7k2 {max-height:400px;overflow:hidden;}.content-container.collapsed.svelte-ipr7k2::after {content:"";position:absolute;bottom:0;left:0;right:0;height:100px;background:linear-gradient(\r
      to bottom,\r
      transparent,\r
      var(--codeblock-collapse-gradient-end)\r
    );pointer-events:none;}.collapse-btn.svelte-ipr7k2 {position:absolute;bottom:1rem;left:50%;transform:translateX(-50%);background-color:var(--codeblock-action-color);border:1px solid var(--border-color-muted);border-radius:50%;width:2rem;height:2rem;mask-size:1.75rem;mask-repeat:no-repeat;mask-position:center;-webkit-mask-size:1.25rem;-webkit-mask-repeat:no-repeat;-webkit-mask-position:center;cursor:pointer;transition:all 0.2s ease;box-shadow:var(--codeblock-button-shadow);z-index:var(--z-dropdown);\r
    animation: svelte-ipr7k2-float 2s ease-in-out infinite;scale:1.5;}.collapse-btn.svelte-ipr7k2:hover {background-color:var(--codeblock-action-hover-color);transform:translateX(-50%) scale(1.1);box-shadow:var(--codeblock-button-shadow-hover);}\r
\r
  /* 飘动动画 */\r
  @keyframes svelte-ipr7k2-float {\r
    0%,\r
    100% {\r
      transform: translateX(-50%) translateY(0);\r
    }\r
    50% {\r
      transform: translateX(-50%) translateY(-6px);\r
    }\r
  }.collapse-btn.svelte-ipr7k2:hover {animation-play-state:paused;}\r
\r
  /* 核心：处理插槽内的样式 */code-block pre * {font-family:"Maple Mono", "Courier New", Courier, monospace;font-size:0.925rem;line-height:1.25rem;line-break:anywhere;white-space:break-spaces;}code-block pre {padding:0.925rem;margin:0;border-bottom-right-radius:0.5rem;border-bottom-left-radius:0.5rem;background-color:var(--surface-code) !important;overflow-x:auto;}html[data-theme="dark"] code-block span {color:var(--shiki-dark) !important;}\r
\r
  /* 行号样式 */code-block .line {color:inherit;text-indent:-2.5rem;padding-left:2.5rem;display:block;min-height:1.25rem;contain-intrinsic-height:24px;transition:background-color 0.15s ease,\r
      opacity 0.15s ease,\r
      box-shadow 0.15s ease;}code-block .line:hover {background-color:var(--line-hover-bg);}code-block code {counter-reset:step;counter-increment:step 0;display:flex;flex-direction:column;}code-block code .line::before {content:counter(step);counter-increment:step;width:1rem;margin-right:1.5rem;display:inline-block;text-align:right;color:var(--text-color-muted);}\r
\r
  /* 行高亮（highlight + meta highlight 复用同一个 class） */code-block .line.highlighted {background-color:var(--cb-line-highlight-bg);box-shadow:inset 0.25rem 0 0 var(--cb-line-highlight-border);}\r
\r
  /* Diff（增删行） */code-block .line.diff.add {background-color:var(--cb-diff-add-bg);box-shadow:inset 0.25rem 0 0 var(--cb-diff-add-border);}code-block .line.diff.remove {background-color:var(--cb-diff-remove-bg);box-shadow:inset 0.25rem 0 0 var(--cb-diff-remove-border);}\r
\r
  /* 不占用额外 DOM 的情况下，用行号前缀标识 + / -（避免覆盖 .line::before 计数逻辑） */code-block code .line.diff.add::before {content:counter(step) " +";color:var(--cb-diff-add-border);}code-block code .line.diff.remove::before {content:counter(step) " -";color:var(--cb-diff-remove-border);}\r
\r
  /* Focus（聚焦显示）：当存在 focused 行时，其他行整体淡化 */code-block pre.has-focused .line {opacity:var(--cb-focus-dim-opacity);}code-block pre.has-focused .line.focused {opacity:1;background-color:var(--cb-focus-bg);box-shadow:inset 0.25rem 0 0 var(--cb-focus-border);}\r
\r
  /* Error / Warning（基于 transformerNotationErrorLevel） */code-block .line.highlighted.error {background-color:var(--cb-error-bg);box-shadow:inset 0.25rem 0 0 var(--cb-error-border);}code-block .line.highlighted.warning {background-color:var(--cb-warning-bg);box-shadow:inset 0.25rem 0 0 var(--cb-warning-border);}code-block .highlighted-word {background-color:var(--cb-highlighted-word-bg);border-radius:0.2rem;padding:0.05rem 0.15rem;}code-block .dark {box-shadow:none;}\r
\r
  /* 全屏样式 */.fullscreen.svelte-ipr7k2 {position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;margin:0;z-index:var(--z-fullscreen);border-radius:0;\r
    animation: svelte-ipr7k2-fullscreenIn 0.3s ease-out;display:flex;flex-direction:column;background-color:var(--codeblock-overlay-bg);backdrop-filter:blur(8px);padding:2rem;box-sizing:border-box;}.fullscreen.svelte-ipr7k2 .header:where(.svelte-ipr7k2) {border-radius:0.5rem 0.5rem 0 0;}.fullscreen.svelte-ipr7k2 .content-container:where(.svelte-ipr7k2) {flex:1;overflow:auto;max-height:none !important;border-radius:0 0 0.5rem 0.5rem;}.fullscreen.svelte-ipr7k2 .content-container.collapsed:where(.svelte-ipr7k2) {max-height:none !important;}.fullscreen.svelte-ipr7k2 .content-container:where(.svelte-ipr7k2)::after {display:none;}.fullscreen.svelte-ipr7k2 pre {border-radius:0 0 0.5rem 0.5rem !important;}\r
\r
  @keyframes svelte-ipr7k2-fullscreenIn {\r
    from {\r
      opacity: 0;\r
      transform: scale(0.95);\r
    }\r
    to {\r
      opacity: 1;\r
      transform: scale(1);\r
    }\r
  }.exiting.svelte-ipr7k2 {\r
    animation: svelte-ipr7k2-fullscreenOut 0.3s ease-in forwards;}\r
\r
  @keyframes svelte-ipr7k2-fullscreenOut {\r
    from {\r
      opacity: 1;\r
      transform: scale(1);\r
    }\r
    to {\r
      opacity: 0;\r
      transform: scale(0.95);\r
    }\r
  }`};function he(S,F){ce(F,!0),be(S,ge);let m=s(null),f=s(!1),k=s(""),D=s(!1),i=s(!1),N=s(!1),a=s(!1),g=s(!1),$=s(null);const J=15;async function W(){const n=(e(m)?.querySelector("slot")?.assignedElements({flatten:!0})??[]).find(d=>d.tagName==="PRE");if(!n)return;const u=n.textContent??"";try{await navigator.clipboard.writeText(u),o(f,!0),setTimeout(()=>{o(f,!1)},3e3)}catch(d){console.error("Failed to copy:",d)}}function G(){const n=(e(m)?.querySelector("slot")?.assignedElements({flatten:!0})??[]).find(d=>d.tagName==="PRE");return n?n.getAttribute("data-language")??"":""}function Q(){const n=(e(m)?.querySelector("slot")?.assignedElements({flatten:!0})??[]).find(ne=>ne.tagName==="PRE");if(!n)return;const u=n.querySelector("code");if(!u)return;u.querySelectorAll(".line").length>J&&(o(N,!0),o(i,!0))}function V(){o(i,!e(i))}function O(){e(a)?(o(g,!0),setTimeout(()=>{o(a,!1),o(g,!1),typeof document<"u"&&(document.body.style.overflow="")},300)):(o(a,!0),typeof document<"u"&&(document.body.style.overflow="hidden"))}function R(r){r.key==="Escape"&&e(a)&&O()}ae(async()=>{o(k,G(),!0),setTimeout(()=>{Q()},100),typeof window<"u"&&window.addEventListener("keydown",R)}),se(()=>{typeof window<"u"&&window.removeEventListener("keydown",R),typeof document<"u"&&(document.body.style.overflow="")});const T=()=>{const r=document.documentElement.dataset.theme;o(D,r==="dark")};de(()=>{T();const r=new MutationObserver(T);return r.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>r.disconnect()});var p=ke(),h=l(p),w=l(h),Z=b(l(w),6);{var ee=r=>{var t=fe(),n=l(t,!0);c(t),_(()=>pe(n,e(k))),L(r,t)};A(Z,r=>{e(k)&&r(ee)})}c(w);var q=b(w,2),y=l(q),x=b(y,2);c(q),c(h);var E=b(h,2),v=l(E),re=l(v);ue(re,F,"default",{}),c(v),H(v,r=>o(m,r),()=>e(m));var oe=b(v,2);{var te=r=>{var t=ve();_(()=>{z(t,`mask-image: url(${(e(i)?P.src:U.src)??""}); -webkit-mask-image: url(${(e(i)?P.src:U.src)??""});`),X(t,"aria-label",e(i)?"Expand code":"Collapse code")}),C("click",t,V),L(r,t)};A(oe,r=>{e(N)&&!e(a)&&r(te)})}c(E),c(p),H(p,r=>o($,r),()=>e($)),_(()=>{B(p,1,`codeblock ${e(D)?"dark":""} ${e(a)?"fullscreen":""} ${e(g)?"exiting":""}`,"svelte-ipr7k2"),z(y,`mask-image: url(${(e(f)?j.src:I.src)??""}); -webkit-mask-image: url(${(e(f)?j.src:I.src)??""});`),z(x,`mask-image: url(${(e(a)?Y.src:K.src)??""}); -webkit-mask-image: url(${(e(a)?Y.src:K.src)??""});`),X(x,"aria-label",e(a)?"Exit fullscreen":"Enter fullscreen"),B(E,1,`content-container ${e(i)?"collapsed":""}`,"svelte-ipr7k2")}),C("click",y,W),C("click",x,O),L(S,p),me()}ie(["click"]);customElements.define("code-block",le(he,{},["default"],[],{mode:"open"}));export{he as default};
