import{p as e,o as d,d as l,w as o,e as i,f as t}from"./preset.261e4b82.js";import{_ as m}from"./App.22831a79.js";import p from"./EditDetails.6bb5dbc9.js";import f from"./PasswordUpdate.4122ca29.js";import _ from"./AutenticatorManager.7acbf676.js";import"./FlashMessage.2ce6132e.js";import"./index.8b0a764c.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Input.48046abd.js";import"./Submit.539b41bd.js";import"./Password.4da4fe52.js";const u={class:"lg:p-10 xl:grid-cols-12 lg:bg-base-200 rounded-box"},b={class:"card col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-100"},N={__name:"Edit",props:{autenticator:{type:Object,default:()=>({})},admin:{type:Object,default:()=>({}),default:{}},roles:{type:Object,default:()=>({}),default:{}}},setup(s){const a=s;return(w,x)=>{const n=e("n-tab-pane"),r=e("n-tabs"),c=e("n-card");return d(),l(m,null,{default:o(()=>[i("div",u,[i("div",b,[t(c,{title:"User Profile"},{default:o(()=>[t(r,{type:"card","tab-style":"min-width: 80px;",class:"tabs"},{default:o(()=>[t(n,{name:"basic-info",tab:"Basic Profile"},{default:o(()=>[t(p,{"admin-info":a.admin.data,roles:a.roles},null,8,["admin-info","roles"])]),_:1}),t(n,{name:"password update",tab:"Password Update"},{default:o(()=>[t(f,{"admin-info":a.admin.data,"autenticator-info":a.autenticator},null,8,["admin-info","autenticator-info"])]),_:1}),t(n,{name:"2fa autenticator",tab:"2 steps autenticator"},{default:o(()=>[t(_,{"admin-info":a.admin.data,"autenticator-info":a.autenticator},null,8,["admin-info","autenticator-info"])]),_:1})]),_:1})]),_:1})])])]),_:1})}}};export{N as default};