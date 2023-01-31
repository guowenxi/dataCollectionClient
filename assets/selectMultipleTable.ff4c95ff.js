var C=Object.defineProperty,V=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var w=(t,e,a)=>e in t?C(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,K=(t,e)=>{for(var a in e||(e={}))I.call(e,a)&&w(t,a,e[a]);if(b)for(var a of b(e))M.call(e,a)&&w(t,a,e[a]);return t},h=(t,e)=>V(t,B(e));import{c as A,B as O,_ as i,R as l}from"./index.353dd2ef.js";import{s as p}from"./SearchMore.397c843d.js";import{w as g,S as F}from"./index.db133115.js";import{u as N,M as R}from"./MixinTable.eaeba04d.js";import{M as k}from"./index.9307a5cf.js";import{F as D}from"./index.66f418cc.js";import{T as W}from"./index.adfb1e41.js";import"./index.4897d79a.js";import"./index.5b65a776.js";import"./index.1af7b029.js";import"./Table.84915985.js";import"./Pagination.79d24ff3.js";import"./index.981931b8.js";import"./index.713bae6c.js";const Y=p.div`
border:1px solid #ccc;
  display:flex;
  align-items:center;
  .select-main-box{
    display:flex;
    flex-flow:row  wrap;
    .select-item-box{
      margin:1vh;
    }
  }
`,P=p(O)`
  margin:0 1vh;
`,j=p(k)`
&& {
  width: 70vw !important;
  .select-tree-modal-box {
    width:100%;
    display:flex;
    .tree-box-main-box{
      width:30%;
      margin-right:1vw;
    }
  }
}
`,q=t=>{const e=t.conf,{name:a}=t,r=e.tableSetting?e.tableSetting:{},d=i.exports.useContext(g),[c,{set:f}]=N(),[x,y]=i.exports.useState(),[E,u]=i.exports.useState(!1),[T,_]=i.exports.useState([]);function v(){let m=[];const s=d.form.getFieldValue();m=s[e.itemKey]?s[e.itemKey]:[];const n=s[a]?s[a]:[];f(m),y(n)}return i.exports.useEffect(()=>{v()},[]),l.createElement(g.Consumer,null,m=>{switch(m.state){case"default":return l.createElement(F,null,x);case"edit":case"new":case"disabled":return l.createElement(D.Item,{name:a,noStyle:!0,rules:t.rules},l.createElement(Y,null,l.createElement("div",{className:"select-main-box"},Array.isArray(c)?c.map(s=>l.createElement(W,{className:"select-item-box"},s.name)):""),l.createElement(P,{type:"primary",onClick:()=>u(!0)},e.btnText)),l.createElement(j,{title:e.modalTitle,visible:E,onOk:()=>{const s=[],n=T.map(o=>(s.push(r.idKey?o[r.idKey]:o.id),h(K({},o),{name:r.nameKey?o[r.nameKey]:o.name,id:r.idKey?o[r.idKey]:o.id})));d.form.setFieldsValue({[a]:s}),f(n),y(s),u(!1)},onCancel:()=>u(!1)},l.createElement(R,{url:r.url,changeKey:E,params:r.params,columns:r.columnsList,rowSelection:(s,n)=>{s.map((o,L)=>{c.map(S=>{o===S.id&&(n[L]=S)})}),_(n)},rowKey:"item",defaultValue:x})))}})};var le=A(({select:t})=>({select:t}))(q);export{le as default};
