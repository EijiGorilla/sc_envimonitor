/*! For license information please see 6683.d8b40ba1.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_envimonitor=self.webpackChunksc_envimonitor||[]).push([[6683],{96683:(t,e,n)=>{n.r(e),n.d(e,{DateEngine:()=>r});class r{constructor(){this._formatterCache=new Map,this._commonDateTimeFormatterOptions={year:"numeric",month:"2-digit",day:"2-digit",timeZoneName:"shortOffset"}}get name(){return"native"}create(t){return new Date(t)}increase(t){return new Date(t.getTime()+864e5)}formatToIsoDateString(t){const e=t.getFullYear(),n=t.getMonth()+1,r=t.getDate();return"".concat(e,"-").concat(n.toString().padStart(2,"0"),"-").concat(r.toString().padStart(2,"0"))}isoToTimeZone(t,e){const n=this._toDate(t),r=this._getFormatter(e).formatToParts(n),[a]=r.filter((t=>{let{type:e}=t;return"timeZoneName"===e})).map((t=>{let{value:e}=t;return e})),i=this._getTimeZoneOffsetInMins(a),o=n.getMinutes()-(n.getTimezoneOffset()-i);return n.setMinutes(o),n}same(t,e){return t.getTime()===e.getTime()}_toDate(t){return new Date(t)}_getFormatter(t){let e=this._formatterCache.get(t);return e||(e=new Intl.DateTimeFormat("en-US",{timeZone:t,...this._commonDateTimeFormatterOptions}),this._formatterCache.set(t,e)),e}_getTimeZoneOffsetInMins(t){const[e,...n]=t.slice(3),[r,a]=n.join("").split(":");return("+"===e?1:-1)*(60*Number(r)+Number(a||0))}}}}]);
//# sourceMappingURL=6683.d8b40ba1.chunk.js.map