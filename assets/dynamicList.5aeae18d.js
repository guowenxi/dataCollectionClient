import{c as E,_ as u,R as r}from"./index.f93312c7.js";import{s as v}from"./SearchMore.4899ea4e.js";import{u as C}from"./index.a5b5e13a.js";import{a as _}from"./index.de78d9fa.js";import{w as p,S as w}from"./index.c4c63bae.js";import{F as L}from"./index.c802a758.js";import{I as F}from"./index.ec6ab6c1.js";import{M as k}from"./MinusCircleOutlined.64c5c2ad.js";import{P as x}from"./PlusCircleOutlined.09ec3f0c.js";import"./index.8ec8c198.js";import"./index.e947031a.js";import"./index.d1220381.js";import"./Table.7058c2c1.js";import"./Pagination.b9ae5048.js";import"./index.9add2654.js";const D=v(L.Item)`
  && {
    height: 100%;
    padding: 1vh;
    border: 1px solid #ccc;
  }
  .items {
    margin: 5px 0;
  }
`,I=m=>{const l=u.exports.useContext(p),{list:s,resetList:c,insert:f,remove:d,getKey:h}=C([]),o=m.conf,{name:a}=m,g=(e,t)=>r.createElement("div",{className:"items",key:h(e)},r.createElement(F,{style:{width:300},placeholder:o.placeholder,value:t[o.keyName],onChange:n=>{const i=s;i[e][o.keyName]=n.target.value,c(i),l.form.setFields([{name:a,value:i}])}}),s.length>1&&r.createElement(k,{style:{marginLeft:8},onClick:()=>{d(e)}}),r.createElement(x,{style:{marginLeft:8},onClick:()=>{f(e+1,{})}})),y=e=>{const t=l.form.getFieldsValue();return c(t[a].length==0?[{}]:t[a]),t[a]};return u.exports.useEffect(()=>{y()},[]),_(()=>{l.form.setFields([{name:a,value:s}])},[s]),r.createElement(p.Consumer,null,e=>{switch(e.state){case"default":return r.createElement(w,null,o.defaultValue||"\u3000");case"edit":case"new":case"disabled":return r.createElement(D,{name:a,rules:m.rules},s.map((t,n)=>g(n,t)))}})};var G=E(({})=>({}))(I);export{G as default};
//# sourceMappingURL=dynamicList.5aeae18d.js.map
