import{o as y,H as k,u as q,t as pe,N as Se,a as et,S as I,T as tt}from"./use-resolve-button-type-6c64fb97.js";import{c as me,w as nt,h as lt,t as Oe,m as le,f as Le,a as Fe,S as W,P as ve,N as j,T as at}from"./micro-task-b1c10728.js";import{bw as x,a as f,y as c,a4 as D,p as S,aN as A,h as T,F as rt,bv as ae,aQ as M,ap as O,T as ot,aU as it,b4 as ut,aB as st,k as dt,o as ct,b as ft,w as z,f as Z,u as Q,d as H,m as Me,s as vt,t as ke}from"./preset-b92b06ac.js";import{p as je,l as $,C as pt,c as mt}from"./disclosure-6b156a39.js";function de(e,t,n){me.isServer||x(l=>{document.addEventListener(e,t,n),l(()=>document.removeEventListener(e,t,n))})}function Ve(e,t,n){me.isServer||x(l=>{window.addEventListener(e,t,n),l(()=>window.removeEventListener(e,t,n))})}function ht(e,t,n=c(()=>!0)){function l(a,o){if(!n.value||a.defaultPrevented)return;let i=o(a);if(i===null||!i.getRootNode().contains(i))return;let u=function s(d){return typeof d=="function"?s(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e);for(let s of u){if(s===null)continue;let d=s instanceof HTMLElement?s:y(s);if(d!=null&&d.contains(i)||a.composed&&a.composedPath().includes(d))return}return!nt(i,lt.Loose)&&i.tabIndex!==-1&&a.preventDefault(),t(a,i)}let r=f(null);de("pointerdown",a=>{var o,i;n.value&&(r.value=((i=(o=a.composedPath)==null?void 0:o.call(a))==null?void 0:i[0])||a.target)},!0),de("mousedown",a=>{var o,i;n.value&&(r.value=((i=(o=a.composedPath)==null?void 0:o.call(a))==null?void 0:i[0])||a.target)},!0),de("click",a=>{r.value&&(l(a,()=>r.value),r.value=null)},!0),de("touchend",a=>l(a,()=>a.target instanceof HTMLElement?a.target:null),!0),Ve("blur",a=>l(a,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function gt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function re(){let e=[],t={addEventListener(n,l,r,a){return n.addEventListener(l,r,a),t.add(()=>n.removeEventListener(l,r,a))},requestAnimationFrame(...n){let l=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(l))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let l=setTimeout(...n);t.add(()=>clearTimeout(l))},microTask(...n){let l={current:!0};return Oe(()=>{l.current&&n[0]()}),t.add(()=>{l.current=!1})},style(n,l,r){let a=n.style.getPropertyValue(l);return Object.assign(n.style,{[l]:r}),this.add(()=>{Object.assign(n.style,{[l]:a})})},group(n){let l=re();return n(l),this.add(()=>l.dispose())},add(n){return e.push(n),()=>{let l=e.indexOf(n);if(l>=0)for(let r of e.splice(l,1))r()}},dispose(){for(let n of e.splice(0))n()}};return t}var ne=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(ne||{});function yt(){let e=f(0);return Ve("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Ie(e,t,n,l){me.isServer||x(r=>{e=e??window,e.addEventListener(t,n,l),r(()=>e.removeEventListener(t,n,l))})}function wt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function Ue(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.value){let l=y(n);l instanceof HTMLElement&&t.add(l)}return t}var We=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(We||{});let ee=Object.assign(D({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:f(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:l}){let r=f(null);l({el:r,$el:r});let a=c(()=>le(r)),o=f(!1);S(()=>o.value=!0),A(()=>o.value=!1),Et({ownerDocument:a},c(()=>o.value&&!!(e.features&16)));let i=Tt({ownerDocument:a,container:r,initialFocus:c(()=>e.initialFocus)},c(()=>o.value&&!!(e.features&2)));St({ownerDocument:a,container:r,containers:e.containers,previousActiveElement:i},c(()=>o.value&&!!(e.features&8)));let u=yt();function s(h){let w=y(r);w&&(b=>b())(()=>{q(u.value,{[ne.Forwards]:()=>{ve(w,j.First,{skipElements:[h.relatedTarget]})},[ne.Backwards]:()=>{ve(w,j.Last,{skipElements:[h.relatedTarget]})}})})}let d=f(!1);function m(h){h.key==="Tab"&&(d.value=!0,requestAnimationFrame(()=>{d.value=!1}))}function p(h){if(!o.value)return;let w=Ue(e.containers);y(r)instanceof HTMLElement&&w.add(y(r));let b=h.relatedTarget;b instanceof HTMLElement&&b.dataset.headlessuiFocusGuard!=="true"&&(qe(w,b)||(d.value?ve(y(r),q(u.value,{[ne.Forwards]:()=>j.Next,[ne.Backwards]:()=>j.Previous})|j.WrapAround,{relativeTo:h.target}):h.target instanceof HTMLElement&&W(h.target)))}return()=>{let h={},w={ref:r,onKeydown:m,onFocusout:p},{features:b,initialFocus:L,containers:X,...F}=e;return T(rt,[!!(b&4)&&T(Le,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:Fe.Focusable}),k({ourProps:w,theirProps:{...t,...F},slot:h,attrs:t,slots:n,name:"FocusTrap"}),!!(b&4)&&T(Le,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:Fe.Focusable})])}}}),{features:We}),V=[];wt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&V[0]!==t.target&&(V.unshift(t.target),V=V.filter(n=>n!=null&&n.isConnected),V.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function bt(e){let t=f(V.slice());return ae([e],([n],[l])=>{l===!0&&n===!1?Oe(()=>{t.value.splice(0)}):l===!1&&n===!0&&(t.value=V.slice())},{flush:"post"}),()=>{var n;return(n=t.value.find(l=>l!=null&&l.isConnected))!=null?n:null}}function Et({ownerDocument:e},t){let n=bt(t);S(()=>{x(()=>{var l,r;t.value||((l=e.value)==null?void 0:l.activeElement)===((r=e.value)==null?void 0:r.body)&&W(n())},{flush:"post"})}),A(()=>{t.value&&W(n())})}function Tt({ownerDocument:e,container:t,initialFocus:n},l){let r=f(null),a=f(!1);return S(()=>a.value=!0),A(()=>a.value=!1),S(()=>{ae([t,n,l],(o,i)=>{if(o.every((s,d)=>(i==null?void 0:i[d])===s)||!l.value)return;let u=y(t);u&&Oe(()=>{var s,d;if(!a.value)return;let m=y(n),p=(s=e.value)==null?void 0:s.activeElement;if(m){if(m===p){r.value=p;return}}else if(u.contains(p)){r.value=p;return}m?W(m):ve(u,j.First|j.NoScroll)===at.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),r.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),r}function St({ownerDocument:e,container:t,containers:n,previousActiveElement:l},r){var a;Ie((a=e.value)==null?void 0:a.defaultView,"focus",o=>{if(!r.value)return;let i=Ue(n);y(t)instanceof HTMLElement&&i.add(y(t));let u=l.value;if(!u)return;let s=o.target;s&&s instanceof HTMLElement?qe(i,s)?(l.value=s,W(s)):(o.preventDefault(),o.stopPropagation(),W(u)):W(l.value)},!0)}function qe(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let Ee=new Map,te=new Map;function He(e,t=f(!0)){x(n=>{var l;if(!t.value)return;let r=y(e);if(!r)return;n(function(){var o;if(!r)return;let i=(o=te.get(r))!=null?o:1;if(i===1?te.delete(r):te.set(r,i-1),i!==1)return;let u=Ee.get(r);u&&(u["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",u["aria-hidden"]),r.inert=u.inert,Ee.delete(r))});let a=(l=te.get(r))!=null?l:0;te.set(r,a+1),a===0&&(Ee.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0)})}let Ge=Symbol("ForcePortalRootContext");function Lt(){return O(Ge,!1)}let Ne=D({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return M(Ge,e.force),()=>{let{force:l,...r}=e;return k({theirProps:r,ourProps:{},slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}});function Ft(e){let t=le(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let l=t.createElement("div");return l.setAttribute("id","headlessui-portal-root"),t.body.appendChild(l)}let $t=D({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let l=f(null),r=c(()=>le(l)),a=Lt(),o=O(Ye,null),i=f(a===!0||o==null?Ft(l.value):o.resolveTarget());x(()=>{a||o!=null&&(i.value=o.resolveTarget())});let u=O($e,null);return S(()=>{let s=y(l);s&&u&&A(u.register(s))}),A(()=>{var s,d;let m=(s=r.value)==null?void 0:s.getElementById("headlessui-portal-root");m&&i.value===m&&i.value.children.length<=0&&((d=i.value.parentElement)==null||d.removeChild(i.value))}),()=>{if(i.value===null)return null;let s={ref:l,"data-headlessui-portal":""};return T(ot,{to:i.value},k({ourProps:s,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),$e=Symbol("PortalParentContext");function Ct(){let e=O($e,null),t=f([]);function n(a){return t.value.push(a),e&&e.register(a),()=>l(a)}function l(a){let o=t.value.indexOf(a);o!==-1&&t.value.splice(o,1),e&&e.unregister(a)}let r={register:n,unregister:l,portals:t};return[t,D({name:"PortalWrapper",setup(a,{slots:o}){return M($e,r),()=>{var i;return(i=o.default)==null?void 0:i.call(o)}}})]}let Ye=Symbol("PortalGroupContext"),Pt=D({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let l=it({resolveTarget(){return e.target}});return M(Ye,l),()=>{let{target:r,...a}=e;return k({theirProps:a,ourProps:{},slot:{},attrs:t,slots:n,name:"PortalGroup"})}}}),ze=Symbol("StackContext");var Ce=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Ce||{});function xt(){return O(ze,()=>{})}function At({type:e,enabled:t,element:n,onUpdate:l}){let r=xt();function a(...o){l==null||l(...o),r(...o)}S(()=>{ae(t,(o,i)=>{o?a(0,e,n):i===!0&&a(1,e,n)},{immediate:!0,flush:"sync"})}),A(()=>{t.value&&a(1,e,n)}),M(ze,a)}let Ot=Symbol("DescriptionContext");function Dt({slot:e=f({}),name:t="Description",props:n={}}={}){let l=f([]);function r(a){return l.value.push(a),()=>{let o=l.value.indexOf(a);o!==-1&&l.value.splice(o,1)}}return M(Ot,{register:r,slot:e,name:t,props:n}),c(()=>l.value.length>0?l.value.join(" "):void 0)}function Rt(e){let t=ut(e.getSnapshot());return A(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function Bt(e,t){let n=e(),l=new Set;return{getSnapshot(){return n},subscribe(r){return l.add(r),()=>l.delete(r)},dispatch(r,...a){let o=t[r].call(n,...a);o&&(n=o,l.forEach(i=>i()))}}}function Mt(){let e;return{before({doc:t}){var n;let l=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-l.clientWidth},after({doc:t,d:n}){let l=t.documentElement,r=l.clientWidth-l.offsetWidth,a=e-r;n.style(l,"paddingRight",`${a}px`)}}}function kt(){if(!gt())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:l}){function r(o){return l.containers.flatMap(i=>i()).some(i=>i.contains(o))}if(window.getComputedStyle(t.documentElement).scrollBehavior!=="auto"){let o=re();o.style(t.documentElement,"scroll-behavior","auto"),n.add(()=>n.microTask(()=>o.dispose()))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let a=null;n.addEventListener(t,"click",o=>{if(o.target instanceof HTMLElement)try{let i=o.target.closest("a");if(!i)return;let{hash:u}=new URL(i.href),s=t.querySelector(u);s&&!r(s)&&(a=s)}catch{}},!0),n.addEventListener(t,"touchmove",o=>{o.target instanceof HTMLElement&&!r(o.target)&&o.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),a&&a.isConnected&&(a.scrollIntoView({block:"nearest"}),a=null)})}}}function Ht(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Nt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let U=Bt(()=>new Map,{PUSH(e,t){var n;let l=(n=this.get(e))!=null?n:{doc:e,count:0,d:re(),meta:new Set};return l.count++,l.meta.add(t),this.set(e,l),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let l={doc:e,d:t,meta:Nt(n)},r=[kt(),Mt(),Ht()];r.forEach(({before:a})=>a==null?void 0:a(l)),r.forEach(({after:a})=>a==null?void 0:a(l))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});U.subscribe(()=>{let e=U.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let l=t.get(n.doc)==="hidden",r=n.count!==0;(r&&!l||!r&&l)&&U.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&U.dispatch("TEARDOWN",n)}});function _t(e,t,n){let l=Rt(U),r=c(()=>{let a=e.value?l.value.get(e.value):void 0;return a?a.count>0:!1});return ae([e,t],([a,o],[i],u)=>{if(!a||!o)return;U.dispatch("PUSH",a,n);let s=!1;u(()=>{s||(U.dispatch("POP",i??a,n),s=!0)})},{immediate:!0}),r}function jt({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){let l=f(null),r=le(l);function a(){var o;let i=[];for(let u of e)u!==null&&(u instanceof HTMLElement?i.push(u):"value"in u&&u.value instanceof HTMLElement&&i.push(u.value));if(t!=null&&t.value)for(let u of t.value)i.push(u);for(let u of(o=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?o:[])u!==document.body&&u!==document.head&&u instanceof HTMLElement&&u.id!=="headlessui-portal-root"&&(u.contains(y(l))||i.some(s=>u.contains(s))||i.push(u));return i}return{resolveContainers:a,contains(o){return a().some(i=>i.contains(o))},mainTreeNodeRef:l,MainTreeNode(){return n!=null?null:T(Le,{features:Fe.Hidden,ref:l})}}}var Vt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Vt||{});let Pe=Symbol("DialogContext");function De(e){let t=O(Pe,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,De),n}return t}let ce="DC8F892D-2EBD-447C-A4C8-A03058436FF4",It=D({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:ce},initialFocus:{type:Object,default:null},id:{type:String,default:()=>`headlessui-dialog-${pe()}`}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:l,expose:r}){var a;let o=f(!1);S(()=>{o.value=!0});let i=f(0),u=je(),s=c(()=>e.open===ce&&u!==null?(u.value&$.Open)===$.Open:e.open),d=f(null),m=c(()=>le(d));if(r({el:d,$el:d}),!(e.open!==ce||u!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof s.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${s.value===ce?void 0:e.open}`);let p=c(()=>o.value&&s.value?0:1),h=c(()=>p.value===0),w=c(()=>i.value>1),b=O(Pe,null)!==null,[L,X]=Ct(),{resolveContainers:F,mainTreeNodeRef:N,MainTreeNode:oe}=jt({portals:L,defaultContainers:[c(()=>{var v;return(v=E.panelRef.value)!=null?v:d.value})]}),ie=c(()=>w.value?"parent":"leaf"),J=c(()=>u!==null?(u.value&$.Closing)===$.Closing:!1),ge=c(()=>b||J.value?!1:h.value),ue=c(()=>{var v,g,C;return(C=Array.from((g=(v=m.value)==null?void 0:v.querySelectorAll("body > *"))!=null?g:[]).find(P=>P.id==="headlessui-portal-root"?!1:P.contains(y(N))&&P instanceof HTMLElement))!=null?C:null});He(ue,ge);let ye=c(()=>w.value?!0:h.value),we=c(()=>{var v,g,C;return(C=Array.from((g=(v=m.value)==null?void 0:v.querySelectorAll("[data-headlessui-portal]"))!=null?g:[]).find(P=>P.contains(y(N))&&P instanceof HTMLElement))!=null?C:null});He(we,ye),At({type:"Dialog",enabled:c(()=>p.value===0),element:d,onUpdate:(v,g)=>{if(g==="Dialog")return q(v,{[Ce.Add]:()=>i.value+=1,[Ce.Remove]:()=>i.value-=1})}});let be=Dt({name:"DialogDescription",slot:c(()=>({open:s.value}))}),G=f(null),E={titleId:G,panelRef:f(null),dialogState:p,setTitleId(v){G.value!==v&&(G.value=v)},close(){t("close",!1)}};M(Pe,E);let K=c(()=>!(!h.value||w.value));ht(F,(v,g)=>{E.close(),st(()=>g==null?void 0:g.focus())},K);let R=c(()=>!(w.value||p.value!==0));Ie((a=m.value)==null?void 0:a.defaultView,"keydown",v=>{R.value&&(v.defaultPrevented||v.key===et.Escape&&(v.preventDefault(),v.stopPropagation(),E.close()))});let Y=c(()=>!(J.value||p.value!==0||b));return _t(m,Y,v=>{var g;return{containers:[...(g=v.containers)!=null?g:[],F]}}),x(v=>{if(p.value!==0)return;let g=y(d);if(!g)return;let C=new ResizeObserver(P=>{for(let se of P){let B=se.target.getBoundingClientRect();B.x===0&&B.y===0&&B.width===0&&B.height===0&&E.close()}});C.observe(g),v(()=>C.disconnect())}),()=>{let{id:v,open:g,initialFocus:C,...P}=e,se={...n,ref:d,id:v,role:"dialog","aria-modal":p.value===0?!0:void 0,"aria-labelledby":G.value,"aria-describedby":be.value},B={open:p.value===0};return T(Ne,{force:!0},()=>[T($t,()=>T(Pt,{target:d.value},()=>T(Ne,{force:!1},()=>T(ee,{initialFocus:C,containers:F,features:h.value?q(ie.value,{parent:ee.features.RestoreFocus,leaf:ee.features.All&~ee.features.FocusLock}):ee.features.None},()=>T(X,{},()=>k({ourProps:se,theirProps:{...P,...n},slot:B,attrs:n,slots:l,visible:p.value===0,features:Se.RenderStrategy|Se.Static,name:"Dialog"})))))),T(oe)])}}}),Ut=D({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-panel-${pe()}`}},setup(e,{attrs:t,slots:n,expose:l}){let r=De("DialogPanel");l({el:r.panelRef,$el:r.panelRef});function a(o){o.stopPropagation()}return()=>{let{id:o,...i}=e,u={id:o,ref:r.panelRef,onClick:a};return k({ourProps:u,theirProps:i,slot:{open:r.dialogState.value===0},attrs:t,slots:n,name:"DialogPanel"})}}}),Wt=D({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:()=>`headlessui-dialog-title-${pe()}`}},setup(e,{attrs:t,slots:n}){let l=De("DialogTitle");return S(()=>{l.setTitleId(e.id),A(()=>l.setTitleId(null))}),()=>{let{id:r,...a}=e;return k({ourProps:{id:r},theirProps:a,slot:{open:l.dialogState.value===0},attrs:t,slots:n,name:"DialogTitle"})}}});function qt(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function Te(e,...t){e&&t.length>0&&e.classList.add(...t)}function fe(e,...t){e&&t.length>0&&e.classList.remove(...t)}var xe=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(xe||{});function Gt(e,t){let n=re();if(!e)return n.dispose;let{transitionDuration:l,transitionDelay:r}=getComputedStyle(e),[a,o]=[l,r].map(i=>{let[u=0]=i.split(",").filter(Boolean).map(s=>s.includes("ms")?parseFloat(s):parseFloat(s)*1e3).sort((s,d)=>d-s);return u});return a!==0?n.setTimeout(()=>t("finished"),a+o):t("finished"),n.add(()=>t("cancelled")),n.dispose}function _e(e,t,n,l,r,a){let o=re(),i=a!==void 0?qt(a):()=>{};return fe(e,...r),Te(e,...t,...n),o.nextFrame(()=>{fe(e,...n),Te(e,...l),o.add(Gt(e,u=>(fe(e,...l,...t),Te(e,...r),i(u))))}),o.add(()=>fe(e,...t,...n,...l,...r)),o.add(()=>i("cancelled")),o.dispose}function _(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let Re=Symbol("TransitionContext");var Yt=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Yt||{});function zt(){return O(Re,null)!==null}function Qt(){let e=O(Re,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function Xt(){let e=O(Be,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Be=Symbol("NestingContext");function he(e){return"children"in e?he(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function Qe(e){let t=f([]),n=f(!1);S(()=>n.value=!0),A(()=>n.value=!1);function l(a,o=I.Hidden){let i=t.value.findIndex(({id:u})=>u===a);i!==-1&&(q(o,{[I.Unmount](){t.value.splice(i,1)},[I.Hidden](){t.value[i].state="hidden"}}),!he(t)&&n.value&&(e==null||e()))}function r(a){let o=t.value.find(({id:i})=>i===a);return o?o.state!=="visible"&&(o.state="visible"):t.value.push({id:a,state:"visible"}),()=>l(a,I.Unmount)}return{children:t,register:r,unregister:l}}let Xe=Se.RenderStrategy,Ae=D({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:l,expose:r}){let a=f(0);function o(){a.value|=$.Opening,t("beforeEnter")}function i(){a.value&=~$.Opening,t("afterEnter")}function u(){a.value|=$.Closing,t("beforeLeave")}function s(){a.value&=~$.Closing,t("afterLeave")}if(!zt()&&pt())return()=>T(Je,{...e,onBeforeEnter:o,onAfterEnter:i,onBeforeLeave:u,onAfterLeave:s},l);let d=f(null),m=c(()=>e.unmount?I.Unmount:I.Hidden);r({el:d,$el:d});let{show:p,appear:h}=Qt(),{register:w,unregister:b}=Xt(),L=f(p.value?"visible":"hidden"),X={value:!0},F=pe(),N={value:!1},oe=Qe(()=>{!N.value&&L.value!=="hidden"&&(L.value="hidden",b(F),s())});S(()=>{let E=w(F);A(E)}),x(()=>{if(m.value===I.Hidden&&F){if(p.value&&L.value!=="visible"){L.value="visible";return}q(L.value,{hidden:()=>b(F),visible:()=>w(F)})}});let ie=_(e.enter),J=_(e.enterFrom),ge=_(e.enterTo),ue=_(e.entered),ye=_(e.leave),we=_(e.leaveFrom),be=_(e.leaveTo);S(()=>{x(()=>{if(L.value==="visible"){let E=y(d);if(E instanceof Comment&&E.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function G(E){let K=X.value&&!h.value,R=y(d);!R||!(R instanceof HTMLElement)||K||(N.value=!0,p.value&&o(),p.value||u(),E(p.value?_e(R,ie,J,ge,ue,Y=>{N.value=!1,Y===xe.Finished&&i()}):_e(R,ye,we,be,ue,Y=>{N.value=!1,Y===xe.Finished&&(he(oe)||(L.value="hidden",b(F),s()))})))}return S(()=>{ae([p],(E,K,R)=>{G(R),X.value=!1},{immediate:!0})}),M(Be,oe),mt(c(()=>q(L.value,{visible:$.Open,hidden:$.Closed})|a.value)),()=>{let{appear:E,show:K,enter:R,enterFrom:Y,enterTo:v,entered:g,leave:C,leaveFrom:P,leaveTo:se,...B}=e,Ke={ref:d},Ze={...B,...h.value&&p.value&&me.isServer?{class:dt([n.class,B.class,...ie,...J])}:{}};return k({theirProps:Ze,ourProps:Ke,slot:{},slots:l,attrs:n,features:Xe,visible:L.value==="visible",name:"TransitionChild"})}}}),Jt=Ae,Je=D({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:l}){let r=je(),a=c(()=>e.show===null&&r!==null?(r.value&$.Open)===$.Open:e.show);x(()=>{if(![!0,!1].includes(a.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=f(a.value?"visible":"hidden"),i=Qe(()=>{o.value="hidden"}),u=f(!0),s={show:a,appear:c(()=>e.appear||!u.value)};return S(()=>{x(()=>{u.value=!1,a.value?o.value="visible":he(i)||(o.value="hidden")})}),M(Be,i),M(Re,s),()=>{let d=tt(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),m={unmount:e.unmount};return k({ourProps:{...m,as:"template"},theirProps:{},slot:{},slots:{...l,default:()=>[T(Jt,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...m,...d},l.default)]},attrs:{},features:Xe,visible:o.value==="visible",name:"Transition"})}}});const Kt=H("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),Zt={class:"fixed inset-0 overflow-y-auto"},en={class:"flex min-h-full items-center justify-center p-4 text-center"},tn={class:"mt-2"},nn=H("p",{class:"text-sm text-gray-500"}," Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order. ",-1),ln={class:"py-3 sm:flex sm:flex-row-reverse"},sn={__name:"ReusableModal",props:{show:Boolean,title:String,content:String,cancelText:{type:String,default:"Cancel"},confirmText:{type:String,default:"Confirm"}},emits:["close","confirm"],setup(e,{emit:t}){const n=e,l=()=>{t("close")},r=()=>{t("confirm")};return(a,o)=>(ct(),ft(Q(Je),{appear:"",show:e.show,as:"template"},{default:z(()=>[Z(Q(It),{as:"div",onClose:l,class:"relative z-10"},{default:z(()=>[Z(Q(Ae),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:z(()=>[Kt]),_:1}),H("div",Zt,[H("div",en,[Z(Q(Ae),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:z(()=>[Z(Q(Ut),{class:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"},{default:z(()=>[Me(a.$slots,"title",{},()=>[Z(Q(Wt),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:z(()=>[vt("Default Header")]),_:1})]),H("div",tn,[Me(a.$slots,"body",{},()=>[nn])]),H("div",ln,[H("button",{onClick:r,type:"button",class:"inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"},ke(n.confirmText),1),H("button",{onClick:l,type:"button",class:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"},ke(n.cancelText),1)])]),_:3})]),_:3})])])]),_:3})]),_:3},8,["show"]))}};export{sn as _};