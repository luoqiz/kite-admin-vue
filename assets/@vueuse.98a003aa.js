import{g as le,d as Pe,n as Se,u as ce,e as N,r as p,i as $e,w as P,f as Ee,h as Ie,s as H,j as fe,k as De}from"./@vue.8279fe1a.js";var xe=Object.defineProperty,je=Object.defineProperties,Fe=Object.getOwnPropertyDescriptors,Q=Object.getOwnPropertySymbols,Me=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable,q=(e,t,r)=>t in e?xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Te=(e,t)=>{for(var r in t||(t={}))Me.call(t,r)&&q(e,r,t[r]);if(Q)for(var r of Q(t))Ne.call(t,r)&&q(e,r,t[r]);return e},Ae=(e,t)=>je(e,Fe(t));function Qt(e,t){var r;const n=H();return fe(()=>{n.value=e()},Ae(Te({},t),{flush:(r=t==null?void 0:t.flush)!=null?r:"sync"})),De(n)}var J;const D=typeof window<"u",Le=e=>typeof e<"u",qt=e=>typeof e=="boolean",de=e=>typeof e=="function",Jt=e=>typeof e=="number",Re=e=>typeof e=="string",V=()=>{};D&&((J=window==null?void 0:window.navigator)==null?void 0:J.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function I(e){return typeof e=="function"?e():ce(e)}function B(e,t){function r(...n){e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})}return r}const pe=e=>e();function ve(e,t={}){let r,n;return i=>{const s=I(e),o=I(t.maxWait);if(r&&clearTimeout(r),s<=0||o!==void 0&&o<=0)return n&&(clearTimeout(n),n=null),i();o&&!n&&(n=setTimeout(()=>{r&&clearTimeout(r),n=null,i()},o)),r=setTimeout(()=>{n&&clearTimeout(n),n=null,i()},s)}}function Ce(e,t=!0,r=!0){let n=0,a,i=!0;const s=()=>{a&&(clearTimeout(a),a=void 0)};return u=>{const l=I(e),d=Date.now()-n;if(s(),l<=0)return n=Date.now(),u();d>l&&(r||!i)?(n=Date.now(),u()):t&&(a=setTimeout(()=>{n=Date.now(),i=!0,s(),u()},l)),!r&&!a&&(a=setTimeout(()=>i=!0,l)),i=!1}}function Ve(e=pe){const t=p(!0);function r(){t.value=!1}function n(){t.value=!0}return{isActive:t,pause:r,resume:n,eventFilter:(...i)=>{t.value&&e(...i)}}}function We(e){return e}function ze(e,t){var r;if(typeof e=="number")return e+t;const n=((r=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:r[0])||"",a=e.slice(n.length),i=parseFloat(n)+t;return Number.isNaN(i)?e:i+a}function j(e){return Ee()?(Ie(e),!0):!1}function He(e,t=200,r={}){return B(ve(t,r),e)}function Yt(e,t=200,r={}){if(t<=0)return e;const n=p(e.value),a=He(()=>{n.value=e.value},t,r);return P(e,()=>a()),n}function Gt(e,t=200,r=!1,n=!0){return B(Ce(t,r,n),e)}function Be(e){return typeof e=="function"?N(e):p(e)}function C(e,t=!0){le()?Pe(e):t?e():Se(e)}const Qe=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,qe=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Je=(e,t,r,n)=>{let a=e<12?"AM":"PM";return n&&(a=a.split("").reduce((i,s)=>i+=`${s}.`,"")),r?a.toLowerCase():a},Ye=(e,t,r={})=>{var n;const a=e.getFullYear(),i=e.getMonth(),s=e.getDate(),o=e.getHours(),u=e.getMinutes(),l=e.getSeconds(),d=e.getMilliseconds(),h=e.getDay(),v=(n=r.customMeridiem)!=null?n:Je,f={YY:()=>String(a).slice(-2),YYYY:()=>a,M:()=>i+1,MM:()=>`${i+1}`.padStart(2,"0"),MMM:()=>e.toLocaleDateString(r.locales,{month:"short"}),MMMM:()=>e.toLocaleDateString(r.locales,{month:"long"}),D:()=>String(s),DD:()=>`${s}`.padStart(2,"0"),H:()=>String(o),HH:()=>`${o}`.padStart(2,"0"),h:()=>`${o%12||12}`.padStart(1,"0"),hh:()=>`${o%12||12}`.padStart(2,"0"),m:()=>String(u),mm:()=>`${u}`.padStart(2,"0"),s:()=>String(l),ss:()=>`${l}`.padStart(2,"0"),SSS:()=>`${d}`.padStart(3,"0"),d:()=>h,dd:()=>e.toLocaleDateString(r.locales,{weekday:"narrow"}),ddd:()=>e.toLocaleDateString(r.locales,{weekday:"short"}),dddd:()=>e.toLocaleDateString(r.locales,{weekday:"long"}),A:()=>v(o,u),AA:()=>v(o,u,!1,!0),a:()=>v(o,u,!0),aa:()=>v(o,u,!0,!0)};return t.replace(qe,(c,_)=>_||f[c]())},Ge=e=>{if(e===null)return new Date(NaN);if(e===void 0)return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){const t=e.match(Qe);if(t){const r=t[2]-1||0,n=(t[7]||"0").substring(0,3);return new Date(t[1],r,t[3]||1,t[4]||0,t[5]||0,t[6]||0,n)}}return new Date(e)};function Ut(e,t="HH:mm:ss",r={}){return N(()=>Ye(Ge(I(e)),I(t),r))}function Ue(e,t=1e3,r={}){const{immediate:n=!0,immediateCallback:a=!1}=r;let i=null;const s=p(!1);function o(){i&&(clearInterval(i),i=null)}function u(){s.value=!1,o()}function l(){ce(t)<=0||(s.value=!0,a&&e(),o(),i=setInterval(e,I(t)))}if(n&&D&&l(),$e(t)){const d=P(t,()=>{s.value&&D&&l()});j(d)}return j(u),{isActive:s,pause:u,resume:l}}function Kt(e,t,r={}){const{immediate:n=!0}=r,a=p(!1);let i=null;function s(){i&&(clearTimeout(i),i=null)}function o(){a.value=!1,s()}function u(...l){s(),a.value=!0,i=setTimeout(()=>{a.value=!1,i=null,e(...l)},I(t))}return n&&(a.value=!0,D&&u()),j(o),{isPending:a,start:u,stop:o}}var Y=Object.getOwnPropertySymbols,Ke=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable,Ze=(e,t)=>{var r={};for(var n in e)Ke.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&Y)for(var n of Y(e))t.indexOf(n)<0&&Xe.call(e,n)&&(r[n]=e[n]);return r};function me(e,t,r={}){const n=r,{eventFilter:a=pe}=n,i=Ze(n,["eventFilter"]);return P(e,B(a,t),i)}var ke=Object.defineProperty,et=Object.defineProperties,tt=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable,G=(e,t,r)=>t in e?ke(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,rt=(e,t)=>{for(var r in t||(t={}))_e.call(t,r)&&G(e,r,t[r]);if(L)for(var r of L(t))he.call(t,r)&&G(e,r,t[r]);return e},nt=(e,t)=>et(e,tt(t)),at=(e,t)=>{var r={};for(var n in e)_e.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&L)for(var n of L(e))t.indexOf(n)<0&&he.call(e,n)&&(r[n]=e[n]);return r};function Xt(e,t,r={}){const n=r,{debounce:a=0,maxWait:i=void 0}=n,s=at(n,["debounce","maxWait"]);return me(e,t,nt(rt({},s),{eventFilter:ve(a,{maxWait:i})}))}var ot=Object.defineProperty,it=Object.defineProperties,st=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,we=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable,U=(e,t,r)=>t in e?ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ut=(e,t)=>{for(var r in t||(t={}))we.call(t,r)&&U(e,r,t[r]);if(R)for(var r of R(t))Oe.call(t,r)&&U(e,r,t[r]);return e},lt=(e,t)=>it(e,st(t)),ct=(e,t)=>{var r={};for(var n in e)we.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&R)for(var n of R(e))t.indexOf(n)<0&&Oe.call(e,n)&&(r[n]=e[n]);return r};function ft(e,t,r={}){const n=r,{eventFilter:a}=n,i=ct(n,["eventFilter"]),{eventFilter:s,pause:o,resume:u,isActive:l}=Ve(a);return{stop:me(e,t,lt(ut({},i),{eventFilter:s})),pause:o,resume:u,isActive:l}}function E(e){var t;const r=I(e);return(t=r==null?void 0:r.$el)!=null?t:r}const S=D?window:void 0,dt=D?window.document:void 0;D&&window.navigator;D&&window.location;function b(...e){let t,r,n,a;if(Re(e[0])?([r,n,a]=e,t=S):[t,r,n,a]=e,!t)return V;let i=V;const s=P(()=>E(t),u=>{i(),u&&(u.addEventListener(r,n,a),i=()=>{u.removeEventListener(r,n,a),i=V})},{immediate:!0,flush:"post"}),o=()=>{s(),i()};return j(o),o}function Zt(e,t,r={}){const{window:n=S,ignore:a,capture:i=!0,detectIframe:s=!1}=r;if(!n)return;const o=p(!0);let u;const l=f=>{n.clearTimeout(u);const c=E(e);!c||c===f.target||f.composedPath().includes(c)||!o.value||t(f)},d=f=>a&&a.some(c=>{const _=E(c);return _&&(f.target===_||f.composedPath().includes(_))}),h=[b(n,"click",l,{passive:!0,capture:i}),b(n,"pointerdown",f=>{const c=E(e);o.value=!!c&&!f.composedPath().includes(c)&&!d(f)},{passive:!0}),b(n,"pointerup",f=>{if(f.button===0){const c=f.composedPath();f.composedPath=()=>c,u=n.setTimeout(()=>l(f),50)}},{passive:!0}),s&&b(n,"blur",f=>{var c;const _=E(e);((c=document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(_!=null&&_.contains(document.activeElement))&&t(f)})].filter(Boolean);return()=>h.forEach(f=>f())}function ge(e,t=!1){const r=p(),n=()=>r.value=Boolean(e());return n(),C(n,t),r}function M(e,t={}){const{window:r=S}=t,n=ge(()=>r&&"matchMedia"in r&&typeof r.matchMedia=="function");let a;const i=p(!1),s=()=>{!a||("removeEventListener"in a?a.removeEventListener("change",o):a.removeListener(o))},o=()=>{!n.value||(s(),a=r.matchMedia(Be(e).value),i.value=a.matches,"addEventListener"in a?a.addEventListener("change",o):a.addListener(o))};return fe(o),j(()=>s()),i}var pt=Object.defineProperty,K=Object.getOwnPropertySymbols,vt=Object.prototype.hasOwnProperty,mt=Object.prototype.propertyIsEnumerable,X=(e,t,r)=>t in e?pt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,_t=(e,t)=>{for(var r in t||(t={}))vt.call(t,r)&&X(e,r,t[r]);if(K)for(var r of K(t))mt.call(t,r)&&X(e,r,t[r]);return e};function kt(e,t={}){function r(o,u){let l=e[o];return u!=null&&(l=ze(l,u)),typeof l=="number"&&(l=`${l}px`),l}const{window:n=S}=t;function a(o){return n?n.matchMedia(o).matches:!1}const i=o=>M(`(min-width: ${r(o)})`,t),s=Object.keys(e).reduce((o,u)=>(Object.defineProperty(o,u,{get:()=>i(u),enumerable:!0,configurable:!0}),o),{});return _t({greater(o){return M(`(min-width: ${r(o,.1)})`,t)},greaterOrEqual:i,smaller(o){return M(`(max-width: ${r(o,-.1)})`,t)},smallerOrEqual(o){return M(`(max-width: ${r(o)})`,t)},between(o,u){return M(`(min-width: ${r(o)}) and (max-width: ${r(u,-.1)})`,t)},isGreater(o){return a(`(min-width: ${r(o,.1)})`)},isGreaterOrEqual(o){return a(`(min-width: ${r(o)})`)},isSmaller(o){return a(`(max-width: ${r(o,-.1)})`)},isSmallerOrEqual(o){return a(`(max-width: ${r(o)})`)},isInBetween(o,u){return a(`(min-width: ${r(o)}) and (max-width: ${r(u,-.1)})`)}},s)}function ht(e){return JSON.parse(JSON.stringify(e))}const W=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},z="__vueuse_ssr_handlers__";W[z]=W[z]||{};const wt=W[z];function ye(e,t){return wt[e]||t}function Ot(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var gt=Object.defineProperty,Z=Object.getOwnPropertySymbols,yt=Object.prototype.hasOwnProperty,bt=Object.prototype.propertyIsEnumerable,k=(e,t,r)=>t in e?gt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ee=(e,t)=>{for(var r in t||(t={}))yt.call(t,r)&&k(e,r,t[r]);if(Z)for(var r of Z(t))bt.call(t,r)&&k(e,r,t[r]);return e};const Pt={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function St(e,t,r,n={}){var a;const{flush:i="pre",deep:s=!0,listenToStorageChanges:o=!0,writeDefaults:u=!0,mergeDefaults:l=!1,shallow:d,window:h=S,eventFilter:v,onError:f=m=>{console.error(m)}}=n,c=(d?H:p)(t);if(!r)try{r=ye("getDefaultStorage",()=>{var m;return(m=S)==null?void 0:m.localStorage})()}catch(m){f(m)}if(!r)return c;const _=I(t),w=Ot(_),O=(a=n.serializer)!=null?a:Pt[w],{pause:g,resume:y}=ft(c,()=>x(c.value),{flush:i,deep:s,eventFilter:v});return h&&o&&b(h,"storage",T),T(),c;function x(m){try{m==null?r.removeItem(e):r.setItem(e,O.write(m))}catch($){f($)}}function F(m){g();try{const $=m?m.newValue:r.getItem(e);if($==null)return u&&_!==null&&r.setItem(e,O.write(_)),_;if(!m&&l){const A=O.read($);return de(l)?l(A,_):w==="object"&&!Array.isArray(A)?ee(ee({},_),A):A}else return typeof $!="string"?$:O.read($)}catch($){f($)}finally{y()}}function T(m){if(!(m&&m.storageArea!==r)){if(m&&m.key===null){c.value=_;return}m&&m.key!==e||(c.value=F(m))}}}function $t(e){return M("(prefers-color-scheme: dark)",e)}var Et=Object.defineProperty,te=Object.getOwnPropertySymbols,It=Object.prototype.hasOwnProperty,Dt=Object.prototype.propertyIsEnumerable,re=(e,t,r)=>t in e?Et(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,xt=(e,t)=>{for(var r in t||(t={}))It.call(t,r)&&re(e,r,t[r]);if(te)for(var r of te(t))Dt.call(t,r)&&re(e,r,t[r]);return e};function er(e={}){const{selector:t="html",attribute:r="class",initialValue:n="auto",window:a=S,storage:i,storageKey:s="vueuse-color-scheme",listenToStorageChanges:o=!0,storageRef:u,emitAuto:l}=e,d=xt({auto:"",light:"light",dark:"dark"},e.modes||{}),h=$t({window:a}),v=N(()=>h.value?"dark":"light"),f=u||(s==null?p(n):St(s,n,i,{window:a,listenToStorageChanges:o})),c=N({get(){return f.value==="auto"&&!l?v.value:f.value},set(g){f.value=g}}),_=ye("updateHTMLAttrs",(g,y,x)=>{const F=a==null?void 0:a.document.querySelector(g);if(!!F)if(y==="class"){const T=x.split(/\s/g);Object.values(d).flatMap(m=>(m||"").split(/\s/g)).filter(Boolean).forEach(m=>{T.includes(m)?F.classList.add(m):F.classList.remove(m)})}else F.setAttribute(y,x)});function w(g){var y;const x=g==="auto"?v.value:g;_(t,r,(y=d[x])!=null?y:x)}function O(g){e.onChanged?e.onChanged(g,w):w(g)}return P(c,O,{flush:"post",immediate:!0}),l&&P(v,()=>O(c.value),{flush:"post"}),C(()=>O(c.value)),c}function tr(e,t){var r;const n=H((r=t==null?void 0:t.initialValue)!=null?r:e[0]),a=N({get(){var l;let d=t!=null&&t.getIndexOf?t.getIndexOf(n.value,e):e.indexOf(n.value);return d<0&&(d=(l=t==null?void 0:t.fallbackIndex)!=null?l:0),d},set(l){i(l)}});function i(l){const d=e.length,h=(l%d+d)%d,v=e[h];return n.value=v,v}function s(l=1){return i(a.value+l)}function o(l=1){return s(l)}function u(l=1){return s(-l)}return{state:n,index:a,next:o,prev:u}}function rr({document:e=dt}={}){if(!e)return p("visible");const t=p(e.visibilityState);return b(e,"visibilitychange",()=>{t.value=e.visibilityState}),t}var ne=Object.getOwnPropertySymbols,jt=Object.prototype.hasOwnProperty,Ft=Object.prototype.propertyIsEnumerable,Mt=(e,t)=>{var r={};for(var n in e)jt.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&ne)for(var n of ne(e))t.indexOf(n)<0&&Ft.call(e,n)&&(r[n]=e[n]);return r};function be(e,t,r={}){const n=r,{window:a=S}=n,i=Mt(n,["window"]);let s;const o=ge(()=>a&&"ResizeObserver"in a),u=()=>{s&&(s.disconnect(),s=void 0)},l=P(()=>E(e),h=>{u(),o.value&&a&&h&&(s=new ResizeObserver(t),s.observe(h,i))},{immediate:!0,flush:"post"}),d=()=>{u(),l()};return j(d),{isSupported:o,stop:d}}function nr(e,t={}){const{reset:r=!0,windowResize:n=!0,windowScroll:a=!0,immediate:i=!0}=t,s=p(0),o=p(0),u=p(0),l=p(0),d=p(0),h=p(0),v=p(0),f=p(0);function c(){const _=E(e);if(!_){r&&(s.value=0,o.value=0,u.value=0,l.value=0,d.value=0,h.value=0,v.value=0,f.value=0);return}const w=_.getBoundingClientRect();s.value=w.height,o.value=w.bottom,u.value=w.left,l.value=w.right,d.value=w.top,h.value=w.width,v.value=w.x,f.value=w.y}return be(e,c),P(()=>E(e),_=>!_&&c()),a&&b("scroll",c,{passive:!0}),n&&b("resize",c,{passive:!0}),C(()=>{i&&c()}),{height:s,bottom:o,left:u,right:l,top:d,width:h,x:v,y:f,update:c}}function Nt(e,t={}){const{immediate:r=!0,window:n=S}=t,a=p(!1);let i=null;function s(){!a.value||!n||(e(),i=n.requestAnimationFrame(s))}function o(){!a.value&&n&&(a.value=!0,s())}function u(){a.value=!1,i!=null&&n&&(n.cancelAnimationFrame(i),i=null)}return r&&o(),j(u),{isActive:a,pause:u,resume:o}}function ar(e,t={width:0,height:0},r={}){const{box:n="content-box"}=r,a=p(t.width),i=p(t.height);return be(e,([s])=>{const o=n==="border-box"?s.borderBoxSize:n==="content-box"?s.contentBoxSize:s.devicePixelContentBoxSize;o?(a.value=o.reduce((u,{inlineSize:l})=>u+l,0),i.value=o.reduce((u,{blockSize:l})=>u+l,0)):(a.value=s.contentRect.width,i.value=s.contentRect.height)},r),P(()=>E(e),s=>{a.value=s?t.width:0,i.value=s?t.height:0}),{width:a,height:i}}var Tt=Object.defineProperty,ae=Object.getOwnPropertySymbols,At=Object.prototype.hasOwnProperty,Lt=Object.prototype.propertyIsEnumerable,oe=(e,t,r)=>t in e?Tt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Rt=(e,t)=>{for(var r in t||(t={}))At.call(t,r)&&oe(e,r,t[r]);if(ae)for(var r of ae(t))Lt.call(t,r)&&oe(e,r,t[r]);return e};function or(e={}){const{controls:t=!1,interval:r="requestAnimationFrame"}=e,n=p(new Date),a=()=>n.value=new Date,i=r==="requestAnimationFrame"?Nt(a,{immediate:!0}):Ue(a,r,{immediate:!0});return t?Rt({now:n},i):n}var ie;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(ie||(ie={}));var Ct=Object.defineProperty,se=Object.getOwnPropertySymbols,Vt=Object.prototype.hasOwnProperty,Wt=Object.prototype.propertyIsEnumerable,ue=(e,t,r)=>t in e?Ct(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,zt=(e,t)=>{for(var r in t||(t={}))Vt.call(t,r)&&ue(e,r,t[r]);if(se)for(var r of se(t))Wt.call(t,r)&&ue(e,r,t[r]);return e};const Ht={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};zt({linear:We},Ht);function ir(e,t,r,n={}){var a,i,s;const{clone:o=!1,passive:u=!1,eventName:l,deep:d=!1,defaultValue:h}=n,v=le(),f=r||(v==null?void 0:v.emit)||((a=v==null?void 0:v.$emit)==null?void 0:a.bind(v))||((s=(i=v==null?void 0:v.proxy)==null?void 0:i.$emit)==null?void 0:s.bind(v==null?void 0:v.proxy));let c=l;t||(t="modelValue"),c=l||c||`update:${t.toString()}`;const _=O=>o?de(o)?o(O):ht(O):O,w=()=>Le(e[t])?_(e[t]):h;if(u){const O=w(),g=p(O);return P(()=>e[t],y=>g.value=_(y)),P(g,y=>{(y!==e[t]||d)&&f(c,y)},{deep:d}),g}else return N({get(){return w()},set(O){f(c,O)}})}function sr({window:e=S}={}){if(!e)return p(!1);const t=p(e.document.hasFocus());return b(e,"blur",()=>{t.value=!1}),b(e,"focus",()=>{t.value=!0}),t}function ur(e={}){const{window:t=S,initialWidth:r=1/0,initialHeight:n=1/0,listenOrientation:a=!0,includeScrollbar:i=!0}=e,s=p(r),o=p(n),u=()=>{t&&(i?(s.value=t.innerWidth,o.value=t.innerHeight):(s.value=t.document.documentElement.clientWidth,o.value=t.document.documentElement.clientHeight))};return u(),C(u),b("resize",u,{passive:!0}),a&&b("orientationchange",u,{passive:!0}),{width:s,height:o}}export{Jt as a,qt as b,ur as c,nr as d,b as e,be as f,Gt as g,Kt as h,D as i,rr as j,sr as k,Qt as l,ir as m,kt as n,Zt as o,St as p,Ut as q,Yt as r,or as s,j as t,E as u,er as v,$t as w,tr as x,ar as y,Xt as z};
