import{c as n,_ as c,R as r}from"./index.f93312c7.js";import{_ as l,s as m}from"./SearchMore.4899ea4e.js";import{w as i,S as d}from"./index.c4c63bae.js";import{_ as f}from"./index.e947031a.js";import{F as h}from"./index.c802a758.js";import"./index.ec6ab6c1.js";import"./index.8ec8c198.js";import"./Table.7058c2c1.js";import"./Pagination.b9ae5048.js";import"./index.de78d9fa.js";import"./index.9add2654.js";import"./index.d1220381.js";const u=f.RangePicker,w=l.RangePicker,p=m(w)`
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
//# sourceMappingURL=rangePicker.2cf1a0f4.js.map
