import{a as i,aX as f,aY as g,A as l,x as y,aZ as _,h as v,a_ as h,O as S,C as b,o as k,g as C,d as p,t as m,u as x}from"./preset-568b6dc0.js";i(null);var s=i(null);f(null);i(null);function d(){return g({props:l(()=>{var e;return(e=s.value)==null?void 0:e.props}),url:l(()=>{var e;return(e=s.value)==null?void 0:e.url}),component:l(()=>{var e;return(e=s.value)==null?void 0:e.component}),version:l(()=>{var e;return(e=s.value)==null?void 0:e.version}),scrollRegions:l(()=>{var e;return(e=s.value)==null?void 0:e.scrollRegions}),rememberedState:l(()=>{var e;return(e=s.value)==null?void 0:e.rememberedState})})}var B=y({name:"Link",props:{as:{type:String,default:"a"},data:{type:Object,default:()=>({})},href:{type:String,required:!0},method:{type:String,default:"get"},replace:{type:Boolean,default:!1},preserveScroll:{type:Boolean,default:!1},preserveState:{type:Boolean,default:null},only:{type:Array,default:()=>[]},headers:{type:Object,default:()=>({})},queryStringArrayFormat:{type:String,default:"brackets"}},setup(e,{slots:u,attrs:t}){return()=>{let a=e.as.toLowerCase(),o=e.method.toLowerCase(),[n,r]=_(o,e.href||"",e.data,e.queryStringArrayFormat);return a==="a"&&o!=="get"&&console.warn(`Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${n}" method="${o}" as="button">...</Link>`),v(e.as,{...t,...a==="a"?{href:n}:{},onClick:c=>{h(c)&&(c.preventDefault(),S.visit(n,{data:r,method:o,replace:e.replace,preserveScroll:e.preserveScroll,preserveState:e.preserveState??o!=="get",only:e.only,headers:e.headers,onCancelToken:t.onCancelToken||(()=>({})),onBefore:t.onBefore||(()=>({})),onStart:t.onStart||(()=>({})),onProgress:t.onProgress||(()=>({})),onFinish:t.onFinish||(()=>({})),onCancel:t.onCancel||(()=>({})),onSuccess:t.onSuccess||(()=>({})),onError:t.onError||(()=>({}))}))}},u)}}}),P=B;const T={class:"form-control"},w={class:"label"},L={class:"block text-lg font-bold mb-2"},A=["type","placeholder","value"],E={class:"invalid-feedback text-primary",role:"alert"},F=y({__name:"Input",props:{label:{type:String,default:""},name:{type:String,default:""},id:{type:String,default:""},placeholder:{type:String,default:""},type:{type:String,default:"text"},modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:u}){let t=i(null);b(()=>{var r;return(r=d().props)==null?void 0:r.errors},r=>{d().props.errors[a.name]&&(t.value=d().props.errors[a.name])});const a=e,o=u,n=r=>{o("update:modelValue",r.target.value)};return(r,c)=>(k(),C("div",T,[p("label",w,[p("span",L,m(a.label),1)]),p("input",{class:"input input-primary input-bordered",type:a.type,name:"{{ props.name }}",id:"{{ props.id }}",placeholder:a.placeholder,value:e.modelValue,onInput:n},null,40,A),p("span",E,[p("strong",null,m(x(t)),1)])]))}});export{d as Q,F as _,P as i};