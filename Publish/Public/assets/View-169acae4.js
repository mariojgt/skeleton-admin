import{a as J}from"./axios-d44f9c8c.js";import{_ as Ae,m as we}from"./App.vue_vue_type_script_setup_true_lang-5319d5d2.js";import{_ as Me,a as Ve}from"./CommentBox-debdab87.js";import{_ as D}from"./dynamicIcon.vue_vue_type_script_setup_true_lang-9716a120.js";import{y as Ne,o as P,g as V,d as r,e as M,x as Z,l as he,t as $,a as H,A as ke,b as ie,w as le,u as T,i as K,Q as A,v as Ue,s as Ce,F as Ie}from"./preset-59cdb044.js";import{_ as We,a as De}from"./YouTube-15b7545c.js";import ze from"./Sidebar-8ef224a0.js";import qe from"./SidebarControl-b3c47b95.js";import He from"./EpisodeGuide-1b4f53c5.js";import{Q as Ze,V as Qe,N as Ge}from"./disclosure-fd4c5f2d.js";import"./FlashMessage-70556e4e.js";import"./index.esm-df9f2d71.js";import"./ReusableModal-c8db323a.js";import"./micro-task-f32ab903.js";import"./keyboard-9c71fe26.js";import"./hidden-a002ee06.js";import"./open-closed-ddebb77a.js";import"./SearchSidebar-ed476845.js";import"./Input.vue_vue_type_script_setup_true_lang-c3b4d3bc.js";import"./Password-37ecdc94.js";import"./dark-fe9bd6e8.js";import"./CommentsSingle.vue_vue_type_script_setup_true_lang-ccb319f2.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DifficultLevel.vue_vue_type_script_setup_true_lang-96e9ed1e.js";import"./use-resolve-button-type-850145e6.js";const Je={class:"bg-dark-blue-100 rounded-lg"},Ke={class:"panel relative transition-colors duration-300 dark px-8 rounded-xl flex w-full flex-wrap py-0 lg:flex-nowrap"},Xe={class:"relative mx-auto basis-full items-center justify-between py-6 font-bold text-white md:flex md:justify-center lg:flex-1 lg:basis-0 max-w-screen-2xl"},Ye={class:"flex-1 md:flex md:space-x-6 2xl:mx-[2.5rem]"},et={class:"px-4 md:flex-1 md:px-0 flex flex-col justify-between"},tt={class:"mb-8"},rt={class:"flex items-center"},st={class:"text-2xl font-bold leading-tight widescreen:text-[30px]"},nt={class:"flex divide-x divide-solid divide-grey-600/15 md:ml-1"},at={class:"px-5"},ot={class:"text-sm font-semibold text-white"},it={class:"px-5 md:hidden xl:block"},lt={class:"text-sm font-semibold text-white"},dt={class:"mx-auto mt-8 flex flex-wrap items-center gap-2 self-center md:mt-0 md:max-w-2xs lg:mx-0 xl:max-w-[200px]"},ct={class:"flex-1",style:{"flex-basis":"180px"}},ut={class:"flex-1",style:{"flex-basis":"180px"}},ft=Ne({__name:"Lesson",props:{lesson:{type:Object,default:()=>({})}},emits:["video-like","next-episode","previous-episode","complete-lesson","watch-later"],setup(Q,{emit:s}){const m=Q,x=s,C=()=>{x("video-like",m.lesson.id)},O=()=>{x("next-episode",m.lesson.next_lesson_id)},I=()=>{x("previous-episode",m.lesson.previous_lesson_id)},N=()=>{x("complete-lesson",m.lesson.id)},z=()=>{x("watch-later",m.lesson.id)};return(q,_)=>(P(),V("section",Je,[r("div",Ke,[r("div",Xe,[_[4]||(_[4]=r("div",{class:"pointer-events-none absolute bottom-0 left-1/2 right-0 top-0 hidden -translate-x-1/2 transform opacity-10 mix-blend-luminosity md:block"},null,-1)),m.lesson.previous_lesson_id?(P(),V("a",{key:0,class:"hidden h-12 w-12 flex-1 flex-shrink-0 items-center justify-center rounded-full bg-card-600 transition-all hover:bg-master-900 2xl:flex 2xl:flex-none cursor-pointer",title:"Previous Episode","data-js":"previous-episode-button",disabled:"false",onClick:I},[M(D,{componentId:"chevronLeft"})])):Z("",!0),r("div",Ye,[r("div",et,[r("header",tt,[r("div",rt,[r("button",{title:"Want to favorite this lesson for future reference?",class:he(["btn btn-circle mr-3",m.lesson.is_mark_as_liked?"btn-error hover:btn-primary":"btn-primary hover:btn-error"]),onClick:C},[M(D,{componentId:"heart"})],2),r("div",null,[r("h1",st,$(m.lesson.name),1)])])]),r("div",null,[r("dl",nt,[r("div",at,[_[0]||(_[0]=r("dt",{class:"mb-2 font-grotesk text-2xs font-medium text-grey-600/60"}," Run Time ",-1)),r("dd",ot,$(m.lesson.lesson_duration),1)]),r("div",it,[_[1]||(_[1]=r("dt",{class:"mb-2 font-grotesk text-2xs font-medium text-grey-600/60"}," Published ",-1)),r("dd",lt,$(m.lesson.created_diff),1)])])])]),r("div",dt,[r("div",ct,[r("a",{onClick:N,class:he(["btn flex-center btn-primary py-4",m.lesson.is_completed?"btn-success":"btn-primary"])},[M(D,{componentId:"check"}),_[2]||(_[2]=r("span",{class:"inline-block flex-shrink-0 text-wrap"}," Mark as Complete ",-1))],2)]),r("div",ut,[r("a",{onClick:z,class:he(["btn flex-center py-4",m.lesson.watch_later?"btn-error":"btn-primary"])},[M(D,{componentId:"clock"}),_[3]||(_[3]=r("span",{class:"inline-block flex-shrink-0 text-wrap"}," Add to Watchlist ",-1))],2)])])]),m.lesson.next_lesson_id?(P(),V("a",{key:1,class:"hidden h-12 w-12 flex-1 flex-shrink-0 items-center justify-center rounded-full bg-card-600 transition-all 2xl:flex 2xl:flex-none hover:bg-master-900 cursor-pointer",title:"Next Episode","data-js":"next-episode-button",disabled:"false",onClick:O},[M(D,{componentId:"chevronRight"})])):Z("",!0)])])]))}});var ve={};(function Q(s,m,x,C){var O=!!(s.Worker&&s.Blob&&s.Promise&&s.OffscreenCanvas&&s.OffscreenCanvasRenderingContext2D&&s.HTMLCanvasElement&&s.HTMLCanvasElement.prototype.transferControlToOffscreen&&s.URL&&s.URL.createObjectURL),I=typeof Path2D=="function"&&typeof DOMMatrix=="function",N=function(){if(!s.OffscreenCanvas)return!1;var t=new OffscreenCanvas(1,1),e=t.getContext("2d");e.fillRect(0,0,1,1);var n=t.transferToImageBitmap();try{e.createPattern(n,"no-repeat")}catch{return!1}return!0}();function z(){}function q(t){var e=m.exports.Promise,n=e!==void 0?e:s.Promise;return typeof n=="function"?new n(t):(t(z,z),null)}var _=function(t,e){return{transform:function(n){if(t)return n;if(e.has(n))return e.get(n);var o=new OffscreenCanvas(n.width,n.height),l=o.getContext("2d");return l.drawImage(n,0,0),e.set(n,o),o},clear:function(){e.clear()}}}(N,new Map),R=function(){var t=Math.floor(16.666666666666668),e,n,o={},l=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(d){var c=Math.random();return o[c]=requestAnimationFrame(function a(u){l===u||l+t-1<u?(l=u,delete o[c],d()):o[c]=requestAnimationFrame(a)}),c},n=function(d){o[d]&&cancelAnimationFrame(o[d])}):(e=function(d){return setTimeout(d,t)},n=function(d){return clearTimeout(d)}),{frame:e,cancel:n}}(),X=function(){var t,e,n={};function o(l){function d(c,a){l.postMessage({options:c||{},callback:a})}l.init=function(a){var u=a.transferControlToOffscreen();l.postMessage({canvas:u},[u])},l.fire=function(a,u,h){if(e)return d(a,null),e;var b=Math.random().toString(36).slice(2);return e=q(function(v){function y(w){w.data.callback===b&&(delete n[b],l.removeEventListener("message",y),e=null,_.clear(),h(),v())}l.addEventListener("message",y),d(a,b),n[b]=y.bind(null,{data:{callback:b}})}),e},l.reset=function(){l.postMessage({reset:!0});for(var a in n)n[a](),delete n[a]}}return function(){if(t)return t;if(!x&&O){var l=["var CONFETTI, SIZE = {}, module = {};","("+Q.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([l])))}catch(d){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",d),null}o(t)}return t}}(),de={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function G(t,e){return e?e(t):t}function U(t){return t!=null}function g(t,e,n){return G(t&&U(t[e])?t[e]:de[e],n)}function ce(t){return t<0?0:Math.floor(t)}function ue(t,e){return Math.floor(Math.random()*(e-t))+t}function p(t){return parseInt(t,16)}function i(t){return t.map(F)}function F(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:p(e.substring(0,2)),g:p(e.substring(2,4)),b:p(e.substring(4,6))}}function Y(t){var e=g(t,"origin",Object);return e.x=g(e,"x",Number),e.y=g(e,"y",Number),e}function ee(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function te(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function re(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}function se(t,e,n,o,l,d,c,a,u){t.save(),t.translate(e,n),t.rotate(d),t.scale(o,l),t.arc(0,0,1,c,a,u),t.restore()}function ne(t){var e=t.angle*(Math.PI/180),n=t.spread*(Math.PI/180);return{x:t.x,y:t.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:t.startVelocity*.5+Math.random()*t.startVelocity,angle2D:-e+(.5*n-Math.random()*n),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:t.color,shape:t.shape,tick:0,totalTicks:t.ticks,decay:t.decay,drift:t.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:t.gravity*3,ovalScalar:.6,scalar:t.scalar,flat:t.flat}}function ae(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var n=e.tick++/e.totalTicks,o=e.x+e.random*e.tiltCos,l=e.y+e.random*e.tiltSin,d=e.wobbleX+e.random*e.tiltCos,c=e.wobbleY+e.random*e.tiltSin;if(t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-n)+")",t.beginPath(),I&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))t.fill(Te(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(d-o)*.1,Math.abs(c-l)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var a=Math.PI/10*e.wobble,u=Math.abs(d-o)*.1,h=Math.abs(c-l)*.1,b=e.shape.bitmap.width*e.scalar,v=e.shape.bitmap.height*e.scalar,y=new DOMMatrix([Math.cos(a)*u,Math.sin(a)*u,-Math.sin(a)*h,Math.cos(a)*h,e.x,e.y]);y.multiplySelf(new DOMMatrix(e.shape.matrix));var w=t.createPattern(_.transform(e.shape.bitmap),"no-repeat");w.setTransform(y),t.globalAlpha=1-n,t.fillStyle=w,t.fillRect(e.x-b/2,e.y-v/2,b,v),t.globalAlpha=1}else if(e.shape==="circle")t.ellipse?t.ellipse(e.x,e.y,Math.abs(d-o)*e.ovalScalar,Math.abs(c-l)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):se(t,e.x,e.y,Math.abs(d-o)*e.ovalScalar,Math.abs(c-l)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var f=Math.PI/2*3,k=4*e.scalar,S=8*e.scalar,E=e.x,B=e.y,W=5,j=Math.PI/W;W--;)E=e.x+Math.cos(f)*S,B=e.y+Math.sin(f)*S,t.lineTo(E,B),f+=j,E=e.x+Math.cos(f)*k,B=e.y+Math.sin(f)*k,t.lineTo(E,B),f+=j;else t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(l)),t.lineTo(Math.floor(d),Math.floor(c)),t.lineTo(Math.floor(o),Math.floor(e.wobbleY));return t.closePath(),t.fill(),e.tick<e.totalTicks}function oe(t,e,n,o,l){var d=e.slice(),c=t.getContext("2d"),a,u,h=q(function(b){function v(){a=u=null,c.clearRect(0,0,o.width,o.height),_.clear(),l(),b()}function y(){x&&!(o.width===C.width&&o.height===C.height)&&(o.width=t.width=C.width,o.height=t.height=C.height),!o.width&&!o.height&&(n(t),o.width=t.width,o.height=t.height),c.clearRect(0,0,o.width,o.height),d=d.filter(function(w){return ae(c,w)}),d.length?a=R.frame(y):v()}a=R.frame(y),u=v});return{addFettis:function(b){return d=d.concat(b),h},canvas:t,promise:h,reset:function(){a&&R.cancel(a),u&&u()}}}function L(t,e){var n=!t,o=!!g(e||{},"resize"),l=!1,d=g(e,"disableForReducedMotion",Boolean),c=O&&!!g(e||{},"useWorker"),a=c?X():null,u=n?ee:te,h=t&&a?!!t.__confetti_initialized:!1,b=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,v;function y(f,k,S){for(var E=g(f,"particleCount",ce),B=g(f,"angle",Number),W=g(f,"spread",Number),j=g(f,"startVelocity",Number),Se=g(f,"decay",Number),Ee=g(f,"gravity",Number),Fe=g(f,"drift",Number),be=g(f,"colors",i),je=g(f,"ticks",Number),ye=g(f,"shapes"),Oe=g(f,"scalar"),Re=!!g(f,"flat"),xe=Y(f),_e=E,me=[],Be=t.width*xe.x,$e=t.height*xe.y;_e--;)me.push(ne({x:Be,y:$e,angle:B,spread:W,startVelocity:j,color:be[_e%be.length],shape:ye[ue(0,ye.length)],ticks:je,decay:Se,gravity:Ee,drift:Fe,scalar:Oe,flat:Re}));return v?v.addFettis(me):(v=oe(t,me,u,k,S),v.promise)}function w(f){var k=d||g(f,"disableForReducedMotion",Boolean),S=g(f,"zIndex",Number);if(k&&b)return q(function(j){j()});n&&v?t=v.canvas:n&&!t&&(t=re(S),document.body.appendChild(t)),o&&!h&&u(t);var E={width:t.width,height:t.height};a&&!h&&a.init(t),h=!0,a&&(t.__confetti_initialized=!0);function B(){if(a){var j={getBoundingClientRect:function(){if(!n)return t.getBoundingClientRect()}};u(j),a.postMessage({resize:{width:j.width,height:j.height}});return}E.width=E.height=null}function W(){v=null,o&&(l=!1,s.removeEventListener("resize",B)),n&&t&&(document.body.removeChild(t),t=null,h=!1)}return o&&!l&&(l=!0,s.addEventListener("resize",B,!1)),a?a.fire(f,E,W):y(f,E,W)}return w.reset=function(){a&&a.reset(),v&&v.reset()},w}var fe;function ge(){return fe||(fe=L(null,{useWorker:!0,resize:!0})),fe}function Te(t,e,n,o,l,d,c){var a=new Path2D(t),u=new Path2D;u.addPath(a,new DOMMatrix(e));var h=new Path2D;return h.addPath(u,new DOMMatrix([Math.cos(c)*l,Math.sin(c)*l,-Math.sin(c)*d,Math.cos(c)*d,n,o])),h}function Pe(t){if(!I)throw new Error("path confetti are not supported in this browser");var e,n;typeof t=="string"?e=t:(e=t.path,n=t.matrix);var o=new Path2D(e),l=document.createElement("canvas"),d=l.getContext("2d");if(!n){for(var c=1e3,a=c,u=c,h=0,b=0,v,y,w=0;w<c;w+=2)for(var f=0;f<c;f+=2)d.isPointInPath(o,w,f,"nonzero")&&(a=Math.min(a,w),u=Math.min(u,f),h=Math.max(h,w),b=Math.max(b,f));v=h-a,y=b-u;var k=10,S=Math.min(k/v,k/y);n=[S,0,0,S,-Math.round(v/2+a)*S,-Math.round(y/2+u)*S]}return{type:"path",path:e,matrix:n}}function Le(t){var e,n=1,o="#000000",l='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof t=="string"?e=t:(e=t.text,n="scalar"in t?t.scalar:n,l="fontFamily"in t?t.fontFamily:l,o="color"in t?t.color:o);var d=10*n,c=""+d+"px "+l,a=new OffscreenCanvas(d,d),u=a.getContext("2d");u.font=c;var h=u.measureText(e),b=Math.ceil(h.actualBoundingBoxRight+h.actualBoundingBoxLeft),v=Math.ceil(h.actualBoundingBoxAscent+h.actualBoundingBoxDescent),y=2,w=h.actualBoundingBoxLeft+y,f=h.actualBoundingBoxAscent+y;b+=y+y,v+=y+y,a=new OffscreenCanvas(b,v),u=a.getContext("2d"),u.font=c,u.fillStyle=o,u.fillText(e,w,f);var k=1/n;return{type:"bitmap",bitmap:a.transferToImageBitmap(),matrix:[k,0,0,k,-b*k/2,-v*k/2]}}m.exports=function(){return ge().apply(this,arguments)},m.exports.reset=function(){ge().reset()},m.exports.create=L,m.exports.shapeFromPath=Pe,m.exports.shapeFromText=Le})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),ve,!1);const pe=ve.exports;ve.exports.create;const mt={key:0,class:"bg-dark-100"},ht={class:"py-8 px-4 mx-auto max-w-screen-2xl lg:py-16"},pt={key:1,class:"flex items-center justify-center bg-gradient-to-tl from-dark-100 to-dark-300 border border-gray-800 shadow-lg rounded-lg mb-4 p-8"},vt={class:"flex flex-col items-center space-y-6"},gt={class:"text-center text-2xl lg:text-4xl font-extrabold leading-tight text-white drop-shadow-lg"},bt={class:"font-bold not-italic text-master-500 block"},yt={class:"mt-5 text-lg text-center text-gray-300"},xt={class:"flex justify-center gap-2 mt-10"},_t={key:2,class:"my-5 border bg-base-100 border-accent rounded"},wt={class:"h-full p-4 bg-dark-100 border-b border-accent"},Mt={class:"flex items-center justify-between"},kt={class:"flex justify-between gap-1"},Ct={class:"text-lg font-bold text-neutral"},It={class:"mt-2"},Tt={class:"text-2xl font-bold text-neutral hover:underline",target:"_blank"},Pt=["innerHTML"],Lt={class:"mt-3"},St=["innerHTML"],Et={key:1,class:"bg-dark-100"},Ft={class:"py-8 px-4 mx-auto max-w-screen-xl lg:py-16"},jt={class:"card bg-dark-blue-100 w-full"},Ot=["alt","src"],Rt={class:"card-body"},Bt={class:"card-title font-bold text-5xl mb-5"},$t=["innerHTML"],At={class:"card-actions justify-start mt-3"},Vt={class:"flex justify-between"},Nt={class:"mt-1"},fr={__name:"View",props:{course:{type:Object,required:!0},course_instructor:{type:Object,required:!0},sections:{type:Array,required:!0},current_lesson:{type:Object,required:!0},editor_key:{type:String,required:!0}},setup(Q){const s=Q;let m=H(!1),x=H(!1),C=H(!1);const O=async p=>{p&&await Ie.get(route("course.view",{slug:s.course.slug,lesson:p}),{preserveState:!0,preserveScroll:!0,only:["current_lesson"]})},I=async p=>{A().props.isUserAuth&&await Ie.post(route("track.lesson.progress",{lesson:s.current_lesson.data.id}),{progress:p},{preserveState:!0,preserveScroll:!0,only:["current_lesson"]})},N=async p=>{A().props.isUserAuth?(await J.post(route("track.lesson.complete",s.current_lesson.data.id)).then(function(i){s.current_lesson.data.is_completed=i.data.status}),pe({particleCount:100,spread:100,origin:{y:.6}})):x.value=!0},z=async p=>{A().props.isUserAuth?(await J.post(route("track.lesson.like",p)).then(function(i){s.current_lesson.data.is_mark_as_liked=i.data.status}),pe({particleCount:100,spread:100,origin:{y:.6}})):x.value=!0},q=async p=>{A().props.isUserAuth?(await J.post(route("track.lesson.watch.later",p)).then(function(i){s.current_lesson.data.watch_later=i.data.status}),pe({particleCount:100,spread:100,origin:{y:.6}})):x.value=!0};let _=H(null),R=H(null);const X=async p=>{A().props.isUserAuth&&(_.value=p,await J.post(route("track.lesson.points.progress",s.current_lesson.data.id),{seconds:_.value}).then(function(i){i.data.status&&(R.value=i.data.lessonPoint)}))},de=async()=>{var p,i,F;(F=(i=(p=s.sections)==null?void 0:p.data[0])==null?void 0:i.children[0])!=null&&F.id&&O(s.sections.data[0].children[0].id)},G=ke(()=>({src:s.course.media[0].url.default,alt:s.course.media[0].url.alt}));let U=H(!1);const g=async()=>{A().props.isUserAuth?U.value=!0:x.value=!0},ce=async()=>{C.value=!0,A().props.isUserAuth?J.post(route("stripe.product.checkout"),{products:[{id:s.course.id,quantity:1,type:"course"}]}).then(function(p){window.location.href=p.data.session}).catch(function(p){C.value=!1}):x.value=!0},ue=ke(()=>{var p,i;return(i=(p=A().props.subscriptionsProducts)==null?void 0:p.data[0])==null?void 0:i.price});return(p,i)=>(P(),ie(Ae,{showHeader:!1,showFooter:!1,displayLogin:T(x),onCloseLogin:i[4]||(i[4]=F=>K(x)?x.value=!1:x=!1),displaySubscription:T(U),onCloseSubscription:i[5]||(i[5]=F=>K(U)?U.value=!1:U=!1),displayLoading:T(C),onCloseLoading:i[6]||(i[6]=F=>K(C)?C.value=!1:C=!1)},{default:le(()=>{var F,Y,ee,te,re,se,ne,ae,oe;return[M(ze,{sideBarOpen:T(m),mainImageInfo:G.value,course:s.course,sections:s.sections,currentLesson:s.current_lesson,onChangeLesson:O,onCloseSidebar:i[0]||(i[0]=L=>K(m)?m.value=!1:m=!1)},null,8,["sideBarOpen","mainImageInfo","course","sections","currentLesson"]),(F=s.current_lesson)!=null&&F.data?(P(),V("section",mt,[r("div",ht,[s.current_lesson.data.video_accessible?(P(),V(Ue,{key:0},[s.current_lesson.data.player_type==="vimeo"?(P(),ie(We,{key:0,lessonUrl:s.current_lesson.data.video_url,"lesson-id":s.current_lesson.data.id,seek:(ee=(Y=s.current_lesson.data)==null?void 0:Y.lesson_progress)==null?void 0:ee.watch_time,onVideoRunning:I,onVideoPause:I,onVideoEnded:i[1]||(i[1]=L=>{I(L),N(L)}),onVideoStart:I,onVideoLessonPoints:X},null,8,["lessonUrl","lesson-id","seek"])):Z("",!0),s.current_lesson.data.player_type==="youtube"?(P(),ie(De,{key:1,videoId:s.current_lesson.data.video_id,"lesson-id":s.current_lesson.data.id,seek:(re=(te=s.current_lesson.data)==null?void 0:te.lesson_progress)==null?void 0:re.watch_time,onVideoRunning:I,onVideoPause:I,onVideoEnded:i[2]||(i[2]=L=>{I(L),N(L)}),onVideoStart:I,onVideoLessonPoints:X},null,8,["videoId","lesson-id","seek"])):Z("",!0)],64)):(P(),V("div",pt,[r("div",vt,[i[9]||(i[9]=r("figure",{class:"mb-4 transform transition-transform hover:scale-105"},[r("img",{class:"w-52 h-52 mx-auto rounded-md shadow-lg opacity-90 hover:opacity-100 transition-opacity duration-300",src:"/vendor/Image/illustration/subscribe.png",alt:"Subscribe to access premium content"})],-1)),r("h2",gt,[r("cite",bt,"“"+$(s.current_lesson.data.name)+"”",1),i[7]||(i[7]=r("span",{class:"font-bold mt-2 block"},[Ce(" is for "),r("span",{class:"text-green-500"},"Premium"),Ce(" members only. ")],-1))]),r("div",yt,[i[8]||(i[8]=r("p",{class:"text-balance leading-relaxed"}," For the price of a game skin, you'll gain access to exclusive content and hundreds of hours of game development tutorials from TheDevRealm. Whether you're just starting out or looking to hone your skills, join us to learn from top creators and take your game development journey to the next level! ",-1)),r("div",xt,[r("button",{onClick:g,class:"btn btn-wide btn-secondary"},"Watch Everything for "+$(T(we)(ue.value)),1),r("button",{onClick:ce,class:"btn btn-wide bg-teal-700"},"Buy this Course for "+$(T(we)(s.course.course_price)),1)])])])])),T(R)?(P(),V("div",_t,[r("div",wt,[r("div",Mt,[r("div",kt,[i[10]||(i[10]=r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 text-white"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})],-1)),r("span",Ct,$(T(R).seconds)+"s ",1)]),i[11]||(i[11]=r("a",{class:"px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500",target:"_blank"},"Close",-1))]),r("div",It,[r("a",Tt,$(T(R).title),1),r("div",{innerHTML:T(R).content,class:"mt-2 w-full text-lg text-neutral fancy-editor"},null,8,Pt)])])])):Z("",!0),r("div",null,[(se=s.current_lesson)!=null&&se.data?(P(),ie(ft,{key:0,lesson:(ne=s.current_lesson)==null?void 0:ne.data,onNextEpisode:O,onPreviousEpisode:O,onVideoLike:z,onCompleteLesson:N,onWatchLater:q},null,8,["lesson"])):Z("",!0),r("div",Lt,[M(T(Ge),null,{default:le(({open:L})=>[M(T(Ze),{class:"flex justify-between bg-dark-blue-100 text-white font-bold text-4xl p-3 rounded-lg w-full text-left hover:bg-dark-blue-200 hover:text-accent"},{default:le(()=>[i[12]||(i[12]=r("span",null,"About This Episode",-1)),M(D,{componentId:"chevronDown"})]),_:1}),M(T(Qe),{class:"p-2 bg-dark-blue-100"},{default:le(()=>[r("div",{class:"mb-8 text-lg font-normal text-neutral fancy-editor",innerHTML:s.current_lesson.data.description},null,8,St)]),_:1})]),_:1})]),M(Me,{class:"mt-4",admin:(ae=s.course_instructor)==null?void 0:ae.data},null,8,["admin"]),M(Ve,{modelId:s.current_lesson.data.id,modelClass:"lesson"},null,8,["modelId"])])])])):(P(),V("section",Et,[r("div",Ft,[r("div",jt,[r("figure",null,[r("img",{alt:G.value.alt,src:G.value.src},null,8,Ot)]),r("div",Rt,[r("h2",Bt,$(s.course.title),1),r("div",{class:"generic-content font-bold text-xl text-neutral",innerHTML:s.course.short_description},null,8,$t),r("div",At,[r("a",{onClick:de,href:"#",class:"inline-flex items-center justify-center h-16 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-white-600 border-solid rounded-full cursor-pointer select-none hover:text-primary hover:bg-accent hover:border-secondary focus:shadow-xs focus:no-underline w-full"},[r("div",Vt,[r("div",Nt,[M(D,{componentId:"play"})])])])])])]),M(He,{course:s.course},null,8,["course"]),M(Me,{class:"mt-4",admin:(oe=s.course_instructor)==null?void 0:oe.data},null,8,["admin"])])])),M(qe,{onOpenSidebar:i[3]||(i[3]=L=>K(m)?m.value=!0:m=!0)})]}),_:1},8,["displayLogin","displaySubscription","displayLoading"]))}};export{fr as default};