"use strict";(self.webpackChunksc_envimonitor=self.webpackChunksc_envimonitor||[]).push([[9714],{42069:(e,t,s)=>{s.d(t,{A:()=>u});var i=s(27366),l=s(42537),a=s(66978),r=s(94172),n=s(49861),o=(s(93169),s(32718),s(84936),s(69912)),d=s(5354);const u=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(){super.postscript(),(0,d.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.addHandles((0,l.kB)((()=>e.abort()))),await(0,r.N1)((()=>{var e;return null===(e=this.view.defaultsFromMap)||void 0===e?void 0:e.heightModelInfoReady}),t),(0,a.k_)(t);const s=(0,d.Wt)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(s)throw s}};return(0,i._)([(0,n.Cb)()],t.prototype,"view",void 0),(0,i._)([(0,n.Cb)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,i._)([(0,o.j)("esri.views.3d.layers.LayerView3D")],t),t}},58341:(e,t,s)=>{s.d(t,{F:()=>n});var i=s(27366),l=s(52639),a=s(49861),r=(s(93169),s(32718),s(84936),s(69912));let n=class extends l.Z{constructor(e){super(e),this.gpuResult=null}};(0,i._)([(0,a.Cb)({constructOnly:!0,clonable:"reference"})],n.prototype,"gpuResult",void 0),n=(0,i._)([(0,r.j)("esri.views.3d.layers.VoxelGraphic")],n)},9714:(e,t,s)=>{s.r(t),s.d(t,{default:()=>I});var i,l,a=s(27366),r=(s(59486),s(10064)),n=s(32718),o=s(94172),d=s(49861),u=(s(93169),s(84936),s(69912)),h=s(32035),c=s(12400),p=s(5986),y=s(41414),v=s(92975),b=s(42069),g=s(58341),_=s(39261),m=s(20488),w=s(23224),f=s(67581),V=s(69787),S=s(78952);(l=i||(i={}))[l.API=1]="API",l[l.VerboseAPI=2]="VerboseAPI",l[l.Error=3]="Error";const L=(0,c.Ue)(),T=(0,c.Ue)();let W=class extends((0,w.i)((0,b.A)(f.Z))){constructor(){super(...arguments),this._suspendedHandle=null,this._usedMemory=0,this._futureMemory=0,this.type="voxel-3d",this.slicePlaneEnabled=!1,this._wasmLayerId=-1,this.ignoresMemoryFactor=!0,this._dbgFlags=new Set}get baseUrl(){var e,t;return null!==(e=null===(t=this.layer.parsedUrl)||void 0===t?void 0:t.path)&&void 0!==e?e:""}get wasmLayerId(){return this._wasmLayerId}initialize(){var e;if(this._dbgFlags.add(i.Error),"local"!==this.view.viewingMode)throw new r.Z("voxel:unsupported-viewingMode","Voxel layers support local viewingMode only.",{});if(null===(e=this.view._stage.renderView.renderingContext.capabilities.colorBufferFloat)||void 0===e||!e.textureFloat)throw new r.Z("voxel:missing-color-buffer-float","Voxel layers require the WebGL2 extension EXT_color_buffer_float",{});const t=this.layer.spatialReference;if(!(0,v.fS)(t,this.view.spatialReference))throw(0,V.lE)("voxel layer",t.wkid,this.view.spatialReference.wkid);const s=this.layer.currentVariableId,l=this.layer.getVolume(s),a=this.layer.getVariable(s);if(null!=l&&null!=a){const e=l.dimensions[0],t=l.dimensions[1],s=l.zDimension;if(s>1){const i=l.dimensions[s],r=e.size*t.size*i.size;let n=1;switch(a.renderingFormat.type){case"Int16":case"UInt16":n=2;break;case"Int32":case"UInt32":case"Float32":n=4}this._futureMemory=n*r}}const n=(0,_.JF)(this).then((e=>{this._wasmLayerId=e,this._suspendedHandle=(0,o.YP)((()=>this.suspended),(e=>{const t=(0,_.$L)(this.view);t&&t.setEnabled(this,!e)}),o.nn),this.addHandles([(0,o.YP)((()=>this.layer.renderMode),(e=>this._pushRenderModeToWasm(e))),(0,o.YP)((()=>this.layer.currentVariableId),(e=>this._pushCurrentVariableIdToWasm(e))),(0,o.YP)((()=>this.layer.getSections()),(e=>this._pushSectionsToWasm(e))),(0,o.YP)((()=>this.layer.getVariableStyles()),(e=>this._pushVariableStylesToWasm(e))),(0,o.YP)((()=>this.layer.getVolumeStyles()),(e=>this._pushVolumeStylesToWasm(e))),(0,o.YP)((()=>this.layer.enableDynamicSections),(e=>this._pushEnableDynamicSectionsToWasm(e))),(0,o.YP)((()=>this.layer.enableIsosurfaces),(e=>this._pushEnableIsosurfacesToWasm(e))),(0,o.YP)((()=>this.layer.enableSections),(e=>this._pushEnableSectionsToWasm(e))),(0,o.YP)((()=>this.layer.enableSlices),(e=>this._pushEnableSlicesToWasm(e))),(0,o.YP)((()=>[this.layer.timeOffset,this.layer.timeExtent,this.layer.useViewTime]),(()=>this._updateLayerTimeProperties())),(0,o.YP)((()=>this.slicePlaneEnabled),(e=>this._pushAnalysisSliceToWasm(e,this.view.slicePlane))),(0,o.YP)((()=>this.view.slicePlane),(e=>this._pushAnalysisSliceToWasm(this.slicePlaneEnabled,e)))])})).catch((e=>{if((0,_.mq)(this),this._wasmLayerId=-1,-1===e)throw new r.Z("voxel:addLayer-failure","The voxel layer description was invalid.",{});if(-2===e)throw new r.Z("voxel:addLayer-failure","The voxel layer web assembly module failed to download.",{})}));this.addResolvingPromise(n)}destroy(){(0,_.mq)(this),this._suspendedHandle&&(this._suspendedHandle.remove(),this._suspendedHandle=null)}isUpdating(){const e=(0,_.$L)(this.view);return!(this._wasmLayerId<0||null==e)&&e.isUpdating(this._wasmLayerId)}updatingFlagChanged(){this.notifyChange("updating")}get usedMemory(){return this._usedMemory}get unloadedMemory(){return this._futureMemory}get performanceInfo(){return new m.W(this.usedMemory)}get visibleAtCurrentScale(){return(0,V.GB)(this.layer.effectiveScaleRange,this.view.scale)}whenGraphicBounds(e,t){const s=e.attributes["Voxel.WorldPosition"];if(s){const e=(0,y.cS)(),t=JSON.parse(s);if((0,p.S)(t,this.view.renderSpatialReference,T,this.view.spatialReference||S.Z.WGS84))return(0,y.pp)(e,T),Promise.resolve({boundingBox:e,screenSpaceObjects:[]})}return Promise.reject()}async whenGraphicAttributes(e,t){const s=(0,_.$L)(this.view);if(!s)return e;const i=[];for(const l of e)this._isValidVoxelGraphic(l)&&i.push(l);return i.length&&await s.getOtherFieldPopupValues(i,t),e}_isValidVoxelGraphic(e){return e instanceof g.F}setUsedMemory(e){this._usedMemory=e,this._futureMemory=0}captureFrustum(){const e=(0,_.$L)(this.view);null===e||void 0===e||e.captureFrustum()}toggleFullVolumeExtentDraw(){const e=(0,_.$L)(this.view);null===e||void 0===e||e.toggleFullVolumeExtentDraw(this)}getLayerTimes(){var e;const t=(0,_.$L)(this.view);return null!==(e=null===t||void 0===t?void 0:t.getLayerTimes(this))&&void 0!==e?e:[]}getCurrentLayerTimeIndex(){var e;const t=(0,_.$L)(this.view);return null!==(e=null===t||void 0===t?void 0:t.getCurrentLayerTimeIndex(this))&&void 0!==e?e:0}dropQueryRenderTarget(){const e=(0,_.$L)(this.view);null===e||void 0===e||e.dropQueryRenderTarget()}_pushRenderModeToWasm(e){const t=(0,_.$L)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushRenderModeToWasm() called, "+(t?"have WASM":"don't have WASM!!!")),(null===t||void 0===t?void 0:t.setRenderMode(this,e))||this._dbg(i.Error,"VoxelLayerView3D._pushRenderModeToWasm() failed!")}_pushSectionsToWasm(e){const t=(0,_.$L)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushSectionsToWasm() called, "+(t?"have WASM":"don't have WASM!!!")),(null===t||void 0===t?void 0:t.setStaticSections(this,e))||this._dbg(i.Error,"VoxelLayerView3D._pushSectionsToWasm() failed!")}_pushCurrentVariableIdToWasm(e){const t=(0,_.$L)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushCurrentVariableIdToWasm() called!, "+(t?"have WASM":"don't have WASM!!!")),(null===t||void 0===t?void 0:t.setCurrentVariable(this,e))||this._dbg(i.Error,"VoxelLayerView3D._pushCurrentVariableIdToWasm() failed!")}_pushVariableStylesToWasm(e){const t=(0,_.$L)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushVariableStylesToWasm() called, "+(t?"have WASM":"don't have WASM!!!")),(null===t||void 0===t?void 0:t.setVariableStyles(this,e))||this._dbg(i.Error,"VoxelLayerView3D._pushVariableStylesToWasm() failed!")}_accountForEnableSlices(e,t){const s=null!=t?t:this.layer.enableSlices;for(let i=0;i<e.length;++i){const t=e[i];for(const e of t.slices)e.enabled=e.enabled&&s}}_pushVolumeStylesToWasm(e){const t=(0,_.$L)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushVolumeStylesToWasm() called, "+(t?"have WASM":"don't have WASM!!!")),t&&(this._accountForEnableSlices(e,null),t.setVolumeStyles(this,e)||this._dbg(i.Error,"VoxelLayerView3D._pushVolumeStylesToWasm() failed!"))}_pushAnalysisSliceToWasm(e,t){const s=(0,_.$L)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushAnalysisSliceToWasm() called, "+(s?"have WASM":"don't have WASM!!!"));let l=!1;if(s){if(t){const i=t.origin;(0,h.e)(L,t.basis1,t.basis2),(0,h.n)(L,L),l=s.setAnalysisSlice(this,e,i,L)}else(0,h.i)(L,0,0,1),l=s.setAnalysisSlice(this,!1,L,L);l||this._dbg(i.Error,"VoxelLayerView3D._pushAnalysisSliceToWasm() failed!")}}_updateLayerTimeProperties(){const e=(0,_.$L)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._updateLayerTimeProperties() called, "+(e?"have WASM":"don't have WASM!!!")),e&&e.updateLayerTimeProperties(this)}_pushEnableDynamicSectionsToWasm(e){const t=(0,_.$L)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushEnableDynamicSectionsToWasm() called, "+(t?"have WASM":"don't have WASM!!!")),(null===t||void 0===t?void 0:t.setEnableDynamicSections(this,e))||this._dbg(i.Error,"VoxelLayerView3D._pushEnableDynamicSectionsToWasm() failed!")}_pushEnableSlicesToWasm(e){const t=(0,_.$L)(this.view);if(this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushEnableSlicesToWasm() called, "+(t?"have WASM":"don't have WASM!!!")),t){const s=this.layer.getVolumeStyles();this._accountForEnableSlices(s,e),t.setVolumeStyles(this,s)||this._dbg(i.Error,"VoxelLayerView3D._pushEnableSlicesToWasm() failed!")}}_pushEnableIsosurfacesToWasm(e){const t=(0,_.$L)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushEnableIsosurfacesToWasm() called, "+(t?"have WASM":"don't have WASM!!!")),(null===t||void 0===t?void 0:t.setEnableIsosurfaces(this,e))||this._dbg(i.Error,"VoxelLayerView3D._pushEnableIsosurfacesToWasm() failed!")}_pushEnableSectionsToWasm(e){const t=(0,_.$L)(this.view);this._dbg(i.VerboseAPI,"VoxelLayerView3D._pushEnableSectionsToWasm() called, "+(t?"have WASM":"don't have WASM!!!")),(null===t||void 0===t?void 0:t.setEnableSections(this,e))||this._dbg(i.Error,"VoxelLayerView3D._pushEnableSectionsToWasm() failed!")}_dbg(e,t){this._dbgFlags.has(e)&&(e===i.Error?n.Z.getLogger(this).error(t):n.Z.getLogger(this).warn(t))}};(0,a._)([(0,d.Cb)()],W.prototype,"layer",void 0),(0,a._)([(0,d.Cb)()],W.prototype,"baseUrl",null),(0,a._)([(0,d.Cb)({type:Boolean})],W.prototype,"slicePlaneEnabled",void 0),(0,a._)([(0,d.Cb)({readOnly:!0})],W.prototype,"visibleAtCurrentScale",null),W=(0,a._)([(0,u.j)("esri.views.3d.layers.VoxelLayerView3D")],W);const I=W},23224:(e,t,s)=>{s.d(t,{i:()=>o});var i=s(27366),l=s(10064),a=(s(32718),s(93169),s(84936),s(69912)),r=s(37270),n=s(24405);const o=e=>{let t=class extends e{_validateFetchPopupFeatures(e){const{layer:t}=this,{popupEnabled:s}=t;if(!s)throw new l.Z("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:t});if(!(0,n.V5)(t,e))throw new l.Z("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:t})}async prepareFetchPopupFeatures(e){}async fetchPopupFeaturesFromGraphics(e,t){if(this._validateFetchPopupFeatures(t),0===e.length)return[];const s="scene"===this.layer.type&&null!=this.layer.associatedLayer?this.layer.associatedLayer:this.layer;let i=[];"fieldsIndex"in this.layer&&(i=(0,r.Lk)(this.layer.fieldsIndex,await(0,n.e7)(s,(0,n.V5)(this.layer,t)))),await this.prepareFetchPopupFeatures(i);const l=new Set,a=[],o=[];for(const n of e)(0,r.Gm)(i,n,l)?o.push(n):a.push(n);if(0===o.length)return a;const d=new Map;for(let r=0;r<e.length;r++){var u;d.set(null!==(u=e[r].getObjectId())&&void 0!==u?u:0,r)}const h=await this.whenGraphicAttributes(o,[...l]).catch((()=>o)).then((e=>a.concat(e)));return h.sort(((e,t)=>{var s,i,l,a;const r=null!==(s=e.getObjectId())&&void 0!==s?s:0,n=null!==(i=d.get(r))&&void 0!==i?i:0,o=null!==(l=t.getObjectId())&&void 0!==l?l:0;return n-(null!==(a=d.get(o))&&void 0!==a?a:0)})),h}};return t=(0,i._)([(0,a.j)("esri.views.3d.layers.support.PopupSceneLayerView")],t),t}},67581:(e,t,s)=>{s.d(t,{Z:()=>v});var i=s(27366),l=s(7138),a=s(91505),r=s(79056),n=s(32718),o=s(92026),d=s(67426),u=s(49861),h=(s(93169),s(84936),s(69912)),c=s(46634),p=s(69787);let y=class extends((0,r.IG)((0,d.v)(a.Z.EventedMixin(l.Z)))){constructor(e){super(e),this._updatingHandles=new c.R,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const s=this.layer&&this.layer.id||"no id",i=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";n.Z.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(i,"', id: '").concat(s,"')"),e)}}))}destroy(){this._updatingHandles=(0,o.SC)(this._updatingHandles)}get fullOpacity(){var e,t,s,i;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(s=null===(i=this.parent)||void 0===i?void 0:i.fullOpacity)&&void 0!==s?s:1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){var e;const t=this.view.timeExtent,s=null===(e=this.layer)||void 0===e?void 0:e.visibilityTimeExtent;return!t||!s||!t.intersection(s).isEmpty}canResume(){var e,t,s;const i=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(s=this.view)||void 0===s?void 0:s.ready)&&(0,p.Cy)(i)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){var e,t;const s=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};null!==(t=this.view)&&void 0!==t&&t.ready||(s.viewNotReady=!0),this.layer&&this.layer.loaded||(s.layerNotLoaded=!0);const i=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,p.Cy)(i)&&this.visibleAtCurrentScale||(s.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(s.outsideVisibilityTimeExtent=!0),this.visible||(s.layerInvisible=!0),s}isUpdating(){return!1}};(0,i._)([(0,u.Cb)()],y.prototype,"view",void 0),(0,i._)([(0,u.Cb)()],y.prototype,"fullOpacity",null),(0,i._)([(0,u.Cb)()],y.prototype,"layer",void 0),(0,i._)([(0,u.Cb)()],y.prototype,"parent",void 0),(0,i._)([(0,u.Cb)({readOnly:!0})],y.prototype,"suspended",null),(0,i._)([(0,u.Cb)({readOnly:!0})],y.prototype,"suspendInfo",null),(0,i._)([(0,u.Cb)({readOnly:!0})],y.prototype,"legendEnabled",null),(0,i._)([(0,u.Cb)({type:Boolean,readOnly:!0})],y.prototype,"updating",null),(0,i._)([(0,u.Cb)({readOnly:!0})],y.prototype,"updatingProgress",null),(0,i._)([(0,u.Cb)()],y.prototype,"updateSuspended",null),(0,i._)([(0,u.Cb)()],y.prototype,"visible",null),(0,i._)([(0,u.Cb)({readOnly:!0})],y.prototype,"visibleAtCurrentScale",null),(0,i._)([(0,u.Cb)({readOnly:!0})],y.prototype,"visibleAtCurrentTimeExtent",null),y=(0,i._)([(0,h.j)("esri.views.layers.LayerView")],y);const v=y},24405:(e,t,s)=>{s.d(t,{V5:()=>a,e7:()=>l,zc:()=>r});var i=s(37270);async function l(e){var t,s;let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.popupTemplate;if(null==l)return[];const a=await l.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:r}=l,{objectIdField:n,typeIdField:o,globalIdField:d,relationships:u}=e;if(a.includes("*"))return["*"];const h=r?(0,i.CH)(e):[],c=(0,i.Q0)(e.fieldsIndex,[...a,...h]);return o&&c.push(o),c&&n&&null!==(t=e.fieldsIndex)&&void 0!==t&&t.has(n)&&!c.includes(n)&&c.push(n),c&&d&&null!==(s=e.fieldsIndex)&&void 0!==s&&s.has(d)&&!c.includes(d)&&c.push(d),u&&u.forEach((t=>{var s;const{keyField:i}=t;c&&i&&(null===(s=e.fieldsIndex)||void 0===s?void 0:s.has(i))&&!c.includes(i)&&c.push(i)})),c}function a(e,t){return e.popupTemplate?e.popupTemplate:null!=t&&t.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}function r(e,t){return null!=a(e,{defaultPopupTemplateEnabled:t})}}}]);
//# sourceMappingURL=9714.3a5f27a8.chunk.js.map