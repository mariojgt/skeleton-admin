import{x as i,a as u,bB as c,o as m,g as f,d as a,t as s,u as _,Q as l}from"./preset-0e6c6859.js";const y={class:"form-control"},g={class:"label"},h={class:"block text-lg font-bold mb-2"},b=["type","placeholder","value"],v={class:"invalid-feedback text-primary",role:"alert"},V=i({__name:"Input",props:{label:{type:String,default:""},name:{type:String,default:""},id:{type:String,default:""},placeholder:{type:String,default:""},type:{type:String,default:"text"},modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(o,{emit:n}){let r=u(null);c(()=>{var e;return(e=l().props)==null?void 0:e.errors},e=>{l().props.errors[t.name]&&(r.value=l().props.errors[t.name])});const t=o,p=n,d=e=>{p("update:modelValue",e.target.value)};return(e,S)=>(m(),f("div",y,[a("label",g,[a("span",h,s(t.label),1)]),a("input",{class:"input input-primary input-bordered",type:t.type,name:"{{ props.name }}",id:"{{ props.id }}",placeholder:t.placeholder,value:o.modelValue,onInput:d},null,40,b),a("span",v,[a("strong",null,s(_(r)),1)])]))}});export{V as _};