import{v as _,a as m,A as v,o as n,g as o,d as s,k as p,t as u,D as k,bJ as S,bT as V,f as w,F as A,y as D,q as B,u as b,s as K}from"./preset-b90b9b08.js";import{Q as c}from"./index.esm-b2918197.js";const M={class:"form-control"},N={class:"label"},T={class:"flex flex-col gap-4"},E=["type","name","id","placeholder","onKeydown"],F={class:"flex flex-wrap gap-2"},q=["onClick"],Q=_({__name:"Chips",props:{label:{type:String,default:""},name:{type:String,default:""},id:{type:String,default:""},placeholder:{type:String,default:"Type a command and press Enter (e.g. php artisan migrate)"},type:{type:String,default:"text"},modelValue:{type:Array,default:()=>[]},messageClass:{type:String,default:"invalid-feedback text-primary"},labelClass:{type:String,default:"block text-lg font-bold mb-2"},inputClass:{type:String,default:"input input-primary input-bordered"}},emits:["update:modelValue"],setup(l,{emit:h}){const r=m(""),t=m([]);let i=m(null);v(()=>{var e;return(e=c().props)==null?void 0:e.errors},()=>{c().props.errors[a.name]&&(i.value=c().props.errors[a.name])});const a=l,y=h;v(()=>a.modelValue,e=>{e&&Array.isArray(e)&&(t.value=[...e])},{immediate:!0});const C=()=>{const e=r.value.trim();e&&!t.value.includes(e)&&(t.value.push(e),y("update:modelValue",t.value),r.value="")},x=e=>{t.value.splice(e,1),y("update:modelValue",t.value)};return(e,f)=>(n(),o("div",M,[s("label",N,[s("span",{class:p(l.labelClass)},u(a.label),3)]),s("div",T,[k(s("input",{class:p(l.inputClass),type:a.type,name:a.name,id:a.id,placeholder:a.placeholder,"onUpdate:modelValue":f[0]||(f[0]=d=>r.value=d),onKeydown:V(w(C,["prevent"]),["enter"])},null,42,E),[[S,r.value]]),s("div",F,[(n(!0),o(A,null,D(t.value,(d,g)=>(n(),o("div",{key:g,class:"badge badge-primary gap-2 p-4 font-mono text-sm"},[B(u(d)+" ",1),s("button",{onClick:z=>x(g),class:"btn btn-ghost btn-xs text-primary-content hover:bg-primary-focus"}," × ",8,q)]))),128))])]),b(i)?(n(),o("span",{key:0,class:p(l.messageClass),role:"alert"},[s("strong",null,u(b(i)),1)],2)):K("",!0)]))}});export{Q as _};