import{_}from"./App.vue_vue_type_script_setup_true_lang-a9140b02.js";import{_ as x}from"./PostCard-b066ef97.js";import{bi as v,z as h,o as a,g as i,d as t,t as u,u as c,k as m,F as b,y as p,x as f,b as g,w as y,e as w}from"./preset-0e6c6859.js";import{_ as $}from"./CourseCardGrid.vue_vue_type_script_setup_true_lang-35190cfe.js";import"./FlashMessage-4501c334.js";import"./axios-f1a77fa8.js";import"./dark-abb3f385.js";const j={class:"pagination-container"},L={class:"flex flex-col md:flex-row items-center justify-between mb-4 text-white"},k={class:"mb-2 md:mb-0"},C={class:"text-sm md:text-base"},H={class:"flex items-center justify-center w-full"},M={class:"join flex md:hidden w-full justify-between px-4"},T=["disabled","innerHTML"],P=["disabled","innerHTML"],B={class:"btn join-item"},O=["disabled","innerHTML"],N={class:"join hidden md:flex"},z=["disabled","innerHTML","onClick"],E={__name:"Pagination",props:{pagination:{type:Object,required:!0}},setup(d){const r=d,{pagination:o}=v(r),e=h(()=>o.value.links);return(l,n)=>(a(),i("div",j,[t("nav",L,[t("div",k,[t("span",C," Showing "+u(c(o).from)+" to "+u(c(o).to)+" of "+u(c(o).total)+" results ",1)])]),t("nav",H,[t("div",M,[t("button",{disabled:!e.value[0].url,class:m({"btn join-item":!0,"cursor-not-allowed text-gray-500":!e.value[0].url,"text-white bg-purple-700 hover:bg-purple-800":e.value[0].url}),onClick:n[0]||(n[0]=s=>e.value[0].url&&l.$inertia.get(e.value[0].url)),innerHTML:e.value[0].label},null,10,T),t("button",{onClick:n[1]||(n[1]=s=>e.value[1].url&&l.$inertia.get(e.value[1].url)),disabled:!e.value[1].url,class:"btn join-item",innerHTML:e.value[1].label},null,8,P),t("button",B,"Page "+u(c(o).current_page),1),t("button",{disabled:!e.value[e.value.length-1].url,class:m({"btn join-item":!0,"cursor-not-allowed text-gray-500":!e.value[e.value.length-1].url,"text-white bg-purple-700 hover:bg-purple-800":e.value[e.value.length-1].url}),onClick:n[2]||(n[2]=s=>e.value[e.value.length-1].url&&l.$inertia.get(e.value[e.value.length-1].url)),innerHTML:e.value[e.value.length-1].label},null,10,O)]),t("div",N,[(a(!0),i(b,null,p(e.value,s=>(a(),i("button",{key:s.label,disabled:!s.url,class:m({"btn btn-lg join-item":!0,"btn-active":s.active,"cursor-not-allowed text-gray-500":!s.url,"text-white bg-secondary hover:bg-primary":s.url&&!s.active,"text-white bg-primary":s.active}),innerHTML:s.label,onClick:G=>s.url&&l.$inertia.get(s.url)},null,10,z))),128))])])]))}},F={class:"bg-base-300 magicpattern py-8 px-4 mx-auto lg:py-16 lg:px-6"},S=t("div",{class:"mx-auto max-w-screen-sm text-center mb-8 lg:mb-16"},[t("h2",{class:"mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-neutral"}," Our News "),t("p",{class:"font-light text-neutral text-sm lg:text-xl"}," Check out our latest news and articles, we have a lot of interesting topics for you. ")],-1),V={class:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1"},q=t("hr",{class:"theme-divider"},null,-1),D={class:"fancy-background02"},I={class:"py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"},R=t("div",{class:"mx-auto max-w-screen-sm text-center mb-8 lg:mb-16"},[t("h2",{class:"mb-4 text-4xl tracking-tight font-extrabold text-yellow-400"}," Latest Lessons "),t("p",{class:"font-light lg:mb-16 sm:text-xl text-neutral"}," Explore the whole collection of lessons and boost you game development skills. ")],-1),A={class:"grid gap-8 mb-6 lg:mb-16 md:grid-cols-2"},Z=f({__name:"Index",props:{blogPosts:{type:Object,default:()=>({})},courses:{type:Object,default:()=>({})}},setup(d){const r=d;return(o,e)=>(a(),g(_,null,{default:y(()=>[t("section",F,[S,t("div",V,[(a(!0),i(b,null,p(r.blogPosts.data,(l,n)=>(a(),g(x,{class:"mt-4",key:n,record:l},null,8,["record"]))),128)),w(E,{pagination:r.blogPosts.meta},null,8,["pagination"])])]),q,t("section",D,[t("div",I,[R,t("div",A,[(a(!0),i(b,null,p(r.courses.data,l=>(a(),g($,{key:l.id,record:l},null,8,["record"]))),128))])])])]),_:1}))}});export{Z as default};