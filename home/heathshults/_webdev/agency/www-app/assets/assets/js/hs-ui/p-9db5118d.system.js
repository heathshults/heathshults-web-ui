System.register(["./p-f8af1ee2.system.js"],(function(e,r){"use strict";var t,n,o,s,i,c;return{setters:[function(e){t=e.C;n=e.p;o=e.w;s=e.a;i=e.d;c=e.N}],execute:function(){var a=function(){};var u=typeof Deno!=="undefined";var f=!u&&typeof global!=="undefined"&&typeof require==="function"&&!!global.process&&typeof __filename==="string"&&(!global.origin||typeof global.origin!=="string");var p=u&&Deno.build.os==="windows";var l=f?process.cwd:u?Deno.cwd:function(){return"/"};var m=f?process.exit:u?Deno.exit:a;var d=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var v=e("a",(function(){if(!(t&&t.supports&&t.supports("color","var(--c)"))){return r.import("./p-81ed6719.system.js").then((function(){if(n.$cssShim$=o.__cssshim){return n.$cssShim$.i()}else{return 0}}))}return s()}));var w=e("p",(function(){{n.$cssShim$=o.__cssshim}var e=Array.from(i.querySelectorAll("script")).find((function(e){return new RegExp("/"+c+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===c}));var t=e["data-opts"]||{};if("onbeforeload"in e&&!history.scrollRestoration){return{then:function(){}}}{t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,o.location.href)).href;{g(t.resourcesUrl,e)}if(!o.customElements){return r.import("./p-e38d7f8d.system.js").then((function(){return t}))}}return s(t)}));var g=function(e,r){var t=d(c);try{o[t]=new Function("w","return import(w);//"+Math.random())}catch(s){var n=new Map;o[t]=function(s){var c=new URL(s,e).href;var a=n.get(c);if(!a){var u=i.createElement("script");u.type="module";u.crossOrigin=r.crossOrigin;u.src=URL.createObjectURL(new Blob(["import * as m from '"+c+"'; window."+t+".m = m;"],{type:"application/javascript"}));a=new Promise((function(e){u.onload=function(){e(o[t].m);u.remove()}}));n.set(c,a);i.head.appendChild(u)}return a}}}}}}));