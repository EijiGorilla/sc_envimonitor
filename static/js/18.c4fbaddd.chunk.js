/*! For license information please see 18.c4fbaddd.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_envimonitor=self.webpackChunksc_envimonitor||[]).push([[18],{60018:(e,t,i)=>{i.r(t),i.d(t,{CalciteCheckbox:()=>s,defineCustomElement:()=>c});var o=i(35195);const s=o.C,c=o.d},35195:(e,t,i)=>{i.d(t,{C:()=>d,d:()=>u});var o=i(51554),s=i(92358),c=i(85955),n=i(14387),a=i(13160),l=i(19579),h=i(74310),r=i(47242);const d=(0,o.GH)(class extends o.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalCheckboxBlur=(0,o.yM)(this,"calciteInternalCheckboxBlur",6),this.calciteCheckboxChange=(0,o.yM)(this,"calciteCheckboxChange",6),this.calciteInternalCheckboxFocus=(0,o.yM)(this,"calciteInternalCheckboxFocus",6),this.checkedPath="M5.5 12L2 8.689l.637-.636L5.5 10.727l8.022-7.87.637.637z",this.indeterminatePath="M13 8v1H3V8z",this.getPath=()=>this.indeterminate?this.indeterminatePath:this.checked?this.checkedPath:"",this.toggle=()=>{this.disabled||(this.checked=!this.checked,this.setFocus(),this.indeterminate=!1,this.calciteCheckboxChange.emit())},this.keyDownHandler=e=>{(0,l.i)(e.key)&&(this.toggle(),e.preventDefault())},this.clickHandler=()=>{this.disabled||this.toggle()},this.onToggleBlur=()=>{this.calciteInternalCheckboxBlur.emit(!1)},this.onToggleFocus=()=>{this.calciteInternalCheckboxFocus.emit(!0)},this.onLabelClick=()=>{this.toggle()},this.checked=!1,this.disabled=!1,this.form=void 0,this.guid=void 0,this.hovered=!1,this.indeterminate=!1,this.label=void 0,this.name=void 0,this.required=!1,this.scale="m",this.value=void 0}async setFocus(){var e;await(0,r.c)(this),null===(e=this.toggleEl)||void 0===e||e.focus()}syncHiddenFormInput(e){e.type="checkbox"}connectedCallback(){this.guid=this.el.id||"calcite-checkbox-".concat((0,n.g)()),(0,a.c)(this),(0,h.c)(this),(0,c.c)(this)}disconnectedCallback(){(0,a.d)(this),(0,h.d)(this),(0,c.d)(this)}componentWillLoad(){(0,r.a)(this)}componentDidLoad(){(0,r.s)(this)}componentDidRender(){(0,a.u)(this)}render(){return(0,o.h)(o.AA,{onClick:this.clickHandler,onKeyDown:this.keyDownHandler},(0,o.h)("div",{"aria-checked":(0,s.t)(this.checked),"aria-label":(0,h.g)(this),class:"toggle",onBlur:this.onToggleBlur,onFocus:this.onToggleFocus,role:"checkbox",tabIndex:this.disabled?void 0:0,ref:e=>this.toggleEl=e},(0,o.h)("svg",{"aria-hidden":"true",class:"check-svg",viewBox:"0 0 16 16"},(0,o.h)("path",{d:this.getPath()})),(0,o.h)("slot",null)),(0,o.h)(c.H,{component:this}))}get el(){return this}static get style(){return':host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]){--calcite-checkbox-size:0.75rem}:host([scale=m]){--calcite-checkbox-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-checkbox-size:1rem}:host{position:relative;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}:host .check-svg,:host .toggle{inline-size:var(--calcite-checkbox-size);block-size:var(--calcite-checkbox-size)}:host .check-svg{pointer-events:none;box-sizing:border-box;display:block;overflow:hidden;background-color:var(--calcite-ui-foreground-1);fill:currentColor;stroke:currentColor;stroke-width:1;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);color:var(--calcite-ui-background)}:host([checked]) .check-svg,:host([indeterminate]) .check-svg{background-color:var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([hovered]) .toggle .check-svg,:host .toggle:hover .check-svg{box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}.toggle{position:relative;outline-color:transparent}.toggle:active,.toggle:focus,.toggle:focus-visible{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.toggle::after{content:"";inset-block-start:50%;inset-inline-start:50%;min-block-size:1.5rem;min-inline-size:1.5rem;position:absolute;transform:translateX(-50%) translateY(-50%)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}'}},[1,"calcite-checkbox",{checked:[1540],disabled:[516],form:[513],guid:[1537],hovered:[516],indeterminate:[1540],label:[1],name:[513],required:[516],scale:[513],value:[8],setFocus:[64]}]);function u(){if("undefined"===typeof customElements)return;["calcite-checkbox"].forEach((e=>{if("calcite-checkbox"===e)customElements.get(e)||customElements.define(e,d)}))}u()}}]);
//# sourceMappingURL=18.c4fbaddd.chunk.js.map