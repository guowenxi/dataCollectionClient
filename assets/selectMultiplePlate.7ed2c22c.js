import{_ as a,A as h,a as s,c as b,R as t,m as E}from"./index.1744db00.js";import{s as l}from"./SearchMore.b58ad9fc.js";import{u as S}from"./index.18a69498.js";import{a as z}from"./index.54246283.js";import{w as m,S as P}from"./index.2cf55c0b.js";import{F}from"./index.a10c21c4.js";import{I as x}from"./index.94ba65ab.js";import"./index.0b2062c9.js";import"./index.ba1b5373.js";import"./index.2f265e7d.js";import"./Table.e070c8af.js";import"./Pagination.88552979.js";import"./index.4d18e0ae.js";var V={icon:function(e,o){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",fill:e}},{tag:"path",attrs:{d:"M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm171.8 527.1c1.2 1.5 1.9 3.3 1.9 5.2 0 4.5-3.6 8-8 8l-66-.3-99.3-118.4-99.3 118.5-66.1.3c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2L471 512.3l-130.1-155a8.32 8.32 0 01-1.9-5.2c0-4.5 3.6-8 8-8l66.1.3 99.3 118.4 99.4-118.5 66-.3c4.4 0 8 3.6 8 8 0 1.9-.6 3.8-1.8 5.2l-130.1 155 129.9 154.9z",fill:o}},{tag:"path",attrs:{d:"M685.8 352c0-4.4-3.6-8-8-8l-66 .3-99.4 118.5-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155-130.1 154.9a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3 99.3-118.5L611.7 680l66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.9 512.2l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z",fill:e}}]}},name:"close-circle",theme:"twotone"},q=V,g=function(e,o){return a.exports.createElement(h,s(s({},e),{},{ref:o,icon:q}))};g.displayName="CloseCircleTwoTone";var H=a.exports.forwardRef(g),I={icon:function(e,o){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z",fill:e}},{tag:"path",attrs:{d:"M184 840h656V184H184v656zm136-352c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48z",fill:o}},{tag:"path",attrs:{d:"M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z",fill:e}}]}},name:"plus-square",theme:"twotone"},L=I,v=function(e,o){return a.exports.createElement(h,s(s({},e),{},{ref:o,icon:L}))};v.displayName="PlusSquareTwoTone";var M=a.exports.forwardRef(v);const B=l(F.Item)`
  float: left;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
`,k=l(M)`
  font-size: 18px;
  position: absolute;
  top: -5px;
  right: -7px;
  color: #ec2828;
  cursor: pointer;
`,_=l(H)`
  font-size: 18px;
  position: absolute;
  top: -5px;
  right: -7px;
  color: #ec2828;
  cursor: pointer;
`,y=l(x)`
  && {
    min-width: 110px;
    text-align: left !important;
    /* margin-left: 10px; */
    letter-spacing: 6px;
    font-weight: bold;
  }
`,d=l.div`
  min-width: 110px;
  font-weight: bold;
  float: left;
  background: #3a93f8;
  border-radius: 6px;
  height: 40px;
  margin: 1vh;
  display: flex;
  position: relative;
  padding: 10px;
  text-align: center;
  color: #fff;
  letter-spacing: 3px;
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 96%;
    height: 33px;
    border: 1px solid #fff;
    border-radius: 3px;
  }
  input {
    color: #fff;
    max-width: 20px;
    min-width: 20px;
    border: none;
    background: transparent;
    padding: 0 !important;
  }
`,D=l.div`
  width: 100%;
  float: left;
`,N=l.div`
  width: 100%;
  float: left;
`,R=r=>{const{name:e}=r,o=a.exports.useContext(m),[c,u]=a.exports.useState("\u6D59C"),{list:i,resetList:w,remove:T,push:C}=S([]);return z(()=>{o.form.setFieldsValue({[e]:i})},[i]),a.exports.useEffect(()=>{const n=o.form.getFieldsValue();w(n[e]===""?[]:n[e])},[]),t.createElement(m.Consumer,null,n=>{switch(n.state){case"default":return t.createElement(P,null);case"edit":case"new":case"disabled":return t.createElement(B,{name:e},n.state!="disabled"?t.createElement(D,null,t.createElement(d,null,t.createElement(x.Group,null,t.createElement(y,{maxLength:7,value:c,onChange:p=>{u(p.target.value)}})),t.createElement(k,{onClick:()=>{c.length===7?(C(c.toUpperCase()),u("\u6D59C")):E.error("\u8BF7\u8F93\u5165\u5B8C\u6574\u7684\u8F66\u724C\u4FE1\u606F")}}))):null,t.createElement(N,null,i.map((p,f)=>t.createElement(d,{key:f},n.state!="disabled"?t.createElement(_,{onClick:()=>T(f),twoToneColor:"#ec2828"}):null,p))))}})};var ee=b(({select:r})=>({select:r}))(R);export{ee as default};
