/*! For license information please see 4976.565c77f5.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_envimonitor=self.webpackChunksc_envimonitor||[]).push([[4976],{34976:(e,t,i)=>{i.r(t),i.d(t,{CalciteMenuItem:()=>F,defineCustomElement:()=>D});var n=i(51554),o=i(92358),s=i(47242),a=i(52655),r=i(46895),c=i(65138),l=i(57601),u=i(91438),h=i(53128);const d="container",m="content",p="dropdown--vertical",v="dropdown-menu-items",f="dropdown-action",b="layout--vertical",g="hover-href-icon",y="icon",I="icon--breadcrumb",k="icon--dropdown",w="icon--end",x="icon--start",L="parent--vertical",E="item-content",M="open",S="nested",C="text-container",A=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalMenuItemKeyEvent=(0,n.yM)(this,"calciteInternalMenuItemKeyEvent",7),this.calciteMenuItemSelect=(0,n.yM)(this,"calciteMenuItemSelect",7),this.clickHandler=e=>{(this.href&&e.target===this.dropdownActionEl||!this.href&&this.hasSubmenu)&&(this.open=!this.open),this.selectMenuItem(e)},this.handleMenuItemSlotChange=e=>{this.submenuItems=(0,o.s)(e),this.submenuItems.forEach((e=>{e.topLevelMenuLayout||(e.topLevelMenuLayout=this.topLevelMenuLayout)})),this.hasSubmenu=this.submenuItems.length>0},this.keyDownHandler=async e=>{if(" "===e.key||"Enter"===e.key)this.selectMenuItem(e),this.hasSubmenu&&(!this.href||this.href&&e.target===this.dropdownActionEl)&&(this.open=!this.open),e.preventDefault();else if("Escape"===e.key){if(this.open)return void(this.open=!1);this.calciteInternalMenuItemKeyEvent.emit({event:e}),e.preventDefault()}else if("ArrowDown"===e.key||"ArrowUp"===e.key){if(e.preventDefault(),(e.target===this.dropdownActionEl||!this.href)&&this.hasSubmenu&&!this.open&&"horizontal"===this.layout)return void(this.open=!0);this.calciteInternalMenuItemKeyEvent.emit({event:e,children:this.submenuItems,isSubmenuOpen:this.open&&this.hasSubmenu})}else if("ArrowLeft"===e.key)e.preventDefault(),this.calciteInternalMenuItemKeyEvent.emit({event:e,children:this.submenuItems,isSubmenuOpen:!0});else if("ArrowRight"===e.key){if(e.preventDefault(),(e.target===this.dropdownActionEl||!this.href)&&this.hasSubmenu&&!this.open&&"vertical"===this.layout)return void(this.open=!0);this.calciteInternalMenuItemKeyEvent.emit({event:e,children:this.submenuItems,isSubmenuOpen:this.open&&this.hasSubmenu})}},this.active=void 0,this.breadcrumb=void 0,this.href=void 0,this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconStart=void 0,this.isTopLevelItem=!1,this.label=void 0,this.layout=void 0,this.messageOverrides=void 0,this.messages=void 0,this.open=!1,this.rel=void 0,this.target=void 0,this.text=void 0,this.topLevelMenuLayout=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.hasSubmenu=!1,this.submenuItems=void 0}onMessagesChange(){}effectiveLocaleChange(){(0,a.u)(this,this.effectiveLocale)}async setFocus(){await(0,s.c)(this),this.anchorEl.focus()}handleClickOut(e){"vertical"!==this.topLevelMenuLayout&&this.hasSubmenu&&this.open&&!e.composedPath().includes(this.el)&&(this.open=!1)}handleFocusOut(e){"vertical"===this.topLevelMenuLayout||this.el.contains(e.relatedTarget)||(this.open=!1)}connectedCallback(){(0,r.c)(this),(0,a.c)(this)}async componentWillLoad(){(0,s.a)(this),await(0,a.s)(this)}componentDidLoad(){(0,s.s)(this)}disconnectedCallback(){(0,r.d)(this),(0,a.d)(this)}blurHandler(){this.isFocused=!1}focusHandler(e){const t=e.target;this.isFocused=!0,t.open&&!this.open&&(t.open=!1)}selectMenuItem(e){e.target!==this.dropdownActionEl&&this.calciteMenuItemSelect.emit()}renderIconStart(){return(0,n.h)("calcite-icon",{class:"".concat(y," ").concat(x),flipRtl:"start"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconStart,key:x,scale:"s"})}renderIconEnd(){return(0,n.h)("calcite-icon",{class:"".concat(y," ").concat(w),flipRtl:"end"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconEnd,key:w,scale:"s"})}renderBreadcrumbIcon(e){return(0,n.h)("calcite-icon",{class:"".concat(y," ").concat(I),icon:"rtl"===e?"chevron-left":"chevron-right",key:I,scale:"s"})}renderDropdownIcon(e){const t="rtl"===e?"chevron-left":"chevron-right";return(0,n.h)("calcite-icon",{class:"".concat(y," ").concat(k),icon:"vertical"===this.topLevelMenuLayout||this.isTopLevelItem?this.open?"chevron-up":"chevron-down":t,key:k,scale:"s"})}renderDropdownAction(e){const t="rtl"===e?"chevron-left":"chevron-right";return(0,n.h)("calcite-action",{class:f,icon:"vertical"===this.topLevelMenuLayout||this.isTopLevelItem?this.open?"chevron-up":"chevron-down":t,key:f,onClick:this.clickHandler,onKeyDown:this.keyDownHandler,text:this.messages.open,ref:e=>this.dropdownActionEl=e})}renderSubmenuItems(e){return(0,n.h)("calcite-menu",{class:{[v]:!0,[M]:this.open,[S]:!this.isTopLevelItem,[o.C.rtl]:"rtl"===e,[p]:"vertical"===this.topLevelMenuLayout},label:this.messages.submenu,layout:"vertical",role:"menu"},(0,n.h)("slot",{name:"submenu-item",onSlotchange:this.handleMenuItemSlotChange}))}renderHrefIcon(e){return(0,n.h)("calcite-icon",{class:g,icon:"rtl"===e?"arrow-left":"arrow-right",key:g,scale:"s"})}renderItemContent(e){const t=this.href&&("vertical"===this.topLevelMenuLayout||!this.isTopLevelItem);return(0,n.h)(n.HY,null,this.iconStart&&this.renderIconStart(),(0,n.h)("div",{class:C},(0,n.h)("span",null,this.text)),t&&this.renderHrefIcon(e),this.iconEnd&&this.renderIconEnd(),this.breadcrumb?this.renderBreadcrumbIcon(e):null,!this.href&&this.hasSubmenu?this.renderDropdownIcon(e):null)}render(){const e=(0,o.b)(this.el);return(0,n.h)(n.AA,{onBlur:this.blurHandler,onFocus:this.focusHandler},(0,n.h)("li",{class:{[d]:!0,[L]:"vertical"===this.topLevelMenuLayout},role:"none"},(0,n.h)("div",{class:E},(0,n.h)("a",{"aria-current":!!this.isFocused&&"page","aria-expanded":this.open,"aria-haspopup":this.hasSubmenu,"aria-label":this.label,class:{[b]:"vertical"===this.layout,[m]:!0},href:this.href,onClick:this.clickHandler,onKeyDown:this.keyDownHandler,rel:this.rel,role:"menuitem",tabIndex:this.isTopLevelItem?0:-1,target:this.target,ref:e=>this.anchorEl=e},this.renderItemContent(e)),this.href&&this.hasSubmenu?this.renderDropdownAction(e):null),this.renderSubmenuItems(e)))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return':host{position:relative;box-sizing:border-box;display:flex;align-items:center;flex-shrink:0}:host .container,:host .item-content,:host .content{min-block-size:3rem}:host([layout=vertical]){inline-size:100%}:host(:not([layout=vertical])){block-size:100%}.container,.item-content{display:flex;block-size:100%;inline-size:100%;flex-direction:row;align-items:stretch}.content{position:relative;box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;cursor:pointer;align-items:center;justify-content:center;background-color:var(--calcite-ui-foreground-1);padding-inline:1rem;font-size:var(--calcite-font-size-0);color:var(--calcite-ui-text-2);outline:2px solid transparent;outline-offset:2px;text-decoration:none;border-block-end:0.125rem solid transparent;padding-block-start:0.125rem}.content:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-2)}.content:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-2);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.content:active{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}.content span{display:inline-flex}.content.layout--vertical{display:flex;inline-size:100%;justify-content:flex-start;padding-block:1rem;border-block-end:0;border-inline-end:0.25rem solid transparent}:host([active]) .content{color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-brand)}:host([active]) .content .icon{--calcite-ui-icon-color:var(--calcite-ui-brand)}:host([layout=vertical]) .content{padding-inline:0.75rem}.icon--start{margin-inline-end:0.75rem}.icon--end{margin-inline-start:0.75rem}:host([layout=vertical]) .icon--end{margin-inline-start:auto;padding-inline-start:0.75rem}.icon--dropdown{position:relative;margin-inline-start:auto;margin-inline-end:0px;padding-inline-start:0.5rem;--calcite-ui-icon-color:var(--calcite-ui-text-3)}:host([layout=vertical]) .icon--end~.icon--dropdown{margin-inline-start:0.75rem}:host([layout=vertical]) .hover-href-icon{padding-inline-start:0.5rem}:host([layout=vertical]) .hover-href-icon~.icon--end{margin-inline-start:0.5rem}:host([layout=vertical]) .hover-href-icon~.icon--breadcrumb{margin-inline-start:0.75rem}.icon--breadcrumb{margin-inline-end:0px;padding-inline-start:0.5rem;--calcite-ui-icon-color:var(--calcite-ui-text-3)}:host([layout=vertical]) .icon--breadcrumb{margin-inline-start:auto}:host([layout=vertical]) .icon--breadcrumb~.icon--dropdown{margin-inline-start:0.5rem}:host([layout=vertical]) .icon--end~.icon--breadcrumb{margin-inline-start:0.5rem}:host([breadcrumb]) .content{padding-inline-end:0.75rem}calcite-action{position:relative;block-size:auto;border-inline-start:1px solid var(--calcite-ui-foreground-1)}calcite-action:after{position:absolute;inset-inline-start:-1px;display:block;inline-size:1px;content:"";inset-block:0.75rem;background-color:var(--calcite-ui-border-3)}calcite-action:hover:after{block-size:100%;inset-block:0}.content:focus~calcite-action,.content:hover~calcite-action{color:var(--calcite-ui-text-1);border-inline-start:1px solid var(--calcite-ui-border-3)}.container:hover .dropdown-action{background-color:var(--calcite-ui-foreground-2)}.dropdown-menu-items{position:absolute;display:none;block-size:auto;min-inline-size:100%;flex-direction:column;overflow:visible;border:1px solid var(--calcite-ui-border-3);background:var(--calcite-ui-foreground-1);inset-block-start:100%;z-index:var(--calcite-app-z-index-dropdown)}.dropdown-menu-items.open{display:block}.dropdown-menu-items.nested{position:absolute;inset-block-start:-1px;transform:translateX(calc(100% - 2px))}.parent--vertical{flex-direction:column}.dropdown--vertical.dropdown-menu-items{position:relative;border-radius:0px;box-shadow:none;inset-block-start:0;transform:none}.dropdown--vertical.dropdown-menu-items:last-of-type{border-inline:0}:host([layout=vertical]:last-of-type) .dropdown-menu-items{border-block-end:0}:host([slot=submenu-item]) .parent--vertical{padding-inline-start:1.5rem}.dropdown-menu-items.nested.calcite--rtl{transform:translateX(calc(-100% + 2px))}.dropdown--vertical.dropdown-menu-items.nested.calcite--rtl{transform:none}.hover-href-icon{position:relative;inset-inline-end:0.25rem;margin-inline-start:auto;opacity:0;transition:all var(--calcite-internal-animation-timing-medium) ease-in-out}.content:focus .hover-href-icon,.content:hover .hover-href-icon{inset-inline-end:-0.25rem;opacity:1}:host([hidden]){display:none}[hidden]{display:none}'}},[1,"calcite-menu-item",{active:[516],breadcrumb:[516],href:[1],iconEnd:[513,"icon-end"],iconFlipRtl:[513,"icon-flip-rtl"],iconStart:[513,"icon-start"],isTopLevelItem:[4,"is-top-level-item"],label:[1],layout:[513],messageOverrides:[1040],messages:[1040],open:[1540],rel:[513],target:[513],text:[1],topLevelMenuLayout:[1,"top-level-menu-layout"],defaultMessages:[32],effectiveLocale:[32],hasSubmenu:[32],submenuItems:[32],setFocus:[64]},[[8,"click","handleClickOut"],[0,"focusout","handleFocusOut"]]]);function z(){if("undefined"===typeof customElements)return;["calcite-menu-item","calcite-action","calcite-icon","calcite-loader","calcite-menu"].forEach((e=>{switch(e){case"calcite-menu-item":customElements.get(e)||customElements.define(e,A);break;case"calcite-action":customElements.get(e)||(0,c.d)();break;case"calcite-icon":customElements.get(e)||(0,l.d)();break;case"calcite-loader":customElements.get(e)||(0,u.d)();break;case"calcite-menu":customElements.get(e)||(0,h.d)()}}))}z();const F=A,D=z},88818:(e,t,i)=>{i.d(t,{u:()=>u,w:()=>l});var n=i(72021);const o=["lang","role","aria-expanded"],s=new Map;let a;function r(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const{el:n}=e,s=i?e.globalAttributes:{};t.filter((e=>!!o.includes(e)&&!!n.hasAttribute(e))).forEach((e=>{const t=n.getAttribute(e);null!==t&&(s[e]=t)})),e.globalAttributes=s}function c(e){e.forEach((e=>{let{target:t}=e;const[i,n]=s.get(t);r(i,n.attributeFilter)}))}function l(e,t){const{el:i}=e,o={attributeFilter:t};s.set(i,[e,o]),r(e,t,!0),a||(a=(0,n.c)("mutation",c)),a.observe(i,o)}function u(e){s.delete(e.el),c(a.takeRecords()),a.disconnect();for(const[t,[,i]]of s.entries())a.observe(t,i)}},53128:(e,t,i)=>{i.d(t,{C:()=>l,d:()=>u});var n=i(51554),o=i(92358),s=i(47242),a=i(46895),r=i(52655),c=i(88818);const l=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.menuItems=[],this.handleMenuSlotChange=e=>{this.menuItems=(0,o.s)(e),this.setMenuItemLayout(this.menuItems,this.layout)},this.label=void 0,this.layout="horizontal",this.messageOverrides=void 0,this.messages=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.globalAttributes={role:"menubar"}}handleLayoutChange(e){this.setMenuItemLayout(this.menuItems,e)}onMessagesChange(){}effectiveLocaleChange(){(0,r.u)(this,this.effectiveLocale)}connectedCallback(){(0,a.c)(this),(0,r.c)(this),(0,c.w)(this,["role"])}async componentWillLoad(){(0,s.a)(this),await(0,r.s)(this)}componentDidLoad(){(0,s.s)(this)}disconnectedCallback(){(0,a.d)(this),(0,r.d)(this),(0,c.u)(this)}async setFocus(){await(0,s.c)(this),this.el.focus()}calciteInternalNavMenuItemKeyEvent(e){const t=e.target,i=e.detail.children,n=e.detail.event.key;e.stopPropagation(),"ArrowDown"===n?"vertical"===t.layout?(0,o.i)(this.menuItems,t,"next",!1):e.detail.isSubmenuOpen&&i[0].setFocus():"ArrowUp"===n?"vertical"===this.layout?(0,o.i)(this.menuItems,t,"previous",!1):e.detail.isSubmenuOpen&&i[i.length-1].setFocus():"ArrowRight"===n?"horizontal"===this.layout?(0,o.i)(this.menuItems,t,"next",!1):e.detail.isSubmenuOpen&&i[0].setFocus():"ArrowLeft"===n?"horizontal"===this.layout?(0,o.i)(this.menuItems,t,"previous",!1):e.detail.isSubmenuOpen&&this.focusParentElement(e.target):"Escape"===n&&this.focusParentElement(e.target),e.preventDefault()}focusParentElement(e){const t=e.parentElement;t&&((0,o.k)(t),t.open=!1)}setMenuItemLayout(e,t){e.forEach((e=>{e.layout=t,"menubar"===this.globalAttributes.role&&(e.isTopLevelItem=!0,e.topLevelMenuLayout=this.layout)}))}render(){return(0,n.h)(n.AA,null,(0,n.h)("ul",{"aria-label":this.label,...this.globalAttributes},(0,n.h)("slot",{onSlotchange:this.handleMenuSlotChange})))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{layout:["handleLayoutChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{display:flex}ul{margin:0px;display:inline-flex;block-size:100%;align-items:center;padding:0px}:host([layout=vertical]) ul{display:flex;inline-size:100%;flex-direction:column}:host([hidden]){display:none}[hidden]{display:none}"}},[17,"calcite-menu",{label:[1],layout:[513],messageOverrides:[1040],messages:[1040],defaultMessages:[32],effectiveLocale:[32],globalAttributes:[32],setFocus:[64]},[[0,"calciteInternalMenuItemKeyEvent","calciteInternalNavMenuItemKeyEvent"]]]);function u(){if("undefined"===typeof customElements)return;["calcite-menu"].forEach((e=>{if("calcite-menu"===e)customElements.get(e)||customElements.define(e,l)}))}u()}}]);
//# sourceMappingURL=4976.565c77f5.chunk.js.map