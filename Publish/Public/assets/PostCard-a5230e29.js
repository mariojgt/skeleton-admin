import{o as n,g as s,d as t,t as r,s as u,v as h,e as m,O as x}from"./preset-030f2e51.js";const _={class:"flex justify-between items-center"},f={class:"flex items-center space-x-4"},p=["src","alt"],g={class:"font-medium dark:text-white"},v=t("a",{href:"#",class:"inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"},[u(" About me "),t("svg",{class:"ml-2 w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1),y={__name:"AdminSimpleDisplay",props:{admin:{type:Object,default:()=>({})}},setup(e){return(a,c)=>(n(),s("div",_,[t("div",f,[t("img",{class:"w-10 h-10 rounded-full",src:e.admin.avatar,alt:e.admin.full_name},null,8,p),t("span",g,r(e.admin.full_name),1)]),v]))}},w={class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border"},b=["innerHTML"],k={__name:"Category",props:{record:{type:Object,default:()=>({})}},setup(e){return(a,c)=>{var o,l,i,d;return n(),s("div",w,[(o=e.record)!=null&&o.icon?(n(),s("div",{key:0,class:"w-5 h-5",innerHTML:(i=(l=e.record)==null?void 0:l.icon)==null?void 0:i.svg},null,8,b)):h("",!0),u(" "+r((d=e.record)==null?void 0:d.name),1)])}}},$={class:"flex justify-between items-center mb-5 text-gray-500"},C={class:"text-sm text-neutral"},j={class:"mb-2 text-2xl font-bold tracking-tight text-accent cursor-pointer"},H=["innerHTML"],M={__name:"PostCard",props:{record:{type:Object,default:()=>({})}},setup(e){const a=e,c=async()=>{x.visit(route("news.view",a.record.slug))};return(o,l)=>(n(),s("a",{class:"duration-500 hover:scale-y-105 p-6 transition-all bg-dark-300 rounded-lg shadow-2xl",onClick:c},[t("div",$,[m(k,{record:e.record.category},null,8,["record"]),t("span",C,r(e.record.created_at_human),1)]),t("h2",j,r(e.record.title),1),t("div",{class:"pb-5 text-neutral",innerHTML:e.record.short_description},null,8,H),m(y,{admin:e.record.admin},null,8,["admin"])]))}};export{M as _};