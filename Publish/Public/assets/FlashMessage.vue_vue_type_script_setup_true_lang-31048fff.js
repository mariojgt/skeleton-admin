import{g as c,bN as f,bA as a,q as t,bP as s}from"./preset-8daa11fd.js";const h=c({__name:"FlashMessage",setup(i){const e=f();a(()=>s().props.errors,o=>{if(s().props.errors)for(const[r,n]of Object.entries(s().props.errors))p("error",n)}),t(()=>{s().props.flash&&p(s().props.flash.type,s().props.flash.message)}),a(()=>s().props.flash,o=>{s().props.flash&&p(s().props.flash.type,s().props.flash.message)});const p=async(o,r)=>{switch(o){case"success":e.success(r);break;case"error":e.error(r);break;case"warning":e.warning(r);break;case"info":e.info(r);break;default:e.info(r);break}};return(o,r)=>null}});export{h as _};