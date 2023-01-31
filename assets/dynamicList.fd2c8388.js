import{c as E,_ as u,R as r}from"./index.353dd2ef.js";import{s as v}from"./SearchMore.397c843d.js";import{u as C}from"./index.d1f129bd.js";import{a as _}from"./index.981931b8.js";import{w as p,S as w}from"./index.db133115.js";import{F as L}from"./index.66f418cc.js";import{I as F}from"./index.4897d79a.js";import{M as k}from"./MinusCircleOutlined.9ae9689f.js";import{P as x}from"./PlusCircleOutlined.c71d6d7a.js";import"./index.5b65a776.js";import"./index.1af7b029.js";import"./index.adfb1e41.js";import"./Table.84915985.js";import"./Pagination.79d24ff3.js";import"./index.713bae6c.js";const D=v(L.Item)`
  && {
    height: 100%;
    padding: 1vh;
    border: 1px solid #ccc;
  }
  .items {
    margin: 5px 0;
  }
`,I=m=>{const l=u.exports.useContext(p),{list:s,resetList:c,insert:f,remove:d,getKey:h}=C([]),o=m.conf,{name:a}=m,g=(e,t)=>r.createElement("div",{className:"items",key:h(e)},r.createElement(F,{style:{width:300},placeholder:o.placeholder,value:t[o.keyName],onChange:n=>{const i=s;i[e][o.keyName]=n.target.value,c(i),l.form.setFields([{name:a,value:i}])}}),s.length>1&&r.createElement(k,{style:{marginLeft:8},onClick:()=>{d(e)}}),r.createElement(x,{style:{marginLeft:8},onClick:()=>{f(e+1,{})}})),y=e=>{const t=l.form.getFieldsValue();return c(t[a].length==0?[{}]:t[a]),t[a]};return u.exports.useEffect(()=>{y()},[]),_(()=>{l.form.setFields([{name:a,value:s}])},[s]),r.createElement(p.Consumer,null,e=>{switch(e.state){case"default":return r.createElement(w,null,o.defaultValue||"\u3000");case"edit":case"new":case"disabled":return r.createElement(D,{name:a,rules:m.rules},s.map((t,n)=>g(n,t)))}})};var G=E(({})=>({}))(I);export{G as default};
