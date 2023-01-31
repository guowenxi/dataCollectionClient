import{c as n,_ as c,R as r}from"./index.353dd2ef.js";import{_ as l,s as m}from"./SearchMore.397c843d.js";import{w as i,S as d}from"./index.db133115.js";import{_ as f}from"./index.1af7b029.js";import{F as h}from"./index.66f418cc.js";import"./index.4897d79a.js";import"./index.5b65a776.js";import"./Table.84915985.js";import"./Pagination.79d24ff3.js";import"./index.981931b8.js";import"./index.713bae6c.js";import"./index.adfb1e41.js";const u=f.RangePicker,w=l.RangePicker,p=m(w)`
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
