var T=Object.defineProperty;var b=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var k=(r,a,t)=>a in r?T(r,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[a]=t,w=(r,a)=>{for(var t in a||(a={}))O.call(a,t)&&k(r,t,a[t]);if(b)for(var t of b(a))_.call(a,t)&&k(r,t,a[t]);return r};var g=(r,a,t)=>new Promise((f,o)=>{var h=n=>{try{c(t.next(n))}catch(i){o(i)}},y=n=>{try{c(t.throw(n))}catch(i){o(i)}},c=n=>n.done?f(n.value):Promise.resolve(n.value).then(h,y);c((t=t.apply(r,a)).next())});import{c as E,_ as d,R as u}from"./index.8d62fabd.js";import{s as F}from"./SearchMore.60d61241.js";import{w as x,S as I}from"./index.f74872f6.js";import{A as N}from"./index.d4ab65ae.js";import{F as v}from"./index.6214eb92.js";import"./index.e6c9f47e.js";import"./index.adc43817.js";import"./index.8a2ef8d3.js";import"./Table.2da81800.js";import"./Pagination.2e94c1c8.js";import"./_baseIsEqual.8d7f74ca.js";import"./index.23997226.js";import"./index.bd6b171c.js";import"./Portal.8cf5a27d.js";const{Option:C}=N,D=F(N)`
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
`,A=r=>{const a=r.conf,{name:t}=r,{dispatch:f}=r,o=d.exports.useContext(x),[h,y]=d.exports.useState([]),[c,n]=d.exports.useState("\u3000");o.event$.useSubscription(s=>{const e=s.relateNames.indexOf(t);e>=0&&(a.params[s.relatekeys[e]]=s.value,o.form.setFieldsValue({[t]:[]}),i("select",a))});function i(s,e){return g(this,null,function*(){let l=[];if(e.relationType)l=r[s][e.relationType];else if(e.url){const p=yield f({type:"common/requestData",url:e.url,method:"GET",payload:w({},e.params)});e.keyName&&p.map(function(m){m.name=m[e.keyName],m.id=m[e.keyId]}),l=p}else l=e.options;y(l),S(l,a.defaultValue)})}function S(s,e){if(Number(e)){const l=s.find(function(p){return Number(p.id)===Number(e)});n(l.name)}}const V=function(){const s=o.form.getFieldValue(t);let e=[];switch(typeof s){case"string":s==""?e=[]:e=s.split(",");break;case"object":s==[]?e=[]:e=s;break;default:e=[];break}o.form.setFieldsValue({[t]:e})};return d.exports.useEffect(()=>{i("select",a),V()},[]),u.createElement(x.Consumer,null,s=>{switch(s.state){case"default":return u.createElement(I,null,c);case"edit":case"new":case"disabled":return u.createElement(v.Item,{name:t,rules:r.rules},u.createElement(D,{initialValue:"null",mode:"multiple",placeholder:a.placeholder,showSearch:!0,disabled:s.state==="disabled",onChange:(e,l)=>{o.form.setFieldsValue({[t]:e}),o.form.setFieldsValue({[t.substring(0,t.length-3)]:l})},filterOption:(e,l)=>l.children.toLowerCase().indexOf(e.toLowerCase())>=0},h.map(e=>u.createElement(C,{title:e[a.keyName||"name"],value:e[a.keyId||"id"].toString(),peopleType:e.peopleType?e.peopleType:"",participantId:e.id?e.id:"",key:e[a.keyId||"id"]},e[a.keyName||"name"]))))}})};var W=E(({select:r})=>({select:r}))(A);export{W as default};
//# sourceMappingURL=selectMultipleType.bd8bb458.js.map
