import{a as f,p as k,o as a,g as d,d as t,s as b,t as i,f as C,e as u,u as r,i as y,v as g,z as I,F as h}from"./preset-59cdb044.js";import{_ as w}from"./Input.vue_vue_type_script_setup_true_lang-c3b4d3bc.js";import"./index.esm-df9f2d71.js";import{_ as V}from"./Submit-66c58698.js";const T={class:"px-5 py-7"},F={key:0},A={class:"flex flex-row items-center space-x-4 card-body"},R={class:"rounded shadow p-4"},B=["innerHTML"],M={class:"w-full"},j={class:"text-base-content text-opacity-60"},N={class:"mt-4"},L={key:1},O={class:"card-body"},S={class:"my-4 text-4xl font-bold card-title"},U={class:"flex items-center justify-end gap-3"},$={class:"modal"},z={class:"modal-box bg-primary"},D={class:"overflow-x-auto"},H={class:"table table-zebra w-full"},G={__name:"AutenticatorManager",props:{userInfo:{type:Object,default:()=>({})},autenticatorInfo:{type:Object,default:()=>({})}},setup(m){const l=m;let v=f([]);k(()=>{v.value=l.userInfo});let s=f("");const p=()=>{const e={code:s.value};h.post(route("user.2fa.enable"),e)},_=()=>{const e={code:s.value};h.post(route("castle.unlock.backup.code"),e)},x=()=>{let e=window.open("","PRINT","height=650,width=900,top=100,left=150");const o="codes";e.document.write(`<html><head><title>${o}</title>`),e.document.write("</head><body>"),e.document.write("<h1> Two Factor Autenticator Backup Codes </h1>"),e.document.write("<table>"),e.document.write("<tr><th>Code</th><th>used</th></tr>");for(const[n,c]of Object.entries(l.autenticatorInfo.backup_codes))e.document.write("<tr>"),e.document.write(`<td>${c.code}</td>`),e.document.write(`<td>${c.used}</td>`),e.document.write("</tr>");return e.document.write("</table>"),e.document.write("</body></html>"),e.document.close(),e.focus(),e.print(),e.close(),!0};return(e,o)=>(a(),d("div",null,[t("div",T,[l.autenticatorInfo.is_enable==!1?(a(),d("div",F,[t("div",A,[t("div",R,[t("div",{innerHTML:l.autenticatorInfo.codeinfo.qr_code},null,8,B)]),t("div",M,[o[3]||(o[3]=t("h2",{class:"card-title text-lg font-semibold"}," Scan the QR code and enter the code to activate your two-factor authentication. ",-1)),t("p",j,[o[2]||(o[2]=b(" In case you can't use the QR code, you can enter the code manually. ")),t("strong",null,i(l.autenticatorInfo.codeinfo.secret),1)]),t("div",N,[t("form",{onSubmit:C(p,["prevent"]),class:"space-y-4"},[u(r(w),{modelValue:r(s),"onUpdate:modelValue":o[0]||(o[0]=n=>y(s)?s.value=n:s=n),label:"Code",type:"text",name:"code",placeholder:"Type your code",max:"6",messageClass:"text-white text-xl bg-error rounded-lg p-2 opacity-90",labelClass:"text-3xl font-bold text-left",inputClass:"w-full p-5 text-2xl input input-primary input-bordered"},null,8,["modelValue"]),u(r(V),{name:"activate",onClick:p,class:"btn btn-secondary"})],32)])])])])):(a(),d("div",L,[t("div",O,[t("h2",S,[o[7]||(o[7]=b(" Two Factor Autenticator Backup Codes ")),t("div",U,[t("button",{class:"btn btn-secondary",onClick:x}," Download Csv "),o[5]||(o[5]=t("label",{for:"my-modal-2",class:"btn btn-secondary modal-button"},"Remove Autenticator",-1)),o[6]||(o[6]=t("input",{type:"checkbox",id:"my-modal-2",class:"modal-toggle"},null,-1)),t("div",$,[t("div",z,[u(r(w),{modelValue:r(s),"onUpdate:modelValue":o[1]||(o[1]=n=>y(s)?s.value=n:s=n),label:"Two Factor Autenticator Code",type:"text",name:"code",placeholder:"type your code"},null,8,["modelValue"]),t("div",{class:"modal-action"},[t("label",{for:"my-modal-2",class:"btn btn-secondary",onClick:_},"Remove"),o[4]||(o[4]=t("label",{for:"my-modal-2",class:"btn"},"Close",-1))])])])])]),t("div",D,[t("table",H,[o[8]||(o[8]=t("thead",null,[t("tr",null,[t("th",null,"Code"),t("th",null,"Used")])],-1)),t("tbody",null,[(a(!0),d(g,null,I(m.autenticatorInfo.backup_codes,(n,c)=>(a(),d("tr",{key:c},[t("th",null,i(n.code),1),t("th",null,i(n.used),1)]))),128))])])])])]))])]))}};export{G as default};