import{c as i,R as o}from"./index.353dd2ef.js";import{w as r}from"./index.db133115.js";import{s as l}from"./SearchMore.397c843d.js";import"./index.981931b8.js";import"./index.66f418cc.js";import"./index.4897d79a.js";import"./Table.84915985.js";import"./Pagination.79d24ff3.js";import"./index.713bae6c.js";import"./index.5b65a776.js";import"./index.1af7b029.js";import"./index.adfb1e41.js";const n=l.div`
  width: 100%;
  height: 45px;
  line-height: 45px;
  font-weight: bold;
  font-size:16px;
  padding: 0 3vh;
  position: relative;
  display: flex;
  &:before {
    position: absolute;
    top: 50%;
    left: 1vh;
    width: 5px;
    height: 40%;
    background: ${t=>t.lineColor?t.lineColor:"#000"};
    transform: translateY(-50%);
    content: '';
  }
`,a=t=>{const e=t.conf;return o.createElement(r.Consumer,null,p=>o.createElement(n,{lineColor:e.lineColor},e.defaultValue))};var w=i(({})=>({}))(a);export{w as default};
