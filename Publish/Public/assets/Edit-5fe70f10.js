import{a as m,o as p,b as c,w as y,d as a,t as b,f as g,e as i,u as s,G as _}from"./preset-b90b9b08.js";import{_ as f}from"./App-1f22318c.js";import{I as d}from"./Input-75e9a382.js";import"./Password.vue_vue_type_style_index_0_scoped_eed4e79b_lang-f3834945.js";import{_ as V}from"./TextMultipleSelector-05047dbc.js";import{_ as v}from"./Toggle-7ddc4411.js";import{_ as n}from"./Editor.vue_vue_type_script_setup_true_lang-a9a250cb.js";import"./FlashMessage-65cf7e3b.js";import"./search-b1a2db28.js";import"./createLucideIcon-c54a04d6.js";import"./circle-check-big-66a371fd.js";import"./loader-circle-c9275f11.js";import"./triangle-alert-9a3c06c5.js";import"./file-text-046f6174.js";import"./arrow-right-0e40d01d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./keyboard-8b566b5e.js";import"./use-resolve-button-type-a7c357fc.js";import"./hidden-a6a905be.js";const x={class:"bg-base-300"},S={class:"py-8 lg:py-16 px-4 mx-auto max-w-screen-md"},h={class:"mb-4 text-4xl tracking-tight font-extrabold text-center text-neutral"},J={__name:"Edit",props:{blog:{type:Object,default:()=>[]},editor_key:{type:String,default:null},edit_route:{type:String,default:null},dynamicCategorySearch:{type:Object,default:()=>[]},selected_category:{type:Object,default:()=>[]}},setup(r){const t=r,l=m({title:t.blog.title,slug:t.blog.slug,content:t.blog.content,short_description:t.blog.short_description,is_published:t.blog.is_published,category_id:t.blog.category_id}),u=async()=>{_.post(t.edit_route,l.value)};return(k,e)=>(p(),c(f,null,{default:y(()=>[a("section",x,[a("div",S,[a("h2",h,"Edit "+b(t.blog.title),1),a("form",{onSubmit:g(u,["prevent"]),class:"space-y-8"},[i(s(d),{type:"text",modelValue:l.value.title,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value.title=o),label:"Title"},null,8,["modelValue"]),i(s(d),{type:"text",modelValue:l.value.slug,"onUpdate:modelValue":e[1]||(e[1]=o=>l.value.slug=o),label:"Slug"},null,8,["modelValue"]),i(s(V),{label:t.dynamicCategorySearch.label,placeholder:"search",model:t.dynamicCategorySearch.model,columns:t.dynamicCategorySearch.columns,singleMode:t.dynamicCategorySearch.singleSearch,modelValue:l.value.category_id,"onUpdate:modelValue":e[2]||(e[2]=o=>l.value.category_id=o),loadData:r.selected_category.data,endpoint:t.dynamicCategorySearch.endpoint},null,8,["label","model","columns","singleMode","modelValue","loadData","endpoint"]),i(s(v),{modelValue:l.value.is_published,"onUpdate:modelValue":e[3]||(e[3]=o=>l.value.is_published=o),label:"Is published"},null,8,["modelValue"]),i(n,{"api-key":t.editor_key,modelValue:l.value.content,"onUpdate:modelValue":e[4]||(e[4]=o=>l.value.content=o)},null,8,["api-key","modelValue"]),e[6]||(e[6]=a("label",{class:"label"},[a("span",{class:"label-text"},"Short Description")],-1)),i(n,{"api-key":t.editor_key,modelValue:l.value.short_description,"onUpdate:modelValue":e[5]||(e[5]=o=>l.value.short_description=o)},null,8,["api-key","modelValue"]),e[7]||(e[7]=a("button",{type:"submit",class:"btn btn-primary"},"Submit",-1))],32)])])]),_:1}))}};export{J as default};