import{q as n,o as c,b as u,w as a,f as t,k as l}from"./preset-4ee70171.js";import{_ as p}from"./App-a363e5da.js";import f from"./EditDetails-12f38730.js";import m from"./PasswordUpdate-1daf3858.js";import d from"./AutenticatorManager-e57d4ec4.js";import"./FlashMessage-ca00558d.js";import"./dark-43c43102.js";import"./Input-bc115587.js";import"./Submit-703cdd04.js";import"./Password-4005e7cd.js";const j={__name:"Edit",props:{autenticator:{type:Object,default:()=>({})},user:{type:Object,default:()=>({}),default:{}}},setup(s){const o=s;return(_,b)=>{const e=n("n-tab-pane"),r=n("n-tabs"),i=n("n-card");return c(),u(p,null,{default:a(()=>[t(i,{title:"User Profile",class:l("card col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-dark")},{default:a(()=>[t(r,{type:"card","tab-style":"min-width: 80px;",class:"tabs","pane-class":"bg-base-300 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"},{default:a(()=>[t(e,{name:"basic-info",tab:"Basic Profile"},{default:a(()=>[t(f,{"user-info":o.user.data},null,8,["user-info"])]),_:1}),t(e,{name:"password update",tab:"Password Update"},{default:a(()=>[t(m,{"user-info":o.user.data,"autenticator-info":o.autenticator},null,8,["user-info","autenticator-info"])]),_:1}),t(e,{name:"2fa autenticator",tab:"2 steps autenticator"},{default:a(()=>[t(d,{"user-info":o.user.data,"autenticator-info":o.autenticator},null,8,["user-info","autenticator-info"])]),_:1})]),_:1})]),_:1})]),_:1})}}};export{j as default};