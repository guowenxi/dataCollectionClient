import{c as s,R as t}from"./index.353dd2ef.js";import{s as m}from"./SearchMore.397c843d.js";import{w as n,S as l}from"./index.db133115.js";import{I as i}from"./index.4897d79a.js";import{F as c}from"./index.66f418cc.js";import"./index.5b65a776.js";import"./index.1af7b029.js";import"./index.adfb1e41.js";import"./Table.84915985.js";import"./Pagination.79d24ff3.js";import"./index.981931b8.js";import"./index.713bae6c.js";const d=m(i.TextArea)`
  && {
    padding: 1vh;
  }
`,u=r=>{const e=r.conf,{name:o}=r;return t.createElement(n.Consumer,null,a=>{switch(a.state){case"default":return t.createElement(l,null,e.defaultValue||"\u3000");case"edit":case"new":case"disabled":return t.createElement(c.Item,{name:o,rules:r.rules},t.createElement(d,{style:e.style,disabled:a.state==="disabled",placeholder:e.placeholder,size:e.size,bordered:e.bordered,showCount:e.showCount,maxLength:e.maxLength,autoSize:e.autoSize}))}})};var y=s(({})=>({}))(u);export{y as default};
