import{a as c,bC as C,Q as m,p as M,o as a,g as n,d as e,t as u,bI as j,by as I,u as d,i as V,F as y,z as b,x as B,C as D}from"./preset-51a69b57.js";const K={class:"form-control"},L={class:"label"},O={class:"block text-lg font-bold mb-2"},F=["placeholder"],N={class:"invalid-feedback text-primary",role:"alert"},T={key:0,class:"mt-3 bg-white rounded"},z=e("div",{class:"px-2 py-3 bg-green-200 text-black rounded-t"},[e("strong",null,"Available Items")],-1),A=["onClick"],E={class:"inline-flex items-center space-x-2"},H=e("div",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"})])],-1),Q={class:"mt-3 bg-white rounded"},R=["onClick"],U={class:"inline-flex items-center space-x-2"},$=e("div",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})])],-1),G={__name:"TextMultipleSelector",props:{label:{type:String,default:""},name:{type:String,default:""},id:{type:String,default:""},placeholder:{type:String,default:""},modelValue:{type:String,default:""},model:{type:String,default:""},columns:{type:Object,default:null},endpoint:{type:String,default:""},loadData:{type:Object,default:null},singleMode:{type:Boolean,default:!1},displayKey:{type:String,default:"name"}},emits:["update:modelValue"],setup(g,{emit:_}){let v=c(null);C(()=>{var l;return(l=m().props)==null?void 0:l.errors},l=>{m().props.errors[t.name]&&(v.value=m().props.errors[t.name])});const t=g,h=_;let r=c(""),i=c("");const x=async()=>{D.post(t.endpoint,{search:r.value,model:t.model,columns:t.columns}).then(function(l){i.value=l.data}).catch(function(l){for(const[p,s]of Object.entries(l.response.data.errors))message.error(s[0])})};let o=c([]);const k=async l=>{t.singleMode&&(o.value=[]),o.value.indexOf(l)===-1&&o.value.push({id:l.id,[t.displayKey]:l[t.displayKey]}),i.value=[],h("update:modelValue",o.value)},w=async l=>{o.value.splice(l,1),h("update:modelValue",o.value)};return M(()=>{t.loadData&&(t.singleMode?o.value=[t.loadData]:o.value=t.loadData)}),(l,p)=>(a(),n("div",K,[e("label",L,[e("span",O,u(t.label),1)]),j(e("input",{class:"input input-primary input-bordered",name:"{{ props.name }}",id:"{{ props.id }}",placeholder:t.placeholder,autocomplete:"off","onUpdate:modelValue":p[0]||(p[0]=s=>V(r)?r.value=s:r=s),onKeyup:x},null,40,F),[[I,d(r)]]),e("span",N,[e("strong",null,u(d(v)),1)]),d(i).data?(a(),n("div",T,[z,(a(!0),n(y,null,b(d(i).data,(s,f)=>(a(),n("div",{class:"flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4 border-l-transparent hover:rounded text-black hover:bg-green-700 hover:text-white",key:s.id,onClick:S=>k(s)},[e("div",E,[e("div",null,[e("strong",null,u(s[t.displayKey]),1)])]),H],8,A))),128))])):B("",!0),e("div",Q,[(a(!0),n(y,null,b(d(o),(s,f)=>(a(),n("div",{class:"flex justify-between items-center border-b border-slate-200 text-black py-3 px-2 border-l-4 border-l-transparent hover:rounded hover:bg-red-700 hover:text-white",key:s.id,onClick:S=>w(f)},[e("div",U,[e("div",null,[e("strong",null,u(s[t.displayKey]),1)])]),$],8,R))),128))])]))}};export{G as _};