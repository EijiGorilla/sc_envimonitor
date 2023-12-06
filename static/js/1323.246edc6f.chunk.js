"use strict";(self.webpackChunksc_envimonitor=self.webpackChunksc_envimonitor||[]).push([[1323,9887],{17493:(e,t,a)=>{a.d(t,{CP:()=>o,JG:()=>y,LL:()=>l,NZ:()=>u,fV:()=>f,vj:()=>g,yT:()=>b,zE:()=>v});var r=a(76200),s=a(63780),n=a(66978),i=a(18277);class o{constructor(e,t,a){this.assetName=e,this.assetMimeType=t,this.parts=a}equals(e){return this===e||this.assetName===e.assetName&&this.assetMimeType===e.assetMimeType&&(0,s.fS)(this.parts,e.parts,((e,t)=>e.equals(t)))}isOnService(e){return this.parts.every((t=>t.isOnService(e)))}makeHash(){let e="";for(const t of this.parts)e+=t.partHash;return e}async toBlob(e){const{parts:t}=this;if(1===t.length)return t[0].toBlob(e);const a=await Promise.all(t.map((t=>t.toBlob(e))));return(0,n.k_)(e),new Blob(a)}}class l{constructor(e,t){this.partUrl=e,this.partHash=t}equals(e){return this===e||this.partUrl===e.partUrl&&this.partHash===e.partHash}isOnService(e){return this.partUrl.startsWith("".concat(e.path,"/assets/"))}async toBlob(e){const{data:t}=await(0,r.Z)(this.partUrl,{responseType:"blob"});return(0,n.k_)(e),t}}function u(e){return function(e){if(!e)return!1;if(Array.isArray(e))return e.some(h);return h(e)}(null===e||void 0===e?void 0:e.source)}function d(e){return!!Array.isArray(e)&&e.every((e=>e instanceof o))}const c=/^(model\/gltf\+json)|(model\/gltf-binary)$/,p=/\.(gltf|glb)/i;function h(e){if(e instanceof File){const{type:t,name:a}=e;return c.test(t)||p.test(a)}return c.test(e.assetMimeType)||p.test(e.assetName)}function y(e,t){if(!e)return!1;const{source:a}=e;return function(e,t){if(Array.isArray(e)){const a=e;return a.length>0&&a.every((e=>m(e,t)))}return m(e,t)}(a,t)}function f(e,t){if(e===t)return!0;const{source:a}=e,{source:r}=t;if(a===r)return!0;if(d(a)&&d(r)){if(a.length!==r.length)return!1;const e=(e,t)=>e.assetName<t.assetName?-1:e.assetName>t.assetName?1:0,t=[...a].sort(e),s=[...r].sort(e);for(let a=0;a<t.length;++a)if(!t[a].equals(s[a]))return!1;return!0}return!1}function m(e,t){return e instanceof o&&e.isOnService(t)}function g(e,t){var a;return e instanceof File?(0,i.dm)(e,t):null!==(a=(0,i.S0)(e.assetMimeType,t))&&void 0!==a?a:(0,i.Ow)(e.assetName,t)}function v(e){return Array.isArray(e)?e:[e]}function b(e){return!!e.original}},60480:(e,t,a)=>{a.d(t,{g:()=>r});const r={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByAnonymous:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},29887:(e,t,a)=>{a.d(t,{Ey:()=>w,applyEdits:()=>F,aw:()=>v,uploadAssets:()=>q});var r=a(52639),s=a(80987),n=a(10064),i=a(84652),o=a(32718),l=a(66978),u=a(35995),d=a(71907),c=a(91340),p=a(56601),h=a(37270),y=a(18277),f=a(37933);function m(e){return null!=(null===e||void 0===e?void 0:e.applyEdits)}function g(e){return"object"==typeof e&&null!=e&&"objectId"in e&&!!e.objectId}function v(e){return e.every(g)}function b(e){return"object"==typeof e&&null!=e&&"globalId"in e&&!!e.globalId}function w(e){return e.every(b)}async function F(e,t,a){var r;let u,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const h="gdbVersion"in e?e.gdbVersion:null,g=null!==(r=c.gdbVersion)&&void 0!==r?r:h;if((0,p.lQ)(e)&&e.url)u=(0,p.jF)(e.url,e.layerId,g,"original-and-current-features"===c.returnServiceEditsOption);else{u=(0,l.hh)(),u.promise.then((t=>{(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length)&&e.emit("edits",t)}));const t={result:u.promise};e.emit("apply-edits",t)}try{var v;const{results:r,edits:l}=await async function(e,t,a,r){var i,l,u,c,p,h;if(await e.load(),!m(t))throw new n.Z("".concat(e.type,"-layer:no-editing-support"),"Layer source does not support applyEdits capability",{layer:e});if(!(0,f.ln)(e))throw new n.Z("".concat(e.type,"-layer:editing-disabled"),"Editing is disabled for layer",{layer:e});const{edits:g,options:v}=await async function(e,t,a){const r=(0,f.S1)(e),i=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),l=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),u=null!=e.infoFor3D;if(function(e,t,a,r,s,i){if(!e||!r&&!s)throw new n.Z("".concat(i,":missing-parameters"),"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.editing.supportsGlobalId&&null!==a&&void 0!==a&&a.globalIdUsed)throw new n.Z("".concat(i,":invalid-parameter"),"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.editing.supportsGlobalId&&s)throw new n.Z("".concat(i,":invalid-parameter"),"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((null===a||void 0===a||!a.globalIdUsed)&&s)throw new n.Z("".concat(i,":invalid-parameter"),"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}(t,r,a,!!i,!!l,"".concat(e.type,"-layer")),!r.data.isVersioned&&null!==a&&void 0!==a&&a.gdbVersion)throw new n.Z("".concat(e.type,"-layer:invalid-parameter"),"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!r.editing.supportsRollbackOnFailure&&null!==a&&void 0!==a&&a.rollbackOnFailureEnabled)throw new n.Z("".concat(e.type,"-layer:invalid-parameter"),"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const c={...a};if(null!=c.rollbackOnFailureEnabled||r.editing.supportsRollbackOnFailure||(c.rollbackOnFailureEnabled=!0),c.rollbackOnFailureEnabled||"original-and-current-features"!==c.returnServiceEditsOption||(!1===c.rollbackOnFailureEnabled&&o.Z.getLogger("esri.layers.graphics.editingSupport").warn("".concat(e.type,"-layer:invalid-parameter"),"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwrritten and set to true."),c.rollbackOnFailureEnabled=!0),!r.editing.supportsReturnServiceEditsInSourceSpatialReference&&c.returnServiceEditsInSourceSR)throw new n.Z("".concat(e.type,"-layer:invalid-parameter"),"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(c.returnServiceEditsInSourceSR&&"original-and-current-features"!==c.returnServiceEditsOption)throw new n.Z("".concat(e.type,"-layer:invalid-parameter"),"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const p=function(e,t,a){var r,i,o;const l=function(e){var t,a;return{addFeatures:Array.from(null!==(t=null===e||void 0===e?void 0:e.addFeatures)&&void 0!==t?t:[]),updateFeatures:Array.from(null!==(a=null===e||void 0===e?void 0:e.updateFeatures)&&void 0!==a?a:[]),deleteFeatures:e&&s.Z.isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():e.deleteFeatures||[],addAttachments:e.addAttachments||[],updateAttachments:e.updateAttachments||[],deleteAttachments:e.deleteAttachments||[]}}(e);if(null!==(r=l.addFeatures)&&void 0!==r&&r.length&&!t.operations.supportsAdd)throw new n.Z("".concat(a,":unsupported-operation"),"Layer does not support adding features.");if(null!==(i=l.updateFeatures)&&void 0!==i&&i.length&&!t.operations.supportsUpdate)throw new n.Z("".concat(a,":unsupported-operation"),"Layer does not support updating features.");if(null!==(o=l.deleteFeatures)&&void 0!==o&&o.length&&!t.operations.supportsDelete)throw new n.Z("".concat(a,":unsupported-operation"),"Layer does not support deleting features.");return l.addFeatures=l.addFeatures.map(E),l.updateFeatures=l.updateFeatures.map(E),l.addAssetFeatures=[],l}(t,r,"".concat(e.type,"-layer")),h=(null===a||void 0===a?void 0:a.globalIdUsed)||u,m=e.fields.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(h){const{globalIdField:t}=e;if(null==t)throw new n.Z("".concat(e.type,"-layer:invalid-parameter"),"Layer does not specify a global id field.");p.addFeatures.forEach((e=>function(e,t){const{attributes:a}=e;null==a[t]&&(a[t]=(0,d.zS)())}(e,t)))}return p.addFeatures.forEach((t=>function(e,t,a,r){A(e,t,a,r),S(e,t)}(t,e,h,m))),p.updateFeatures.forEach((t=>function(e,t,a,r){A(e,t,a,r),S(e,t);const s=(0,f.S1)(t);if("geometry"in e&&null!=e.geometry&&(null===s||void 0===s||!s.editing.supportsGeometryUpdate))throw new n.Z("".concat(t.type,"-layer:unsupported-operation"),"Layer does not support geometry updates.")}(t,e,h,m))),p.deleteFeatures.forEach((t=>function(e,t,a,r){A(e,t,a,r)}(t,e,h,m))),p.addAttachments.forEach((t=>R(t,e))),p.updateAttachments.forEach((t=>R(t,e))),u&&await async function(e,t){var a,r;if(null==t.infoFor3D)return;const{infoFor3D:s}=t,i=null!==(a=(0,y.S0)("model/gltf-binary",s.supportedFormats))&&void 0!==a?a:(0,y.Ow)("glb",s.supportedFormats);if(!i||!s.editFormats.includes(i))throw new n.Z("".concat(t.type,"-layer:binary-gltf-asset-not-supported"),"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");null!==(r=e.addAssetFeatures)&&void 0!==r||(e.addAssetFeatures=[]);const{addAssetFeatures:o}=e;for(const n of null!==(l=e.addFeatures)&&void 0!==l?l:[]){var l;O(n)&&o.push(n)}for(const n of null!==(u=e.updateFeatures)&&void 0!==u?u:[]){var u;O(n)&&o.push(n)}}(p,e),{edits:await I(p),options:c}}(e,a,r);return null!==(i=g.addFeatures)&&void 0!==i&&i.length||null!==(l=g.updateFeatures)&&void 0!==l&&l.length||null!==(u=g.deleteFeatures)&&void 0!==u&&u.length||null!==(c=g.addAttachments)&&void 0!==c&&c.length||null!==(p=g.updateAttachments)&&void 0!==p&&p.length||null!==(h=g.deleteAttachments)&&void 0!==h&&h.length?{edits:g,results:await t.applyEdits(g,v)}:{edits:g,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}(e,t,a,c),p=e=>e.filter((e=>!e.error)).map(i.d9),h={edits:l,addedFeatures:p(r.addFeatureResults),updatedFeatures:p(r.updateFeatureResults),deletedFeatures:p(r.deleteFeatureResults),addedAttachments:p(r.addAttachmentResults),updatedAttachments:p(r.updateAttachmentResults),deletedAttachments:p(r.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:r.editMoment?new Date(r.editMoment):null,globalIdToObjectId:c.globalIdToObjectId};return null!==(v=r.editedFeatureResults)&&void 0!==v&&v.length&&(h.editedFeatures=r.editedFeatureResults),u.resolve(h),r}catch(b){throw u.reject(b),b}}function A(e,t,a,r){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new n.Z("".concat(t.type,"-layer:invalid-parameter"),"Feature should have '".concat(t.globalIdField,"' when 'globalIdUsed' is true"));if(!("attributes"in e)&&!e.globalId)throw new n.Z("".concat(t.type,"-layer:invalid-parameter"),"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(r.length&&"attributes"in e)for(const o of r){const a=e.attributes[o.name];if(void 0!==a&&!(0,h.d2)(o,a))throw new n.Z("".concat(t.type,"-layer:invalid-parameter"),"Big-integer field '".concat(o.name,"' of the feature must be less than ").concat(Number.MAX_SAFE_INTEGER),{feature:e})}if("geometry"in e&&null!=e.geometry){var s,i;if(e.geometry.hasZ&&!1===(null===(s=t.capabilities)||void 0===s?void 0:s.data.supportsZ))throw new n.Z("".concat(t.type,"-layer:z-unsupported"),"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===(null===(i=t.capabilities)||void 0===i?void 0:i.data.supportsM))throw new n.Z("".concat(t.type,"-layer:m-unsupported"),"Layer does not support m values while feature has m values.")}}function S(e,t){var a;if("geometry"in e&&"mesh"===(null===(a=e.geometry)||void 0===a?void 0:a.type)&&null!=t.infoFor3D){const{geometry:a}=e;if(a.vertexSpace.isGeoreferenced)throw new n.Z("".concat(t.type,"-layer:georeferenced-mesh-unsupported"),"Uploading georeferenced meshes to a layer is not supported.")}}function R(e,t){var a;const{feature:r,attachment:s}=e;if(!r||"attributes"in r&&!r.attributes[t.globalIdField])throw new n.Z("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new n.Z("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have reference to 'globalId' of the parent feature");if(!s.globalId)throw new n.Z("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have 'globalId'");if(!s.data&&!s.uploadId)throw new n.Z("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have 'data' or 'uploadId'");if(!(s.data instanceof File&&s.data.name)&&!s.name)throw new n.Z("".concat(t.type,"-layer:invalid-parameter"),"'name' is required when attachment is specified as Base64 encoded string using 'data'");if((null===(a=t.capabilities)||void 0===a||!a.editing.supportsUploadWithItemId)&&s.uploadId)throw new n.Z("".concat(t.type,"-layer:invalid-parameter"),"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof s.data){const e=(0,u.sJ)(s.data);if(e&&!e.isBase64)throw new n.Z("".concat(t.type,"-layer:invalid-parameter"),"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function I(e){var t,a;const r=null!==(t=e.addFeatures)&&void 0!==t?t:[],s=null!==(a=e.updateFeatures)&&void 0!==a?a:[],n=r.concat(s).map((e=>e.geometry)),i=await(0,c.aX)(n),o=r.length,l=s.length;return i.slice(0,o).forEach(((e,t)=>r[t].geometry=e)),i.slice(o,o+l).forEach(((e,t)=>s[t].geometry=e)),e}function E(e){const t=new r.Z;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}function O(e){var t;return"mesh"===(null===e||void 0===e||null===(t=e.geometry)||void 0===t?void 0:t.type)}function q(e,t,a,r){if(!m(t))throw new n.Z("".concat(e.type,"-layer:no-editing-support"),"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new n.Z("".concat(e.type,"-layer:no-asset-upload-support"),"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(a,r)}},81323:(e,t,a)=>{a.r(t),a.d(t,{default:()=>K});var r=a(27366),s=(a(59486),a(19545)),n=a(76200),i=a(62044),o=a(63780),l=a(10064),u=a(93169),d=a(43404),c=a(54472),p=a(32718),h=a(18202),y=a(66978),f=a(35995),m=a(71907),g=a(49861),v=(a(25243),a(69912)),b=a(53866),w=a(14226),F=a(81949),A=a(80880),S=a(32035);function R(e){const{vertexSpace:t}=e;if(t.isRelative)return e.clone();const{anchor:a}=e,r=a.clone(),s=(0,w.d)(I,[-r.x,-r.y,-r.z]),n=new A.Z({origin:[r.x,r.y,r.z]}),i=e.cloneWithVertexSpace(n),{position:o}=i.vertexAttributes;return i.vertexAttributes.position=(0,S.t)(new Float64Array(o.length),o,s),i.vertexAttributesChanged(),i}const I=(0,F.a)();var E=a(17493),O=a(52639),q=a(68860),Z=a(79803),x=a(77981),_=a(29887);async function T(e,t,a){const{geometry:r}=t,s={...t.attributes};if(null!=a&&"mesh"===(null===r||void 0===r?void 0:r.type)){var n;const{transformFieldRoles:t}=a,{origin:i,spatialReference:o,transform:l}=r,u=e.spatialReference;await(0,Z.initializeProjection)(o,u);const d=(0,Z.project)(i,u);if(s[t.originX]=d.x,s[t.originY]=d.y,s[t.originZ]=null!==(n=d.z)&&void 0!==n?n:0,null!=l){const{translation:e,scale:a,rotation:n}=l,{vertexSpace:i}=r,d=i.isGeoreferenced?1:(0,q.r6)(o)/(0,q.r6)(u);s[t.translationX]=e[0]*d,s[t.translationY]=e[2]*d,s[t.translationZ]=-e[1]*d,s[t.scaleX]=a[0],s[t.scaleY]=a[2],s[t.scaleZ]=a[1],s[t.rotationX]=n[0],s[t.rotationY]=n[2],s[t.rotationZ]=-n[1],s[t.rotationDeg]=n[3]}return{attributes:s}}return null==r?{attributes:s}:"mesh"===r.type||"extent"===r.type?null:{geometry:r.toJSON(),attributes:s}}async function M(e,t){var a,r,s;const n=await Promise.all((null!==(a=t.addAttachments)&&void 0!==a?a:[]).map((t=>U(e,t)))),i=await Promise.all((null!==(r=t.updateAttachments)&&void 0!==r?r:[]).map((t=>U(e,t)))),o=null!==(s=t.deleteAttachments)&&void 0!==s?s:[];return n.length||i.length||o.length?{adds:n,updates:i,deletes:[...o]}:null}async function U(e,t){var a;const{feature:r,attachment:s}=t,{globalId:n,name:i,contentType:o,data:l,uploadId:u}=s,d={globalId:n};if(r&&("attributes"in r?d.parentGlobalId=null===(a=r.attributes)||void 0===a?void 0:a[e.globalIdField]:r.globalId&&(d.parentGlobalId=r.globalId)),u)d.uploadId=u;else if(l){const e=await(0,f.IR)(l);e&&(d.contentType=e.mediaType,d.data=e.data),l instanceof File&&(d.name=l.name)}return i&&(d.name=i),o&&(d.contentType=o),d}function C(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new l.Z("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}function N(e,t){return new O.Z({attributes:e.attributes,geometry:(0,x.im)({...e.geometry,spatialReference:t})})}function k(e,t){var a,r,s;return{adds:(null===e||void 0===e||null===(a=e.adds)||void 0===a?void 0:a.map((e=>N(e,t))))||[],updates:(null===e||void 0===e||null===(r=e.updates)||void 0===r?void 0:r.map((e=>({original:N(e[0],t),current:N(e[1],t)}))))||[],deletes:(null===e||void 0===e||null===(s=e.deletes)||void 0===s?void 0:s.map((e=>N(e,t))))||[],spatialReference:t}}var D=a(63543),L=a(89623),j=a(25899),J=a(62594),P=a(18277),Q=a(77946),G=a(62204),B=a(21149),V=a(54789),z=a(78952);const H=new d.X({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),W=new Set(["Feature Layer","Oriented Imagery Layer","Table"]),X=new d.X({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let $=class extends c.Z{constructor(){super(...arguments),this.type="feature-layer",this.refresh=(0,y.Ds)((async()=>{var e,t;await this.load();const a=null===(e=this.sourceJSON.editingInfo)||void 0===e?void 0:e.lastEditDate;if(null==a)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const r=a!==(null===(t=this.sourceJSON.editingInfo)||void 0===t?void 0:t.lastEditDate);return{dataChanged:r,updates:r?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}})),this._ongoingAssetUploads=new Map}load(e){const t=this.layer.sourceJSON,a=this._fetchService(t,{...e}).then((()=>this.layer.setUserPrivileges(this.sourceJSON.serviceItemId,e))).then((()=>this._ensureLatestMetadata(e)));return this.addResolvingPromise(a),Promise.resolve(this)}get queryTask(){var e,t;const{capabilities:a,parsedUrl:r,dynamicDataSource:s,infoFor3D:n,gdbVersion:i,spatialReference:o,fieldsIndex:l}=this.layer,d=(0,u.Z)("featurelayer-pbf")&&(null===a||void 0===a?void 0:a.query.supportsFormatPBF)&&null==n,c=null!==(e=null===a||void 0===a||null===(t=a.operations)||void 0===t?void 0:t.supportsQueryAttachments)&&void 0!==e&&e;return new L.Z({url:r.path,pbfSupported:d,fieldsIndex:l,infoFor3D:n,dynamicDataSource:s,gdbVersion:i,sourceSpatialReference:o,queryAttachmentsSupported:c})}async addAttachment(e,t){await this.load();const{layer:a}=this;await(0,J.nU)(a,"editing");const r=e.attributes[a.objectIdField],s=a.parsedUrl.path+"/"+r+"/addAttachment",i=this._getLayerRequestOptions(),o=this._getFormDataForAttachment(t,i.query);try{return C((await(0,n.Z)(s,{body:o})).data.addAttachmentResult)}catch(l){throw this._createAttachmentErrorResult(r,l)}}async updateAttachment(e,t,a){await this.load();const{layer:r}=this;await(0,J.nU)(r,"editing");const s=e.attributes[r.objectIdField],i=r.parsedUrl.path+"/"+s+"/updateAttachment",o=this._getLayerRequestOptions({query:{attachmentId:t}}),l=this._getFormDataForAttachment(a,o.query);try{return C((await(0,n.Z)(i,{body:l})).data.updateAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(s,u)}}async applyEdits(e,t){var a,r,i,l,u,d,c;await this.load();const{layer:p}=this;await(0,J.nU)(p,"editing");const h=p.infoFor3D,y=null!=h,f=y||null!==(a=null===t||void 0===t?void 0:t.globalIdUsed)&&void 0!==a&&a,m=y?await this._uploadMeshesAndGetAssetMapEditsJSON(e):null,g=null!==(r=null===(i=e.addFeatures)||void 0===i?void 0:i.map((e=>T(this.layer,e,h))))&&void 0!==r?r:[],v=(await Promise.all(g)).filter(o.pC),b=null!==(l=null===(u=e.updateFeatures)||void 0===u?void 0:u.map((e=>T(this.layer,e,h))))&&void 0!==l?l:[],w=(await Promise.all(b)).filter(o.pC),F=function(e,t,a){if(!t||0===t.length)return[];if(a&&(0,_.Ey)(t))return t.map((e=>e.globalId));if((0,_.aw)(t))return t.map((e=>e.objectId));const r=a?e.globalIdField:e.objectIdField;return r?t.map((e=>e.getAttribute(r))):[]}(this.layer,e.deleteFeatures,f);(0,G.P)(v,w,p.spatialReference);const A=await M(this.layer,e),S=p.capabilities.editing.supportsAsyncApplyEdits&&y,R=(null===t||void 0===t?void 0:t.gdbVersion)||p.gdbVersion,I={gdbVersion:R,rollbackOnFailure:null===t||void 0===t?void 0:t.rollbackOnFailureEnabled,useGlobalIds:f,returnEditMoment:null===t||void 0===t?void 0:t.returnEditMoment,usePreviousEditMoment:null===t||void 0===t?void 0:t.usePreviousEditMoment,async:S};await(0,V.Px)(this.layer.url,R,!0);const E=(0,V.JV)(this.layer.url,R||null);null!==t&&void 0!==t&&t.returnServiceEditsOption?(I.edits=JSON.stringify([{id:p.layerId,adds:v,updates:w,deletes:F,attachments:A,assetMaps:m}]),I.returnServiceEditsOption=H.toJSON(null===t||void 0===t?void 0:t.returnServiceEditsOption),I.returnServiceEditsInSourceSR=null===t||void 0===t?void 0:t.returnServiceEditsInSourceSR):(I.adds=v.length?JSON.stringify(v):null,I.updates=w.length?JSON.stringify(w):null,I.deletes=F.length?f?JSON.stringify(F):F.join(","):null,I.attachments=A&&JSON.stringify(A),I.assetMaps=null!=m?JSON.stringify(m):void 0);const O=this._getLayerRequestOptions({method:"post",query:I});E&&(O.authMode="immediate",O.query.returnEditMoment=!0,O.query.sessionId=V.U8);const q=null!==t&&void 0!==t&&t.returnServiceEditsOption?p.url:p.parsedUrl.path;let Z;try{Z=S?await this._asyncApplyEdits(q+"/applyEdits",O):await(0,n.Z)(q+"/applyEdits",O)}catch(x){if(!function(e){const t=e.details.raw,a=+t.code,r=+t.extendedCode;return 500===a&&(-2147217144===r||-2147467261===r)}(x))throw x;O.authMode="immediate",Z=S?await this._asyncApplyEdits(q+"/applyEdits",O):await(0,n.Z)(q+"/applyEdits",O)}if((null===(d=p.capabilities.operations)||void 0===d||!d.supportsEditing)&&null!==(c=p.effectiveCapabilities)&&void 0!==c&&null!==(c=c.operations)&&void 0!==c&&c.supportsEditing){const e=null===s.id||void 0===s.id?void 0:s.id.findCredential(p.url);await(null===e||void 0===e?void 0:e.refreshToken())}return this._createEditsResult(Z)}async deleteAttachments(e,t){await this.load();const{layer:a}=this;await(0,J.nU)(a,"editing");const r=e.attributes[a.objectIdField],s=a.parsedUrl.path+"/"+r+"/deleteAttachments";try{return(await(0,n.Z)(s,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(C)}catch(i){throw this._createAttachmentErrorResult(r,i)}}fetchRecomputedExtents(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=e.signal;return this.load({signal:t}).then((async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:a,url:r}=this.layer,{data:s}=await(0,n.Z)("".concat(r,"/").concat(a),t),{id:o,extent:l,fullExtent:u,timeExtent:d}=s,c=l||u;return{id:o,fullExtent:c&&b.Z.fromJSON(c),timeExtent:d&&i.Z.fromJSON({start:d[0],end:d[1]})}}))}async queryAttachments(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};await this.load();const a=this._getLayerRequestOptions(t);return this.queryTask.executeAttachmentQuery(e,a)}async queryFeatures(e,t){var a;await this.load();const r=await this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)});return null!==(a=e.outStatistics)&&void 0!==a&&a.length&&r.features.length&&r.features.forEach((t=>{var a;const r=t.attributes;null===(a=e.outStatistics)||void 0===a||a.forEach((e=>{let{outStatisticFieldName:t}=e;if(t){const e=t.toLowerCase();e&&e in r&&t!==e&&(r[t]=r[e],delete r[e])}}))})),r}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}async fetchPublishingStatus(){if(!(0,j.M8)(this.layer.url))return"unavailable";const e=(0,f.v_)(this.layer.url,"status"),t=await(0,n.Z)(e,{query:{f:"json"}});return X.fromJSON(t.data.status)}async uploadAssets(e,t){const{uploadAssets:r}=await a.e(3198).then(a.bind(a,23198));return r(e,{layer:this.layer,ongoingUploads:this._ongoingAssetUploads},t)}async _asyncApplyEdits(e,t){const a=(await(0,n.Z)(e,t)).data.statusUrl;for(;;){const e=(await(0,n.Z)(a,{query:{f:"json"},responseType:"json"})).data;switch(e.status){case"Completed":return(0,n.Z)(e.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new l.Z("async-applyEdits-failed","asynchronous applyEdits call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new l.Z("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)")}await(0,y.e4)(Y)}}_createRequestQueryOptions(e){const t={...this.layer.customParameters,token:this.layer.apiKey,...null===e||void 0===e?void 0:e.query};return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}async _fetchService(e,t){if(!e){const a={};(0,u.Z)("featurelayer-advanced-symbols")&&(a.returnAdvancedSymbols=!0),(null===t||void 0===t?void 0:t.cacheBust)&&(a._ts=Date.now());const{data:r}=await(0,n.Z)(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:a,signal:null===t||void 0===t?void 0:t.signal}));e=r}this.sourceJSON=await this._patchServiceJSON(e,null===t||void 0===t?void 0:t.signal);const a=e.type;if(!W.has(a))throw new l.Z("feature-layer-source:unsupported-type",'Source type "'.concat(a,'" is not supported'))}async _patchServiceJSON(e,t){var a;if("Table"!==e.type&&e.geometryType&&(null===e||void 0===e||null===(a=e.drawingInfo)||void 0===a||!a.renderer)&&!e.defaultSymbol){const t=(0,D.bU)(e.geometryType).renderer;(0,h.RB)("drawingInfo.renderer",t,e)}if("esriGeometryMultiPatch"===e.geometryType&&e.infoFor3D&&(e.geometryType="mesh"),null==e.extent)try{const{data:a}=await(0,n.Z)(this.layer.url,this._getLayerRequestOptions({signal:t}));a.spatialReference&&(e.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:a.spatialReference})}catch(r){(0,y.r9)(r)}return e}async _ensureLatestMetadata(e){if(this.layer.userHasUpdateItemPrivileges&&this.sourceJSON.cacheMaxAge>0)return this._fetchService(null,{...e,cacheBust:!0})}async _uploadMeshesAndGetAssetMapEditsJSON(e){const{addAssetFeatures:t}=e;if(null===t||void 0===t||!t.length)return null;const a=await this._filterRedundantAssetMaps(t);if(null===t||void 0===t||!t.length)return null;const r=new Array,s=new Map;for(const n of a){const{geometry:e}=n,{vertexSpace:t}=e;if(t.isRelative)r.push(e);else{const t=R(e);s.set(t,e),n.geometry=t,r.push(t)}}await this.uploadAssets(r);for(const[n,i]of s)i.addExternalSources(n.metadata.externalSources.items);return{adds:this._getAssetMapEditsJSON(a),updates:[],deletes:[]}}_getAssetMapEditsJSON(e){const t=new Array,a=this.layer.globalIdField,r=this.layer.parsedUrl;for(const n of e){var s;const e=n.geometry,{metadata:i}=e,o=i.getExternalSourcesOnService(r),l=n.getAttribute(a);if(0===o.length){p.Z.getLogger(this).error("Skipping feature ".concat(l,". The mesh it is associated with has not been uploaded to the service and cannot be mapped to it."));continue}const{source:u}=null!==(s=o.find(E.yT))&&void 0!==s?s:o[0],{vertexSpace:d}=e,c=d.isGeoreferenced?["PROJECT_VERTICES"]:[];for(const a of u)1===a.parts.length?t.push({globalId:(0,m.zS)(),parentGlobalId:l,assetName:a.assetName,assetHash:a.parts[0].partHash,flags:c}):p.Z.getLogger(this).error("Skipping asset ".concat(a.assetName,". It does not have exactly one part, so we cannot map it to a feature."))}return t}_createEditsResult(e){const t=e.data,{layerId:a}=this.layer,r=[];let s=null;if(Array.isArray(t))for(const u of t){var n,i,o;r.push({id:u.id,editedFeatures:u.editedFeatures}),u.id===a&&(s={addResults:null!==(n=u.addResults)&&void 0!==n?n:[],updateResults:null!==(i=u.updateResults)&&void 0!==i?i:[],deleteResults:null!==(o=u.deleteResults)&&void 0!==o?o:[],attachments:u.attachments,editMoment:u.editMoment})}else s=t;const l=function(e){var t,a,r,s,n,i;const o=null===e||void 0===e?void 0:e.assetMaps;if(o){for(const e of o.addResults)e.success||p.Z.getLogger("esri.layers.graphics.sources.support.sourceUtils").error("Failed to map asset to feature with globalId ".concat(e.globalId,"."));for(const e of o.updateResults)e.success||p.Z.getLogger("esri.layers.graphics.sources.support.sourceUtils").error("Failed to map asset to feature with globalId ".concat(e.globalId,"."))}const l=null===e||void 0===e?void 0:e.attachments,u={addFeatureResults:null!==(t=null===e||void 0===e||null===(a=e.addResults)||void 0===a?void 0:a.map(C))&&void 0!==t?t:[],updateFeatureResults:null!==(r=null===e||void 0===e||null===(s=e.updateResults)||void 0===s?void 0:s.map(C))&&void 0!==r?r:[],deleteFeatureResults:null!==(n=null===e||void 0===e||null===(i=e.deleteResults)||void 0===i?void 0:i.map(C))&&void 0!==n?n:[],addAttachmentResults:null!==l&&void 0!==l&&l.addResults?l.addResults.map(C):[],updateAttachmentResults:null!==l&&void 0!==l&&l.updateResults?l.updateResults.map(C):[],deleteAttachmentResults:null!==l&&void 0!==l&&l.deleteResults?l.deleteResults.map(C):[]};return null!==e&&void 0!==e&&e.editMoment&&(u.editMoment=e.editMoment),u}(s);if(r.length>0){l.editedFeatureResults=[];for(const e of r){const{editedFeatures:t}=e,a=null!==t&&void 0!==t&&t.spatialReference?new z.Z(t.spatialReference):null;l.editedFeatureResults.push({layerId:e.id,editedFeatures:k(t,a)})}}return l}_createAttachmentErrorResult(e,t){var a;const r=(null===(a=t.details.messages)||void 0===a?void 0:a[0])||t.message,s=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new l.Z("feature-layer-source:attachment-failure",r,{code:s})}}_getFormDataForAttachment(e,t){const a=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(a)for(const r in t){const e=t[r];null!=e&&(a.set?a.set(r,e):a.append(r,e))}return a}_getLayerRequestOptions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{parsedUrl:t,gdbVersion:a,dynamicDataSource:r}=this.layer;return{...e,query:{gdbVersion:a,layer:r?JSON.stringify({source:r}):void 0,...t.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}}async _filterRedundantAssetMaps(e){const{layer:t}=this,{globalIdField:a,infoFor3D:r,parsedUrl:s}=t;if(null==r||null==a)return e;const n=(0,P.$6)(r);if(null==n)return e;const i=(0,f.v_)(s.path,"../".concat(n.id)),l=new Array,u=new Array;for(const o of e)o.geometry.metadata.getExternalSourcesOnService(s).length>0?u.push(o):l.push(o);const d=u.map((e=>e.getAttribute(a))).filter(o.pC);if(0===d.length)return e;const{assetMapFieldRoles:{parentGlobalId:c,assetHash:p}}=r,h=new B.Z;h.where="".concat(c," IN (").concat(d.map((e=>"'".concat(e,"'"))),")"),h.outFields=[p,c],h.returnGeometry=!1;const y=await(0,Q.e)(i,h),{features:m}=y;return 0===m.length?e:[...l,...u.filter((e=>{const t=e.getAttribute(a);if(!t)return!0;const{metadata:r}=e.geometry,n=m.filter((e=>e.getAttribute(c)===t));if(0===n.length)return!0;const i=n.map((e=>e.getAttribute(p)));return r.getExternalSourcesOnService(s).flatMap((e=>{let{source:t}=e;return t.flatMap((e=>e.parts.map((e=>e.partHash))))})).some((e=>i.every((t=>e!==t))))}))]}};(0,r._)([(0,g.Cb)()],$.prototype,"type",void 0),(0,r._)([(0,g.Cb)({constructOnly:!0})],$.prototype,"layer",void 0),(0,r._)([(0,g.Cb)({readOnly:!0})],$.prototype,"queryTask",null),$=(0,r._)([(0,v.j)("esri.layers.graphics.sources.FeatureLayerSource")],$);const Y=1e3,K=$},63543:(e,t,a)=>{a.d(t,{Dm:()=>d,Hq:()=>c,MS:()=>p,bU:()=>o});var r=a(93169),s=a(84652),n=a(60480),i=a(76115);function o(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?i.I4:"esriGeometryPolyline"===e?i.ET:i.lF}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let u=1;function d(e,t){if((0,r.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let a="this.".concat(t," = null;");for(const t in e)a+="this".concat(l.test(t)?".".concat(t):'["'.concat(t,'"]')," = ").concat(JSON.stringify(e[t]),";");const r=new Function("\n      return class AttributesClass$".concat(u++," {\n        constructor() {\n          ").concat(a,";\n        }\n      }\n    "))();return()=>new r}catch(a){return()=>({[t]:null,...e})}}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function p(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:n.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}}}]);
//# sourceMappingURL=1323.246edc6f.chunk.js.map