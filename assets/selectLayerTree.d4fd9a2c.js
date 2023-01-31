import{c as V,B as _,_ as n,R as a}from"./index.f93312c7.js";import{s as x}from"./SearchMore.4899ea4e.js";import{w as S,S as B}from"./index.c4c63bae.js";import{T as L}from"./TreeBox.d4cb3dfc.js";import{M as C}from"./MixinTable.833a4b86.js";import{M as K}from"./index.e677a258.js";import{F as M}from"./index.c802a758.js";import{T as I}from"./index.d1220381.js";import"./index.ec6ab6c1.js";import"./index.8ec8c198.js";import"./index.e947031a.js";import"./Table.7058c2c1.js";import"./Pagination.b9ae5048.js";import"./index.de78d9fa.js";import"./index.9add2654.js";const O=x(K)`
  && {
    width: 70vw !important;
    .select-tree-modal-box {
      display: flex;
      width: 100%;
      margin-top: 5vh;
      .tree-box-main-box {
        width: 30%;
        margin-right: 1vw;
      }
    }
  }
`,P=x(_)`
  margin: 1vh;
`,R=x.div`
  display: flex;
  flex-flow: row wrap;
  .text-display {
    margin: 1vh;
    line-height: 32px;
  }
`,j=x.div`
  width: 100%;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  .select-main-box {
    display: flex;
    flex-flow: row wrap;
    .select-item-box {
      margin: 1vh;
    }
  }
`,q=l=>{const f=l.conf,{name:r}=l,m=n.exports.useContext(S),u=f.tableSetting?f.tableSetting:{},[k,b]=n.exports.useState(!1),[y,v]=n.exports.useState([]),[g,p]=n.exports.useState(f.defaultValue),[o,d]=n.exports.useState([]),A=()=>{b(!0)};function D(t,e){let s=[];e.relationType?s=l[t][e.relationType]:e.url||(s=e.options),v(s),E(s)}n.exports.useEffect(()=>{D("select",f)},[]);const F=(t,e)=>{if(u.getValueKey)switch(u.getValueKey){case"item":p(t),d(e.checkedNodes);break}else p(e.checkedNodes),d(e.checkedNodes[0].userList)},N=t=>{p(t.list),Array.isArray(t.data[0].userList),d(t.data)},T=()=>{b(!1)},w=()=>{const t=m.form.getFieldValue(r),e=[];return Array.isArray(t)&&y.map(s=>{t.map(i=>{s.id===i&&e.push(s.name)})}),e},E=t=>{const e=m.form.getFieldValue(r),s=[];Array.isArray(e)&&t.map(i=>{e.map(c=>{i.id===c&&s.push(i)})}),p(e),d(s)};return a.createElement(S.Consumer,null,t=>{switch(t.state){case"default":return a.createElement(B,null);case"edit":case"new":case"disabled":return a.createElement(R,null,a.createElement(M.Item,{name:r,noStyle:!0,rules:l.rules},a.createElement(j,null,a.createElement("div",{className:"select-main-box"},Array.isArray(w())?w().map(e=>a.createElement(I,{className:"select-item-box"},e)):""),a.createElement(P,{type:"primary",onClick:()=>A()},"\u9009\u62E9"))),a.createElement(O,{visible:k,onOk:()=>{T(),m.form.setFieldsValue({[r]:g})},onCancel:()=>{T();const e=m.form.getFieldValue(r);m.form.setFieldsValue({[r]:e}),E(y)}},a.createElement("div",{className:"select-tree-modal-box"},a.createElement(L,{data:y,selectable:!1,onCheck:F,onSelect:N,checkedTreeKeys:g,className:"tree-box-main-box"}),a.createElement(C,{columns:u.columnList,data:o,handle:[{type:"popconfirm",bolName:"\u5220\u9664",click:(e,s,i)=>{if(o.map((c,h)=>{c.key==e.key&&o.splice(h,1)}),d(o),i.reset(),u.getValueKey)switch(u.getValueKey){case"item":const c=[];o.map(h=>{c.push(h.id)}),p(c);break}},config:{okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",title:"\u662F\u5426\u786E\u8BA4\u5220\u9664\uFF1F"}}],changeKey:o}))))}})};var le=V(({select:l})=>({select:l}))(q);export{le as default};
//# sourceMappingURL=selectLayerTree.d4fd9a2c.js.map
