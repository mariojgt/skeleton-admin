import{a as f,p as c,cW as x,o as _,g as b,d as s,u as t,e as r,f as y}from"./preset-449c2603.js";import{_ as i}from"./Input.vue_vue_type_script_setup_true_lang-99be28ca.js";import{_ as g}from"./Submit-41e14874.js";const v={class:"px-5 py-7 bg-dark-200 rounded-lg shadow-2xl"},V={class:"grid"},h={class:"avatar justify-center"},C={class:"mb-8 rounded-full w-24 h-24"},w=["src"],U={__name:"EditDetails",props:{userInfo:{type:Object,default:{}}},emits:["isLoading"],setup(u,{emit:d}){const n=d,p=u;let e=f([]);c(()=>{e.value=p.userInfo});const o=x({first_name:e.value.first_name,last_name:e.value.last_name,email:e.value.email}),m=()=>{n("isLoading",!0),o.first_name=e.value.first_name,o.last_name=e.value.last_name,o.email=e.value.email,o.patch(route("user.update",e.value.id),{preserveState:!0,onSuccess:()=>{n("isLoading",!1)},onError:()=>{n("isLoading",!1)}})};return(L,a)=>(_(),b("div",v,[s("div",V,[s("div",h,[s("div",C,[s("img",{src:t(e).avatar},null,8,w)])])]),s("form",{onSubmit:y(m,["prevent"])},[r(t(i),{modelValue:t(e).first_name,"onUpdate:modelValue":a[0]||(a[0]=l=>t(e).first_name=l),label:"First Name",type:"text",placeholder:"type your first name",messageClass:"text-white text-xl bg-error mt-1 rounded-lg p-2 opacity-90",inputClass:"w-full p-5 text-2xl input input-primary input-bordered",labelClass:"text-3xl font-bold text-left"},null,8,["modelValue"]),r(t(i),{modelValue:t(e).last_name,"onUpdate:modelValue":a[1]||(a[1]=l=>t(e).last_name=l),label:"Last Name",type:"text",placeholder:"type your last name",messageClass:"text-white text-xl bg-error mt-1 rounded-lg p-2 opacity-90",inputClass:"w-full p-5 text-2xl input input-primary input-bordered",labelClass:"text-3xl font-bold text-left"},null,8,["modelValue"]),r(t(i),{modelValue:t(e).email,"onUpdate:modelValue":a[2]||(a[2]=l=>t(e).email=l),label:"Email",type:"email",placeholder:"type your email",messageClass:"text-white text-xl bg-error mt-1 rounded-lg p-2 opacity-90",inputClass:"w-full p-5 text-2xl input input-primary input-bordered",labelClass:"text-3xl font-bold text-left"},null,8,["modelValue"]),r(t(g),{class:"btn btn-secondary",name:"Update",onClick:m})],32)]))}};export{U as default};