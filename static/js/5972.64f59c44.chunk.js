"use strict";(self.webpackChunksc_envimonitor=self.webpackChunksc_envimonitor||[]).push([[5972],{25889:(e,t,s)=>{s.d(t,{AC:()=>c,Fz:()=>p,Q_:()=>g,_C:()=>u,fB:()=>d,i1:()=>h,jO:()=>f,kE:()=>l,ks:()=>i,s8:()=>m,sc:()=>a});var o=s(10064);const n="upload-assets",r=()=>new Error;class a extends o.Z{constructor(){super("".concat(n,":unsupported"),"Layer does not support asset uploads.",r())}}class i extends o.Z{constructor(){super("".concat(n,":no-glb-support"),"Layer does not support glb.",r())}}class l extends o.Z{constructor(){super("".concat(n,":no-supported-source"),"No supported external source found",r())}}class c extends o.Z{constructor(){super("".concat(n,":not-base-64"),"Expected gltf data in base64 format after conversion.",r())}}class u extends o.Z{constructor(){super("".concat(n,":unable-to-prepare-options"),"Unable to prepare uploadAsset request options.",r())}}class p extends o.Z{constructor(e,t){super("".concat(n,":bad-response"),"Bad response. Uploaded ".concat(e," items and received ").concat(t," results."),r())}}class d extends o.Z{constructor(e,t){var s,o;super("".concat(n,"-layer:upload-failed"),"Failed to upload mesh file ".concat(e,". Error code: ").concat(null!==(s=null===t||void 0===t?void 0:t.code)&&void 0!==s?s:"-1",". Error message: ").concat(null!==(o=null===t||void 0===t?void 0:t.messages)&&void 0!==o?o:"unknown"),r())}}class f extends o.Z{constructor(e){super("".concat(n,"-layer:unsupported-format"),"The service allowed us to upload an asset of FormatID ".concat(e,", but it does not list it in its supported formats."),r())}}class m extends o.Z{constructor(){super("".concat(n,":convert3D-failed"),"convert3D failed.")}}class g extends o.Z{constructor(){super("invalid-input:no-model","No supported model found")}}class h extends o.Z{constructor(){super("invalid-input:multiple-models","Multiple supported models found")}}},15972:(e,t,s)=>{s.d(t,{uploadAssets:()=>S});s(59486);var o=s(76200),n=s(93169),r=s(32718),a=s(66978),i=s(38499),l=s(35995),c=s(71907),u=s(17493),p=s(25889);const d={upload:{createFromFiles:.8,loadMesh:.2},uploadAssetBlobs:{prepareAssetItems:.9,uploadAssetItems:.1},uploadConvertibleSource:{uploadEditSource:.5,serviceAssetsToGlb:.5},uploadLocalMesh:{meshToAssetBlob:.5,uploadAssetBlobs:.5}};var f=s(25899),m=s(42537),g=s(77427);function h(e){return new v(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>{},arguments.length>2?arguments[2]:void 0)}class v{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>{},s=arguments.length>2?arguments[2]:void 0;if(this.onProgress=t,this.taskName=s,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,"number"==typeof e){this._weights={};for(let t=0;t<e;t++){const s=t,o=1/e;this._weights[s]=o,this._progressMap.set(s,0)}}else this._weights=e;this.emitProgress()}emitProgress(){let e=0;for(const[o,n]of this._progressMap.entries())e+=n*this._weights[o];if(1===e&&(0,n.Z)("enable-feature:esri-3dofl-upload-timings")){var t;const e=Math.round(performance.now()-(null!==(t=this._startTime)&&void 0!==t?t:0))/1e3;console.log("".concat(this.taskName," done in ").concat(e," sec"));for(const[t,o]of this._timingsMap){var s;const n=Math.round(o.end-o.start)/1e3,r=Math.round(n/e*100);console.log(null!==(s=this.taskName)&&void 0!==s?s:"Task",{stepKey:t,stepTime:n,relativeTime:r})}}this.onProgress(e)}setProgress(e,t){if(this._progressMap.set(e,t),(0,n.Z)("enable-feature:esri-3dofl-upload-timings")){var s;const o=performance.now();null!==(s=this._startTime)&&void 0!==s||(this._startTime=o);const n=(0,g.s1)(this._timingsMap,e,(()=>({start:o,end:0})));1===t&&(n.end=o)}this.emitProgress()}simulate(e,t){return w((t=>this.setProgress(e,t)),t)}makeOnProgress(e){return t=>this.setProgress(e,t)}}function w(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e=>{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T;const s=performance.now();e(0);const o=setInterval((()=>{const o=performance.now()-s,n=1-Math.exp(-o/t);e(n)}),Z);return(0,m.kB)((()=>{clearInterval(o),e(1)}))}function y(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_;return(0,i.up)((0,i._H)(e*P/t))}const _=10,b=10,P=8e-6,Z=(0,i.HA)(50),T=(0,i.HA)(1e3),k=1e6,A=20*k,x=2e9,E=3;async function F(e,t,s){let{data:n,name:r,description:i}=e,c=null;try{const e=(0,l.v_)(t,"uploads"),p=(0,l.v_)(e,"info"),{data:d}=await(0,o.Z)(p,{query:{f:"json"},responseType:"json"});(0,a.k_)(s);const m=(0,f.M8)(t),g=d.maxUploadFileSize*k,v=m?x:g,w=m?Math.min(A,g):A;if(n.size>v)throw new Error("Data too large");const _=(0,l.v_)(e,"register"),{data:b}=await(0,o.Z)(_,{query:{f:"json",itemName:(u=r,u.replaceAll("/","_").replaceAll("\\","_")),description:i},responseType:"json",method:"post"});if((0,a.k_)(s),!b.success)throw new Error("Registration failed");const{itemID:P}=b.item;c=(0,l.v_)(e,P);const Z=(0,l.v_)(c,"uploadPart"),T=Math.ceil(n.size/w),F=new Array;for(let t=0;t<T;++t)F.push(n.slice(t*w,Math.min((t+1)*w,n.size)));const j=F.slice().reverse(),C=new Array,D=h(T,null===s||void 0===s?void 0:s.onProgress,"uploadItem"),M=async()=>{for(;0!==j.length;){const e=F.length-j.length,t=j.pop(),n=new FormData,r=D.simulate(e,y(t.size));try{n.append("f","json"),n.append("file",t),n.append("partId","".concat(e));const{data:r}=await(0,o.Z)(Z,{timeout:0,body:n,responseType:"json",method:"post"});if((0,a.k_)(s),!r.success)throw new Error("Part upload failed")}finally{r.remove()}}};for(let t=0;t<E&&0!==j.length;++t)C.push(M());await Promise.all(C);const S=(0,l.v_)(c,"commit"),{data:N}=await(0,o.Z)(S,{query:{f:"json",parts:F.map(((e,t)=>t)).join(",")},responseType:"json",method:"post"});if((0,a.k_)(s),!N.success)throw new Error("Commit failed");return N.item}catch(p){if(null!=c){const e=(0,l.v_)(c,"delete");await(0,o.Z)(e,{query:{f:"json"},responseType:"json",method:"post"})}throw p}var u}var j=s(18277),C=s(5559),D=s(25219),M=s(78952);async function S(e,t,s){var o;const r=e.length;if(!r)return null!==s&&void 0!==s&&null!==(o=s.onProgress)&&void 0!==o&&o.call(s,1),[];const f=h(r,null===s||void 0===s?void 0:s.onProgress,"uploadAssets");return Promise.all(e.map(((e,o)=>async function(e,t,s){var o;let{layer:r,ongoingUploads:f}=t;const m=f.get(e);if(m)return m;if(!function(e){return!!e.infoFor3D&&!!e.url}(r))throw new p.sc;if(function(e,t){const{parsedUrl:s}=t;return null!=s&&e.metadata.externalSources.some((e=>(0,u.JG)(e,s)))}(e,r))return null!==s&&void 0!==s&&null!==(o=s.onProgress)&&void 0!==o&&o.call(s,1),e;const g=async function(e,t,s){const{metadata:o}=e,{displaySource:r}=o,f=N(null===r||void 0===r?void 0:r.source,t,{checkForConversionRequired:(0,n.Z)("enable-feature:georeferenced-uploads")}),m=null!=f?async function(e,t,s){return{source:await R(e,t,s),original:!0,unitConversionDisabled:!0}}(f,t,s):o.externalSources.length>0?async function(e,t,s){const o=X(t),{externalSources:r}=e.metadata,a=function(e,t){for(const s of e){const e=N(s.source,t);if(e)return e}return null}(r,t);if(!a)throw new p.kE;const c=h(d.uploadConvertibleSource,null===s||void 0===s?void 0:s.onProgress,"uploadConvertibleSource"),f=await R(a,t,{onProgress:c.makeOnProgress("uploadEditSource")});e.addExternalSources([{source:f,original:!0}]);const m=a.reduce(((e,t)=>{let{asset:s}=t;return s instanceof File?e+s.size:e}),0),g=c.simulate("serviceAssetsToGlb",function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b;return(0,i.up)((0,i._H)(e*P/t))}(m));try{var v;const{source:r,transform:a,origin:i}=await async function(e,t,s){const o=e.map((e=>{let{assetName:t,parts:s}=e;return{assetName:t,assetHash:s[0].partHash}}));let r;try{var i;const e=(0,l.v_)(t.parsedUrl.path,"convert3D"),n=null===(i=t.capabilities)||void 0===i?void 0:i.operations.supportsAsyncConvert3D;r=(await(n?L:U)(e,{query:{f:"json",assets:JSON.stringify(o),transportType:"esriTransportTypeUrl",targetFormat:s,async:n},responseType:"json",timeout:0})).data}catch(a){throw new p.s8}return function(e,t){const s={source:t.assets.map((t=>{const s=(0,j.S0)(t.contentType,e.infoFor3D.supportedFormats);if(!s)throw new p.jO(s);return new u.CP(t.assetName,t.contentType,[new u.LL(t.assetURL,t.assetHash)])})),origin:void 0,transform:void 0};if((0,n.Z)("enable-feature:georeferenced-uploads")&&t.transform){if(s.transform=(0,D.E)(t.transform),t.spatialReference){const e=M.Z.fromJSON(t.spatialReference);s.origin=(0,D.A)(t.transform,e)}}else s.transform=(0,C.c)(e.spatialReference);return s}(t,r)}(f,t,o);return e.transform=a,i&&(e.metadata.georeferenced=!0,null!==s&&void 0!==s&&s.useAssetOrigin&&(e.vertexSpace.origin=[i.x,i.y,null!==(v=i.z)&&void 0!==v?v:0],e.spatialReference=i.spatialReference)),{source:r,unitConversionDisabled:!0}}finally{g.remove()}}(e,t,s):async function(e,t,s){const o=h(d.uploadLocalMesh,null===s||void 0===s?void 0:s.onProgress,"uploadLocalMesh"),n=async function(e,t,s){const o=X(t),n=await e.load(s),r=await n.toBinaryGLTF({origin:n.origin,signal:null===s||void 0===s?void 0:s.signal,ignoreLocalTransform:!0,unitConversionDisabled:!0});return(0,a.k_)(s),{blob:new Blob([r],{type:"model/gltf-binary"}),assetName:"".concat((0,c.zS)(),".glb"),assetType:o}}(e,t,{...s,onProgress:o.makeOnProgress("meshToAssetBlob")});return{source:await O([n],t,{...s,onProgress:o.makeOnProgress("uploadAssetBlobs")}),extent:e.extent.clone(),original:!0}}(e,t,s),g=await m;return(0,a.k_)(s),e.addExternalSources([g]),e}(e,r,s);f.set(e,g);try{await g}finally{f.delete(e)}return e}(e,t,{...s,onProgress:f.makeOnProgress(o)}))))}function N(e,t){let{infoFor3D:s}=t,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e)return null;const{supportedFormats:n,editFormats:r}=s,a=(0,u.zE)(e),i=new Array,l=(0,j.Wr)(s),c=(0,j.sg)(s);let p=!1;for(const u of a){const e=I(u,n);if(!e)return null;const{assetType:t}=e;if(o.checkForConversionRequired&&(t===l||t===c))return null;r.includes(t)&&(p=!0),i.push(e)}return p?i:null}function I(e,t){const s=(0,u.vj)(e,t);return s?{asset:e,assetType:s}:null}async function R(e,t,s){return O(e.map((e=>async function(e,t){const{asset:s,assetType:o}=e;if(s instanceof File)return{blob:s,assetName:s.name,assetType:o};const n=await s.toBlob(t);return(0,a.k_)(t),{blob:n,assetName:s.assetName,assetType:o}}(e,s))),t,s)}async function O(e,t,s){const o=h(d.uploadAssetBlobs,null===s||void 0===s?void 0:s.onProgress,"uploadAssetBlobs"),n=await function(e,t,s){const o=h(e.length,null===s||void 0===s?void 0:s.onProgress,"prepareAssetItems");return Promise.all(e.map((async(e,n)=>{const i=async function(e,t,s){const{blob:o,assetType:n,assetName:i}=e;let c=null;try{const e=await F({data:o,name:i},t.url,s);(0,a.k_)(s),c={assetType:n,assetUploadId:e.itemID}}catch(T){(0,a.r9)(T),r.Z.getLogger("esri.layers.graphics.sources.support.uploadAssets").warnOnce("Service ".concat(t.url," does not support the REST Uploads API."))}if(!c){const e=await(0,l.IR)(o);if((0,a.k_)(s),!e.isBase64)throw new p.AC;c={assetType:n,assetData:e.data}}if(!c)throw new p._C;return{item:c,assetName:i}}(await e,t,{...s,onProgress:o.makeOnProgress(n)});return(0,a.k_)(s),i})))}(e,t,{...s,onProgress:o.makeOnProgress("prepareAssetItems")});(0,a.k_)(s);const i=n.map((e=>{let{item:t}=e;return t})),{uploadResults:c}=await B(i,t,{...s,onProgress:o.makeOnProgress("uploadAssetItems")});return(0,a.k_)(s),e.map(((e,s)=>function(e,t,s){const{success:o}=t;if(!o){const{error:s}=t;throw new p.fB(e.assetName,s)}const{assetHash:n}=t,{assetName:r,item:{assetType:a}}=e,{infoFor3D:{supportedFormats:i}}=s,l=(0,j.d1)(a,i);if(!l)throw new p.jO(a);return new u.CP(r,l,[new u.LL("".concat(s.parsedUrl.path,"/assets/").concat(n),n)])}(n[s],c[s],t)))}async function B(e,t,s){const n=w(null===s||void 0===s?void 0:s.onProgress);try{const n=await(0,o.Z)((0,l.v_)(t.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(e)},method:"post",responseType:"json"});if((0,a.k_)(s),n.data.uploadResults.length!==e.length)throw new p.Fz(e.length,n.data.uploadResults.length);return n.data}finally{n.remove()}}function U(e,t){return(0,o.Z)(e,t)}async function L(e,t){const s=(await(0,o.Z)(e,t)).data.statusUrl;for(;;){const e=(await(0,o.Z)(s,{query:{f:"json"},responseType:"json"})).data;switch(e.status){case"Completed":return(0,o.Z)(e.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new Error(e.status);case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new Error}await(0,a.e4)(z)}}function X(e){let{infoFor3D:t}=e;const s=(0,j.X4)(t);if(!s)throw new p.ks;return s}const z=(0,i.HA)(1e3)},5559:(e,t,s)=>{s.d(t,{c:()=>r});var o=s(68860),n=s(76046);function r(e){const t=1/(0,o.c9)(e,1);return 1!==t?new n.Z({scale:[t,t,t]}):void 0}},25219:(e,t,s)=>{s.d(t,{A:()=>r,E:()=>a});s(59486);var o=s(76046),n=s(848);function r(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i;return new n.Z({x:e[s.originX],y:e[s.originY],z:e[s.originZ],spatialReference:t})}function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;return new o.Z({translation:[e[t.translationX],-e[t.translationZ],e[t.translationY]],rotationAxis:[e[t.rotationX],-e[t.rotationZ],e[t.rotationY]],rotationAngle:e[t.rotationDeg],scale:[e[t.scaleX],e[t.scaleZ],e[t.scaleY]]})}const i={originX:"originX",originY:"originY",originZ:"originZ",translationX:"translationX",translationY:"translationY",translationZ:"translationZ",scaleX:"scaleX",scaleY:"scaleY",scaleZ:"scaleZ",rotationX:"rotationX",rotationY:"rotationY",rotationZ:"rotationZ",rotationDeg:"rotationDeg"}}}]);
//# sourceMappingURL=5972.64f59c44.chunk.js.map