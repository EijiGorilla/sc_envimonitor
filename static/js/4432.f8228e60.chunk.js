"use strict";(self.webpackChunksc_envimonitor=self.webpackChunksc_envimonitor||[]).push([[4432],{21134:(e,o,t)=>{t.d(o,{Z:()=>v});var r,l=t(27366),i=t(84652),n=t(49861),s=t(25243),a=t(27135),p=t(69912),u=t(2632),d=t(87125),c=t(51995),f=t(46784);let y=r=class extends f.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new r({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,i.d9)(this.color)})}};(0,l._)([(0,n.Cb)({type:String,json:{write:!0}})],y.prototype,"description",void 0),(0,l._)([(0,n.Cb)({type:String,json:{write:!0}})],y.prototype,"label",void 0),(0,l._)([(0,n.Cb)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],y.prototype,"minValue",void 0),(0,l._)([(0,n.Cb)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],y.prototype,"maxValue",void 0),(0,l._)([(0,n.Cb)({type:c.Z,json:{type:[s.z8],write:!0}})],y.prototype,"color",void 0),y=r=(0,l._)([(0,p.j)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],y);const b=y;var h;let m=h=class extends u.Z{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new h({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,i.d9)(this.colorClassBreakInfos),legendOptions:(0,i.d9)(this.legendOptions)})}};(0,l._)([(0,a.J)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],m.prototype,"type",void 0),(0,l._)([(0,n.Cb)({json:{write:!0},type:String})],m.prototype,"field",void 0),(0,l._)([(0,n.Cb)({type:d.I,json:{write:!0}})],m.prototype,"legendOptions",void 0),(0,l._)([(0,n.Cb)({type:u.Z.fieldTransformTypeKebabDict.apiValues,json:{type:u.Z.fieldTransformTypeKebabDict.jsonValues,read:u.Z.fieldTransformTypeKebabDict.read,write:u.Z.fieldTransformTypeKebabDict.write}})],m.prototype,"fieldTransformType",void 0),(0,l._)([(0,n.Cb)({type:[b],json:{write:!0}})],m.prototype,"colorClassBreakInfos",void 0),m=h=(0,l._)([(0,p.j)("esri.renderers.PointCloudClassBreaksRenderer")],m);const v=m},2632:(e,o,t)=>{t.d(o,{Z:()=>j});var r,l=t(27366),i=t(43404),n=t(46784),s=t(84652),a=t(49861),p=(t(25243),t(69912));t(63780),t(93169);let u=r=class extends n.wq{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new r({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,l._)([(0,a.Cb)({type:String,json:{write:!0}})],u.prototype,"field",void 0),(0,l._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],u.prototype,"minValue",void 0),(0,l._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],u.prototype,"maxValue",void 0),u=r=(0,l._)([(0,p.j)("esri.renderers.support.pointCloud.ColorModulation")],u);const d=u,c=new i.X({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let f=class extends n.wq{};(0,l._)([(0,a.Cb)({type:c.apiValues,readOnly:!0,nonNullable:!0,json:{type:c.jsonValues,read:!1,write:c.write}})],f.prototype,"type",void 0),f=(0,l._)([(0,p.j)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],f);const y=f;var b,h=t(27135);let m=b=class extends y{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new b({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,l._)([(0,h.J)({pointCloudFixedSizeAlgorithm:"fixed-size"})],m.prototype,"type",void 0),(0,l._)([(0,a.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],m.prototype,"size",void 0),(0,l._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"useRealWorldSymbolSizes",void 0),m=b=(0,l._)([(0,p.j)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],m);const v=m;var C;let w=C=class extends y{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new C({scaleFactor:this.scaleFactor})}};(0,l._)([(0,h.J)({pointCloudSplatAlgorithm:"splat"})],w.prototype,"type",void 0),(0,l._)([(0,a.Cb)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],w.prototype,"scaleFactor",void 0),w=C=(0,l._)([(0,p.j)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],w);const g={key:"type",base:y,typeMap:{"fixed-size":v,splat:w}},T=(0,i.w)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let _=class extends n.wq{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,s.d9)(this.pointSizeAlgorithm),colorModulation:(0,s.d9)(this.colorModulation),pointsPerInch:(0,s.d9)(this.pointsPerInch)}}};(0,l._)([(0,a.Cb)({type:T.apiValues,readOnly:!0,nonNullable:!0,json:{type:T.jsonValues,read:!1,write:T.write}})],_.prototype,"type",void 0),(0,l._)([(0,a.Cb)({types:g,json:{write:!0}})],_.prototype,"pointSizeAlgorithm",void 0),(0,l._)([(0,a.Cb)({type:d,json:{write:!0}})],_.prototype,"colorModulation",void 0),(0,l._)([(0,a.Cb)({json:{write:!0},nonNullable:!0,type:Number})],_.prototype,"pointsPerInch",void 0),_=(0,l._)([(0,p.j)("esri.renderers.PointCloudRenderer")],_),(_||(_={})).fieldTransformTypeKebabDict=new i.X({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const j=_},89431:(e,o,t)=>{t.d(o,{Z:()=>f});var r,l=t(27366),i=t(84652),n=t(49861),s=(t(25243),t(27135)),a=t(69912),p=t(2632),u=t(87125),d=t(57203);let c=r=class extends p.Z{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new r({...this.cloneProperties(),field:(0,i.d9)(this.field),fieldTransformType:(0,i.d9)(this.fieldTransformType),stops:(0,i.d9)(this.stops),legendOptions:(0,i.d9)(this.legendOptions)})}};(0,l._)([(0,s.J)({pointCloudStretchRenderer:"point-cloud-stretch"})],c.prototype,"type",void 0),(0,l._)([(0,n.Cb)({json:{write:!0},type:String})],c.prototype,"field",void 0),(0,l._)([(0,n.Cb)({type:u.I,json:{write:!0}})],c.prototype,"legendOptions",void 0),(0,l._)([(0,n.Cb)({type:p.Z.fieldTransformTypeKebabDict.apiValues,json:{type:p.Z.fieldTransformTypeKebabDict.jsonValues,read:p.Z.fieldTransformTypeKebabDict.read,write:p.Z.fieldTransformTypeKebabDict.write}})],c.prototype,"fieldTransformType",void 0),(0,l._)([(0,n.Cb)({type:[d.Z],json:{write:!0}})],c.prototype,"stops",void 0),c=r=(0,l._)([(0,a.j)("esri.renderers.PointCloudStretchRenderer")],c);const f=c},87005:(e,o,t)=>{t.d(o,{Z:()=>v});var r,l=t(27366),i=t(84652),n=t(49861),s=t(25243),a=t(27135),p=t(69912),u=t(2632),d=t(87125),c=t(51995),f=t(46784);let y=r=class extends f.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new r({description:this.description,label:this.label,values:(0,i.d9)(this.values),color:(0,i.d9)(this.color)})}};(0,l._)([(0,n.Cb)({type:String,json:{write:!0}})],y.prototype,"description",void 0),(0,l._)([(0,n.Cb)({type:String,json:{write:!0}})],y.prototype,"label",void 0),(0,l._)([(0,n.Cb)({type:[String],json:{write:!0}})],y.prototype,"values",void 0),(0,l._)([(0,n.Cb)({type:c.Z,json:{type:[s.z8],write:!0}})],y.prototype,"color",void 0),y=r=(0,l._)([(0,p.j)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],y);const b=y;var h;let m=h=class extends u.Z{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new h({...this.cloneProperties(),field:(0,i.d9)(this.field),fieldTransformType:(0,i.d9)(this.fieldTransformType),colorUniqueValueInfos:(0,i.d9)(this.colorUniqueValueInfos),legendOptions:(0,i.d9)(this.legendOptions)})}};(0,l._)([(0,a.J)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],m.prototype,"type",void 0),(0,l._)([(0,n.Cb)({json:{write:!0},type:String})],m.prototype,"field",void 0),(0,l._)([(0,n.Cb)({type:u.Z.fieldTransformTypeKebabDict.apiValues,json:{type:u.Z.fieldTransformTypeKebabDict.jsonValues,read:u.Z.fieldTransformTypeKebabDict.read,write:u.Z.fieldTransformTypeKebabDict.write}})],m.prototype,"fieldTransformType",void 0),(0,l._)([(0,n.Cb)({type:[b],json:{write:!0}})],m.prototype,"colorUniqueValueInfos",void 0),(0,l._)([(0,n.Cb)({type:d.I,json:{write:!0}})],m.prototype,"legendOptions",void 0),m=h=(0,l._)([(0,p.j)("esri.renderers.PointCloudUniqueValueRenderer")],m);const v=m},74432:(e,o,t)=>{t.d(o,{Ym:()=>p,aE:()=>a,dH:()=>u,et:()=>d,hv:()=>c});t(93169);var r=t(21134),l=t(89431),i=t(87005),n=t(28278),s=t(2821);function a(e,o,t,n){var s;const{rendererJSON:a,isRGBRenderer:p}=e;let u=null,d=null;if(o&&p)u=o;else if(o&&"pointCloudUniqueValueRenderer"===(null===a||void 0===a?void 0:a.type)){d=i.Z.fromJSON(a);const e=d.colorUniqueValueInfos;u=new Uint8Array(3*n);const t=f(d.fieldTransformType);for(let r=0;r<n;r++){const l=(t?t(o[r]):o[r])+"";for(let o=0;o<e.length;o++)if(e[o].values.includes(l)){u[3*r]=e[o].color.r,u[3*r+1]=e[o].color.g,u[3*r+2]=e[o].color.b;break}}}else if(o&&"pointCloudStretchRenderer"===(null===a||void 0===a?void 0:a.type)){d=l.Z.fromJSON(a);const e=d.stops;u=new Uint8Array(3*n);const t=f(d.fieldTransformType);for(let r=0;r<n;r++){const l=t?t(o[r]):o[r],i=e.length-1;if(l<e[0].value)u[3*r]=e[0].color.r,u[3*r+1]=e[0].color.g,u[3*r+2]=e[0].color.b;else if(l>=e[i].value)u[3*r]=e[i].color.r,u[3*r+1]=e[i].color.g,u[3*r+2]=e[i].color.b;else for(let o=1;o<e.length;o++)if(l<e[o].value){const t=(l-e[o-1].value)/(e[o].value-e[o-1].value);u[3*r]=e[o].color.r*t+e[o-1].color.r*(1-t),u[3*r+1]=e[o].color.g*t+e[o-1].color.g*(1-t),u[3*r+2]=e[o].color.b*t+e[o-1].color.b*(1-t);break}}}else if(o&&"pointCloudClassBreaksRenderer"===(null===a||void 0===a?void 0:a.type)){d=r.Z.fromJSON(a);const e=d.colorClassBreakInfos;u=new Uint8Array(3*n);const t=f(d.fieldTransformType);for(let r=0;r<n;r++){const l=t?t(o[r]):o[r];for(let o=0;o<e.length;o++)if(l>=e[o].minValue&&l<=e[o].maxValue){u[3*r]=e[o].color.r,u[3*r+1]=e[o].color.g,u[3*r+2]=e[o].color.b;break}}}else u=new Uint8Array(3*n).fill(255);if(t&&null!==(s=d)&&void 0!==s&&s.colorModulation){const e=d.colorModulation.minValue,o=d.colorModulation.maxValue,r=.3;for(let l=0;l<n;l++){const i=t[l],n=i>=o?1:i<=e?r:r+(1-r)*(i-e)/(o-e);u[3*l]=n*u[3*l],u[3*l+1]=n*u[3*l+1],u[3*l+2]=n*u[3*l+2]}}return u}function p(e,o){if(null==e.encoding||""===e.encoding){const t=(0,n.W7)(o,e);if(null==t.vertexAttributes.position)return;const r=(0,n.I_)(o,t.vertexAttributes.position),l=t.header.fields,i=[l.offsetX,l.offsetY,l.offsetZ],s=[l.scaleX,l.scaleY,l.scaleZ],a=r.length/3,p=new Float64Array(3*a);for(let e=0;e<a;e++)p[3*e]=r[3*e]*s[0]+i[0],p[3*e+1]=r[3*e+1]*s[1]+i[1],p[3*e+2]=r[3*e+2]*s[2]+i[2];return p}if("lepcc-xyz"===e.encoding)return(0,s.Gi)(o).result}function u(e,o,t){return null!==e&&void 0!==e&&e.attributeInfo.useElevation?o?d(o,t):null:null!==e&&void 0!==e&&e.attributeInfo.storageInfo?(0,n.qM)(e.attributeInfo.storageInfo,e.buffer,t):null}function d(e,o){const t=new Float64Array(o);for(let r=0;r<o;r++)t[r]=e[3*r+2];return t}function c(e,o,t,r,l){const i=e.length/3;let n=0;for(let s=0;s<i;s++){let i=!0;for(let e=0;e<r.length&&i;e++){const{filterJSON:o}=r[e],t=l[e].values[s];switch(o.type){case"pointCloudValueFilter":{const e="exclude"===o.mode;o.values.includes(t)===e&&(i=!1);break}case"pointCloudBitfieldFilter":{const e=y(o.requiredSetBits),r=y(o.requiredClearBits);(t&e)===e&&0==(t&r)||(i=!1);break}case"pointCloudReturnFilter":{const e=15&t,r=t>>>4&15,l=r>1,n=1===e,s=e===r;let a=!1;for(const t of o.includedReturns)if("last"===t&&s||"firstOfMany"===t&&n&&l||"lastOfMany"===t&&s&&l||"single"===t&&!l){a=!0;break}a||(i=!1);break}}}i&&(t[n]=s,e[3*n]=e[3*s],e[3*n+1]=e[3*s+1],e[3*n+2]=e[3*s+2],o[3*n]=o[3*s],o[3*n+1]=o[3*s+1],o[3*n+2]=o[3*s+2],n++)}return n}function f(e){switch(e){default:case null:case"none":return e=>e;case"low-four-bit":return e=>15&e;case"high-four-bit":return e=>(240&e)>>4;case"absolute-value":return e=>Math.abs(e);case"modulo-ten":return e=>e%10}}function y(e){let o=0;for(const t of e||[])o|=1<<t;return o}}}]);
//# sourceMappingURL=4432.f8228e60.chunk.js.map