import{c as n,_ as c,R as r}from"./index.1744db00.js";import{_ as l,s as m}from"./SearchMore.b58ad9fc.js";import{w as i,S as d}from"./index.2cf55c0b.js";import{_ as f}from"./index.ba1b5373.js";import{F as h}from"./index.a10c21c4.js";import"./index.94ba65ab.js";import"./index.0b2062c9.js";import"./Table.e070c8af.js";import"./Pagination.88552979.js";import"./index.54246283.js";import"./index.4d18e0ae.js";import"./index.2f265e7d.js";const u=f.RangePicker,w=l.RangePicker,p=m(w)`
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
