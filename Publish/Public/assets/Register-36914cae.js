import{a as i,o as y,b,w as c,d as u,e as o,u as a,i as d,f as g,F as k}from"./preset-59cdb044.js";import{_ as v}from"./Login-53cf633d.js";import{_ as p}from"./Input.vue_vue_type_script_setup_true_lang-c3b4d3bc.js";import{_ as x}from"./Link-5c43b3a1.js";import{_ as w}from"./Password-37ecdc94.js";import{_ as T}from"./Submit-66c58698.js";import"./index.esm-df9f2d71.js";import"./FlashMessage-d89a6fb8.js";const U={class:"flex justify-between gap-4"},B={class:"form-control pt-10"},M={__name:"Register",props:{title:{type:String,default:"page Title"}},setup(C){const V=route("skeleton.login");let s=i(""),t=i(""),m=i(""),r=i(""),n=i("");const f=()=>{const _={first_name:s.value,last_name:t.value,email:m.value,password:r.value,password_confirmation:n.value};k.post(route("skeleton.register.user"),_)};return(_,l)=>(y(),b(v,{title:"Backend Register"},{form:c(()=>[u("form",{onSubmit:g(f,["prevent"])},[u("div",U,[o(a(p),{modelValue:a(s),"onUpdate:modelValue":l[0]||(l[0]=e=>d(s)?s.value=e:s=e),label:"First Name",type:"text",name:"name",id:"name",placeholder:"Type your name",class:"w-full"},null,8,["modelValue"]),o(a(p),{modelValue:a(t),"onUpdate:modelValue":l[1]||(l[1]=e=>d(t)?t.value=e:t=e),label:"Last Name",type:"text",name:"name",id:"name",placeholder:"Type your name",class:"w-full"},null,8,["modelValue"])]),o(a(p),{modelValue:a(m),"onUpdate:modelValue":l[2]||(l[2]=e=>d(m)?m.value=e:m=e),label:"Email",type:"email",name:"email",id:"email",placeholder:"Type your email"},null,8,["modelValue"]),o(a(w),{modelValue:a(r),"onUpdate:modelValue":l[3]||(l[3]=e=>d(r)?r.value=e:r=e),label:"Password",name:"password",id:"password",placeholder:"Type your password"},null,8,["modelValue"]),o(a(w),{modelValue:a(n),"onUpdate:modelValue":l[4]||(l[4]=e=>d(n)?n.value=e:n=e),label:"Password Confirm",name:"password_confirmation",id:"password_confirmation",placeholder:"Type your Password Confirmation"},null,8,["modelValue"]),u("div",B,[o(a(T),{onClick:f,name:"Register",class:"btn btn-secondary"})])],32)]),links:c(()=>[o(a(x),{name:"Login",link:a(V)},null,8,["link"])]),_:1}))}};export{M as default};