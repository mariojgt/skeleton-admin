import{Q as r}from"./index.esm-df9f2d71.js";import{y as f,a as y,B as g,o,g as p,d as l,l as n,t as i,u,x as b}from"./preset-59cdb044.js";const S={class:"form-control"},h={class:"label"},C=["type","placeholder","value"],k=f({__name:"Input",props:{label:{type:String,default:""},name:{type:String,default:""},id:{type:String,default:""},placeholder:{type:String,default:""},type:{type:String,default:"text"},modelValue:{type:String,default:""},messageClass:{type:String,default:"invalid-feedback text-primary"},labelClass:{type:String,default:"block text-lg font-bold mb-2"},inputClass:{type:String,default:"input input-primary input-bordered"}},emits:["update:modelValue"],setup(t,{emit:d}){let s=y(null);g(()=>{var e;return(e=r().props)==null?void 0:e.errors},e=>{r().props.errors[a.name]&&(s.value=r().props.errors[a.name])});const a=t,c=d,m=e=>{c("update:modelValue",e.target.value)};return(e,v)=>(o(),p("div",S,[l("label",h,[l("span",{class:n(t.labelClass)},i(a.label),3)]),l("input",{class:n(t.inputClass),type:a.type,name:"{{ props.name }}",id:"{{ props.id }}",placeholder:a.placeholder,value:t.modelValue,onInput:m},null,42,C),u(s)?(o(),p("span",{key:0,class:n(t.messageClass),role:"alert"},[l("strong",null,i(u(s)),1)],2)):b("",!0)]))}});export{k as _};