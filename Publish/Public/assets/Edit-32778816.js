import{a as n,o as m,b as p,w as b,d as a,t as f,f as y,e as o,u as d,F as v}from"./preset-59cdb044.js";import{_ as V}from"./App-6bfdd61a.js";import{_ as i}from"./Input.vue_vue_type_script_setup_true_lang-c3b4d3bc.js";import"./index.esm-df9f2d71.js";import{_ as c}from"./Toggle-8aaa57dc.js";import{_ as x}from"./Editor.vue_vue_type_script_setup_true_lang-0918edf3.js";import"./FlashMessage-d89a6fb8.js";import"./dark-fe9bd6e8.js";import"./keyboard-9c71fe26.js";import"./use-resolve-button-type-850145e6.js";import"./hidden-a002ee06.js";const _={class:"px-5 py-7 w-full bg-base-300"},g={class:"mb-4 text-4xl tracking-tight font-extrabold text-center text-neutral"},D={__name:"Edit",props:{editor_key:{type:String,default:null},slider:{type:Object,default:()=>[]}},setup(r){const s=r,u=async()=>{v.post(route("gamedev.slider.update",s.slider.id),l.value)},l=n(s.slider);return(k,e)=>(m(),p(V,null,{default:b(()=>[a("div",_,[a("h2",g," Edit "+f(s.slider.title),1),a("form",{onSubmit:y(u,["prevent"]),class:"bg-secondary bg-opacity-80 backdrop-blur transition-all duration-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"},[o(d(i),{type:"text",modelValue:l.value.title,"onUpdate:modelValue":e[0]||(e[0]=t=>l.value.title=t),label:"Title"},null,8,["modelValue"]),o(d(i),{type:"text",modelValue:l.value.class,"onUpdate:modelValue":e[1]||(e[1]=t=>l.value.class=t),label:"Class"},null,8,["modelValue"]),o(d(i),{type:"number",modelValue:l.value.order,"onUpdate:modelValue":e[2]||(e[2]=t=>l.value.order=t),label:"Order"},null,8,["modelValue"]),o(d(c),{modelValue:l.value.active,"onUpdate:modelValue":e[3]||(e[3]=t=>l.value.active=t),label:"Is published"},null,8,["modelValue"]),a("div",null,[e[5]||(e[5]=a("label",{class:"label"},[a("span",{class:"label-text"},"Slider Body")],-1)),o(x,{"api-key":s.editor_key,init:{plugins:"lists link image table code help wordcount"},modelValue:l.value.body,"onUpdate:modelValue":e[4]||(e[4]=t=>l.value.body=t)},null,8,["api-key","modelValue"])]),e[6]||(e[6]=a("button",{type:"submit",class:"btn btn-accent mt-10 block w-full"}," Update ",-1))],32)])]),_:1}))}};export{D as default};