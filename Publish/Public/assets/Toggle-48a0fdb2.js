import{Q as r}from"./Alert.vue_vue_type_style_index_0_scoped_49aa24f8_lang-1ebaedb6.js";import{a as c,C as _,o as n,g as i,d as o,t as d,k as h,u as t,v as k}from"./preset-568b6dc0.js";const b={class:"form-control"},f={class:"label"},v={class:"block text-lg font-bold mb-2"},S=["name","id","placeholder","checked"],V={key:0,class:"invalid-feedback text-primary",role:"alert"},C={__name:"Toggle",props:{label:String,name:String,id:String,placeholder:String,modelValue:String,class:String},emits:["update:modelValue"],setup(m,{emit:p}){const e=m,u=p;let s=c(null),l=c(!!e.modelValue);_(()=>{var a;return(a=r().props)==null?void 0:a.errors},a=>{s.value=r().props.errors[e.name]||null});const g=()=>{l.value=!l.value,u("update:modelValue",l.value)};return(a,x)=>(n(),i("div",b,[o("label",f,[o("span",v,d(e.label),1)]),o("input",{type:"checkbox",class:h(["toggle",e.class]),name:e.name,id:e.id,placeholder:e.placeholder,checked:t(l),onClick:g},null,10,S),t(s)?(n(),i("span",V,[o("strong",null,d(t(s)),1)])):k("",!0)]))}};export{C as _};