import{b as V,v as b,x as c,o as n,j as p,e as a,t as _,F as y,z as h,p as g,f as S,g as m,u as r,d as $,A as x,i as k}from"./preset.0fed9cf9.js";import{_ as v}from"./Input.8ea64474.js";import{_ as j}from"./Submit.997a8e87.js";const I={class:"form-control"},N={class:"label"},w={class:"label-text"},B=["value"],F=["value"],U={class:"invalid-feedback text-primary",role:"alert"},E={__name:"Select",props:{label:{type:String,default:""},name:{type:String,default:""},id:{type:String,default:""},placeholder:{type:String,default:""},options:{type:Object,default:{}},modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(u,{emit:i}){const e=u;let s=V(null);b(()=>{var l,o;return(o=(l=c().props)==null?void 0:l.value)==null?void 0:o.errors},l=>{c().props.value.errors[e.name]&&(s.value=c().props.value.errors[e.name])});const d=l=>{console.log("here"),i("update:modelValue",l.target.value)};return(l,o)=>(n(),p(y,null,[a("div",I,[a("label",N,[a("span",w,_(e.label),1)]),a("select",{class:"select select-primary w-full",id:"{{ props.id }}",value:u.modelValue,onInput:d},[(n(!0),p(y,null,h(e.options,(t,f)=>(n(),p("option",{key:f,value:f},_(t),9,F))),128))],40,B)]),a("span",U,[a("strong",null,_(s.value),1)])],64))}},M={class:"px-5 py-7"},O={class:"grid"},C={class:"avatar justify-center"},D={class:"mb-8 rounded-full w-24 h-24"},L=["src"],z=["onSubmit"],A={class:"form-control pt-10"},G={__name:"EditDetails",props:{adminInfo:{type:Object,default:{}},roles:{type:Object,default:()=>({}),default:{}}},setup(u){const i=u;let e=V([]);g(()=>{e.value=i.adminInfo});const s=()=>{const d={first_name:e.value.first_name,last_name:e.value.last_name,email:e.value.email,role:e.value.role.id};k.Inertia.patch(route("admin.update",e.value.id),d)};return(d,l)=>{var o;return n(),p("div",null,[a("div",M,[a("div",O,[a("div",C,[a("div",D,[a("img",{src:e.value.avatar},null,8,L)])])]),a("form",{onSubmit:S(s,["prevent"])},[m(r(v),{modelValue:e.value.first_name,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value.first_name=t),label:"First Name",type:"text",placeholder:"type your first name"},null,8,["modelValue"]),m(r(v),{modelValue:e.value.last_name,"onUpdate:modelValue":l[1]||(l[1]=t=>e.value.last_name=t),label:"Last Name",type:"text",placeholder:"type your last name"},null,8,["modelValue"]),m(r(v),{modelValue:e.value.email,"onUpdate:modelValue":l[2]||(l[2]=t=>e.value.email=t),label:"Email",type:"email",placeholder:"type your email"},null,8,["modelValue"]),(o=e.value.role)!=null&&o.id?(n(),$(r(E),{key:0,label:"Role",options:i.roles,modelValue:e.value.role.id,"onUpdate:modelValue":l[3]||(l[3]=t=>e.value.role.id=t)},null,8,["options","modelValue"])):x("",!0),a("div",A,[m(r(j),{name:"update",onClick:s})])],40,z)])])}}};export{G as default};