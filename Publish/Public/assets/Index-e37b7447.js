import{v as C,a as f,o as l,b,w as k,d as t,q as n,e as v,i as w,g as d,s as L,k as s,y as g,t as h,F as c,u as $,G as _}from"./preset-b90b9b08.js";import{_ as M}from"./App.vue_vue_type_script_setup_true_lang-11e7867c.js";import{P as B}from"./PostCard-cd061cc3.js";import{_ as P}from"./Pagination-81acb172.js";import{_ as S}from"./PostBox-ad4de948.js";import"./FlashMessage-93f4c79f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./x-b0b4ae59.js";import"./createLucideIcon-c54a04d6.js";import"./triangle-alert-9a3c06c5.js";import"./clock-83e0ad33.js";import"./shield-check-ea999e19.js";import"./Password.vue_vue_type_style_index_0_scoped_eed4e79b_lang-f3834945.js";import"./ReusableModal-eb4fe44e.js";import"./transition-c810ac22.js";import"./focus-management-bfa3f621.js";import"./keyboard-8b566b5e.js";import"./hidden-a6a905be.js";import"./open-closed-def677aa.js";import"./SearchSidebar-3f65748b.js";import"./dynamicIcon.vue_vue_type_script_setup_true_lang-4bfb852c.js";import"./axios-0c773085.js";import"./search-b1a2db28.js";import"./Markdown-8dc0f09b.js";import"./arrow-down-98a90328.js";import"./user-5bde1ce3.js";import"./code-0ce16765.js";import"./crown-9f36e625.js";import"./arrow-right-0e40d01d.js";import"./Frontend_js-71f5644a.js";import"./mail-6312a372.js";import"./loader-circle-c9275f11.js";import"./circle-check-big-66a371fd.js";import"./gamepad-2-08d13ba1.js";import"./house-95b711b1.js";import"./book-open-45bfbf31.js";import"./lock-e84a1f43.js";import"./arrow-left-44d4d084.js";import"./shield-179861bc.js";import"./key-6e09cf1f.js";import"./Money-0f722979.js";import"./check-dfbbe6ec.js";import"./download-4347e100.js";import"./message-circle-78d7a2a9.js";import"./SeoManager-c70493bc.js";import"./flame-a7dcdbef.js";import"./pen-a0648bf7.js";import"./database-27e0aefd.js";import"./chevron-left-b9c7b72b.js";import"./chevron-right-9297b3c8.js";import"./folder-open-c10cad14.js";import"./chevron-down-f54a1641.js";import"./list-73150fc9.js";/* empty css                                                                       */const j={class:"bg-dark-200 py-6 px-4 lg:py-12 mx-auto"},A={class:"max-w-7xl mx-auto"},D={class:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"},F={class:"flex items-center gap-4"},G={class:"flex items-center gap-3 w-full sm:w-auto"},N={class:"flex justify-between items-center mb-6"},z={class:"space-y-2"},T=["onClick"],V={class:"flex flex-col lg:flex-row gap-6"},H={class:"hidden lg:block w-full lg:w-1/4"},O={class:"sticky top-6"},U={class:"bg-dark-100 p-4 rounded-lg ring-1 ring-purple-500/10"},q={class:"space-y-2"},E=["onClick"],I={class:"flex-1"},J={class:"grid grid-cols-1 gap-4"},Rt=C({__name:"Index",props:{forumPosts:{type:Object,default:()=>({})},categories:{type:Array,default:()=>[]},topic:{type:String,default:"all"}},setup(o){let a=f(!1);const i=f(!1),x=o,u=async m=>{i.value=!1,m&&await _.get(route("forum.index",{topic:m}),{preserveState:!0,preserveScroll:!0,only:["forumPosts"]})};return(m,e)=>(l(),b(M,{backgroundFooterClass:"bg-dark-100",headerBackground:"bg-dark-100",displayLogin:$(a),onCloseLogin:e[6]||(e[6]=r=>w(a)?a.value=!1:a=!1)},{default:k(()=>[e[18]||(e[18]=t("div",{class:"bg-dark-100 border-b border-dark-200"},[t("div",{class:"max-w-7xl mx-auto p-4"},[t("div",{class:"bg-dark-200 rounded-lg p-3 text-center ring-1 ring-purple-500/10"},[t("p",{class:"text-neutral-400"},"Premium Ad Space")])])],-1)),t("section",j,[t("div",A,[t("div",D,[t("div",F,[t("button",{class:"lg:hidden p-2 text-white hover:bg-dark-100 rounded-lg",onClick:e[0]||(e[0]=r=>i.value=!0)},e[7]||(e[7]=[t("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)])),e[8]||(e[8]=t("h2",{class:"text-white text-3xl lg:text-5xl font-extrabold drop-shadow-lg"},[n(" Forum "),t("span",{class:"hidden sm:inline-block ml-2 text-sm px-3 py-1 bg-dark-100 rounded-full text-purple-400 font-normal shadow-[0_0_10px_rgba(168,85,247,0.15)]"}," Game Dev Hub ")],-1))]),t("div",G,[v(S,{categories:o.categories,class:"flex-1 sm:flex-initial","post-btn-class":"btn btn-primary w-full sm:w-auto shadow-[0_0_15px_rgba(168,85,247,0.15)]",onDisplayLogin:e[1]||(e[1]=r=>w(a)?a.value=!0:a=!0)},{default:k(()=>e[9]||(e[9]=[t("span",{class:"flex items-center gap-2"},[t("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"})]),n(" New Discussion ")],-1)])),_:1},8,["categories"]),e[10]||(e[10]=t("select",{class:"select select-bordered bg-dark-100 text-white border-dark-300 focus:border-purple-500 focus:ring-purple-500/20"},[t("option",null,"Latest"),t("option",null,"Popular")],-1))])]),i.value?(l(),d("div",{key:0,class:"lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40",onClick:e[2]||(e[2]=r=>i.value=!1)})):L("",!0),t("div",{class:s(["lg:hidden fixed inset-y-0 left-0 w-72 bg-dark-100 p-4 z-50 transform transition-transform duration-200",{"-translate-x-full":!i.value,"translate-x-0":i.value}])},[t("div",N,[e[12]||(e[12]=t("h3",{class:"text-white text-lg font-bold"},"Categories",-1)),t("button",{onClick:e[3]||(e[3]=r=>i.value=!1),class:"text-white"},e[11]||(e[11]=[t("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]))]),e[14]||(e[14]=t("div",{class:"mb-4 bg-dark-200 p-3 rounded-lg text-center"},[t("p",{class:"text-neutral-400 text-sm"},"Featured Ad Space")],-1)),t("nav",z,[t("button",{class:s(["w-full flex items-center gap-2 p-3 rounded-lg text-sm font-medium transition-colors",{"bg-dark-300 text-white shadow-[0_0_10px_rgba(168,85,247,0.1)]":o.topic==="all","text-neutral-400 hover:bg-dark-300 hover:text-white":o.topic!=="all"}]),onClick:e[4]||(e[4]=r=>u("all"))},[t("span",{class:s(["w-2 h-2 rounded-full",{"bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_10px_rgba(168,85,247,0.3)]":o.topic==="all","bg-dark-300":o.topic!=="all"}])},null,2),e[13]||(e[13]=n(" All Threads "))],2),(l(!0),d(c,null,g(o.categories,(r,p)=>(l(),d("button",{key:p,class:s(["w-full flex items-center gap-2 p-3 rounded-lg text-sm font-medium transition-colors",{"bg-dark-300 text-white shadow-[0_0_10px_rgba(168,85,247,0.1)]":o.topic===r.slug,"text-neutral-400 hover:bg-dark-300 hover:text-white":o.topic!==r.slug}]),onClick:y=>u(r.slug)},[t("span",{class:s(["w-2 h-2 rounded-full",{"bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_10px_rgba(168,85,247,0.3)]":o.topic===r.slug,"bg-dark-300":o.topic!==r.slug}])},null,2),n(" "+h(r.name),1)],10,T))),128))])],2),t("div",V,[t("aside",H,[t("div",O,[t("nav",U,[t("ul",q,[t("li",{class:s(["flex items-center gap-2 text-sm font-medium rounded-lg p-3 cursor-pointer transition-colors",{"bg-dark-300 text-white shadow-[0_0_10px_rgba(168,85,247,0.1)]":o.topic==="all","text-neutral-400 hover:bg-dark-300 hover:text-white":o.topic!=="all"}]),onClick:e[5]||(e[5]=r=>u("all"))},[t("span",{class:s(["w-2 h-2 rounded-full",{"bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_10px_rgba(168,85,247,0.3)]":o.topic==="all","bg-dark-300":o.topic!=="all"}])},null,2),e[15]||(e[15]=n(" All Threads "))],2),(l(!0),d(c,null,g(o.categories,(r,p)=>(l(),d("li",{key:p,class:s(["flex items-center gap-2 text-sm font-medium rounded-lg p-3 cursor-pointer transition-colors",{"bg-dark-300 text-white shadow-[0_0_10px_rgba(168,85,247,0.1)]":o.topic===r.slug,"text-neutral-400 hover:bg-dark-300 hover:text-white":o.topic!==r.slug}]),onClick:y=>u(r.slug)},[t("span",{class:s(["w-2 h-2 rounded-full",{"bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_10px_rgba(168,85,247,0.3)]":o.topic===r.slug,"bg-dark-300":o.topic!==r.slug}])},null,2),n(" "+h(r.name),1)],10,E))),128))])]),e[16]||(e[16]=t("div",{class:"mt-4 bg-dark-100 p-4 rounded-lg text-center ring-1 ring-purple-500/10"},[t("p",{class:"text-neutral-400"},"Sponsored Content")],-1))])]),t("main",I,[t("div",J,[(l(!0),d(c,null,g(x.forumPosts.data,(r,p)=>(l(),b(B,{key:p,record:r,class:"transition-transform hover:scale-[1.01] ring-1 ring-purple-500/10"},null,8,["record"]))),128))]),v(P,{pagination:x.forumPosts.meta,class:"mt-6"},null,8,["pagination"])]),e[17]||(e[17]=t("aside",{class:"hidden lg:block w-full lg:w-1/4"},[t("div",{class:"sticky top-6 space-y-4"},[t("div",{class:"bg-gradient-to-br from-dark-100 to-dark-200 p-6 rounded-lg text-white ring-1 ring-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.15)]"},[t("div",{class:"flex items-center gap-2 mb-3"},[t("svg",{class:"w-5 h-5 text-purple-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"})]),t("h3",{class:"text-lg font-bold"},"Game Dev Pro")]),t("p",{class:"text-neutral-300 text-sm mb-4"},"Get unlimited access to all our game development resources!"),t("button",{class:"w-full btn btn-primary shadow-[0_0_15px_rgba(168,85,247,0.15)]"}," Join for $25/month ")]),t("div",{class:"bg-dark-100 p-6 rounded-lg ring-1 ring-purple-500/10"},[t("h3",{class:"text-lg font-bold text-white mb-2"},"Unity Mastery"),t("p",{class:"text-neutral-400 text-sm mb-4"},"Learn professional game development with Unity"),t("button",{class:"w-full btn btn-secondary shadow-[0_0_15px_rgba(168,85,247,0.15)]"}," Start Learning ")]),t("div",{class:"bg-dark-100 p-4 rounded-lg text-center ring-1 ring-purple-500/10"},[t("p",{class:"text-neutral-400"},"Advertisement Space")])])],-1))])])])]),_:1},8,["displayLogin"]))}});export{Rt as default};