import{b as a,p as w,o as c,j as v,e as n,f as V,g as d,u as t,d as y,A as b,i as I}from"./preset.0fed9cf9.js";import{_ as k}from"./Input.8ea64474.js";import{_ as f}from"./Password.1f3ffeca.js";import{_ as C}from"./Submit.997a8e87.js";const x={class:"px-5 py-7"},B=["onSubmit"],P={class:"form-control pt-10"},$={__name:"PasswordUpdate",props:{userInfo:{type:Object,default:{}},autenticatorInfo:{type:Object,default:()=>({})}},setup(_){const u=_;let s=a(""),r=a(""),l=a(""),i=a([]);w(()=>{i.value=u.userInfo});const m=()=>{const p={password:s.value,password_confirmation:r.value,code:l.value};I.Inertia.patch(route("user.update-password",i.value.id),p)};return(p,e)=>(c(),v("div",null,[n("div",x,[n("form",{onSubmit:V(m,["prevent"])},[d(t(f),{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=o=>s.value=o),label:"Password",name:"password",id:"password",placeholder:"type your password"},null,8,["modelValue"]),d(t(f),{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=o=>r.value=o),label:"Password Confirm",name:"password_confirmation",id:"password_confirmation",placeholder:"type your Password Confirmation"},null,8,["modelValue"]),u.autenticatorInfo.is_enable?(c(),y(t(k),{key:0,modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=o=>l.value=o),label:"Two Factor Autenticator Code",type:"text",placeholder:"type your code"},null,8,["modelValue"])):b("",!0),n("div",P,[d(t(C),{name:"update",onClick:m})])],40,B)])]))}};export{$ as default};