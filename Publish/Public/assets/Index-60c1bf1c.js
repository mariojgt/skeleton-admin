import{a as n,o as f,b as _,w as d,d as t,e as r,u as e,i as p,f as c,G as w}from"./preset-7017bb8f.js";import{_ as g}from"./Login-c5c1fd21.js";import{I as k}from"./Input-c2e1c77a.js";import{_ as u}from"./Link-03af4044.js";import{_ as V}from"./Password-362819b7.js";import{_ as b}from"./Submit-90f89a2d.js";import"./Input.vue_vue_type_style_index_0_scoped_245929fe_lang-4c922919.js";import"./purify.es-851ec8c9.js";import"./FlashMessage-016b8cbd.js";import"./_plugin-vue_export-helper-c27b6911.js";const y={class:"w-full"},v={class:"form-control pt-10"},U={__name:"Index",props:{title:{type:String,default:"mariojgt is heredude"}},setup(h){let o=n(""),a=n("");const i=()=>{const m={email:o.value,password:a.value};w.post(route("skeleton.login.user"),m)};return(m,l)=>(f(),_(g,{title:"Backend Login"},{form:d(()=>[t("form",{onSubmit:c(i,["prevent"])},[t("div",y,[r(e(k),{modelValue:e(o),"onUpdate:modelValue":l[0]||(l[0]=s=>p(o)?o.value=s:o=s),label:"Email",type:"email",name:"email",id:"email",placeholder:"Type your email"},null,8,["modelValue"]),r(e(V),{modelValue:e(a),"onUpdate:modelValue":l[1]||(l[1]=s=>p(a)?a.value=s:a=s),label:"Password",name:"password",id:"password",placeholder:"Type your password"},null,8,["modelValue"]),t("div",v,[r(e(b),{onClick:i,class:"btn btn-secondary"})])])],32)]),links:d(()=>[r(e(u),{name:"Register",link:"register"}),r(e(u),{name:"Forgot password",link:"forgot-password"})]),_:1}))}};export{U as default};