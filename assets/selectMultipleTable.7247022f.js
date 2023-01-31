var C=Object.defineProperty,V=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var w=(t,e,a)=>e in t?C(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,K=(t,e)=>{for(var a in e||(e={}))I.call(e,a)&&w(t,a,e[a]);if(b)for(var a of b(e))M.call(e,a)&&w(t,a,e[a]);return t},h=(t,e)=>V(t,B(e));import{c as A,B as O,_ as i,R as l}from"./index.f93312c7.js";import{s as p}from"./SearchMore.4899ea4e.js";import{w as g,S as F}from"./index.c4c63bae.js";import{u as N,M as R}from"./MixinTable.833a4b86.js";import{M as k}from"./index.e677a258.js";import{F as D}from"./index.c802a758.js";import{T as W}from"./index.d1220381.js";import"./index.ec6ab6c1.js";import"./index.8ec8c198.js";import"./index.e947031a.js";import"./Table.7058c2c1.js";import"./Pagination.b9ae5048.js";import"./index.de78d9fa.js";import"./index.9add2654.js";const Y=p.div`
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
//# sourceMappingURL=selectMultipleTable.7247022f.js.map
