import{a as n,o as c,b as g,w,d,f as v,e as l,u as a,i as p,O as b}from"./preset-dc82439c.js";import{_ as k}from"./App.vue_vue_type_script_setup_true_lang-11ddf888.js";import{_ as u}from"./Input.vue_vue_type_script_setup_true_lang-96442f99.js";import{_ as V}from"./Link-4c6341e8.js";import{_ as y}from"./Password-794077e2.js";import{_ as x}from"./Submit-625435a0.js";import"./FlashMessage-75b2dd90.js";import"./ReusableModal-0b98130e.js";import"./micro-task-156b89d3.js";import"./keyboard-cadf9299.js";import"./hidden-23c9d7a1.js";import"./open-closed-5f0ce8df.js";import"./axios-de37f3a4.js";import"./SearchSidebar-e5fe78d0.js";import"./dynamicIcon.vue_vue_type_script_setup_true_lang-62fe115a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./dark-5cd1184e.js";const N={class:"px-5 py-7"},F={class:"form-control pt-10"},I={__name:"Register",props:{title:{type:String,default:"mariojgt is heredude"}},setup(U){let r=n(""),t=n(""),s=n(""),m=n(""),i=n("");const f=()=>{const _={first_name:r.value,last_name:t.value,email:s.value,password:m.value,password_confirmation:i.value};b.post(route("register.user"),_)};return(_,o)=>(c(),g(k,{title:"Frontend Register"},{form:w(()=>[d("div",null,[d("form",{onSubmit:v(f,["prevent"])},[d("div",N,[l(a(u),{modelValue:a(r),"onUpdate:modelValue":o[0]||(o[0]=e=>p(r)?r.value=e:r=e),label:"First Name",type:"text",name:"first_name",id:"first_name",placeholder:"type your First Name"},null,8,["modelValue"]),l(a(u),{modelValue:a(t),"onUpdate:modelValue":o[1]||(o[1]=e=>p(t)?t.value=e:t=e),label:"Last Name",type:"text",name:"last_name",id:"last_name",placeholder:"type your Last Name"},null,8,["modelValue"]),l(a(u),{modelValue:a(s),"onUpdate:modelValue":o[2]||(o[2]=e=>p(s)?s.value=e:s=e),label:"Email",type:"email",name:"email",id:"email",placeholder:"type your email"},null,8,["modelValue"]),l(a(y),{modelValue:a(m),"onUpdate:modelValue":o[3]||(o[3]=e=>p(m)?m.value=e:m=e),label:"Password",name:"password",id:"password",placeholder:"type your password"},null,8,["modelValue"]),l(a(y),{modelValue:a(i),"onUpdate:modelValue":o[4]||(o[4]=e=>p(i)?i.value=e:i=e),label:"Password Confirm",name:"password_confirmation",id:"password_confirmation",placeholder:"type your Password Confirmation"},null,8,["modelValue"]),d("div",F,[l(a(x),{name:"Register",onClick:f})])])],32)])]),links:w(()=>[l(a(V),{name:"Login",link:"login"}),l(a(V),{name:"Forgot password",link:"forgot-password"})]),_:1}))}};export{I as default};