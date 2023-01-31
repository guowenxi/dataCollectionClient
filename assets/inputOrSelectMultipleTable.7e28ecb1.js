var V=Object.defineProperty,M=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var S=(t,e,a)=>e in t?V(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,f=(t,e)=>{for(var a in e||(e={}))B.call(e,a)&&S(t,a,e[a]);if(w)for(var a of w(e))O.call(e,a)&&S(t,a,e[a]);return t},x=(t,e)=>M(t,k(e));import{c as A,B as F,_ as m,R as l}from"./index.353dd2ef.js";import{s as u}from"./SearchMore.397c843d.js";import{w as v,S as N}from"./index.db133115.js";import{u as _,M as R}from"./MixinTable.eaeba04d.js";import{I as W}from"./index.4897d79a.js";import{M as Y}from"./index.9307a5cf.js";import{F as K}from"./index.66f418cc.js";import"./index.5b65a776.js";import"./index.1af7b029.js";import"./index.adfb1e41.js";import"./Table.84915985.js";import"./Pagination.79d24ff3.js";import"./index.981931b8.js";import"./index.713bae6c.js";const D=u.div`
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  height: 100%;
  .ant-form-item {
    width: 100%!important;
  }
  .select-main-box {
    display: flex;
    flex-flow: row wrap;

    .select-item-box {
      margin: 1vh;
    }
  }
`,P=u(F)`
  margin: 0 1vh;
`,T=u(W)`
  && {
    height: 100%;
    width: 100%;
    padding: 1vh;


  }
`,$=u(Y)`
  && {
    width: 70vw !important;

    .ant-form {
      margin-top: 2vh;
    }

    .select-tree-modal-box {
      width: 100%;
      display: flex;

      .tree-box-main-box {
        width: 30%;
        margin-right: 1vw;
      }
    }
  }
`,j=t=>{const e=t.conf,{name:a}=t,s=e.tableSetting?e.tableSetting:{},p=m.exports.useContext(v),[c,{set:b}]=_([]),[y,C]=m.exports.useState(),[E,h]=m.exports.useState(!1),[I,L]=m.exports.useState([]);return m.exports.useEffect(()=>{},[]),l.createElement(v.Consumer,null,i=>{switch(i.state){case"default":return l.createElement(N,null,y);case"edit":case"new":case"disabled":return l.createElement("div",null,l.createElement(D,null,l.createElement("div",{className:"select-main-box",style:e.style},c.length>0?c.map(n=>l.createElement(K.Item,{name:"name",rules:t.rules},l.createElement(T,{placeholder:e.placeholder,value:n.name,disabled:i.state==="disabled",onChange:o=>{b(x(f({},n),{name:o.target.value})),p.form.setFieldsValue({[a]:o.target.value})}}))):l.createElement(K.Item,{name:"name",rules:t.rules},l.createElement(T,{placeholder:e.placeholder,disabled:i.state==="disabled",onChange:n=>{p.form.setFieldsValue({[a]:n.target.value})}}))),i.state==="disabled"?null:l.createElement(P,{type:"primary",onClick:()=>h(!0)},e.btnText)),l.createElement($,{title:e.modalTitle,visible:E,onOk:()=>{const n=[],o=[],d=I.map(r=>(n.push(s.idKey?r[s.idKey]:r.id),o.push(r.phone),x(f({},r),{name:s.nameKey?r[s.nameKey]:r.name,id:s.idKey?r[s.idKey]:r.id})));p.form.setFieldsValue({[a]:d[0].name}),b(d),C(n),h(!1),i.focus$.emit({relateNames:e.relateNames,relatekeys:e.relatekeys,value:o})},onCancel:()=>h(!1)},l.createElement(R,{url:s.url,changeKey:E,params:s.params,columns:s.columnsList,rowSelection:(n,o)=>{n.map((d,r)=>{Array.isArray(c)&&c.map(g=>{d===g.id&&(o[r]=g)})}),L(o)},rowKey:"item",defaultValue:y,checkboxType:s.checkboxType})))}})};var ne=A(({select:t})=>({select:t}))(j);export{ne as default};
