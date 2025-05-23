import{h as i,f as n}from"./formatUtils-D1BGvVL8.js";import{v as l,g as d,o as p}from"./index-WItOpbdS.js";const g=["innerHTML"],m={__name:"SvgRenderer",props:{content:{type:String,required:!0},color:{type:String,required:!0}},setup(s){const t=s,c=l(()=>{const e=t.content.match(/<svg[\s\S]*?<\/svg>/);if(e){const o=e[0],r=t.color.replace(/\[|\]/g,"");let a=t.content.replace(e[0],`
            <div class="my-4 space-y-4">
                <div class="bg-[#0F172A]/50 rounded-lg p-4 flex items-center justify-center">
                    ${o}
                </div>
                <div class="flex flex-wrap gap-2">
                    <button
                        onclick="navigator.clipboard.writeText(\`${o.replace(/`/g,"\\`")}\`); window.startWindToast ? window.startWindToast('success', 'SVG copied to clipboard', 'success') : alert('Copied!')"
                        class="text-xs px-3 py-1 flex items-center gap-1 rounded transition-colors"
                        style="background-color: rgba(${i(r)}, 0.2); color: ${r}"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                        </svg>
                        <span>Copy SVG</span>
                    </button>
                </div>
            </div>
        `);return n(a)}return n(t.content)});return(e,o)=>(p(),d("div",{innerHTML:c.value,class:"text-[#CBD5E1] prose prose-invert max-w-none mt-2"},null,8,g))}};export{m as default};
