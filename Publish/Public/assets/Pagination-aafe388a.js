import{bu as g,z as m,o as u,g as d,d as l,t as o,u as r,k as c,F as _,y as h,G as p}from"./preset-b90b9b08.js";const x={class:"pagination-container"},f={class:"flex flex-col md:flex-row items-center justify-between mb-4 text-white"},w={class:"mb-2 md:mb-0"},y={class:"text-sm md:text-base"},j={class:"flex items-center justify-center w-full"},L={class:"join flex md:hidden w-full justify-between px-4"},H=["disabled","innerHTML"],M=["disabled","innerHTML"],T={class:"btn join-item"},C=["disabled","innerHTML"],S={class:"join hidden md:flex"},$=["disabled","innerHTML","onClick"],z={__name:"Pagination",props:{pagination:{type:Object,required:!0}},setup(b){const v=b,{pagination:s}=g(v),e=m(()=>s.value.links),a=i=>{i&&p.get(i,{},{preserveScroll:!0,preserveState:!0})};return(i,n)=>(u(),d("div",x,[l("nav",f,[l("div",w,[l("span",y," Showing "+o(r(s).from)+" to "+o(r(s).to)+" of "+o(r(s).total)+" results ",1)])]),l("nav",j,[l("div",L,[l("button",{disabled:!e.value[0].url,class:c({"btn join-item":!0,"cursor-not-allowed text-gray-500":!e.value[0].url,"text-white bg-blue-700 hover:bg-blue-800":e.value[0].url}),onClick:n[0]||(n[0]=t=>a(e.value[0].url)),innerHTML:e.value[0].label},null,10,H),l("button",{onClick:n[1]||(n[1]=t=>a(e.value[1].url)),disabled:!e.value[1].url,class:"btn join-item",innerHTML:e.value[1].label},null,8,M),l("button",T,"Page "+o(r(s).current_page),1),l("button",{disabled:!e.value[e.value.length-1].url,class:c({"btn join-item":!0,"cursor-not-allowed text-gray-500":!e.value[e.value.length-1].url,"text-white bg-blue-700 hover:bg-blue-800":e.value[e.value.length-1].url}),onClick:n[2]||(n[2]=t=>a(e.value[e.value.length-1].url)),innerHTML:e.value[e.value.length-1].label},null,10,C)]),l("div",S,[(u(!0),d(_,null,h(e.value,t=>(u(),d("button",{key:t.label,disabled:!t.url,class:c({"btn btn-lg join-item":!0,"btn-active":t.active,"cursor-not-allowed text-gray-500":!t.url,"text-white bg-secondary hover:bg-primary":t.url&&!t.active,"text-white bg-primary":t.active}),innerHTML:t.label,onClick:k=>a(t.url)},null,10,$))),128))])])]))}};export{z as _};