import{a as l,m as V,o as f,g as y,d,f as b,e as n,u as e,i as m,b as v,s as I,G as k}from"./preset-271ebd79.js";import{I as C}from"./Input-a8c96bec.js";import"./Input.vue_vue_type_style_index_0_scoped_245929fe_lang-95037ad6.js";import{_ as w}from"./Password-a4b4a8fb.js";import{_ as x}from"./Submit-cc0f2f3c.js";import"./purify.es-851ec8c9.js";import"./_plugin-vue_export-helper-c27b6911.js";const B={class:"px-5 py-7"},P={class:"form-control pt-10"},O={__name:"PasswordUpdate",props:{adminInfo:{type:Object,default:{}},autenticatorInfo:{type:Object,default:()=>({})}},setup(_){let t=l(""),s=l(""),r=l("");const i=_;let p=l([]);V(()=>{p.value=i.adminInfo});const u=()=>{const c={password:t.value,password_confirmation:s.value,code:r.value};k.patch(route("admin.update-password",p.value.id),c)};return(c,a)=>(f(),y("div",null,[d("div",B,[d("form",{onSubmit:b(u,["prevent"])},[n(e(w),{modelValue:e(t),"onUpdate:modelValue":a[0]||(a[0]=o=>m(t)?t.value=o:t=o),label:"Password",name:"password",id:"password",placeholder:"type your password"},null,8,["modelValue"]),n(e(w),{modelValue:e(s),"onUpdate:modelValue":a[1]||(a[1]=o=>m(s)?s.value=o:s=o),label:"Password Confirm",name:"password_confirmation",id:"password_confirmation",placeholder:"type your Password Confirmation"},null,8,["modelValue"]),i.autenticatorInfo.is_enable?(f(),v(e(C),{key:0,modelValue:e(r),"onUpdate:modelValue":a[2]||(a[2]=o=>m(r)?r.value=o:r=o),label:"Two Factor Autenticator Code",type:"text",placeholder:"type your code"},null,8,["modelValue"])):I("",!0),d("div",P,[n(e(x),{name:"update",onClick:u})])],32)])]))}};export{O as default};