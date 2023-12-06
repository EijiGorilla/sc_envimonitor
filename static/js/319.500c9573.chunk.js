"use strict";(self.webpackChunksc_envimonitor=self.webpackChunksc_envimonitor||[]).push([[319],{50319:(t,e,n)=>{n.r(e),n.d(e,{default:()=>_});var o=n(27366),s=n(66978),i=(n(32718),n(25243),n(63780),n(93169),n(10064),n(69912)),d=n(11186),c=n(71353),r=n(85981),a=n(23470),u=n(78329),h=n(79762);function g(t,e,n){const o=(0,a.c)(),s=(0,a.g)(o);return(0,d.q)(s,s,t,.5),(0,d.q)(s,s,e,.5),o[3]=(0,d.o)(s,t),(0,d.g)(s,s,n),o}let p=class{constructor(){this._idToComponent=new Map,this._components=new u.Z((t=>t.bounds)),this._edges=new u.Z((t=>t.bounds)),this._tmpLineSegment=(0,r.Ue)(),this._tmpP1=(0,c.c)(),this._tmpP2=(0,c.c)(),this._tmpP3=(0,c.c)(),this.remoteClient=null}async fetchCandidates(t,e){await Promise.resolve(),(0,s.k_)(e),await this._ensureEdgeLocations(t,e);const n=[];return this._edges.forEachNeighbor((e=>(this._addCandidates(t,e,n),n.length<1e3)),t.bounds),{result:{candidates:n}}}async _ensureEdgeLocations(t,e){const n=[];if(this._components.forEachNeighbor((t=>{if(null==t.info){const{id:e,uid:o}=t;n.push({id:e,uid:o})}return!0}),t.bounds),!n.length)return;const o={components:n},s=await this.remoteClient.invoke("fetchAllEdgeLocations",o,null!==e&&void 0!==e?e:{});for(const i of s.components)this._setFetchEdgeLocations(i)}async add(t){const e=new m(t.id,t.bounds);return this._idToComponent.set(e.id,e),this._components.add([e]),{result:{}}}async remove(t){const e=this._idToComponent.get(t.id);if(e){const t=[];this._edges.forEachNeighbor((n=>(n.component===e&&t.push(n),!0)),e.bounds),this._edges.remove(t),this._components.remove([e]),this._idToComponent.delete(e.id)}return{result:{}}}_setFetchEdgeLocations(t){const e=this._idToComponent.get(t.id);if(null==e||t.uid!==e.uid)return;const n=h.n_.createView(t.locations),o=new Array(n.count),s=(0,c.c)(),i=(0,c.c)();for(let c=0;c<n.count;c++){n.position0.getVec(c,s),n.position1.getVec(c,i);const d=g(s,i,t.origin),r=new l(e,c,d);o[c]=r}this._edges.add(o);const{objectIds:d,origin:r}=t;e.info={locations:n,objectIds:d,origin:r}}_addCandidates(t,e,n){const{info:o}=e.component,{origin:s,objectIds:i}=o,c=o.locations,r=c.position0.getVec(e.index,this._tmpP1),a=c.position1.getVec(e.index,this._tmpP2);(0,d.g)(r,r,s),(0,d.g)(a,a,s);const u=i[c.componentIndex.get(e.index)];this._addEdgeCandidate(t,u,r,a,n),this._addVertexCandidate(t,u,r,n),this._addVertexCandidate(t,u,a,n)}_addEdgeCandidate(t,e,n,o,s){if(!t.returnEdge)return;const i=(0,a.g)(t.bounds),u=(0,r.zk)(n,o,this._tmpLineSegment),h=(0,r.nF)(u,i,this._tmpP3);(0,a.n)(t.bounds,h)&&s.push({type:"edge",objectId:e,target:(0,c.g)(h),distance:(0,d.o)(i,h),start:(0,c.g)(n),end:(0,c.g)(o)})}_addVertexCandidate(t,e,n,o){if(!t.returnVertex)return;const s=(0,a.g)(t.bounds);(0,a.n)(t.bounds,n)&&o.push({type:"vertex",objectId:e,target:(0,c.g)(n),distance:(0,d.o)(s,n)})}};p=(0,o._)([(0,i.j)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],p);const _=p;class m{constructor(t,e){this.id=t,this.bounds=e,this.info=null,this.uid=++m.uid}}m.uid=0;class l{constructor(t,e,n){this.component=t,this.index=e,this.bounds=n}}}}]);
//# sourceMappingURL=319.500c9573.chunk.js.map