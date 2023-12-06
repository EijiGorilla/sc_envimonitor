"use strict";(self.webpackChunksc_envimonitor=self.webpackChunksc_envimonitor||[]).push([[5688,2463,2170],{92463:(e,t,r)=>{r.r(t),r.d(t,{hydratedAdapter:()=>l});var n=r(53866),i=r(77577),s=r(585),o=r(80885),a=r(29909);const l={convertToGEGeometry:function(e,t){if(null==t)return null;let r="cache"in t?t.cache._geVersion:void 0;return null==r&&(r=e.convertJSONToGeometry(t),"cache"in t&&(t.cache._geVersion=r)),r},exportPoint:function(e,t,r){const n=e.hasZ(t),i=e.hasM(t),o=new s.Z({x:e.getPointX(t),y:e.getPointY(t),spatialReference:r});return n&&(o.z=e.getPointZ(t)),i&&(o.m=e.getPointM(t)),o.cache._geVersion=t,o},exportPolygon:function(e,t,r){const n=new o.Z({rings:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:r});return n.cache._geVersion=t,n},exportPolyline:function(e,t,r){const n=new a.Z({paths:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:r});return n.cache._geVersion=t,n},exportMultipoint:function(e,t,r){const n=new i.Z({hasZ:e.hasZ(t),hasM:e.hasM(t),points:e.exportPoints(t),spatialReference:r});return n.cache._geVersion=t,n},exportExtent:function(e,t,r){const i=e.hasZ(t),s=e.hasM(t),o=new n.Z({xmin:e.getXMin(t),ymin:e.getYMin(t),xmax:e.getXMax(t),ymax:e.getYMax(t),spatialReference:r});if(i){const r=e.getZExtent(t);o.zmin=r.vmin,o.zmax=r.vmax}if(s){const r=e.getMExtent(t);o.mmin=r.vmin,o.mmax=r.vmax}return o.cache._geVersion=t,o}}},2170:(e,t,r)=>{r.r(t),r.d(t,{buffer:()=>P,changeDefaultSpatialReferenceTolerance:()=>U,clearDefaultSpatialReferenceTolerance:()=>W,clip:()=>a,contains:()=>c,convexHull:()=>M,crosses:()=>u,cut:()=>l,densify:()=>F,difference:()=>b,disjoint:()=>v,distance:()=>d,equals:()=>h,extendedSpatialReferenceInfo:()=>o,flipHorizontal:()=>V,flipVertical:()=>z,generalize:()=>j,geodesicArea:()=>Y,geodesicBuffer:()=>x,geodesicDensify:()=>I,geodesicLength:()=>H,intersect:()=>R,intersectLinesToPoints:()=>N,intersects:()=>f,isSimple:()=>_,nearestCoordinate:()=>E,nearestVertex:()=>Z,nearestVertices:()=>O,offset:()=>A,overlaps:()=>g,planarArea:()=>k,planarLength:()=>T,relate:()=>y,rotate:()=>S,simplify:()=>w,symmetricDifference:()=>G,touches:()=>p,union:()=>C,within:()=>m});var n=r(99058),i=r(92463);function s(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function o(e){return n.G.extendedSpatialReferenceInfo(e)}function a(e,t){return n.G.clip(i.hydratedAdapter,s(e),e,t)}function l(e,t){return n.G.cut(i.hydratedAdapter,s(e),e,t)}function c(e,t){return n.G.contains(i.hydratedAdapter,s(e),e,t)}function u(e,t){return n.G.crosses(i.hydratedAdapter,s(e),e,t)}function d(e,t,r){return n.G.distance(i.hydratedAdapter,s(e),e,t,r)}function h(e,t){return n.G.equals(i.hydratedAdapter,s(e),e,t)}function f(e,t){return n.G.intersects(i.hydratedAdapter,s(e),e,t)}function p(e,t){return n.G.touches(i.hydratedAdapter,s(e),e,t)}function m(e,t){return n.G.within(i.hydratedAdapter,s(e),e,t)}function v(e,t){return n.G.disjoint(i.hydratedAdapter,s(e),e,t)}function g(e,t){return n.G.overlaps(i.hydratedAdapter,s(e),e,t)}function y(e,t,r){return n.G.relate(i.hydratedAdapter,s(e),e,t,r)}function _(e){return n.G.isSimple(i.hydratedAdapter,s(e),e)}function w(e){return n.G.simplify(i.hydratedAdapter,s(e),e)}function M(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n.G.convexHull(i.hydratedAdapter,s(e),e,t)}function b(e,t){return n.G.difference(i.hydratedAdapter,s(e),e,t)}function G(e,t){return n.G.symmetricDifference(i.hydratedAdapter,s(e),e,t)}function R(e,t){return n.G.intersect(i.hydratedAdapter,s(e),e,t)}function C(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return n.G.union(i.hydratedAdapter,s(e),e,t)}function A(e,t,r,o,a,l){return n.G.offset(i.hydratedAdapter,s(e),e,t,r,o,a,l)}function P(e,t,r){let o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return n.G.buffer(i.hydratedAdapter,s(e),e,t,r,o)}function x(e,t,r,o,a,l){return n.G.geodesicBuffer(i.hydratedAdapter,s(e),e,t,r,o,a,l)}function E(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return n.G.nearestCoordinate(i.hydratedAdapter,s(e),e,t,r)}function Z(e,t){return n.G.nearestVertex(i.hydratedAdapter,s(e),e,t)}function O(e,t,r,o){return n.G.nearestVertices(i.hydratedAdapter,s(e),e,t,r,o)}function D(e){var t,r;return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e&&null!==(t=null===(r=e.extent)||void 0===r?void 0:r.center)&&void 0!==t?t:null}function S(e,t,r){var i;if(null==e)throw new q;const s=e.spatialReference;if(null==(r=null!==(i=r)&&void 0!==i?i:D(e)))throw new q;const o=e.constructor.fromJSON(n.G.rotate(e,t,r));return o.spatialReference=s,o}function V(e,t){var r;if(null==e)throw new q;const i=e.spatialReference;if(null==(t=null!==(r=t)&&void 0!==r?r:D(e)))throw new q;const s=e.constructor.fromJSON(n.G.flipHorizontal(e,t));return s.spatialReference=i,s}function z(e,t){var r;if(null==e)throw new q;const i=e.spatialReference;if(null==(t=null!==(r=t)&&void 0!==r?r:D(e)))throw new q;const s=e.constructor.fromJSON(n.G.flipVertical(e,t));return s.spatialReference=i,s}function j(e,t,r,o){return n.G.generalize(i.hydratedAdapter,s(e),e,t,r,o)}function F(e,t,r){return n.G.densify(i.hydratedAdapter,s(e),e,t,r)}function I(e,t,r){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return n.G.geodesicDensify(i.hydratedAdapter,s(e),e,t,r,o)}function k(e,t){return n.G.planarArea(i.hydratedAdapter,s(e),e,t)}function T(e,t){return n.G.planarLength(i.hydratedAdapter,s(e),e,t)}function Y(e,t,r){return n.G.geodesicArea(i.hydratedAdapter,s(e),e,t,r)}function H(e,t,r){return n.G.geodesicLength(i.hydratedAdapter,s(e),e,t,r)}function N(e,t){return n.G.intersectLinesToPoints(i.hydratedAdapter,s(e),e,t)}function U(e,t){n.G.changeDefaultSpatialReferenceTolerance(e,t)}function W(e){n.G.clearDefaultSpatialReferenceTolerance(e)}class q extends Error{constructor(){super("Illegal Argument Exception")}}},15559:(e,t,r)=>{r.d(t,{Gb:()=>u,Jf:()=>d,_q:()=>h,cA:()=>f});r(59486);var n=r(10064),i=r(68860),s=r(38516),o=r(92975),a=(r(29909),r(80885),r(585),r(78952));function l(e){if(!e)return null;if((0,o.sT)(e)&&e.wkid){const t=s.Dg[e.wkid];if(t)return t}const t=e.wkt2||e.wkt;if(t){const e=function(e){const t=s.FQ.exec(e);if(!t||2!==t.length)return null;const r=t[1].split(",");if(!r||r.length<3)return null;const n=parseFloat(r[1]),i=parseFloat(r[2]);return isNaN(n)||isNaN(i)?null:{a:n,f:0===i?0:1/i}}(t);if(e)return e}return null}function c(e){const t=l(null!==e&&void 0!==e?e:a.Z.WGS84);if(function(e){return null!=e&&"b"in e&&"eSq"in e&&"radius"in e}(t))return t;const r=t.a*(1-t.f);return Object.assign(t,{b:r,eSq:1-(r/t.a)**2,radius:(2*t.a+r)/3,densificationRatio:1e4/((2*t.a+r)/3)})}function u(e){return null!==l(e)}function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"meters";if(!e)throw new n.Z("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(e.some((e=>!u(e.spatialReference))))throw new n.Z("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");const r=[];for(let n=0;n<e.length;n++){const s=e[n],{spatialReference:o}=s,a="polyline"===s.type?s.paths:s.rings;let l=0;for(let e=0;e<a.length;e++){const t=a[e];let r=0;for(let e=1;e<t.length;e++){const n=t[e-1][0],i=t[e][0],s=t[e-1][1],a=t[e][1];if(s!==a||n!==i){const e=new h;f(e,[n,s],[i,a],o),r+=e.distance}}l+=r}l=(0,i.En)(l,"meters",t),r.push(l)}return r}class h{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;this.distance=e,this.azimuth=t,this.reverseAzimuth=r}}function f(e,t,r,n){const i=t[0]*s.Yr,o=t[1]*s.Yr,a=r[0]*s.Yr,l=r[1]*s.Yr,{a:u,b:d,f:h,radius:f}=c(n),p=a-i,m=Math.atan((1-h)*Math.tan(o)),v=Math.atan((1-h)*Math.tan(l)),g=Math.sin(m),y=Math.cos(m),_=Math.sin(v),w=Math.cos(v);let M,b,G,R,C,A,P,x,E,Z,O=1e3,D=p;do{if(P=Math.sin(D),x=Math.cos(D),G=Math.sqrt(w*P*(w*P)+(y*_-g*w*x)*(y*_-g*w*x)),0===G)return e.distance=0,e.azimuth=void 0,e.reverseAzimuth=void 0,e;C=g*_+y*w*x,A=Math.atan2(G,C),E=y*w*P/G,b=1-E*E,R=C-2*g*_/b,isNaN(R)&&(R=0),Z=h/16*b*(4+h*(4-3*b)),M=D,D=p+(1-Z)*h*E*(A+Z*G*(R+Z*C*(2*R*R-1)))}while(Math.abs(D-M)>1e-12&&--O>0);if(0===O){const t=f,r=Math.acos(Math.sin(o)*Math.sin(l)+Math.cos(o)*Math.cos(l)*Math.cos(a-i))*t,n=a-i,c=Math.sin(n)*Math.cos(l),u=Math.cos(o)*Math.sin(l)-Math.sin(o)*Math.cos(l)*Math.cos(n),d=Math.atan2(c,u);return e.azimuth=d/s.Yr,e.distance=r,e.reverseAzimuth=void 0,e}const S=b*(u*u-d*d)/(d*d),V=S/1024*(256+S*(S*(74-47*S)-128)),z=d*(1+S/16384*(4096+S*(S*(320-175*S)-768)))*(A-V*G*(R+V/4*(C*(2*R*R-1)-V/6*R*(4*G*G-3)*(4*R*R-3)))),j=Math.atan2(w*Math.sin(D),y*_-g*w*Math.cos(D)),F=Math.atan2(y*Math.sin(D),y*_*Math.cos(D)-g*w);return e.azimuth=j/s.Yr,e.distance=z,e.reverseAzimuth=F/s.Yr,e}},77671:(e,t,r)=>{r.d(t,{Y:()=>i});var n=r(74177);const i={readOnly:!0,get(){return(0,n.R)(this.view)}}},74509:(e,t,r)=>{r.d(t,{Jn:()=>l,LR:()=>_,RL:()=>c,Uy:()=>v,VW:()=>a,W_:()=>m,Wb:()=>g,jG:()=>w,kf:()=>y,tR:()=>M,tq:()=>p,vQ:()=>d,zx:()=>h});var n=r(88152);function i(e){return e?w:M}function s(e,t){return null!==t&&void 0!==t&&t.mode?t.mode:i(e).mode}function o(e,t){return null!=t?t:i(e)}function a(e,t){return s(null!=e&&e.hasZ,t)}function l(e,t){return o(null!=e&&!!e.hasZ,t)}function c(e){var t,r;const i=u(e),s=a(e.geometry,i);return{mode:s,offset:null!=i&&"on-the-ground"!==s?(null!==(t=i.offset)&&void 0!==t?t:0)*(0,n.Z7)(null!==(r=i.unit)&&void 0!==r?r:"meters"):0}}function u(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function d(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return f(e,t.x,t.y,t.hasZ?t.z:0,t.spatialReference,r,n)}function h(e,t,r,n){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return f(e,t[0],t[1],t.length>2?t[2]:0,r,n,i)}function f(e,t,r,n,i,s){let o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;if(null==s)return;const a=null!=o?o.mode:"absolute-height";if("on-the-ground"===a)return 0;const{absoluteZ:l}=p(t,r,n,i,e,s);return function(e,t,r,n,i,s,o,a){var l,c;const u=null!=(null===o||void 0===o?void 0:o.offset)?o.offset:0;switch(a){case"absolute-height":return e-u;case"relative-to-ground":return e-((null!==(l=s.elevationProvider.getElevation(t,r,n,i,"ground"))&&void 0!==l?l:0)+u);case"relative-to-scene":return e-((null!==(c=s.elevationProvider.getElevation(t,r,n,i,"scene"))&&void 0!==c?c:0)+u)}}(l,t,r,n,i,e,o,a)}function p(e,t,r,n,i,s){const o=null!=s.offset?s.offset:0;switch(s.mode){case"absolute-height":return{absoluteZ:r+o,elevation:0};case"on-the-ground":{var a;const r=null!==(a=i.elevationProvider.getElevation(e,t,0,n,"ground"))&&void 0!==a?a:0;return{absoluteZ:r,elevation:r}}case"relative-to-ground":{var l;const s=null!==(l=i.elevationProvider.getElevation(e,t,r,n,"ground"))&&void 0!==l?l:0;return{absoluteZ:r+s+o,elevation:s}}case"relative-to-scene":{var c;const s=null!==(c=i.elevationProvider.getElevation(e,t,r,n,"scene"))&&void 0!==c?c:0;return{absoluteZ:r+s+o,elevation:s}}}}function m(e,t){if(null==t)return!1;const{mode:r}=t;return null!=r&&("scene"===e&&"relative-to-scene"===r||"ground"===e&&"absolute-height"!==r)}function v(e,t,r){return r&&r.mode!==t?"".concat(e," only support ").concat(t," elevation mode"):null}function g(e,t,r){return(null===r||void 0===r?void 0:r.mode)===t?"".concat(e," do not support ").concat(t," elevation mode"):null}function y(e,t){return null!=(null===t||void 0===t?void 0:t.featureExpressionInfo)&&"0"!==t.featureExpressionInfo.expression?"".concat(e," do not support featureExpressionInfo"):null}function _(e,t){t&&e.warn(".elevationInfo=",t)}const w={mode:"absolute-height",offset:0},M={mode:"on-the-ground",offset:null}},98074:(e,t,r)=>{r.d(t,{p:()=>l});var n=r(27366),i=r(42537),s=r(67426),o=r(49861),a=(r(25243),r(63780),r(93169),r(69912));const l=e=>{let t=class extends((0,s.v)(e)){constructor(){super(...arguments),this.parent=null,this._userInteractive=!1,this._interactiveViewModelCount=0}get interactive(){return this._interactiveViewModelCount>0||this._userInteractive}set interactive(e){this._userInteractive=e}get updating(){return!1}get visible(){return null==this.parent||this.parent.visible&&!this.parent.suspended}set visible(e){this._overrideIfSome("visible",e)}forceInteractiveForViewModel(){return this._interactiveViewModelCount++,(0,i.kB)((()=>this._interactiveViewModelCount--))}};return(0,n._)([(0,o.Cb)({readOnly:!0})],t.prototype,"type",void 0),(0,n._)([(0,o.Cb)({constructOnly:!0})],t.prototype,"analysis",void 0),(0,n._)([(0,o.Cb)({constructOnly:!0})],t.prototype,"parent",void 0),(0,n._)([(0,o.Cb)({constructOnly:!0})],t.prototype,"view",void 0),(0,n._)([(0,o.Cb)({type:Boolean})],t.prototype,"interactive",null),(0,n._)([(0,o.Cb)()],t.prototype,"_userInteractive",void 0),(0,n._)([(0,o.Cb)({readOnly:!0})],t.prototype,"updating",null),(0,n._)([(0,o.Cb)()],t.prototype,"visible",null),(0,n._)([(0,o.Cb)()],t.prototype,"_interactiveViewModelCount",void 0),t=(0,n._)([(0,a.j)("esri.views.3d.analysis.AnalysisView3D")],t),t}},51817:(e,t,r)=>{var n;r.d(t,{e:()=>n}),function(e){e[e.Auto=0]="Auto",e[e.Euclidean=1]="Euclidean",e[e.Geodesic=2]="Geodesic"}(n||(n={}))},39409:(e,t,r)=>{r.d(t,{D:()=>i});var n=r(68860);class i{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.spatialReference=e}get spatialReference(){return this._spatialReference}set spatialReference(e){e!==this._spatialReference&&(this._spatialReference=e,this._updateNormalizationFactors())}normalizeDistance(e){return e*this._metersPerDistanceUnit}normalizeElevation(e){return e*this._metersPerElevationUnit}normalizeArea(e){return e*this._squareMetersPerAreaUnit}_updateNormalizationFactors(){this._metersPerDistanceUnit=(0,n.c9)(this._spatialReference,1),this._metersPerElevationUnit=(0,n.c9)(this._spatialReference,1),this._squareMetersPerAreaUnit=this._metersPerDistanceUnit*this._metersPerDistanceUnit}}},33906:(e,t,r)=>{r.d(t,{G:()=>s,e:()=>o});var n=r(79803),i=r(77648);function s(e,t,r){var s;let o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const a=(0,n.tryProjectWithZConversion)(e,t);return null==a?null:(a.hasZ&&!o||null==r||(a.z=null!==(s=(0,i.KO)(r,a))&&void 0!==s?s:0),a)}function o(e,t,r){r.warnOnce("Failed to project analysis geometry (id: '".concat(e.id,"'), projection from spatial reference (wkid: '").concat(t.wkid,"') to view spatial reference is not supported. Projection may be possible after calling projection.load()."))}},26243:(e,t,r)=>{r.d(t,{H:()=>o,c:()=>a});var n=r(17842),i=r(88396),s=r(11186);function o(e,t){if((0,s.s)(t,0,0,0),e.length>0){for(let r=0;r<e.length;++r)(0,s.g)(t,t,e[r]);(0,s.i)(t,t,1/e.length)}}function a(e,t,r,n){n.projectToRenderScreen(e,l),n.projectToRenderScreen(t,u),(0,i.c)(r,d,c),(0,i.e)(r,r)}const l=(0,n.J$)(),c=l,u=(0,n.J$)(),d=u},33837:(e,t,r)=>{r.d(t,{r:()=>h});var n=r(14226),i=r(81949),s=r(11186),o=r(71353),a=r(67077),l=r(52168),c=r(79685),u=r(56529),d=r(58901);class h extends l._{constructor(e,t){super(e),this._hasExternalMaterial=!1,this._hasExternalMaterial=null!=t,this._material=null!=t?t:new d.U({width:1,color:(0,a.f)(1,0,1,1),stippleOffColor:null,stipplePattern:null,stipplePreferContinuous:!0,isClosed:!1,falloff:0,innerColor:null,innerWidth:1,hasPolygonOffset:!1,renderOccluded:u.yD.OccludeAndTransparent,isDecoration:!!e.isDecoration,writeDepth:!0}),this.applyProperties(e)}setGeometryFromRenderSpacePoint(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;this.geometry=[[[e[0]-t,e[1],e[2]],[e[0]+t,e[1],e[2]]],[[e[0],e[1]-t,e[2]],[e[0],e[1]+t,e[2]]],[[e[0],e[1],e[2]-t],[e[0],e[1],e[2]+t]]]}setGeometryFromExtent(e){const t=this.view.spatialReference,r=(0,o.c)(),n=(0,o.c)(),i=100,a=[];(0,s.s)(r,e[0],e[1],i),this.view.renderCoordsHelper.toRenderCoords(r,t,n),a.push([n[0],n[1],n[2]]),(0,s.s)(r,e[2],e[1],i),this.view.renderCoordsHelper.toRenderCoords(r,t,n),a.push([n[0],n[1],n[2]]),(0,s.s)(r,e[2],e[3],i),this.view.renderCoordsHelper.toRenderCoords(r,t,n),a.push([n[0],n[1],n[2]]),(0,s.s)(r,e[0],e[3],i),this.view.renderCoordsHelper.toRenderCoords(r,t,n),a.push([n[0],n[1],n[2]]),(0,s.s)(r,e[0],e[1],i),this.view.renderCoordsHelper.toRenderCoords(r,t,n),a.push([n[0],n[1],n[2]]),(0,s.s)(r,e[0],e[1],i),this.view.renderCoordsHelper.toRenderCoords(r,t,n),a.push([n[0],n[1],n[2]]),this.geometry=[a]}setGeometryFromFrustum(e){const t=[];e.lines.forEach((e=>{t.push([e.origin[0],e.origin[1],e.origin[2]]),t.push([e.endpoint[0],e.endpoint[1],e.endpoint[2]])})),this.geometry=[t]}setGeometryFromBoundedPlane(e){const t=[],r=e.origin,n=e.basis1,i=e.basis2,s=.5,a=(0,o.c)(),l=(0,o.c)(),c=(0,o.c)(),u=(0,o.c)();a[0]=r[0]-n[0]*s-i[0]*s,a[1]=r[1]-n[1]*s-i[1]*s,a[2]=r[2]-n[2]*s-i[2]*s,l[0]=r[0]-n[0]*s+i[0]*s,l[1]=r[1]-n[1]*s+i[1]*s,l[2]=r[2]-n[2]*s+i[2]*s,c[0]=r[0]+n[0]*s+i[0]*s,c[1]=r[1]+n[1]*s+i[1]*s,c[2]=r[2]+n[2]*s+i[2]*s,u[0]=r[0]+n[0]*s-i[0]*s,u[1]=r[1]+n[1]*s-i[1]*s,u[2]=r[2]+n[2]*s-i[2]*s,t.push([a[0],a[1],a[2]]),t.push([l[0],l[1],l[2]]),t.push([c[0],c[1],c[2]]),t.push([u[0],u[1],u[2]]),t.push([a[0],a[1],a[2]]),this.geometry=[t]}setGeometryFromSegment(e){const t=e.endRenderSpace;this.transform=(0,n.d)(f,t);const{points:r}=e.createRenderGeometry(t,this.view.renderCoordsHelper);this.geometry=[r]}setGeometryFromSegments(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.Z;this.transform=(0,n.d)(f,t),this.geometry=e.map((e=>e.createRenderGeometry(t,this.view.renderCoordsHelper).points))}getTransformedGeometry(){return null==this._geometry?null:this._geometry.map((e=>e.map((e=>(0,s.e)((0,o.c)(),e,this.transform)))))}get renderOccluded(){return this._material.parameters.renderOccluded}set renderOccluded(e){this._material.setParameters({renderOccluded:e})}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.recreateGeometry()}get width(){return this._material.parameters.width}set width(e){this._material.setParameters({width:e})}get color(){return this._material.parameters.color}set color(e){const t=1===e[3];this._material.setParameters({color:(0,a.d)(e),writeDepth:t})}get innerWidth(){return this._material.parameters.innerWidth}set innerWidth(e){this._material.setParameters({innerWidth:e})}get innerColor(){return this._material.parameters.innerColor}set innerColor(e){this._material.setParameters({innerColor:null!=e?(0,a.d)(e):null})}get stipplePattern(){return this._material.parameters.stipplePattern}set stipplePattern(e){null!=this._material&&this._material.setParameters({stipplePattern:e})}get stippleOffColor(){return this._material.parameters.stippleOffColor}set stippleOffColor(e){this._material.setParameters({stippleOffColor:null!=e?(0,a.d)(e):null})}get stipplePreferContinuous(){return this._material.parameters.stipplePreferContinuous}set stipplePreferContinuous(e){this._material.setParameters({stipplePreferContinuous:e})}get falloff(){return this._material.parameters.falloff}set falloff(e){this._material.setParameters({falloff:e})}get polygonOffset(){return this._material.parameters.hasPolygonOffset}set polygonOffset(e){this._material.setParameters({hasPolygonOffset:e})}createExternalResources(){}destroyExternalResources(){}createGeometries(e){for(const t of(0,c.c)(this.geometry)){const r=(0,c.Y)(this._material,t);e.addGeometry(r)}}forEachExternalMaterial(e){this._hasExternalMaterial||e(this._material)}}const f=(0,i.a)()},52168:(e,t,r)=>{r.d(t,{_:()=>c});var n=r(14226),i=r(81949),s=r(86244),o=r(66327),a=r(78485),l=r(97882);class c extends s.l{constructor(e){super(e),this._resources=null,this._transform=(0,i.a)()}get object(){return null!=this._resources?this._resources.object:null}get transform(){return this._transform}set transform(e){(0,n.h)(this._transform,e),null!=this._resources&&(this._resources.object.transformation=this._transform)}recreate(){this.attached&&this.createResources()}recreateGeometry(){if(null==this._resources)return;const e=this._resources.object,t=this.view._stage;t.removeMany(e.geometries),e.removeAllGeometries(),this.createGeometries(e),e.visible=this.visible,t.addMany(e.geometries)}createResources(){this.destroyResources();const e=this.view._stage;if(!e)return;const t=new l.F(e,{pickable:!1,updatePolicy:a.j.SYNC}),r=new o.T({castShadow:!1});r.transformation=this._transform,this.createExternalResources(),this.createGeometries(r),e.addMany(r.geometries),this.forEachExternalMaterial((t=>e.add(t))),e.add(r),t.add(r),r.visible=this.visible,this._resources={layer:t,object:r}}destroyResources(){const e=this.view._stage;null!=this._resources&&e&&(e.remove(this._resources.object),this._resources.layer.destroy(),this.forEachExternalMaterial((t=>{e.remove(t)})),e.removeMany(this._resources.object.geometries),this._resources.object.dispose(),this.destroyExternalResources(),this._resources=null)}updateVisibility(e){null!=this._resources&&(this._resources.object.visible=e)}}},86244:(e,t,r)=>{r.d(t,{l:()=>i});var n=r(94172);class i{get isDecoration(){return this._isDecoration}set isDecoration(e){this._isDecoration=e}constructor(e){this._isDecoration=!1,this._attached=!1,this._resourcesCreated=!1,this._visible=!0,this.view=e.view,this._handle=(0,n.YP)((()=>e.view.ready),(e=>{this._resourcesCreated&&(e?this._createResources():this._destroyResources())}))}applyProperties(e){let t=!1;for(const r in e)r in this?"attached"===r?t=e[r]:this[r]=e[r]:console.error("Cannot set unknown property",r);this.attached=t}destroy(){this.attached=!1,this._handle.remove()}get attached(){return this._attached}set attached(e){e!==this._attached&&this.view._stage&&(this._attached=e,this._attached&&!this._resourcesCreated?this._createResources():!this._attached&&this._resourcesCreated&&this._destroyResources(),this.onAttachedChange(e))}onAttachedChange(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.attached&&this.updateVisibility(e))}_createResources(){this.createResources(),this._resourcesCreated=!0,this.updateVisibility(this.visible)}_destroyResources(){this.destroyResources(),this._resourcesCreated=!1}}}}]);
//# sourceMappingURL=5688.0debd923.chunk.js.map