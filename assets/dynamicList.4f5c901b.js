import{c as E,_ as u,R as r}from"./index.1744db00.js";import{s as v}from"./SearchMore.b58ad9fc.js";import{u as C}from"./index.18a69498.js";import{a as _}from"./index.54246283.js";import{w as p,S as w}from"./index.2cf55c0b.js";import{F as L}from"./index.a10c21c4.js";import{I as F}from"./index.94ba65ab.js";import{M as k}from"./MinusCircleOutlined.ae8e1f9a.js";import{P as x}from"./PlusCircleOutlined.8ffa080f.js";import"./index.0b2062c9.js";import"./index.ba1b5373.js";import"./index.2f265e7d.js";import"./Table.e070c8af.js";import"./Pagination.88552979.js";import"./index.4d18e0ae.js";const D=v(L.Item)`
  && {
    height: 100%;
    padding: 1vh;
    border: 1px solid #ccc;
  }
  .items {
    margin: 5px 0;
  }
`,I=m=>{const l=u.exports.useContext(p),{list:s,resetList:c,insert:f,remove:d,getKey:h}=C([]),o=m.conf,{name:a}=m,g=(e,t)=>r.createElement("div",{className:"items",key:h(e)},r.createElement(F,{style:{width:300},placeholder:o.placeholder,value:t[o.keyName],onChange:n=>{const i=s;i[e][o.keyName]=n.target.value,c(i),l.form.setFields([{name:a,value:i}])}}),s.length>1&&r.createElement(k,{style:{marginLeft:8},onClick:()=>{d(e)}}),r.createElement(x,{style:{marginLeft:8},onClick:()=>{f(e+1,{})}})),y=e=>{const t=l.form.getFieldsValue();return c(t[a].length==0?[{}]:t[a]),t[a]};return u.exports.useEffect(()=>{y()},[]),_(()=>{l.form.setFields([{name:a,value:s}])},[s]),r.createElement(p.Consumer,null,e=>{switch(e.state){case"default":return r.createElement(w,null,o.defaultValue||"\u3000");case"edit":case"new":case"disabled":return r.createElement(D,{name:a,rules:m.rules},s.map((t,n)=>g(n,t)))}})};var G=E(({})=>({}))(I);export{G as default};
