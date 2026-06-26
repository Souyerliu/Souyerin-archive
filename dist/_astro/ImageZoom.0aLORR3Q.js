import{o as ge,a as ve,i as M}from"./if.BSZK1ef6.js";import{d as ue,c as fe,p as be,j as v,q as pe,u as ze,g as o,l as we,t as T,b as w,v as he,e as h,f as ke,i as E,s as k,h as a,a as W,r as D,n as V,k as xe}from"./custom-element.LXc0pPsm.js";import{s as Ee}from"./slot.FyTlHx_L.js";import{a as _e}from"./css.CH9wcItQ.js";import{s as N}from"./attributes.BtBqTLuQ.js";import{s as Ie}from"./class.C-8ZMDG4.js";import{b as X}from"./this.4gjUYIsb.js";let x=0,ee="",oe="";function Pe(c,d){return Math.max(0,d.innerWidth-c.documentElement.clientWidth)}function Le(c){const d=c.getComputedPaddingInlineEnd(),r=Number.parseFloat(d);return Number.isFinite(r)?r:0}function Se(c,d){const{body:r}=c;let s=!1;if(x===0){ee=r.style.overflow,oe=r.style.paddingInlineEnd;const m=Pe(c,d),b=Le(d);r.style.overflow="hidden",m>0&&(r.style.paddingInlineEnd=`${b+m}px`)}return x+=1,()=>{s||(s=!0,x=Math.max(0,x-1),!(x>0)&&(r.style.overflow=ee,r.style.paddingInlineEnd=oe))}}var Ae=E('<button type="button" class="image-zoom-nav image-zoom-nav-prev svelte-1yby8l6" aria-label="查看上一张图片">‹</button>'),Me=E('<img class="image-zoom-content svelte-1yby8l6" loading="eager" decoding="async"/>'),Ce=E('<p class="image-zoom-caption svelte-1yby8l6"> </p>'),Ye=E('<button type="button" class="image-zoom-nav image-zoom-nav-next svelte-1yby8l6" aria-label="查看下一张图片">›</button>'),Te=E('<div class="image-zoom-wrapper svelte-1yby8l6"><!></div> <dialog><!> <button type="button" class="image-zoom-close svelte-1yby8l6" aria-label="关闭图片预览">×</button> <!> <!> <!></dialog>',1);const We={hash:"svelte-1yby8l6",code:`image-zoom {display:block;margin:1.2rem auto;width:fit-content;max-width:100%;}.image-zoom-wrapper.svelte-1yby8l6 {display:block;max-width:100%;}image-zoom .image-zoom-trigger {cursor:zoom-in;transform-origin:center;transition:filter 0.2s ease,
      transform 0.2s ease;}image-zoom .image-zoom-trigger:hover {filter:brightness(0.96);transform:translateY(-1px) scale(1.01);}.image-zoom-overlay.svelte-1yby8l6 {position:fixed;inset:0;z-index:var(--z-fullscreen);display:grid;place-items:center;gap:0;width:100%;max-width:none;height:100%;max-height:none;border:0;margin:0;padding:2rem 1rem;box-sizing:border-box;background:var(--codeblock-overlay-bg, rgba(8, 10, 16, 0.72));backdrop-filter:blur(0.35rem);
    animation: svelte-1yby8l6-image-zoom-fade-in 220ms ease forwards;}.image-zoom-overlay.hidden.svelte-1yby8l6 {display:none;}.image-zoom-overlay.svelte-1yby8l6::backdrop {background:var(--codeblock-overlay-bg, rgba(8, 10, 16, 0.72));backdrop-filter:blur(0.35rem);}.image-zoom-overlay.closing.svelte-1yby8l6 {
    animation: svelte-1yby8l6-image-zoom-fade-out 220ms ease forwards;}.image-zoom-content.svelte-1yby8l6 {margin:0;max-width:min(92vw, 1100px);max-height:86vh;object-fit:contain;border-radius:0.5rem;box-shadow:0 0.75rem 2rem var(--grey-9-a15);cursor:zoom-out;
    animation: svelte-1yby8l6-image-zoom-scale-in 220ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;}.image-zoom-overlay.closing.svelte-1yby8l6 .image-zoom-content:where(.svelte-1yby8l6) {
    animation: svelte-1yby8l6-image-zoom-scale-out 220ms cubic-bezier(0.4, 0, 0.2, 1) forwards;}.image-zoom-close.svelte-1yby8l6 {position:absolute;top:1rem;right:1rem;width:2.4rem;height:2.4rem;border:0;border-radius:50%;background:rgba(17, 25, 40, 0.58);color:#fff;font-size:1.5rem;line-height:1;cursor:pointer;transition:background-color 0.2s ease,
      transform 0.2s ease;
    animation: svelte-1yby8l6-image-zoom-ui-in 220ms ease forwards;}.image-zoom-overlay.closing.svelte-1yby8l6 .image-zoom-close:where(.svelte-1yby8l6) {
    animation: svelte-1yby8l6-image-zoom-ui-out 220ms ease forwards;}.image-zoom-close.svelte-1yby8l6:hover {background:rgba(17, 25, 40, 0.8);transform:scale(1.06);}.image-zoom-nav.svelte-1yby8l6 {position:absolute;top:50%;width:2.75rem;height:2.75rem;border:0;border-radius:999px;background:rgba(17, 25, 40, 0.58);color:#fff;font-size:2rem;line-height:1;cursor:pointer;transform:translateY(-50%);transition:background-color 0.2s ease,
      transform 0.2s ease;
    animation: svelte-1yby8l6-image-zoom-ui-in 220ms ease forwards;}.image-zoom-nav.svelte-1yby8l6:hover {background:rgba(17, 25, 40, 0.8);transform:translateY(-50%) scale(1.06);}.image-zoom-nav-prev.svelte-1yby8l6 {left:max(1rem, calc(50vw - min(46vw, 550px) - 3.75rem));}.image-zoom-nav-next.svelte-1yby8l6 {right:max(1rem, calc(50vw - min(46vw, 550px) - 3.75rem));}.image-zoom-caption.svelte-1yby8l6 {margin:0.8rem 0 0;font-size:0.9rem;color:var(--grey-1);text-align:center;max-width:min(92vw, 1100px);line-height:1.5;
    animation: svelte-1yby8l6-image-zoom-ui-in 220ms ease forwards;}.image-zoom-overlay.closing.svelte-1yby8l6 .image-zoom-caption:where(.svelte-1yby8l6) {
    animation: svelte-1yby8l6-image-zoom-ui-out 220ms ease forwards;}.image-zoom-overlay.closing.svelte-1yby8l6 .image-zoom-nav:where(.svelte-1yby8l6) {
    animation: svelte-1yby8l6-image-zoom-ui-out 220ms ease forwards;}

  @keyframes svelte-1yby8l6-image-zoom-fade-in {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes svelte-1yby8l6-image-zoom-fade-out {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  @keyframes svelte-1yby8l6-image-zoom-scale-in {
    from {
      opacity: 0;
      transform: scale(0.94) translateY(10px);
    }

    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  @keyframes svelte-1yby8l6-image-zoom-scale-out {
    from {
      opacity: 1;
      transform: scale(1) translateY(0);
    }

    to {
      opacity: 0;
      transform: scale(0.94) translateY(10px);
    }
  }

  @keyframes svelte-1yby8l6-image-zoom-ui-in {
    from {
      opacity: 0;
      transform: translateY(-6px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes svelte-1yby8l6-image-zoom-ui-out {
    from {
      opacity: 1;
      transform: translateY(0);
    }

    to {
      opacity: 0;
      transform: translateY(-6px);
    }
  }

  @media (prefers-reduced-motion: reduce) {image-zoom .image-zoom-trigger,
    .image-zoom-close.svelte-1yby8l6,
    .image-zoom-nav.svelte-1yby8l6 {transition:none;}.image-zoom-overlay.svelte-1yby8l6,
    .image-zoom-overlay.closing.svelte-1yby8l6,
    .image-zoom-content.svelte-1yby8l6,
    .image-zoom-overlay.closing.svelte-1yby8l6 .image-zoom-content:where(.svelte-1yby8l6),
    .image-zoom-caption.svelte-1yby8l6,
    .image-zoom-overlay.closing.svelte-1yby8l6 .image-zoom-caption:where(.svelte-1yby8l6),
    .image-zoom-nav.svelte-1yby8l6,
    .image-zoom-overlay.closing.svelte-1yby8l6 .image-zoom-nav:where(.svelte-1yby8l6),
    .image-zoom-overlay.closing.svelte-1yby8l6 .image-zoom-close:where(.svelte-1yby8l6) {
      animation: none;}
  }`};function De(c,d){be(d,!0),_e(c,We);let r=v(null),s=v(null),m=v(!1),b=v(""),p=v(""),u=v(pe([])),f=v(0),_=null,q=null,l=null,z=v(!1);const te=220;let I=null;const O=()=>{I?.(),I=null},C=()=>{a(m,!1),a(z,!1),a(b,""),a(p,""),a(u,[],!0),a(f,0),l&&(clearTimeout(l),l=null),O()},P=()=>{if(!o(m)||o(z))return;const e=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:te;if(e===0){C();return}a(z,!0),l&&clearTimeout(l),l=setTimeout(()=>{C()},e)},Y=()=>{const e=o(u)[o(f)];e&&(a(b,e.src,!0),a(p,e.alt,!0))},ne=e=>{const t=e.closest("[data-image-zoom-gallery]");return(t?Array.from(t.querySelectorAll("image-zoom img")):[e]).map(i=>({element:i,src:i.currentSrc||i.src,alt:i.alt||""})).filter(i=>!!i.src)},B=(e,t)=>{t?.preventDefault(),t?.stopPropagation();const n=ne(e);n.length!==0&&(l&&(clearTimeout(l),l=null),a(z,!1),a(u,n.map(({src:i,alt:A})=>({src:i,alt:A})),!0),a(f,Math.max(0,n.findIndex(i=>i.element===e)),!0),Y(),a(m,!0),typeof document<"u"&&typeof window<"u"&&!I&&(I=Se(document,{innerWidth:window.innerWidth,getComputedPaddingInlineEnd:()=>window.getComputedStyle(document.body).paddingInlineEnd})))},L=()=>o(u).length>1,R=e=>{e?.preventDefault(),e?.stopPropagation(),L()&&(a(f,(o(f)-1+o(u).length)%o(u).length),Y())},j=e=>{e?.preventDefault(),e?.stopPropagation(),L()&&(a(f,(o(f)+1)%o(u).length),Y())};ze(()=>{if(!(!o(s)||typeof o(s).showModal!="function")){if(o(m)&&!o(s).open){o(s).showModal();return}!o(m)&&o(s).open&&o(s).close()}});const F=()=>{_?.(),_=null;const n=(o(r)?.querySelector("slot")?.assignedElements({flatten:!0})??[]).find(g=>g.tagName==="IMG");if(!n)return;n.classList.add("image-zoom-trigger");const i=n.hasAttribute("role"),A=n.hasAttribute("tabindex");i||n.setAttribute("role","button"),A||n.setAttribute("tabindex","0");const Q=g=>{B(n,g)},U=g=>{(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),B(n,g))};n.addEventListener("click",Q),n.addEventListener("keydown",U),_=()=>{n.removeEventListener("click",Q),n.removeEventListener("keydown",U),n.classList.remove("image-zoom-trigger"),i||n.removeAttribute("role"),A||n.removeAttribute("tabindex")}},ae=e=>{const t=e.target;t?.closest(".image-zoom-content")||t?.closest(".image-zoom-close")||t?.closest(".image-zoom-nav")||P()},K=e=>{if(o(m)){if(e.key==="Escape"){P();return}if(e.key==="ArrowLeft"){R(e);return}e.key==="ArrowRight"&&j(e)}};ge(()=>{F();const e=o(r)?.querySelector("slot");if(e){const t=()=>{F()};e.addEventListener("slotchange",t),q=()=>{e.removeEventListener("slotchange",t)}}typeof window<"u"&&window.addEventListener("keydown",K)}),ve(()=>{q?.(),_?.(),l&&(clearTimeout(l),l=null),typeof window<"u"&&window.removeEventListener("keydown",K),O()});var G=Te(),S=we(G),re=W(S);Ee(re,d,"default",{}),D(S),X(S,e=>a(r,e),()=>o(r));var y=k(S,2),Z=W(y);{var ie=e=>{var t=Ae();w("click",t,R),h(e,t)},le=V(()=>L());M(Z,e=>{o(le)&&e(ie)})}var $=k(Z,2),H=k($,2);{var se=e=>{var t=Me();T(()=>{N(t,"src",o(b)),N(t,"alt",o(p))}),h(e,t)};M(H,e=>{o(b)&&e(se)})}var J=k(H,2);{var me=e=>{var t=Ce(),n=W(t,!0);D(t),T(()=>xe(n,o(p))),h(e,t)};M(J,e=>{o(p)&&e(me)})}var ce=k(J,2);{var de=e=>{var t=Ye();w("click",t,j),h(e,t)},ye=V(()=>L());M(ce,e=>{o(ye)&&e(de)})}D(y),X(y,e=>a(s,e),()=>o(s)),T(()=>{Ie(y,1,`image-zoom-overlay ${o(m)?"":"hidden"} ${o(z)?"closing":""}`,"svelte-1yby8l6"),N(y,"aria-label",o(p)||"图片预览")}),w("click",y,ae),he("close",y,()=>{(o(m)||o(z))&&C()}),w("keydown",y,e=>{(e.key==="Escape"||e.key==="Enter"||e.key===" ")&&(e.preventDefault(),P())}),w("click",$,P),h(c,G),ke()}ue(["click","keydown"]);customElements.define("image-zoom",fe(De,{},["default"],[],{mode:"open"}));export{De as default};
