import{Q as l}from"./Password.vue_vue_type_style_index_0_scoped_eed4e79b_lang-f3834945.js";import{v as _,a as g,A as y,o as s,g as o,d as t,t as r,F as i,y as v,u as b}from"./preset-b90b9b08.js";const h={class:"form-control"},S={class:"label"},k={class:"block text-lg font-bold mb-2"},V=["value"],x=["value"],B={class:"invalid-feedback text-primary",role:"alert"},A=_({__name:"Select",props:{label:{type:String,default:""},name:{type:String,default:""},id:{type:String,default:""},placeholder:{type:String,default:""},options:{type:Object,default:{}},modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(n,{emit:u}){let p=g(null);y(()=>{var e;return(e=l().props)==null?void 0:e.errors},e=>{l().props.errors[a.name]&&(p.value=l().props.errors[a.name])});const a=n,d=u,m=e=>{d("update:modelValue",e.target.value)};return(e,w)=>(s(),o(i,null,[t("div",h,[t("label",S,[t("span",k,r(a.label),1)]),t("select",{class:"select select-primary w-full",id:"{{ props.id }}",value:n.modelValue,onInput:m},[(s(!0),o(i,null,v(a.options,(f,c)=>(s(),o("option",{key:c,value:c},r(f),9,x))),128))],40,V)]),t("span",B,[t("strong",null,r(b(p)),1)])],64))}});export{A as _};