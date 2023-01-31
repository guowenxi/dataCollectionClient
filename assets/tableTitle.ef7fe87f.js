import{c as i,R as o}from"./index.1744db00.js";import{w as r}from"./index.2cf55c0b.js";import{s as l}from"./SearchMore.b58ad9fc.js";import"./index.54246283.js";import"./index.a10c21c4.js";import"./index.94ba65ab.js";import"./Table.e070c8af.js";import"./Pagination.88552979.js";import"./index.4d18e0ae.js";import"./index.0b2062c9.js";import"./index.ba1b5373.js";import"./index.2f265e7d.js";const n=l.div`
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
