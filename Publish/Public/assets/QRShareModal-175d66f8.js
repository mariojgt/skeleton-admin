import{v as Vt,h as $t,a as mt,o as J,g as tt,d as N,e as z,u as V,t as O,w as wt,$ as pt,b as Ht,k as Kt,I as Jt,s as yt,f as Ot}from"./preset-271ebd79.js";import{Q as jt,C as xt}from"./qr-code-2316df3d.js";import{X as Yt}from"./x-6b2a35b0.js";import{C as Qt}from"./check-f7e34d06.js";import"./createLucideIcon-ee108853.js";var Gt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},At={},T={};let ct;const qt=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];T.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};T.getSymbolTotalCodewords=function(t){return qt[t]};T.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};T.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');ct=t};T.isKanjiModeEnabled=function(){return typeof ct<"u"};T.toSJIS=function(t){return ct(t)};var G={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},e.from=function(n,o){if(e.isValid(n))return n;try{return t(n)}catch{return o}}})(G);function Tt(){this.buffer=[],this.length=0}Tt.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Wt=Tt;function K(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}K.prototype.set=function(e,t,i,n){const o=e*this.size+t;this.data[o]=i,n&&(this.reservedBit[o]=!0)};K.prototype.get=function(e,t){return this.data[e*this.size+t]};K.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i};K.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var Xt=K,Nt={};(function(e){const t=T.getSymbolSize;e.getRowColCoords=function(n){if(n===1)return[];const o=Math.floor(n/7)+2,r=t(n),s=r===145?26:Math.ceil((r-13)/(2*o-2))*2,a=[r-7];for(let l=1;l<o-1;l++)a[l]=a[l-1]-s;return a.push(6),a.reverse()},e.getPositions=function(n){const o=[],r=e.getRowColCoords(n),s=r.length;for(let a=0;a<s;a++)for(let l=0;l<s;l++)a===0&&l===0||a===0&&l===s-1||a===s-1&&l===0||o.push([r[a],r[l]]);return o}})(Nt);var It={};const Zt=T.getSymbolSize,Ct=7;It.getPositions=function(t){const i=Zt(t);return[[0,0],[i-Ct,0],[0,i-Ct]]};var St={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},e.from=function(o){return e.isValid(o)?parseInt(o,10):void 0},e.getPenaltyN1=function(o){const r=o.size;let s=0,a=0,l=0,u=null,c=null;for(let E=0;E<r;E++){a=l=0,u=c=null;for(let m=0;m<r;m++){let f=o.get(E,m);f===u?a++:(a>=5&&(s+=t.N1+(a-5)),u=f,a=1),f=o.get(m,E),f===c?l++:(l>=5&&(s+=t.N1+(l-5)),c=f,l=1)}a>=5&&(s+=t.N1+(a-5)),l>=5&&(s+=t.N1+(l-5))}return s},e.getPenaltyN2=function(o){const r=o.size;let s=0;for(let a=0;a<r-1;a++)for(let l=0;l<r-1;l++){const u=o.get(a,l)+o.get(a,l+1)+o.get(a+1,l)+o.get(a+1,l+1);(u===4||u===0)&&s++}return s*t.N2},e.getPenaltyN3=function(o){const r=o.size;let s=0,a=0,l=0;for(let u=0;u<r;u++){a=l=0;for(let c=0;c<r;c++)a=a<<1&2047|o.get(u,c),c>=10&&(a===1488||a===93)&&s++,l=l<<1&2047|o.get(c,u),c>=10&&(l===1488||l===93)&&s++}return s*t.N3},e.getPenaltyN4=function(o){let r=0;const s=o.data.length;for(let l=0;l<s;l++)r+=o.data[l];return Math.abs(Math.ceil(r*100/s/5)-10)*t.N4};function i(n,o,r){switch(n){case e.Patterns.PATTERN000:return(o+r)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return r%3===0;case e.Patterns.PATTERN011:return(o+r)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(r/3))%2===0;case e.Patterns.PATTERN101:return o*r%2+o*r%3===0;case e.Patterns.PATTERN110:return(o*r%2+o*r%3)%2===0;case e.Patterns.PATTERN111:return(o*r%3+(o+r)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}e.applyMask=function(o,r){const s=r.size;for(let a=0;a<s;a++)for(let l=0;l<s;l++)r.isReserved(l,a)||r.xor(l,a,i(o,l,a))},e.getBestMask=function(o,r){const s=Object.keys(e.Patterns).length;let a=0,l=1/0;for(let u=0;u<s;u++){r(u),e.applyMask(u,o);const c=e.getPenaltyN1(o)+e.getPenaltyN2(o)+e.getPenaltyN3(o)+e.getPenaltyN4(o);e.applyMask(u,o),c<l&&(l=c,a=u)}return a}})(St);var q={};const v=G,j=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],x=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];q.getBlocksCount=function(t,i){switch(i){case v.L:return j[(t-1)*4+0];case v.M:return j[(t-1)*4+1];case v.Q:return j[(t-1)*4+2];case v.H:return j[(t-1)*4+3];default:return}};q.getTotalCodewordsCount=function(t,i){switch(i){case v.L:return x[(t-1)*4+0];case v.M:return x[(t-1)*4+1];case v.Q:return x[(t-1)*4+2];case v.H:return x[(t-1)*4+3];default:return}};var Mt={},W={};const $=new Uint8Array(512),Y=new Uint8Array(256);(function(){let t=1;for(let i=0;i<255;i++)$[i]=t,Y[t]=i,t<<=1,t&256&&(t^=285);for(let i=255;i<512;i++)$[i]=$[i-255]})();W.log=function(t){if(t<1)throw new Error("log("+t+")");return Y[t]};W.exp=function(t){return $[t]};W.mul=function(t,i){return t===0||i===0?0:$[Y[t]+Y[i]]};(function(e){const t=W;e.mul=function(n,o){const r=new Uint8Array(n.length+o.length-1);for(let s=0;s<n.length;s++)for(let a=0;a<o.length;a++)r[s+a]^=t.mul(n[s],o[a]);return r},e.mod=function(n,o){let r=new Uint8Array(n);for(;r.length-o.length>=0;){const s=r[0];for(let l=0;l<o.length;l++)r[l]^=t.mul(o[l],s);let a=0;for(;a<r.length&&r[a]===0;)a++;r=r.slice(a)}return r},e.generateECPolynomial=function(n){let o=new Uint8Array([1]);for(let r=0;r<n;r++)o=e.mul(o,new Uint8Array([1,t.exp(r)]));return o}})(Mt);const Pt=Mt;function ft(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}ft.prototype.initialize=function(t){this.degree=t,this.genPoly=Pt.generateECPolynomial(this.degree)};ft.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(t.length+this.degree);i.set(t);const n=Pt.mod(i,this.genPoly),o=this.degree-n.length;if(o>0){const r=new Uint8Array(this.degree);return r.set(n,o),r}return n};var te=ft,Rt={},L={},dt={};dt.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var M={};const vt="[0-9]+",ee="[A-Z $%*+\\-./:]+";let H="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";H=H.replace(/u/g,"\\u");const ne="(?:(?![A-Z0-9 $%*+\\-./:]|"+H+`)(?:.|[\r
]))+`;M.KANJI=new RegExp(H,"g");M.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");M.BYTE=new RegExp(ne,"g");M.NUMERIC=new RegExp(vt,"g");M.ALPHANUMERIC=new RegExp(ee,"g");const oe=new RegExp("^"+H+"$"),re=new RegExp("^"+vt+"$"),ie=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");M.testKanji=function(t){return oe.test(t)};M.testNumeric=function(t){return re.test(t)};M.testAlphanumeric=function(t){return ie.test(t)};(function(e){const t=dt,i=M;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(r,s){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?r.ccBits[0]:s<27?r.ccBits[1]:r.ccBits[2]},e.getBestModeForData=function(r){return i.testNumeric(r)?e.NUMERIC:i.testAlphanumeric(r)?e.ALPHANUMERIC:i.testKanji(r)?e.KANJI:e.BYTE},e.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},e.isValid=function(r){return r&&r.bit&&r.ccBits};function n(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(r,s){if(e.isValid(r))return r;try{return n(r)}catch{return s}}})(L);(function(e){const t=T,i=q,n=G,o=L,r=dt,s=7973,a=t.getBCHDigit(s);function l(m,f,w){for(let p=1;p<=40;p++)if(f<=e.getCapacity(p,w,m))return p}function u(m,f){return o.getCharCountIndicator(m,f)+4}function c(m,f){let w=0;return m.forEach(function(p){const A=u(p.mode,f);w+=A+p.getBitsLength()}),w}function E(m,f){for(let w=1;w<=40;w++)if(c(m,w)<=e.getCapacity(w,f,o.MIXED))return w}e.from=function(f,w){return r.isValid(f)?parseInt(f,10):w},e.getCapacity=function(f,w,p){if(!r.isValid(f))throw new Error("Invalid QR Code version");typeof p>"u"&&(p=o.BYTE);const A=t.getSymbolTotalCodewords(f),h=i.getTotalCodewordsCount(f,w),y=(A-h)*8;if(p===o.MIXED)return y;const g=y-u(p,f);switch(p){case o.NUMERIC:return Math.floor(g/10*3);case o.ALPHANUMERIC:return Math.floor(g/11*2);case o.KANJI:return Math.floor(g/13);case o.BYTE:default:return Math.floor(g/8)}},e.getBestVersionForData=function(f,w){let p;const A=n.from(w,n.M);if(Array.isArray(f)){if(f.length>1)return E(f,A);if(f.length===0)return 1;p=f[0]}else p=f;return l(p.mode,p.getLength(),A)},e.getEncodedBits=function(f){if(!r.isValid(f)||f<7)throw new Error("Invalid QR Code version");let w=f<<12;for(;t.getBCHDigit(w)-a>=0;)w^=s<<t.getBCHDigit(w)-a;return f<<12|w}})(Rt);var Lt={};const st=T,kt=1335,se=21522,Et=st.getBCHDigit(kt);Lt.getEncodedBits=function(t,i){const n=t.bit<<3|i;let o=n<<10;for(;st.getBCHDigit(o)-Et>=0;)o^=kt<<st.getBCHDigit(o)-Et;return(n<<10|o)^se};var _t={};const ae=L;function k(e){this.mode=ae.NUMERIC,this.data=e.toString()}k.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};k.prototype.getLength=function(){return this.data.length};k.prototype.getBitsLength=function(){return k.getBitsLength(this.data.length)};k.prototype.write=function(t){let i,n,o;for(i=0;i+3<=this.data.length;i+=3)n=this.data.substr(i,3),o=parseInt(n,10),t.put(o,10);const r=this.data.length-i;r>0&&(n=this.data.substr(i),o=parseInt(n,10),t.put(o,r*3+1))};var le=k;const ue=L,et=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function _(e){this.mode=ue.ALPHANUMERIC,this.data=e}_.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};_.prototype.getLength=function(){return this.data.length};_.prototype.getBitsLength=function(){return _.getBitsLength(this.data.length)};_.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let n=et.indexOf(this.data[i])*45;n+=et.indexOf(this.data[i+1]),t.put(n,11)}this.data.length%2&&t.put(et.indexOf(this.data[i]),6)};var ce=_;const fe=L;function U(e){this.mode=fe.BYTE,typeof e=="string"?this.data=new TextEncoder().encode(e):this.data=new Uint8Array(e)}U.getBitsLength=function(t){return t*8};U.prototype.getLength=function(){return this.data.length};U.prototype.getBitsLength=function(){return U.getBitsLength(this.data.length)};U.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)};var de=U;const ge=L,he=T;function D(e){this.mode=ge.KANJI,this.data=e}D.getBitsLength=function(t){return t*13};D.prototype.getLength=function(){return this.data.length};D.prototype.getBitsLength=function(){return D.getBitsLength(this.data.length)};D.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=he.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),e.put(i,13)}};var me=D,Ut={exports:{}};(function(e){var t={single_source_shortest_paths:function(i,n,o){var r={},s={};s[n]=0;var a=t.PriorityQueue.make();a.push(n,0);for(var l,u,c,E,m,f,w,p,A;!a.empty();){l=a.pop(),u=l.value,E=l.cost,m=i[u]||{};for(c in m)m.hasOwnProperty(c)&&(f=m[c],w=E+f,p=s[c],A=typeof s[c]>"u",(A||p>w)&&(s[c]=w,a.push(c,w),r[c]=u))}if(typeof o<"u"&&typeof s[o]>"u"){var h=["Could not find a path from ",n," to ",o,"."].join("");throw new Error(h)}return r},extract_shortest_path_from_predecessor_list:function(i,n){for(var o=[],r=n;r;)o.push(r),i[r],r=i[r];return o.reverse(),o},find_path:function(i,n,o){var r=t.single_source_shortest_paths(i,n,o);return t.extract_shortest_path_from_predecessor_list(r,o)},PriorityQueue:{make:function(i){var n=t.PriorityQueue,o={},r;i=i||{};for(r in n)n.hasOwnProperty(r)&&(o[r]=n[r]);return o.queue=[],o.sorter=i.sorter||n.default_sorter,o},default_sorter:function(i,n){return i.cost-n.cost},push:function(i,n){var o={value:i,cost:n};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(Ut);var we=Ut.exports;(function(e){const t=L,i=le,n=ce,o=de,r=me,s=M,a=T,l=we;function u(h){return unescape(encodeURIComponent(h)).length}function c(h,y,g){const d=[];let C;for(;(C=h.exec(g))!==null;)d.push({data:C[0],index:C.index,mode:y,length:C[0].length});return d}function E(h){const y=c(s.NUMERIC,t.NUMERIC,h),g=c(s.ALPHANUMERIC,t.ALPHANUMERIC,h);let d,C;return a.isKanjiModeEnabled()?(d=c(s.BYTE,t.BYTE,h),C=c(s.KANJI,t.KANJI,h)):(d=c(s.BYTE_KANJI,t.BYTE,h),C=[]),y.concat(g,d,C).sort(function(B,I){return B.index-I.index}).map(function(B){return{data:B.data,mode:B.mode,length:B.length}})}function m(h,y){switch(y){case t.NUMERIC:return i.getBitsLength(h);case t.ALPHANUMERIC:return n.getBitsLength(h);case t.KANJI:return r.getBitsLength(h);case t.BYTE:return o.getBitsLength(h)}}function f(h){return h.reduce(function(y,g){const d=y.length-1>=0?y[y.length-1]:null;return d&&d.mode===g.mode?(y[y.length-1].data+=g.data,y):(y.push(g),y)},[])}function w(h){const y=[];for(let g=0;g<h.length;g++){const d=h[g];switch(d.mode){case t.NUMERIC:y.push([d,{data:d.data,mode:t.ALPHANUMERIC,length:d.length},{data:d.data,mode:t.BYTE,length:d.length}]);break;case t.ALPHANUMERIC:y.push([d,{data:d.data,mode:t.BYTE,length:d.length}]);break;case t.KANJI:y.push([d,{data:d.data,mode:t.BYTE,length:u(d.data)}]);break;case t.BYTE:y.push([{data:d.data,mode:t.BYTE,length:u(d.data)}])}}return y}function p(h,y){const g={},d={start:{}};let C=["start"];for(let b=0;b<h.length;b++){const B=h[b],I=[];for(let R=0;R<B.length;R++){const S=B[R],F=""+b+R;I.push(F),g[F]={node:S,lastCount:0},d[F]={};for(let Z=0;Z<C.length;Z++){const P=C[Z];g[P]&&g[P].node.mode===S.mode?(d[P][F]=m(g[P].lastCount+S.length,S.mode)-m(g[P].lastCount,S.mode),g[P].lastCount+=S.length):(g[P]&&(g[P].lastCount=S.length),d[P][F]=m(S.length,S.mode)+4+t.getCharCountIndicator(S.mode,y))}}C=I}for(let b=0;b<C.length;b++)d[C[b]].end=0;return{map:d,table:g}}function A(h,y){let g;const d=t.getBestModeForData(h);if(g=t.from(y,d),g!==t.BYTE&&g.bit<d.bit)throw new Error('"'+h+'" cannot be encoded with mode '+t.toString(g)+`.
 Suggested mode is: `+t.toString(d));switch(g===t.KANJI&&!a.isKanjiModeEnabled()&&(g=t.BYTE),g){case t.NUMERIC:return new i(h);case t.ALPHANUMERIC:return new n(h);case t.KANJI:return new r(h);case t.BYTE:return new o(h)}}e.fromArray=function(y){return y.reduce(function(g,d){return typeof d=="string"?g.push(A(d,null)):d.data&&g.push(A(d.data,d.mode)),g},[])},e.fromString=function(y,g){const d=E(y,a.isKanjiModeEnabled()),C=w(d),b=p(C,g),B=l.find_path(b.map,"start","end"),I=[];for(let R=1;R<B.length-1;R++)I.push(b.table[B[R]].node);return e.fromArray(f(I))},e.rawSplit=function(y){return e.fromArray(E(y,a.isKanjiModeEnabled()))}})(_t);const X=T,nt=G,pe=Wt,ye=Xt,Ce=Nt,Ee=It,at=St,lt=q,be=te,Q=Rt,Be=Lt,Ae=L,ot=_t;function Te(e,t){const i=e.size,n=Ee.getPositions(t);for(let o=0;o<n.length;o++){const r=n[o][0],s=n[o][1];for(let a=-1;a<=7;a++)if(!(r+a<=-1||i<=r+a))for(let l=-1;l<=7;l++)s+l<=-1||i<=s+l||(a>=0&&a<=6&&(l===0||l===6)||l>=0&&l<=6&&(a===0||a===6)||a>=2&&a<=4&&l>=2&&l<=4?e.set(r+a,s+l,!0,!0):e.set(r+a,s+l,!1,!0))}}function Ne(e){const t=e.size;for(let i=8;i<t-8;i++){const n=i%2===0;e.set(i,6,n,!0),e.set(6,i,n,!0)}}function Ie(e,t){const i=Ce.getPositions(t);for(let n=0;n<i.length;n++){const o=i[n][0],r=i[n][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?e.set(o+s,r+a,!0,!0):e.set(o+s,r+a,!1,!0)}}function Se(e,t){const i=e.size,n=Q.getEncodedBits(t);let o,r,s;for(let a=0;a<18;a++)o=Math.floor(a/3),r=a%3+i-8-3,s=(n>>a&1)===1,e.set(o,r,s,!0),e.set(r,o,s,!0)}function rt(e,t,i){const n=e.size,o=Be.getEncodedBits(t,i);let r,s;for(r=0;r<15;r++)s=(o>>r&1)===1,r<6?e.set(r,8,s,!0):r<8?e.set(r+1,8,s,!0):e.set(n-15+r,8,s,!0),r<8?e.set(8,n-r-1,s,!0):r<9?e.set(8,15-r-1+1,s,!0):e.set(8,15-r-1,s,!0);e.set(n-8,8,1,!0)}function Me(e,t){const i=e.size;let n=-1,o=i-1,r=7,s=0;for(let a=i-1;a>0;a-=2)for(a===6&&a--;;){for(let l=0;l<2;l++)if(!e.isReserved(o,a-l)){let u=!1;s<t.length&&(u=(t[s]>>>r&1)===1),e.set(o,a-l,u),r--,r===-1&&(s++,r=7)}if(o+=n,o<0||i<=o){o-=n,n=-n;break}}}function Pe(e,t,i){const n=new pe;i.forEach(function(l){n.put(l.mode.bit,4),n.put(l.getLength(),Ae.getCharCountIndicator(l.mode,e)),l.write(n)});const o=X.getSymbolTotalCodewords(e),r=lt.getTotalCodewordsCount(e,t),s=(o-r)*8;for(n.getLengthInBits()+4<=s&&n.put(0,4);n.getLengthInBits()%8!==0;)n.putBit(0);const a=(s-n.getLengthInBits())/8;for(let l=0;l<a;l++)n.put(l%2?17:236,8);return Re(n,e,t)}function Re(e,t,i){const n=X.getSymbolTotalCodewords(t),o=lt.getTotalCodewordsCount(t,i),r=n-o,s=lt.getBlocksCount(t,i),a=n%s,l=s-a,u=Math.floor(n/s),c=Math.floor(r/s),E=c+1,m=u-c,f=new be(m);let w=0;const p=new Array(s),A=new Array(s);let h=0;const y=new Uint8Array(e.buffer);for(let B=0;B<s;B++){const I=B<l?c:E;p[B]=y.slice(w,w+I),A[B]=f.encode(p[B]),w+=I,h=Math.max(h,I)}const g=new Uint8Array(n);let d=0,C,b;for(C=0;C<h;C++)for(b=0;b<s;b++)C<p[b].length&&(g[d++]=p[b][C]);for(C=0;C<m;C++)for(b=0;b<s;b++)g[d++]=A[b][C];return g}function ve(e,t,i,n){let o;if(Array.isArray(e))o=ot.fromArray(e);else if(typeof e=="string"){let u=t;if(!u){const c=ot.rawSplit(e);u=Q.getBestVersionForData(c,i)}o=ot.fromString(e,u||40)}else throw new Error("Invalid data");const r=Q.getBestVersionForData(o,i);if(!r)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=r;else if(t<r)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+r+`.
`);const s=Pe(t,i,o),a=X.getSymbolSize(t),l=new ye(a);return Te(l,t),Ne(l),Ie(l,t),rt(l,i,0),t>=7&&Se(l,t),Me(l,s),isNaN(n)&&(n=at.getBestMask(l,rt.bind(null,l,i))),at.applyMask(n,l),rt(l,i,n),{modules:l,version:t,errorCorrectionLevel:i,maskPattern:n,segments:o}}At.create=function(t,i){if(typeof t>"u"||t==="")throw new Error("No input text");let n=nt.M,o,r;return typeof i<"u"&&(n=nt.from(i.errorCorrectionLevel,nt.M),o=Q.from(i.version),r=at.from(i.maskPattern),i.toSJISFunc&&X.setToSJISFunction(i.toSJISFunc)),ve(t,o,n,r)};var Dt={},gt={};(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let n=i.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+i);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(r){return[r,r]}))),n.length===6&&n.push("F","F");const o=parseInt(n.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+n.slice(0,6).join("")}}e.getOptions=function(n){n||(n={}),n.color||(n.color={});const o=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,r=n.width&&n.width>=21?n.width:void 0,s=n.scale||4;return{width:r,scale:r?4:s,margin:o,color:{dark:t(n.color.dark||"#000000ff"),light:t(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},e.getScale=function(n,o){return o.width&&o.width>=n+o.margin*2?o.width/(n+o.margin*2):o.scale},e.getImageWidth=function(n,o){const r=e.getScale(n,o);return Math.floor((n+o.margin*2)*r)},e.qrToImageData=function(n,o,r){const s=o.modules.size,a=o.modules.data,l=e.getScale(s,r),u=Math.floor((s+r.margin*2)*l),c=r.margin*l,E=[r.color.light,r.color.dark];for(let m=0;m<u;m++)for(let f=0;f<u;f++){let w=(m*u+f)*4,p=r.color.light;if(m>=c&&f>=c&&m<u-c&&f<u-c){const A=Math.floor((m-c)/l),h=Math.floor((f-c)/l);p=E[a[A*s+h]?1:0]}n[w++]=p.r,n[w++]=p.g,n[w++]=p.b,n[w]=p.a}}})(gt);(function(e){const t=gt;function i(o,r,s){o.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=s,r.width=s,r.style.height=s+"px",r.style.width=s+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(r,s,a){let l=a,u=s;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),s||(u=n()),l=t.getOptions(l);const c=t.getImageWidth(r.modules.size,l),E=u.getContext("2d"),m=E.createImageData(c,c);return t.qrToImageData(m.data,r,l),i(E,u,c),E.putImageData(m,0,0),u},e.renderToDataURL=function(r,s,a){let l=a;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),l||(l={});const u=e.render(r,s,l),c=l.type||"image/png",E=l.rendererOpts||{};return u.toDataURL(c,E.quality)}})(Dt);var Ft={};const Le=gt;function bt(e,t){const i=e.a/255,n=t+'="'+e.hex+'"';return i<1?n+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':n}function it(e,t,i){let n=e+t;return typeof i<"u"&&(n+=" "+i),n}function ke(e,t,i){let n="",o=0,r=!1,s=0;for(let a=0;a<e.length;a++){const l=Math.floor(a%t),u=Math.floor(a/t);!l&&!r&&(r=!0),e[a]?(s++,a>0&&l>0&&e[a-1]||(n+=r?it("M",l+i,.5+u+i):it("m",o,0),o=0,r=!1),l+1<t&&e[a+1]||(n+=it("h",s),s=0)):o++}return n}Ft.render=function(t,i,n){const o=Le.getOptions(i),r=t.modules.size,s=t.modules.data,a=r+o.margin*2,l=o.color.light.a?"<path "+bt(o.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",u="<path "+bt(o.color.dark,"stroke")+' d="'+ke(s,r,o.margin)+'"/>',c='viewBox="0 0 '+a+" "+a+'"',m='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+c+' shape-rendering="crispEdges">'+l+u+`</svg>
`;return typeof n=="function"&&n(null,m),m};const _e=Gt,ut=At,zt=Dt,Ue=Ft;function ht(e,t,i,n,o){const r=[].slice.call(arguments,1),s=r.length,a=typeof r[s-1]=="function";if(!a&&!_e())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(o=i,i=t,t=n=void 0):s===3&&(t.getContext&&typeof o>"u"?(o=n,n=void 0):(o=n,n=i,i=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(i=t,t=n=void 0):s===2&&!t.getContext&&(n=i,i=t,t=void 0),new Promise(function(l,u){try{const c=ut.create(i,n);l(e(c,t,n))}catch(c){u(c)}})}try{const l=ut.create(i,n);o(null,e(l,t,n))}catch(l){o(l)}}ut.create;var De=ht.bind(null,zt.render),Fe=ht.bind(null,zt.renderToDataURL),ze=ht.bind(null,function(e,t,i){return Ue.render(e,i)});/*! vue-qrcode v2.0.0 | (c) 2018-present Chen Fengyuan | MIT */const Bt="ready";var Ve=Vt({name:"VueQrcode",props:{value:{type:String,default:void 0},options:{type:Object,default:void 0},tag:{type:String,default:"canvas"}},emits:[Bt],watch:{$props:{deep:!0,immediate:!0,handler(){this.$el&&this.generate()}}},mounted(){this.generate()},methods:{generate(){const e=this.options||{},t=String(this.value),i=()=>{this.$emit(Bt,this.$el)};switch(this.tag){case"canvas":De(this.$el,t,e,n=>{if(n)throw n;i()});break;case"img":Fe(t,e,(n,o)=>{if(n)throw n;this.$el.src=o,this.$el.onload=i});break;case"svg":ze(t,e,(n,o)=>{if(n)throw n;const r=document.createElement("div");r.innerHTML=o;const s=r.querySelector("svg");if(s){const{attributes:a,childNodes:l}=s;Object.keys(a).forEach(u=>{const c=a[Number(u)];this.$el.setAttribute(c.name,c.value)}),Object.keys(l).forEach(u=>{const c=l[Number(u)];this.$el.appendChild(c.cloneNode(!0))}),i()}});break}}},render(){return $t(this.tag,this.$slots.default)}});const $e={class:"text-sm text-white/70"},He={class:"text-center"},Ke={class:"text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"},Je={class:"bg-white p-4 rounded-xl mx-auto overflow-hidden mb-6 border-2 border-purple-900/50"},Oe={class:"mb-4 px-4 py-2 bg-dark-600/30 rounded-lg"},je={class:"text-xs text-white/50 truncate"},xe={class:"text-sm font-medium text-white/70 group-hover:text-white/90"},Ye={key:0,class:"mt-4 p-3 rounded-lg bg-green-500/20 border border-green-500/30"},Ze={__name:"QRShareModal",props:{shareUrl:{type:String,required:!0},title:{type:String,default:"Share Link"},buttonText:{type:String,default:"Share"}},setup(e){const t=e,i=mt(!1),n=mt(!1),o=async()=>{try{await navigator.clipboard.writeText(t.shareUrl),n.value=!0,setTimeout(()=>{n.value=!1},2e3)}catch(r){console.error("Failed to copy:",r)}};return(r,s)=>(J(),tt("div",null,[N("button",{onClick:s[0]||(s[0]=a=>i.value=!0),class:"flex items-center gap-2 px-4 py-2 bg-dark-600/50 rounded-full hover:bg-dark-500/50 transition-all duration-300"},[z(V(jt),{class:"w-4 h-4 text-blue-400"}),N("span",$e,O(e.buttonText),1)]),z(pt,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:wt(()=>[i.value?(J(),tt("div",{key:0,class:"fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4",onClick:s[3]||(s[3]=a=>i.value=!1)},[N("div",{class:"bg-dark-500/90 rounded-3xl max-w-sm w-full p-8 relative transform shadow-2xl border border-purple-900/50",onClick:s[2]||(s[2]=Ot(()=>{},["stop"]))},[N("button",{onClick:s[1]||(s[1]=a=>i.value=!1),class:"absolute -top-2 -right-2 w-8 h-8 bg-dark-600 rounded-full border-2 border-purple-900/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors"},[z(V(Yt),{class:"w-5 h-5"})]),N("div",He,[N("h3",Ke,O(e.title),1),N("div",Je,[z(V(Ve),{value:e.shareUrl,options:{width:200,margin:1,color:{dark:"#000000",light:"#FFFFFF"}},tag:"img",class:"mx-auto"},null,8,["value"])]),N("div",Oe,[N("p",je,O(e.shareUrl),1)]),N("button",{onClick:o,class:"flex items-center justify-center gap-2 w-full px-4 py-3 bg-dark-600/50 rounded-xl hover:bg-dark-700/50 transition-all duration-300 group"},[(J(),Ht(Jt(n.value?V(Qt):V(xt)),{class:Kt(["w-4 h-4",n.value?"text-green-400":"text-blue-400"])},null,8,["class"])),N("span",xe,O(n.value?"Copied!":"Copy URL"),1)]),z(pt,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"opacity-0 -translate-y-1","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition duration-150 ease-in","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 -translate-y-1"},{default:wt(()=>[n.value?(J(),tt("div",Ye,s[4]||(s[4]=[N("p",{class:"text-sm text-green-400"},"URL copied to clipboard!",-1)]))):yt("",!0)]),_:1})])])])):yt("",!0)]),_:1})]))}};export{Ze as default};