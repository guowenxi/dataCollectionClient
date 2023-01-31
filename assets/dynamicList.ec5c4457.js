import{c as E,_ as u,R as r}from"./index.3b0f1d22.js";import{s as v}from"./SearchMore.ed23b912.js";import{u as C}from"./index.d33b2959.js";import{a as _}from"./index.b72b64bd.js";import{w as p,S as w}from"./index.f9227d92.js";import{F as L}from"./index.956cef20.js";import{I as F}from"./index.465b72ea.js";import{M as k}from"./MinusCircleOutlined.fe127abc.js";import{P as x}from"./PlusCircleOutlined.862433d9.js";import"./index.62eb6faf.js";import"./index.5e38d70a.js";import"./index.09976468.js";import"./Table.3fbe1f2c.js";import"./Pagination.8e24f235.js";import"./index.dba719dc.js";const D=v(L.Item)`
  && {
    height: 100%;
    padding: 1vh;
    border: 1px solid #ccc;
  }
  .items {
    margin: 5px 0;
  }
`,I=m=>{const l=u.exports.useContext(p),{list:s,resetList:c,insert:f,remove:d,getKey:h}=C([]),o=m.conf,{name:a}=m,g=(e,t)=>r.createElement("div",{className:"items",key:h(e)},r.createElement(F,{style:{width:300},placeholder:o.placeholder,value:t[o.keyName],onChange:n=>{const i=s;i[e][o.keyName]=n.target.value,c(i),l.form.setFields([{name:a,value:i}])}}),s.length>1&&r.createElement(k,{style:{marginLeft:8},onClick:()=>{d(e)}}),r.createElement(x,{style:{marginLeft:8},onClick:()=>{f(e+1,{})}})),y=e=>{const t=l.form.getFieldsValue();return c(t[a].length==0?[{}]:t[a]),t[a]};return u.exports.useEffect(()=>{y()},[]),_(()=>{l.form.setFields([{name:a,value:s}])},[s]),r.createElement(p.Consumer,null,e=>{switch(e.state){case"default":return r.createElement(w,null,o.defaultValue||"\u3000");case"edit":case"new":case"disabled":return r.createElement(D,{name:a,rules:m.rules},s.map((t,n)=>g(n,t)))}})};var G=E(({})=>({}))(I);export{G as default};
//# sourceMappingURL=dynamicList.ec5c4457.js.map
