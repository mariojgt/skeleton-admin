import{y as a,o as l,g as i,d as e,t as n,k as s}from"./preset-51a69b57.js";const d={key:0,class:"w-full text-center mt-6"},o={class:"mb-2 text-2xs font-semibold text-white"},f={class:"flex justify-center space-x-1 is-intermediate"},p={key:1,class:"hidden font-medium lg:flex"},r={class:"flex items-center"},h=e("div",{class:"difficulty-meter mr-2 flex space-x-1 is-intermediate"},[e("span",{class:"block rounded bg-dark-100",style:{width:"5px",height:"11px"}}),e("span",{class:"block rounded bg-dark-100",style:{width:"5px",height:"11px"}}),e("span",{class:"block rounded bg-white",style:{width:"5px",height:"11px"}})],-1),m={class:"text-xs font-medium mobile:text-left"},_=a({__name:"DifficultLevel",props:{dificultLevel:{type:String,default:"intermediate"},simpleMode:{type:Boolean,default:!1}},setup(c){const t=c;return(u,x)=>t.simpleMode?(l(),i("div",p,[e("div",r,[h,e("span",m,n(t.dificultLevel),1)])])):(l(),i("div",d,[e("div",o," Dificult level "+n(t.dificultLevel),1),e("div",f,[e("span",{class:s(["inline-block h-2 flex-1",t.dificultLevel=="beginner"?"bg-white":"bg-black"])},null,2),e("span",{class:s(["inline-block h2 flex-1",t.dificultLevel=="intermediate"?"bg-white":"bg-black"])},null,2),e("span",{class:s(["inline-block h2 flex-1",t.dificultLevel=="advanced"?"bg-white":"bg-black"])},null,2)])]))}});export{_};