import{a as n,o as m,b as p,w as b,d as a,t as c,f,e as o,u as d,O as _}from"./preset-2d8e7513.js";import{_ as y}from"./App-d7ffed8d.js";import{_ as i}from"./Input.vue_vue_type_script_setup_true_lang-6c9d504c.js";import{_ as v}from"./Toggle-476623a1.js";import{_ as V}from"./Editor.vue_vue_type_script_setup_true_lang-7066346d.js";import"./FlashMessage-e4ca3f28.js";import"./dark-615da22f.js";import"./keyboard-c607aecc.js";import"./use-resolve-button-type-2ccded4f.js";import"./hidden-e4bb1146.js";const x={class:"px-5 py-7 w-full bg-base-300"},g={class:"mb-4 text-4xl tracking-tight font-extrabold text-center text-neutral"},k=a("label",{class:"label"},[a("span",{class:"label-text"},"Slider Body")],-1),w=a("button",{type:"submit",class:"btn btn-accent mt-10 block w-full"}," Update ",-1),I={__name:"Edit",props:{editor_key:{type:String,default:null},slider:{type:Object,default:()=>[]}},setup(r){const s=r,u=async()=>{_.post(route("gamedev.slider.update",s.slider.id),e.value)},e=n(s.slider);return(U,l)=>(m(),p(y,null,{default:b(()=>[a("div",x,[a("h2",g," Edit "+c(s.slider.title),1),a("form",{onSubmit:f(u,["prevent"]),class:"bg-secondary bg-opacity-80 backdrop-blur transition-all duration-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"},[o(d(i),{type:"text",modelValue:e.value.title,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value.title=t),label:"Title"},null,8,["modelValue"]),o(d(i),{type:"text",modelValue:e.value.class,"onUpdate:modelValue":l[1]||(l[1]=t=>e.value.class=t),label:"Class"},null,8,["modelValue"]),o(d(i),{type:"number",modelValue:e.value.order,"onUpdate:modelValue":l[2]||(l[2]=t=>e.value.order=t),label:"Order"},null,8,["modelValue"]),o(d(v),{modelValue:e.value.active,"onUpdate:modelValue":l[3]||(l[3]=t=>e.value.active=t),label:"Is published"},null,8,["modelValue"]),a("div",null,[k,o(V,{"api-key":s.editor_key,init:{plugins:"lists link image table code help wordcount"},modelValue:e.value.body,"onUpdate:modelValue":l[4]||(l[4]=t=>e.value.body=t)},null,8,["api-key","modelValue"])]),w],32)])]),_:1}))}};export{I as default};