import{a as d,q as S,o as u,b as _,w as o,e as i,d as e,g as $,y as A,F,k as B,u as l,i as f,O as v}from"./preset-dc82439c.js";import{_ as L}from"./App-959439ec.js";import M from"./CommentComponent-35f2d88f.js";import{_ as x}from"./ReusableModal-0b98130e.js";import"./FlashMessage-75b2dd90.js";import"./dark-5cd1184e.js";import"./dynamicIcon.vue_vue_type_script_setup_true_lang-62fe115a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./micro-task-156b89d3.js";import"./keyboard-cadf9299.js";import"./hidden-23c9d7a1.js";import"./open-closed-5f0ce8df.js";const H={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"},O=e("header",{class:"text-center md:px-12 text-neutral"},[e("h2",{class:"text-4xl font-semibold"},"Delete Comment")],-1),R=e("div",{class:"px-5 py-7"},[e("h2",{class:"text-2xl font-semibold"}," Are you sure you want to delete this comment? ")],-1),q=e("header",{class:"text-center md:px-12 text-neutral"},[e("h2",{class:"text-4xl font-semibold"},"Approve Comment")],-1),D=e("div",{class:"px-5 py-7"},[e("h2",{class:"text-2xl font-semibold"}," Are you sure you want to approve this comment? ")],-1),N=e("header",{class:"text-center md:px-12"},[e("h2",{class:"text-4xl font-semibold text-black"},"Disprove Comment")],-1),V=e("div",{class:"px-5 py-7"},[e("h2",{class:"text-2xl font-semibold"}," Are you sure you want to disprove this comment? ")],-1),X={__name:"ReportedComments",props:{reportedComments:{type:Object,required:!0}},setup(h){const C=h;let s=d(!1),r=d(!1),a=d(!1),n=d(null);const w=p=>{const t=p.type,c=p.comment;n.value=c,t==="delete"?s.value=!0:t==="disprove"?a.value=!0:t==="approve"&&(r.value=!0)},y=async()=>{await v.delete(route("gamedev.comment.reported.delete",n.value),{},{preserveState:!0,preserveScroll:!0,only:["reportedComments"]}),s.value=!1},g=async()=>{await v.delete(route("gamedev.comment.reported.disprove",n.value),{},{preserveState:!0,preserveScroll:!0,only:["reportedComments"]}),a.value=!1},b=async()=>{await v.post(route("gamedev.comment.reported.approve",n.value),{},{preserveState:!0,preserveScroll:!0,only:["reportedComments"]}),r.value=!1};return(p,t)=>{const c=S("n-card");return u(),_(L,null,{default:o(()=>[i(c,{title:"Reported Comments",class:B("col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-300")},{default:o(()=>[e("div",H,[(u(!0),$(F,null,A(C.reportedComments.data,(m,k)=>(u(),_(M,{comment:m,key:k,onCommentAction:w},null,8,["comment"]))),128))])]),_:1}),i(l(x),{show:l(s),onClose:t[0]||(t[0]=m=>f(s)?s.value=!1:s=!1),onConfirm:y,isLarge:!0,showFooter:!0,showHeader:!1,modalClass:"bg-red-400 text-black"},{title:o(()=>[O]),body:o(()=>[R]),_:1},8,["show"]),i(l(x),{show:l(r),onClose:t[1]||(t[1]=m=>f(r)?r.value=!1:r=!1),onConfirm:b,isLarge:!0,showFooter:!0,showHeader:!1,modalClass:"bg-green-500 text-black"},{title:o(()=>[q]),body:o(()=>[D]),_:1},8,["show"]),i(l(x),{show:l(a),onClose:t[2]||(t[2]=m=>f(a)?a.value=!1:a=!1),onConfirm:g,isLarge:!0,showFooter:!0,showHeader:!1,modalClass:"bg-warning text-black"},{title:o(()=>[N]),body:o(()=>[V]),_:1},8,["show"])]),_:1})}}};export{X as default};