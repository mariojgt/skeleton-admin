import{_ as e}from"./App.vue_vue_type_script_setup_true_lang-a8030762.js";import{_ as s,a as l}from"./CommentBox-b588c69e.js";import{o as d,b as r,w as i,d as t,t as m,e as a}from"./preset-97972412.js";import"./FlashMessage-52ff158f.js";import"./axios-93448253.js";import"./micro-task-4a293294.js";import"./keyboard-409d75a5.js";import"./hidden-73ee9ad9.js";import"./open-closed-c864445d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Input.vue_vue_type_script_setup_true_lang-c5967c15.js";import"./Password-1cadfc8a.js";import"./dark-aeb88a56.js";import"./dynamicIcon.vue_vue_type_script_setup_true_lang-545bfdef.js";import"./CommentsSingle.vue_vue_type_script_setup_true_lang-547cf706.js";const n={class:"bg-dark-200 pb-8 px-4"},c={class:"mx-auto max-w-screen-lg"},g={class:"mx-auto text-center lg:mb-16 mb-8"},b={class:"flex text-left text-4xl font-bold mb-6 text-white leading-tight"},_={class:"mx-auto w-full format format-sm sm:format-base lg:format-lg bg-dark-blue-300 p-4 rounded-md shadow-lg blog-content hover:bg-dark-blue-400"},u=["innerHTML"],p=t("hr",{class:"theme-divider"},null,-1),T={__name:"View",props:{blogPost:{type:Object,default:()=>[]}},setup(o){return(h,f)=>(d(),r(e,{backgroundFooterClass:"bg-dark-100",headerBackground:"bg-dark-100"},{default:i(()=>[t("section",n,[t("div",c,[t("div",g,[t("h2",b,m(o.blogPost.data.title),1)]),t("article",_,[t("div",{innerHTML:o.blogPost.data.content,class:"text-neutral-100 text-lg leading-relaxed"},null,8,u)]),a(s,{class:"mt-8 rounded-lg shadow-md",admin:o.blogPost.data.admin},null,8,["admin"]),a(l,{modelId:o.blogPost.data.id,modelClass:"blog",class:"mt-8 p-4 bg-dark-300 rounded-lg shadow-md"},null,8,["modelId"])])]),p]),_:1}))}};export{T as default};