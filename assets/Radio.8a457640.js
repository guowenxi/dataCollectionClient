var E=Object.defineProperty;var N=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var x=(s,e,t)=>e in s?E(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,k=(s,e)=>{for(var t in e||(e={}))R.call(e,t)&&x(s,t,e[t]);if(N)for(var t of N(e))T.call(e,t)&&x(s,t,e[t]);return s};var g=(s,e,t)=>new Promise((y,n)=>{var p=o=>{try{m(t.next(o))}catch(l){n(l)}},h=o=>{try{m(t.throw(o))}catch(l){n(l)}},m=o=>o.done?y(o.value):Promise.resolve(o.value).then(p,h);m((t=t.apply(s,e)).next())});import{c as C,_ as f,R as c}from"./index.3b0f1d22.js";import{s as b}from"./SearchMore.ed23b912.js";import{w as v,S as _}from"./index.f9227d92.js";import{a as w}from"./index.465b72ea.js";import{F}from"./index.956cef20.js";import"./index.62eb6faf.js";import"./index.5e38d70a.js";import"./index.09976468.js";import"./Table.3fbe1f2c.js";import"./Pagination.8e24f235.js";import"./index.b72b64bd.js";import"./index.dba719dc.js";const O=b(w.Group)`
  width:100% !important;
  height:100% !important;
  border:1px solid #ccc;
`,S=b(w)`
  && {
    float: left;
    /* height: 43px; */
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 10px;
    .ant-select-selector{
      height:100%;
    }
    .ant-select-selection-search-input{
      height:100% !important;
    }
  }
`,D=s=>{const e=s.conf,{name:t}=s,{dispatch:y}=s,[n,p]=f.exports.useState([]),[h,m]=f.exports.useState("\u3000"),o=f.exports.useContext(v);o.form.getFieldValue(t);function l(r,a){return g(this,null,function*(){let i=[];if(a.relationType)i=s[r][a.relationType];else if(a.url){const u=yield y({type:"common/requestData",url:a.url,method:"GET",payload:k({},a.params)});a.keyName&&u.map(function(d,I){d.name=d[a.keyName],d.id=d[a.idName]}),i=u}else i=a.options;p(i),V(i,e.defaultValue)})}function V(r,a){if(Number(a)){const i=r.find(function(u){return Number(u.id)===Number(a)});m(i?i.typeId:"")}}return f.exports.useEffect(()=>{l("select",e)},[]),o.event$.useSubscription(r=>{const a=r.relateNames.indexOf(t);if(a>=0)switch(r.type){case"onChange":!e.url&&!e.params?o.form.setFieldsValue({[t]:r.value}):(e.params[r.relatekeys[a]]=r.value,o.form.setFieldsValue({[t]:[]}),e.optionsKeyName?e.optionsList.map((i,u)=>{i[e.keyName]===r.value&&p(i[e.optionsKeyName])}):l("select",e));break}}),c.createElement(v.Consumer,null,r=>{switch(r.state){case"default":return c.createElement(_,null,e.defaultValue||"\u3000");case"edit":case"new":case"disabled":return c.createElement(F.Item,{name:t,rules:s.rules},c.createElement(O,{disabled:r.state==="disabled",onChange:a=>{e.relateNames&&r.focus$.emit({relateNames:e.relateNames,relatekeys:e.relatekeys,type:e.clickType?e.clickType:"onChange",value:a.target.value})}},n&&n.map((a,i)=>c.createElement(S,{key:i,value:a[e.idName||"id"]},a[e.keyName||"name"]))))}})};var H=C(({select:s})=>({select:s}))(D);export{H as default};
//# sourceMappingURL=Radio.8a457640.js.map
