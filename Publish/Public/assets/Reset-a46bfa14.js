import{a as l,o as d,b as _,w as n,d as s,e as f,f as t,u as o,i as u,O as c}from"./preset-b92b06ac.js";import{_ as w}from"./Login-4651b345.js";import{_ as g}from"./Input-d4875ddd.js";import{_ as p}from"./Link-142ff455.js";import{_ as h}from"./Submit-dce90bbc.js";import"./FlashMessage-06d13149.js";const k=["onSubmit"],b={class:"px-5 py-7"},v={class:"form-control pt-10"},$={__name:"Reset",props:{title:{type:String,default:"mariojgt is heredude"}},setup(y){let e=l("");l("");const a=()=>{const r={email:e.value};c.post(route("password-reset.user"),r)};return(r,i)=>(d(),_(w,{title:"Frontend Reset Password"},{form:n(()=>[s("div",null,[s("form",{onSubmit:f(a,["prevent"])},[s("div",b,[t(o(g),{modelValue:o(e),"onUpdate:modelValue":i[0]||(i[0]=m=>u(e)?e.value=m:e=m),label:"Email",type:"email",name:"email",id:"email",placeholder:"type your email"},null,8,["modelValue"]),s("div",v,[t(o(h),{onClick:a})])])],40,k)])]),links:n(()=>[t(o(p),{name:"Register",link:"register"}),t(o(p),{name:"Forgot password",link:"forgot-password"})]),_:1}))}};export{$ as default};