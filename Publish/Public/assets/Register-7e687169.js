import{a as i,o as y,b,w as c,d as u,e as o,u as a,i as d,f as g,G as k}from"./preset-b90b9b08.js";import{_ as v}from"./Login-bac8286e.js";import{_ as p}from"./Input.vue_vue_type_script_setup_true_lang-8998e423.js";import{_ as x}from"./Link-ac41d6b2.js";import{_ as w}from"./Password-350de7e5.js";import{_ as T}from"./Submit-5e6379c6.js";import"./index.esm-b2918197.js";import"./FlashMessage-65cf7e3b.js";const U={class:"flex justify-between gap-4"},B={class:"form-control pt-10"},E={__name:"Register",props:{title:{type:String,default:"page Title"}},setup(C){const V=route("skeleton.login");let s=i(""),t=i(""),r=i(""),m=i(""),n=i("");const f=()=>{const _={first_name:s.value,last_name:t.value,email:r.value,password:m.value,password_confirmation:n.value};k.post(route("skeleton.register.user"),_)};return(_,l)=>(y(),b(v,{title:"Backend Register"},{form:c(()=>[u("form",{onSubmit:g(f,["prevent"])},[u("div",U,[o(a(p),{modelValue:a(s),"onUpdate:modelValue":l[0]||(l[0]=e=>d(s)?s.value=e:s=e),label:"First Name",type:"text",name:"name",id:"name",placeholder:"Type your name",class:"w-full"},null,8,["modelValue"]),o(a(p),{modelValue:a(t),"onUpdate:modelValue":l[1]||(l[1]=e=>d(t)?t.value=e:t=e),label:"Last Name",type:"text",name:"name",id:"name",placeholder:"Type your name",class:"w-full"},null,8,["modelValue"])]),o(a(p),{modelValue:a(r),"onUpdate:modelValue":l[2]||(l[2]=e=>d(r)?r.value=e:r=e),label:"Email",type:"email",name:"email",id:"email",placeholder:"Type your email"},null,8,["modelValue"]),o(a(w),{modelValue:a(m),"onUpdate:modelValue":l[3]||(l[3]=e=>d(m)?m.value=e:m=e),label:"Password",name:"password",id:"password",placeholder:"Type your password"},null,8,["modelValue"]),o(a(w),{modelValue:a(n),"onUpdate:modelValue":l[4]||(l[4]=e=>d(n)?n.value=e:n=e),label:"Password Confirm",name:"password_confirmation",id:"password_confirmation",placeholder:"Type your Password Confirmation"},null,8,["modelValue"]),u("div",B,[o(a(T),{onClick:f,name:"Register",class:"btn btn-secondary"})])],32)]),links:c(()=>[o(a(x),{name:"Login",link:a(V)},null,8,["link"])]),_:1}))}};export{E as default};