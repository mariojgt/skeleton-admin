import{x as n,a as d,o as f,b as _,w as l,d as t,f as u,e as r,u as o,i as c,O as w}from"./preset-bde2e2f2.js";import{_ as g}from"./App.vue_vue_type_script_setup_true_lang-11d9ad73.js";import{_ as k}from"./Input.vue_vue_type_script_setup_true_lang-c51f3172.js";import{_ as p}from"./Link-0cff02e5.js";import{_ as h}from"./Submit-cc41ae57.js";import"./FlashMessage-f72c5c5c.js";import"./axios-1527e3ce.js";import"./micro-task-d379d62f.js";import"./keyboard-b3e1f2eb.js";import"./hidden-38a6bfd3.js";import"./open-closed-9054edc5.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Password-c8175324.js";import"./dark-277bf040.js";const v={class:"px-5 py-7"},x={class:"form-control pt-10"},U=n({__name:"Reset",props:{title:{type:String,default:"mariojgt is heredude"}},setup(y){let e=d("");const s=()=>{const a={email:e.value};w.post(route("password-reset.user"),a)};return(a,i)=>(f(),_(g,{title:"Frontend Reset Password"},{form:l(()=>[t("div",null,[t("form",{onSubmit:u(s,["prevent"])},[t("div",v,[r(o(k),{modelValue:o(e),"onUpdate:modelValue":i[0]||(i[0]=m=>c(e)?e.value=m:e=m),label:"Email",type:"email",name:"email",id:"email",placeholder:"type your email"},null,8,["modelValue"]),t("div",x,[r(o(h),{onClick:s})])])],32)])]),links:l(()=>[r(o(p),{name:"Register",link:"register"}),r(o(p),{name:"Forgot password",link:"forgot-password"})]),_:1}))}});export{U as default};