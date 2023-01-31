var f=(o,a,n)=>new Promise((c,i)=>{var m=e=>{try{l(n.next(e))}catch(t){i(t)}},u=e=>{try{l(n.throw(e))}catch(t){i(t)}},l=e=>e.done?c(e.value):Promise.resolve(e.value).then(m,u);l((n=n.apply(o,a)).next())});import{c as D,_ as h,bQ as d,R as r}from"./index.353dd2ef.js";import{s as p}from"./SearchMore.397c843d.js";import{w,S as x}from"./index.db133115.js";import{A as g}from"./index.5b65a776.js";import{_ as E}from"./index.1af7b029.js";import{F as b}from"./index.66f418cc.js";import"./index.4897d79a.js";import"./Table.84915985.js";import"./Pagination.79d24ff3.js";import"./index.981931b8.js";import"./index.713bae6c.js";import"./index.adfb1e41.js";const v=p.div`
  display: flex;
  flex-flow: row nowrap;
`,Y=p(g)`
  .ant-input-number-input {
    height: auto;
    padding: 0 11px 0 0;
  }
  flex: 2;
  && {
    width: 100%;
    padding: 1vh;
  }
`,y=p(E)`
  flex: 1;
  && {
    height: 100%;
    padding: 1vh;
  }
`;let s=0;const _=o=>{const a=o.conf,{name:n}=o,{dispatch:c}=o,[i,m]=h.exports.useState(d(new Date,"YYYY/MM/DD"));function u(e){return f(this,null,function*(){e||(e=0);const t=yield c({type:"common/requestData",url:a.url,method:"GET",payload:{limitNum:e,beginDate:d().format("YYYY/MM/DD")}});m(d(t))})}const l=e=>{s=e.getFieldValue(n)};return h.exports.useEffect(()=>{(s!=null||s!=null)&&u(s)},[s]),r.createElement(w.Consumer,null,e=>{switch(e.state){case"default":return r.createElement(x,null,a.defaultValue||"\u3000");case"edit":case"new":case"disabled":return r.createElement(v,null,r.createElement(b.Item,{name:n,rules:o.rules},r.createElement(Y,{onChange:t=>{u(t)},style:a.style,disabled:e.state==="disabled",placeholder:a.placeholder,size:a.size,min:0})),r.createElement(y,{disabled:!0,value:i}),l(e.form))}})};var R=D(({})=>({}))(_);export{R as default};
