import{_ as e}from"./App.vue_vue_type_script_setup_true_lang-5f7bae38.js";import{_ as s,a as l}from"./CommentBox-d1dba0b7.js";import{o as r,b as i,w as m,d as t,t as d,e as a}from"./preset-ca366435.js";import"./FlashMessage-6e444d9b.js";import"./axios-a85bc38c.js";import"./micro-task-8916ce39.js";import"./keyboard-71450eb2.js";import"./hidden-0979092b.js";import"./open-closed-ab357a99.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Input.vue_vue_type_script_setup_true_lang-d6d82632.js";import"./Password-058b71ec.js";import"./dark-91ba31ce.js";import"./dynamicIcon.vue_vue_type_script_setup_true_lang-0a14737d.js";import"./CommentsSingle.vue_vue_type_script_setup_true_lang-787b45ec.js";const n={class:"bg-dark-200 pb-3"},c={class:"mx-auto max-w-screen-2xl"},_={class:"mx-auto text-center lg:mb-16 mb-8"},b={class:"flex text-left text-4xl font-extrabold mb-10 text-neutral"},u={class:"mx-auto w-full format format-sm sm:format-base lg:format-lg bg-dark-blue-200 p-2 rounded blog-content"},f=["innerHTML"],p=t("hr",{class:"theme-divider"},null,-1),T={__name:"View",props:{blogPost:{type:Object,default:()=>[]}},setup(o){return(g,x)=>(r(),i(e,{backgroundFooterClass:"bg-dark-100",headerBackground:"bg-dark-100"},{default:m(()=>[t("section",n,[t("div",c,[t("div",_,[t("h2",b,d(o.blogPost.data.title),1)]),t("article",u,[t("div",{innerHTML:o.blogPost.data.content,class:"text-neutral"},null,8,f)]),a(s,{class:"mt-3",admin:o.blogPost.data.admin},null,8,["admin"]),a(l,{modelId:o.blogPost.data.id,modelClass:"blog"},null,8,["modelId"])])]),p]),_:1}))}};export{T as default};