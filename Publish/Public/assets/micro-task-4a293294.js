import{o as b,u as y}from"./keyboard-409d75a5.js";var w=Object.defineProperty,N=(e,t,r)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t,r)=>(N(e,typeof t!="symbol"?t+"":t,r),r);class p{constructor(){m(this,"current",this.detect()),m(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let x=new p;function F(e){if(x.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=b(e);if(t)return t.ownerDocument}return document}let f=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var S=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(S||{}),I=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(I||{}),O=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(O||{});function P(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(f)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var M=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(M||{});function _(e,t=0){var r;return e===((r=F(e))==null?void 0:r.body)?!1:y(t,{0(){return e.matches(f)},1(){let n=e;for(;n!==null;){if(n.matches(f))return!0;n=n.parentElement}return!1}})}var A=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(A||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function k(e){e==null||e.focus({preventScroll:!0})}let g=["textarea","input"].join(",");function L(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,g))!=null?r:!1}function T(e,t=r=>r){return e.slice().sort((r,n)=>{let s=t(r),l=t(n);if(s===null||l===null)return 0;let c=s.compareDocumentPosition(l);return c&Node.DOCUMENT_POSITION_FOLLOWING?-1:c&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function K(e,t,{sorted:r=!0,relativeTo:n=null,skipElements:s=[]}={}){var l;let c=(l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?l:document,u=Array.isArray(e)?r?T(e):e:P(e);s.length>0&&u.length>1&&(u=u.filter(o=>!s.includes(o))),n=n??c.activeElement;let h=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),v=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,u.indexOf(n))-1;if(t&4)return Math.max(0,u.indexOf(n))+1;if(t&8)return u.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),E=t&32?{preventScroll:!0}:{},d=0,a=u.length,i;do{if(d>=a||d+a<=0)return 0;let o=v+d;if(t&16)o=(o+a)%a;else{if(o<0)return 3;if(o>=a)return 1}i=u[o],i==null||i.focus(E),d+=h}while(i!==c.activeElement);return t&6&&L(i)&&i.select(),2}function C(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}export{S as N,T as O,K as P,k as S,I as T,x as c,M as h,F as i,C as t,_ as w};