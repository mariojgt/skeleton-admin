import{p as b,T as f,q as g,o as V,b as x,w as r,e as t,u as e,d as n,k as p,C,E as h,f as S}from"./preset-1b389b8a.js";import{_ as U}from"./App-99f2ccbc.js";import{_ as u}from"./Input.vue_vue_type_script_setup_true_lang-f5b1f4c2.js";import{_ as k}from"./Submit-6c4ae9be.js";import{_}from"./Select.vue_vue_type_script_setup_true_lang-cf5052cb.js";import{_ as w,a as v}from"./TextMultipleSelector-05a28255.js";import{m as $,p as j,x as i,I as D,y as m}from"./tabs-a79c75d3.js";import"./FlashMessage-783108e9.js";import"./dark-3fd8b7ad.js";import"./keyboard-94d03abe.js";import"./use-resolve-button-type-d875b7c7.js";import"./hidden-2f747626.js";import"./micro-task-9c8e04c2.js";const O={class:"form-control"},M=n("div",{class:"label"},[n("span",{class:"label-text"},"Description")],-1),N={class:"form-control pt-10"},Q={__name:"edit",props:{product:{type:Object,default:()=>({})},image_search_endpoint:{type:String,default:""},dynamicCategorySearch:{type:Object,default:()=>({})},selected_category:{type:Object,default:()=>({})},type_enum:{type:Object,default:()=>({})},price_type_enum:{type:Object,default:()=>({})}},setup(s){const l=s;b(()=>{});const o=f({name:l.product.data.name,slug:l.product.data.slug,description:l.product.data.description,price:l.product.data.price,product_image:l.product.data.media,media:l.product.data.media,category_id:l.product.data.category_id,type:l.product.data.type,price_type:l.product.data.price_type}),c=()=>{o.patch(route("admin.store.product.update",{product:l.product.data.id}))};return(P,d)=>{const y=g("n-card");return V(),x(U,null,{default:r(()=>[t(y,{title:"Product",class:p("col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-300")},{default:r(()=>[t(e($),null,{default:r(()=>[t(e(j),{class:"flex space-x-1 rounded-xl p-1 tabs"},{default:r(()=>[t(e(i),null,{default:r(({selected:a})=>[n("a",{class:p(["tab tab-lg tab-bordered rounded-md bg-neutral",a?"bg-primary text-black":""])},"Deatils",2)]),_:1}),t(e(i),null,{default:r(({selected:a})=>[n("a",{class:p(["tab tab-lg tab-bordered rounded-md bg-neutral",a?"bg-primary text-black":""])},"Media and Description",2)]),_:1}),t(e(i),null,{default:r(({selected:a})=>[n("a",{class:p(["tab tab-lg tab-bordered rounded-md bg-neutral",a?"bg-primary text-black":""])},"Settings",2)]),_:1})]),_:1}),n("form",{onSubmit:S(c,["prevent"])},[t(e(D),{class:"mt-2"},{default:r(()=>[t(e(m),null,{default:r(()=>[t(e(u),{modelValue:e(o).name,"onUpdate:modelValue":d[0]||(d[0]=a=>e(o).name=a),label:"Name",type:"text",placeholder:"Name"},null,8,["modelValue"]),t(e(u),{modelValue:e(o).slug,"onUpdate:modelValue":d[1]||(d[1]=a=>e(o).slug=a),label:"slug",type:"text",placeholder:"slug"},null,8,["modelValue"]),t(e(u),{modelValue:e(o).price,"onUpdate:modelValue":d[2]||(d[2]=a=>e(o).price=a),label:"Price",type:"text",placeholder:"slug"},null,8,["modelValue"]),t(e(w),{modelValue:e(o).category_id,"onUpdate:modelValue":d[3]||(d[3]=a=>e(o).category_id=a),label:"Category",placeholder:"search",model:l.dynamicCategorySearch.model,columns:l.dynamicCategorySearch.columns,"single-mode":l.dynamicCategorySearch.singleSearch,"load-data":s.selected_category.data,endpoint:l.dynamicCategorySearch.endpoint},null,8,["modelValue","model","columns","single-mode","load-data","endpoint"])]),_:1}),t(e(m),null,{default:r(()=>[n("label",O,[M,C(n("textarea",{class:"textarea textarea-bordered w-full",placeholder:"Product Description","onUpdate:modelValue":d[4]||(d[4]=a=>e(o).description=a)},null,512),[[h,e(o).description]])]),t(e(v),{modelValue:e(o).product_image,"onUpdate:modelValue":d[5]||(d[5]=a=>e(o).product_image=a),label:"image",placeholder:"search","load-data":s.product.data.media,endpoint:l.image_search_endpoint},null,8,["modelValue","load-data","endpoint"])]),_:1}),t(e(m),null,{default:r(()=>[t(e(_),{modelValue:e(o).price_type,"onUpdate:modelValue":d[6]||(d[6]=a=>e(o).price_type=a),options:l.price_type_enum,label:"Price type"},null,8,["modelValue","options"]),t(e(_),{modelValue:e(o).type,"onUpdate:modelValue":d[7]||(d[7]=a=>e(o).type=a),options:l.type_enum,label:"Type"},null,8,["modelValue","options"])]),_:1})]),_:1})],32)]),_:1}),n("div",N,[t(e(k),{name:"Update",onClick:c})])]),_:1})]),_:1})}}};export{Q as default};