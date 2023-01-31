import{_ as s,R as t}from"./index.1744db00.js";import{s as n}from"./SearchMore.b58ad9fc.js";import{w as o,S as i}from"./index.2cf55c0b.js";import{A as l}from"./index.0b2062c9.js";import{F as u}from"./index.a10c21c4.js";import"./index.94ba65ab.js";import"./index.ba1b5373.js";import"./index.2f265e7d.js";import"./Table.e070c8af.js";import"./Pagination.88552979.js";import"./index.54246283.js";import"./index.4d18e0ae.js";const d=n(l)`
  .ant-input-number-input {
    height: auto;
    padding: 0 11px 0 0;
  }

  && {
    width: 100%;
    padding: 1vh;
  }
`,A=r=>{const e=r.conf,{name:m}=r;return s.exports.useEffect(()=>{},[]),t.createElement(o.Consumer,null,a=>{switch(a.state){case"default":return t.createElement(i,null,e.defaultValue||"\u3000");case"edit":case"new":case"disabled":return t.createElement(u.Item,{name:m,rules:r.rules},t.createElement(d,{style:e.style,min:e.min?e.min:0,max:e.max?e.max:9999,disabled:a.state==="disabled"||e.disabled===!0,addonAfter:e.text,placeholder:e.placeholder,size:e.size}))}})};export{A as default};
