import{Q as S}from"./index.esm-df9f2d71.js";import{a as y,A as p,y as K,aG as L,p as O,B as b,h as V,v as R,o as C,g as _,d as f,t as w,e as j,w as G,l as B,u as m,i as M,x as q}from"./preset-59cdb044.js";import{I as z,o as F,E as H,A as Q,T as J,a as N}from"./keyboard-9c71fe26.js";import{s as W}from"./use-resolve-button-type-850145e6.js";import{f as X,u as Y}from"./hidden-a002ee06.js";function Z(l,u,a){let n=y(a==null?void 0:a.value),t=p(()=>l.value!==void 0);return[p(()=>t.value?l.value:n.value),function(o){return t.value||(n.value=o),u==null?void 0:u(o)}]}function ee(l){var u,a;let n=(u=l==null?void 0:l.form)!=null?u:l.closest("form");if(n){for(let t of n.elements)if(t!==l&&(t.tagName==="INPUT"&&t.type==="submit"||t.tagName==="BUTTON"&&t.type==="submit"||t.nodeName==="INPUT"&&t.type==="image")){t.click();return}(a=n.requestSubmit)==null||a.call(n)}}let le=Symbol("GroupContext"),te=K({name:"Switch",emits:{"update:modelValue":l=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:null},disabled:{type:Boolean,default:!1},tabIndex:{type:Number,default:0}},inheritAttrs:!1,setup(l,{emit:u,attrs:a,slots:n,expose:t}){var o;let s=(o=l.id)!=null?o:`headlessui-switch-${z()}`,r=L(le,null),[i,g]=Z(p(()=>l.modelValue),e=>u("update:modelValue",e),p(()=>l.defaultChecked));function h(){g(!i.value)}let T=y(null),c=r===null?T:r.switchRef,$=W(p(()=>({as:l.as,type:a.type})),c);t({el:c,$el:c});function E(e){e.preventDefault(),h()}function I(e){e.key===N.Space?(e.preventDefault(),h()):e.key===N.Enter&&ee(e.currentTarget)}function D(e){e.preventDefault()}let v=p(()=>{var e,d;return(d=(e=F(c))==null?void 0:e.closest)==null?void 0:d.call(e,"form")});return O(()=>{b([v],()=>{if(!v.value||l.defaultChecked===void 0)return;function e(){g(l.defaultChecked)}return v.value.addEventListener("reset",e),()=>{var d;(d=v.value)==null||d.removeEventListener("reset",e)}},{immediate:!0})}),()=>{let{name:e,value:d,form:P,tabIndex:k,...x}=l,U={checked:i.value},A={id:s,ref:c,role:"switch",type:$.value,tabIndex:k===-1?0:k,"aria-checked":i.value,"aria-labelledby":r==null?void 0:r.labelledby.value,"aria-describedby":r==null?void 0:r.describedby.value,onClick:E,onKeyup:I,onKeypress:D};return V(R,[e!=null&&i.value!=null?V(X,H({features:Y.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:i.value,form:P,disabled:x.disabled,name:e,value:d})):null,Q({ourProps:A,theirProps:{...a,...J(x,["modelValue","defaultChecked"])},slot:U,attrs:a,slots:n,name:"Switch"})])}}});const ae={class:"form-control"},oe={class:"label"},ne={class:"block text-lg font-bold mb-2"},re={key:0,class:"invalid-feedback text-primary",role:"alert"},pe={__name:"Toggle",props:{label:String,name:String,id:String,placeholder:String,modelValue:Boolean,class:String},emits:["update:modelValue"],setup(l,{emit:u}){const a=l,n=u;let t=y(null),o=y(!!a.modelValue);return b(()=>{var s;return(s=S().props)==null?void 0:s.errors},s=>{t.value=S().props.errors[a.name]||null}),b(()=>a.modelValue,s=>{o.value=s}),b(o,s=>{n("update:modelValue",s)}),(s,r)=>(C(),_("div",ae,[f("label",oe,[f("span",ne,w(a.label),1)]),j(m(te),{modelValue:m(o),"onUpdate:modelValue":r[0]||(r[0]=i=>M(o)?o.value=i:o=i),class:B([m(o)?"bg-primary":"bg-gray-200","relative inline-flex h-6 w-11 items-center rounded-full"])},{default:G(()=>[r[1]||(r[1]=f("span",{class:"sr-only"},"Toggle",-1)),f("span",{class:B([m(o)?"translate-x-6":"translate-x-1","inline-block h-4 w-4 transform rounded-full bg-white transition"])},null,2)]),_:1},8,["modelValue","class"]),m(t)?(C(),_("span",re,[f("strong",null,w(m(t)),1)])):q("",!0)]))}};export{pe as _};