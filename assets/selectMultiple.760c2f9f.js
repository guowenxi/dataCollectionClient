var _=Object.defineProperty;var k=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var b=(r,t,a)=>t in r?_(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a,w=(r,t)=>{for(var a in t||(t={}))g.call(t,a)&&b(r,a,t[a]);if(k)for(var a of k(t))v.call(t,a)&&b(r,a,t[a]);return r};var x=(r,t,a)=>new Promise((f,o)=>{var h=n=>{try{c(a.next(n))}catch(i){o(i)}},y=n=>{try{c(a.throw(n))}catch(i){o(i)}},c=n=>n.done?f(n.value):Promise.resolve(n.value).then(h,y);c((a=a.apply(r,t)).next())});import{c as E,_ as d,R as u}from"./index.3b0f1d22.js";import{s as C}from"./SearchMore.ed23b912.js";import{w as N,S as D}from"./index.f9227d92.js";import{A as S}from"./index.465b72ea.js";import{F as I}from"./index.956cef20.js";import"./index.62eb6faf.js";import"./index.5e38d70a.js";import"./index.09976468.js";import"./Table.3fbe1f2c.js";import"./Pagination.8e24f235.js";import"./index.b72b64bd.js";import"./index.dba719dc.js";const{Option:F}=S,T=C(S)`
  && {
    width: 100%;
    height: 43px;

    .ant-select-selector {
      height: 100%;
      //padding:1vh;
    }

    .ant-select-selection-search-input {
      height: 100% !important;
    }

    .ant-select-selection-item {
    }

  }
`,A=r=>{const t=r.conf,{name:a}=r,{dispatch:f}=r,o=d.exports.useContext(N),[h,y]=d.exports.useState([]),[c,n]=d.exports.useState("\u3000");o.event$.useSubscription(s=>{const e=s.relateNames.indexOf(a);e>=0&&(t.params[s.relatekeys[e]]=s.value,o.form.setFieldsValue({[a]:[]}),i("select",t))});function i(s,e){return x(this,null,function*(){let l=[];if(e.relationType)l=r[s][e.relationType];else if(e.url){const m=yield f({type:"common/requestData",url:e.url,method:"GET",payload:w({},e.params)});e.keyName&&m.map(function(p){p.name=p[e.keyName],p.id=p[e.keyId]}),l=m}else l=e.options;y(l),O(l,t.defaultValue)})}function O(s,e){if(Number(e)){const l=s.find(function(m){return Number(m.id)===Number(e)});n(l.name)}}const V=function(){const s=o.form.getFieldValue(a);let e=[];switch(typeof s){case"string":s==""?e=[]:e=s.split(",");break;case"object":s==[]?e=[]:e=s;break;default:e=[];break}o.form.setFieldsValue({[a]:e})};return d.exports.useEffect(()=>{i("select",t),V()},[]),u.createElement(N.Consumer,null,s=>{switch(s.state){case"default":return u.createElement(D,null,c);case"edit":case"new":case"disabled":return u.createElement(I.Item,{name:a,rules:r.rules},u.createElement(T,{initialValue:"null",mode:"multiple",placeholder:t.placeholder,showSearch:!0,disabled:s.state==="disabled",onChange:(e,l)=>{},filterOption:(e,l)=>l.children.toLowerCase().indexOf(e.toLowerCase())>=0},h.map(e=>u.createElement(F,{title:e[t.keyName||"name"],value:e[t.keyId||"id"],key:e[t.keyId||"id"]},e[t.keyName||"name"]))))}})};var Q=E(({select:r})=>({select:r}))(A);export{Q as default};
//# sourceMappingURL=selectMultiple.760c2f9f.js.map
