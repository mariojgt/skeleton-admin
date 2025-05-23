import{f as c,h as d,e as p}from"./formatUtils-D1BGvVL8.js";import{v as g,g as u,o as x}from"./index-WItOpbdS.js";const h=["innerHTML"],f={__name:"CodeRenderer",props:{content:{type:String,required:!0},language:{type:String,required:!0},color:{type:String,required:!0}},setup(l){const e=l,i=g(()=>{let t="";const n=new RegExp(`\`\`\`${e.language}([\\s\\S]*?)\`\`\``,"g"),o=[];let s;for(;(s=n.exec(e.content))!==null;)o.push(s[1].trim());let r=e.content.split(n);t=c(r[0]);const a=e.color.replace(/\[|\]/g,"");return o.length>0&&(t+=`
            <div class="my-4 rounded-md overflow-hidden">
                <div class="flex items-center justify-between px-4 py-2 bg-[#0F172A]">
                    <span class="text-xs font-mono text-gray-400">${e.language}</span>
                    <button
                        onclick="navigator.clipboard.writeText(\`${o[0].replace(/`/g,"\\`")}\`); window.startWindToast ? window.startWindToast('success', 'Code copied to clipboard', 'success') : alert('Copied!')"
                        class="text-xs px-2 py-1 flex items-center gap-1 rounded transition-colors"
                        style="background-color: rgba(${d(a)}, 0.2); color: ${a}"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                        </svg>
                        <span>Copy</span>
                    </button>
                </div>
                <div class="bg-[#0F172A] p-4 overflow-x-auto">
                    <pre><code class="language-${e.language}">${p(o[0])}</code></pre>
                </div>
            </div>
        `,r.length>1&&r[1]&&(t+=c(r[1]))),t});return(t,n)=>(x(),u("div",{innerHTML:i.value,class:"text-[#CBD5E1] prose prose-invert max-w-none mt-2"},null,8,h))}};export{f as default};
