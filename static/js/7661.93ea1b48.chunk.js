"use strict";(self.webpackChunksc_envimonitor=self.webpackChunksc_envimonitor||[]).push([[7661],{57661:(e,t,n)=>{n.d(t,{$A:()=>i,Ml:()=>a,NM:()=>c,i$:()=>s});var r=n(93169),o=n(68401);class c{constructor(e){this.data=e,this.type="encoded-mesh-texture",this.encoding=o.Ti.KTX2_ENCODING}}function i(e){return"encoded-mesh-texture"===(null===e||void 0===e?void 0:e.type)}async function s(e){const t=new Blob([e]),n=await t.text();return JSON.parse(n)}async function a(e,t){if(t===o.Ti.KTX2_ENCODING)return new c(e);const n=new Blob([e],{type:t}),i=URL.createObjectURL(n),s=new Image;if((0,r.Z)("esri-iPhone"))return new Promise(((e,t)=>{const n=()=>{o(),e(s)},r=e=>{o(),t(e)},o=()=>{URL.revokeObjectURL(i),s.removeEventListener("load",n),s.removeEventListener("error",r)};s.addEventListener("load",n),s.addEventListener("error",r),s.src=i}));try{s.src=i,await s.decode()}catch(a){console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(i),s}}}]);
//# sourceMappingURL=7661.93ea1b48.chunk.js.map