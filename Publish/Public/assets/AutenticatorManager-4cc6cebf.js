import{a as u,m as _,o as l,g as r,d as t,q as m,t as x,e as i,u as n,i as p,G as g}from"./preset-7017bb8f.js";import{I as b}from"./Input-c2e1c77a.js";import"./Input.vue_vue_type_style_index_0_scoped_245929fe_lang-4c922919.js";import{_ as k}from"./Submit-90f89a2d.js";import"./purify.es-851ec8c9.js";import"./_plugin-vue_export-helper-c27b6911.js";const C={class:"px-5 py-7"},V={key:0,class:"card shadow-lg compact side bg-base-100"},I={class:"flex-row items-center space-x-4 card-body"},T={class:"w-full shadow border-primary border"},A=["innerHTML"],B={class:"w-full"},F={class:"text-base-content text-opacity-40"},j={class:"form-control pt-10"},q={key:1},M={class:"card col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-100"},N={class:"card-body"},R={class:"my-4 text-4xl font-bold card-title"},O={class:"flex items-center justify-end gap-3"},D={class:"modal"},G={class:"modal-box"},P={__name:"AutenticatorManager",props:{adminInfo:{type:Object,default:()=>({})},autenticator:{type:Object,default:()=>({})}},setup(f){const d=f;let y=u([]);_(()=>{y.value=d.adminInfo});let a=u("");const v=()=>{const e={code:a.value};g.post(route("admin.2fa.enable"),e)},w=()=>{const e={code:a.value};Inertia.patch(route("admin.remove-autenticator"),e)},h=()=>{let e=window.open("","PRINT","height=650,width=900,top=100,left=150");const o="codes";e.document.write(`<html><head><title>${o}</title>`),e.document.write("</head><body>"),e.document.write("<h1> Two Factor Autenticator Backup Codes </h1>"),e.document.write("<table>"),e.document.write("<tr><th>Code</th><th>used</th></tr>");for(const[s,c]of Object.entries(d.autenticator.backup_codes))e.document.write("<tr>"),e.document.write(`<td>${c.code}</td>`),e.document.write(`<td>${c.used}</td>`),e.document.write("</tr>");return e.document.write("</table>"),e.document.write("</body></html>"),e.document.close(),e.focus(),e.print(),e.close(),!0};return(e,o)=>(l(),r("div",null,[t("div",C,[d.autenticator.is_enable===!1?(l(),r("div",V,[t("div",I,[t("div",null,[t("div",T,[t("div",{innerHTML:d.autenticator.codeinfo.qr_code},null,8,A)])]),t("div",B,[o[3]||(o[3]=t("h2",{class:"card-title"}," Scan the qr code and enter the code to activate your two factor authentication. ",-1)),t("p",F,[o[2]||(o[2]=m(" Case you can,t use the qr code, you can enter the code manually. ")),t("strong",null,x(d.autenticator.codeinfo.secret),1)]),t("div",null,[i(n(b),{modelValue:n(a),"onUpdate:modelValue":o[0]||(o[0]=s=>p(a)?a.value=s:a=s),label:"Code",type:"text",placeholder:"type your code"},null,8,["modelValue"]),t("div",j,[i(n(k),{name:"activate",onClick:v})])])])])])):(l(),r("div",q,[t("div",M,[t("div",N,[t("h2",R,[o[7]||(o[7]=m(" Two Factor Autenticator Backup Codes ")),t("div",O,[t("button",{class:"btn btn-primary",onClick:h}," Download Csv "),o[5]||(o[5]=t("label",{for:"my-modal-2",class:"btn btn-primary modal-button"},"Remove Autenticator",-1)),o[6]||(o[6]=t("input",{type:"checkbox",id:"my-modal-2",class:"modal-toggle"},null,-1)),t("div",D,[t("div",G,[i(n(b),{modelValue:n(a),"onUpdate:modelValue":o[1]||(o[1]=s=>p(a)?a.value=s:a=s),label:"Two Factor Autenticator Code",type:"text",placeholder:"type your code"},null,8,["modelValue"]),t("div",{class:"modal-action"},[t("label",{for:"my-modal-2",class:"btn btn-primary",onClick:w},"Remove"),o[4]||(o[4]=t("label",{for:"my-modal-2",class:"btn"},"Close",-1))])])])])])])])]))])]))}};export{P as default};