import{_ as l,R as r}from"./index.f93312c7.js";import{s as _}from"./SearchMore.4899ea4e.js";import{a as A}from"./Table.7058c2c1.js";import{I as D}from"./index.ec6ab6c1.js";const{Search:B}=D,C=_.div`
  position: relative;
  left:0;
  width: 100%; 
  .search-box{
    margin:1vh 0;
  }
`,V=c=>{const{data:f,checkedTreeKeys:y,className:k,changeKey:b}=c,[o,g]=l.exports.useState([]),[m,E]=l.exports.useState(""),[p,h]=l.exports.useState(!1),[I,i]=l.exports.useState([]),u=(n,e)=>{Array.isArray(n)&&n.length&&n.map((t,a)=>{t.title=t.name,t.key=t.id,t.keyIndex=`${e}-${a}`,t.children&&u(t.children,t.keyIndex)}),g(n)};l.exports.useMemo(()=>{},[b]),l.exports.useEffect(()=>{u(f,0)},[]);const v=(n,e)=>{c.onCheck(n,e)},S=(n,e)=>{c.onSelect(n,e)},d=(n,e,t)=>(Array.isArray(e)&&e.map((a,s)=>{a.title.indexOf(n)>=0&&t.push(a.keyIndex),a.children&&d(n,a.children,t)}),t),K=n=>{const{value:e}=n.target;let t;e&&(t=d(e,o,[]));let a=[];t&&t.map((s,N)=>{a=x(s,o,a)}),i(a),E(e),h(!1)},x=(n,e,t)=>{const a=n.length;for(let s=0;s<e.length;s++)e[s].keyIndex.length>a?e[s].keyIndex.substr(0,a)===n&&t.push(e[s].key):e[s].keyIndex===n.substr(0,e[s].keyIndex.length)&&t.push(e[s].key),e[s].children&&x(n,e[s].children,t);return t},T=n=>{i(n),h(!1)};return r.createElement(C,{className:k||""},r.createElement("div",{className:"search-box"},r.createElement(B,{placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u5B57",value:m,onChange:K})),r.createElement(A,{className:"hide-file-icon",checkable:c.checkable!=null&&c.checkable!=null?c.checkable:!0,onCheck:v,onSelect:S,treeData:o,selectable:c.selectable!=null&&c.selectable!=null?c.selectable:!1,checkedKeys:y,autoExpandParent:p,onExpand:T,expandedKeys:I}))};export{V as T};
//# sourceMappingURL=TreeBox.d4cb3dfc.js.map
