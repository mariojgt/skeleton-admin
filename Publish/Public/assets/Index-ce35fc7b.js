import{v as p,m as d,o as n,g as c,d as e,t as _,G as m,j as v,x as g,a as l,b as u,w as f,y as h,u as k,F as w,e as x}from"./preset-b90b9b08.js";import{_ as y}from"./App-1f22318c.js";import"./FlashMessage-65cf7e3b.js";import"./search-b1a2db28.js";import"./createLucideIcon-c54a04d6.js";import"./circle-check-big-66a371fd.js";import"./loader-circle-c9275f11.js";import"./triangle-alert-9a3c06c5.js";import"./file-text-046f6174.js";import"./arrow-right-0e40d01d.js";import"./_plugin-vue_export-helper-c27b6911.js";const b={class:"menu-item-container"},I={class:"ios-icon"},$=["innerHTML"],B={class:"icon-label"},C=p({__name:"AppMenuSingle",props:{menuItem:{type:Object,default:{}}},setup(r){let t=null;const o=r;d(()=>{t=route(o.menuItem.route)});const a=async()=>{m.get(t)};return(s,i)=>(n(),c("div",b,[e("div",{class:"ios-icon-wrapper",onClick:a},[e("div",I,[e("div",{class:"icon-content",innerHTML:o.menuItem.icon},null,8,$)]),i[0]||(i[0]=e("div",{class:"icon-reflection"},null,-1))]),e("p",B,_(o.menuItem.menu_label),1)]))}}),L={__name:"Logout",setup(r){const t=route("skeleton.logout"),o=()=>{m.get(t)};return(a,s)=>(n(),c("div",{class:"menu-item-container",onClick:o},s[0]||(s[0]=[v('<div class="ios-icon-wrapper"><div class="ios-icon"><div class="icon-content"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"></path></svg></div></div><div class="icon-reflection"></div></div><p class="icon-label">Sing Out</p>',2)])))}},M={class:"h-screen flex"},S={class:"w-full skeleton-bg2 pt-20"},V={class:"grid sm:grid-cols-6 grid-cols-2"},P={__name:"Index",props:{title:{type:String,default:"add title"},system_version:{type:Object,default:[]}},setup(r){const t=g().props.navigation.data;return l(""),l(""),(o,a)=>(n(),u(y,{homePage:!0},{default:f(()=>[e("div",M,[e("div",S,[e("div",V,[(n(!0),c(w,null,h(k(t),(s,i)=>(n(),u(C,{key:i,menuItem:s,class:"opacity-90"},null,8,["menuItem"]))),128)),x(L)])])])]),_:1}))}};export{P as default};