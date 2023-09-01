(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function qe({_id:e,author:t,book_image:n,description:r,title:o}){return`
      <div data-id="${e}" class="book-card" id="product">
      <img src="${n}" alt="${o}" class="book-img" />
      <h2 class="book-title">${o}</h2>
      <h3 class="book-title">${t}</h3>
      <p class="book-description">${r}</p>
      <button class="book-add-btn"id="addBtn" type="button">Add to shopping list</button>
      </div> `}function be(e,t){return function(){return e.apply(t,arguments)}}const{toString:$e}=Object.prototype,{getPrototypeOf:ee}=Object,M=(e=>t=>{const n=$e.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),O=e=>(e=e.toLowerCase(),t=>M(t)===e),q=e=>t=>typeof t===e,{isArray:P}=Array,L=q("undefined");function ze(e){return e!==null&&!L(e)&&e.constructor!==null&&!L(e.constructor)&&E(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const we=O("ArrayBuffer");function Je(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&we(e.buffer),t}const Ve=q("string"),E=q("function"),Ee=q("number"),$=e=>e!==null&&typeof e=="object",We=e=>e===!0||e===!1,U=e=>{if(M(e)!=="object")return!1;const t=ee(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ve=O("Date"),Ke=O("File"),Ge=O("Blob"),Xe=O("FileList"),Qe=e=>$(e)&&E(e.pipe),Ze=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||E(e.append)&&((t=M(e))==="formdata"||t==="object"&&E(e.toString)&&e.toString()==="[object FormData]"))},Ye=O("URLSearchParams"),et=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function k(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),P(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let c;for(r=0;r<i;r++)c=s[r],t.call(null,e[c],c,e)}}function Se(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const ge=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Oe=e=>!L(e)&&e!==ge;function X(){const{caseless:e}=Oe(this)&&this||{},t={},n=(r,o)=>{const s=e&&Se(t,o)||o;U(t[s])&&U(r)?t[s]=X(t[s],r):U(r)?t[s]=X({},r):P(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&k(arguments[r],n);return t}const tt=(e,t,n,{allOwnKeys:r}={})=>(k(t,(o,s)=>{n&&E(o)?e[s]=be(o,n):e[s]=o},{allOwnKeys:r}),e),nt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),rt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},ot=(e,t,n,r)=>{let o,s,i;const c={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&ee(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},st=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},it=e=>{if(!e)return null;if(P(e))return e;let t=e.length;if(!Ee(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},at=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ee(Uint8Array)),ct=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},lt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},ut=O("HTMLFormElement"),ft=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),ie=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),dt=O("RegExp"),Re=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};k(n,(o,s)=>{let i;(i=t(o,s,e))!==!1&&(r[s]=i||o)}),Object.defineProperties(e,r)},pt=e=>{Re(e,(t,n)=>{if(E(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(E(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ht=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return P(e)?r(e):r(String(e).split(t)),n},mt=()=>{},yt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),V="abcdefghijklmnopqrstuvwxyz",ae="0123456789",Ae={DIGIT:ae,ALPHA:V,ALPHA_DIGIT:V+V.toUpperCase()+ae},bt=(e=16,t=Ae.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function wt(e){return!!(e&&E(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Et=e=>{const t=new Array(10),n=(r,o)=>{if($(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=P(r)?[]:{};return k(r,(i,c)=>{const d=n(i,o+1);!L(d)&&(s[c]=d)}),t[o]=void 0,s}}return r};return n(e,0)},St=O("AsyncFunction"),gt=e=>e&&($(e)||E(e))&&E(e.then)&&E(e.catch),a={isArray:P,isArrayBuffer:we,isBuffer:ze,isFormData:Ze,isArrayBufferView:Je,isString:Ve,isNumber:Ee,isBoolean:We,isObject:$,isPlainObject:U,isUndefined:L,isDate:ve,isFile:Ke,isBlob:Ge,isRegExp:dt,isFunction:E,isStream:Qe,isURLSearchParams:Ye,isTypedArray:at,isFileList:Xe,forEach:k,merge:X,extend:tt,trim:et,stripBOM:nt,inherits:rt,toFlatObject:ot,kindOf:M,kindOfTest:O,endsWith:st,toArray:it,forEachEntry:ct,matchAll:lt,isHTMLForm:ut,hasOwnProperty:ie,hasOwnProp:ie,reduceDescriptors:Re,freezeMethods:pt,toObjectSet:ht,toCamelCase:ft,noop:mt,toFiniteNumber:yt,findKey:Se,global:ge,isContextDefined:Oe,ALPHABET:Ae,generateString:bt,isSpecCompliantForm:wt,toJSONObject:Et,isAsyncFn:St,isThenable:gt};function m(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Te=m.prototype,Ne={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ne[e]={value:e}});Object.defineProperties(m,Ne);Object.defineProperty(Te,"isAxiosError",{value:!0});m.from=(e,t,n,r,o,s)=>{const i=Object.create(Te);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const Ot=null;function Q(e){return a.isPlainObject(e)||a.isArray(e)}function xe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ce(e,t,n){return e?e.concat(t).map(function(o,s){return o=xe(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function Rt(e){return a.isArray(e)&&!e.some(Q)}const At=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function z(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,R){return!a.isUndefined(R[h])});const r=n.metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function l(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,h,R){let S=f;if(f&&!R&&typeof f=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&Rt(f)||(a.isFileList(f)||a.endsWith(h,"[]"))&&(S=a.toArray(f)))return h=xe(h),S.forEach(function(_,Me){!(a.isUndefined(_)||_===null)&&t.append(i===!0?ce([h],Me,s):i===null?h:h+"[]",l(_))}),!1}return Q(f)?!0:(t.append(ce(R,h,s),l(f)),!1)}const p=[],w=Object.assign(At,{defaultVisitor:u,convertValue:l,isVisitable:Q});function y(f,h){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(f),a.forEach(f,function(S,N){(!(a.isUndefined(S)||S===null)&&o.call(t,S,a.isString(N)?N.trim():N,h,w))===!0&&y(S,h?h.concat(N):[N])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function le(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function te(e,t){this._pairs=[],e&&z(e,this,t)}const Ce=te.prototype;Ce.append=function(t,n){this._pairs.push([t,n])};Ce.toString=function(t){const n=t?function(r){return t.call(this,r,le)}:le;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Tt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Pe(e,t,n){if(!t)return e;const r=n&&n.encode||Tt,o=n&&n.serialize;let s;if(o?s=o(t,n):s=a.isURLSearchParams(t)?t.toString():new te(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Nt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ue=Nt,Be={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},xt=typeof URLSearchParams<"u"?URLSearchParams:te,Ct=typeof FormData<"u"?FormData:null,Pt=typeof Blob<"u"?Blob:null,Bt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Lt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),g={isBrowser:!0,classes:{URLSearchParams:xt,FormData:Ct,Blob:Pt},isStandardBrowserEnv:Bt,isStandardBrowserWebWorkerEnv:Lt,protocols:["http","https","file","blob","url","data"]};function kt(e,t){return z(e,new g.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return g.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function Ft(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function _t(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function Le(e){function t(n,r,o,s){let i=n[s++];const c=Number.isFinite(+i),d=s>=n.length;return i=!i&&a.isArray(o)?o.length:i,d?(a.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!c):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],s)&&a.isArray(o[i])&&(o[i]=_t(o[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,o)=>{t(Ft(r),o,n,0)}),n}return null}function Ut(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ne={transitional:Be,adapter:g.isNode?"http":"xhr",transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o&&o?JSON.stringify(Le(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return kt(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return z(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),Ut(t)):t}],transformResponse:[function(t){const n=this.transitional||ne.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:g.classes.FormData,Blob:g.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{ne.headers[e]={}});const re=ne,Dt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),It=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&Dt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},fe=Symbol("internals");function B(e){return e&&String(e).trim().toLowerCase()}function D(e){return e===!1||e==null?e:a.isArray(e)?e.map(D):String(e)}function jt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Ht=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function W(e,t,n,r,o){if(a.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Mt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function qt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,i){return this[r].call(this,t,o,s,i)},configurable:!0})})}class J{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(c,d,l){const u=B(d);if(!u)throw new Error("header name must be a non-empty string");const p=a.findKey(o,u);(!p||o[p]===void 0||l===!0||l===void 0&&o[p]!==!1)&&(o[p||d]=D(c))}const i=(c,d)=>a.forEach(c,(l,u)=>s(l,u,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Ht(t)?i(It(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=B(t),t){const r=a.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return jt(o);if(a.isFunction(n))return n.call(this,o,r);if(a.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=B(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||W(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(i){if(i=B(i),i){const c=a.findKey(r,i);c&&(!n||W(r,r[c],c,n))&&(delete r[c],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const s=n[r];(!t||W(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const n=this,r={};return a.forEach(this,(o,s)=>{const i=a.findKey(r,s);if(i){n[i]=D(o),delete n[s];return}const c=t?Mt(s):String(s).trim();c!==s&&delete n[s],n[c]=D(o),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[fe]=this[fe]={accessors:{}}).accessors,o=this.prototype;function s(i){const c=B(i);r[c]||(qt(o,i),r[c]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}}J.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(J.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(J);const A=J;function v(e,t){const n=this||re,r=t||n,o=A.from(r.headers);let s=r.data;return a.forEach(e,function(c){s=c.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function ke(e){return!!(e&&e.__CANCEL__)}function F(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(F,m,{__CANCEL__:!0});function $t(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const zt=g.isStandardBrowserEnv?function(){return{write:function(n,r,o,s,i,c){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(o)&&d.push("expires="+new Date(o).toGMTString()),a.isString(s)&&d.push("path="+s),a.isString(i)&&d.push("domain="+i),c===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Jt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Vt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Fe(e,t){return e&&!Jt(t)?Vt(e,t):t}const Wt=g.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(i){const c=a.isString(i)?o(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function vt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Kt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(d){const l=Date.now(),u=r[s];i||(i=l),n[o]=d,r[o]=l;let p=s,w=0;for(;p!==o;)w+=n[p++],p=p%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),l-i<t)return;const y=u&&l-u;return y?Math.round(w*1e3/y):void 0}}function de(e,t){let n=0;const r=Kt(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,c=s-n,d=r(c),l=s<=i;n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:c,rate:d||void 0,estimated:d&&i&&l?(i-s)/d:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const Gt=typeof XMLHttpRequest<"u",Xt=Gt&&function(e){return new Promise(function(n,r){let o=e.data;const s=A.from(e.headers).normalize(),i=e.responseType;let c;function d(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}a.isFormData(o)&&(g.isStandardBrowserEnv||g.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let l=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(y+":"+f))}const u=Fe(e.baseURL,e.url);l.open(e.method.toUpperCase(),Pe(u,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function p(){if(!l)return;const y=A.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:y,config:e,request:l};$t(function(S){n(S),d()},function(S){r(S),d()},h),l=null}if("onloadend"in l?l.onloadend=p:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(p)},l.onabort=function(){l&&(r(new m("Request aborted",m.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||Be;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,l)),l=null},g.isStandardBrowserEnv){const y=(e.withCredentials||Wt(u))&&e.xsrfCookieName&&zt.read(e.xsrfCookieName);y&&s.set(e.xsrfHeaderName,y)}o===void 0&&s.setContentType(null),"setRequestHeader"in l&&a.forEach(s.toJSON(),function(f,h){l.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",de(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",de(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=y=>{l&&(r(!y||y.type?new F(null,e,l):y),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const w=vt(u);if(w&&g.protocols.indexOf(w)===-1){r(new m("Unsupported protocol "+w+":",m.ERR_BAD_REQUEST,e));return}l.send(o||null)})},I={http:Ot,xhr:Xt};a.forEach(I,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const _e={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=a.isString(n)?I[n.toLowerCase()]:n));o++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(I,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:I};function K(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new F(null,e)}function pe(e){return K(e),e.headers=A.from(e.headers),e.data=v.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),_e.getAdapter(e.adapter||re.adapter)(e).then(function(r){return K(e),r.data=v.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return ke(r)||(K(e),r&&r.response&&(r.response.data=v.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const he=e=>e instanceof A?e.toJSON():e;function C(e,t){t=t||{};const n={};function r(l,u,p){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:p},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function o(l,u,p){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l,p)}else return r(l,u,p)}function s(l,u){if(!a.isUndefined(u))return r(void 0,u)}function i(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function c(l,u,p){if(p in t)return r(l,u);if(p in e)return r(void 0,l)}const d={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,u)=>o(he(l),he(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const p=d[u]||o,w=p(e[u],t[u],u);a.isUndefined(w)&&p!==c||(n[u]=w)}),n}const Ue="1.5.0",oe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{oe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const me={};oe.transitional=function(t,n,r){function o(s,i){return"[Axios v"+Ue+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,c)=>{if(t===!1)throw new m(o(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!me[i]&&(me[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,c):!0}};function Qt(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const c=e[s],d=c===void 0||i(c,s,e);if(d!==!0)throw new m("option "+s+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+s,m.ERR_BAD_OPTION)}}const Z={assertOptions:Qt,validators:oe},T=Z.validators;class H{constructor(t){this.defaults=t,this.interceptors={request:new ue,response:new ue}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=C(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&Z.assertOptions(r,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1),o!=null&&(a.isFunction(o)?n.paramsSerializer={serialize:o}:Z.assertOptions(o,{encode:T.function,serialize:T.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=s&&a.merge(s.common,s[n.method]);s&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete s[f]}),n.headers=A.concat(i,s);const c=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,c.unshift(h.fulfilled,h.rejected))});const l=[];this.interceptors.response.forEach(function(h){l.push(h.fulfilled,h.rejected)});let u,p=0,w;if(!d){const f=[pe.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,l),w=f.length,u=Promise.resolve(n);p<w;)u=u.then(f[p++],f[p++]);return u}w=c.length;let y=n;for(p=0;p<w;){const f=c[p++],h=c[p++];try{y=f(y)}catch(R){h.call(this,R);break}}try{u=pe.call(this,y)}catch(f){return Promise.reject(f)}for(p=0,w=l.length;p<w;)u=u.then(l[p++],l[p++]);return u}getUri(t){t=C(this.defaults,t);const n=Fe(t.baseURL,t.url);return Pe(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){H.prototype[t]=function(n,r){return this.request(C(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,c){return this.request(C(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}H.prototype[t]=n(),H.prototype[t+"Form"]=n(!0)});const j=H;class se{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(c=>{r.subscribe(c),s=c}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,c){r.reason||(r.reason=new F(s,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new se(function(o){t=o}),cancel:t}}}const Zt=se;function Yt(e){return function(n){return e.apply(null,n)}}function en(e){return a.isObject(e)&&e.isAxiosError===!0}const Y={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Y).forEach(([e,t])=>{Y[t]=e});const tn=Y;function De(e){const t=new j(e),n=be(j.prototype.request,t);return a.extend(n,j.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return De(C(e,o))},n}const b=De(re);b.Axios=j;b.CanceledError=F;b.CancelToken=Zt;b.isCancel=ke;b.VERSION=Ue;b.toFormData=z;b.AxiosError=m;b.Cancel=b.CanceledError;b.all=function(t){return Promise.all(t)};b.spread=Yt;b.isAxiosError=en;b.mergeConfig=C;b.AxiosHeaders=A;b.formToJSON=e=>Le(a.isHTMLForm(e)?new FormData(e):e);b.getAdapter=_e.getAdapter;b.HttpStatusCode=tn;b.default=b;const Ie=b,je="https://books-backend.p.goit.global/";async function nn(){try{return await Ie.get(je+"books/top-books")}catch(e){return console.log("Something went wrong, please try again."),e}}async function rn(e){try{return await Ie.get(je+`books/${e}`)}catch(t){return console.log("Something went wrong, please try again."),t}}document.getElementById("modalCard");const on=document.getElementById("openModalCard"),sn=document.getElementById("modalWindow"),x="shopingList",an=async()=>{const e=G(x),{data:t}=await rn("643282b1e85766588626a0b4");console.log(t);const n=qe(t);console.log(n),sn.innerHTML=n;const r=document.getElementById("addBtn"),o=ye(e,t);r.textContent=o?"remove from the shopping list":"Add to shopping list",r.addEventListener("click",()=>{console.log("click");const s=G(x);cn(s,t);const i=G(x),c=ye(i,t);console.log(r),console.log(c),r.textContent=c?"remove from the shopping list":"Add to shopping list"})};on.addEventListener("click",an);function cn(e,t){let n=[];if(e.length>0){const r=e.find(o=>o._id===t._id);r?(n=[...e.filter(({_id:o})=>o!==t._id)],console.log(n),localStorage.setItem(x,JSON.stringify(n))):(n=[...e,r],localStorage.setItem(x,JSON.stringify(n)))}else n.push(t),localStorage.setItem(x,JSON.stringify(n))}function ye(e,t){return e.length>0?!!e.find(r=>r._id===t._id):!1}function G(e){return localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):[]}function He(){nn().then(e=>{e.data.forEach(n=>{const r=ln(n);document.querySelector(".top-book-list").insertAdjacentHTML("beforeend",r)})})}He();function ln(e){const t=e.books.map(n=>`
            <li class="top-book">
            ${un(n)}
            </li>
            `).join("");return`
<div class="category-box">
    <p class="name-category">${e.list_name}</p>
    <ul class="category-list">${t}</ul>
    <div>
      <button></button>
    </div>
        `}function un(e){return`<li class="category-list-item">
  <img src="${e.book_image}" alt="${e.title}" title ="${e.title}" loading="lazy" />
  <div class="info">
    <h2 class="title">
     ${e.title}
    </h2>
    <p class="info-item">
       ${e.author}
    </p>
  </div>
</li>`}He();