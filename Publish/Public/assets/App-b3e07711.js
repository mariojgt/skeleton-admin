import{_ as B}from"./FlashMessage-cf3fef03.js";import{u as a,K as v,o as s,g as o,d as e,F as k,D as $,t as m,E as y,I as C,M as j,a as M,f as r,s as g,p as S,l as f,w as h,Q as b,b as z,z as A,q as w,m as L}from"./preset-4ee70171.js";import{d as N}from"./dark-43c43102.js";const V={key:0,class:"text-lg breadcrumbs p-5 bg-base-300"},q=e("li",null,[e("a",null,"Home")],-1),T=["href"],H={__name:"Breadcrumb",setup(l){return(t,n)=>a(v)().props.breadcrumb?(s(),o("div",V,[e("ul",null,[q,(s(!0),o(k,null,$(a(v)().props.breadcrumb,(i,c)=>(s(),o("li",{key:c},[e("a",{href:i.url},m(i.label),9,T)]))),128))])])):y("",!0)}},x=C.create({});x.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";x.interceptors.response.use(function(l){return l},function(l){const t=l.response.status;return t===401?console.log("401"):t===402?console.log("402"):t===403?console.log("403"):t===400&&console.log("400"),Promise.reject(l)});const D={key:0},F=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-success",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),R=[F],O={key:1},P=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-error",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),Y=[P],E={key:2},X=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-info",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),K=[X],Q={key:3},U=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-warning",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})],-1),W=[U],G={__name:"NotificationIcon",props:{icon:{type:String,default:"success"}},setup(l){const t=l;return(n,i)=>(s(),o("div",null,[t.icon=="success"?(s(),o("div",D,R)):t.icon=="error"?(s(),o("div",O,Y)):t.icon=="info"?(s(),o("div",E,K)):(s(),o("div",Q,W))]))}},J={class:"dropdown dropdown-end"},Z={tabindex:"0",class:"m-1 btn btn-square btn-ghost"},ee=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",class:"inline-block w-6 h-6 stroke-current text-primary"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})],-1),te={key:0,class:"badge badge-primary"},se={tabindex:"0",class:"flex shadow menu dropdown-content bg-primary rounded-box w-96"},oe={key:0,class:"menu py-3 shadow-lg bg-base-100 rounded-box"},ne={class:"flex pd overflow-hidden"},ae={class:"flex items-center pr-10"},le={class:"avatar"},re={key:0,class:"w-12 mask mask-squircle"},ie=["src"],ce={key:1},de={class:"mx-3"},ue={class:"text-xl font-semibold text-base-content"},he={class:"text-base-content"},_e=e("a",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})]),g(" Clear Notifications ")],-1),pe=[_e],me={__name:"Notifications",setup(l){const t=j();let n=M([]),i=M(0);const c=async()=>{x.get(route("admin.api.notifications",5)).then(function(u){n.value=u.data.data,i.value=n.value.length,i.value>0&&t.success("You have new notifications")}).catch(function(u){})};c(),setInterval(c,25e3);const d=async()=>{x.post(route("admin.api.notification.read")),c()};return(u,_)=>(s(),o("div",J,[e("div",Z,[ee,a(i)>0?(s(),o("div",te,m(a(i)),1)):y("",!0)]),e("div",se,[a(n).lenght>=0?(s(),o("ul",oe,[(s(!0),o(k,null,$(a(n),(p,I)=>(s(),o("li",{key:I,class:"pb-0"},[e("div",ne,[e("div",ae,[e("div",le,[p.data.type=="image"?(s(),o("div",re,[e("img",{src:p.data.icon},null,8,ie)])):(s(),o("div",ce,[r(G,{icon:p.data.icon},null,8,["icon"])]))]),e("div",de,[e("h2",ue,m(p.data.title),1),e("p",he,m(p.data.content),1)])])])]))),128))])):y("",!0),e("ul",{class:"text-neutral"},[e("li",{onClick:d},pe)])])]))}},ve={title:"Change Theme",class:"dropdown dropdown-end p-6"},we=f('<div tabindex="0" class="btn gap-1 normal-case btn-primary"><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg><span class="hidden md:inline">Theme</span><svg width="12px" height="12px" class="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg></div>',1),ge={class:"dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2xl mt-16"},fe={class:"grid grid-cols-1 gap-3 p-3",tabindex:"0"},be=["data-set-theme","onClick"],xe=["data-theme"],ke={class:"grid grid-cols-5 grid-rows-3"},$e={class:"col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4"},ye={key:0,class:"badge badge-outline"},Me={key:1,class:"flex-grow text-sm font-bold"},ze=f('<div class="flex flex-shrink-0 flex-wrap gap-1"><div class="bg-primary w-2 rounded"></div><div class="bg-secondary w-2 rounded"></div><div class="bg-accent w-2 rounded"></div><div class="bg-neutral w-2 rounded"></div></div>',1),Ie={__name:"ThemeSwich",setup(l){const t=["light","dark","cupcake","bumblebee","emerald","corporate","synthwave","retro","cyberpunk","valentine","halloween","garden","forest","aqua","lofi","pastel","fantasy","wireframe","black","luxury","dracula","cmyk","autumn","business","acid","lemonade","night","coffee","winter"];let n=M(null);const i=async d=>{document.querySelector("html").setAttribute("data-theme",d),localStorage.setItem("theme-backend",d),n.value=d},c=async()=>{const d=document.querySelector("html");d.setAttribute("data-theme","dark");const u=localStorage.getItem("theme-backend");d.setAttribute("data-theme",u),n.value=u};return S(()=>{c()}),(d,u)=>(s(),o("div",ve,[we,e("div",ge,[e("div",fe,[(s(),o(k,null,$(t,(_,p)=>e("div",{key:p,class:"outline-base-content overflow-hidden rounded-lg outline outline-2 outline-offset-2","data-set-theme":_,"data-act-class":"outline",onClick:I=>i(_)},[e("div",{"data-theme":_,class:"bg-base-100 text-base-content w-full cursor-pointer font-sans"},[e("div",ke,[e("div",$e,[a(n)==_?(s(),o("div",ye,m(_),1)):(s(),o("div",Me,m(_),1)),ze])])],8,xe)],8,be)),64))])])]))}},Be={class:"navbar sticky top-0 z-30 mb-2 shadow-lg bg-opacity-90 backdrop-blur transition-all duration-100 bg-base-100 text-base-content"},Ce=f('<div class="flex-none"><button class="btn btn-square btn-ghost"><label for="my-drawer" class=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label></button></div>',1),je={class:"flex-1 hidden px-2 mx-2 lg:flex"},Se=e("a",{href:"/","aria-current":"page","aria-label":"Homepage",class:"flex-0 btn btn-ghost px-2","data-svelte-h":"svelte-pw6yxt"},[e("div",{class:"font-title inline-flex text-lg md:text-2xl"},[e("span",{class:"lowercase"},"Skeleton"),g("-"),e("span",{class:"text-primary"},"Backend")])],-1),Ae=f('<div class="flex-1 lg:flex-none"><div class="form-control p-6"><div class="relative"><input type="text" placeholder="Search" class="w-full pr-16 input input-primary input-bordered"><button class="absolute top-0 right-0 rounded-l-none btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button></div></div></div>',1),Le={class:"flex-none"},Ne={class:"flex-none"},Ve={class:"flex-none"},qe={class:"dropdown dropdown-end"},Te=e("div",{tabindex:"0"},[e("div",{class:"avatar"},[e("div",{class:"rounded-full w-10 h-10 m-1"},[e("img",{src:"https://i.pravatar.cc/300"})])])],-1),He={tabindex:"0",class:"p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"},De=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",class:"inline-block w-5 h-5 mr-2 stroke-current"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})],-1),Fe=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})],-1),Re={__name:"Navbar",setup(l){const t=route("admin.edit"),n=route("skeleton.logout"),i=route("skeleton-admin.home");return(c,d)=>(s(),o("div",Be,[Ce,e("div",je,[r(a(b),{href:a(i)},{default:h(()=>[Se]),_:1},8,["href"])]),Ae,e("div",Le,[r(Ie)]),e("div",Ne,[r(me)]),e("div",Ve,[e("div",qe,[Te,e("ul",He,[e("li",null,[r(a(b),{href:a(t)},{default:h(()=>[De,g(" My Profile ")]),_:1},8,["href"])]),e("li",null,[r(a(b),{href:a(n)},{default:h(()=>[Fe,g(" Logout ")]),_:1},8,["href"])])])])])]))}},Oe={class:"footer bottom-0 footer-center p-4 bg-base-300 text-base-content"},Pe={__name:"Footer",setup(l){const t=new Date().getFullYear();return(n,i)=>(s(),o("footer",Oe,[e("div",null,[e("p",null,"Copyright © "+m(a(t))+" - All right reserved by "+m(a(v)().props.app),1)])]))}},Ye={__name:"menuSingle",props:{menuItem:{type:Object,default:{}}},setup(l){const t=l;let n=route(t.menuItem.route);return(i,c)=>(s(),o("li",null,[r(a(b),{href:a(n),class:"capitalize font-bold"},{default:h(()=>[g(m(t.menuItem.menu_label),1)]),_:1},8,["href"])]))}},Ee={class:"dropdown dropdown-hover"},Xe=f('<label tabindex="0" class="btn btn-ghost rounded-btn"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg> label name</label><ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"><li><a>Item 1</a></li><li tabindex="0"><span>Parent</span><ul class="bg-base-100"><li><a>Submenu 1</a></li><li><a>Submenu 2</a></li><li><a>Submenu 3</a></li></ul></li><li><a>Item 2</a></li></ul>',2),Ke=[Xe],Qe={__name:"MenuMultiple",props:{menuItem:{type:Object,default:{}}},setup(l){return(t,n)=>(s(),o("div",Ee,Ke))}},Ue={__name:"menuHandle",props:{menuItem:{type:Object,default:{}}},setup(l){const t=l;return(n,i)=>(s(),o("div",null,[t.menuItem.collection?(s(),z(Qe,{key:1,menuItem:t.menuItem},null,8,["menuItem"])):(s(),z(Ye,{key:0,menuItem:t.menuItem},null,8,["menuItem"]))]))}},We={class:"bg-base-100 flex flex-col h-screen w-80"},Ge=e("div",{class:"h-4"},null,-1),Je={class:"menu menu-sm lg:menu-md px-4 py-0 flex-grow"},Ze=e("li",null,null,-1),et=e("li",{class:"menu-title flex flex-row gap-4"},[e("span",{class:"text-neutral-content"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5 text-neutral-content"},[e("path",{"fill-rule":"evenodd",d:"M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06A.75.75 0 116.11 5.173L5.05 4.11a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.062a.75.75 0 01-1.062-1.061l1.061-1.06a.75.75 0 011.06 0zM3 8a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 8zm11 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0114 8zm-6.828 2.828a.75.75 0 010 1.061L6.11 12.95a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm3.594-3.317a.75.75 0 00-1.37.364l-.492 6.861a.75.75 0 001.204.65l1.043-.799.985 3.678a.75.75 0 001.45-.388l-.978-3.646 1.292.204a.75.75 0 00.74-1.16l-3.874-5.764z","clip-rule":"evenodd"})])]),e("span",null,"Menu")],-1),tt=e("div",{class:"bg-base-100 pointer-events-none sticky bottom-0 flex h-40 [mask-image:linear-gradient(transparent,#000000)]"},null,-1),st={__name:"MenuDrawer",setup(l){const t=v().props.navigation.data;return(n,i)=>(s(),o("aside",We,[Ge,e("ul",Je,[Ze,et,(s(!0),o(k,null,$(a(t),(c,d)=>(s(),z(Ue,{key:d,menuItem:c},null,8,["menuItem"]))),128))]),tt]))}},ot={class:"drawer"},nt=e("input",{id:"my-drawer",type:"checkbox",class:"drawer-toggle"},null,-1),at={class:"drawer-content"},lt={class:"px-6 py-8"},rt={class:"drawer-side z-40",style:{"scroll-behavior":"smooth","scroll-padding-top":"5rem"}},it=e("label",{for:"my-drawer",class:"drawer-overlay"},null,-1),ht={__name:"App",setup(l){A(()=>v().props.title,n=>{t(n)});const t=async n=>{document.title=n};return setTimeout(()=>{t(v().props.title??"Skeleton Admin")},500),(n,i)=>{const c=w("n-message-provider"),d=w("n-config-provider"),u=w("n-dialog-provider"),_=w("n-notification-provider"),p=w("n-loading-bar-provider");return s(),o("div",ot,[nt,e("div",at,[r(c,null,{default:h(()=>[r(Re)]),_:1}),e("div",lt,[r(H),r(p,null,{default:h(()=>[r(c,null,{default:h(()=>[r(_,null,{default:h(()=>[r(u,null,{default:h(()=>[r(d,{theme:a(N)},{default:h(()=>[r(B),L(n.$slots,"default")]),_:3},8,["theme"])]),_:3})]),_:3})]),_:3})]),_:3})]),r(Pe)]),e("div",rt,[it,r(st)])])}}};export{ht as _};