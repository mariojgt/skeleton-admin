import{a as Y}from"./axios-d44f9c8c.js";import{_ as Ae,m as _e}from"./App.vue_vue_type_script_setup_true_lang-762eaa42.js";import{_ as ke,a as Ne}from"./CommentBox-0435ea3d.js";import{_ as U}from"./dynamicIcon.vue_vue_type_script_setup_true_lang-9716a120.js";import{y as Ue,o as M,g as S,d as s,m as We,k as He,t as R,aU as ze,v as Ie,z as De,l as de,x as V,e as _,a as G,A as Me,b as ue,w as X,u as P,i as ee,Q as W,s as Ce,F as Le}from"./preset-59cdb044.js";import{_ as Ze,a as qe}from"./YouTube-15b7545c.js";import Qe from"./Sidebar-4ad797a5.js";import Ge from"./SidebarControl-fe7bdc99.js";import Je from"./EpisodeGuide-40b138e8.js";import{Q as Ke,V as Ye,N as Xe}from"./disclosure-fd4c5f2d.js";import"./FlashMessage-d89a6fb8.js";import"./index.esm-df9f2d71.js";import"./ReusableModal-c8db323a.js";import"./micro-task-f32ab903.js";import"./keyboard-9c71fe26.js";import"./hidden-a002ee06.js";import"./open-closed-ddebb77a.js";import"./SearchSidebar-ed476845.js";import"./Input.vue_vue_type_script_setup_true_lang-c3b4d3bc.js";import"./Password-37ecdc94.js";import"./dark-fe9bd6e8.js";import"./CommentsSingle.vue_vue_type_script_setup_true_lang-b4badcf5.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DifficultLevel.vue_vue_type_script_setup_true_lang-96e9ed1e.js";import"./use-resolve-button-type-850145e6.js";const et={class:""},tt={class:"rounded-xl bg-dark-200 p-6 w-full"},st={class:"max-w-7xl mx-auto"},rt={class:"mb-6 bg-dark-300 rounded-xl p-6 relative overflow-hidden"},at={class:"flex items-start gap-6"},nt={class:"relative hidden md:block w-24 h-24"},ot={class:"absolute inset-0"},lt={class:"flex-1"},it={class:"text-2xl md:text-3xl font-bold text-white mb-4"},ct={key:0,class:"space-y-2"},dt={class:"flex justify-between items-center text-xs text-gray-400"},ut={class:"h-1 w-full bg-gray-700 rounded-full overflow-hidden"},ft={class:"flex justify-between px-1"},ht={class:"flex flex-col lg:flex-row items-center justify-between gap-6"},mt={class:"flex-1 w-full lg:w-auto space-y-6"},pt={class:"flex flex-wrap md:flex-nowrap gap-3 w-full justify-between items-center"},vt={class:"flex items-center gap-3"},gt={class:"flex flex-wrap md:flex-nowrap gap-3 flex-1 md:justify-end"},bt={class:"flex justify-between lg:hidden"},yt={class:"flex flex-wrap gap-6 text-sm"},xt={class:"text-white font-medium"},wt={class:"text-white font-medium"},_t=Ue({__name:"Lesson",props:{lesson:{type:Object,default:()=>({})},lessonProgress:{type:Number,default:0}},emits:["video-like","next-episode","previous-episode","complete-lesson","watch-later"],setup(A,{emit:r}){const h=A,w=r,I=()=>{w("video-like",h.lesson.id)},B=()=>{w("next-episode",h.lesson.next_lesson_id)},C=()=>{w("previous-episode",h.lesson.previous_lesson_id)},H=()=>{w("complete-lesson",h.lesson.id)},q=()=>{w("watch-later",h.lesson.id)};return(z,x)=>(M(),S("section",et,[s("div",tt,[s("div",st,[s("div",rt,[s("div",at,[s("div",nt,[s("div",ot,[We(z.$slots,"default",{},()=>[x[0]||(x[0]=He('<svg viewBox="0 0 100 100" class="w-full h-full"><path d="M 0 50 A 50 50 0 1 1 50 100" fill="none" stroke="#fbbf24" stroke-width="2" class="opacity-70"></path><circle cx="0" cy="50" r="3" fill="#fbbf24" class="opacity-70"></circle><circle cx="15" cy="85" r="3" fill="#fbbf24" class="opacity-70"></circle><circle cx="50" cy="100" r="3" fill="#fbbf24" class="opacity-70"></circle></svg>',1))])])]),s("div",lt,[x[2]||(x[2]=s("div",{class:"inline-block bg-blue-900/30 text-blue-400 text-xs font-medium px-3 py-1 rounded-full mb-3"}," You're Watching ",-1)),s("h1",it,R(h.lesson.name),1),A.lessonProgress!==0?(M(),S("div",ct,[s("div",dt,[x[1]||(x[1]=s("span",null,"Progress",-1)),s("span",null,R(A.lessonProgress)+"%",1)]),s("div",ut,[s("div",{class:"h-full bg-blue-700 transition-all duration-300 rounded-full",style:ze({width:`${A.lessonProgress}%`})},null,4)]),s("div",ft,[(M(),S(Ie,null,De(5,T=>s("div",{key:T,class:de(["w-1 h-1 rounded-full",A.lessonProgress>=T*20?"bg-primary":"bg-gray-600"])},null,2)),64))])])):V("",!0)])])]),s("div",ht,[h.lesson.previous_lesson_id?(M(),S("button",{key:0,onClick:C,class:"hidden lg:flex h-12 w-12 items-center justify-center rounded-full bg-primary hover:bg-primary/20 transition-colors"},[_(U,{componentId:"chevronLeft",class:"w-6 h-6 text-white"})])):V("",!0),s("div",mt,[s("div",pt,[s("div",vt,[s("button",{onClick:I,class:de(["btn btn-circle btn-primary hover:bg-primary/20",{"text-red-500":h.lesson.is_mark_as_liked}])},[_(U,{componentId:"heart",class:"w-5 h-5"})],2)]),s("div",gt,[s("button",{onClick:H,class:de(["btn flex-1 md:w-auto gap-2 min-w-[160px]",h.lesson.is_completed?"btn-success":"btn-primary"])},[_(U,{componentId:"check",class:"w-5 h-5"}),x[3]||(x[3]=s("span",null,"Mark as Complete",-1))],2),s("button",{onClick:q,class:de(["btn flex-1 md:w-auto gap-2 min-w-[160px]",h.lesson.watch_later?"btn-error":"btn-primary"])},[_(U,{componentId:"clock",class:"w-5 h-5"}),x[4]||(x[4]=s("span",null,"Add to Watchlist",-1))],2)])]),s("div",bt,[h.lesson.previous_lesson_id?(M(),S("button",{key:0,onClick:C,class:"btn btn-circle btn-primary"},[_(U,{componentId:"chevronLeft",class:"w-6 h-6"})])):V("",!0),h.lesson.next_lesson_id?(M(),S("button",{key:1,onClick:B,class:"btn btn-circle btn-primary"},[_(U,{componentId:"chevronRight",class:"w-6 h-6"})])):V("",!0)]),s("div",yt,[s("div",null,[x[5]||(x[5]=s("div",{class:"text-gray-400 text-xs mb-1"},"Run Time",-1)),s("div",xt,R(h.lesson.lesson_duration),1)]),s("div",null,[x[6]||(x[6]=s("div",{class:"text-gray-400 text-xs mb-1"},"Published",-1)),s("div",wt,R(h.lesson.created_diff),1)])])]),h.lesson.next_lesson_id?(M(),S("button",{key:1,onClick:B,class:"hidden lg:flex h-12 w-12 items-center justify-center rounded-full bg-primary hover:bg-primary/20 transition-colors"},[_(U,{componentId:"chevronRight",class:"w-6 h-6 text-white"})])):V("",!0)])])])]))}});var ge={};(function A(r,h,w,I){var B=!!(r.Worker&&r.Blob&&r.Promise&&r.OffscreenCanvas&&r.OffscreenCanvasRenderingContext2D&&r.HTMLCanvasElement&&r.HTMLCanvasElement.prototype.transferControlToOffscreen&&r.URL&&r.URL.createObjectURL),C=typeof Path2D=="function"&&typeof DOMMatrix=="function",H=function(){if(!r.OffscreenCanvas)return!1;var t=new OffscreenCanvas(1,1),e=t.getContext("2d");e.fillRect(0,0,1,1);var a=t.transferToImageBitmap();try{e.createPattern(a,"no-repeat")}catch{return!1}return!0}();function q(){}function z(t){var e=h.exports.Promise,a=e!==void 0?e:r.Promise;return typeof a=="function"?new a(t):(t(q,q),null)}var x=function(t,e){return{transform:function(a){if(t)return a;if(e.has(a))return e.get(a);var l=new OffscreenCanvas(a.width,a.height),i=l.getContext("2d");return i.drawImage(a,0,0),e.set(a,l),l},clear:function(){e.clear()}}}(H,new Map),T=function(){var t=Math.floor(16.666666666666668),e,a,l={},i=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(c){var d=Math.random();return l[d]=requestAnimationFrame(function o(u){i===u||i+t-1<u?(i=u,delete l[d],c()):l[d]=requestAnimationFrame(o)}),d},a=function(c){l[c]&&cancelAnimationFrame(l[c])}):(e=function(c){return setTimeout(c,t)},a=function(c){return clearTimeout(c)}),{frame:e,cancel:a}}(),te=function(){var t,e,a={};function l(i){function c(d,o){i.postMessage({options:d||{},callback:o})}i.init=function(o){var u=o.transferControlToOffscreen();i.postMessage({canvas:u},[u])},i.fire=function(o,u,m){if(e)return c(o,null),e;var b=Math.random().toString(36).slice(2);return e=z(function(v){function y(k){k.data.callback===b&&(delete a[b],i.removeEventListener("message",y),e=null,x.clear(),m(),v())}i.addEventListener("message",y),c(o,b),a[b]=y.bind(null,{data:{callback:b}})}),e},i.reset=function(){i.postMessage({reset:!0});for(var o in a)a[o](),delete a[o]}}return function(){if(t)return t;if(!w&&B){var i=["var CONFETTI, SIZE = {}, module = {};","("+A.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([i])))}catch(c){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",c),null}l(t)}return t}}(),fe={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function J(t,e){return e?e(t):t}function D(t){return t!=null}function g(t,e,a){return J(t&&D(t[e])?t[e]:fe[e],a)}function he(t){return t<0?0:Math.floor(t)}function me(t,e){return Math.floor(Math.random()*(e-t))+t}function p(t){return parseInt(t,16)}function n(t){return t.map($)}function $(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:p(e.substring(0,2)),g:p(e.substring(2,4)),b:p(e.substring(4,6))}}function se(t){var e=g(t,"origin",Object);return e.x=g(e,"x",Number),e.y=g(e,"y",Number),e}function re(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function ae(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function ne(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}function oe(t,e,a,l,i,c,d,o,u){t.save(),t.translate(e,a),t.rotate(c),t.scale(l,i),t.arc(0,0,1,d,o,u),t.restore()}function le(t){var e=t.angle*(Math.PI/180),a=t.spread*(Math.PI/180);return{x:t.x,y:t.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:t.startVelocity*.5+Math.random()*t.startVelocity,angle2D:-e+(.5*a-Math.random()*a),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:t.color,shape:t.shape,tick:0,totalTicks:t.ticks,decay:t.decay,drift:t.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:t.gravity*3,ovalScalar:.6,scalar:t.scalar,flat:t.flat}}function ie(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var a=e.tick++/e.totalTicks,l=e.x+e.random*e.tiltCos,i=e.y+e.random*e.tiltSin,c=e.wobbleX+e.random*e.tiltCos,d=e.wobbleY+e.random*e.tiltSin;if(t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-a)+")",t.beginPath(),C&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))t.fill(Pe(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(c-l)*.1,Math.abs(d-i)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var o=Math.PI/10*e.wobble,u=Math.abs(c-l)*.1,m=Math.abs(d-i)*.1,b=e.shape.bitmap.width*e.scalar,v=e.shape.bitmap.height*e.scalar,y=new DOMMatrix([Math.cos(o)*u,Math.sin(o)*u,-Math.sin(o)*m,Math.cos(o)*m,e.x,e.y]);y.multiplySelf(new DOMMatrix(e.shape.matrix));var k=t.createPattern(x.transform(e.shape.bitmap),"no-repeat");k.setTransform(y),t.globalAlpha=1-a,t.fillStyle=k,t.fillRect(e.x-b/2,e.y-v/2,b,v),t.globalAlpha=1}else if(e.shape==="circle")t.ellipse?t.ellipse(e.x,e.y,Math.abs(c-l)*e.ovalScalar,Math.abs(d-i)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):oe(t,e.x,e.y,Math.abs(c-l)*e.ovalScalar,Math.abs(d-i)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var f=Math.PI/2*3,L=4*e.scalar,j=8*e.scalar,E=e.x,N=e.y,Z=5,O=Math.PI/Z;Z--;)E=e.x+Math.cos(f)*j,N=e.y+Math.sin(f)*j,t.lineTo(E,N),f+=O,E=e.x+Math.cos(f)*L,N=e.y+Math.sin(f)*L,t.lineTo(E,N),f+=O;else t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(i)),t.lineTo(Math.floor(c),Math.floor(d)),t.lineTo(Math.floor(l),Math.floor(e.wobbleY));return t.closePath(),t.fill(),e.tick<e.totalTicks}function ce(t,e,a,l,i){var c=e.slice(),d=t.getContext("2d"),o,u,m=z(function(b){function v(){o=u=null,d.clearRect(0,0,l.width,l.height),x.clear(),i(),b()}function y(){w&&!(l.width===I.width&&l.height===I.height)&&(l.width=t.width=I.width,l.height=t.height=I.height),!l.width&&!l.height&&(a(t),l.width=t.width,l.height=t.height),d.clearRect(0,0,l.width,l.height),c=c.filter(function(k){return ie(d,k)}),c.length?o=T.frame(y):v()}o=T.frame(y),u=v});return{addFettis:function(b){return c=c.concat(b),m},canvas:t,promise:m,reset:function(){o&&T.cancel(o),u&&u()}}}function K(t,e){var a=!t,l=!!g(e||{},"resize"),i=!1,c=g(e,"disableForReducedMotion",Boolean),d=B&&!!g(e||{},"useWorker"),o=d?te():null,u=a?re:ae,m=t&&o?!!t.__confetti_initialized:!1,b=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,v;function y(f,L,j){for(var E=g(f,"particleCount",he),N=g(f,"angle",Number),Z=g(f,"spread",Number),O=g(f,"startVelocity",Number),Fe=g(f,"decay",Number),je=g(f,"gravity",Number),Ee=g(f,"drift",Number),be=g(f,"colors",n),Be=g(f,"ticks",Number),ye=g(f,"shapes"),$e=g(f,"scalar"),Oe=!!g(f,"flat"),xe=se(f),we=E,pe=[],Re=t.width*xe.x,Ve=t.height*xe.y;we--;)pe.push(le({x:Re,y:Ve,angle:N,spread:Z,startVelocity:O,color:be[we%be.length],shape:ye[me(0,ye.length)],ticks:Be,decay:Fe,gravity:je,drift:Ee,scalar:$e,flat:Oe}));return v?v.addFettis(pe):(v=ce(t,pe,u,L,j),v.promise)}function k(f){var L=c||g(f,"disableForReducedMotion",Boolean),j=g(f,"zIndex",Number);if(L&&b)return z(function(O){O()});a&&v?t=v.canvas:a&&!t&&(t=ne(j),document.body.appendChild(t)),l&&!m&&u(t);var E={width:t.width,height:t.height};o&&!m&&o.init(t),m=!0,o&&(t.__confetti_initialized=!0);function N(){if(o){var O={getBoundingClientRect:function(){if(!a)return t.getBoundingClientRect()}};u(O),o.postMessage({resize:{width:O.width,height:O.height}});return}E.width=E.height=null}function Z(){v=null,l&&(i=!1,r.removeEventListener("resize",N)),a&&t&&(document.body.removeChild(t),t=null,m=!1)}return l&&!i&&(i=!0,r.addEventListener("resize",N,!1)),o?o.fire(f,E,Z):y(f,E,Z)}return k.reset=function(){o&&o.reset(),v&&v.reset()},k}var Q;function F(){return Q||(Q=K(null,{useWorker:!0,resize:!0})),Q}function Pe(t,e,a,l,i,c,d){var o=new Path2D(t),u=new Path2D;u.addPath(o,new DOMMatrix(e));var m=new Path2D;return m.addPath(u,new DOMMatrix([Math.cos(d)*i,Math.sin(d)*i,-Math.sin(d)*c,Math.cos(d)*c,a,l])),m}function Se(t){if(!C)throw new Error("path confetti are not supported in this browser");var e,a;typeof t=="string"?e=t:(e=t.path,a=t.matrix);var l=new Path2D(e),i=document.createElement("canvas"),c=i.getContext("2d");if(!a){for(var d=1e3,o=d,u=d,m=0,b=0,v,y,k=0;k<d;k+=2)for(var f=0;f<d;f+=2)c.isPointInPath(l,k,f,"nonzero")&&(o=Math.min(o,k),u=Math.min(u,f),m=Math.max(m,k),b=Math.max(b,f));v=m-o,y=b-u;var L=10,j=Math.min(L/v,L/y);a=[j,0,0,j,-Math.round(v/2+o)*j,-Math.round(y/2+u)*j]}return{type:"path",path:e,matrix:a}}function Te(t){var e,a=1,l="#000000",i='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof t=="string"?e=t:(e=t.text,a="scalar"in t?t.scalar:a,i="fontFamily"in t?t.fontFamily:i,l="color"in t?t.color:l);var c=10*a,d=""+c+"px "+i,o=new OffscreenCanvas(c,c),u=o.getContext("2d");u.font=d;var m=u.measureText(e),b=Math.ceil(m.actualBoundingBoxRight+m.actualBoundingBoxLeft),v=Math.ceil(m.actualBoundingBoxAscent+m.actualBoundingBoxDescent),y=2,k=m.actualBoundingBoxLeft+y,f=m.actualBoundingBoxAscent+y;b+=y+y,v+=y+y,o=new OffscreenCanvas(b,v),u=o.getContext("2d"),u.font=d,u.fillStyle=l,u.fillText(e,k,f);var L=1/a;return{type:"bitmap",bitmap:o.transferToImageBitmap(),matrix:[L,0,0,L,-b*L/2,-v*L/2]}}h.exports=function(){return F().apply(this,arguments)},h.exports.reset=function(){F().reset()},h.exports.create=K,h.exports.shapeFromPath=Se,h.exports.shapeFromText=Te})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),ge,!1);const ve=ge.exports;ge.exports.create;const kt={key:0,class:"bg-dark-100"},Mt={class:"py-8 px-4 mx-auto max-w-screen-2xl lg:py-16"},Ct={key:1,class:"flex items-center justify-center bg-gradient-to-tl from-dark-100 to-dark-300 border border-gray-800 shadow-lg rounded-lg mb-4 p-8 bg-subscribe"},Lt={class:"flex flex-col items-center space-y-6"},It={class:"text-center text-2xl lg:text-4xl font-extrabold leading-tight text-white drop-shadow-lg"},Pt={class:"font-bold not-italic text-white block"},St={class:"mt-5 text-lg text-center text-gray-300"},Tt={class:"flex flex-col sm:flex-row justify-center gap-3 mt-10 px-4 sm:px-0"},Ft={class:"flex items-center justify-center gap-2"},jt={key:2,class:"my-5 border bg-base-100 border-accent rounded"},Et={class:"h-full p-4 bg-dark-100 border-b border-accent"},Bt={class:"flex items-center justify-between"},$t={class:"flex justify-between gap-1"},Ot={class:"text-lg font-bold text-neutral"},Rt={class:"mt-2"},Vt={class:"text-2xl font-bold text-neutral hover:underline",target:"_blank"},At=["innerHTML"],Nt={key:3},Ut=["src","alt"],Wt={class:"mt-3"},Ht=["innerHTML"],zt={key:1,class:"bg-dark-200"},Dt={class:"py-8 px-4 mx-auto max-w-screen-xl lg:py-16"},Zt={class:"card bg-dark-blue-100 w-full"},qt=["alt","src"],Qt={class:"card-body"},Gt={class:"card-title font-bold text-5xl mb-5"},Jt=["innerHTML"],Kt={class:"card-actions justify-start mt-3"},Yt={class:"flex justify-between"},Xt={class:"mt-1"},Cs={__name:"View",props:{course:{type:Object,required:!0},course_instructor:{type:Object,required:!0},sections:{type:Array,required:!0},current_lesson:{type:Object,required:!0},editor_key:{type:String,required:!0}},setup(A){const r=A;let h=G(!1),w=G(!1),I=G(!1);const B=async p=>{p&&await Le.get(route("course.view",{slug:r.course.slug,lesson:p}),{preserveState:!0,preserveScroll:!0,only:["current_lesson"]})},C=async p=>{W().props.isUserAuth&&await Le.post(route("track.lesson.progress",{lesson:r.current_lesson.data.id}),{progress:p},{preserveState:!0,preserveScroll:!0,only:["current_lesson"]})},H=async p=>{W().props.isUserAuth?(await Y.post(route("track.lesson.complete",r.current_lesson.data.id)).then(function(n){r.current_lesson.data.is_completed=n.data.status}),ve({particleCount:100,spread:100,origin:{y:.6}})):w.value=!0},q=async p=>{W().props.isUserAuth?(await Y.post(route("track.lesson.like",p)).then(function(n){r.current_lesson.data.is_mark_as_liked=n.data.status}),ve({particleCount:100,spread:100,origin:{y:.6}})):w.value=!0},z=async p=>{W().props.isUserAuth?(await Y.post(route("track.lesson.watch.later",p)).then(function(n){r.current_lesson.data.watch_later=n.data.status}),ve({particleCount:100,spread:100,origin:{y:.6}})):w.value=!0};let x=G(null),T=G(null);const te=async p=>{W().props.isUserAuth&&(x.value=p,await Y.post(route("track.lesson.points.progress",r.current_lesson.data.id),{seconds:x.value}).then(function(n){n.data.status&&(T.value=n.data.lessonPoint)}))},fe=async()=>{var p,n,$;($=(n=(p=r.sections)==null?void 0:p.data[0])==null?void 0:n.children[0])!=null&&$.id&&B(r.sections.data[0].children[0].id)},J=Me(()=>({src:r.course.media[0].url.default,alt:r.course.media[0].url.alt}));let D=G(!1);const g=async()=>{W().props.isUserAuth?D.value=!0:w.value=!0},he=async()=>{I.value=!0,W().props.isUserAuth?Y.post(route("stripe.product.checkout"),{products:[{id:r.course.id,quantity:1,type:"course"}]}).then(function(p){window.location.href=p.data.session}).catch(function(p){I.value=!1}):w.value=!0},me=Me(()=>{var p,n;return(n=(p=W().props.subscriptionsProducts)==null?void 0:p.data[0])==null?void 0:n.price});return(p,n)=>(M(),ue(Ae,{showHeader:!1,showFooter:!1,displayLogin:P(w),onCloseLogin:n[4]||(n[4]=$=>ee(w)?w.value=!1:w=!1),displaySubscription:P(D),onCloseSubscription:n[5]||(n[5]=$=>ee(D)?D.value=!1:D=!1),displayLoading:P(I),onCloseLoading:n[6]||(n[6]=$=>ee(I)?I.value=!1:I=!1)},{default:X(()=>{var $,se,re,ae,ne,oe,le,ie,ce,K,Q;return[_(Qe,{sideBarOpen:P(h),mainImageInfo:J.value,course:r.course,sections:r.sections,currentLesson:r.current_lesson,onChangeLesson:B,onCloseSidebar:n[0]||(n[0]=F=>ee(h)?h.value=!1:h=!1)},null,8,["sideBarOpen","mainImageInfo","course","sections","currentLesson"]),($=r.current_lesson)!=null&&$.data?(M(),S("section",kt,[s("div",Mt,[r.current_lesson.data.video_accessible?(M(),S(Ie,{key:0},[r.current_lesson.data.player_type==="vimeo"?(M(),ue(Ze,{key:0,lessonUrl:r.current_lesson.data.video_url,"lesson-id":r.current_lesson.data.id,seek:(re=(se=r.current_lesson.data)==null?void 0:se.lesson_progress)==null?void 0:re.watch_time,onVideoRunning:C,onVideoPause:C,onVideoEnded:n[1]||(n[1]=F=>{C(F),H(F)}),onVideoStart:C,onVideoLessonPoints:te},null,8,["lessonUrl","lesson-id","seek"])):V("",!0),r.current_lesson.data.player_type==="youtube"?(M(),ue(qe,{key:1,videoId:r.current_lesson.data.video_id,"lesson-id":r.current_lesson.data.id,seek:(ne=(ae=r.current_lesson.data)==null?void 0:ae.lesson_progress)==null?void 0:ne.watch_time,onVideoRunning:C,onVideoPause:C,onVideoEnded:n[2]||(n[2]=F=>{C(F),H(F)}),onVideoStart:C,onVideoLessonPoints:te},null,8,["videoId","lesson-id","seek"])):V("",!0)],64)):(M(),S("div",Ct,[s("div",Lt,[n[10]||(n[10]=s("figure",{class:"mb-4 transform transition-transform hover:scale-105"},[s("img",{class:"w-52 h-52 mx-auto rounded-md shadow-lg opacity-90 hover:opacity-100 transition-opacity duration-300",src:"/vendor/Image/illustration/subscribe1.png",alt:"Subscribe to access premium content"})],-1)),s("h2",It,[s("cite",Pt,"“"+R(r.current_lesson.data.name)+"”",1),n[7]||(n[7]=s("span",{class:"font-bold mt-2 block"},[Ce(" is for "),s("span",{class:"text-green-500"},"Premium"),Ce(" members only. ")],-1))]),s("div",St,[n[9]||(n[9]=s("p",{class:"text-balance leading-relaxed"}," For the price of a game skin, you'll gain access to exclusive content and hundreds of hours of game development tutorials from TheDevRealm. Whether you're just starting out or looking to hone your skills, join us to learn from top creators and take your game development journey to the next level! ",-1)),s("div",Tt,[s("button",{class:"group btn-subscribe",onClick:g},[n[8]||(n[8]=s("span",{class:"btn-subscribe-shine"},null,-1)),s("span",Ft," Watch Everything for "+R(P(_e)(me.value)),1)]),s("button",{onClick:he,class:"btn btn-wide bg-primary"},"Buy this Course for "+R(P(_e)(r.course.course_price)),1)])])])])),P(T)?(M(),S("div",jt,[s("div",Et,[s("div",Bt,[s("div",$t,[n[11]||(n[11]=s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 text-white"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})],-1)),s("span",Ot,R(P(T).seconds)+"s ",1)]),n[12]||(n[12]=s("a",{class:"px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500",target:"_blank"},"Close",-1))]),s("div",Rt,[s("a",Vt,R(P(T).title),1),s("div",{innerHTML:P(T).content,class:"mt-2 w-full text-lg text-neutral fancy-editor"},null,8,At)])])])):V("",!0),r.current_lesson.data.video_accessible?(M(),S("div",Nt,[(oe=r.current_lesson)!=null&&oe.data?(M(),ue(_t,{key:0,lesson:(le=r.current_lesson)==null?void 0:le.data,lessonProgress:(ce=(ie=r.current_lesson.data)==null?void 0:ie.lesson_progress)==null?void 0:ce.progress,onNextEpisode:B,onPreviousEpisode:B,onVideoLike:q,onCompleteLesson:H,onWatchLater:z},{default:X(()=>[s("img",{src:r.course.media[0].url.default,alt:r.course.media[0].alt,class:"w-full h-full object-cover rounded-lg"},null,8,Ut)]),_:1},8,["lesson","lessonProgress"])):V("",!0),s("div",Wt,[_(P(Xe),null,{default:X(({open:F})=>[_(P(Ke),{class:"flex justify-between bg-dark-200 text-white font-bold text-4xl p-3 rounded-lg w-full text-left hover:bg-dark-blue-200 hover:text-accent"},{default:X(()=>[n[13]||(n[13]=s("span",null,"About This Episode",-1)),_(U,{componentId:"chevronDown"})]),_:1}),_(P(Ye),{class:"p-2 bg-dark-blue-100"},{default:X(()=>[s("div",{class:"mb-8 text-lg font-normal text-neutral fancy-editor",innerHTML:r.current_lesson.data.description},null,8,Ht)]),_:1})]),_:1})]),_(ke,{class:"mt-4",admin:(K=r.course_instructor)==null?void 0:K.data},null,8,["admin"]),_(Ne,{modelId:r.current_lesson.data.id,modelClass:"lesson"},null,8,["modelId"])])):V("",!0),n[14]||(n[14]=s("div",{class:"max-w-7xl mx-auto"},[s("h2",{class:"text-center text-white text-xl mb-8 bg-dark-blue-300 p-4 rounded-lg"}," Or check out some of our FREE series. "),s("div",{class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},[s("div",{class:"card bg-dark-500 hover:bg-dark-blue-300 transition-all duration-300 shadow-xl"},[s("div",{class:"card-body flex flex-row items-center gap-4"},[s("div",{class:"w-16 h-16 rounded-full bg-purple-900 flex items-center justify-center"},[s("svg",{class:"w-8 h-8 text-purple-300",viewBox:"0 0 24 24",fill:"currentColor"},[s("path",{d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"})])]),s("div",{class:"flex-grow"},[s("h2",{class:"card-title text-gray-200"},"Livewire 3 From Scratch"),s("div",{class:"badge badge-primary"},"Free")])])]),s("div",{class:"card bg-dark-500 hover:bg-dark-blue-300 transition-all duration-300 shadow-xl"},[s("div",{class:"card-body flex flex-row items-center gap-4"},[s("div",{class:"w-16 h-16 rounded-full bg-blue-900 flex items-center justify-center"},[s("svg",{class:"w-8 h-8 text-blue-300",viewBox:"0 0 24 24",fill:"currentColor"},[s("path",{d:"M12 21.7C3.64 21.7 0 12 0 12S3.64 2.3 12 2.3C20.36 2.3 24 12 24 12S20.36 21.7 12 21.7Z"})])]),s("div",{class:"flex-grow"},[s("h2",{class:"card-title text-gray-200"},"How to Contribute to Open Source"),s("div",{class:"badge badge-primary"},"Free")])])]),s("div",{class:"card bg-dark-500 hover:bg-dark-blue-300 transition-all duration-300 shadow-xl"},[s("div",{class:"card-body flex flex-row items-center gap-4"},[s("div",{class:"w-16 h-16 rounded-full bg-red-900 flex items-center justify-center"},[s("svg",{class:"w-8 h-8 text-red-300",viewBox:"0 0 24 24",fill:"currentColor"},[s("path",{d:"M13.7 2.3C13.1 1.7 12.3 1.7 11.7 2.3L2.3 11.7C1.7 12.3 1.7 13.1 2.3 13.7L11.7 23.1C12.3 23.7 13.1 23.7 13.7 23.1L23.1 13.7C23.7 13.1 23.7 12.3 23.1 11.7L13.7 2.3Z"})])]),s("div",{class:"flex-grow"},[s("h2",{class:"card-title text-gray-200"},"30 Days to Learn Laravel"),s("div",{class:"badge badge-primary"},"Free")])])]),s("div",{class:"card bg-dark-500 hover:bg-dark-blue-300 transition-all duration-300 shadow-xl"},[s("div",{class:"card-body flex flex-row items-center gap-4"},[s("div",{class:"w-16 h-16 rounded-full bg-pink-900 flex items-center justify-center"},[s("svg",{class:"w-8 h-8 text-pink-300",viewBox:"0 0 24 24",fill:"currentColor"},[s("path",{d:"M12 2L2 7V17L12 22L22 17V7L12 2Z"})])]),s("div",{class:"flex-grow"},[s("h2",{class:"card-title text-gray-200"},"What's New in Laravel 11"),s("div",{class:"badge badge-primary"},"Free")])])]),s("div",{class:"card bg-dark-500 hover:bg-dark-blue-300 transition-all duration-300 shadow-xl"},[s("div",{class:"card-body flex flex-row items-center gap-4"},[s("div",{class:"w-16 h-16 rounded-full bg-indigo-900 flex items-center justify-center"},[s("svg",{class:"w-8 h-8 text-indigo-300",viewBox:"0 0 24 24",fill:"currentColor"},[s("path",{d:"M3 3H21V21H3V3ZM5 5V19H19V5H5Z"})])]),s("div",{class:"flex-grow"},[s("h2",{class:"card-title text-gray-200"},"Small Laravel Packages, Big Impact"),s("div",{class:"badge badge-primary"},"Free")])])]),s("div",{class:"card bg-dark-500 hover:bg-dark-blue-300 transition-all duration-300 shadow-xl"},[s("div",{class:"card-body flex flex-row items-center gap-4"},[s("div",{class:"w-16 h-16 rounded-full bg-violet-900 flex items-center justify-center"},[s("svg",{class:"w-8 h-8 text-violet-300",viewBox:"0 0 24 24",fill:"currentColor"},[s("path",{d:"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"})])]),s("div",{class:"flex-grow"},[s("h2",{class:"card-title text-gray-200"},"Laravel Nova Mastery"),s("div",{class:"badge badge-primary"},"Free")])])])])],-1))])])):(M(),S("section",zt,[s("div",Dt,[s("div",Zt,[s("figure",null,[s("img",{alt:J.value.alt,src:J.value.src},null,8,qt)]),s("div",Qt,[s("h2",Gt,R(r.course.title),1),s("div",{class:"generic-content font-bold text-xl text-neutral",innerHTML:r.course.short_description},null,8,Jt),s("div",Kt,[s("a",{onClick:fe,href:"#",class:"inline-flex items-center justify-center h-16 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-white-600 border-solid rounded-full cursor-pointer select-none hover:text-primary hover:bg-accent hover:border-secondary focus:shadow-xs focus:no-underline w-full"},[s("div",Yt,[s("div",Xt,[_(U,{componentId:"play"})])])])])])]),_(Je,{course:r.course},null,8,["course"]),_(ke,{class:"mt-4",admin:(Q=r.course_instructor)==null?void 0:Q.data},null,8,["admin"])])])),_(Ge,{onOpenSidebar:n[3]||(n[3]=F=>ee(h)?h.value=!0:h=!0)})]}),_:1},8,["displayLogin","displaySubscription","displayLoading"]))}};export{Cs as default};