import{a as n,o as c,b as g,w,d as p,f as v,e as l,u as a,i as d,O as b}from"./preset-28c46642.js";import{_ as k}from"./App.vue_vue_type_script_setup_true_lang-1b0a5fcc.js";import{_ as u}from"./Input-28f7d378.js";import{_ as V}from"./Link-d241e22b.js";import{_ as y}from"./Password-bcff4fef.js";import{_ as x}from"./Submit-349f84f8.js";import"./FlashMessage-f9244f8c.js";import"./axios-5336241a.js";import"./dark-1201dc7d.js";const N={class:"px-5 py-7"},F={class:"form-control pt-10"},E={__name:"Register",props:{title:{type:String,default:"mariojgt is heredude"}},setup(U){let s=n(""),r=n(""),t=n(""),m=n(""),i=n("");const f=()=>{const _={first_name:s.value,last_name:r.value,email:t.value,password:m.value,password_confirmation:i.value};b.post(route("register.user"),_)};return(_,o)=>(c(),g(k,{title:"Frontend Register"},{form:w(()=>[p("div",null,[p("form",{onSubmit:v(f,["prevent"])},[p("div",N,[l(a(u),{modelValue:a(s),"onUpdate:modelValue":o[0]||(o[0]=e=>d(s)?s.value=e:s=e),label:"First Name",type:"text",name:"first_name",id:"first_name",placeholder:"type your First Name"},null,8,["modelValue"]),l(a(u),{modelValue:a(r),"onUpdate:modelValue":o[1]||(o[1]=e=>d(r)?r.value=e:r=e),label:"Last Name",type:"text",name:"last_name",id:"last_name",placeholder:"type your Last Name"},null,8,["modelValue"]),l(a(u),{modelValue:a(t),"onUpdate:modelValue":o[2]||(o[2]=e=>d(t)?t.value=e:t=e),label:"Email",type:"email",name:"email",id:"email",placeholder:"type your email"},null,8,["modelValue"]),l(a(y),{modelValue:a(m),"onUpdate:modelValue":o[3]||(o[3]=e=>d(m)?m.value=e:m=e),label:"Password",name:"password",id:"password",placeholder:"type your password"},null,8,["modelValue"]),l(a(y),{modelValue:a(i),"onUpdate:modelValue":o[4]||(o[4]=e=>d(i)?i.value=e:i=e),label:"Password Confirm",name:"password_confirmation",id:"password_confirmation",placeholder:"type your Password Confirmation"},null,8,["modelValue"]),p("div",F,[l(a(x),{name:"Register",onClick:f})])])],32)])]),links:w(()=>[l(a(V),{name:"Login",link:"login"}),l(a(V),{name:"Forgot password",link:"forgot-password"})]),_:1}))}};export{E as default};