function a(e,s,t){const o={info:{class:"alert-info",icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
          `},error:{class:"alert-error",icon:`<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>`},warning:{class:"alert-warning",icon:`<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>`},success:{class:"alert-success",icon:`<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>`}},r=o[e]||o.info;return`
        <div class="alert ${r.class} shadow-lg flex justify-between items-start p-4 rounded-lg">
            <div class="flex flex-col w-full">
                <div class="flex justify-between items-center mb-2">
                    <div class="flex items-center">
                        ${r.icon}
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
    `}const m=(e,s)=>a("info",e,s),u=(e,s)=>a("error",e,s),w=(e,s)=>a("warning",e,s),f=(e,s)=>a("success",e,s),k=async(e,s,t,o=10,r="right",c=1e4)=>{const i=document.querySelector("body"),d="wind-notify-"+r;let n=document.getElementById(d);n||(n=document.createElement("div"),n.id=d,i.appendChild(n)),v(n,r,c);const l=document.createElement("div");switch(l.className="p-3 block transform transition-all duration-150 ease-out scale-0",n.appendChild(l),h(l),t){case"info":l.innerHTML=m(e,s);break;case"error":l.innerHTML=u(e,s);break;case"success":l.innerHTML=f(e,s);break;default:l.innerHTML=w(e,s);break}g(l,o)};function v(e,s,t=1e4){switch(e.style.position="fixed",e.style.zIndex=t,e.style.width="300px",s){case"left":e.style.top="50%",e.style.transform="translateY(-50%)",e.style.left="1rem";break;case"right":e.style.top="50%",e.style.transform="translateY(-50%)",e.style.right="1rem";break;case"top":e.style.top="1rem",e.style.left="50%",e.style.transform="translateX(-50%)";break;case"bottom":e.style.bottom="1rem",e.style.left="50%",e.style.transform="translateX(-50%)";break;case"middle":e.style.top="50%",e.style.left="50%",e.style.transform="translate(-50%, -50%)";break;default:e.style.bottom="1rem",e.style.right="1rem";break}e.style.maxHeight="calc(100vh - 2rem)",e.style.overflowY="auto"}function h(e){setTimeout(()=>{e.classList.remove("scale-0"),e.classList.add("scale-100")},200)}function g(e,s){const t=e.querySelector(".progress");if(!t)return;const o=s*60;let r=0;const c=()=>{const i=Math.min((r/o)**.5*100,100);t.value=i,r>=o?(e.classList.add("scale-0"),setTimeout(()=>{e.remove()},200)):(r++,requestAnimationFrame(c))};c()}function p(e){e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove()}window.removeWindToast=p;export{k as s};
