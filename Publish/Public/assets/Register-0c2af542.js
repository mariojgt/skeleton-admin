import{a as s,o as c,b as g,w,d,f as v,e as t,u as e,i as n,G as b}from"./preset-b90b9b08.js";import{_ as k}from"./App.vue_vue_type_script_setup_true_lang-11e7867c.js";import{I as u}from"./Input-75e9a382.js";import{_ as V}from"./Link-a2c75aac.js";import{I as y}from"./Password-224c8919.js";import{_ as x}from"./Submit-5e6379c6.js";import"./Password.vue_vue_type_style_index_0_scoped_eed4e79b_lang-f3834945.js";import"./FlashMessage-93f4c79f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./x-b0b4ae59.js";import"./createLucideIcon-c54a04d6.js";import"./triangle-alert-9a3c06c5.js";import"./clock-83e0ad33.js";import"./shield-check-ea999e19.js";import"./ReusableModal-eb4fe44e.js";import"./transition-c810ac22.js";import"./focus-management-bfa3f621.js";import"./keyboard-8b566b5e.js";import"./hidden-a6a905be.js";import"./open-closed-def677aa.js";import"./SearchSidebar-3f65748b.js";import"./dynamicIcon.vue_vue_type_script_setup_true_lang-4bfb852c.js";import"./axios-0c773085.js";import"./search-b1a2db28.js";import"./Markdown-8dc0f09b.js";import"./arrow-down-98a90328.js";import"./user-5bde1ce3.js";import"./code-0ce16765.js";import"./crown-9f36e625.js";import"./arrow-right-0e40d01d.js";import"./Frontend_js-71f5644a.js";import"./mail-6312a372.js";import"./loader-circle-c9275f11.js";import"./circle-check-big-66a371fd.js";import"./gamepad-2-08d13ba1.js";import"./house-95b711b1.js";import"./book-open-45bfbf31.js";import"./lock-e84a1f43.js";import"./arrow-left-44d4d084.js";import"./shield-179861bc.js";import"./key-6e09cf1f.js";import"./Money-0f722979.js";import"./check-dfbbe6ec.js";import"./download-4347e100.js";import"./message-circle-78d7a2a9.js";import"./SeoManager-c70493bc.js";const F={class:"px-5 py-7"},N={class:"form-control pt-10"},vo={__name:"Register",props:{title:{type:String,default:"mariojgt is heredude"}},setup(U){let a=s(""),m=s(""),i=s(""),l=s(""),p=s("");const f=()=>{const _={first_name:a.value,last_name:m.value,email:i.value,password:l.value,password_confirmation:p.value};b.post(route("register.user"),_)};return(_,r)=>(c(),g(k,{title:"Frontend Register"},{form:w(()=>[d("div",null,[d("form",{onSubmit:v(f,["prevent"])},[d("div",F,[t(e(u),{modelValue:e(a),"onUpdate:modelValue":r[0]||(r[0]=o=>n(a)?a.value=o:a=o),label:"First Name",type:"text",name:"first_name",id:"first_name",placeholder:"type your First Name"},null,8,["modelValue"]),t(e(u),{modelValue:e(m),"onUpdate:modelValue":r[1]||(r[1]=o=>n(m)?m.value=o:m=o),label:"Last Name",type:"text",name:"last_name",id:"last_name",placeholder:"type your Last Name"},null,8,["modelValue"]),t(e(u),{modelValue:e(i),"onUpdate:modelValue":r[2]||(r[2]=o=>n(i)?i.value=o:i=o),label:"Email",type:"email",name:"email",id:"email",placeholder:"type your email"},null,8,["modelValue"]),t(e(y),{modelValue:e(l),"onUpdate:modelValue":r[3]||(r[3]=o=>n(l)?l.value=o:l=o),label:"Password",name:"password",id:"password",placeholder:"type your password"},null,8,["modelValue"]),t(e(y),{modelValue:e(p),"onUpdate:modelValue":r[4]||(r[4]=o=>n(p)?p.value=o:p=o),label:"Password Confirm",name:"password_confirmation",id:"password_confirmation",placeholder:"type your Password Confirmation"},null,8,["modelValue"]),d("div",N,[t(e(x),{name:"Register",onClick:f})])])],32)])]),links:w(()=>[t(e(V),{name:"Login",link:"login"}),t(e(V),{name:"Forgot password",link:"forgot-password"})]),_:1}))}};export{vo as default};