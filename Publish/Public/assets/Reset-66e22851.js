import{a as n,o as p,b as c,w as m,d as s,e as f,f as t,u as e,i as k,O as g}from"./preset-26b1ee33.js";import{_ as h}from"./Login-72f01ae3.js";import{_ as w}from"./Input-d7887f86.js";import{_ as u}from"./Link-a697c4e2.js";import{_ as b}from"./Submit-7c5c18ad.js";import"./FlashMessage-56cf19ea.js";const v=["onSubmit"],y={class:"px-5 py-7"},R={class:"form-control pt-10"},N={__name:"Reset",props:{title:{type:String,default:"mariojgt is heredude"}},setup(V){const _=route("skeleton.register"),d=route("skeleton.login");let o=n("");n("");const a=()=>{const i={email:o.value};g.post(route("skeleton.password-reset"),i)};return(i,l)=>(p(),c(h,{title:"Backend Reset Password"},{form:m(()=>[s("div",null,[s("form",{onSubmit:f(a,["prevent"])},[s("div",y,[t(e(w),{modelValue:e(o),"onUpdate:modelValue":l[0]||(l[0]=r=>k(o)?o.value=r:o=r),label:"Email",type:"email",name:"email",id:"email",placeholder:"type your email"},null,8,["modelValue"]),s("div",R,[t(e(b),{onClick:a,name:"Request Password"})])])],40,v)])]),links:m(()=>[t(e(u),{name:"Register",link:e(_)},null,8,["link"]),t(e(u),{name:"Login",link:e(d)},null,8,["link"])]),_:1}))}};export{N as default};