const t="heathenscript-ui-components";let e,n,l,o=!1,s=!1,c=!1,r=0,i=!1;const a="undefined"!=typeof window?window:{},f=a.CSS,u=a.document||{head:{}},p={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l)},$=(()=>(u.head.attachShadow+"").indexOf("[native")>-1)(),d=t=>Promise.resolve(t),h=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),m=(t,e,n)=>{n&&n.map(([n,l,o])=>{const s=b(t,n),c=y(e,o),r=w(n);p.ael(s,l,c,r),(e.o=e.o||[]).push(()=>p.rel(s,l,c,r))})},y=(t,e)=>n=>{256&t.t?t.s[e](n):(t.i=t.i||[]).push([e,n])},b=(t,e)=>4&e?u:8&e?a:t,w=t=>0!=(2&t),_=new WeakMap,g=t=>"sc-"+t.u,j={},v=t=>"object"==(t=typeof t)||"function"===t,k=(t,e,...n)=>{let l=null,o=null,s=!1,c=!1,r=[];const i=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof t&&!v(l))&&(l+=""),s&&c?r[r.length-1].p+=l:r.push(s?M(null,l):l),c=s)};if(i(n),e){e.name&&(o=e.name);{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}}const a=M(t,null);return a.$=e,r.length>0&&(a.h=r),a.m=o,a},M=(t,e)=>({t:0,_:t,p:e,g:null,h:null,$:null,m:null}),S={},O=(t,e,n,l,o,s)=>{if(n!==l){let r=it(t,e),i=e.toLowerCase();if("class"===e){const e=t.classList,o=R(n),s=R(l);e.remove(...o.filter(t=>t&&!s.includes(t))),e.add(...s.filter(t=>t&&!o.includes(t)))}else if("style"===e){for(const e in n)l&&null!=l[e]||(e.includes("-")?t.style.removeProperty(e):t.style[e]="");for(const e in l)n&&l[e]===n[e]||(e.includes("-")?t.style.setProperty(e,l[e]):t.style[e]=l[e])}else if(r||"o"!==e[0]||"n"!==e[1]){const i=v(l);if((r||i&&null!==l)&&!o)try{if(t.tagName.includes("-"))t[e]=l;else{let o=null==l?"":l;"list"===e?r=!1:null!=n&&t[e]==o||(t[e]=o)}}catch(c){}null==l||!1===l?!1===l&&""!==t.getAttribute(e)||t.removeAttribute(e):(!r||4&s||o)&&!i&&t.setAttribute(e,l=!0===l?"":l)}else e="-"===e[2]?e.slice(3):it(a,i)?i.slice(2):i[2]+e.slice(3),n&&p.rel(t,e,n,!1),l&&p.ael(t,e,l,!1)}},C=/\s/,R=t=>t?t.split(C):[],P=(t,e,n,l)=>{const o=11===e.g.nodeType&&e.g.host?e.g.host:e.g,s=t&&t.$||j,c=e.$||j;for(l in s)l in c||O(o,l,s[l],void 0,n,e.t);for(l in c)O(o,l,s[l],c[l],n,e.t)},T=(t,s,r,i)=>{let a,f,p,$=s.h[r],d=0;if(o||(c=!0,"slot"===$._&&(e&&i.classList.add(e+"-s"),$.t|=$.h?2:1)),null!==$.p)a=$.g=u.createTextNode($.p);else if(1&$.t)a=$.g=u.createTextNode("");else if(a=$.g=u.createElement(2&$.t?"slot-fb":$._),P(null,$,!1),null!=e&&a["s-si"]!==e&&a.classList.add(a["s-si"]=e),$.h)for(d=0;d<$.h.length;++d)f=T(t,$,d,a),f&&a.appendChild(f);return a["s-hn"]=l,3&$.t&&(a["s-sr"]=!0,a["s-cr"]=n,a["s-sn"]=$.m||"",p=t&&t.h&&t.h[r],p&&p._===$._&&t.g&&U(t.g,!1)),a},U=(t,e)=>{p.t|=1;const n=t.childNodes;for(let o=n.length-1;o>=0;o--){const t=n[o];t["s-hn"]!==l&&t["s-ol"]&&(N(t).insertBefore(t,L(t)),t["s-ol"].remove(),t["s-ol"]=void 0,c=!0),e&&U(t,e)}p.t&=-2},W=(t,e,n,o,s,c)=>{let r,i=t["s-cr"]&&t["s-cr"].parentNode||t;for(i.shadowRoot&&i.tagName===l&&(i=i.shadowRoot);s<=c;++s)o[s]&&(r=T(null,n,s,t),r&&(o[s].g=r,i.insertBefore(r,L(e))))},x=(t,e,n,l,o)=>{for(;e<=n;++e)(l=t[e])&&(s=!0,(o=l.g)["s-ol"]?o["s-ol"].remove():U(o,!0),o.remove())},E=(t,e)=>t._===e._&&("slot"!==t._||t.m===e.m),L=t=>t&&t["s-ol"]||t,N=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,A=(t,e)=>{const n=e.g=t.g,l=t.h,o=e.h,s=e.p;let c;null===s?("slot"===e._||P(t,e,!1),null!==l&&null!==o?((t,e,n,l)=>{let o,s=0,c=0,r=e.length-1,i=e[0],a=e[r],f=l.length-1,u=l[0],p=l[f];for(;s<=r&&c<=f;)null==i?i=e[++s]:null==a?a=e[--r]:null==u?u=l[++c]:null==p?p=l[--f]:E(i,u)?(A(i,u),i=e[++s],u=l[++c]):E(a,p)?(A(a,p),a=e[--r],p=l[--f]):E(i,p)?("slot"!==i._&&"slot"!==p._||U(i.g.parentNode,!1),A(i,p),t.insertBefore(i.g,a.g.nextSibling),i=e[++s],p=l[--f]):E(a,u)?("slot"!==i._&&"slot"!==p._||U(a.g.parentNode,!1),A(a,u),t.insertBefore(a.g,i.g),a=e[--r],u=l[++c]):(o=T(e&&e[c],n,c,t),u=l[++c],o&&N(i.g).insertBefore(o,L(i.g)));s>r?W(t,null==l[f+1]?null:l[f+1].g,n,l,c,f):c>f&&x(e,s,r)})(n,l,e,o):null!==o?(null!==t.p&&(n.textContent=""),W(n,null,e,o,0,o.length-1)):null!==l&&x(l,0,l.length-1)):(c=n["s-cr"])?c.parentNode.textContent=s:t.p!==s&&(n.data=s)},F=t=>{let e,n,l,o,s,c,r=t.childNodes;for(n=0,l=r.length;n<l;n++)if(e=r[n],1===e.nodeType){if(e["s-sr"])for(s=e["s-sn"],e.hidden=!1,o=0;o<l;o++)if(r[o]["s-hn"]!==e["s-hn"])if(c=r[o].nodeType,""!==s){if(1===c&&s===r[o].getAttribute("slot")){e.hidden=!0;break}}else if(1===c||3===c&&""!==r[o].textContent.trim()){e.hidden=!0;break}F(e)}},q=[],H=t=>{let e,n,l,o,c,r,i=0,a=t.childNodes,f=a.length;for(;i<f;i++){if(e=a[i],e["s-sr"]&&(n=e["s-cr"]))for(l=n.parentNode.childNodes,o=e["s-sn"],r=l.length-1;r>=0;r--)n=l[r],n["s-cn"]||n["s-nr"]||n["s-hn"]===e["s-hn"]||(V(n,o)?(c=q.find(t=>t.j===n),s=!0,n["s-sn"]=n["s-sn"]||o,c?c.v=e:q.push({v:e,j:n}),n["s-sr"]&&q.map(t=>{V(t.j,n["s-sn"])&&(c=q.find(t=>t.j===n),c&&!t.v&&(t.v=c.v))})):q.some(t=>t.j===n)||q.push({j:n}));1===e.nodeType&&H(e)}},V=(t,e)=>1===t.nodeType?null===t.getAttribute("slot")&&""===e||t.getAttribute("slot")===e:t["s-sn"]===e||""===e,z=t=>st(t).k,B=(t,e,n)=>{const l=z(t);return{emit:t=>D(l,e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t})}},D=(t,e,n)=>{const l=new CustomEvent(e,n);return t.dispatchEvent(l),l},G=(t,e)=>{e&&!t.M&&e["s-p"]&&e["s-p"].push(new Promise(e=>t.M=e))},I=(t,e)=>{if(t.t|=16,!(4&t.t))return G(t,t.S),_t(()=>J(t,e));t.t|=512},J=(t,e)=>{const n=t.s;let l;return e?(t.t|=256,t.i&&(t.i.map(([t,e])=>Z(n,t,e)),t.i=null),l=Z(n,"componentWillLoad")):l=Z(n,"componentWillUpdate"),tt(l,()=>K(t,n,e))},K=(t,r,i)=>{const a=t.k,f=a["s-rc"];i&&(t=>{const e=t.O,n=t.k,l=e.t,o=((t,e)=>{let n=g(e),l=pt.get(n);if(t=11===t.nodeType?t:u,l)if("string"==typeof l){let e,o=_.get(t=t.head||t);o||_.set(t,o=new Set),o.has(n)||(e=u.createElement("style"),e.innerHTML=l,t.insertBefore(e,t.querySelector("link")),o&&o.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n})($&&n.shadowRoot?n.shadowRoot:n.getRootNode(),e);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(t),((t,r)=>{const i=t.k,a=t.O,f=t.C||M(null,null),d=(t=>t&&t._===S)(r)?r:k(null,null,r);if(l=i.tagName,d._=null,d.t|=4,t.C=d,d.g=f.g=i.shadowRoot||i,e=i["s-sc"],n=i["s-cr"],o=$&&0!=(1&a.t),s=!1,A(f,d),p.t|=1,c){let t,e,n,l,o,s;H(d.g);let c=0;for(;c<q.length;c++)t=q[c],e=t.j,e["s-ol"]||(n=u.createTextNode(""),n["s-nr"]=e,e.parentNode.insertBefore(e["s-ol"]=n,e));for(c=0;c<q.length;c++)if(t=q[c],e=t.j,t.v){for(l=t.v.parentNode,o=t.v.nextSibling,n=e["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===e["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==e.parentNode||e.nextSibling!==o)&&e!==o&&(!e["s-hn"]&&e["s-ol"]&&(e["s-hn"]=e["s-ol"].parentNode.nodeName),l.insertBefore(e,o))}else 1===e.nodeType&&(e.hidden=!0)}s&&F(d.g),p.t&=-2,q.length=0})(t,Q(t,r)),f&&(f.map(t=>t()),a["s-rc"]=void 0);{const e=a["s-p"],n=()=>X(t);0===e.length?n():(Promise.all(e).then(n),t.t|=4,e.length=0)}},Q=(t,e)=>{try{e=e.render(),t.t&=-17,t.t|=2}catch(n){at(n)}return e},X=t=>{const e=t.k,n=t.S;64&t.t||(t.t|=64,et(e),t.R(e),n||Y()),t.P(e),t.M&&(t.M(),t.M=void 0),512&t.t&&wt(()=>I(t,!1)),t.t&=-517},Y=()=>{et(u.documentElement),p.t|=2,wt(()=>D(a,"appload",{detail:{namespace:"heathenscript-ui-components"}}))},Z=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(l){at(l)}},tt=(t,e)=>t&&t.then?t.then(e):e(),et=t=>t.classList.add("hydrated"),nt=(t,e,n)=>{if(e.T){t.watchers&&(e.U=t.watchers);const l=Object.entries(e.T),o=t.prototype;if(l.map(([t,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(o,t,{get(){return((t,e)=>st(this).W.get(e))(0,t)},set(n){((t,e,n,l)=>{const o=st(this),s=o.W.get(e),c=o.t,r=o.s;if(n=((t,e)=>null==t||v(t)?t:4&e?"false"!==t&&(""===t||!!t):2&e?parseFloat(t):1&e?t+"":t)(n,l.T[e][0]),!(8&c&&void 0!==s||n===s)&&(o.W.set(e,n),r)){if(l.U&&128&c){const t=l.U[e];t&&t.map(t=>{try{r[t](n,s,e)}catch(l){at(l)}})}2==(18&c)&&I(o,!1)}})(0,t,n,e)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(o,t,{value(...e){const n=st(this);return n.L.then(()=>n.s[t](...e))}})}),1&n){const e=new Map;o.attributeChangedCallback=function(t,n,l){p.jmp(()=>{const n=e.get(t);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},t.observedAttributes=l.filter(([t,e])=>15&e[0]).map(([t,n])=>{const l=n[1]||t;return e.set(l,t),l})}}return t},lt=(t,e={})=>{const n=[],l=e.exclude||[],o=a.customElements,s=u.head,c=s.querySelector("meta[charset]"),r=u.createElement("style"),i=[];let f,d=!0;Object.assign(p,e),p.l=new URL(e.resourcesUrl||"./",u.baseURI).href,e.syncQueue&&(p.t|=4),t.map(t=>t[1].map(e=>{const s={t:e[0],u:e[1],T:e[2],N:e[3]};s.T=e[2],s.N=e[3],s.U={},!$&&1&s.t&&(s.t|=8);const c=s.u,r=class extends HTMLElement{constructor(t){super(t),rt(t=this,s),1&s.t&&($?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t))}connectedCallback(){f&&(clearTimeout(f),f=null),d?i.push(this):p.jmp(()=>(t=>{if(0==(1&p.t)){const e=st(t),n=e.O,l=()=>{};if(1&e.t)m(t,e,n.N);else{e.t|=1,12&n.t&&(t=>{const e=t["s-cr"]=u.createComment("");e["s-cn"]=!0,t.insertBefore(e,t.firstChild)})(t);{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){G(e,e.S=n);break}}n.T&&Object.entries(n.T).map(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),wt(()=>(async(t,e,n,l,o)=>{if(0==(32&e.t)){e.t|=32;{if((o=ut(n)).then){const t=()=>{};o=await o,t()}o.isProxied||(n.U=o.watchers,nt(o,n,2),o.isProxied=!0);const t=()=>{};e.t|=8;try{new o(e)}catch(r){at(r)}e.t&=-9,e.t|=128,t()}if(o.style){let t=o.style;const e=g(n);if(!pt.has(e)){const l=()=>{};8&n.t&&(t=await __sc_import_heathenscript_ui_components("./p-3833d40d.js").then(n=>n.scopeCss(t,e,!1))),((t,e,n)=>{let l=pt.get(t);h&&n?(l=l||new CSSStyleSheet,l.replace(e)):l=e,pt.set(t,l)})(e,t,!!(1&n.t)),l()}}}const s=e.S,c=()=>I(e,!0);s&&s["s-rc"]?s["s-rc"].push(c):c()})(0,e,n))}l()}})(this))}disconnectedCallback(){p.jmp(()=>(()=>{if(0==(1&p.t)){const t=st(this);t.o&&(t.o.map(t=>t()),t.o=void 0)}})())}forceUpdate(){(()=>{{const t=st(this);t.k.isConnected&&2==(18&t.t)&&I(t,!1)}})()}componentOnReady(){return st(this).A}};s.F=t[0],l.includes(c)||o.get(c)||(n.push(c),o.define(c,nt(r,s,1)))})),r.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles",""),s.insertBefore(r,c?c.nextSibling:s.firstChild),d=!1,i.length?i.map(t=>t.connectedCallback()):p.jmp(()=>f=setTimeout(Y,30))},ot=new WeakMap,st=t=>ot.get(t),ct=(t,e)=>ot.set(e.s=t,e),rt=(t,e)=>{const n={t:0,k:t,O:e,W:new Map};return n.L=new Promise(t=>n.P=t),n.A=new Promise(t=>n.R=t),t["s-p"]=[],t["s-rc"]=[],m(t,n,e.N),ot.set(t,n)},it=(t,e)=>e in t,at=t=>console.error(t),ft=new Map,ut=t=>{const e=t.u.replace(/-/g,"_"),n=t.F,l=ft.get(n);return l?l[e]:__sc_import_heathenscript_ui_components(`./${n}.entry.js`).then(t=>(ft.set(n,t),t[e]),at)},pt=new Map,$t=[],dt=[],ht=[],mt=(t,e)=>n=>{t.push(n),i||(i=!0,e&&4&p.t?wt(bt):p.raf(bt))},yt=(t,e)=>{let n=0,l=0;for(;n<t.length&&(l=performance.now())<e;)try{t[n++](l)}catch(o){at(o)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},bt=()=>{r++,(t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){at(e)}t.length=0})($t);{const t=2==(6&p.t)?performance.now()+14*Math.ceil(.1*r):1/0;yt(dt,t),yt(ht,t),dt.length>0&&(ht.push(...dt),dt.length=0),(i=$t.length+dt.length+ht.length>0)?p.raf(bt):r=0}},wt=t=>d().then(t),_t=mt(dt,!0);export{f as C,t as N,d as a,lt as b,B as c,u as d,z as g,k as h,p,ct as r,a as w}