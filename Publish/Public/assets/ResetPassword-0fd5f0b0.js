import{a as i,o as y,b as g,w as f,d as n,f as b,e as a,u as o,i as m,G as v}from"./preset-b90b9b08.js";import{_ as P}from"./Login-bac8286e.js";import{_ as R}from"./Input.vue_vue_type_script_setup_true_lang-8998e423.js";import{_ as c}from"./Link-ac41d6b2.js";import{_}from"./Password-350de7e5.js";import{_ as x}from"./Submit-5e6379c6.js";import"./index.esm-b2918197.js";import"./FlashMessage-65cf7e3b.js";const B={class:"px-5 py-7"},C={class:"form-control pt-10"},$={__name:"ResetPassword",props:{token:{type:String,default:""}},setup(w){const k=route("skeleton.register"),V=route("skeleton.forgot-password");let l=i(""),r=i(""),t=i("");const d=w;console.log(d);const p=()=>{const u={email:l.value,password:r.value,password_confirmation:t.value,token:d.token};v.post(route("skeleton.password.change"),u)};return(u,s)=>(y(),g(P,{title:"Backend Reset"},{form:f(()=>[n("div",null,[n("form",{onSubmit:b(p,["prevent"])},[n("div",B,[a(o(R),{modelValue:o(l),"onUpdate:modelValue":s[0]||(s[0]=e=>m(l)?l.value=e:l=e),label:"Email",type:"email",name:"email",id:"email",placeholder:"Type your email"},null,8,["modelValue"]),a(o(_),{modelValue:o(r),"onUpdate:modelValue":s[1]||(s[1]=e=>m(r)?r.value=e:r=e),label:"Password",name:"password",id:"password",placeholder:"Type your password"},null,8,["modelValue"]),a(o(_),{modelValue:o(t),"onUpdate:modelValue":s[2]||(s[2]=e=>m(t)?t.value=e:t=e),label:"Password Confirm",name:"password_confirmation",id:"password_confirmation",placeholder:"Type your Password Confirmation"},null,8,["modelValue"]),n("div",C,[a(o(x),{onClick:p,name:"Reset",class:"btn btn-secondary"})])])],32)])]),links:f(()=>[a(o(c),{name:"Register",link:o(k)},null,8,["link"]),a(o(c),{name:"Forgot password",link:o(V)},null,8,["link"])]),_:1}))}};export{$ as default};