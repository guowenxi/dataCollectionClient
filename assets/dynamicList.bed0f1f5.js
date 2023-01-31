import{c as E,_ as u,R as r}from"./index.8d62fabd.js";import{s as v}from"./SearchMore.60d61241.js";import{u as C}from"./index.3b2cb4c4.js";import{a as _}from"./index.23997226.js";import{w as p,S as w}from"./index.f74872f6.js";import{F as L}from"./index.6214eb92.js";import{I as F}from"./index.d4ab65ae.js";import{M as k}from"./MinusCircleOutlined.32e3a131.js";import{P as x}from"./PlusCircleOutlined.55641b66.js";import"./index.e6c9f47e.js";import"./index.adc43817.js";import"./index.8a2ef8d3.js";import"./Table.2da81800.js";import"./Pagination.2e94c1c8.js";import"./_baseIsEqual.8d7f74ca.js";import"./index.bd6b171c.js";import"./Portal.8cf5a27d.js";const D=v(L.Item)`
  && {
    height: 100%;
    padding: 1vh;
    border: 1px solid #ccc;
  }
  .items {
    margin: 5px 0;
  }
`,I=m=>{const i=u.exports.useContext(p),{list:s,resetList:c,insert:f,remove:d,getKey:h}=C([]),o=m.conf,{name:a}=m,g=(e,t)=>r.createElement("div",{className:"items",key:h(e)},r.createElement(F,{style:{width:300},placeholder:o.placeholder,value:t[o.keyName],onChange:l=>{const n=s;n[e][o.keyName]=l.target.value,c(n),i.form.setFields([{name:a,value:n}])}}),s.length>1&&r.createElement(k,{style:{marginLeft:8},onClick:()=>{d(e)}}),r.createElement(x,{style:{marginLeft:8},onClick:()=>{f(e+1,{})}})),y=e=>{const t=i.form.getFieldsValue();return c(t[a].length==0?[{}]:t[a]),t[a]};return u.exports.useEffect(()=>{y()},[]),_(()=>{i.form.setFields([{name:a,value:s}])},[s]),r.createElement(p.Consumer,null,e=>{switch(e.state){case"default":return r.createElement(w,null,o.defaultValue||"\u3000");case"edit":case"new":case"disabled":return r.createElement(D,{name:a,rules:m.rules},s.map((t,l)=>g(l,t)))}})};var J=E(({})=>({}))(I);export{J as default};
//# sourceMappingURL=dynamicList.bed0f1f5.js.map
