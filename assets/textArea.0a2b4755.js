import{c as s,R as t}from"./index.1744db00.js";import{s as m}from"./SearchMore.b58ad9fc.js";import{w as n,S as l}from"./index.2cf55c0b.js";import{I as i}from"./index.94ba65ab.js";import{F as c}from"./index.a10c21c4.js";import"./index.0b2062c9.js";import"./index.ba1b5373.js";import"./index.2f265e7d.js";import"./Table.e070c8af.js";import"./Pagination.88552979.js";import"./index.54246283.js";import"./index.4d18e0ae.js";const d=m(i.TextArea)`
  && {
    padding: 1vh;
  }
`,u=r=>{const e=r.conf,{name:o}=r;return t.createElement(n.Consumer,null,a=>{switch(a.state){case"default":return t.createElement(l,null,e.defaultValue||"\u3000");case"edit":case"new":case"disabled":return t.createElement(c.Item,{name:o,rules:r.rules},t.createElement(d,{style:e.style,disabled:a.state==="disabled",placeholder:e.placeholder,size:e.size,bordered:e.bordered,showCount:e.showCount,maxLength:e.maxLength,autoSize:e.autoSize}))}})};var y=s(({})=>({}))(u);export{y as default};
