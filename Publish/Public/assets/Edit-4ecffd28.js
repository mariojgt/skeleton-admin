import{q as u,o as f,b as m,w as t,f as a,u as e,d as r,k as n}from"./preset-b92b06ac.js";import{_ as p}from"./App-0148b733.js";import _ from"./EditDetails-71fc1cf4.js";import b from"./PasswordUpdate-48ef1165.js";import x from"./AutenticatorManager-e855ecb3.js";import{x as g,I as y,y as s,S as v,g as i}from"./tabs-30196f32.js";import"./FlashMessage-c42e6812.js";import"./dark-04f0d599.js";import"./Input-d4875ddd.js";import"./Submit-dce90bbc.js";import"./Select-ea27f546.js";import"./Password-1cd66784.js";import"./use-resolve-button-type-6c64fb97.js";import"./micro-task-b1c10728.js";const P={__name:"Edit",props:{autenticator:{type:Object,default:()=>({})},admin:{type:Object,default:()=>({}),default:{}},roles:{type:Object,default:()=>({}),default:{}}},setup(d){const l=d;return(w,$)=>{const c=u("n-card");return f(),m(p,null,{default:t(()=>[a(c,{title:"User Profile",class:n("card col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-300")},{default:t(()=>[a(e(g),null,{default:t(()=>[a(e(y),{class:"flex space-x-1 rounded-xl p-1 tabs"},{default:t(()=>[a(e(s),null,{default:t(({selected:o})=>[r("a",{class:n(["tab tab-lg tab-bordered",o?"tab-active":""])},"Deatils",2)]),_:1}),a(e(s),null,{default:t(({selected:o})=>[r("a",{class:n(["tab tab-lg tab-bordered",o?"tab-active":""])},"Security",2)]),_:1}),a(e(s),null,{default:t(({selected:o})=>[r("a",{class:n(["tab tab-lg tab-bordered",o?"tab-active":""])},"2fa",2)]),_:1})]),_:1}),a(e(v),{class:"mt-2"},{default:t(()=>[a(e(i),null,{default:t(()=>[a(_,{"admin-info":l.admin.data,roles:l.roles},null,8,["admin-info","roles"])]),_:1}),a(e(i),null,{default:t(()=>[a(b,{"admin-info":l.admin.data,"autenticator-info":l.autenticator},null,8,["admin-info","autenticator-info"])]),_:1}),a(e(i),null,{default:t(()=>[a(x,{"admin-info":l.admin.data,autenticator:l.autenticator},null,8,["admin-info","autenticator"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{P as default};