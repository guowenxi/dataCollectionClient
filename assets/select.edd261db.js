var O=Object.defineProperty;var N=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var k=(r,e,a)=>e in r?O(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,x=(r,e)=>{for(var a in e||(e={}))g.call(e,a)&&k(r,a,e[a]);if(N)for(var a of N(e))v.call(e,a)&&k(r,a,e[a]);return r};var w=(r,e,a)=>new Promise((y,n)=>{var h=o=>{try{c(a.next(o))}catch(i){n(i)}},p=o=>{try{c(a.throw(o))}catch(i){n(i)}},c=o=>o.done?y(o.value):Promise.resolve(o.value).then(h,p);c((a=a.apply(r,e)).next())});import{c as E,_ as f,R as u}from"./index.8d62fabd.js";import{s as T}from"./SearchMore.60d61241.js";import{w as S,S as I}from"./index.f74872f6.js";import{A as b}from"./index.d4ab65ae.js";import{F as V}from"./index.6214eb92.js";import"./index.e6c9f47e.js";import"./index.adc43817.js";import"./index.8a2ef8d3.js";import"./Table.2da81800.js";import"./Pagination.2e94c1c8.js";import"./_baseIsEqual.8d7f74ca.js";import"./index.23997226.js";import"./index.bd6b171c.js";import"./Portal.8cf5a27d.js";const{Option:_}=b,L=T(b)`
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
`,A=r=>{const e=r.conf,{name:a}=r,{dispatch:y}=r,n=f.exports.useContext(S),[h,p]=f.exports.useState([]),[c,o]=f.exports.useState("\u3000");function i(s,t){return w(this,null,function*(){let l=[];if(t.relationType)l=r[s][t.relationType];else if(t.url){const m=yield y({type:"common/requestData",url:t.url,method:"GET",payload:x({},t.params)});t.keyName&&m.map(function(d,D){d.name=d[t.keyName],d.id=d[t.keyId]}),l=m}else l=t.options;p(l),C(l,e.defaultValue)})}function C(s,t){if(Number(t)){const l=s.find(function(m){return Number(m.id)===Number(t)});o(l.name)}}return f.exports.useEffect(()=>{i("select",e)},[]),n.event$.useSubscription(s=>{const t=s.relateNames.indexOf(a);if(t>=0)switch(s.type){case"onChange":if(!e.params)return;e.params[s.relatekeys[t]]=s.value,n.form.setFieldsValue({[a]:[]}),e.optionsKeyName?e.optionsList.map((l,m)=>{l[e.keyName]===s.value&&p(l[e.optionsKeyName])}):i("select",e);break}}),u.createElement(S.Consumer,null,s=>{switch(s.state){case"default":return u.createElement(I,null,c);case"edit":case"new":case"disabled":return u.createElement(V.Item,{name:a,rules:r.rules},u.createElement(L,{placeholder:(e.defaultValue==="",e.placeholder),showSearch:!0,disabled:s.state==="disabled",onChange:t=>{e.relateNames&&s.focus$.emit({relateNames:e.relateNames,relatekeys:e.relatekeys,type:e.clickType?e.clickType:"onChange",value:t})},filterOption:(t,l)=>l.children.toLowerCase().indexOf(t.toLowerCase())>=0},h.map((t,l)=>u.createElement(_,{title:t[e.keyName||"name"],value:t[e.keyId||"id"],key:t[e.keyId||"id"]},t[e.keyName||"name"]))))}})};var W=E(({select:r})=>({select:r}))(A);export{W as default};
//# sourceMappingURL=select.edd261db.js.map
