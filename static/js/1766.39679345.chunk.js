/*! For license information please see 1766.39679345.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_envimonitor=self.webpackChunksc_envimonitor||[]).push([[1766],{61766:(t,e,i)=>{i.r(e),i.d(e,{CalciteFlow:()=>h,defineCustomElement:()=>u});var o=i(5831),s=i(69307),n=i(44497);const a="frame",r="frame--advancing",c="frame--retreating",l=(0,o.GH)(class extends o.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.itemMutationObserver=(0,s.c)("mutation",(()=>this.updateFlowProps())),this.getFlowDirection=(t,e)=>t&&e>1||t>1?e<t?"retreating":"advancing":null,this.updateFlowProps=()=>{const{customItemSelectors:t,el:e,items:i}=this,o=Array.from(e.querySelectorAll("calcite-flow-item".concat(t?",".concat(t):""))).filter((t=>t.closest("calcite-flow")===e)),s=i.length,n=o.length,a=o[n-1],r=o[n-2];if(n&&a&&o.forEach((t=>{t.showBackButton=t===a&&n>1,t.hidden=t!==a})),r&&(r.menuOpen=!1),this.items=o,s!==n){const t=this.getFlowDirection(s,n);this.itemCount=n,this.flowDirection=t}},this.customItemSelectors=void 0,this.flowDirection=null,this.itemCount=0,this.items=[]}async back(){const{items:t}=this,e=t[t.length-1];if(!e)return;const i=e.beforeBack?e.beforeBack:()=>Promise.resolve();try{await i.call(e)}catch(o){return}return e.remove(),e}async setFocus(){await(0,n.c)(this);const{items:t}=this,e=t[t.length-1];return null===e||void 0===e?void 0:e.setFocus()}connectedCallback(){var t;null===(t=this.itemMutationObserver)||void 0===t||t.observe(this.el,{childList:!0,subtree:!0}),this.updateFlowProps()}async componentWillLoad(){(0,n.s)(this)}componentDidLoad(){(0,n.a)(this)}disconnectedCallback(){var t;null===(t=this.itemMutationObserver)||void 0===t||t.disconnect()}async handleItemBackClick(t){if(!t.defaultPrevented)return await this.back(),this.setFocus()}render(){const{flowDirection:t}=this,e={[a]:!0,[r]:"advancing"===t,[c]:"retreating"===t};return(0,o.h)("div",{key:"01fbee965d48cb54fa5bd1b53a3435538df84332",class:e},(0,o.h)("slot",{key:"495880eceeb04387dd1352aa00337f037ab0636c"}))}get el(){return this}static get style(){return":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0px}:host ::slotted(calcite-flow-item),:host ::slotted(calcite-panel){block-size:100%}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{animation:calcite-frame-retreat var(--calcite-animation-timing)}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5;transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5;transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-flow",{customItemSelectors:[1,"custom-item-selectors"],flowDirection:[32],itemCount:[32],items:[32],back:[64],setFocus:[64]},[[0,"calciteFlowItemBack","handleItemBackClick"]]]);function d(){if("undefined"===typeof customElements)return;["calcite-flow"].forEach((t=>{if("calcite-flow"===t)customElements.get(t)||customElements.define(t,l)}))}d();const h=l,u=d},44497:(t,e,i)=>{i.d(e,{a:()=>c,c:()=>l,s:()=>r});var o=i(5831),s=i(94975);const n=new WeakMap,a=new WeakMap;function r(t){a.set(t,new Promise((e=>n.set(t,e))))}function c(t){n.get(t)()}async function l(t){if(await function(t){return a.get(t)}(t),(0,s.i)())return(0,o.xE)(t),new Promise((t=>requestAnimationFrame((()=>t()))))}},69307:(t,e,i)=>{i.d(e,{c:()=>s});var o=i(94975);function s(t,e,i){if(!(0,o.i)())return;const s=function(t){class e extends window.MutationObserver{constructor(t){super(t),this.observedEntry=[],this.callback=t}observe(t,e){return this.observedEntry.push({target:t,options:e}),super.observe(t,e)}unobserve(t){const e=this.observedEntry.filter((e=>e.target!==t));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),e.forEach((t=>this.observe(t.target,t.options)))}}return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}(t);return new s(e,i)}}}]);
//# sourceMappingURL=1766.39679345.chunk.js.map