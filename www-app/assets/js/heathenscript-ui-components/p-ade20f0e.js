import{C as e,p as o,w as t,a as n,d as s,N as r}from"./p-f6d389c2.js";const a="undefined"!=typeof Deno,p=!(a||"undefined"==typeof global||"function"!=typeof require||!global.process||"string"!=typeof __filename||global.origin&&"string"==typeof global.origin),c=(a&&Deno,p?process:a&&Deno,p?process:a&&Deno,()=>e&&e.supports&&e.supports("color","var(--c)")?n():__sc_import_heathenscript_ui_components("./p-9fd956ed.js").then(()=>(o.o=t.__cssshim)?(!1).i():0)),i=()=>{o.o=t.__cssshim;const e=Array.from(s.querySelectorAll("script")).find(e=>RegExp(`/${r}(\\.esm)?\\.js($|\\?|#)`).test(e.src)||e.getAttribute("data-stencil-namespace")===r),a=e["data-opts"]||{};return"onbeforeload"in e&&!history.scrollRestoration?{then(){}}:(a.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,t.location.href)).href,_(a.resourcesUrl,e),t.customElements?n(a):__sc_import_heathenscript_ui_components("./p-87e7fdb7.js").then(()=>a))},_=(e,o)=>{const n="__sc_import_"+r.replace(/\s|-/g,"_");try{t[n]=Function("w","return import(w);//"+Math.random())}catch(a){const r=new Map;t[n]=a=>{const p=new URL(a,e).href;let c=r.get(p);if(!c){const e=s.createElement("script");e.type="module",e.crossOrigin=o.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${p}'; window.${n}.m = m;`],{type:"application/javascript"})),c=new Promise(o=>{e.onload=()=>{o(t[n].m),e.remove()}}),r.set(p,c),s.head.appendChild(e)}return c}}};export{c as a,i as p}