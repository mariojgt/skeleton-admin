import{b as n,o as u,d as _,w as d,e as s,f,g as e,u as o,i as c}from"./preset.d4b0e582.js";import{_ as w}from"./Login.570fa332.js";import{_ as v}from"./Input.ad8a64ab.js";import{_ as p}from"./Link.c5d8e16d.js";import{_ as g}from"./Password.7298f51d.js";import{_ as V}from"./Submit.df820724.js";import"./FlashMessage.1f0ddf3c.js";const y=["onSubmit"],b={class:"px-5 py-7"},k={class:"form-control pt-10"},N={__name:"Index",props:{title:{type:String,default:"mariojgt is heredude"}},setup(h){let t=n(""),r=n("");const i=()=>{const m={email:t.value,password:r.value};c.Inertia.post(route("login.user"),m)};return(m,a)=>(u(),_(w,{title:"Frontend Login"},{form:d(()=>[s("div",null,[s("form",{onSubmit:f(i,["prevent"])},[s("div",b,[e(o(v),{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=l=>t.value=l),label:"Email",type:"email",name:"email",id:"email",placeholder:"type your email"},null,8,["modelValue"]),e(o(g),{modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=l=>r.value=l),label:"Password",name:"password",id:"password",placeholder:"type your password"},null,8,["modelValue"]),s("div",k,[e(o(V),{onClick:i})])])],40,y)])]),links:d(()=>[e(o(p),{name:"Register",link:"register"}),e(o(p),{name:"Forgot password",link:"forgot-password"})]),_:1}))}};export{N as default};