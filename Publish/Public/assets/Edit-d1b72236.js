import{a as y,m as x,p as U,o as _,b as f,w as n,e as o,u as e,d as r,k as p,f as g,i as C,s as h,G as I}from"./preset-7017bb8f.js";import{_ as w}from"./App-a28fd844.js";import B from"./DeployTable-22d5d09f.js";import L from"./DeployStatus-7a2f7cb3.js";import{I as s}from"./Input-c2e1c77a.js";import"./Input.vue_vue_type_style_index_0_scoped_245929fe_lang-4c922919.js";import{_ as N}from"./Submit-90f89a2d.js";import{_ as R}from"./Toggle-34de7bcd.js";import{_ as $}from"./Chips.vue_vue_type_script_setup_true_lang-96b3c604.js";import"./purify.es-851ec8c9.js";import{m as D,p as M,x as c,I as G,y as b}from"./tabs-7894802f.js";import"./FlashMessage-016b8cbd.js";import"./search-f7e29ec3.js";import"./createLucideIcon-ea1aa057.js";import"./trash-0b85e424.js";import"./circle-check-big-ce8f8728.js";import"./triangle-alert-e31fe4b8.js";import"./arrow-right-986e96bf.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./keyboard-5828a81d.js";import"./use-resolve-button-type-ec2d8133.js";import"./hidden-28fb574b.js";import"./focus-management-bdffb607.js";const S={class:"form-control pt-10"},re={__name:"Edit",props:{deploy:{type:Object,default:()=>({})},deploymentLogs:{type:Array,default:()=>[]}},setup(d){const V=d;let t=y({});x(()=>{t.value=V.deploy});let m=y(null);const u=()=>{const i={name:t.value.name,repository_url:t.value.repository_url,branch:t.value.branch,secret_token:t.value.secret_token,is_active:t.value.is_active,deployment_commands:t.value.deployment_commands,deployment_path:t.value.deployment_path};I.post(route("admin.deploy.update",t.value.id),i)},v=()=>{t.value.secret_token=Math.random().toString(36).substring(2).toUpperCase()+Math.random().toString(36).substring(2).toUpperCase()};return(i,a)=>{const k=U("n-card");return _(),f(w,null,{default:n(()=>[o(k,{title:"User Profile",class:p("col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-300")},{default:n(()=>[o(e(D),null,{default:n(()=>[o(e(M),{class:"flex space-x-1 rounded-xl p-1 tabs"},{default:n(()=>[o(e(c),null,{default:n(({selected:l})=>[r("a",{class:p(["tab tab-lg tab-bordered",l?"tab-active":""])},"Deploy Information",2)]),_:1}),o(e(c),null,{default:n(({selected:l})=>[r("a",{class:p(["tab tab-lg tab-bordered",l?"tab-active":""])},"Last Deployment",2)]),_:1})]),_:1}),o(e(G),{class:"mt-2"},{default:n(()=>[o(e(b),null,{default:n(()=>[r("form",{onSubmit:g(u,["prevent"])},[o(e(s),{modelValue:e(t).name,"onUpdate:modelValue":a[0]||(a[0]=l=>e(t).name=l),label:"Name",type:"text",placeholder:"Name"},null,8,["modelValue"]),o(e(s),{modelValue:e(t).repository_url,"onUpdate:modelValue":a[1]||(a[1]=l=>e(t).repository_url=l),label:"Repository URL",type:"text",placeholder:"Repository URL"},null,8,["modelValue"]),o(e(s),{modelValue:e(t).branch,"onUpdate:modelValue":a[2]||(a[2]=l=>e(t).branch=l),label:"Branch",type:"text",placeholder:"Branch"},null,8,["modelValue"]),o(e(s),{modelValue:e(t).secret_token,"onUpdate:modelValue":a[3]||(a[3]=l=>e(t).secret_token=l),label:"secret_token",type:"text",placeholder:"secret_token",required:"true"},null,8,["modelValue"]),r("div",{class:"form-control pt-10"},[r("button",{onClick:v,type:"button",class:"btn btn-primary"}," Generate Token ")]),o(e(R),{modelValue:e(t).is_active,"onUpdate:modelValue":a[4]||(a[4]=l=>e(t).is_active=l),label:"Is Active"},null,8,["modelValue"]),o(e($),{modelValue:e(t).deployment_commands,"onUpdate:modelValue":a[5]||(a[5]=l=>e(t).deployment_commands=l),label:"Deployment Commands"},null,8,["modelValue"]),o(e(s),{modelValue:e(t).deployment_path,"onUpdate:modelValue":a[6]||(a[6]=l=>e(t).deployment_path=l),label:"deployment_path",type:"text",placeholder:"deployment_path",required:"true"},null,8,["modelValue"]),r("div",S,[o(e(N),{name:"update",onClick:u})])],32)]),_:1}),o(e(b),null,{default:n(()=>[o(B,{deployments:d.deploymentLogs.data,onViewDeployment:a[7]||(a[7]=l=>C(m)?m.value=l:m=l)},null,8,["deployments"]),e(m)?(_(),f(L,{key:0,deployment:e(m)},null,8,["deployment"])):h("",!0)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{re as default};