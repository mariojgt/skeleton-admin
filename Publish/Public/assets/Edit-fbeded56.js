import{a as b,p as O,q as U,o as r,b as j,w as o,e as a,u as e,d as s,k as f,f as B,g as i,z as v,t as $,F as y,O as x}from"./preset-ccc94f51.js";import{_ as F}from"./App-52281b6f.js";import{_ as g}from"./Input.vue_vue_type_script_setup_true_lang-5abb42d7.js";import{_ as G}from"./Submit-ef7921dd.js";import{_ as I}from"./Toggle-8560bda3.js";import{m as S,p as z,x as V,I as D,y as h}from"./tabs-5eb9c560.js";import"./FlashMessage-88e0a015.js";import"./dark-4fe20460.js";import"./keyboard-a7bb49e4.js";import"./use-resolve-button-type-51ccf303.js";import"./hidden-b796c6e5.js";import"./micro-task-f7c6a5a2.js";const E={class:"form-control pt-10"},M={class:"flex flex-col mb-7"},q={class:"text-2xl font-bold"},A={class:"flex justify-between"},ae={__name:"Edit",props:{role:{type:Object,default:()=>({})},permissions:{type:Object,default:()=>({})},rolePermissions:{type:Object,default:()=>({})}},setup(k){const p=k;let l=b([]),n=b([]);O(()=>{l.value=p.role,n.value=p.rolePermissions});const _=()=>{const m={name:l.value.name,guard_name:l.value.guard_name};x.patch(route("admin.role.update",l.value.id),m)},N=()=>{const m={permissions:n.value};x.patch(route("admin.role.perm.update",l.value.id),m)};return(m,u)=>{const w=U("n-card");return r(),j(F,null,{default:o(()=>[a(w,{title:"User Profile",class:f("col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-300")},{default:o(()=>[a(e(S),null,{default:o(()=>[a(e(z),{class:"flex space-x-1 rounded-xl p-1 tabs"},{default:o(()=>[a(e(V),null,{default:o(({selected:t})=>[s("a",{class:f(["tab tab-lg tab-bordered",t?"tab-active":""])},"Deatils",2)]),_:1}),a(e(V),null,{default:o(({selected:t})=>[s("a",{class:f(["tab tab-lg tab-bordered",t?"tab-active":""])},"Permissions",2)]),_:1})]),_:1}),a(e(D),{class:"mt-2"},{default:o(()=>[a(e(h),null,{default:o(()=>[s("form",{onSubmit:B(_,["prevent"])},[a(e(g),{modelValue:e(l).name,"onUpdate:modelValue":u[0]||(u[0]=t=>e(l).name=t),label:"Name",type:"text",placeholder:"Name"},null,8,["modelValue"]),a(e(g),{modelValue:e(l).guard_name,"onUpdate:modelValue":u[1]||(u[1]=t=>e(l).guard_name=t),label:"Guard Name",type:"text",placeholder:"type your Guard Name"},null,8,["modelValue"]),s("div",E,[a(e(G),{name:"update",onClick:_})])],32)]),_:1}),a(e(h),null,{default:o(()=>[(r(!0),i(y,null,v(p.permissions,(t,d)=>(r(),i("div",{key:d},[s("div",M,[s("h3",q,$(d),1),s("div",A,[(r(!0),i(y,null,v(t,(c,P)=>(r(),i("div",{key:P},[a(e(I),{onChange:N,modelValue:e(n)[d][c.name],"onUpdate:modelValue":C=>e(n)[d][c.name]=C,label:c.name,type:"text",placeholder:"type your Guard Name"},null,8,["modelValue","onUpdate:modelValue","label"])]))),128))])])]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{ae as default};