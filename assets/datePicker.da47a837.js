import{c as d,R as a,bQ as r}from"./index.353dd2ef.js";import{s as o}from"./SearchMore.397c843d.js";import{w as l,S as n}from"./index.db133115.js";import{_ as c}from"./index.1af7b029.js";import{F as u}from"./index.66f418cc.js";import"./index.4897d79a.js";import"./index.5b65a776.js";import"./Table.84915985.js";import"./Pagination.79d24ff3.js";import"./index.981931b8.js";import"./index.713bae6c.js";import"./index.adfb1e41.js";const f=o(c)`
  width: 100%;
  && {
    padding: 1vh;
  }
`,b=s=>{const e=s.conf,{name:m}=s;return a.createElement(l.Consumer,null,i=>{switch(i.state){case"default":return a.createElement(n,null,e.defaultValue||"\u3000");case"edit":case"new":case"disabled":return a.createElement(u.Item,{name:m,rules:s.rules},a.createElement(f,{style:e.style,showTime:e.showTime,disabledDate:t=>{if(typeof e.disabledDate=="function")return e.disabledDate(t);if(e.disabledDate===">")return t&&t>Number(r().endOf("day").subtract(1,"days"));if(e.disabledDate==="<")return t&&t<Number(r().endOf("day").subtract(1,"days"))},disabledTime:e.showTime&&e.disabledTime?e.disabledTime:null,disabled:i.state==="disabled",format:e.showTime?"YYYY/MM/DD HH:mm:ss":"YYYY/MM/DD"}))}})};var x=d(({})=>({}))(b);export{x as default};