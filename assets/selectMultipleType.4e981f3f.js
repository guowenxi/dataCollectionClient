var T=Object.defineProperty;var b=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var k=(s,a,t)=>a in s?T(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t,w=(s,a)=>{for(var t in a||(a={}))O.call(a,t)&&k(s,t,a[t]);if(b)for(var t of b(a))_.call(a,t)&&k(s,t,a[t]);return s};var g=(s,a,t)=>new Promise((f,o)=>{var h=n=>{try{c(t.next(n))}catch(i){o(i)}},y=n=>{try{c(t.throw(n))}catch(i){o(i)}},c=n=>n.done?f(n.value):Promise.resolve(n.value).then(h,y);c((t=t.apply(s,a)).next())});import{c as E,_ as d,R as u}from"./index.f93312c7.js";import{s as F}from"./SearchMore.4899ea4e.js";import{w as x,S as I}from"./index.c4c63bae.js";import{A as N}from"./index.ec6ab6c1.js";import{F as v}from"./index.c802a758.js";import"./index.8ec8c198.js";import"./index.e947031a.js";import"./index.d1220381.js";import"./Table.7058c2c1.js";import"./Pagination.b9ae5048.js";import"./index.de78d9fa.js";import"./index.9add2654.js";const{Option:C}=N,D=F(N)`
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
`,A=s=>{const a=s.conf,{name:t}=s,{dispatch:f}=s,o=d.exports.useContext(x),[h,y]=d.exports.useState([]),[c,n]=d.exports.useState("\u3000");o.event$.useSubscription(l=>{const e=l.relateNames.indexOf(t);e>=0&&(a.params[l.relatekeys[e]]=l.value,o.form.setFieldsValue({[t]:[]}),i("select",a))});function i(l,e){return g(this,null,function*(){let r=[];if(e.relationType)r=s[l][e.relationType];else if(e.url){const p=yield f({type:"common/requestData",url:e.url,method:"GET",payload:w({},e.params)});e.keyName&&p.map(function(m){m.name=m[e.keyName],m.id=m[e.keyId]}),r=p}else r=e.options;y(r),S(r,a.defaultValue)})}function S(l,e){if(Number(e)){const r=l.find(function(p){return Number(p.id)===Number(e)});n(r.name)}}const V=function(){const l=o.form.getFieldValue(t);let e=[];switch(typeof l){case"string":l==""?e=[]:e=l.split(",");break;case"object":l==[]?e=[]:e=l;break;default:e=[];break}o.form.setFieldsValue({[t]:e})};return d.exports.useEffect(()=>{i("select",a),V()},[]),u.createElement(x.Consumer,null,l=>{switch(l.state){case"default":return u.createElement(I,null,c);case"edit":case"new":case"disabled":return u.createElement(v.Item,{name:t,rules:s.rules},u.createElement(D,{initialValue:"null",mode:"multiple",placeholder:a.placeholder,showSearch:!0,disabled:l.state==="disabled",onChange:(e,r)=>{o.form.setFieldsValue({[t]:e}),o.form.setFieldsValue({[t.substring(0,t.length-3)]:r})},filterOption:(e,r)=>r.children.toLowerCase().indexOf(e.toLowerCase())>=0},h.map(e=>u.createElement(C,{title:e[a.keyName||"name"],value:e[a.keyId||"id"].toString(),peopleType:e.peopleType?e.peopleType:"",participantId:e.id?e.id:"",key:e[a.keyId||"id"]},e[a.keyName||"name"]))))}})};var Q=E(({select:s})=>({select:s}))(A);export{Q as default};
//# sourceMappingURL=selectMultipleType.4e981f3f.js.map
