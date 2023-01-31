import{c as n,_ as c,R as r}from"./index.3b0f1d22.js";import{_ as l,s as m}from"./SearchMore.ed23b912.js";import{w as i,S as d}from"./index.f9227d92.js";import{_ as f}from"./index.5e38d70a.js";import{F as h}from"./index.956cef20.js";import"./index.465b72ea.js";import"./index.62eb6faf.js";import"./Table.3fbe1f2c.js";import"./Pagination.8e24f235.js";import"./index.b72b64bd.js";import"./index.dba719dc.js";import"./index.09976468.js";const u=f.RangePicker,w=l.RangePicker,p=m(w)`
  width: 100%;

  && {
    padding: 1vh;
  }
`,Y=m(u)`
  width: 100%;

  && {
    padding: 1vh;
  }
`;function g(t){var a=["YYYY","MM","SS"].find(function(s,o){return t.indexOf(s)!=-1});return a}const k=t=>{const e=t.conf,{name:a}=t;return c.exports.useContext(i).form.getFieldValue(a),r.createElement(i.Consumer,null,o=>{switch(o.state){case"default":return r.createElement(d,null,e.defaultValue||"\u3000");case"edit":case"new":case"disabled":return r.createElement(h.Item,{name:a,noStyle:!0,rules:t.rules},g(e.format||"YYYY/MM/DD hh:mm:ss")?r.createElement(Y,{style:e.style,showTime:e.showTime,showToday:e.showToday,disabled:o.state==="disabled",format:e.format||"YYYY/MM/DD hh:mm:ss"}):r.createElement(p,{style:e.style,showTime:e.showTime,showToday:e.showToday,disabled:o.state==="disabled",format:e.format||"hh:mm:ss"}))}})};var C=n(({})=>({}))(k);export{C as default};
//# sourceMappingURL=rangePicker.ef163e78.js.map
