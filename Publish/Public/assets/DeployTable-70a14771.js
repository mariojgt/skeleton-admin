import{a as v,A as m,o as a,g as i,d as t,E as h,G as P,H as C,s as d,x as c,v as R,z as I,t as l,l as N,D as y}from"./preset-59cdb044.js";const U={class:"container mx-auto py-6"},E={class:"mb-6"},F={class:"grid grid-cols-1 md:grid-cols-4 gap-4 mb-4"},q={class:"form-control"},G={class:"form-control"},J={class:"form-control"},K={class:"bg-base-100 rounded-box shadow-xl"},O={class:"overflow-x-auto"},Q={class:"table table-zebra w-full"},W={class:"flex items-center gap-2"},X={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Y={class:"flex items-center gap-2"},Z={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},tt={class:"flex items-center gap-2"},st={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},ot={class:"font-mono"},et={class:"flex items-center gap-2"},lt={class:"font-mono text-sm"},nt=["onClick"],at={key:0,class:"text-error text-sm mt-1"},it={class:"text-sm opacity-60"},rt={class:"flex items-center gap-2"},dt=["onClick"],ut={class:"dropdown dropdown-end"},vt={tabindex:"0",class:"dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"},mt=["onClick"],ct=["onClick"],wt={class:"flex justify-between items-center p-4 border-t border-base-300"},bt={class:"text-sm opacity-70"},pt={class:"join"},gt=["disabled"],ht={class:"join-item btn btn-sm"},kt=["disabled"],k=10,ft={__name:"DeployTable",props:{deployments:{type:Array,required:!0}},emits:["viewDeployment"],setup(x,{emit:_}){const r=v({search:"",status:"",dateRange:"24h",branch:""}),u=v("started_at"),w=v("desc"),n=v(1),D=x,b=m(()=>D.deployments.length),M=m(()=>Math.ceil(b.value/k)),j=m(()=>(n.value-1)*k+1),B=m(()=>Math.min(n.value*k,b.value)),$=e=>y(new Date(e),"MMM dd, yyyy"),S=e=>y(new Date(e),"HH:mm:ss"),z=e=>{if(e<60)return`${e}s`;const s=Math.floor(e/60),o=e%60;return`${s}m ${o}s`},V=async e=>{await navigator.clipboard.writeText(e)},p=e=>{u.value===e?w.value=w.value==="asc"?"desc":"asc":(u.value=e,w.value="asc")},f=e=>{n.value=e},H=_,T=e=>{H("viewDeployment",e)},A=e=>{},L=e=>{};return(e,s)=>(a(),i("div",U,[t("div",E,[s[13]||(s[13]=t("h2",{class:"text-2xl font-bold mb-4"},"Deployment History",-1)),t("div",F,[t("div",q,[s[8]||(s[8]=t("label",{class:"label"},[t("span",{class:"label-text"},"Search")],-1)),h(t("input",{type:"text",placeholder:"Search by repository or commit...",class:"input input-bordered w-full","onUpdate:modelValue":s[0]||(s[0]=o=>r.value.search=o)},null,512),[[P,r.value.search]])]),t("div",G,[s[10]||(s[10]=t("label",{class:"label"},[t("span",{class:"label-text"},"Status")],-1)),h(t("select",{class:"select select-bordered w-full","onUpdate:modelValue":s[1]||(s[1]=o=>r.value.status=o)},s[9]||(s[9]=[t("option",{value:""},"All Status",-1),t("option",{value:"completed"},"Completed",-1),t("option",{value:"failed"},"Failed",-1),t("option",{value:"running"},"Running",-1)]),512),[[C,r.value.status]])]),t("div",J,[s[12]||(s[12]=t("label",{class:"label"},[t("span",{class:"label-text"},"Date Range")],-1)),h(t("select",{class:"select select-bordered w-full","onUpdate:modelValue":s[2]||(s[2]=o=>r.value.dateRange=o)},s[11]||(s[11]=[t("option",{value:"24h"},"Last 24 Hours",-1),t("option",{value:"7d"},"Last 7 Days",-1),t("option",{value:"30d"},"Last 30 Days",-1),t("option",{value:"all"},"All Time",-1)]),512),[[C,r.value.dateRange]])])])]),t("div",K,[t("div",O,[t("table",Q,[t("thead",null,[t("tr",null,[t("th",{class:"cursor-pointer hover:bg-base-200",onClick:s[3]||(s[3]=o=>p("id"))},[t("div",W,[s[15]||(s[15]=d(" ID ")),u.value==="id"?(a(),i("svg",X,s[14]||(s[14]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 9l4-4 4 4m0 6l-4 4-4-4"},null,-1)]))):c("",!0)])]),s[20]||(s[20]=t("th",null,"Commit",-1)),t("th",{class:"cursor-pointer hover:bg-base-200",onClick:s[4]||(s[4]=o=>p("status"))},[t("div",Y,[s[17]||(s[17]=d(" Status ")),u.value==="status"?(a(),i("svg",Z,s[16]||(s[16]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 9l4-4 4 4m0 6l-4 4-4-4"},null,-1)]))):c("",!0)])]),t("th",{class:"cursor-pointer hover:bg-base-200",onClick:s[5]||(s[5]=o=>p("started_at"))},[t("div",tt,[s[19]||(s[19]=d(" Started At ")),u.value==="started_at"?(a(),i("svg",st,s[18]||(s[18]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 9l4-4 4 4m0 6l-4 4-4-4"},null,-1)]))):c("",!0)])]),s[21]||(s[21]=t("th",null,"Duration",-1)),s[22]||(s[22]=t("th",null,"Actions",-1))])]),t("tbody",null,[(a(!0),i(R,null,I(x.deployments,o=>(a(),i("tr",{key:o.id,class:"hover"},[t("td",ot,"#"+l(o.id),1),t("td",null,[t("div",et,[t("div",lt,l(o.commit_hash.substring(0,7)),1),t("button",{class:"btn btn-ghost btn-xs",onClick:g=>V(o.commit_hash)},s[23]||(s[23]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})],-1)]),8,nt)])]),t("td",null,[t("div",{class:N({badge:!0,"badge-success":o.status==="completed","badge-error":o.status==="failed","badge-warning animate-pulse":o.status==="running","badge-info":o.status==="pending"})},l(o.status),3),o.error?(a(),i("div",at,l(o.error.substring(0,50))+"... ",1)):c("",!0)]),t("td",null,[t("div",null,l($(o.started_at)),1),t("div",it,l(S(o.started_at)),1)]),t("td",null,l(z(o.duration)),1),t("td",null,[t("div",rt,[t("button",{class:"btn btn-ghost btn-sm",onClick:g=>T(o)},s[24]||(s[24]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})],-1),d(" View ")]),8,dt),t("div",ut,[s[27]||(s[27]=t("label",{tabindex:"0",class:"btn btn-ghost btn-sm"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"})])],-1)),t("ul",vt,[t("li",null,[t("a",{onClick:g=>A(o.id)},s[25]||(s[25]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})],-1),d(" Download Logs ")]),8,mt)]),t("li",null,[t("a",{onClick:g=>L(o.id)},s[26]||(s[26]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})],-1),d(" Redeploy This Commit ")]),8,ct)])])])])])]))),128))])])]),t("div",wt,[t("div",bt," Showing "+l(j.value)+" to "+l(B.value)+" of "+l(b.value)+" deployments ",1),t("div",pt,[t("button",{class:"join-item btn btn-sm",disabled:n.value===1,onClick:s[6]||(s[6]=o=>f(n.value-1))}," « ",8,gt),t("button",ht," Page "+l(n.value),1),t("button",{class:"join-item btn btn-sm",disabled:n.value===M.value,onClick:s[7]||(s[7]=o=>f(n.value+1))}," » ",8,kt)])])])]))}};export{ft as default};