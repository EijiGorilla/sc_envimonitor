"use strict";(self.webpackChunksc_envimonitor=self.webpackChunksc_envimonitor||[]).push([[8103],{8103:(e,l,t)=>{t.d(l,{previewSymbol2D:()=>S});var i=t(51995),o=t(86950),n=t(10064),a=t(82272),s=t(17842),u=t(79563),d=t(37817),c=t(69157),h=t(81283);const r="picture-fill",m="picture-marker",v="simple-fill",p="simple-line",f="simple-marker",y="text",g="Aa",w=d.b_.size,b=d.b_.maxSize,x=d.b_.maxOutlineSize,M=d.b_.lineWidth,k=225,L=document.createElement("canvas");function z(e,l){const t=L.getContext("2d"),i=[];l&&(l.weight&&i.push(l.weight),l.size&&i.push(l.size+"px"),l.family&&i.push(l.family)),t.font=i.join(" ");const{width:o,actualBoundingBoxLeft:n,actualBoundingBoxRight:a,actualBoundingBoxAscent:s,actualBoundingBoxDescent:u}=t.measureText(e);return{width:Math.ceil(Math.max(o,n+a)),height:Math.ceil(s+u),x:Math.floor(n),y:Math.floor((s-u)/2)}}function C(e){const l=null===e||void 0===e?void 0:e.size;return{width:null!=l&&"object"==typeof l&&"width"in l?(0,s.F2)(l.width):null,height:null!=l&&"object"==typeof l&&"height"in l?(0,s.F2)(l.height):null}}function F(e,l){return e>l?"dark":"light"}async function S(e,l){var t;const{shapeDescriptor:i,size:o,renderOptions:k}=function(e,l){var t,i,o;const n="number"==typeof(null===l||void 0===l?void 0:l.size)?null===l||void 0===l?void 0:l.size:null,a=null!=n?(0,s.F2)(n):null,c=null!=(null===l||void 0===l?void 0:l.maxSize)?(0,s.F2)(l.maxSize):null;let h="angle"in e?e.angle:null;null!=(null===l||void 0===l?void 0:l.rotation)&&(h=(null!==(t=h)&&void 0!==t?t:0)+l.rotation);const k=(0,u._M)(e);let L=(0,u.mx)(e);"dark"!==B(e,245)||(null===l||void 0===l?void 0:l.ignoreWhiteSymbols)||(L={width:.75,...L,color:"#bdc3c7"});const F={shape:null,fill:k,stroke:L,offset:[0,0]};(null===(i=L)||void 0===i?void 0:i.width)&&(L.width=Math.min(L.width,x));const S=(null===(o=L)||void 0===o?void 0:o.width)||0;let Z=null!=(null===l||void 0===l?void 0:l.size)&&(null==(null===l||void 0===l?void 0:l.scale)||(null===l||void 0===l?void 0:l.scale)),_=0,E=0,j=!1;switch(e.type){case f:{const t=e.style,{width:i,height:o}=C(l),n=i===o&&null!=i?i:null!=a?a:Math.min((0,s.F2)(e.size),c||b);switch(_=n,E=n,t){case"circle":F.shape={type:"circle",cx:0,cy:0,r:.5*n},Z||(_+=S,E+=S);break;case"cross":F.shape={type:"path",path:[{command:"M",values:[0,.5*E]},{command:"L",values:[_,.5*E]},{command:"M",values:[.5*_,0]},{command:"L",values:[.5*_,E]}]};break;case"diamond":F.shape={type:"path",path:[{command:"M",values:[0,.5*E]},{command:"L",values:[.5*_,0]},{command:"L",values:[_,.5*E]},{command:"L",values:[.5*_,E]},{command:"Z",values:[]}]},Z||(_+=S,E+=S);break;case"square":F.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[_,0]},{command:"L",values:[_,E]},{command:"L",values:[0,E]},{command:"Z",values:[]}]},Z||(_+=S,E+=S),h&&(j=!0);break;case"triangle":F.shape={type:"path",path:[{command:"M",values:[.5*_,0]},{command:"L",values:[_,E]},{command:"L",values:[0,E]},{command:"Z",values:[]}]},Z||(_+=S,E+=S),h&&(j=!0);break;case"x":F.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[_,E]},{command:"M",values:[_,0]},{command:"L",values:[0,E]}]},h&&(j=!0);break;case"path":F.shape={type:"path",path:e.path||""},Z||(_+=S,E+=S),h&&(j=!0),Z=!0}break}case p:{var D;const{width:e,height:t}=C(l),i=(0,u.iI)(L).reduce(((e,l)=>e+l),0),o=i&&Math.ceil(M/i),n=null!==(D=null!==t&&void 0!==t?t:a)&&void 0!==D?D:S,s=null!==e&&void 0!==e?e:i*o||M;L&&(L.width=n),_=s,E=n,Z=!0,F.shape={type:"path",path:[{command:"M",values:[n/2,E/2]},{command:"L",values:[_-n/2,E/2]}]};break}case r:case v:{var O;const e="object"==typeof(null===l||void 0===l?void 0:l.symbolConfig)&&!(null===l||void 0===l||null===(O=l.symbolConfig)||void 0===O||!O.isSquareFill),{width:t,height:i}=C(l);_=!e&&t!==i||null==t?null!=a?a:w:t,E=!e&&t!==i||null==i?_:i,Z||(_+=S,E+=S),Z=!0,F.shape=e?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[_,0]},{command:"L",values:[_,E]},{command:"L",values:[0,E]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:d.JZ.fill[0];break}case m:{const t=Math.min((0,s.F2)(e.width),c||b),i=Math.min((0,s.F2)(e.height),c||b),{width:o,height:n}=C(l),u=o===n&&null!=o?o:null!=a?a:Math.max(t,i),d=t/i;_=d<=1?Math.ceil(u*d):u,E=d<=1?u:Math.ceil(u/d),F.shape={type:"image",x:-Math.round(_/2),y:-Math.round(E/2),width:_,height:E,src:e.url||""},h&&(j=!0);break}case y:{const t=e,i=(null===l||void 0===l?void 0:l.overrideText)||t.text||g,o=t.font,{width:n,height:u}=C(l),d=null!=u?u:null!=a?a:Math.min((0,s.F2)(o.size),c||b),{width:h,height:r}=z(i,{weight:o.weight,size:d,family:o.family}),m=/[\uE600-\uE6FF]/.test(i);_=null!==n&&void 0!==n?n:m?d:h,E=m?d:r;let v=.5*(m?d:r);m&&(v+=5),F.shape={type:"text",text:i,x:t.xoffset||0,y:t.yoffset||v,align:"middle",alignBaseline:t.verticalAlignment,decoration:o&&o.decoration,rotated:t.rotated,kerning:t.kerning},F.font=o&&{size:d,style:o.style,decoration:o.decoration,weight:o.weight,family:o.family};break}}return{shapeDescriptor:F,size:[_,E],renderOptions:{node:null===l||void 0===l?void 0:l.node,scale:Z,opacity:null===l||void 0===l?void 0:l.opacity,rotations:[h],useRotationSize:j,effectView:null===l||void 0===l?void 0:l.effectView,ariaLabel:null===l||void 0===l?void 0:l.ariaLabel}}}(e,l);if(!i.shape)throw new n.Z("symbolPreview: renderPreviewHTML2D","symbol not supported.");await async function(e,l){const t=l.fill,i=e.color;if("pattern"===(null===t||void 0===t?void 0:t.type)&&i&&e.type!==r){const e=await(0,u.Od)(t.src,i.toCss(!0));t.src=e,l.fill=t}}(e,i),await async function(e,l,t,i){if(!("font"in e)||!e.font||"text"!==l.shape.type)return;try{await(0,a.mx)(e.font)}catch{}const{width:o,height:n}=C(i);if(!/[\uE600-\uE6FF]/.test(l.shape.text)){var s,u,d,c;const{width:a,height:h,x:r,y:m}=z(l.shape.text,{weight:null===(s=l.font)||void 0===s?void 0:s.weight,size:null===(u=l.font)||void 0===u?void 0:u.size,family:null===(d=l.font)||void 0===d?void 0:d.family});t[0]=null!==o&&void 0!==o?o:a,t[1]=null!==n&&void 0!==n?n:h,l.shape.x=r,l.shape.y=m;let v="angle"in e?e.angle:null;if(null!=(null===i||void 0===i?void 0:i.rotation)&&(v=(null!==(c=v)&&void 0!==c?c:0)+i.rotation),v){const e=v*(Math.PI/180),l=Math.abs(Math.sin(e)),i=Math.abs(Math.cos(e));t[1]=t[0]*l+t[1]*i}}}(e,i,o,l);const L=[[i]];if("object"==typeof(null===l||void 0===l?void 0:l.symbolConfig)&&null!==l&&void 0!==l&&null!==(t=l.symbolConfig)&&void 0!==t&&t.applyColorModulation){const e=.6*o[0];L.unshift([{...i,offset:[-e,0],fill:(0,d.dc)(i.fill,-.3)}]),L.push([{...i,offset:[e,0],fill:(0,d.dc)(i.fill,.3)}]),o[0]+=2*e,k.scale=!1}return"text"===e.type&&function(e,l,t,i,o){var n;if(null!=e.haloColor&&null!=e.haloSize){var a;null!==(a=o.masking)&&void 0!==a||(o.masking=t.map((()=>[])));const n=(0,s.F2)(e.haloSize);i[0]+=n,i[1]+=n,t.unshift([{...l,fill:null,stroke:{color:e.haloColor,width:2*n,join:"round",cap:"round"}}]),o.masking.unshift([{shape:{type:"rect",x:0,y:0,width:i[0]+2*h.c9,height:i[1]+2*h.c9},fill:[255,255,255],stroke:null},{...l,fill:[0,0,0,0],stroke:null}])}null==e.backgroundColor&&null==e.borderLineColor||(i[0]+=2*h.c9,i[1]+=2*h.c9,t.unshift([{shape:{type:"rect",x:0,y:0,width:i[0],height:i[1]},fill:e.backgroundColor,stroke:{color:e.borderLineColor,width:(0,s.F2)(e.borderLineSize)}}]),null===(n=o.masking)||void 0===n||n.unshift([]))}(e,i,L,o,k),(0,c.wh)(L,o,k)}function B(e){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:k;const t=(0,u._M)(e),n=(0,u.mx)(e),a=!t||"type"in t?null:new i.Z(t),s=null!==n&&void 0!==n&&n.color?new i.Z(null===n||void 0===n?void 0:n.color):null,d=a?F((0,o.EX)(a),l):null,c=s?F((0,o.EX)(s),l):null;return c?d?d===c?d:l>=k?"light":"dark":c:d}}}]);
//# sourceMappingURL=8103.0454ee20.chunk.js.map