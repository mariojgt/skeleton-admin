import{o,g as l,d as t,t as r,s as m,e as d,O as u}from"./preset-51a69b57.js";const h={class:"flex justify-between items-center"},_={class:"flex items-center space-x-4"},x=["src","alt"],f={class:"font-medium dark:text-white"},p=t("a",{href:"#",class:"inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"},[m(" About me "),t("svg",{class:"ml-2 w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1),b={__name:"AdminSimpleDisplay",props:{admin:{type:Object,default:()=>({})}},setup(e){return(s,n)=>(o(),l("div",h,[t("div",_,[t("img",{class:"w-10 h-10 rounded-full",src:e.admin.avatar,alt:e.admin.full_name},null,8,x),t("span",f,r(e.admin.full_name),1)]),p]))}},g={class:"ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border"},v=["innerHTML"],y={__name:"Category",props:{record:{type:Object,default:()=>({})}},setup(e){return(s,n)=>{var a,c,i;return o(),l("div",g,[t("div",{class:"w-5 h-5",innerHTML:(c=(a=e.record)==null?void 0:a.icon)==null?void 0:c.svg},null,8,v),m(" "+r((i=e.record)==null?void 0:i.name),1)])}}},w={class:"flex justify-between items-center mb-5 text-gray-500"},$={class:"text-sm text-neutral"},k={class:"mb-2 text-2xl font-bold tracking-tight text-accent cursor-pointer"},j=["innerHTML"],H={__name:"PostCard",props:{record:{type:Object,default:()=>({})}},setup(e){const s=e,n=async()=>{u.visit(route("news.view",s.record.slug))};return(a,c)=>(o(),l("a",{class:"duration-500 hover:scale-110 p-6 bg-opacity-50 backdrop-blur transition-all hover:border-secondary rounded-lg border-2 border-primary master-shadow",onClick:n},[t("div",w,[d(y,{record:e.record.category},null,8,["record"]),t("span",$,r(e.record.created_at_human),1)]),t("h2",k,r(e.record.title),1),t("div",{class:"pb-5 text-neutral",innerHTML:e.record.short_description},null,8,j),d(b,{admin:e.record.admin},null,8,["admin"])]))}};export{H as _};