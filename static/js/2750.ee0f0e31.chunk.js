/*! For license information please see 2750.ee0f0e31.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_envimonitor=self.webpackChunksc_envimonitor||[]).push([[2750],{12750:(e,t,i)=>{i.r(t),i.d(t,{CalciteSheet:()=>y,defineCustomElement:()=>x});var a=i(5831),n=i(15945),s=i(94271),o=i(44497),r=i(69307),l=i(16512),c=i(68186),d=i(98929),h=i(83946);const m="scrim",p="container",v="container--open",f="content",u="container--embedded",g=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteSheetBeforeClose=(0,a.yM)(this,"calciteSheetBeforeClose",6),this.calciteSheetClose=(0,a.yM)(this,"calciteSheetClose",6),this.calciteSheetBeforeOpen=(0,a.yM)(this,"calciteSheetBeforeOpen",6),this.calciteSheetOpen=(0,a.yM)(this,"calciteSheetOpen",6),this.openTransitionProp="opacity",this.ignoreOpenChange=!1,this.mutationObserver=(0,r.c)("mutation",(()=>this.handleMutationObserver())),this.setContentId=e=>{this.contentId=(0,n.G)(e)},this.setTransitionEl=e=>{this.transitionEl=e},this.openEnd=()=>{this.setFocus(),this.el.removeEventListener("calciteSheetOpen",this.openEnd)},this.handleOutsideClose=()=>{this.outsideCloseDisabled||(this.open=!1)},this.closeSheet=async()=>{if(this.beforeClose)try{await this.beforeClose(this.el)}catch(e){return void requestAnimationFrame((()=>{this.ignoreOpenChange=!0,this.open=!0,this.ignoreOpenChange=!1}))}this.opened=!1,this.removeOverflowHiddenClass()},this.beforeClose=void 0,this.displayMode="overlay",this.embedded=!1,this.escapeDisabled=!1,this.heightScale="m",this.focusTrapDisabled=!1,this.label=void 0,this.open=!1,this.opened=!1,this.outsideCloseDisabled=!1,this.position="inline-start",this.widthScale="m"}handleFocusTrapDisabled(e){this.open&&(e?(0,s.d)(this):(0,s.a)(this))}toggleSheet(e){this.ignoreOpenChange||(e?this.openSheet():this.closeSheet())}handleOpenedChange(){(0,l.o)(this)}async componentWillLoad(){(0,o.s)(this),this.open&&requestAnimationFrame((()=>this.openSheet()))}componentDidLoad(){(0,o.a)(this)}connectedCallback(){var e;null===(e=this.mutationObserver)||void 0===e||e.observe(this.el,{childList:!0,subtree:!0}),(0,s.c)(this)}disconnectedCallback(){var e;this.removeOverflowHiddenClass(),null===(e=this.mutationObserver)||void 0===e||e.disconnect(),(0,s.d)(this),this.embedded=!1}render(){const e=(0,n.a)(this.el);return(0,a.h)(a.AA,{key:"145f45b21fa18a08af4ef4e920d536a7e6431175","aria-describedby":this.contentId,"aria-label":this.label,"aria-modal":"true",role:"dialog"},(0,a.h)("div",{key:"796deb8baa890ad7e8f42d2e0a3be22269e450a2",class:{[p]:!0,[v]:this.opened,[u]:this.embedded,[c.C.rtl]:"rtl"===e},ref:this.setTransitionEl},(0,a.h)("calcite-scrim",{key:"c4d45b89ee32da639d1feb88289d2b0957474414",class:m,onClick:this.handleOutsideClose}),(0,a.h)("div",{key:"ad764ed7812ca7172b5f4aacf4229ae28e06d315",class:{[f]:!0},ref:this.setContentId},(0,a.h)("slot",{key:"dab54df7b8cae4bc8434935e1b55204896ed45df"}))))}handleEscape(e){!this.open||this.escapeDisabled||"Escape"!==e.key||e.defaultPrevented||(this.open=!1,e.preventDefault())}async setFocus(){await(0,o.c)(this),(0,n.f)(this.el)}async updateFocusTrapElements(){(0,s.u)(this)}onBeforeOpen(){this.calciteSheetBeforeOpen.emit()}onOpen(){this.calciteSheetOpen.emit(),(0,s.a)(this)}onBeforeClose(){this.calciteSheetBeforeClose.emit()}onClose(){this.calciteSheetClose.emit(),(0,s.d)(this)}openSheet(){this.el.addEventListener("calciteSheetOpen",this.openEnd),this.opened=!0,this.embedded||(this.initialOverflowCSS=document.documentElement.style.overflow,document.documentElement.style.setProperty("overflow","hidden"))}removeOverflowHiddenClass(){document.documentElement.style.setProperty("overflow",this.initialOverflowCSS)}handleMutationObserver(){this.updateFocusTrapElements()}get el(){return this}static get watchers(){return{focusTrapDisabled:["handleFocusTrapDisabled"],open:["toggleSheet"],opened:["handleOpenedChange"]}}static get style(){return":host{position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;visibility:hidden !important;--calcite-sheet-scrim-background-internal:rgba(0, 0, 0, 0.85);--calcite-scrim-shadow-block-start-internal:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--calcite-scrim-shadow-block-end-internal:0 -4px 8px -1px rgba(0, 0, 0, 0.08), 0 -2px 4px -1px rgba(0, 0, 0, 0.04);--calcite-scrim-shadow-inline-start-internal:4px 0 8px -1px rgba(0, 0, 0, 0.08), 2px 0 4px -1px rgba(0, 0, 0, 0.04);--calcite-scrim-shadow-inline-end-internal:-4px 0 8px -1px rgba(0, 0, 0, 0.08), -2px 0 4px -1px rgba(0, 0, 0, 0.04)}.calcite--rtl{--calcite-scrim-shadow-inline-start-internal:-4px 0 8px -1px rgba(0, 0, 0, 0.08), -2px 0 4px -1px rgba(0, 0, 0, 0.04);--calcite-scrim-shadow-inline-end-internal:4px 0 8px -1px rgba(0, 0, 0, 0.08), 2px 0 4px -1px rgba(0, 0, 0, 0.04)}.container{visibility:hidden;position:fixed;z-index:var(--calcite-z-index-overlay);display:flex;overflow-y:hidden;color:var(--calcite-color-text-2);opacity:0;transition:visibility 0ms linear var(--calcite-internal-animation-timing-medium), opacity var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88)}:host([position=inline-start]) .container{justify-content:flex-start;inset-block:0;inset-inline:0 auto;--calcite-sheet-hidden-position-internal:translate3d(-1rem, 0, 0)}:host([position=inline-end]) .container{justify-content:flex-end;inset-block:0;inset-inline:auto 0;--calcite-sheet-hidden-position-internal:translate3d(1rem, 0, 0)}:host([position=block-start]) .container{align-items:flex-start;inset-block:0 auto;inset-inline:0;--calcite-sheet-hidden-position-internal:translate3d(0, -1rem, 0)}:host([position=block-end]) .container{align-items:flex-end;inset-block:auto 0;inset-inline:0;--calcite-sheet-hidden-position-internal:translate3d(0, 1rem, 0)}:host([display-mode=float]) .content{--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([display-mode=overlay][position=inline-start]) .container{box-shadow:var(--calcite-scrim-shadow-inline-start-internal)}:host([display-mode=overlay][position=inline-end]) .container{box-shadow:var(--calcite-scrim-shadow-inline-end-internal)}:host([display-mode=overlay][position=block-start]) .container{box-shadow:var(--calcite-scrim-shadow-block-start-internal)}:host([display-mode=overlay][position=block-end]) .container{box-shadow:var(--calcite-scrim-shadow-block-end-internal)}:host([position^=inline]) .container,:host([position^=inline]) .content{inline-size:var(--calcite-sheet-width-internal);max-inline-size:var(--calcite-sheet-max-width-internal);min-inline-size:var(--calcite-sheet-min-width-internal)}:host([position^=block]) .container,:host([position^=block]) .content{block-size:var(--calcite-sheet-height-internal);max-block-size:var(--calcite-sheet-max-height-internal);min-block-size:var(--calcite-sheet-min-height-internal)}:host([display-mode=float][position^=inline]) .container{block-size:calc(100% - 1.5rem);max-block-size:calc(100% - 1.5rem);min-block-size:calc(100% - 1.5rem)}:host([display-mode=float][position^=block]) .container{inline-size:calc(100% - 1.5rem);max-inline-size:calc(100% - 1.5rem);min-inline-size:calc(100% - 1.5rem)}:host([position^=inline][width-scale=s]){--calcite-sheet-width-internal:var(--calcite-sheet-width, 15vw);--calcite-sheet-max-width-internal:var(--calcite-sheet-max-width, 360px);--calcite-sheet-min-width-internal:var(--calcite-sheet-min-width, 260px)}:host([position^=inline][width-scale=m]){--calcite-sheet-width-internal:var(--calcite-sheet-width, 25vw);--calcite-sheet-max-width-internal:var(--calcite-sheet-max-width, 420px);--calcite-sheet-min-width-internal:var(--calcite-sheet-min-width, 300px)}:host([position^=inline][width-scale=l]){--calcite-sheet-width-internal:var(--calcite-sheet-width, 45vw);--calcite-sheet-max-width-internal:var(--calcite-sheet-max-width, 680px);--calcite-sheet-min-width-internal:var(--calcite-sheet-min-width, 340px)}:host([position^=block][height-scale=s]){--calcite-sheet-min-height-internal:var(--calcite-sheet-min-height, 160px);--calcite-sheet-height-internal:var(--calcite-sheet-height, 30vh);--calcite-sheet-max-height-internal:var(--calcite-sheet-max-height, 30vh)}:host([position^=block][height-scale=m]){--calcite-sheet-min-height-internal:var(--calcite-sheet-min-height, 200px);--calcite-sheet-height-internal:var(--calcite-sheet-height, 45vh);--calcite-sheet-max-height-internal:var(--calcite-sheet-max-height, 50vh)}:host([position^=block][height-scale=l]){--calcite-sheet-min-height-internal:var(--calcite-sheet-min-height, 240px);--calcite-sheet-height-internal:var(--calcite-sheet-height, 60vh);--calcite-sheet-max-height-internal:var(--calcite-sheet-max-height, 70vh)}.scrim{--calcite-scrim-background:var(--calcite-sheet-scrim-background, var(--calcite-sheet-scrim-background-internal));position:fixed;inset:0px;display:flex;overflow-y:hidden}:host([opened]){visibility:visible !important}.content{position:relative;z-index:var(--calcite-z-index-modal);box-sizing:border-box;display:block;max-block-size:100%;max-inline-size:100%;overflow-y:hidden;padding:0px;background-color:var(--calcite-color-foreground-1);max-block-size:100%;visibility:hidden;transition:transform var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear var(--calcite-internal-animation-timing-medium), opacity var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88);transform:var(--calcite-sheet-hidden-position-internal)}.container--open .content{transform:translate3d(0, 0, 0)}:host([display-mode=float]) .content,:host([display-mode=float]) .container{border-radius:0.25rem}:host([display-mode=float]) .container{padding:0.75rem}.container--open{visibility:visible;opacity:1;transition-delay:0ms}.container--open .content{pointer-events:auto;visibility:visible;opacity:1;transition:transform var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-inline-size var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-block-size var(--calcite-internal-animation-timing-medium) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition-delay:0ms}:host([position=inline-start]) .content,:host([position=inline-end]) .content{block-size:100%}:host([position=block-start]) .content,:host([position=block-end]) .content{inline-size:100%}:host([position]) .container--embedded{pointer-events:auto;position:absolute;inline-size:100%;max-inline-size:100%;min-inline-size:100%;block-size:100%;max-block-size:100%;min-block-size:100%}:host([position]) .container--embedded calcite-scrim{position:absolute}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-sheet",{beforeClose:[16],displayMode:[513,"display-mode"],embedded:[4],escapeDisabled:[516,"escape-disabled"],heightScale:[513,"height-scale"],focusTrapDisabled:[516,"focus-trap-disabled"],label:[1],open:[1540],opened:[1540],outsideCloseDisabled:[516,"outside-close-disabled"],position:[513],widthScale:[513,"width-scale"],setFocus:[64],updateFocusTrapElements:[64]},[[8,"keydown","handleEscape"]],{focusTrapDisabled:["handleFocusTrapDisabled"],open:["toggleSheet"],opened:["handleOpenedChange"]}]);function b(){if("undefined"===typeof customElements)return;["calcite-sheet","calcite-loader","calcite-scrim"].forEach((e=>{switch(e){case"calcite-sheet":customElements.get(e)||customElements.define(e,g);break;case"calcite-loader":customElements.get(e)||(0,d.d)();break;case"calcite-scrim":customElements.get(e)||(0,h.d)()}}))}b();const y=g,x=b},44497:(e,t,i)=>{i.d(t,{a:()=>l,c:()=>c,s:()=>r});var a=i(5831),n=i(94975);const s=new WeakMap,o=new WeakMap;function r(e){o.set(e,new Promise((t=>s.set(e,t))))}function l(e){s.get(e)()}async function c(e){if(await function(e){return o.get(e)}(e),(0,n.i)())return(0,a.xE)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},98929:(e,t,i)=>{i.d(t,{L:()=>r,d:()=>l});var a=i(5831),n=i(62967),s=i(8793);const o={loader:"loader",loaderParts:"loader__svgs",loaderPart:"loader__svg",loaderPartId:e=>"".concat(o.loaderPart,"--").concat(e),loaderText:"loader__text",loaderPercentage:"loader__percentage"},r=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.formatValue=()=>"determinate-value"!==this.type?"".concat(this.value):this.formatter.format(this.value/100),this.complete=!1,this.inline=!1,this.label=void 0,this.scale="m",this.type="indeterminate",this.value=0,this.text="",this.effectiveLocale=""}valueChangeHandler(){this.complete=this.type.startsWith("determinate")&&100===this.value}connectedCallback(){(0,s.c)(this),this.updateFormatter()}disconnectedCallback(){(0,s.d)(this)}componentWillLoad(){requestAnimationFrame((()=>this.valueChangeHandler()))}render(){const{el:e,inline:t,label:i,scale:s,text:r,type:l,value:c}=this,d=e.id||(0,n.g)(),h=t?this.getInlineSize(s):this.getSize(s),m=.45*h,p="0 0 ".concat(h," ").concat(h),v=l.startsWith("determinate"),f=2*m*Math.PI,u=c/100*f,g=f-u,b=Math.floor(c),y={"stroke-dasharray":"".concat(u," ").concat(g)};return(0,a.h)(a.AA,{key:"8272bdfae9fff51b19ed8fa66197eb93b53feb4c","aria-label":i,"aria-valuemax":v?"100":void 0,"aria-valuemin":v?"0":void 0,"aria-valuenow":v?b.toString():void 0,id:d,role:"progressbar"},(0,a.h)("div",{key:"3d410c178af39bb57cc478bdd06c0392f6ba71a3",class:o.loaderParts},[1,2,3].map((e=>(0,a.h)("svg",{"aria-hidden":"true",class:{[o.loaderPart]:!0,[o.loaderPartId(e)]:!0},key:e,style:v&&3===e?y:void 0,viewBox:p},(0,a.h)("circle",{cx:h/2,cy:h/2,r:m})))),v&&(0,a.h)("div",{key:"4ccc633930dee031bf769908d712df39e0677bbb",class:o.loaderPercentage},this.formatValue())),r&&(0,a.h)("div",{key:"6d0d51988bdfafee2a19faed9e14d3bda06d79b5",class:o.loaderText},r))}formatterPropsChange(){this.updateFormatter()}getSize(e){return{s:32,m:56,l:80}[e]}getInlineSize(e){return{s:12,m:16,l:20}[e]}updateFormatter(){var e;"determinate-value"===this.type&&(null===(e=this.formatter)||void 0===e?void 0:e.resolvedOptions().locale)!==this.effectiveLocale&&(this.formatter=new Intl.NumberFormat(this.effectiveLocale,{style:"percent"}))}get el(){return this}static get watchers(){return{value:["valueChangeHandler"],effectiveLocale:["formatterPropsChange"],type:["formatterPropsChange"]}}static get style(){return'@charset "UTF-8";@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{position:relative;margin-inline:auto;display:none;align-items:center;justify-content:center;opacity:1;min-block-size:var(--calcite-loader-size);font-size:var(--calcite-loader-font-size);stroke:var(--calcite-color-brand);stroke-width:3;fill:none;transform:scale(1, 1);animation:loader-color-shift calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 2 / var(--calcite-internal-duration-factor)) alternate-reverse infinite linear;padding-block:var(--calcite-loader-padding, 4rem);will-change:contents}:host([scale=s]){--calcite-loader-font-size:var(--calcite-font-size--3);--calcite-loader-size:2rem;--calcite-loader-size-inline:0.75rem;--calcite-internal-loader-value-line-height:0.625rem}:host([scale=m]){--calcite-loader-font-size:var(--calcite-font-size-0);--calcite-loader-size:4rem;--calcite-loader-size-inline:1rem;--calcite-internal-loader-value-line-height:1.375rem}:host([scale=l]){--calcite-loader-font-size:var(--calcite-font-size-2);--calcite-loader-size:6rem;--calcite-loader-size-inline:1.5rem;--calcite-internal-loader-value-line-height:1.71875rem}:host([no-padding]){padding-block:0px}:host{display:flex}.loader__text{display:block;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-color-text-1);margin-block-start:calc(var(--calcite-loader-size) + 1.5rem)}.loader__percentage{display:block;text-align:center;color:var(--calcite-color-text-1);font-size:var(--calcite-loader-font-size);inline-size:var(--calcite-loader-size);line-height:var(--calcite-internal-loader-value-line-height);align-self:center}.loader__svgs{position:absolute;overflow:visible;opacity:1;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.66 / var(--calcite-internal-duration-factor));animation-name:loader-clockwise;display:flex}.loader__svg{position:absolute;inset-block-start:0px;transform-origin:center;overflow:visible;inset-inline-start:0;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);animation-iteration-count:infinite;animation-timing-function:linear}.loader__svg--1{animation-name:loader-offset-1}.loader__svg--2{animation-name:loader-offset-2}.loader__svg--3{animation-name:loader-offset-3}:host([type=determinate]),:host([type=determinate-value]){animation:none;stroke:var(--calcite-color-border-3)}:host([type=determinate]) .loader__svgs,:host([type=determinate-value]) .loader__svgs{animation:none}:host([type=determinate]) .loader__svg--3,:host([type=determinate-value]) .loader__svg--3{animation:none;stroke:var(--calcite-color-brand);stroke-dasharray:150.79632;transform:rotate(-90deg);transition:all var(--calcite-internal-animation-timing-fast) linear}:host([inline]){position:relative;margin:0px;animation:none;stroke:currentColor;stroke-width:2;padding-block:0px;block-size:var(--calcite-loader-size-inline);min-block-size:var(--calcite-loader-size-inline);inline-size:var(--calcite-loader-size-inline);margin-inline-end:calc(var(--calcite-loader-size-inline) * 0.5);vertical-align:calc(var(--calcite-loader-size-inline) * -1 * 0.2)}:host([inline]) .loader__svgs{inset-block-start:0px;margin:0px;inset-inline-start:0;inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([inline]) .loader__svg{inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([complete]){opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity var(--calcite-internal-animation-timing-medium) linear 1000ms, transform var(--calcite-internal-animation-timing-medium) linear 1000ms}:host([complete]) .loader__svgs{opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms, transform calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms}:host([complete]) .loader__percentage{color:var(--calcite-color-brand);transform:scale(1.05, 1.05);transform-origin:center;transition:color var(--calcite-internal-animation-timing-medium) linear, transform var(--calcite-internal-animation-timing-medium) linear}.loader__svg--1{stroke-dasharray:27.9252444444 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 4.8 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-1{0%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-83.7757333333}100%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:-279.2524444444}}.loader__svg--2{stroke-dasharray:55.8504888889 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.4 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-2{0%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-97.7383555556}100%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:-279.2524444444}}.loader__svg--3{stroke-dasharray:13.9626222222 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 7.734 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-3{0%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-76.7944222222}100%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:-279.2524444444}}@keyframes loader-color-shift{0%{stroke:var(--calcite-color-brand)}33%{stroke:var(--calcite-color-brand-press)}66%{stroke:var(--calcite-color-brand-hover)}100%{stroke:var(--calcite-color-brand)}}@keyframes loader-clockwise{100%{transform:rotate(360deg)}}:host([hidden]){display:none}[hidden]{display:none}'}},[1,"calcite-loader",{complete:[1540],inline:[516],label:[1],scale:[513],type:[513],value:[2],text:[1],effectiveLocale:[32]},void 0,{value:["valueChangeHandler"],effectiveLocale:["formatterPropsChange"],type:["formatterPropsChange"]}]);function l(){if("undefined"===typeof customElements)return;["calcite-loader"].forEach((e=>{if("calcite-loader"===e)customElements.get(e)||customElements.define(e,r)}))}l()},16512:(e,t,i)=>{i.d(t,{o:()=>r});var a=i(5831),n=i(15945);const s=a.wj;function o(e){return"opened"in e?e.opened:e.open}function r(e){s((()=>{e.transitionEl&&(0,n.w)(e.transitionEl,e.openTransitionProp,(()=>{o(e)?e.onBeforeOpen():e.onBeforeClose()}),(()=>{o(e)?e.onOpen():e.onClose()}))}))}},83946:(e,t,i)=>{i.d(t,{S:()=>p,d:()=>v});var a=i(5831),n=i(8793),s=i(66804),o=i(69307),r=i(15945),l=i(98929);const c="scrim",d="content",h=72,m=480,p=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.resizeObserver=(0,o.c)("resize",(()=>this.handleResize())),this.handleDefaultSlotChange=e=>{this.hasContent=(0,r.r)(e)},this.storeLoaderEl=e=>{this.loaderEl=e,this.handleResize()},this.loading=!1,this.messages=void 0,this.messageOverrides=void 0,this.loaderScale=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.hasContent=!1}onMessagesChange(){}effectiveLocaleChange(){(0,s.u)(this,this.effectiveLocale)}connectedCallback(){var e;(0,n.c)(this),(0,s.c)(this),null===(e=this.resizeObserver)||void 0===e||e.observe(this.el)}async componentWillLoad(){await(0,s.s)(this)}disconnectedCallback(){var e;(0,n.d)(this),(0,s.d)(this),null===(e=this.resizeObserver)||void 0===e||e.disconnect()}render(){const{hasContent:e,loading:t,messages:i}=this;return(0,a.h)("div",{key:"286b03bb4a18b45f1b6914684a5178e952a44127",class:c},t?(0,a.h)("calcite-loader",{label:i.loading,ref:this.storeLoaderEl,scale:this.loaderScale}):null,(0,a.h)("div",{key:"0f8cd111720239b204d0d201610c4145d5616753",class:d,hidden:!e},(0,a.h)("slot",{key:"fe7bbced9871c9179971da0ef7ca07ea1c9ac33e",onSlotchange:this.handleDefaultSlotChange})))}getScale(e){return e<h?"s":e>=m?"l":"m"}handleResize(){var e;const{loaderEl:t,el:i}=this;t&&(this.loaderScale=this.getScale(null!==(e=Math.min(i.clientHeight,i.clientWidth))&&void 0!==e?e:0))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{--calcite-scrim-background:var(--calcite-color-transparent-scrim);position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-color-transparent-scrim))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-scrim",{loading:[516],messages:[1040],messageOverrides:[1040],loaderScale:[32],defaultMessages:[32],effectiveLocale:[32],hasContent:[32]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function v(){if("undefined"===typeof customElements)return;["calcite-scrim","calcite-loader"].forEach((e=>{switch(e){case"calcite-scrim":customElements.get(e)||customElements.define(e,p);break;case"calcite-loader":customElements.get(e)||(0,l.d)()}}))}v()},66804:(e,t,i)=>{i.d(t,{c:()=>v,d:()=>f,s:()=>h,u:()=>p});var a=i(9236),n=i(5831),s=i(8793),o=i(94975);const r={};function l(){throw new Error("could not fetch component message bundle")}function c(e){e.messages=(0,a.Z)((0,a.Z)({},e.defaultMessages),e.messageOverrides)}function d(){}async function h(e){e.defaultMessages=await m(e,e.effectiveLocale),c(e)}async function m(e,t){if(!(0,o.i)())return{};const{el:i}=e,a=i.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const i="".concat(t,"_").concat(e);return r[i]||(r[i]=fetch((0,n.K3)("./assets/".concat(t,"/t9n/messages_").concat(e,".json"))).then((e=>(e.ok||l(),e.json()))).catch((()=>l()))),r[i]}((0,s.g)(t,"t9n"),a)}async function p(e,t){e.defaultMessages=await m(e,t),c(e)}function v(e){e.onMessagesChange=u}function f(e){e.onMessagesChange=d}function u(){c(this)}}}]);
//# sourceMappingURL=2750.ee0f0e31.chunk.js.map