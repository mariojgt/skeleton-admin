import{a as w}from"./axios-3f607f14.js";import{i as ce,_ as pe}from"./App.vue_vue_type_script_setup_true_lang-ada58dc7.js";import{_ as q,C as me}from"./CommentBox-3b361558.js";import{P as fe}from"./play-168b1b7f.js";import{C as J}from"./underline-82abe2d4.js";import{H as ge}from"./pen-29f25568.js";import{C as _e}from"./circle-check-big-ce8f8728.js";import{C as F}from"./clock-0578a04c.js";import{C as Q}from"./chevron-right-e1740d8d.js";import{C as he}from"./calendar-6a5e51dd.js";import{v as be,o as a,g as d,d as e,l as X,e as l,u as i,q as A,t as f,aU as ve,s as p,k as P,a as k,z as Y,b as C,w as v,i as $,x as b,F as K,y as xe,G as R}from"./preset-7017bb8f.js";import{_ as ye,a as we}from"./YouTube-78287dd2.js";import{c as H}from"./confetti.module-2da4c0ae.js";import{_ as B}from"./dynamicIcon.vue_vue_type_script_setup_true_lang-993467b2.js";import ke from"./Sidebar-c9813c7e.js";import Ce from"./PremiumPrompt-22e3e8a3.js";import Le from"./RelatedCourses-2fe88d15.js";import Ie from"./SidebarControl-f9422726.js";import $e from"./EpisodeGuide-879abb0a.js";import{Q as ee,V as te,N as se}from"./disclosure-7fe5c5a1.js";import"./FlashMessage-2ec2afe2.js";import"./createLucideIcon-ea1aa057.js";import"./file-code-d9b467a7.js";import"./bookmark-4f699ce6.js";import"./arrow-right-986e96bf.js";import"./SeoManager-76165c12.js";import"./trash-0b85e424.js";import"./search-f7e29ec3.js";import"./book-open-ad2b6e04.js";import"./SearchSidebar-09a5b40f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./x-d7b90ab4.js";import"./Markdown-87a934bb.js";import"./purify.es-851ec8c9.js";import"./user-da1c3c28.js";import"./code-e1b05dc8.js";import"./crown-da7ee322.js";import"./check-bbe63e18.js";import"./chevron-down-d5e92fbd.js";import"./upload-de191f53.js";import"./qr-code-515b9647.js";import"./download-b1165c5e.js";import"./shield-check-9060d019.js";import"./eye-9d0667e3.js";import"./folder-open-d225ae78.js";import"./gamepad-2-5e1ee843.js";import"./video-c63f1ed0.js";import"./house-fc820adf.js";import"./key-10c64e55.js";import"./lock-a9e2cdbb.js";import"./message-circle-86c46db1.js";import"./shopping-bag-98f2aae1.js";import"./save-19a3e232.js";import"./scroll-3072ab60.js";import"./shield-37d47ce0.js";import"./star-cdb8eea3.js";import"./triangle-alert-e31fe4b8.js";import"./trophy-48025ce8.js";import"./Input.vue_vue_type_style_index_0_scoped_245929fe_lang-4c922919.js";import"./ReusableModal-c0f32898.js";import"./transition-fee3d243.js";import"./focus-management-bdffb607.js";import"./keyboard-5828a81d.js";import"./hidden-28fb574b.js";import"./open-closed-25eb109e.js";import"./Frontend_js-88f0762b.js";import"./Money-d954e1d8.js";import"./CommentsSingle-5d6e2bd1.js";/* empty css                                                                       */import"./DifficultLevel.vue_vue_type_script_setup_true_lang-bbec95ef.js";import"./use-resolve-button-type-ec2d8133.js";const Pe={class:"relative overflow-hidden rounded-xl bg-dark-500/90 backdrop-blur-sm border border-gray-800/50"},Se={class:"relative p-6 space-y-8"},je={class:"relative overflow-hidden rounded-xl bg-dark-400/50 p-6"},Ve={class:"flex items-start gap-6"},Me={class:"relative hidden md:block w-24 h-24"},Ae={class:"flex-1 space-y-4"},Re={class:"inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium"},He={class:"text-2xl md:text-3xl font-bold text-white"},Be={key:0,class:"space-y-2"},Oe={class:"flex justify-between items-center text-sm text-gray-400"},Te={class:"relative h-2 w-full bg-dark-600 rounded-full overflow-hidden"},Ue={class:"flex flex-col lg:flex-row items-center gap-6"},Ee={class:"flex-1 w-full space-y-6"},Ge={class:"flex flex-wrap md:flex-nowrap gap-4"},Ze={class:"flex flex-1 gap-4"},De={class:"flex justify-between lg:hidden"},Ne={class:"flex flex-wrap gap-8"},ze={class:"space-y-1"},We={class:"flex items-center gap-2 text-white"},qe={class:"space-y-1"},Je={class:"flex items-center gap-2 text-white"},Fe=be({__name:"Lesson",props:{lesson:{type:Object,default:()=>({})},lessonProgress:{type:Number,default:0},certificationLink:{type:String,default:null}},emits:["videoLike","nextEpisode","previousEpisode","completeLesson","watchLater"],setup(g,{emit:t}){const r=g,u=t,_=()=>{u("videoLike",r.lesson.id)},x=()=>{u("nextEpisode",r.lesson.next_lesson_id)},m=()=>{u("previousEpisode",r.lesson.previous_lesson_id)},L=()=>{u("completeLesson",r.lesson.id)},S=()=>{u("watchLater",r.lesson.id)},j=y=>{window.open(y,"_blank")};return(y,n)=>(a(),d("section",Pe,[n[8]||(n[8]=e("div",{class:"absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"},null,-1)),n[9]||(n[9]=e("div",{class:"absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"},null,-1)),e("div",Se,[e("div",je,[e("div",Ve,[e("div",Me,[X(y.$slots,"default",{},()=>[n[1]||(n[1]=e("div",{class:"absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg opacity-20"},null,-1)),X(y.$slots,"default")])]),e("div",Ae,[e("div",Re,[l(i(fe),{class:"w-4 h-4"}),n[2]||(n[2]=A(" You're Watching "))]),e("h1",He,f(r.lesson.name),1),g.lessonProgress!==0?(a(),d("div",Be,[e("div",Oe,[n[3]||(n[3]=e("span",null,"Progress",-1)),e("span",null,f(g.lessonProgress)+"%",1)]),e("div",Te,[n[4]||(n[4]=e("div",{class:"absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"},null,-1)),e("div",{class:"h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 rounded-full",style:ve({width:`${g.lessonProgress}%`})},null,4)])])):p("",!0)])])]),e("div",Ue,[r.lesson.previous_lesson_id?(a(),d("button",{key:0,onClick:m,class:"hidden lg:flex items-center justify-center w-12 h-12 rounded-xl bg-dark-400 hover:bg-dark-300 transition-all duration-300 group"},[l(i(J),{class:"w-6 h-6 text-white group-hover:text-blue-400"})])):p("",!0),e("div",Ee,[e("div",Ge,[e("button",{onClick:_,class:"group flex items-center justify-center w-12 h-12 rounded-xl bg-dark-400 hover:bg-dark-300 transition-all duration-300"},[l(i(ge),{class:P(["w-6 h-6 transition-colors duration-300",r.lesson.is_mark_as_liked?"text-red-500":"text-white group-hover:text-red-400"]),fill:r.lesson.is_mark_as_liked?"currentColor":"none"},null,8,["class","fill"])]),e("div",Ze,[e("button",{onClick:L,class:P(["flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300",r.lesson.is_completed?"bg-green-500/20 text-green-400 hover:bg-green-500/30":"bg-dark-400 text-white hover:bg-dark-300"])},[l(i(_e),{class:"w-5 h-5"}),e("span",null,f(r.lesson.is_completed?"Completed":"Mark Complete"),1)],2),e("button",{onClick:S,class:P(["flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300",r.lesson.watch_later?"bg-purple-500/20 text-purple-400 hover:bg-purple-500/30":"bg-dark-400 text-white hover:bg-dark-300"])},[l(i(F),{class:"w-5 h-5"}),e("span",null,f(r.lesson.watch_later?"In Watchlist":"Watch Later"),1)],2),g.certificationLink?(a(),d("button",{key:0,onClick:n[0]||(n[0]=V=>j(g.certificationLink)),class:P(["flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300",r.lesson.watch_later?"bg-purple-500/20 text-purple-400 hover:bg-purple-500/30":"bg-dark-400 text-white hover:bg-dark-300"])},[l(i(ce),{class:"w-5 h-5"}),n[5]||(n[5]=e("span",null,"Get Certified",-1))],2)):p("",!0)])]),e("div",De,[r.lesson.previous_lesson_id?(a(),d("button",{key:0,onClick:m,class:"flex items-center justify-center w-12 h-12 rounded-xl bg-dark-400 hover:bg-dark-300 transition-all duration-300 group"},[l(i(J),{class:"w-6 h-6 text-white group-hover:text-blue-400"})])):p("",!0),r.lesson.next_lesson_id?(a(),d("button",{key:1,onClick:x,class:"flex items-center justify-center w-12 h-12 rounded-xl bg-dark-400 hover:bg-dark-300 transition-all duration-300 group"},[l(i(Q),{class:"w-6 h-6 text-white group-hover:text-blue-400"})])):p("",!0)]),e("div",Ne,[e("div",ze,[n[6]||(n[6]=e("div",{class:"text-sm text-gray-400"},"Runtime",-1)),e("div",We,[l(i(F),{class:"w-4 h-4 text-blue-400"}),A(" "+f(r.lesson.lesson_duration),1)])]),e("div",qe,[n[7]||(n[7]=e("div",{class:"text-sm text-gray-400"},"Published",-1)),e("div",Je,[l(i(he),{class:"w-4 h-4 text-purple-400"}),A(" "+f(r.lesson.created_diff),1)])])])]),r.lesson.next_lesson_id?(a(),d("button",{key:1,onClick:x,class:"hidden lg:flex items-center justify-center w-12 h-12 rounded-xl bg-dark-400 hover:bg-dark-300 transition-all duration-300 group"},[l(i(Q),{class:"w-6 h-6 text-white group-hover:text-blue-400"})])):p("",!0)])])]))}}),Qe={key:0,class:"bg-dark-100"},Xe={class:"py-8 px-4 mx-auto max-w-screen-2xl lg:py-16"},Ye={key:2,class:"my-5 border bg-base-100 border-accent rounded"},Ke={class:"h-full p-4 bg-dark-100 border-b border-accent"},et={class:"flex items-center justify-between"},tt={class:"flex justify-between gap-1"},st={class:"text-lg font-bold text-neutral"},ot={class:"mt-2"},rt={class:"text-2xl font-bold text-neutral hover:underline",target:"_blank"},nt=["innerHTML"],lt={key:3},it=["src","alt"],at={class:"mt-3"},dt=["innerHTML"],ut={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},ct={class:"flex-shrink-0"},pt={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-8 h-8 text-blue-400"},mt={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-8 h-8 text-green-400"},ft={class:"flex-grow"},gt={class:"text-lg font-semibold text-white"},_t={key:0,class:"text-sm text-gray-300 mt-1"},ht=["onClick"],bt={key:1,class:"bg-dark-200"},vt={class:"py-8 px-4 mx-auto max-w-screen-xl lg:py-16"},xt={class:"card bg-dark-blue-100 w-full"},yt=["alt","src"],wt={class:"card-body"},kt={class:"card-title font-bold text-5xl mb-5"},Ct=["innerHTML"],Lt={class:"card-actions justify-start mt-3"},It={class:"flex justify-between"},$t={class:"mt-1"},Ws={__name:"View",props:{relatedCourses:{type:Object,required:!0},course:{type:Object,required:!0},course_instructor:{type:Object,required:!0},sections:{type:Array,required:!0},current_lesson:{type:Object,required:!0},editor_key:{type:String,required:!0}},setup(g){const t=g;let r=k(!1),u=k(!1),_=k(!1);const x=async o=>{o&&await R.get(route("course.view",{slug:t.course.slug,lesson:o}),{preserveState:!0,preserveScroll:!0,only:["current_lesson"]})},m=async o=>{b().props.isUserAuth&&await R.post(route("track.lesson.progress",{lesson:t.current_lesson.data.id}),{progress:o},{preserveState:!0,preserveScroll:!0,only:["current_lesson"]})},L=async o=>{b().props.isUserAuth?(await w.post(route("track.lesson.complete",t.current_lesson.data.id)).then(function(s){t.current_lesson.data.is_completed=s.data.status}),H({particleCount:100,spread:100,origin:{y:.6}})):u.value=!0},S=async o=>{b().props.isUserAuth?(await w.post(route("track.lesson.like",o)).then(function(s){t.current_lesson.data.is_mark_as_liked=s.data.status}),H({particleCount:100,spread:100,origin:{y:.6}})):u.value=!0},j=async o=>{b().props.isUserAuth?(await w.post(route("track.lesson.watch.later",o)).then(function(s){t.current_lesson.data.watch_later=s.data.status}),H({particleCount:100,spread:100,origin:{y:.6}})):u.value=!0};let y=k(null),n=k(null);const V=async o=>{b().props.isUserAuth&&(y.value=o,await w.post(route("track.lesson.points.progress",t.current_lesson.data.id),{seconds:y.value}).then(function(s){s.data.status&&(n.value=s.data.lessonPoint)}))},oe=async()=>{var o,s,h;(h=(s=(o=t.sections)==null?void 0:o.data[0])==null?void 0:s.children[0])!=null&&h.id&&x(t.sections.data[0].children[0].id)},M=Y(()=>({src:t.course.media[0].url.default,alt:t.course.media[0].url.alt}));let I=k(!1);const re=async()=>{b().props.isUserAuth?I.value=!0:u.value=!0},ne=async()=>{b().props.isUserAuth?(_.value=!0,w.post(route("stripe.product.checkout"),{products:[{id:t.course.id,quantity:1,type:"course"}]}).then(function(o){window.location.href=o.data.session}).catch(function(o){_.value=!1})):u.value=!0},le=Y(()=>{var o,s;return(s=(o=b().props.subscriptionsProducts)==null?void 0:o.data[0])==null?void 0:s.price}),ie=o=>{ae(o)},ae=async o=>{R.visit(route("course.view",o))},de=async o=>{if(b().props.isUserAuth){_.value=!0;try{if(o.resource_type==="file"){const h=(await w.get(route("gamedev.lesson.resources.download",o.id))).data.download_url;window.open(h,"_blank")}else window.open(o.resource_url,"_blank")}catch(s){console.error("Download error:",s)}finally{_.value=!1}}else u.value=!0};return(o,s)=>(a(),C(pe,{showHeader:!1,showFooter:!1,displayLogin:i(u),onCloseLogin:s[4]||(s[4]=h=>$(u)?u.value=!1:u=!1),displaySubscription:i(I),onCloseSubscription:s[5]||(s[5]=h=>$(I)?I.value=!1:I=!1),displayLoading:i(_),onCloseLoading:s[6]||(s[6]=h=>$(_)?_.value=!1:_=!1)},{default:v(()=>{var h,O,T,U,E,G,Z,D,N,z,W;return[l(ke,{sideBarOpen:i(r),mainImageInfo:M.value,course:t.course,sections:t.sections,currentLesson:t.current_lesson,onChangeLesson:x,onCloseSidebar:s[0]||(s[0]=c=>$(r)?r.value=!1:r=!1)},null,8,["sideBarOpen","mainImageInfo","course","sections","currentLesson"]),(h=t.current_lesson)!=null&&h.data?(a(),d("section",Qe,[e("div",Xe,[t.current_lesson.data.video_accessible?(a(),d(K,{key:0},[t.current_lesson.data.player_type==="vimeo"?(a(),C(ye,{key:0,lessonUrl:t.current_lesson.data.video_url,"lesson-id":t.current_lesson.data.id,seek:(T=(O=t.current_lesson.data)==null?void 0:O.lesson_progress)==null?void 0:T.watch_time,onVideoRunning:m,onVideoPause:m,onVideoEnded:s[1]||(s[1]=c=>{m(c),L(c)}),onVideoStart:m,onVideoLessonPoints:V},null,8,["lessonUrl","lesson-id","seek"])):p("",!0),t.current_lesson.data.player_type==="youtube"?(a(),C(we,{key:1,videoId:t.current_lesson.data.video_id,"lesson-id":t.current_lesson.data.id,seek:(E=(U=t.current_lesson.data)==null?void 0:U.lesson_progress)==null?void 0:E.watch_time,onVideoRunning:m,onVideoPause:m,onVideoEnded:s[2]||(s[2]=c=>{m(c),L(c)}),onVideoStart:m,onVideoLessonPoints:V},null,8,["videoId","lesson-id","seek"])):p("",!0)],64)):(a(),C(Ce,{key:1,current_lesson:g.current_lesson,course:g.course,priceStartOff:le.value,onSubscribe:re,onCourseCheckout:ne},null,8,["current_lesson","course","priceStartOff"])),i(n)?(a(),d("div",Ye,[e("div",Ke,[e("div",et,[e("div",tt,[s[7]||(s[7]=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 text-white"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})],-1)),e("span",st,f(i(n).seconds)+"s ",1)]),s[8]||(s[8]=e("a",{class:"px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500",target:"_blank"},"Close",-1))]),e("div",ot,[e("a",rt,f(i(n).title),1),e("div",{innerHTML:i(n).content,class:"mt-2 w-full text-lg text-neutral fancy-editor"},null,8,nt)])])])):p("",!0),t.current_lesson.data.video_accessible?(a(),d("div",lt,[(G=t.current_lesson)!=null&&G.data?(a(),C(Fe,{key:0,lesson:(Z=t.current_lesson)==null?void 0:Z.data,certificationLink:t.course.certification_link,lessonProgress:(N=(D=t.current_lesson.data)==null?void 0:D.lesson_progress)==null?void 0:N.progress,onNextEpisode:x,onPreviousEpisode:x,onVideoLike:S,onCompleteLesson:L,onWatchLater:j},{default:v(()=>[e("img",{src:t.course.media[0].url.default,alt:t.course.media[0].alt,class:"w-full h-full object-cover rounded-lg"},null,8,it)]),_:1},8,["lesson","certificationLink","lessonProgress"])):p("",!0),e("div",at,[l(i(se),null,{default:v(({open:c})=>[l(i(ee),{class:"flex justify-between bg-dark-200 text-white font-bold text-4xl p-3 rounded-lg w-full text-left hover:bg-dark-blue-200 hover:text-accent"},{default:v(()=>[s[9]||(s[9]=e("span",null,"About This Episode",-1)),l(B,{componentId:"chevronDown"})]),_:1}),l(i(te),{class:"p-2 bg-dark-blue-100"},{default:v(()=>[e("div",{class:"mb-8 text-lg font-normal text-neutral fancy-editor",innerHTML:t.current_lesson.data.description},null,8,dt)]),_:1})]),_:1}),t.current_lesson.data.resources&&t.current_lesson.data.resources.length>0?(a(),C(i(se),{key:0,as:"div",class:"mt-3 mb-5"},{default:v(()=>[l(i(ee),{as:"button",class:"flex items-center justify-between bg-dark-200 text-white font-bold text-2xl p-3 rounded-lg w-full text-left hover:bg-dark-blue-200 hover:text-accent transition-all duration-200"},{default:v(()=>[s[10]||(s[10]=e("span",null,"Lesson Resources",-1)),l(B,{componentId:"chevronDown"})]),_:1}),l(i(te),{as:"div",class:"p-2 bg-dark-300 rounded-lg"},{default:v(()=>[e("div",ut,[(a(!0),d(K,null,xe(t.current_lesson.data.resources,(c,ue)=>(a(),d("div",{key:ue,class:"flex items-center gap-4 bg-dark-blue-500 p-4 rounded-lg hover:bg-dark-blue-300 transition-all duration-300"},[e("div",ct,[c.resource_type==="link"?(a(),d("svg",pt,s[11]||(s[11]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 10.5L21 3m0 0h-6m6 0v6"},null,-1)]))):c.resource_type==="file"?(a(),d("svg",mt,s[12]||(s[12]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v15m0 0-3-3m3 3 3-3M6 6h12"},null,-1)]))):p("",!0)]),e("div",ft,[e("h3",gt,f(c.title),1),c.description?(a(),d("p",_t,f(c.description),1)):p("",!0)]),e("div",null,[e("a",{onClick:Pt=>de(c),target:"_blank",class:"btn btn-sm btn-outline text-blue-400 border-blue-400 hover:text-white hover:bg-blue-400 transition-all duration-200"}," Download ",8,ht)])]))),128))])]),_:1})]),_:1})):p("",!0)]),l(q,{class:"mt-4",admin:(z=t.course_instructor)==null?void 0:z.data},null,8,["admin"]),l(me,{modelId:t.current_lesson.data.id,modelClass:"lesson"},null,8,["modelId"])])):p("",!0),l(Le,{relatedCourses:t.relatedCourses,onOpenCourse:ie},null,8,["relatedCourses"])])])):(a(),d("section",bt,[e("div",vt,[e("div",xt,[e("figure",null,[e("img",{alt:M.value.alt,src:M.value.src},null,8,yt)]),e("div",wt,[e("h2",kt,f(t.course.title),1),e("div",{class:"generic-content font-bold text-xl text-neutral",innerHTML:t.course.short_description},null,8,Ct),e("div",Lt,[e("a",{onClick:oe,href:"#",class:"inline-flex items-center justify-center h-16 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-white-600 border-solid rounded-full cursor-pointer select-none hover:text-primary hover:bg-accent hover:border-secondary focus:shadow-xs focus:no-underline w-full"},[e("div",It,[e("div",$t,[l(B,{componentId:"play"})])])])])])]),l($e,{course:t.course},null,8,["course"]),l(q,{class:"mt-4",admin:(W=t.course_instructor)==null?void 0:W.data},null,8,["admin"])])])),l(Ie,{onOpenSidebar:s[3]||(s[3]=c=>$(r)?r.value=!0:r=!0)})]}),_:1},8,["displayLogin","displaySubscription","displayLoading"]))}};export{Ws as default};