var V=Object.defineProperty,M=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var S=(t,e,a)=>e in t?V(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,f=(t,e)=>{for(var a in e||(e={}))B.call(e,a)&&S(t,a,e[a]);if(w)for(var a of w(e))O.call(e,a)&&S(t,a,e[a]);return t},x=(t,e)=>M(t,k(e));import{c as A,B as F,_ as m,R as l}from"./index.8d62fabd.js";import{s as u}from"./SearchMore.60d61241.js";import{w as v,S as N}from"./index.f74872f6.js";import{u as _,M as R}from"./MixinTable.496f7728.js";import{I as W}from"./index.d4ab65ae.js";import{M as Y}from"./index.773d2a64.js";import{F as K}from"./index.6214eb92.js";import"./index.e6c9f47e.js";import"./index.adc43817.js";import"./index.8a2ef8d3.js";import"./Table.2da81800.js";import"./Pagination.2e94c1c8.js";import"./_baseIsEqual.8d7f74ca.js";import"./index.23997226.js";import"./index.bd6b171c.js";import"./Portal.8cf5a27d.js";const D=u.div`
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
`,j=t=>{const e=t.conf,{name:a}=t,r=e.tableSetting?e.tableSetting:{},p=m.exports.useContext(v),[c,{set:b}]=_([]),[y,C]=m.exports.useState(),[E,h]=m.exports.useState(!1),[I,L]=m.exports.useState([]);return m.exports.useEffect(()=>{},[]),l.createElement(v.Consumer,null,i=>{switch(i.state){case"default":return l.createElement(N,null,y);case"edit":case"new":case"disabled":return l.createElement("div",null,l.createElement(D,null,l.createElement("div",{className:"select-main-box",style:e.style},c.length>0?c.map(n=>l.createElement(K.Item,{name:"name",rules:t.rules},l.createElement(T,{placeholder:e.placeholder,value:n.name,disabled:i.state==="disabled",onChange:o=>{b(x(f({},n),{name:o.target.value})),p.form.setFieldsValue({[a]:o.target.value})}}))):l.createElement(K.Item,{name:"name",rules:t.rules},l.createElement(T,{placeholder:e.placeholder,disabled:i.state==="disabled",onChange:n=>{p.form.setFieldsValue({[a]:n.target.value})}}))),i.state==="disabled"?null:l.createElement(P,{type:"primary",onClick:()=>h(!0)},e.btnText)),l.createElement($,{title:e.modalTitle,visible:E,onOk:()=>{const n=[],o=[],d=I.map(s=>(n.push(r.idKey?s[r.idKey]:s.id),o.push(s.phone),x(f({},s),{name:r.nameKey?s[r.nameKey]:s.name,id:r.idKey?s[r.idKey]:s.id})));p.form.setFieldsValue({[a]:d[0].name}),b(d),C(n),h(!1),i.focus$.emit({relateNames:e.relateNames,relatekeys:e.relatekeys,value:o})},onCancel:()=>h(!1)},l.createElement(R,{url:r.url,changeKey:E,params:r.params,columns:r.columnsList,rowSelection:(n,o)=>{n.map((d,s)=>{Array.isArray(c)&&c.map(g=>{d===g.id&&(o[s]=g)})}),L(o)},rowKey:"item",defaultValue:y,checkboxType:r.checkboxType})))}})};var ie=A(({select:t})=>({select:t}))(j);export{ie as default};
//# sourceMappingURL=inputOrSelectMultipleTable.17c3ca4c.js.map
