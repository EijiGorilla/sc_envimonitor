"use strict";(self.webpackChunksc_envimonitor=self.webpackChunksc_envimonitor||[]).push([[7858,7661],{88396:(e,t,r)=>{r.d(t,{a:()=>s,f:()=>i,n:()=>o});var n=r(18722);function o(e,t){s(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function s(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r;const s=t.length/2;let i=0,l=0;if((0,n.kJ)(t)||(0,n.Q7)(t)){for(let n=0;n<s;++n)e[i]=t[l],e[i+1]=t[l+1],i+=r,l+=o;return}const u=(0,n.Op)(t);if((0,n.B3)(t))for(let n=0;n<s;++n)e[i]=Math.max(t[l]/u,-1),e[i+1]=Math.max(t[l+1]/u,-1),i+=r,l+=o;else for(let n=0;n<s;++n)e[i]=t[l]/u,e[i+1]=t[l+1]/u,i+=r,l+=o}function i(e,t,r,n){var o,s;const i=e.typedBuffer,l=e.typedBufferStride,u=null!==(o=null===n||void 0===n?void 0:n.count)&&void 0!==o?o:e.count;let a=(null!==(s=null===n||void 0===n?void 0:n.dstIndex)&&void 0!==s?s:0)*l;for(let c=0;c<u;++c)i[a]=t,i[a+1]=r,a+=l}Object.freeze(Object.defineProperty({__proto__:null,fill:i,normalizeIntegerBuffer:s,normalizeIntegerBufferView:o},Symbol.toStringTag,{value:"Module"}))},69618:(e,t,r)=>{function n(e,t){o(e.typedBuffer,t,e.typedBufferStride)}function o(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;const n=t.typedBuffer,o=t.typedBufferStride,s=t.count;let i=0,l=0;for(let u=0;u<s;++u)e[i]=n[l],e[i+1]=n[l+1],e[i+2]=n[l+2],e[i+3]=n[l+3],i+=r,l+=o}function s(e,t,r,n,o,s){var i,l;const u=e.typedBuffer,a=e.typedBufferStride,c=null!==(i=null===s||void 0===s?void 0:s.count)&&void 0!==i?i:e.count;let d=(null!==(l=null===s||void 0===s?void 0:s.dstIndex)&&void 0!==l?l:0)*a;for(let f=0;f<c;++f)u[d]=t,u[d+1]=r,u[d+2]=n,u[d+3]=o,d+=a}r.d(t,{a:()=>o,c:()=>n,f:()=>s});Object.freeze(Object.defineProperty({__proto__:null,copy:o,copyView:n,fill:s},Symbol.toStringTag,{value:"Module"}))},71277:(e,t,r)=>{function n(e){return e=e||globalThis.location.hostname,a.some((t=>{var r;return null!=(null===(r=e)||void 0===r?void 0:r.match(t))}))}function o(e,t){return e?(t=t||globalThis.location.hostname)?null!=t.match(s)||null!=t.match(l)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(i)||null!=t.match(u)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e:null}r.d(t,{XO:()=>n,pJ:()=>o});const s=/^devext\.arcgis\.com$/,i=/^qaext\.arcgis\.com$/,l=/^[\w-]*\.mapsdevext\.arcgis\.com$/,u=/^[\w-]*\.mapsqa\.arcgis\.com$/,a=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local\.esri\.com$/,s,i,/^jsapps\.esri\.com$/,l,u]},99760:(e,t,r)=>{r.d(t,{i:()=>i});var n=r(21389),o=r(30932),s=r(29303);function i(e){if(null==e)return null;const t=null!=e.offset?e.offset:o.AG,r=null!=e.rotation?e.rotation:0,i=null!=e.scale?e.scale:o.hq,l=(0,n.al)(1,0,0,0,1,0,t[0],t[1],1),u=(0,n.al)(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),a=(0,n.al)(i[0],0,0,0,i[1],0,0,0,1),c=(0,n.Ue)();return(0,s.Jp)(c,u,a),(0,s.Jp)(c,l,c),c}},32315:(e,t,r)=>{r.d(t,{p:()=>i});var n=r(18722),o=r(39406),s=r(8548);function i(e,t){switch(t){case s.MX.TRIANGLES:return"number"==typeof(r=e)?(0,o.KF)(r):(0,n.lq)(r)?new Uint16Array(r):r;case s.MX.TRIANGLE_STRIP:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return[];const r=t-2,n=(0,o.$z)(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(n[e++]=t,n[e++]=t+1,n[e++]=t+2):(n[e++]=t+1,n[e++]=t,n[e++]=t+2)}else{let t=0;for(let o=0;o<r;o+=1)o%2==0?(n[t++]=e[o],n[t++]=e[o+1],n[t++]=e[o+2]):(n[t++]=e[o+1],n[t++]=e[o],n[t++]=e[o+2])}return n}(e);case s.MX.TRIANGLE_FAN:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)n[e++]=0,n[e++]=t+1,n[e++]=t+2;return n}const o=e[0];let s=e[1],i=0;for(let l=0;l<r;++l){const t=e[l+2];n[i++]=o,n[i++]=s,n[i++]=t,s=t}return n}(e)}var r}},57661:(e,t,r)=>{r.d(t,{$A:()=>i,Ml:()=>u,NM:()=>s,i$:()=>l});var n=r(93169),o=r(68401);class s{constructor(e){this.data=e,this.type="encoded-mesh-texture",this.encoding=o.Ti.KTX2_ENCODING}}function i(e){return"encoded-mesh-texture"===(null===e||void 0===e?void 0:e.type)}async function l(e){const t=new Blob([e]),r=await t.text();return JSON.parse(r)}async function u(e,t){if(t===o.Ti.KTX2_ENCODING)return new s(e);const r=new Blob([e],{type:t}),i=URL.createObjectURL(r),l=new Image;if((0,n.Z)("esri-iPhone"))return new Promise(((e,t)=>{const r=()=>{o(),e(l)},n=e=>{o(),t(e)},o=()=>{URL.revokeObjectURL(i),l.removeEventListener("load",r),l.removeEventListener("error",n)};l.addEventListener("load",r),l.addEventListener("error",n),l.src=i}));try{l.src=i,await l.decode()}catch(u){console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(i),l}},47858:(e,t,r)=>{r.d(t,{fetch:()=>j});var n=r(9236),o=r(71277),s=r(16889),i=r(29303),l=r(21389),u=r(29134),a=r(7025),c=r(6644),d=r(32035),f=r(12400),m=r(41414),p=r(38461),h=r(25158),x=r(11186),g=r(6754),v=r(88396),y=r(92770),b=r(69618),T=r(27053),w=r(32315),B=r(57661),R=r(99760);class S{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class M{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new S,this.numberOfVertices=0}}var A=r(13041),O=r(16010),E=r(91526),I=r(68401),L=r(2952),F=r(1487),N=r(4760),C=r(72969),U=r(68845),_=r(45856);async function j(e,t){var l;const S=function(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}((0,o.pJ)(e));if("wosr"===S.fileType){const e=await(t.cache?t.cache.loadWOSR(S.url,t):(0,A.zD)(S.url,t)),{engineResources:r,referenceBoundingBox:n}=(0,A.p2)(e,t);return{lods:r,referenceBoundingBox:n,isEsriSymbolResource:!1,isWosr:!0}}let j;if(t.cache)j=await t.cache.loadGLTF(S.url,t,!!t.usePBR);else{const{loadGLTF:e}=await r.e(7516).then(r.bind(r,57516));j=await e(new T.C(t.streamDataRequester),S.url,t,t.usePBR)}const P=null===(l=j.model.meta)||void 0===l?void 0:l.ESRI_proxyEllipsoid,$=j.meta.isEsriSymbolResource&&null!=P&&"EsriRealisticTreesStyle"===j.meta.ESRI_webstyle;$&&!j.customMeta.esriTreeRendering&&(j.customMeta.esriTreeRendering=!0,function(e,t){for(let r=0;r<e.model.lods.length;++r){const n=e.model.lods[r];for(const o of n.parts){const n=o.attributes.normal;if(null==n)return;const s=o.attributes.position,i=s.count,l=(0,f.Ue)(),c=(0,f.Ue)(),m=(0,f.Ue)(),p=new Uint8Array(4*i),x=new Float64Array(3*i),g=(0,u.U_)((0,a.Ue)(),o.transform);let v=0,y=0;for(let u=0;u<i;u++){s.getVec(u,c),n.getVec(u,l),(0,d.t)(c,c,o.transform),(0,d.d)(m,c,t.center),(0,d.E)(m,m,t.radius);const i=m[2],a=(0,d.l)(m),f=Math.min(.45+.55*a*a,1);(0,d.E)(m,m,t.radius),null!==g&&(0,d.t)(m,m,g),(0,d.n)(m,m),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,d.m)(m,m,l,i>-1?.2:Math.min(-4*i-3.8,1)),x[v]=m[0],x[v+1]=m[1],x[v+2]=m[2],v+=3,p[y]=255*f,p[y+1]=255*f,p[y+2]=255*f,p[y+3]=255,y+=4}o.attributes.normal=new h.ct(x),o.attributes.color=new h.mc(p)}}}(j,P));const k=!!t.usePBR,G=j.meta.isEsriSymbolResource?{usePBR:k,isSchematic:!1,treeRendering:$,mrrFactors:_.eP}:{usePBR:k,isSchematic:!1,treeRendering:!1,mrrFactors:_.xq},q=(0,n.Z)((0,n.Z)({},t.materialParameters),{},{treeRendering:$}),{engineResources:V,referenceBoundingBox:z}=function(e,t,r,o,l){const u=e.model,a=new Array,d=new Map,f=new Map,T=u.lods.length,S=(0,m.cS)();return u.lods.forEach(((e,A)=>{const j=!0===o.skipHighLods&&(T>1&&0===A||T>3&&1===A)||!1===o.skipHighLods&&null!=l&&A!==l;if(j&&0!==A)return;const P=new M(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const l=j?new C.Gp({},o):function(e,t,r,o,s,i,l,u){const a=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),d=e.materials.get(t.material),f=null!=t.attributes.texCoord0,m=null!=t.attributes.normal;if(null==d)return null;const p=function(e){switch(e){case"BLEND":return I.JJ.Blend;case"MASK":return I.JJ.Mask;case"OPAQUE":case null:case void 0:return I.JJ.Opaque}}(d.alphaMode);if(!i.has(a)){var h,x;if(f){const t=function(t){let r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(null!=t&&!l.has(t)){const o=e.textures.get(t);if(null!=o){const e=o.data;l.set(t,new F.x((0,B.$A)(e)?e.data:e,(0,n.Z)((0,n.Z)({},o.parameters),{},{preMultiplyAlpha:!(0,B.$A)(e)&&r,encoding:(0,B.$A)(e)&&null!=e.encoding?e.encoding:void 0})))}}};t(d.textureColor,p!==I.JJ.Opaque),t(d.textureNormal),t(d.textureOcclusion),t(d.textureEmissive),t(d.textureMetallicRoughness)}const r=d.color[0]**(1/U.j),g=d.color[1]**(1/U.j),v=d.color[2]**(1/U.j),y=d.emissiveFactor[0]**(1/U.j),b=d.emissiveFactor[1]**(1/U.j),T=d.emissiveFactor[2]**(1/U.j),w=null!=d.textureColor&&f?l.get(d.textureColor):null,S=(0,_.Ih)({normalTexture:d.textureNormal,metallicRoughnessTexture:d.textureMetallicRoughness,metallicFactor:d.metallicFactor,roughnessFactor:d.roughnessFactor,emissiveTexture:d.textureEmissive,emissiveFactor:d.emissiveFactor,occlusionTexture:d.textureOcclusion}),M=null!=(null===(h=d.normalTextureTransform)||void 0===h?void 0:h.scale)?null===(x=d.normalTextureTransform)||void 0===x?void 0:x.scale:c.hq;i.set(a,new C.Gp((0,n.Z)((0,n.Z)({},o),{},{transparent:p===I.JJ.Blend,customDepthTest:I.Gv.Lequal,textureAlphaMode:p,textureAlphaCutoff:d.alphaCutoff,diffuse:[r,g,v],ambient:[r,g,v],opacity:d.opacity,doubleSided:d.doubleSided,doubleSidedType:"winding-order",cullFace:d.doubleSided?I.Vr.None:I.Vr.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:m?O.r.Attribute:O.r.ScreenDerivative,castShadows:!0,receiveShadows:d.receiveShadows,receiveAmbientOcclusion:d.receiveAmbientOcclustion,textureId:null!=w?w.id:void 0,colorMixMode:d.colorMixMode,normalTextureId:null!=d.textureNormal&&f?l.get(d.textureNormal).id:void 0,textureAlphaPremultiplied:null!=w&&!!w.parameters.preMultiplyAlpha,occlusionTextureId:null!=d.textureOcclusion&&f?l.get(d.textureOcclusion).id:void 0,emissiveTextureId:null!=d.textureEmissive&&f?l.get(d.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=d.textureMetallicRoughness&&f?l.get(d.textureMetallicRoughness).id:void 0,emissiveFactor:[y,b,T],mrrFactors:S?_.S7:[d.metallicFactor,d.roughnessFactor,o.mrrFactors[2]],isSchematic:S,colorTextureTransformMatrix:(0,R.i)(d.colorTextureTransform),normalTextureTransformMatrix:(0,R.i)(d.normalTextureTransform),scale:[M[0],M[1]],occlusionTextureTransformMatrix:(0,R.i)(d.occlusionTextureTransform),emissiveTextureTransformMatrix:(0,R.i)(d.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:(0,R.i)(d.metallicRoughnessTextureTransform)},s),u))}const g=i.get(a);if(r.stageResources.materials.push(g),f){const e=e=>{null!=e&&r.stageResources.textures.push(l.get(e))};e(d.textureColor),e(d.textureNormal),e(d.textureOcclusion),e(d.textureEmissive),e(d.textureMetallicRoughness)}return g}(u,e,P,t,r,d,f,o),{geometry:a,vertexCount:T}=function(e,t){const r=e.attributes.position.count,n=(0,w.p)(e.indices||r,e.primitiveType),o=(0,p.xx)(3*r),{typedBuffer:l,typedBufferStride:u}=e.attributes.position;(0,x.t)(o,l,e.transform,3,u);const a=[[N.T.POSITION,new E.a(o,n,3,!0)]];if(null!=e.attributes.normal){const t=(0,p.xx)(3*r),{typedBuffer:o,typedBufferStride:l}=e.attributes.normal;(0,i.XL)(J,e.transform),(0,x.b)(t,o,J,3,l),(0,s.oc)(J)&&(0,x.n)(t,t),a.push([N.T.NORMAL,new E.a(t,n,3,!0)])}if(null!=e.attributes.tangent){const t=(0,p.xx)(4*r),{typedBuffer:o,typedBufferStride:l}=e.attributes.tangent;(0,i.xO)(J,e.transform),(0,g.t)(t,o,J,4,l),(0,s.oc)(J)&&(0,x.n)(t,t,4),a.push([N.T.TANGENT,new E.a(t,n,4,!0)])}if(null!=e.attributes.texCoord0){const t=(0,p.xx)(2*r),{typedBuffer:o,typedBufferStride:s}=e.attributes.texCoord0;(0,v.a)(t,o,2,s),a.push([N.T.UV0,new E.a(t,n,2,!0)])}const c=e.attributes.color;if(null!=c){const t=new Uint8Array(4*r);4===c.elementCount?c instanceof h.ek?(0,g.b)(t,c,255):c instanceof h.mc?(0,b.a)(t,c):c instanceof h.v6&&(0,g.b)(t,c,1/256):(t.fill(255),c instanceof h.ct?(0,x.f)(t,c.typedBuffer,255,4,c.typedBufferStride):e.attributes.color instanceof h.ne?(0,y.c)(t,c.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof h.mw&&(0,x.f)(t,c.typedBuffer,1/256,4,c.typedBufferStride)),a.push([N.T.COLOR,new E.a(t,n,4,!0)])}return{geometry:new L.Z(t,a),vertexCount:r}}(e,null!==l&&void 0!==l?l:new C.Gp({},o)),M=a.boundingInfo;null!=M&&0===A&&((0,m.pp)(S,M.bbMin),(0,m.pp)(S,M.bbMax)),null!=l&&(P.stageResources.geometries.push(a),P.numberOfVertices+=T)})),j||a.push(P)})),{engineResources:a,referenceBoundingBox:S}}(j,G,q,t,S.specifiedLodIndex);return{lods:V,referenceBoundingBox:z,isEsriSymbolResource:j.meta.isEsriSymbolResource,isWosr:!1}}const J=(0,l.Ue)()},68845:(e,t,r)=>{r.d(t,{j:()=>n});const n=2.1}}]);
//# sourceMappingURL=7858.4aada768.chunk.js.map