import{a as d,q as S,o as v,b as C,w as o,e as p,d as t,g as _,z as $,v as A,l as B,u as a,i as f,F as c}from"./preset-59cdb044.js";import{_ as L}from"./App-6bfdd61a.js";import M from"./CommentComponent-d90f4986.js";import"./index.esm-df9f2d71.js";import{_ as x}from"./ReusableModal-023b7711.js";import"./FlashMessage-d89a6fb8.js";import"./dark-fe9bd6e8.js";import"./dynamicIcon.vue_vue_type_script_setup_true_lang-9716a120.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./micro-task-f32ab903.js";import"./keyboard-9c71fe26.js";import"./hidden-a002ee06.js";import"./open-closed-ddebb77a.js";const H={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"},P={__name:"ReportedComments",props:{reportedComments:{type:Object,required:!0}},setup(w){const g=w;let s=d(!1),r=d(!1),l=d(!1),n=d(null);const y=i=>{const e=i.type,u=i.comment;n.value=u,e==="delete"?s.value=!0:e==="disprove"?l.value=!0:e==="approve"&&(r.value=!0)},b=async()=>{await c.delete(route("gamedev.comment.reported.delete",n.value),{},{preserveState:!0,preserveScroll:!0,only:["reportedComments"]}),s.value=!1},h=async()=>{await c.delete(route("gamedev.comment.reported.disprove",n.value),{},{preserveState:!0,preserveScroll:!0,only:["reportedComments"]}),l.value=!1},k=async()=>{await c.post(route("gamedev.comment.reported.approve",n.value),{},{preserveState:!0,preserveScroll:!0,only:["reportedComments"]}),r.value=!1};return(i,e)=>{const u=S("n-card");return v(),C(L,null,{default:o(()=>[p(u,{title:"Reported Comments",class:B("col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-300")},{default:o(()=>[t("div",H,[(v(!0),_(A,null,$(g.reportedComments.data,(m,F)=>(v(),C(M,{comment:m,key:F,onCommentAction:y},null,8,["comment"]))),128))])]),_:1}),p(a(x),{show:a(s),onClose:e[0]||(e[0]=m=>f(s)?s.value=!1:s=!1),onConfirm:b,isLarge:!0,showFooter:!0,showHeader:!1,modalClass:"bg-red-400 text-black"},{title:o(()=>e[3]||(e[3]=[t("header",{class:"text-center md:px-12 text-neutral"},[t("h2",{class:"text-4xl font-semibold"},"Delete Comment")],-1)])),body:o(()=>e[4]||(e[4]=[t("div",{class:"px-5 py-7"},[t("h2",{class:"text-2xl font-semibold"}," Are you sure you want to delete this comment? ")],-1)])),_:1},8,["show"]),p(a(x),{show:a(r),onClose:e[1]||(e[1]=m=>f(r)?r.value=!1:r=!1),onConfirm:k,isLarge:!0,showFooter:!0,showHeader:!1,modalClass:"bg-green-500 text-black"},{title:o(()=>e[5]||(e[5]=[t("header",{class:"text-center md:px-12 text-neutral"},[t("h2",{class:"text-4xl font-semibold"},"Approve Comment")],-1)])),body:o(()=>e[6]||(e[6]=[t("div",{class:"px-5 py-7"},[t("h2",{class:"text-2xl font-semibold"}," Are you sure you want to approve this comment? ")],-1)])),_:1},8,["show"]),p(a(x),{show:a(l),onClose:e[2]||(e[2]=m=>f(l)?l.value=!1:l=!1),onConfirm:h,isLarge:!0,showFooter:!0,showHeader:!1,modalClass:"bg-warning text-black"},{title:o(()=>e[7]||(e[7]=[t("header",{class:"text-center md:px-12"},[t("h2",{class:"text-4xl font-semibold text-black"},"Disprove Comment")],-1)])),body:o(()=>e[8]||(e[8]=[t("div",{class:"px-5 py-7"},[t("h2",{class:"text-2xl font-semibold"}," Are you sure you want to disprove this comment? ")],-1)])),_:1},8,["show"])]),_:1})}}};export{P as default};