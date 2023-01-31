import{_ as s,R as t}from"./index.353dd2ef.js";import{s as n}from"./SearchMore.397c843d.js";import{w as o,S as i}from"./index.db133115.js";import{A as l}from"./index.5b65a776.js";import{F as u}from"./index.66f418cc.js";import"./index.4897d79a.js";import"./index.1af7b029.js";import"./index.adfb1e41.js";import"./Table.84915985.js";import"./Pagination.79d24ff3.js";import"./index.981931b8.js";import"./index.713bae6c.js";const d=n(l)`
  .ant-input-number-input {
    height: auto;
    padding: 0 11px 0 0;
  }

  && {
    width: 100%;
    padding: 1vh;
  }
`,A=r=>{const e=r.conf,{name:m}=r;return s.exports.useEffect(()=>{},[]),t.createElement(o.Consumer,null,a=>{switch(a.state){case"default":return t.createElement(i,null,e.defaultValue||"\u3000");case"edit":case"new":case"disabled":return t.createElement(u.Item,{name:m,rules:r.rules},t.createElement(d,{style:e.style,min:e.min?e.min:0,max:e.max?e.max:9999,disabled:a.state==="disabled"||e.disabled===!0,addonAfter:e.text,placeholder:e.placeholder,size:e.size}))}})};export{A as default};
