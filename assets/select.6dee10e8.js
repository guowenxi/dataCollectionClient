var O=Object.defineProperty;var N=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var k=(s,e,a)=>e in s?O(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,x=(s,e)=>{for(var a in e||(e={}))g.call(e,a)&&k(s,a,e[a]);if(N)for(var a of N(e))v.call(e,a)&&k(s,a,e[a]);return s};var w=(s,e,a)=>new Promise((y,i)=>{var h=n=>{try{c(a.next(n))}catch(o){i(o)}},p=n=>{try{c(a.throw(n))}catch(o){i(o)}},c=n=>n.done?y(n.value):Promise.resolve(n.value).then(h,p);c((a=a.apply(s,e)).next())});import{c as E,_ as f,R as u}from"./index.353dd2ef.js";import{s as T}from"./SearchMore.397c843d.js";import{w as S,S as I}from"./index.db133115.js";import{A as b}from"./index.4897d79a.js";import{F as V}from"./index.66f418cc.js";import"./index.5b65a776.js";import"./index.1af7b029.js";import"./index.adfb1e41.js";import"./Table.84915985.js";import"./Pagination.79d24ff3.js";import"./index.981931b8.js";import"./index.713bae6c.js";const{Option:_}=b,L=T(b)`
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
`,A=s=>{const e=s.conf,{name:a}=s,{dispatch:y}=s,i=f.exports.useContext(S),[h,p]=f.exports.useState([]),[c,n]=f.exports.useState("\u3000");function o(r,t){return w(this,null,function*(){let l=[];if(t.relationType)l=s[r][t.relationType];else if(t.url){const m=yield y({type:"common/requestData",url:t.url,method:"GET",payload:x({},t.params)});t.keyName&&m.map(function(d,D){d.name=d[t.keyName],d.id=d[t.keyId]}),l=m}else l=t.options;p(l),C(l,e.defaultValue)})}function C(r,t){if(Number(t)){const l=r.find(function(m){return Number(m.id)===Number(t)});n(l.name)}}return f.exports.useEffect(()=>{o("select",e)},[]),i.event$.useSubscription(r=>{const t=r.relateNames.indexOf(a);if(t>=0)switch(r.type){case"onChange":if(!e.params)return;e.params[r.relatekeys[t]]=r.value,i.form.setFieldsValue({[a]:[]}),e.optionsKeyName?e.optionsList.map((l,m)=>{l[e.keyName]===r.value&&p(l[e.optionsKeyName])}):o("select",e);break}}),u.createElement(S.Consumer,null,r=>{switch(r.state){case"default":return u.createElement(I,null,c);case"edit":case"new":case"disabled":return u.createElement(V.Item,{name:a,rules:s.rules},u.createElement(L,{placeholder:(e.defaultValue==="",e.placeholder),showSearch:!0,disabled:r.state==="disabled",onChange:t=>{e.relateNames&&r.focus$.emit({relateNames:e.relateNames,relatekeys:e.relatekeys,type:e.clickType?e.clickType:"onChange",value:t})},filterOption:(t,l)=>l.children.toLowerCase().indexOf(t.toLowerCase())>=0},h.map((t,l)=>u.createElement(_,{title:t[e.keyName||"name"],value:t[e.keyId||"id"],key:t[e.keyId||"id"]},t[e.keyName||"name"]))))}})};var Q=E(({select:s})=>({select:s}))(A);export{Q as default};
