var _=Object.defineProperty;var k=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var b=(r,t,a)=>t in r?_(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a,w=(r,t)=>{for(var a in t||(t={}))g.call(t,a)&&b(r,a,t[a]);if(k)for(var a of k(t))v.call(t,a)&&b(r,a,t[a]);return r};var x=(r,t,a)=>new Promise((f,n)=>{var h=o=>{try{c(a.next(o))}catch(i){n(i)}},y=o=>{try{c(a.throw(o))}catch(i){n(i)}},c=o=>o.done?f(o.value):Promise.resolve(o.value).then(h,y);c((a=a.apply(r,t)).next())});import{c as E,_ as d,R as u}from"./index.8d62fabd.js";import{s as C}from"./SearchMore.60d61241.js";import{w as N,S as D}from"./index.f74872f6.js";import{A as S}from"./index.d4ab65ae.js";import{F as I}from"./index.6214eb92.js";import"./index.e6c9f47e.js";import"./index.adc43817.js";import"./index.8a2ef8d3.js";import"./Table.2da81800.js";import"./Pagination.2e94c1c8.js";import"./_baseIsEqual.8d7f74ca.js";import"./index.23997226.js";import"./index.bd6b171c.js";import"./Portal.8cf5a27d.js";const{Option:F}=S,T=C(S)`
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
`,A=r=>{const t=r.conf,{name:a}=r,{dispatch:f}=r,n=d.exports.useContext(N),[h,y]=d.exports.useState([]),[c,o]=d.exports.useState("\u3000");n.event$.useSubscription(s=>{const e=s.relateNames.indexOf(a);e>=0&&(t.params[s.relatekeys[e]]=s.value,n.form.setFieldsValue({[a]:[]}),i("select",t))});function i(s,e){return x(this,null,function*(){let l=[];if(e.relationType)l=r[s][e.relationType];else if(e.url){const m=yield f({type:"common/requestData",url:e.url,method:"GET",payload:w({},e.params)});e.keyName&&m.map(function(p){p.name=p[e.keyName],p.id=p[e.keyId]}),l=m}else l=e.options;y(l),O(l,t.defaultValue)})}function O(s,e){if(Number(e)){const l=s.find(function(m){return Number(m.id)===Number(e)});o(l.name)}}const V=function(){const s=n.form.getFieldValue(a);let e=[];switch(typeof s){case"string":s==""?e=[]:e=s.split(",");break;case"object":s==[]?e=[]:e=s;break;default:e=[];break}n.form.setFieldsValue({[a]:e})};return d.exports.useEffect(()=>{i("select",t),V()},[]),u.createElement(N.Consumer,null,s=>{switch(s.state){case"default":return u.createElement(D,null,c);case"edit":case"new":case"disabled":return u.createElement(I.Item,{name:a,rules:r.rules},u.createElement(T,{initialValue:"null",mode:"multiple",placeholder:t.placeholder,showSearch:!0,disabled:s.state==="disabled",onChange:(e,l)=>{},filterOption:(e,l)=>l.children.toLowerCase().indexOf(e.toLowerCase())>=0},h.map(e=>u.createElement(F,{title:e[t.keyName||"name"],value:e[t.keyId||"id"],key:e[t.keyId||"id"]},e[t.keyName||"name"]))))}})};var W=E(({select:r})=>({select:r}))(A);export{W as default};
//# sourceMappingURL=selectMultiple.826f52c2.js.map
