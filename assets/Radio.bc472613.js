var E=Object.defineProperty;var N=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var x=(s,e,t)=>e in s?E(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,k=(s,e)=>{for(var t in e||(e={}))R.call(e,t)&&x(s,t,e[t]);if(N)for(var t of N(e))T.call(e,t)&&x(s,t,e[t]);return s};var g=(s,e,t)=>new Promise((y,n)=>{var p=o=>{try{m(t.next(o))}catch(l){n(l)}},h=o=>{try{m(t.throw(o))}catch(l){n(l)}},m=o=>o.done?y(o.value):Promise.resolve(o.value).then(p,h);m((t=t.apply(s,e)).next())});import{c as C,_ as f,R as c}from"./index.f93312c7.js";import{s as b}from"./SearchMore.4899ea4e.js";import{w as v,S as _}from"./index.c4c63bae.js";import{a as w}from"./index.ec6ab6c1.js";import{F}from"./index.c802a758.js";import"./index.8ec8c198.js";import"./index.e947031a.js";import"./index.d1220381.js";import"./Table.7058c2c1.js";import"./Pagination.b9ae5048.js";import"./index.de78d9fa.js";import"./index.9add2654.js";const O=b(w.Group)`
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
//# sourceMappingURL=Radio.bc472613.js.map
