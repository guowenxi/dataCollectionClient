var V=Object.defineProperty,_=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var E=(a,e,s)=>e in a?V(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,S=(a,e)=>{for(var s in e||(e={}))I.call(e,s)&&E(a,s,e[s]);if(v)for(var s of v(e))F.call(e,s)&&E(a,s,e[s]);return a},T=(a,e)=>_(a,C(e));var g=(a,e,s)=>new Promise((N,p)=>{var h=r=>{try{d(s.next(r))}catch(c){p(c)}},y=r=>{try{d(s.throw(r))}catch(c){p(c)}},d=r=>r.done?N(r.value):Promise.resolve(r.value).then(h,y);d((s=s.apply(a,e)).next())});import{c as A,_ as f,R as m}from"./index.1744db00.js";import{s as L}from"./SearchMore.b58ad9fc.js";import{w,S as P}from"./index.2cf55c0b.js";import{A as H}from"./index.94ba65ab.js";import{F as B}from"./index.a10c21c4.js";import{B as M}from"./index.d6bb809a.js";import"./index.0b2062c9.js";import"./index.ba1b5373.js";import"./index.2f265e7d.js";import"./Table.e070c8af.js";import"./Pagination.88552979.js";import"./index.54246283.js";import"./index.4d18e0ae.js";const{Option:K}=H,R=L(H)`
  && {
    width: 100%;
    height: 100%;

    .ant-select-selector {
      height: 100%;
      display: flex;
      align-items: center;
    }

    .ant-select-selection-search-input {
      height: 100% !important;
    }

  }
`,$=a=>{const e=a.conf,{name:s}=a,{dispatch:N}=a,p=f.exports.useContext(w),[h,y]=f.exports.useState([]),[d,r]=f.exports.useState("\u3000");function c(l,t,i){return g(this,null,function*(){let o=[];if(t.relationType)o=a[l][t.relationType];else if(t.url){let u=p.form.getFieldValue(t.params.keyName),Y="",b="",x="",k={};u===null||u===""||u===void 0?k=T(S({},t.params),{siteName:i}):(b=u[0].format("YYYY/MM/DD HH:mm"),x=u[1].format("YYYY/MM/DD HH:mm"),Y=u[0].format("YYYY/MM/DD HH:mm")+"-"+u[1].format("YYYY/MM/DD HH:mm"),k=T(S({},t.params),{siteName:i,developTime:Y,startTime:b,endTime:x}));const D=yield N({type:"common/requestData",url:t.url,method:"GET",payload:k});t.keyName&&D.map(function(n,q){n.name=n[t.keyName],n.id=n[t.keyId],n.siteStatus=n.siteStatus,n.siteStatusName=n.siteStatusName}),o=D}else o=t.options;console.log(o),y(o),O(o,e.defaultValue)})}function O(l,t){if(Number(t)){const i=l.find(function(o){return Number(o.id)===Number(t)});r(i.name)}}return f.exports.useEffect(()=>{c("select",e,"")},[]),p.event$.useSubscription(l=>{const t=l.relateNames.indexOf(s);if(t>=0)switch(l.type){case"onChange":if(!e.params)return;e.params[l.relatekeys[t]]=l.value,p.form.setFieldsValue({[s]:[]}),e.optionsKeyName?e.optionsList.map((i,o)=>{i[e.keyName]===l.value&&y(i[e.optionsKeyName])}):c("select",e);break}}),m.createElement(w.Consumer,null,l=>{switch(l.state){case"default":return m.createElement(P,null,d);case"edit":case"new":case"disabled":return m.createElement(B.Item,{name:s,rules:a.rules},m.createElement(R,{placeholder:(e.defaultValue==="",e.placeholder),disabled:l.state==="disabled",onChange:t=>{e.relateNames&&l.focus$.emit({relateNames:e.relateNames,relatekeys:e.relatekeys,type:e.clickType?e.clickType:"onChange",value:t})},showSearch:!0,optionLabelProp:"label",optionFilterProp:"children",onSearch:t=>{c("select",e,t)},filterOption:(t,i)=>!0},h.map((t,i)=>m.createElement(K,{title:t[e.keyName||"name"],value:t[e.keyId||"id"],key:t[e.keyId||"id"],label:t[e.keyName||"name"],disabled:t.siteStatus===1},m.createElement("div",{style:{display:"flex"}},m.createElement("span",{"aria-label":t[e.keyName||"name"],style:{width:"90%"}},t[e.keyName||"name"]),t.siteStatus===0?m.createElement(M,{status:"success","aria-label":t[e.keyName||"name"],text:t.siteStatusName}):m.createElement(M,{status:"error","aria-label":t[e.keyName||"name"],text:t.siteStatusName,style:{color:"#ccc"}}))))))}})};var re=A(({select:a})=>({select:a}))($);export{re as default};