import{a as _,p as k,q as U,o as y,b as f,w as n,e as o,u as e,d as r,l as d,f as g,i as C,x as h,F as w}from"./preset-75063682.js";import{_ as $}from"./App-6d6cc874.js";import B from"./DeployTable-f3e2d516.js";import I from"./DeployStatus-12e68b8a.js";import{_ as s}from"./Input.vue_vue_type_script_setup_true_lang-e630e9f9.js";import{_ as L}from"./Submit-b01ac0dc.js";import{_ as N}from"./Toggle-53b5ea73.js";import{_ as R}from"./Chips.vue_vue_type_script_setup_true_lang-a48e658c.js";import{m as D,p as M,x as c,I as q,y as b}from"./tabs-a5fe9299.js";import"./FlashMessage-210929fa.js";import"./dark-bdc86e6a.js";import"./keyboard-7956a509.js";import"./use-resolve-button-type-3754a8d9.js";import"./hidden-000242da.js";import"./focus-management-032eabd7.js";const F={class:"form-control pt-10"},Y={__name:"Edit",props:{deploy:{type:Object,default:()=>({})},deploymentLogs:{type:Array,default:()=>[]}},setup(p){const V=p;let l=_({});k(()=>{l.value=V.deploy});let m=_(null);const u=()=>{const i={name:l.value.name,repository_url:l.value.repository_url,branch:l.value.branch,secret_token:l.value.secret_token,is_active:l.value.is_active,deployment_commands:l.value.deployment_commands,deployment_path:l.value.deployment_path};w.post(route("admin.deploy.update",l.value.id),i)},v=()=>{l.value.secret_token=Math.random().toString(36).substring(2).toUpperCase()+Math.random().toString(36).substring(2).toUpperCase()};return(i,a)=>{const x=U("n-card");return y(),f($,null,{default:n(()=>[o(x,{title:"User Profile",class:d("col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-300")},{default:n(()=>[o(e(D),null,{default:n(()=>[o(e(M),{class:"flex space-x-1 rounded-xl p-1 tabs"},{default:n(()=>[o(e(c),null,{default:n(({selected:t})=>[r("a",{class:d(["tab tab-lg tab-bordered",t?"tab-active":""])},"Deploy Information",2)]),_:1}),o(e(c),null,{default:n(({selected:t})=>[r("a",{class:d(["tab tab-lg tab-bordered",t?"tab-active":""])},"Last Deployment",2)]),_:1})]),_:1}),o(e(q),{class:"mt-2"},{default:n(()=>[o(e(b),null,{default:n(()=>[r("form",{onSubmit:g(u,["prevent"])},[o(e(s),{modelValue:e(l).name,"onUpdate:modelValue":a[0]||(a[0]=t=>e(l).name=t),label:"Name",type:"text",placeholder:"Name"},null,8,["modelValue"]),o(e(s),{modelValue:e(l).repository_url,"onUpdate:modelValue":a[1]||(a[1]=t=>e(l).repository_url=t),label:"Repository URL",type:"text",placeholder:"Repository URL"},null,8,["modelValue"]),o(e(s),{modelValue:e(l).branch,"onUpdate:modelValue":a[2]||(a[2]=t=>e(l).branch=t),label:"Branch",type:"text",placeholder:"Branch"},null,8,["modelValue"]),o(e(s),{modelValue:e(l).secret_token,"onUpdate:modelValue":a[3]||(a[3]=t=>e(l).secret_token=t),label:"secret_token",type:"text",placeholder:"secret_token",required:"true"},null,8,["modelValue"]),r("div",{class:"form-control pt-10"},[r("button",{onClick:v,type:"button",class:"btn btn-primary"}," Generate Token ")]),o(e(N),{modelValue:e(l).is_active,"onUpdate:modelValue":a[4]||(a[4]=t=>e(l).is_active=t),label:"Is Active"},null,8,["modelValue"]),o(e(R),{modelValue:e(l).deployment_commands,"onUpdate:modelValue":a[5]||(a[5]=t=>e(l).deployment_commands=t),label:"Deployment Commands"},null,8,["modelValue"]),o(e(s),{modelValue:e(l).deployment_path,"onUpdate:modelValue":a[6]||(a[6]=t=>e(l).deployment_path=t),label:"deployment_path",type:"text",placeholder:"deployment_path",required:"true"},null,8,["modelValue"]),r("div",F,[o(e(L),{name:"update",onClick:u})])],32)]),_:1}),o(e(b),null,{default:n(()=>[o(B,{deployments:p.deploymentLogs.data,onViewDeployment:a[7]||(a[7]=t=>C(m)?m.value=t:m=t)},null,8,["deployments"]),e(m)?(y(),f(I,{key:0,deployment:e(m)},null,8,["deployment"])):h("",!0)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{Y as default};