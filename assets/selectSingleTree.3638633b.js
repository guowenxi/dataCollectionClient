var V=Object.defineProperty;var v=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var T=(i,e,a)=>e in i?V(i,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[e]=a,_=(i,e)=>{for(var a in e||(e={}))J.call(e,a)&&T(i,a,e[a]);if(v)for(var a of v(e))q.call(e,a)&&T(i,a,e[a]);return i};var k=(i,e,a)=>new Promise((b,x)=>{var s=r=>{try{u(a.next(r))}catch(f){x(f)}},N=r=>{try{u(a.throw(r))}catch(f){x(f)}},u=r=>r.done?b(r.value):Promise.resolve(r.value).then(s,N);u((a=a.apply(i,e)).next())});import{c as G,B as K,_ as d,R as n}from"./index.3b0f1d22.js";import{s as y}from"./SearchMore.ed23b912.js";import{w as D,S as P}from"./index.f9227d92.js";import{T as R}from"./TreeBox.1d9722cd.js";import{M as j}from"./MixinTable.2350e603.js";import{A as H}from"./index.465b72ea.js";import{M as Q}from"./index.562b58ba.js";import{F as U}from"./index.956cef20.js";import"./index.62eb6faf.js";import"./index.5e38d70a.js";import"./index.09976468.js";import"./Table.3fbe1f2c.js";import"./Pagination.8e24f235.js";import"./index.b72b64bd.js";import"./index.dba719dc.js";y(H)`
  && {
    width:100%;
    height:100%;
    .ant-select-selector{
      height:100%;
      padding:1vh;
    }
    .ant-select-selection-search-input{
      height:100% !important;
    }
    .ant-select-selection-item{
    }

  }
`;const W=y(Q)`
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
`,B=y.div`
margin:10px 0 ;
    position: relative;
    display: flex;
    flex: auto;
    flex-wrap: wrap;
    max-width: 100%;
`,F=y.div`
    position: relative;
    display: flex;
    flex: none;
    box-sizing: border-box;
    max-width: 100%;
    height: 24px;
    margin-top: 2px;
    margin-bottom: 2px;
    line-height: 22px;
    background: #f5f5f5;
    border: 1px solid #f0f0f0;
    border-radius: 2px;
    cursor: default;
    transition: font-size .3s,line-height .3s,height .3s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-margin-end: 4px;
    margin-inline-end: 4px;
    -webkit-padding-start: 8px;
    padding-inline-start: 8px;
    -webkit-padding-end: 4px;
    padding-inline-end: 4px;
    .ant-select-selection-item-content{
      display: inline-block;
    margin-right: 4px;
    overflow: hidden;
    white-space: pre;
    text-overflow: ellipsis;
    }
    .ant-select-selection-item-remove{
      color: inherit;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: inline-block;
    color: #00000073;
    font-weight: 700;
    font-size: 10px;
    line-height: inherit;
    cursor: pointer;
    }
`,X=y(K)`
  margin: 1vh;
`,Y=i=>{const e=i.conf,{name:a}=i,{dispatch:b}=i,x=d.exports.useContext(D),s=e.tableSetting?e.tableSetting:{},[N,u]=d.exports.useState(!1),[r,f]=d.exports.useState([]),[C,E]=d.exports.useState(e.defaultValue),[h,w]=d.exports.useState([]),[c,S]=d.exports.useState([]),L=()=>{u(!0)},O=()=>{u(!1),s.url&&x.form.setFieldsValue({[a]:c})};function A(o,t){return k(this,null,function*(){let l=[];if(t.relationType)l=i[o][t.relationType];else if(t.url){const p=yield b({type:"common/requestData",url:t.url,method:"GET",payload:_({},t.params)});t.keyName&&p.map(function(m,g){m.name=m[t.keyName],m.id=m[t.idName]}),l=p}else l=t.options;f(l)})}d.exports.useEffect(()=>{A("select",e)},[]),d.exports.useEffect(()=>{const o=x.form.getFieldValue(a);o.length&&S(o)},[x.form.getFieldValue(a)]);const I=(o,t)=>k(void 0,null,function*(){if(E(t.checkedNodes),s.url){const l=yield b({type:"common/requestData",url:s.url,method:"GET",payload:{[s.paramsConfig.idName]:t.node[s.paramsConfig.keyName]}});w(l.list||l)}else w(t.checkedNodes[0].userList)}),M=o=>{E(o.list),Array.isArray(o.data[0].userList),w(o.data)},z=()=>{u(!1)};return n.createElement(D.Consumer,null,o=>{switch(o.state){case"default":return n.createElement(P,null);case"edit":case"new":case"disabled":return n.createElement(U.Item,{name:a,noStyle:!0,rules:i.rules},n.createElement("div",{style:{boxShadow:"0 0 0 1px #eee inside"}},n.createElement(B,null,c.map((t,l)=>n.createElement(F,null,n.createElement("span",{className:"ant-select-selection-item-content"},t[e.keyName||"name"])))),n.createElement(X,{onClick:L},"\u9009\u62E9"),n.createElement(W,{visible:N,onOk:O,onCancel:z},n.createElement("div",{className:"select-tree-modal-box"},n.createElement(R,{data:r,selectable:!1,onCheck:I,onSelect:M,checkedTreeKeys:C,className:"tree-box-main-box"}),n.createElement(j,{noSearch:!0,columns:s.columnList,data:h,handle:[{name:"\u6DFB\u52A0",show:!!s.url,click:(t,l,p)=>{if(s.url){if(c.find((g,Z)=>g[e.idName||"id"]==t[e.idName||"id"]))return;c.push(l),S(JSON.parse(JSON.stringify(c)))}}},{type:"popconfirm",bolName:"\u5220\u9664",show:!s.url,click:(t,l,p)=>{h.map((m,g)=>{m.key==t.key&&h.splice(g,1)}),w(h),p.reset()},config:{okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",title:"\u662F\u5426\u786E\u8BA4\u5220\u9664\uFF1F"}}],changeKey:h})),s.url?n.createElement(B,null,c.map((t,l)=>n.createElement(F,null,n.createElement("span",{className:"ant-select-selection-item-content"},t[e.keyName||"name"]),n.createElement("span",{className:"ant-select-selection-item-remove",onClick:()=>{const p=c.findIndex((m,g)=>m[e.idName||"id"]==t[e.idName||"id"]);c.splice(p,1),S(JSON.parse(JSON.stringify(c)))}},"x")))):null)))}})};var fe=G(({select:i})=>({select:i}))(Y);export{fe as default};
//# sourceMappingURL=selectSingleTree.3638633b.js.map
