import{a as r,z as m,p as D,A as C,B as j,o as u,g as p,d as e,k as h,t as n,s as y,F as L,y as B,u as S,C as P}from"./preset-dc82439c.js";const R={class:"min-h-screen bg-base-200 p-6"},U={class:"container mx-auto"},V={class:"card bg-base-100 shadow-xl"},E={class:"card-body"},O={class:"flex justify-between items-center mb-4"},T={class:"card-title text-2xl flex items-center gap-2"},$=e("span",null,"Deployment Status",-1),A=e("div",{class:"flex items-center gap-4"},[e("div",{class:"text-sm opacity-70"}," Started: 2024-10-26 14:30:00 "),e("div",{class:"text-sm opacity-70"}," Duration: 2m 45s ")],-1),I={class:"bg-base-200 p-4 rounded-lg mb-4"},M={class:"grid grid-cols-2 md:grid-cols-4 gap-4"},z=e("div",{class:"text-sm opacity-70"},"Repository",-1),F={class:"font-medium"},H=e("div",{class:"text-sm opacity-70"},"Branch",-1),N={class:"font-medium"},q=e("div",{class:"text-sm opacity-70"},"Commit",-1),G={class:"font-mono text-sm"},J=e("div",{class:"text-sm opacity-70"}," Deployment Path ",-1),K={class:"font-mono text-sm"},Q={class:"mb-6"},W={class:"flex justify-between items-center mb-2"},X=e("div",{class:"font-medium"},"Deployment Progress",-1),Y={class:"text-sm opacity-70"},Z=["value"],ee={class:"bg-base-300 rounded-lg"},te={class:"flex items-center justify-between p-4 border-b border-base-content/10"},se=e("h3",{class:"font-bold"},"Deployment Logs",-1),oe={class:"flex gap-2"},ne=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})],-1),ae=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 13l-3 3m0 0l-3-3m3 3V8"})],-1),ce={class:"h-[400px] overflow-y-auto font-mono text-sm p-4 space-y-2"},le=e("button",{class:"btn btn-ghost btn-sm"}," View Previous Deployment ",-1),de=e("div",{class:"flex gap-2"},[e("div",{class:"badge badge-neutral"}," webhook-id: 123 "),e("div",{class:"badge badge-neutral"}," deploy-id: 456 ")],-1),re={__name:"DeployStatus",props:{deployment:{type:Object,default:()=>({})}},setup(o){const c=o;r("running");const w=r(!0);let l=r([]);const d=async()=>{try{const i=await(await fetch(route("deployments.logs",c.deployment.id))).json();l.value=i.data}catch(t){console.error("Error fetching logs:",t)}},v=m(()=>l.value.filter(t=>t.type==="success").length),b=m(()=>c.deployment.progress.total||0),g=m(()=>v.value/b.value*100||0),_=t=>t?P(new Date(t),"HH:mm:ss"):"";D(()=>{c.deployment&&(d(),setInterval(d,5e3))}),C(()=>c.deployment,t=>{t&&d()});const x=()=>{const t=l.value.map(f=>`[${_(f.timestamp)}] ${f.content}`).join(`
`),i=new Blob([t],{type:"text/plain"}),s=window.URL.createObjectURL(i),a=document.createElement("a");a.href=s,a.download=`deployment-${c.deployment.id}-logs.txt`,document.body.appendChild(a),a.click(),window.URL.revokeObjectURL(s),document.body.removeChild(a)},k=async()=>{if(confirm("Are you sure you want to cancel this deployment?"))try{await fetch(`/api/deployments/${c.deploymentId}/cancel`,{method:"POST"}),await fetchDeployment()}catch(t){console.error("Error canceling deployment:",t)}};return j(()=>{clearInterval(d)}),(t,i)=>(u(),p("div",R,[e("div",U,[e("div",V,[e("div",E,[e("div",O,[e("h2",T,[$,e("div",{class:h(["badge badge-lg",{"badge-warning animate-pulse":o.deployment.status==="running","badge-success":o.deployment.status==="completed","badge-error":o.deployment.status==="failed","badge-info":o.deployment.status==="pending"}])},n(o.deployment.status),3)]),A]),e("div",I,[e("div",M,[e("div",null,[z,e("div",F,n(o.deployment.metadata.repository_name),1)]),e("div",null,[H,e("div",N,n(o.deployment.webhook_config.branch),1)]),e("div",null,[q,e("div",G,n(o.deployment.commit_hash),1)]),e("div",null,[J,e("div",K,n(o.deployment.webhook_config.deployment_path),1)])])]),e("div",Q,[e("div",W,[X,e("div",Y,n(v.value)+"/"+n(b.value)+" commands completed ",1)]),e("progress",{class:"progress progress-primary w-full",value:g.value,max:"100"},null,8,Z),y(" "+n(g.value),1)]),e("div",ee,[e("div",te,[se,e("div",oe,[e("button",{class:"btn btn-sm btn-ghost",onClick:x},[ne,y(" Download Logs ")]),e("button",{class:h(["btn btn-sm btn-ghost",{"btn-active":w.value}])},[ae,y(" Auto-scroll ")],2)])]),e("div",ce,[(u(!0),p(L,null,B(S(l),(s,a)=>(u(),p("div",{key:a},[e("div",{class:h({"text-primary":s.type==="info","text-info":s.type==="command","text-success":s.type==="success","text-error":s.type==="error","text-warning animate-pulse":s.type==="running","pl-4":s.indented})}," ["+n(_(s.timestamp))+"] "+n(s.content),3)]))),128))])]),e("div",{class:"flex justify-between items-center mt-4"},[e("div",{class:"flex gap-2"},[e("button",{class:"btn btn-error btn-sm",onClick:k}," Cancel Deployment "),le]),de])])])])]))}};export{re as default};