/*! For license information please see 738.f72ea13f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_envimonitor=self.webpackChunksc_envimonitor||[]).push([[738],{30738:(t,e,s)=>{s.r(e),s.d(e,{scopeCss:()=>y});const c="-shadowcsshost",n="-shadowcssslotted",o="-shadowcsscontext",r=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",l=new RegExp("("+c+r,"gim"),a=new RegExp("("+o+r,"gim"),i=new RegExp("("+n+r,"gim"),p=c+"-no-combinator",h=/-shadowcsshost-no-combinator([^\s]*)/,u=[/::shadow/g,/::content/g],g=/-shadowcsshost/gim,d=/:host/gim,m=/::slotted/gim,f=/:host-context/gim,x=/\/\*\s*[\s\S]*?\*\//g,_=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,w=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,v=/([{}])/g,b=/(^.*?[^\\])??((:+)(.*)|$)/,S="%BLOCK%",W=(t,e)=>{const s=k(t);let c=0;return s.escapedString.replace(w,(function(){const t=arguments.length<=2?void 0:arguments[2];let n="",o=arguments.length<=4?void 0:arguments[4],r="";o&&o.startsWith("{"+S)&&(n=s.blocks[c++],o=o.substring(8),r="{");const l=e({selector:t,content:n});return"".concat(arguments.length<=1?void 0:arguments[1]).concat(l.selector).concat(arguments.length<=3?void 0:arguments[3]).concat(r).concat(l.content).concat(o)}))},k=t=>{const e=t.split(v),s=[],c=[];let n=0,o=[];for(let r=0;r<e.length;r++){const t=e[r];"}"===t&&n--,n>0?o.push(t):(o.length>0&&(c.push(o.join("")),s.push(S),o=[]),s.push(t)),"{"===t&&n++}o.length>0&&(c.push(o.join("")),s.push(S));return{escapedString:s.join(""),blocks:c}},O=(t,e,s)=>t.replace(e,(function(){for(var t=arguments.length,e=new Array(t),c=0;c<t;c++)e[c]=arguments[c];if(e[2]){const t=e[2].split(","),c=[];for(let n=0;n<t.length;n++){const o=t[n].trim();if(!o)break;c.push(s(p,o,e[3]))}return c.join(",")}return p+e[3]})),j=(t,e,s)=>t+e.replace(c,"")+s,E=(t,e,s)=>e.indexOf(c)>-1?j(t,e,s):t+e+s+", "+e+" "+t+s,R=(t,e)=>{const s=(t=>(t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(e);return!s.test(t)},C=(t,e)=>t.replace(b,(function(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"")+e+(arguments.length>3&&void 0!==arguments[3]?arguments[3]:"")+(arguments.length>4&&void 0!==arguments[4]?arguments[4]:"")})),T=(t,e,s)=>{const c="."+(e=e.replace(/\[is=([^\]]*)\]/g,(function(t){return arguments.length<=1?void 0:arguments[1]}))),n=t=>{let n=t.trim();if(!n)return"";if(t.indexOf(p)>-1)n=((t,e,s)=>{if(g.lastIndex=0,g.test(t)){const e=".".concat(s);return t.replace(h,((t,s)=>C(s,e))).replace(g,e+" ")}return e+" "+t})(t,e,s);else{const e=t.replace(g,"");e.length>0&&(n=C(e,c))}return n},o=(t=>{const e=[];let s=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,((t,c)=>{const n="__ph-".concat(s,"__");return e.push(c),s++,n}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,((t,c,n)=>{const o="__ph-".concat(s,"__");return e.push(n),s++,c+o})),placeholders:e}})(t);let r,l="",a=0;const i=/( |>|\+|~(?!=))\s*/g;let u=!((t=o.content).indexOf(p)>-1);for(;null!==(r=i.exec(t));){const e=r[1],s=t.slice(a,r.index).trim();u=u||s.indexOf(p)>-1;const c=u?n(s):s;l+="".concat(c," ").concat(e," "),a=i.lastIndex}const d=t.substring(a);return u=u||d.indexOf(p)>-1,l+=u?n(d):d,m=o.placeholders,l.replace(/__ph-(\d+)__/g,((t,e)=>m[+e]));var m},L=(t,e,s,c,n)=>W(t,(t=>{let n=t.selector,o=t.content;"@"!==t.selector[0]?n=((t,e,s,c)=>t.split(",").map((t=>c&&t.indexOf("."+c)>-1?t.trim():R(t,e)?T(t,e,s).trim():t.trim())).join(", "))(t.selector,e,s,c):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(o=L(t.content,e,s,c));return{selector:n.replace(/\s{2,}/g," ").trim(),content:o}})),$=(t,e,s,r,h)=>{const g=((t,e)=>{const s="."+e+" > ",c=[];return t=t.replace(i,(function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(e[2]){const t=e[2].trim(),n=e[3],o=s+t+n;let r="";for(let s=e[4]-1;s>=0;s--){const t=e[5][s];if("}"===t||","===t)break;r=t+r}const l=r+o,a="".concat(r.trimRight()).concat(o.trim());if(l.trim()!==a.trim()){const t="".concat(a,", ").concat(l);c.push({orgSelector:l,updatedSelector:t})}return o}return p+e[3]})),{selectors:c,cssText:t}})(t=(t=>O(t,a,E))(t=(t=>O(t,l,j))(t=t.replace(f,o).replace(d,c).replace(m,n))),r);return t=(t=>u.reduce(((t,e)=>t.replace(e," ")),t))(t=g.cssText),e&&(t=L(t,e,s,r)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,".".concat(s))).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:g.selectors}},y=(t,e,s)=>{const c=e+"-h",n=e+"-s",o=t.match(_)||[];t=(t=>t.replace(x,""))(t);const r=[];if(s){const e=t=>{const e="/*!@___".concat(r.length,"___*/"),s="/*!@".concat(t.selector,"*/");return r.push({placeholder:e,comment:s}),t.selector=e+t.selector,t};t=W(t,(t=>"@"!==t.selector[0]?e(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=W(t.content,e),t):t))}const l=$(t,e,c,n);return t=[l.cssText,...o].join("\n"),s&&r.forEach((e=>{let{placeholder:s,comment:c}=e;t=t.replace(s,c)})),l.slottedSelectors.forEach((e=>{t=t.replace(e.orgSelector,e.updatedSelector)})),t}}}]);
//# sourceMappingURL=738.f72ea13f.chunk.js.map