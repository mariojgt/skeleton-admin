import{_ as v}from"./App.vue_vue_type_script_setup_true_lang-a8030762.js";import{_}from"./PostCard-a21ad977.js";import{bl as h,z as x,o as n,g as c,d as t,t as i,u,k as m,F as g,y as b,x as f,b as p,w,e as y}from"./preset-97972412.js";import"./FlashMessage-52ff158f.js";import"./axios-93448253.js";import"./micro-task-4a293294.js";import"./keyboard-409d75a5.js";import"./hidden-73ee9ad9.js";import"./open-closed-c864445d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Input.vue_vue_type_script_setup_true_lang-c5967c15.js";import"./Password-1cadfc8a.js";import"./dark-aeb88a56.js";const $={class:"pagination-container"},j={class:"flex flex-col md:flex-row items-center justify-between mb-4 text-white"},k={class:"mb-2 md:mb-0"},C={class:"text-sm md:text-base"},L={class:"flex items-center justify-center w-full"},H={class:"join flex md:hidden w-full justify-between px-4"},M=["disabled","innerHTML"],T=["disabled","innerHTML"],B={class:"btn join-item"},P=["disabled","innerHTML"],F={class:"join hidden md:flex"},N=["disabled","innerHTML","onClick"],O={__name:"Pagination",props:{pagination:{type:Object,required:!0}},setup(d){const r=d,{pagination:o}=h(r),e=x(()=>o.value.links);return(a,s)=>(n(),c("div",$,[t("nav",j,[t("div",k,[t("span",C," Showing "+i(u(o).from)+" to "+i(u(o).to)+" of "+i(u(o).total)+" results ",1)])]),t("nav",L,[t("div",H,[t("button",{disabled:!e.value[0].url,class:m({"btn join-item":!0,"cursor-not-allowed text-gray-500":!e.value[0].url,"text-white bg-purple-700 hover:bg-purple-800":e.value[0].url}),onClick:s[0]||(s[0]=l=>e.value[0].url&&a.$inertia.get(e.value[0].url)),innerHTML:e.value[0].label},null,10,M),t("button",{onClick:s[1]||(s[1]=l=>e.value[1].url&&a.$inertia.get(e.value[1].url)),disabled:!e.value[1].url,class:"btn join-item",innerHTML:e.value[1].label},null,8,T),t("button",B,"Page "+i(u(o).current_page),1),t("button",{disabled:!e.value[e.value.length-1].url,class:m({"btn join-item":!0,"cursor-not-allowed text-gray-500":!e.value[e.value.length-1].url,"text-white bg-purple-700 hover:bg-purple-800":e.value[e.value.length-1].url}),onClick:s[2]||(s[2]=l=>e.value[e.value.length-1].url&&a.$inertia.get(e.value[e.value.length-1].url)),innerHTML:e.value[e.value.length-1].label},null,10,P)]),t("div",F,[(n(!0),c(g,null,b(e.value,l=>(n(),c("button",{key:l.label,disabled:!l.url,class:m({"btn btn-lg join-item":!0,"btn-active":l.active,"cursor-not-allowed text-gray-500":!l.url,"text-white bg-secondary hover:bg-primary":l.url&&!l.active,"text-white bg-primary":l.active}),innerHTML:l.label,onClick:D=>l.url&&a.$inertia.get(l.url)},null,10,N))),128))])])]))}},z={class:"bg-dark-200 py-8 px-4 mx-auto lg:py-16 lg:px-6"},S=t("div",{class:"mx-auto max-w-screen-sm text-center mb-8 lg:mb-16"},[t("h2",{class:"text-color-h1 text-6xl lg:text-8xl mb-4"}," News "),t("p",{class:"font-light text-neutral text-sm lg:text-xl"}," Check out our latest news and articles, we have a lot of interesting topics for you. ")],-1),V={class:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2"},q=t("hr",{class:"theme-divider"},null,-1),ee=f({__name:"Index",props:{blogPosts:{type:Object,default:()=>({})},courses:{type:Object,default:()=>({})}},setup(d){const r=d;return(o,e)=>(n(),p(v,{backgroundFooterClass:"bg-dark-100",headerBackground:"bg-dark-100"},{default:w(()=>[t("section",z,[S,t("div",V,[(n(!0),c(g,null,b(r.blogPosts.data,(a,s)=>(n(),p(_,{class:"mt-4",key:s,record:a},null,8,["record"]))),128))]),y(O,{pagination:r.blogPosts.meta},null,8,["pagination"])]),q]),_:1}))}});export{ee as default};