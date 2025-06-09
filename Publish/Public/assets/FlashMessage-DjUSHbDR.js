import{B as u,x as l,k as m}from"./index-TEoLjiFV.js";function d(e,s,t){const r={info:{class:"alert-info",icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
          `},error:{class:"alert-error",icon:`<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>`},warning:{class:"alert-warning",icon:`<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>`},success:{class:"alert-success",icon:`<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>`}},o=r[e]||r.info;return`
        <div class="alert ${o.class} shadow-lg flex justify-between items-start p-4 rounded-lg">
            <div class="flex flex-col w-full">
                <div class="flex justify-between items-center mb-2">
                    <div class="flex items-center">
                        ${o.icon}
                        <h3 class="font-bold text-lg ml-2">${s}</h3>
                    </div>
                    <button class="btn btn-circle btn-sm" onclick="window.removeWindToast(event)">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="text-md mb-2">${t}</div>
                <div class="w-full">
                    <progress class="progress progress-primary w-full h-2 rounded-full" value="50" max="100"></progress>
                </div>
            </div>
        </div>
    `}const w=(e,s)=>d("info",e,s),h=(e,s)=>d("error",e,s),v=(e,s)=>d("warning",e,s),g=(e,s)=>d("success",e,s),a=async(e,s,t,r=10,o="right",i=1e4)=>{if(typeof window>"u")return;const f=document.querySelector("body"),p="wind-notify-"+o;let c=document.getElementById(p);c||(c=document.createElement("div"),c.id=p,f.appendChild(c)),k(c,o,i);const n=document.createElement("div");switch(n.className="p-3 block transform transition-all duration-150 ease-out scale-0",c.appendChild(n),b(n),t){case"info":n.innerHTML=w(e,s);break;case"error":n.innerHTML=h(e,s);break;case"success":n.innerHTML=g(e,s);break;default:n.innerHTML=v(e,s);break}x(n,r)};function k(e,s,t=1e4){switch(e.style.position="fixed",e.style.zIndex=t,e.style.width="300px",s){case"left":e.style.top="50%",e.style.transform="translateY(-50%)",e.style.left="1rem";break;case"right":e.style.top="50%",e.style.transform="translateY(-50%)",e.style.right="1rem";break;case"top":e.style.top="1rem",e.style.left="50%",e.style.transform="translateX(-50%)";break;case"bottom":e.style.bottom="1rem",e.style.left="50%",e.style.transform="translateX(-50%)";break;case"middle":e.style.top="50%",e.style.left="50%",e.style.transform="translate(-50%, -50%)";break;default:e.style.bottom="1rem",e.style.right="1rem";break}e.style.maxHeight="calc(100vh - 2rem)",e.style.overflowY="auto"}function b(e){setTimeout(()=>{e.classList.remove("scale-0"),e.classList.add("scale-100")},200)}function x(e,s){const t=e.querySelector(".progress");if(!t)return;const r=s*60;let o=0;const i=()=>{const f=Math.min((o/r)**.5*100,100);t.value=f,o>=r?(e.classList.add("scale-0"),setTimeout(()=>{e.remove()},200)):(o++,requestAnimationFrame(i))};i()}function y(e){e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove()}typeof window<"u"&&(window.removeWindToast=y);const L={__name:"FlashMessage",setup(e){u(()=>l().props.errors,t=>{if(l().props.errors)for(const[r,o]of Object.entries(l().props.errors))s("error",o)}),m(()=>{l().props.flash&&s(l().props.flash.type,l().props.flash.message)}),u(()=>l().props.flash,t=>{l().props.flash&&s(l().props.flash.type,l().props.flash.message)});const s=async(t,r)=>{switch(t){case"success":a("success",r,"success");break;case"error":a("error",r,"error");break;case"warning":a("warning",r,"warning");break;case"info":a("info",r,"info");break;default:a("info",r,"info");break}};return(t,r)=>null}};export{L as _,a as s};
