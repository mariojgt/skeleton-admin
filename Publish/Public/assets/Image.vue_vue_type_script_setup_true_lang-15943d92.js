import{y as V,a as u,bO as M,o as a,g as r,d as e,t as m,E as B,G as I,u as d,i as D,x as g,v as b,z as f,J as L}from"./preset-75063682.js";const S={class:"form-control"},E={class:"label"},j={class:"block text-lg font-bold mb-2"},N=["name","id","placeholder"],z={key:0,class:"invalid-feedback text-primary mt-2",role:"alert"},A={key:1,class:"mt-3 bg-base-100 rounded"},F={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2 bg-dark-100"},G=["onClick"],H=["src"],J={class:"text-lg font-bold"},K={key:2,class:"mt-3 bg-base-300 rounded"},O={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2"},R=["src"],T={class:"text-lg font-bold"},U=["onClick"],q=V({__name:"Image",props:{label:{},name:{},id:{},placeholder:{},modelValue:{},endpoint:{},loadData:{}},emits:["update:modelValue"],setup(_,{emit:w}){const n=_;let i=u(""),c=u({data:[]}),l=u(n.modelValue||[]),p=u(null);M(()=>{l.value=n.loadData||[]});const v=w,x=()=>{L.post(n.endpoint,{search:i.value}).then(o=>{c.value=o.data}).catch(o=>{p.value=o.message})},k=o=>{l.value.find(t=>t.id===o.id)||(l.value.push(o),v("update:modelValue",l.value)),c.value={data:[]}},y=o=>{l.value.splice(o,1),v("update:modelValue",l.value)};return(o,t)=>(a(),r("div",S,[e("label",E,[e("span",j,m(n.label),1)]),B(e("input",{class:"input input-primary input-bordered",name:n.name,id:n.id,placeholder:n.placeholder,"onUpdate:modelValue":t[0]||(t[0]=s=>D(i)?i.value=s:i=s),autocomplete:"off",onKeyup:x},null,40,N),[[I,d(i)]]),d(p)?(a(),r("span",z,[e("strong",null,m(d(p)),1)])):g("",!0),d(c).data[0]?(a(),r("div",A,[t[2]||(t[2]=e("div",{class:"px-2 py-3 bg-primary text-white rounded-t"},[e("strong",null,"Available Items")],-1)),e("div",F,[(a(!0),r(b,null,f(d(c).data,(s,h)=>(a(),r("div",{class:"flex flex-col items-center border border-success p-3 hover:text-white rounded cursor-pointer",key:s.id,onClick:C=>k(s)},[e("img",{src:s.url.default,class:"h-60 w-auto mb-2"},null,8,H),e("strong",J,m(s.name),1),t[1]||(t[1]=e("button",{class:"btn btn-success mt-2 w-full"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 mt-2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"})])],-1))],8,G))),128))])])):g("",!0),d(l).length>0?(a(),r("div",K,[t[4]||(t[4]=e("div",{class:"px-2 py-3 bg-primary text-white rounded-t"},[e("strong",null,"Selected Items")],-1)),e("div",O,[(a(!0),r(b,null,f(d(l),(s,h)=>(a(),r("div",{class:"flex flex-col items-center border border-error p-3 hover:text-white rounded cursor-pointer",key:s.id},[e("img",{src:s.url.default,class:"h-60 w-auto mb-2"},null,8,R),e("strong",T,m(s.name),1),e("button",{onClick:C=>y(h),class:"btn btn-error mt-2 w-full"},t[3]||(t[3]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 mt-2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1)]),8,U)]))),128))])])):g("",!0)]))}});export{q as _};