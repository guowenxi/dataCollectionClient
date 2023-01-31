var W=Object.defineProperty;var V=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var U=(e,t,o)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,F=(e,t)=>{for(var o in t||(t={}))Y.call(t,o)&&U(e,o,t[o]);if(V)for(var o of V(t))X.call(t,o)&&U(e,o,t[o]);return e};import{_ as l,C as I,T as G,e as R,a3 as Q,V as Z,x as ee,B as te,aO as ne,a7 as re,h as ae,g as oe,P as le,aD as ie,F as ce,c as se,R as v}from"./index.f93312c7.js";import{s as K}from"./SearchMore.4899ea4e.js";import{b as ue,u as fe}from"./index.de78d9fa.js";import{F as j}from"./index.c802a758.js";import{b as me,T as J}from"./Table.7058c2c1.js";import{A as de}from"./index.e677a258.js";import{I as ve}from"./index.ec6ab6c1.js";var M=function(t){return t?typeof t=="function"?t():t:null},pe=globalThis&&globalThis.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]]);return o},ge=function(t){var o=t.title,n=t.content,i=t.prefixCls;return!o&&!n?null:l.exports.createElement(l.exports.Fragment,null,o&&l.exports.createElement("div",{className:"".concat(i,"-title")},M(o)),l.exports.createElement("div",{className:"".concat(i,"-inner-content")},M(n)))},xe=l.exports.forwardRef(function(e,t){var o=e.prefixCls,n=e.title,i=e.content,r=e._overlay,a=e.placement,c=a===void 0?"top":a,u=e.trigger,w=u===void 0?"hover":u,x=e.mouseEnterDelay,k=x===void 0?.1:x,C=e.mouseLeaveDelay,P=C===void 0?.1:C,b=e.overlayStyle,_=b===void 0?{}:b,y=pe(e,["prefixCls","title","content","_overlay","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),E=l.exports.useContext(I),$=E.getPrefixCls,S=$("popover",o),T=$();return l.exports.createElement(G,R({placement:c,trigger:w,mouseEnterDelay:k,mouseLeaveDelay:P,overlayStyle:_},y,{prefixCls:S,ref:t,overlay:r||l.exports.createElement(ge,{prefixCls:S,title:n,content:i}),transitionName:Q(T,"zoom-big",y.transitionName)}))}),ye=xe,he=function(t){var o=t.prefixCls,n=t.okButtonProps,i=t.cancelButtonProps,r=t.title,a=t.cancelText,c=t.okText,u=t.okType,w=t.icon,x=t.showCancel,k=x===void 0?!0:x,C=t.close,P=t.onConfirm,b=t.onCancel,_=l.exports.useContext(I),y=_.getPrefixCls;return l.exports.createElement(Z,{componentName:"Popconfirm",defaultLocale:ee.Popconfirm},function(E){return l.exports.createElement("div",{className:"".concat(o,"-inner-content")},l.exports.createElement("div",{className:"".concat(o,"-message")},w&&l.exports.createElement("span",{className:"".concat(o,"-message-icon")},w),l.exports.createElement("div",{className:"".concat(o,"-message-title")},M(r))),l.exports.createElement("div",{className:"".concat(o,"-buttons")},k&&l.exports.createElement(te,R({onClick:b,size:"small"},i),a!=null?a:E.cancelText),l.exports.createElement(de,{buttonProps:R(R({size:"small"},ne(u)),n),actionFn:P,close:C,prefixCls:y("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},c!=null?c:E.okText)))})},q=globalThis,Ce=globalThis&&globalThis.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]]);return o},be=l.exports.forwardRef(function(e,t){var o=l.exports.useContext(I),n=o.getPrefixCls,i=re(!1,{value:e.open!==void 0?e.open:e.visible,defaultValue:e.defaultOpen!==void 0?e.defaultOpen:e.defaultVisible}),r=ae(i,2),a=r[0],c=r[1],u=function(m,d){var O,L;c(m,!0),(O=e.onVisibleChange)===null||O===void 0||O.call(e,m,d),(L=e.onOpenChange)===null||L===void 0||L.call(e,m,d)},w=function(m){u(!1,m)},x=function(m){var d;return(d=e.onConfirm)===null||d===void 0?void 0:d.call(q,m)},k=function(m){var d;u(!1,m),(d=e.onCancel)===null||d===void 0||d.call(q,m)},C=function(m){m.keyCode===ie.ESC&&a&&u(!1,m)},P=function(m){var d=e.disabled,O=d===void 0?!1:d;O||u(m)},b=e.prefixCls,_=e.placement,y=_===void 0?"top":_,E=e.trigger,$=E===void 0?"click":E,S=e.okType,T=S===void 0?"primary":S,N=e.icon,A=N===void 0?l.exports.createElement(ce,null):N,D=e.children,B=e.overlayClassName,s=Ce(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName"]),h=n("popover",b),f=n("popconfirm",b),g=oe(f,B);return l.exports.createElement(ye,R({},s,{trigger:$,prefixCls:h,placement:y,onOpenChange:P,open:a,ref:t,overlayClassName:g,_overlay:l.exports.createElement(he,R({okType:T,icon:A},e,{prefixCls:h,close:w,onConfirm:x,onCancel:k}))}),le(D,{onKeyDown:function(m){var d,O;l.exports.isValidElement(D)&&((O=D==null?void 0:(d=D.props).onKeyDown)===null||O===void 0||O.call(d,m)),C(m)}}))}),Ee=be,Oe=function(e){return(e+1)%1e6},Pe=function(){var e=l.exports.useReducer(Oe,0),t=e[1];return t},_e=Pe;function z(e,t){return typeof e=="function"?e(t):e}function Te(e){e===void 0&&(e=[]);var t=l.exports.useRef(z(e)),o=_e(),n=l.exports.useMemo(function(){var i={set:function(r){t.current=z(r,t.current),o()},push:function(){for(var r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];r.length&&n.set(function(c){return c.concat(r)})},updateAt:function(r,a){n.set(function(c){var u=c.slice();return u[r]=a,u})},insertAt:function(r,a){n.set(function(c){var u=c.slice();return r>u.length?u[r]=a:u.splice(r,0,a),u})},update:function(r,a){n.set(function(c){return c.map(function(u){return r(u,a)?a:u})})},updateFirst:function(r,a){var c=t.current.findIndex(function(u){return r(u,a)});c>=0&&n.updateAt(c,a)},upsert:function(r,a){var c=t.current.findIndex(function(u){return r(u,a)});c>=0?n.updateAt(c,a):n.push(a)},sort:function(r){n.set(function(a){return a.slice().sort(r)})},filter:function(r,a){n.set(function(c){return c.slice().filter(r,a)})},removeAt:function(r){n.set(function(a){var c=a.slice();return c.splice(r,1),c})},clear:function(){n.set([])},reset:function(){n.set(z(e).slice())}};return i.remove=i.removeAt,i},[]);return[t.current,n]}K.div`
        font-size:1.5vh;
        line-height:3vh;
        position:relative;
        margin-bottom:1vh;
        &::after{
            content:"";
        }
`;K.div`
  position:relative;

  display: flex;
  align-items: flex-start;
  padding-top: 0.1vw;
  z-index:1000;
  .topBtn {
    margin-right:2vh;
  }
`;K.div`
.top-box{
  padding: 0 1.04vw;
  margin: 1.85vh 0 2.04vh;
}
.first-span{
  line-height: 36px;
  height: 36px;
  border-radius: 4px;
  color: #fff;
  background: #1572e8;
  margin-right: 10px;
  padding: 0 10px;
  cursor: pointer;
  &:hover{
    opacity: .8;
  }
  &:last-child{
    margin-right: 0;
  }
}
`;const we=K.div`
min-width: 50px;
  a{
    padding:0 11px;
  }
`,{Column:H}=J,{Search:ke}=ve,Se=K.div`
  flex: 1;

  .top-box {
    padding: 0 1.04vw;
    margin: 1.85vh 0 2.04vh;
  }

  .first-span {
    line-height: 36px;
    height: 36px;
    border-radius: 4px;
    color: #fff;
    background: #1572e8;
    margin-right: 10px;
    padding: 0 10px;
    cursor: pointer;

    &:hover {
      opacity: .8;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`,Ne=K.div`
  display: flex;
  flex-flow: column;

  .table-full-box {
    width: 100%;
  }

  .pagination-box {
    padding: 1vh 0;

    .Pagination {
      float: right;
    }
  }

  .search-box {
    margin: 1vh 0;
    float: right;
  }
`;let De=e=>{const{params:t,url:o,columns:n,handle:i,data:r,rowSelection:a,changeKey:c,defaultValue:u,changeList:w,checkboxType:x}=e,{noSearch:k}=e,C=ue(),[P]=j.useForm(),[b]=l.exports.useState(null),[_,y]=l.exports.useState([]);Te();const{dispatch:E}=e,$=t||{},S=({current:s,pageSize:h},f)=>o?new Promise(g=>{E({type:"common/requestData",url:o,payload:F(F({pageNo:s,pageSize:h},f),$),callback:p=>{g({list:p.list||p.data||p,total:p.total||p.length})}})}):new Promise(g=>{r||g([]),r.total?g(r):g({list:r,total:r.length})}),{tableProps:T,search:N,loading:A}=fe(S,{defaultPageSize:10,form:P}),{submit:D,reset:B}=N;return e.childRef&&(e.childRef.current={reset:B}),l.exports.useEffect(()=>{B(),y(u||[])},[c]),l.exports.useEffect(()=>{!o&&r&&r.length>0&&B()},[r]),v.createElement(Se,null,v.createElement(me,{spinning:A},v.createElement(Ne,null,k?null:v.createElement(j,{form:P},v.createElement(j.Item,{name:"keyword",noStyle:!0},v.createElement(ke,{placeholder:"\u59D3\u540D\u67E5\u8BE2",onSearch:D,style:{width:200},className:"search-box"}))),v.createElement(J,{rowKey:"id",dataSource:JSON.parse(JSON.stringify(T.dataSource)),loading:T.loading,onChange:T.onChange,pagination:T.pagination,rowSelection:a?{preserveSelectedRowKeys:!0,selectedRowKeys:_,type:x||"checkbox",onChange:(s,h)=>{y(s),typeof a=="function"&&a(s,h)}}:null,className:"virtual-table",rowClassName:s=>s.id===b?"select-bg-color":""},n.map(s=>v.createElement(H,{title:s.title,dataIndex:s.dataIndex,key:s.key,className:s.className,align:s.align,width:s.width,render:s.render,onCell:()=>({width:s.width}),onHeaderCell:()=>({width:s.width})})),i?v.createElement(H,{title:"\u64CD\u4F5C",render:(s,h)=>v.createElement(we,null,i.map(f=>{let g;switch(f.type){case"popconfirm":g=v.createElement(Ee,{title:f.config.title,onConfirm:()=>{s[f.booleanKey]=s[f.booleanKey]!==1,f.click(s,h,N),C()},okText:f.config.okText,cancelText:f.config.cancelText},v.createElement("a",null,s[f.booleanKey]===1?f.name:f.bolName));break;case"boolean":g=v.createElement("a",{onClick:()=>{s[f.booleanKey]=!s[f.booleanKey],C(),f.click(s,h,N)}},s[f.booleanKey]===1?f.name:f.bolName);break;default:g=v.createElement("a",{onClick:p=>f.click(s,h,N)},f.name);break}return f.show==null||f.show?g:""}))}):null))))};var ze=se(({common:e,select:t})=>({common:e,select:t}))(De);export{ze as M,Te as u};
//# sourceMappingURL=MixinTable.833a4b86.js.map
