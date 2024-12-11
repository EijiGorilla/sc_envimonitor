"use strict";(self.webpackChunksc_envimonitor=self.webpackChunksc_envimonitor||[]).push([[1118,2078],{15909:(e,t,r)=>{r.d(t,{D:()=>n});var o=r(80292);function n(e){(null===e||void 0===e?void 0:e.writtenProperties)&&e.writtenProperties.forEach((e=>{let{target:t,propName:r,newOrigin:n}=e;(0,o.l)(t)&&n&&t.originOf(r)!==n&&t.updateOrigin(r,n)}))}},80292:(e,t,r)=>{function o(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{l:()=>o})},81118:(e,t,r)=>{r.d(t,{xp:()=>T,Vt:()=>N});var o=r(27366),n=r(76200),s=r(10064),i=r(32718),a=r(66978),l=r(35995),c=r(49861),u=(r(93169),r(84936),r(38511)),d=r(69912),p=r(31201),h=r(15909),v=r(53866),y=r(90724),f=r(78952),m=r(25899),g=r(70361),w=r(30494);let S=null;function I(){return S}var x=r(7575),_=r(98995),b=r(32698),R=r(40739),O=r(9634);const N=e=>{let t=class extends e{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=(0,a.Ds)((async(e,t,r)=>{switch(e){case T.SAVE:return this._save(t);case T.SAVE_AS:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return Z(t)}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const o=null==e.spatialReference?{...e,spatialReference:Z(t)}:e;return v.Z.fromJSON(o,r)}const o=t.store,n=Z(t);return null==n||null==(null===o||void 0===o?void 0:o.extent)||!Array.isArray(o.extent)||o.extent.some((e=>e<P))?null:new v.Z({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:n})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"";return this.parseVersionString(o)}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){var r;const o=null===(r=this.portalItem)||void 0===r?void 0:r.title;if("item-title"===this.sublayerTitleMode)return this.url?(0,m.a7)(this.url,t.name):t.name;let n=t.name;if(!n&&this.url){const e=(0,m.Qc)(this.url);null!=e&&(n=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&o&&(n=o+" - "+n),(0,m.ld)(n)}set url(e){if(null==e)return void this._set("url",e);const t=(0,m.XG)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:i.Z.getLogger(this)});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){(0,m.wH)(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url"),t=(0,l.mN)(e);return t&&null!=this.layerId&&(t.path="".concat(t.path,"/layers/").concat(this.layerId)),t}async _fetchIndexAndUpdateExtent(e,t){var r,o;this.indexInfo=(0,w.T)(null!==(r=null===(o=this.parsedUrl)||void 0===o?void 0:o.path)&&void 0!==r?r:"",this.rootNode,e,this.customParameters,this.apiKey,i.Z.getLogger(this),t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===(null===e||void 0===e?void 0:e.type)){var t,r;const o=e.rootIndex%e.pageSize,n=null===(t=e.rootPage)||void 0===t||null===(t=t.nodes)||void 0===t?void 0:t[o];if(null==(null===n||void 0===n||null===(r=n.obb)||void 0===r?void 0:r.center)||null==n.obb.halfSize)throw new s.Z("sceneservice:invalid-node-page","Invalid node page.");if(n.obb.center[0]<P||null==this.fullExtent||this.fullExtent.hasZ)return;const i=n.obb.halfSize,a=n.obb.center[2],l=Math.sqrt(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);this.fullExtent.zmin=a-l,this.fullExtent.zmax=a+l}else if("node"===(null===e||void 0===e?void 0:e.type)){var o;const t=null===(o=e.rootNode)||void 0===o?void 0:o.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<P)return;const r=t[2],n=t[3],{fullExtent:s}=this;s&&(s.zmin=r-n,s.zmax=r+n)}}async _fetchService(e){if(null==this.url)throw new s.Z("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){var t;const r=await(0,n.Z)(null!==(t=this.url)&&void 0!==t?t:"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});if(r.data&&Array.isArray(r.data.layers)&&r.data.layers.length>0)return r.data.layers[0].id}async _fetchServiceLayer(e){var t,r;const o=await(0,n.Z)(null!==(t=null===(r=this.parsedUrl)||void 0===r?void 0:r.path)&&void 0!==t?t:"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});o.ssl&&this.url&&(this.url=this.url.replace(/^http:/i,"https:"));let s=!1;if(o.data.layerType&&"Voxel"===o.data.layerType&&(s=!0),s)return this._fetchVoxelServiceLayer();const i=o.data;this.read(i,this._getServiceContext()),this.validateLayer(i)}async _fetchVoxelServiceLayer(e){var t;const r=(await(0,n.Z)((null===(t=this.parsedUrl)||void 0===t?void 0:t.path)+"/layer",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,this._getServiceContext()),this.validateLayer(r)}_getServiceContext(){var e;return{origin:"service",portalItem:this.portalItem,portal:null===(e=this.portalItem)||void 0===e?void 0:e.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}async _saveAs(e,t){var r;const o={...C,...t};let n=_.default.from(e);if(!n)throw new s.Z("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");n.id&&(n=n.clone(),n.id=null);const i=n.portal||x.Z.getDefault();await this._ensureLoadBeforeSave(),n.type=j,n.portal=i;const a=(0,b.Y)(n,"portal-item",!0),l={layers:[this.write({},a)]};return await Promise.all(null!==(r=a.resources.pendingOperations)&&void 0!==r?r:[]),await this._validateAgainstJSONSchema(l,a,o),this.url&&(n.url=this.url),n.title||(n.title=this.title),A(n,o,E.newItem),await i.signIn(),await i.user.addItem({item:n,folder:null===o||void 0===o?void 0:o.folder,data:l}),await(0,R.H)(this.resourceReferences,a),this.portalItem=n,(0,h.D)(a),a.portalItem=n,n}async _save(e){var t;const r={...C,...e};if(!this.portalItem)throw new s.Z("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if(this.portalItem.type!==j)throw new s.Z("sceneservice:portal-item-wrong-type",'Portal item needs to have type "'.concat(j,'"'));await this._ensureLoadBeforeSave();const o=(0,b.Y)(this.portalItem,"portal-item",!0),n={layers:[this.write({},o)]};return await Promise.all(null!==(t=o.resources.pendingOperations)&&void 0!==t?t:[]),await this._validateAgainstJSONSchema(n,o,r),this.url&&(this.portalItem.url=this.url),this.portalItem.title||(this.portalItem.title=this.title),A(this.portalItem,r,E.existingItem),await(0,R.b)(this.portalItem,n,this.resourceReferences,o),(0,h.D)(o),this.portalItem}async _validateAgainstJSONSchema(e,t,r){const o=null===r||void 0===r?void 0:r.validationOptions;(0,O.z)(t,{errorName:"sceneservice:save"},{ignoreUnsupported:null===o||void 0===o?void 0:o.ignoreUnsupported,supplementalUnsupportedErrors:["scenemodification:unsupported"]});const n=null===o||void 0===o?void 0:o.enabled,a=I();if(n&&a){const t=(await a()).validate(e,r.portalItemLayerType);if(!t.length)return;const n="Layer item did not validate:\n".concat(t.join("\n"));if(i.Z.getLogger(this).error("_validateAgainstJSONSchema(): ".concat(n)),"throw"===o.failPolicy){const e=t.map((e=>new s.Z("sceneservice:schema-validation",e)));throw new s.Z("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{validationErrors:e})}}}};return(0,o._)([(0,c.Cb)(g.id)],t.prototype,"id",void 0),(0,o._)([(0,c.Cb)({type:f.Z})],t.prototype,"spatialReference",void 0),(0,o._)([(0,u.r)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),(0,o._)([(0,c.Cb)({type:v.Z})],t.prototype,"fullExtent",void 0),(0,o._)([(0,u.r)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),(0,o._)([(0,c.Cb)({readOnly:!0,type:y.Z})],t.prototype,"heightModelInfo",void 0),(0,o._)([(0,c.Cb)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),(0,o._)([(0,c.Cb)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),(0,o._)([(0,c.Cb)({readOnly:!0})],t.prototype,"version",void 0),(0,o._)([(0,u.r)("version",["store.version"])],t.prototype,"readVersion",null),(0,o._)([(0,c.Cb)({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,o._)([(0,c.Cb)({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),(0,o._)([(0,c.Cb)({type:String})],t.prototype,"title",void 0),(0,o._)([(0,u.r)("portal-item","title")],t.prototype,"readTitlePortalItem",null),(0,o._)([(0,u.r)("service","title",["name"])],t.prototype,"readTitleService",null),(0,o._)([(0,c.Cb)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),(0,o._)([(0,c.Cb)(g.HQ)],t.prototype,"url",null),(0,o._)([(0,p.c)("url")],t.prototype,"writeUrl",null),(0,o._)([(0,c.Cb)()],t.prototype,"parsedUrl",null),(0,o._)([(0,c.Cb)({readOnly:!0})],t.prototype,"store",void 0),(0,o._)([(0,c.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=(0,o._)([(0,d.j)("esri.layers.mixins.SceneService")],t),t},P=-1e38;function Z(e){if(null!=e.spatialReference)return f.Z.fromJSON(e.spatialReference);const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.slice(r.lastIndexOf("/")+1),10);return null!=o?new f.Z(o):null}function A(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const n of o)e.typeKeywords.push(n);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),r===E.newItem&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}var E,U;(U=E||(E={}))[U.existingItem=0]="existingItem",U[U.newItem=1]="newItem";const j="Scene Service",C={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var T;!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(T||(T={}))},30494:(e,t,r)=>{r.d(t,{T:()=>s});var o=r(76200),n=r(10064);async function s(e,t,r,s,i,a,l){let c=null;if(null!=r){const t="".concat(e,"/nodepages/"),n=t+Math.floor(r.rootIndex/r.nodesPerPage);try{return{type:"page",rootPage:(await(0,o.Z)(n,{query:{f:"json",...s,token:i},responseType:"json",signal:l})).data,rootIndex:r.rootIndex,pageSize:r.nodesPerPage,lodMetric:r.lodSelectionMetricType,urlPrefix:t}}catch(h){null!=a&&a.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",n,h),c=h}}if(!t)return null;const u=null===t||void 0===t?void 0:t.split("/").pop(),d="".concat(e,"/nodes/"),p=d+u;try{return{type:"node",rootNode:(await(0,o.Z)(p,{query:{f:"json",...s,token:i},responseType:"json",signal:l})).data,urlPrefix:d}}catch(h){throw new n.Z("sceneservice:root-node-missing","Root node missing.",{pageError:c,nodeError:h,url:p})}}},32698:(e,t,r)=>{r.d(t,{Y:()=>i,h:()=>s});var o=r(35995),n=r(7575);function s(e,t){return{...a(e,t),readResourcePaths:[]}}function i(e,t,r){const n=(0,o.mN)(e.itemUrl);return{...a(e,t),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:n?{rootPath:n.path,writtenUrls:[]}:null,resources:r?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function a(e,t){return{origin:t,url:(0,o.mN)(e.itemUrl),portal:e.portal||n.Z.getDefault(),portalItem:e}}},62078:(e,t,r)=>{r.d(t,{FO:()=>p,W7:()=>h,addOrUpdateResources:()=>a,fetchResources:()=>i,removeAllResources:()=>c,removeResource:()=>l});var o=r(76200),n=r(10064),s=r(35995);async function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;await e.load(r);const o=(0,s.v_)(e.itemUrl,"resources"),{start:n=1,num:i=10,sortOrder:a="asc",sortField:l="resource"}=t,c={query:{start:n,num:i,sortOrder:a,sortField:l,token:e.apiKey},signal:null===r||void 0===r?void 0:r.signal},u=await e.portal.request(o,c);return{total:u.total,nextStart:u.nextStart,resources:u.resources.map((t=>{let{created:r,size:o,resource:n}=t;return{created:new Date(r),size:o,resource:e.resourceFromPath(n)}}))}}async function a(e,t,r,o){const i=new Map;for(const{resource:s,content:l,compress:c,access:d}of t){if(!s.hasPath())throw new n.Z("portal-item-resource-".concat(r,":invalid-path"),"Resource does not have a valid path");const[e,t]=u(s.path),o="".concat(e,"/").concat(null!==c&&void 0!==c?c:"","/").concat(null!==d&&void 0!==d?d:"");i.has(o)||i.set(o,{prefix:e,compress:c,access:d,files:[]}),i.get(o).files.push({fileName:t,content:l})}await e.load(o);const a=(0,s.v_)(e.userItemUrl,"add"===r?"addResources":"updateResources");for(const{prefix:n,compress:s,access:l,files:c}of i.values()){const t=25;for(let r=0;r<c.length;r+=t){const i=c.slice(r,r+t),u=new FormData;n&&"."!==n&&u.append("resourcesPrefix",n),s&&u.append("compress","true"),l&&u.append("access",l);let d=0;for(const{fileName:e,content:t}of i)u.append("file"+ ++d,t,e);u.append("f","json"),await e.portal.request(a,{method:"post",body:u,signal:null===o||void 0===o?void 0:o.signal})}}}async function l(e,t,r){if(!t.hasPath())throw new n.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const o=(0,s.v_)(e.userItemUrl,"removeResources");await e.portal.request(o,{method:"post",query:{resource:t.path},signal:null===r||void 0===r?void 0:r.signal}),t.portalItem=null}async function c(e,t){await e.load(t);const r=(0,s.v_)(e.userItemUrl,"removeResources");return e.portal.request(r,{method:"post",query:{deleteAll:!0},signal:null===t||void 0===t?void 0:t.signal})}function u(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function d(e){const[t,r]=function(e){const t=(0,s.Ml)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),".".concat(t)]}(e),[o,n]=u(t);return[o,n,r]}async function p(e){return"blob"===e.type?e.blob:"json"===e.type?new Blob([e.jsonString],{type:"application/json"}):(await(0,o.Z)(e.url,{responseType:"blob"})).data}function h(e,t){if(!e.hasPath())return null;const[r,,o]=d(e.path);return e.portalItem.resourceFromPath((0,s.v_)(r,t+o))}},40739:(e,t,r)=>{r.d(t,{H:()=>a,b:()=>l});var o=r(10064),n=r(66978),s=r(71907),i=r(62078);async function a(e,t,r){const o=await c(e,t,r);await u(o,t,r)}async function l(e,t,r,o,n){const s=await c(r,o,n);await e.update({data:t}),await u(s,o,n)}async function c(e,t,a){if(null===t||void 0===t||!t.resources)return;const l=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const c=new Set(t.resources.toKeep.map((e=>e.resource.path))),u=new Set,d=[];c.forEach((t=>{l.delete(t),e.paths.push(t)}));const p=[],h=[],v=[];for(const r of t.resources.toUpdate)if(l.delete(r.resource.path),c.has(r.resource.path)||u.has(r.resource.path)){const{resource:t,content:o,finish:n}=r,a=(0,i.W7)(t,(0,s.DO)());e.paths.push(a.path),p.push({resource:a,content:await(0,i.FO)(o),compress:r.compress}),n&&v.push((()=>n(a)))}else{e.paths.push(r.resource.path),h.push({resource:r.resource,content:await(0,i.FO)(r.content),compress:r.compress});const t=r.finish;t&&v.push((()=>t(r.resource))),u.add(r.resource.path)}for(const r of t.resources.toAdd)if(e.paths.push(r.resource.path),l.has(r.resource.path))l.delete(r.resource.path);else{p.push({resource:r.resource,content:await(0,i.FO)(r.content),compress:r.compress});const e=r.finish;e&&v.push((()=>e(r.resource)))}if(p.length||h.length){const{addOrUpdateResources:e}=await Promise.resolve().then(r.bind(r,62078));await e(t.portalItem,p,"add",a),await e(t.portalItem,h,"update",a)}if(v.forEach((e=>e())),0===d.length)return l;const y=await(0,n.UO)(d);if((0,n.k_)(a),y.length>0)throw new o.Z("save:resources","Failed to save one or more resources",{errors:y});return l}async function u(e,t,r){if(!e||!t.portalItem)return;const o=[];for(const n of e){const e=t.portalItem.resourceFromPath(n);o.push(e.portalItem.removeResource(e,r))}await(0,n.as)(o)}}}]);
//# sourceMappingURL=1118.ac1e5047.chunk.js.map