import{v as I,bZ as H,o as i,g as d,d as t,t as $,F as V,J as L,a as k,A as B,y as D,e as _,u as a,D as T,E as z,s as G,z as P,b as W,w as j,j as N,H as A,i as K,k as X,l as Y,c0 as ee}from"./preset-b90b9b08.js";import{_ as M}from"./Input.vue_vue_type_script_setup_true_lang-8998e423.js";import"./index.esm-b2918197.js";import{_ as te}from"./Password-350de7e5.js";import{_ as le}from"./Select.vue_vue_type_script_setup_true_lang-6d59acee.js";import{_ as oe}from"./Image.vue_vue_type_script_setup_true_lang-2215c83f.js";import{_ as R}from"./TextMultipleSelector-201d79a5.js";import{_ as q}from"./Toggle-1f7e2e25.js";import{_ as se}from"./Chips.vue_vue_type_script_setup_true_lang-8bc401f8.js";import{Q as J,V as Q,N as Z}from"./disclosure-e9910491.js";const ne=["for"],ae=["id"],ie={class:"modal text-neutral-content"},de={class:"border border-primary shadow-primary shadow-lg modal-box w-11/12 max-w-5xl"},re={class:"modal-header"},ue={class:"text-xl font-bold"},ce=["for"],pe={class:"flex justify-end gap-2 pt-3"},me=["for"],fe=["for"],ye=I({__name:"delete",props:{id:{type:Number,default:0},model:{type:String,default:()=>[]},endpoint:{type:String,default:()=>[]},permission:{type:String,default:null}},emits:["onDelete"],setup(b,{emit:v}){const u=H(),r=b,n=v,p=async()=>{L.post(r.endpoint,{model:r.model,id:r.id,permission:r.permission}).then(function(m){u.success(m.data.message),n("onDelete")}).catch(function(m){for(const[f,h]of Object.entries(m.response.data.errors))u.error(h[0])})};return(m,f)=>(i(),d(V,null,[t("label",{for:"my-modal-delete-"+r.id,class:"btn btn-error modal-button"},f[0]||(f[0]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1)]),8,ne),t("input",{type:"checkbox",id:"my-modal-delete-"+r.id,class:"modal-toggle"},null,8,ae),t("div",ie,[t("div",de,[t("div",re,[t("h2",ue,"Delete Item #"+$(r.id),1),t("label",{for:"my-modal-delete-"+r.id,class:"btn btn-sm btn-circle absolute right-2 top-2"},"✕",8,ce)]),f[1]||(f[1]=t("div",{class:"rounded-lg text-center text-sm md:text-2xl"},[t("p",null,"Are you sure you want to delete this item?")],-1)),t("div",pe,[t("label",{for:"my-modal-delete-"+r.id,class:"btn btn-primary font-bold text-lg text-white"},"Close!",8,me),t("label",{for:"my-modal-delete-"+r.id,onClick:p,class:"btn btn-secondary font-bold text-lg text-white"},"Delete",8,fe)])])])],64))}}),be=b=>{if(!b)return"";let v;if(b.includes("T"))v=new Date(b);else{const u=b.split("/");v=new Date(`${u[2]}-${u[1]}-${u[0]}`)}return v.toISOString().split("T")[0]},_e=b=>{const v=b.split("/");return new Date(v[2]+"/"+v[1]+"/"+v[0]).toISOString().substr(0,16)},ve=b=>b?b.toString():"",he={key:0},ge={key:1},we={key:2},ke={key:3},xe={key:4},Ve={key:5},$e={key:6},Se={key:7},Ue={key:8},De={key:9},Ce={key:10},je={key:11},Oe={key:12},Fe={key:13},Me={class:"form-control mt-1"},Be={class:"label"},Te={class:"label-text"},Pe=["onKeyup","onUpdate:modelValue"],Ke={class:"flex justify-center bg-base-100 rounded mt-5"},Ee=["innerHTML"],He={key:14},E={__name:"formbuilder",props:{columns:{type:Array,default:()=>[]},modelValue:{type:Object,default:()=>[]},editMode:{type:String,default:"false"}},emits:["onFormUpdate"],setup(b,{emit:v}){const u=b,r=v;let n=k([]);(()=>{var h,S,l,o,s,c;n.value=[];for(const[y,e]of Object.entries(u.columns))if(u.editMode=="false"){if(e.canCreate){let w="";(e.type=="Toggle"||e.type=="boolean")&&(w=!1),(h=e==null?void 0:e.options)!=null&&h.select_options?(S=e==null?void 0:e.options)==null||S.select_options:e==null||e.select_options,n.value.push({key:e.key,label:e.label,type:e.type,nullable:e==null?void 0:e.nullable,unique:e==null?void 0:e.unique,endpoint:e==null?void 0:e.endpoint,displayKey:e==null?void 0:e.displayKey,columns:e==null?void 0:e.columns,model:e==null?void 0:e.model,singleSearch:e==null?void 0:e.singleSearch,relation:e==null?void 0:e.relation,value:w,select_options:(l=e==null?void 0:e.options)==null?void 0:l.select_options})}}else if(e.canEdit){let w=null;switch(e.type){case"date":w=be(u.modelValue[e.key]);break;case"timestamp":w=_e(u.modelValue[e.key]);break;case"media":w=u.modelValue[e.key];break;case"model_search":w=u.modelValue[e.key];break;case"pivot_model":w=u.modelValue[e.key];break;case"boolean":w=u.modelValue[e.key];break;case"chips":w=u.modelValue[e.key];break;default:w=ve(u.modelValue[e.key]);break}(o=e==null?void 0:e.options)!=null&&o.select_options?(s=e==null?void 0:e.options)==null||s.select_options:e==null||e.select_options,n.value.push({key:e.key,label:e.label,type:e.type,nullable:e==null?void 0:e.nullable,displayKey:e==null?void 0:e.displayKey,unique:e==null?void 0:e.unique,value:w,endpoint:e==null?void 0:e.endpoint,columns:e==null?void 0:e.columns,model:e==null?void 0:e.model,singleSearch:e==null?void 0:e.singleSearch,relation:e==null?void 0:e.relation,select_options:(c=e==null?void 0:e.options)==null?void 0:c.select_options})}u.editMode=="true"&&r("onFormUpdate",n.value)})();let m=k(null);B(()=>n.value,()=>{clearTimeout(m.value),m.value=setTimeout(function(){r("onFormUpdate",n.value)},500)},{deep:!0});const f=async(h,S,l)=>{if(l=="name"||l=="title"){const o=n.value.findIndex(s=>s.key=="slug");n.value[o]&&(n.value[o].value=h.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,""))}};return(h,S)=>(i(!0),d(V,null,D(a(n),(l,o)=>(i(),d("div",{key:o},[l.type=="text"?(i(),d("div",he,[_(a(M),{type:"text",modelValue:a(n)[o].value,"onUpdate:modelValue":s=>a(n)[o].value=s,label:l.label,onKeyup:s=>f(s.target.value,l.type,l.key)},null,8,["modelValue","onUpdate:modelValue","label","onKeyup"])])):l.type=="password"?(i(),d("div",ge,[_(a(te),{modelValue:a(n)[o].value,"onUpdate:modelValue":s=>a(n)[o].value=s,label:l.label},null,8,["modelValue","onUpdate:modelValue","label"])])):l.type=="email"?(i(),d("div",we,[_(a(M),{type:"email",modelValue:a(n)[o].value,"onUpdate:modelValue":s=>a(n)[o].value=s,label:l.label},null,8,["modelValue","onUpdate:modelValue","label"])])):l.type=="date"?(i(),d("div",ke,[_(a(M),{type:"date",modelValue:a(n)[o].value,"onUpdate:modelValue":s=>a(n)[o].value=s,label:l.label},null,8,["modelValue","onUpdate:modelValue","label"])])):l.type=="timestamp"?(i(),d("div",xe,[_(a(M),{type:"datetime-local",modelValue:a(n)[o].value,"onUpdate:modelValue":s=>a(n)[o].value=s,label:l.label},null,8,["modelValue","onUpdate:modelValue","label"])])):l.type=="slug"?(i(),d("div",Ve,[_(a(M),{type:"text",modelValue:a(n)[o].value,"onUpdate:modelValue":s=>a(n)[o].value=s,label:l.label},null,8,["modelValue","onUpdate:modelValue","label"])])):l.type=="media"?(i(),d("div",$e,[_(a(oe),{label:"image",placeholder:"search",modelValue:a(n)[o].value,"onUpdate:modelValue":s=>a(n)[o].value=s,loadData:a(n)[o].value,endpoint:l.endpoint},null,8,["modelValue","onUpdate:modelValue","loadData","endpoint"])])):l.type=="number"?(i(),d("div",Se,[_(a(M),{type:"number",modelValue:a(n)[o].value,"onUpdate:modelValue":s=>a(n)[o].value=s,label:l.label,onKeyup:s=>f(s.target.value,l.type,l.key)},null,8,["modelValue","onUpdate:modelValue","label","onKeyup"])])):l.type=="model_search"?(i(),d("div",Ue,[_(a(R),{label:l.label,placeholder:"search",model:l.model,columns:l.columns,singleMode:l.singleSearch,modelValue:a(n)[o].value,"onUpdate:modelValue":s=>a(n)[o].value=s,loadData:a(n)[o].value,endpoint:l.endpoint,displayKey:l.displayKey},null,8,["label","model","columns","singleMode","modelValue","onUpdate:modelValue","loadData","endpoint","displayKey"])])):l.type=="pivot_model"?(i(),d("div",De,[_(a(R),{label:l.label,placeholder:"search",model:l.model,columns:l.columns,singleMode:l.singleSearch,modelValue:a(n)[o].value,"onUpdate:modelValue":s=>a(n)[o].value=s,loadData:a(n)[o].value,endpoint:l.endpoint,displayKey:l.displayKey},null,8,["label","model","columns","singleMode","modelValue","onUpdate:modelValue","loadData","endpoint","displayKey"])])):l.type=="Toggle"?(i(),d("div",Ce,[_(a(q),{modelValue:a(n)[o].value,"onUpdate:modelValue":s=>a(n)[o].value=s,label:l.label},null,8,["modelValue","onUpdate:modelValue","label"])])):l.type=="boolean"?(i(),d("div",je,[_(a(q),{modelValue:a(n)[o].value,"onUpdate:modelValue":s=>a(n)[o].value=s,label:l.label},null,8,["modelValue","onUpdate:modelValue","label"])])):l.type=="chips"?(i(),d("div",Oe,[_(a(se),{modelValue:a(n)[o].value,"onUpdate:modelValue":s=>a(n)[o].value=s,label:l.label},null,8,["modelValue","onUpdate:modelValue","label"])])):l.type=="icon"?(i(),d("div",Fe,[t("label",Me,[t("div",Be,[t("span",Te,$(l.label),1)]),T(t("textarea",{class:"textarea textarea-primary h-24",onKeyup:s=>f(s.target.value,l.type,l.key),"onUpdate:modelValue":s=>a(n)[o].value=s,placeholder:"Bio"},null,40,Pe),[[z,a(n)[o].value]])]),t("div",Ke,[t("div",{class:"flex p-10 w-52",innerHTML:a(n)[o].value},null,8,Ee)])])):l.type=="select"?(i(),d("div",He,[_(a(le),{modelValue:a(n)[o].value,"onUpdate:modelValue":s=>a(n)[o].value=s,label:l.label,options:l.select_options},null,8,["modelValue","onUpdate:modelValue","label","options"])])):G("",!0)]))),128))}},Le={class:"modal text-left"},Ae={key:0,class:"modal-box w-11/12 max-w-5xl border border-primary shadow-primary shadow-2xl"},Ie={class:"w-full mt-2"},We={class:"w-full rounded-lg p-2"},Ne={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},Re={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},qe={class:"w-full bg-base-300 border border-secondary rounded-3xl text-neutral-content p-6"},ze={key:1,class:"modal-box w-11/12 max-w-5xl"},Je={__name:"create",props:{columns:{type:Array,default:()=>[]},model:{type:String,default:()=>[]},endpoint:{type:String,default:()=>[]},permission:{type:String,default:null}},emits:["onCreate"],setup(b,{emit:v}){const u=H(),r=b,n=P(()=>r.columns.filter(l=>l.canCreate).length>0),p=P(()=>{const l=r.columns.filter(e=>e.section),o=r.columns.filter(e=>!e.section),s=l.map(e=>e.section),c=[...new Set(s)],y=[];return c.forEach(e=>{const w=l.filter(O=>O.section==e);y.push({section:e,fields:w})}),{sections:c,fields:o,sectionsWithFields:y}});let m=k(r.columns.filter(l=>l.canCreate));const f=async l=>{if(m.value.length>0)for(const[o,s]of Object.entries(l))for(const[c,y]of Object.entries(m.value))s.key==y.key&&(m.value[c]=s);else m.value=l},h=v,S=async()=>{L.post(r.endpoint,{model:r.model,data:m.value,permission:r.permission}).then(function(l){u.success(l.data.message),h("onCreate")}).catch(function(l){for(const[o,s]of Object.entries(l.response.data.errors))u.error(s[0])})};return(l,o)=>(i(),d(V,null,[o[5]||(o[5]=t("label",{for:"my-modal-5",class:"btn btn-primary modal-button"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4v16m8-8H4"})])],-1)),o[6]||(o[6]=t("input",{type:"checkbox",id:"my-modal-5",class:"modal-toggle"},null,-1)),t("div",Le,[n.value?(i(),d("div",Ae,[o[3]||(o[3]=t("div",{class:"modal-header"},[t("h3",{class:"font-bold text-lg"},"New"),t("label",{for:"my-modal-5",class:"btn btn-sm btn-circle absolute right-2 top-2"},"✕")],-1)),t("div",Ie,[t("div",We,[(i(!0),d(V,null,D(p.value.sectionsWithFields,(s,c)=>(i(),W(a(Z),{as:"div",class:"mt-2",key:c},{default:j(({open:y})=>[_(a(J),{class:"btn w-full"},{default:j(()=>[t("span",null,$(s.section),1),y?(i(),d("svg",Ne,o[0]||(o[0]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"},null,-1)]))):(i(),d("svg",Re,o[1]||(o[1]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"},null,-1)])))]),_:2},1024),_(a(Q),{class:"px-4 pt-4 pb-2 text-sm text-gray-500"},{default:j(()=>[_(E,{columns:s.fields,onOnFormUpdate:f},null,8,["columns"])]),_:2},1024)]),_:2},1024))),128))])]),t("div",qe,[_(E,{columns:p.value.fields,onOnFormUpdate:f},null,8,["columns"])]),t("div",{class:"flex justify-end gap-2 pt-3"},[o[2]||(o[2]=t("label",{for:"my-modal-5",class:"btn btn-secondary font-bold text-lg text-white"},"Close",-1)),t("label",{for:"my-modal-5",class:"btn btn-primary font-bold text-lg text-white",onClick:S},"Create")])])):(i(),d("div",ze,o[4]||(o[4]=[N('<div class="card w-full bg-base-100 shadow-xl"><figure class="px-10 pt-10"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 rounded-xl" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg></figure><div class="card-body items-center text-center"><h2 class="card-title">The create method has been disable</h2><p>Try to contact the administrator </p></div></div>',1)])))])],64))}},Qe=["for"],Ze=["id"],Ge={class:"modal"},Xe={key:0,class:"modal-box w-11/12 max-w-5xl border border-primary shadow-lg shadow-primary text-neutral-content"},Ye={class:"modal-header"},et=["for"],tt={class:"w-full mt-2"},lt={class:"w-full rounded-lg p-2"},ot={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},st={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},nt={class:"w-full bg-base-300 border border-secondary rounded-3xl text-neutral-content p-6"},at={class:"flex justify-end gap-4 mt-5"},it=["for"],dt=["for"],rt={key:1,class:"modal-box w-11/12 max-w-5xl"},ut=I({__name:"edit",props:{columns:{type:Array,default:()=>[]},model:{type:String,default:()=>[]},endpoint:{type:String,default:()=>[]},id:{type:Number,default:0},modelValue:{type:Object,default:()=>[]},permission:{type:String,default:null}},emits:["onEdit"],setup(b,{emit:v}){const u=H(),r=b,n=P(()=>r.columns.filter(l=>l.canEdit).length>0),p=P(()=>{const l=r.columns.filter(e=>e.section),o=r.columns.filter(e=>!e.section),s=l.map(e=>e.section),c=[...new Set(s)],y=[];return c.forEach(e=>{const w=l.filter(O=>O.section==e);y.push({section:e,fields:w})}),{sections:c,fields:o,sectionsWithFields:y}});let m=k(r.columns.filter(l=>l.canEdit));const f=async l=>{if(m.value.length>0)for(const[o,s]of Object.entries(l))for(const[c,y]of Object.entries(m.value))s.key==y.key&&(m.value[c]=s);else m.value=l},h=v,S=async()=>{L.post(r.endpoint,{model:r.model,id:r.id,data:m.value,permission:r.permission}).then(function(l){u.success(l.data.message),h("onEdit")}).catch(function(l){for(const[o,s]of Object.entries(l.response.data.errors))u.error(s[0])})};return(l,o)=>(i(),d(V,null,[t("label",{for:"edit-data-"+r.id,class:"btn btn-info modal-button"},o[0]||(o[0]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1)]),8,Qe),t("input",{type:"checkbox",id:"edit-data-"+r.id,class:"modal-toggle"},null,8,Ze),t("div",Ge,[n.value?(i(),d("div",Xe,[t("div",Ye,[o[1]||(o[1]=t("h3",{class:"font-bold text-lg"},"Edit",-1)),t("label",{for:"edit-data-"+r.id,class:"btn btn-sm btn-circle absolute right-2 top-2"},"✕",8,et)]),t("div",tt,[t("div",lt,[(i(!0),d(V,null,D(p.value.sectionsWithFields,(s,c)=>(i(),W(a(Z),{as:"div",class:"mt-2",key:c,defaultOpen:!0},{default:j(({open:y})=>[_(a(J),{class:"btn btn-primary w-full"},{default:j(()=>[t("span",null,$(s.section),1),y?(i(),d("svg",ot,o[2]||(o[2]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"},null,-1)]))):(i(),d("svg",st,o[3]||(o[3]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"},null,-1)])))]),_:2},1024),_(a(Q),{class:"px-4 pt-4 pb-2 text-sm text-gray-500"},{default:j(()=>[_(E,{columns:s.fields,onOnFormUpdate:f,editMode:"true",modelValue:r.modelValue},null,8,["columns","modelValue"])]),_:2},1024)]),_:2},1024))),128))])]),t("div",nt,[_(E,{columns:p.value.fields,onOnFormUpdate:f,editMode:"true",modelValue:r.modelValue},null,8,["columns","modelValue"])]),t("div",at,[t("label",{for:"edit-data-"+r.id,class:"btn btn-primary font-bold text-lg text-white"},"Close",8,it),t("label",{for:"edit-data-"+r.id,class:"btn btn-secondary font-bold text-lg text-white",onClick:S},"Submit",8,dt)])])):(i(),d("div",rt,o[4]||(o[4]=[N('<div class="card w-full bg-base-100 shadow-xl"><figure class="px-10 pt-10"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 rounded-xl" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg></figure><div class="card-body items-center text-center"><h2 class="card-title">The edit method has been disable</h2><p>Try to contact the administrator </p></div></div>',1)])))])],64))}}),ct={class:"flex flex-col gap-3"},pt={class:"flex justify-end flex-col md:flex-row gap-3 p-3"},mt={class:"relative"},ft={class:"relative"},yt=["value"],bt={class:"relative"},_t={class:"join"},vt={__name:"filter",props:{columns:{type:Array,default:()=>[]}},emits:["onPerPage","onOrderBy","onSearch","onFilter","onFilterReset"],setup(b,{emit:v}){const u=b,r=v;let n=k(10),p=k("id"),m=k("asc"),f=k(""),h=k([]);(async()=>{for(const[s,c]of Object.entries(u.columns))c.sortable&&(s==0&&(p.value=c.key),h.value.push({label:c.label,value:c.key}))})(),B(()=>n.value,s=>{r("onPerPage",s)}),B(()=>m.value,s=>{r("onOrderBy",s)}),B(()=>p.value,s=>{r("onFilter",s)});let l=k(null);B(()=>f.value,s=>{clearTimeout(l.value),l.value=setTimeout(function(){r("onSearch",s)},500)});const o=async()=>{n.value=10,p.value="id",m.value="asc",f.value=null,r("onFilterReset",[{perPage:n.value,filterBy:p.value,orderBy:m.value,search:f.value}])};return(s,c)=>(i(),d("div",ct,[t("div",pt,[t("div",mt,[T(t("select",{class:"select select-primary w-full","onUpdate:modelValue":c[0]||(c[0]=y=>K(n)?n.value=y:n=y)},c[5]||(c[5]=[N('<option disabled selected>Per page</option><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option>',5)]),512),[[A,a(n)]])]),t("div",ft,[T(t("select",{class:"select select-primary w-full","onUpdate:modelValue":c[1]||(c[1]=y=>K(p)?p.value=y:p=y),onChange:c[2]||(c[2]=(...y)=>s.filterChange&&s.filterChange(...y))},[c[6]||(c[6]=t("option",{disabled:"",selected:""},"Row",-1)),(i(!0),d(V,null,D(a(h),(y,e)=>(i(),d("option",{key:e,value:y.value},$(y.label),9,yt))),128))],544),[[A,a(p)]])]),t("div",bt,[T(t("select",{class:"select select-primary w-full","onUpdate:modelValue":c[3]||(c[3]=y=>K(m)?m.value=y:m=y)},c[7]||(c[7]=[t("option",{disabled:"",selected:""},"Order by",-1),t("option",{value:"asc"},"Asc",-1),t("option",{value:"desc"},"Desc",-1)]),512),[[A,a(m)]])]),t("div",_t,[T(t("input",{class:"input input-bordered join-item","onUpdate:modelValue":c[4]||(c[4]=y=>K(f)?f.value=y:f=y),placeholder:"Email"},null,512),[[z,a(f)]]),c[8]||(c[8]=t("button",{class:"btn btn-primary join-item rounded-r-full"},"Search",-1)),t("button",{class:"btn btn-secondary join-item rounded-r-full",onClick:o},"Reset")])])]))}},ht={class:"px-5 py-5 bg-base-200 border-t flex flex-col xs:flex-row items-center xs:justify-between"},gt={class:"xs:text-sm text-primary font-bold text-sm md:text-lg"},wt={class:"inline-flex mt-2 xs:mt-0"},kt={class:"btn-group"},xt=["onClick"],Vt=["innerHTML"],$t={__name:"pagination",props:{paginationInfo:{type:Object,default:()=>[]}},emits:["onPagiation"],setup(b,{emit:v}){const u=v,r=async p=>{u("onPagiation",p)},n=b;return(p,m)=>(i(),d("div",ht,[t("span",gt," Showing "+$(n.paginationInfo.currentPage)+" to "+$(n.paginationInfo.perPage)+" of "+$(n.paginationInfo.total)+" Entries ",1),t("div",wt,[t("div",kt,[(i(!0),d(V,null,D(n.paginationInfo.links,(f,h)=>(i(),d("button",{class:X(["btn btn-md",f.active?"btn-active":""]),key:h,onClick:S=>r(f.url)},[t("span",{innerHTML:f.label},null,8,Vt)],10,xt))),128))])])]))}},St={key:0},Ut={class:"carousel rounded-box w-96"},Dt={class:"carousel-item w-1/2"},Ct=["src"],jt={key:1},Ot=["innerHTML"],Ft={key:1},Mt={key:0,class:"badge badge-success mt-3"},Bt={key:1,class:"badge badge-error mt-3"},Tt={key:2},Pt={class:"flex flex-col"},Kt=["innerHTML"],Et={__name:"tableDataDisplay",props:{tableData:{type:Object,default:()=>[]},columns:{type:Array,default:()=>[]}},setup(b){const v=b,u=P(()=>{let r=[];for(const[n,p]of Object.entries(v.columns))r.push({label:p.label,type:p.type,value:v.tableData[p.key]});return r});return(r,n)=>(i(!0),d(V,null,D(u.value,(p,m)=>(i(),d("th",{key:m},[p.type==="media"?(i(),d("div",St,[t("div",Ut,[(i(!0),d(V,null,D(p.value,(f,h)=>(i(),d("div",Dt,[t("img",{src:f.url.default,class:"w-full"},null,8,Ct)]))),256))])])):(i(),d("div",jt,[p.type=="icon"?(i(),d("div",{key:0,innerHTML:p.value,class:"bg-base-100 rounded-lg flex justify-center"},null,8,Ot)):p.type==="toogle"?(i(),d("div",Ft,[p.value==1?(i(),d("div",Mt,"Enable")):(i(),d("div",Bt,"Disable"))])):p.type==="model_search"?(i(),d("div",Tt,[t("div",Pt,[(i(!0),d(V,null,D(p.value,(f,h)=>(i(),d("div",{class:"badge badge-primary mt-3",key:h},$(h)+" > "+$(f),1))),128))])])):(i(),d("div",{key:3,innerHTML:p.value},null,8,Kt))]))]))),128))}},Ht={class:"w-full"},Lt={class:"relative flex flex-col min-w-0 break-words bg-base-300 w-full mb-6 rounded-3xl"},At={class:"flex flex-wrap items-center mt-5"},It={class:"relative w-full px-4 max-w-full flex-grow flex-1"},Wt={class:"text-3xl font-extrabold text-base-content"},Nt={class:"relative w-full px-4 max-w-full flex-grow flex-1 text-right"},Rt={class:"overflow-x-auto p-6"},qt={class:"overflow-x-auto bg-base-100"},zt={class:"table table-compact w-full"},Jt={class:"font-bold bg-primary text-neutral"},Qt={class:"flex justify-start overflow-x-hidden gap-2"},Zt={key:1},Gt=["for"],Xt={class:"font-bold bg-primary text-neutral"},rl=I({__name:"Table",props:{tableTitle:{type:String,default:"Table name"},columns:{type:Array,default:()=>[]},model:{type:String,default:""},endpoint:{type:String,default:""},endpointDelete:{type:String,default:""},endpointCreate:{type:String,default:""},endpointEdit:{type:String,default:""},permission:{type:String,default:null},custom_edit_route:{type:String,default:null}},setup(b){const v=H(),u=b,r=async g=>{C(g)};let n=k(10);const p=async g=>{n.value=g,C()};let m=k("id");const f=async g=>{m.value=g,C()};let h=k(null);const S=async g=>{h.value=g,C()};let l=k(null);const o=async g=>{g&&g.length>3&&(l.value=g,C())},s=async()=>{C()},c=async()=>{C()},y=async()=>{C()},e=async g=>{n.value=g.perPage,m.value=g.filterBy,h.value=g.orderBy,l.value=g.search,C()};let w=k([]),O=k([]);const C=async(g=null)=>{g===null&&(g=u.endpoint),L.post(g,{model:u.model,columns:u.columns,perPage:n.value,search:l.value,sort:m.value,direction:h.value,permission:u.permission}).then(function(x){w.value=x.data.data,O.value={currentPage:x.data.current_page,lastPage:x.data.last_page,perPage:x.data.per_page,total:x.data.total,links:x.data.links}}).catch(function(x){for(const[U,F]of Object.entries(x.response.data.errors))v.error(F[0])})};return C(),(g,x)=>(i(),d("div",Ht,[t("div",Lt,[t("div",At,[t("div",It,[t("h1",Wt,$(u.tableTitle),1)]),t("div",Nt,[Y(g.$slots,"new",{},()=>[_(Je,{columns:u.columns,endpoint:u.endpointCreate,model:u.model,permission:u.permission,onOnCreate:c},null,8,["columns","endpoint","model","permission"])])])]),_(vt,{onOnPerPage:p,onOnOrderBy:S,onOnSearch:o,onOnFilter:f,onOnFilterReset:e,columns:u.columns},null,8,["columns"]),t("div",Rt,[t("div",qt,[t("table",zt,[t("thead",Jt,[t("tr",null,[(i(!0),d(V,null,D(b.columns,(U,F)=>(i(),d("th",{key:F},$(U.label),1))),128)),x[0]||(x[0]=t("th",null,"Action",-1))])]),t("tbody",null,[(i(!0),d(V,null,D(a(w),(U,F)=>(i(),d("tr",{key:U,class:"font-thin bg-base-300 hover:bg-secondary hover:text-neutral hover:font-bold"},[_(Et,{tableData:U,columns:b.columns},null,8,["tableData","columns"]),t("th",null,[t("div",Qt,[b.custom_edit_route?(i(),d("div",Zt,[_(a(ee),{href:b.custom_edit_route+U.id},{default:j(()=>[t("label",{for:"edit-data-"+U.id,class:"btn btn-info modal-button"},x[1]||(x[1]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})],-1)]),8,Gt)]),_:2},1032,["href"])])):(i(),W(ut,{key:0,columns:u.columns,endpoint:u.endpointEdit,model:u.model,modelValue:U,id:U.id,permission:u.permission,onOnEdit:y},null,8,["columns","endpoint","model","modelValue","id","permission"])),_(ye,{id:U.id,endpoint:u.endpointDelete,model:u.model,permission:u.permission,onOnDelete:s},null,8,["id","endpoint","model","permission"])])])]))),128))]),t("tfoot",Xt,[t("tr",null,[(i(!0),d(V,null,D(b.columns,(U,F)=>(i(),d("th",{key:F},$(U.label),1))),128)),x[2]||(x[2]=t("th",null,"Action",-1))])])])]),_($t,{onOnPagiation:r,paginationInfo:a(O)},null,8,["paginationInfo"])])])]))}});export{rl as _};