import{a as i,b as v,w as u,o as V,d as l,e as g,f as a,u as o,J as y}from"./preset.8feab997.js";import{_ as b}from"./Login.c9c919e6.js";import{_ as P}from"./Input.fb0a027a.js";import{_ as f}from"./Link.08d363fe.js";import{_}from"./Password.715f7c1f.js";import{_ as $}from"./Submit.dbf024dd.js";import"./FlashMessage.97809d8d.js";const h=["onSubmit"],x={class:"px-5 py-7"},B={class:"form-control pt-10"},N={__name:"ResetPassword",props:{token:{type:String,default:""}},setup(c){const m=c,w=route("skeleton.register"),k=route("skeleton.forgot-password");let t=i(""),r=i(""),n=i("");console.log(m);const d=()=>{const p={email:t.value,password:r.value,password_confirmation:n.value,token:m.token};y.post(route("skeleton.password.change"),p)};return(p,e)=>(V(),v(b,{title:"Backend Reset"},{form:u(()=>[l("div",null,[l("form",{onSubmit:g(d,["prevent"])},[l("div",x,[a(o(P),{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=s=>t.value=s),label:"Email",type:"email",name:"email",id:"email",placeholder:"type your email"},null,8,["modelValue"]),a(o(_),{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=s=>r.value=s),label:"Password",name:"password",id:"password",placeholder:"type your password"},null,8,["modelValue"]),a(o(_),{modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=s=>n.value=s),label:"Password Confirm",name:"password_confirmation",id:"password_confirmation",placeholder:"type your Password Confirmation"},null,8,["modelValue"]),l("div",B,[a(o($),{onClick:d,name:"Reset"})])])],40,h)])]),links:u(()=>[a(o(f),{name:"Register",link:o(w)},null,8,["link"]),a(o(f),{name:"Forgot password",link:o(k)},null,8,["link"])]),_:1}))}};export{N as default};