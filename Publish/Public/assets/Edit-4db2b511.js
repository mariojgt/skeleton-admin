import{a as b,p as U,q as j,o as m,b as B,w as o,e as a,u as e,d as t,k as i,f as D,g as p,y as h,t as v,F as g,C as F,D as I,O as x}from"./preset-97972412.js";import{_ as M}from"./App-760c3cd4.js";import{_ as y}from"./Input.vue_vue_type_script_setup_true_lang-c5967c15.js";import{_ as S}from"./Submit-77153a25.js";import{m as $,p as E,x as k,I as G,y as V}from"./tabs-f0270995.js";import"./FlashMessage-498d0eeb.js";import"./dark-aeb88a56.js";import"./keyboard-409d75a5.js";import"./use-resolve-button-type-22730c26.js";import"./hidden-73ee9ad9.js";import"./micro-task-4a293294.js";const q={class:"form-control pt-10"},z={class:"flex flex-col mb-7"},A={class:"text-2xl font-bold"},H={class:"flex justify-between"},J={class:"form-control"},K={class:"label-text"},Q={class:"label cursor-pointer"},R=["onUpdate:modelValue"],oe={__name:"Edit",props:{role:{type:Object,default:()=>({})},permissions:{type:Object,default:()=>({})},rolePermissions:{type:Object,default:()=>({})}},setup(w){const _=w;let l=b([]),r=b([]);U(()=>{l.value=_.role,r.value=_.rolePermissions});const f=()=>{const d={name:l.value.name,guard_name:l.value.guard_name};x.patch(route("admin.role.update",l.value.id),d)},C=()=>{const d={permissions:r.value};x.patch(route("admin.role.perm.update",l.value.id),d)};return(d,u)=>{const N=j("n-card");return m(),B(M,null,{default:o(()=>[a(N,{title:"User Profile",class:i("col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-300")},{default:o(()=>[a(e($),null,{default:o(()=>[a(e(E),{class:"flex space-x-1 rounded-xl p-1 tabs"},{default:o(()=>[a(e(k),null,{default:o(({selected:s})=>[t("a",{class:i(["tab tab-lg tab-bordered",s?"tab-active":""])},"Deatils",2)]),_:1}),a(e(k),null,{default:o(({selected:s})=>[t("a",{class:i(["tab tab-lg tab-bordered",s?"tab-active":""])},"Permissions",2)]),_:1})]),_:1}),a(e(G),{class:"mt-2"},{default:o(()=>[a(e(V),null,{default:o(()=>[t("form",{onSubmit:D(f,["prevent"])},[a(e(y),{modelValue:e(l).name,"onUpdate:modelValue":u[0]||(u[0]=s=>e(l).name=s),label:"Name",type:"text",placeholder:"Name"},null,8,["modelValue"]),a(e(y),{modelValue:e(l).guard_name,"onUpdate:modelValue":u[1]||(u[1]=s=>e(l).guard_name=s),label:"Guard Name",type:"text",placeholder:"type your Guard Name"},null,8,["modelValue"]),t("div",q,[a(e(S),{name:"update",onClick:f})])],32)]),_:1}),a(e(V),null,{default:o(()=>[(m(!0),p(g,null,h(_.permissions,(s,n)=>(m(),p("div",{key:n},[t("div",z,[t("h3",A,v(n),1),t("div",H,[(m(!0),p(g,null,h(s,(c,P)=>(m(),p("div",{key:P},[t("div",J,[t("span",K,v(c.name),1),t("label",Q,[F(t("input",{onChange:C,"onUpdate:modelValue":O=>e(r)[n][c.name]=O,type:"checkbox",checked:"checked",class:i(["toggle",e(r)[n][c.name]?"toggle-success":"toggle-error"])},null,42,R),[[I,e(r)[n][c.name]]])])])]))),128))])])]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{oe as default};