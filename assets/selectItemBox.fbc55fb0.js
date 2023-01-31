var C=Object.defineProperty;var b=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var w=(a,e,i)=>e in a?C(a,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[e]=i,N=(a,e)=>{for(var i in e||(e={}))O.call(e,i)&&w(a,i,e[i]);if(b)for(var i of b(e))I.call(e,i)&&w(a,i,e[i]);return a};var v=(a,e,i)=>new Promise((f,c)=>{var x=r=>{try{m(i.next(r))}catch(o){c(o)}},p=r=>{try{m(i.throw(r))}catch(o){c(o)}},m=r=>r.done?f(r.value):Promise.resolve(r.value).then(x,p);m((i=i.apply(a,e)).next())});import{c as _,_ as h,R as n}from"./index.1744db00.js";import{s as y}from"./SearchMore.b58ad9fc.js";import{w as E,S as L}from"./index.2cf55c0b.js";import{A as S}from"./index.94ba65ab.js";import{F as k}from"./index.a10c21c4.js";import"./index.0b2062c9.js";import"./index.ba1b5373.js";import"./index.2f265e7d.js";import"./Table.e070c8af.js";import"./Pagination.88552979.js";import"./index.54246283.js";import"./index.4d18e0ae.js";const{Option:T}=S,V=y.div`
  .ant-form-item-control-input-content {
    display: flex;

    .ant-input-number {
      width: 48%;
      flex: 1;
    }

    .ant-divider {
      min-width: 40px;
      width: 40px;
    }
  }

  .display-box {
    display: flex;

    .display-right-side-box {
      flex: 7;

      .ant-space-item {
        flex: 1;

        &:nth-child(2) {
          flex: 0;
          width: 20px;
        }

        .ant-divider-horizontal {
          width: 20px;
        }
      }
    }
  }
`,A=y.div`
  flex: ${a=>a.col?a.col:3};
  position: relative;
  /* ::after{
    content:"*";
    position: absolute;
    left:0;
    top:0;
    color:red;
  } */
`,B=y(S)`
  && {
    width: 100%;
    height: 43px;

    .ant-select-selector {
      height: 100%;
    }

    .ant-select-selection-search-input {
      height: 100% !important;
    }

    .ant-select-selection-item {
      line-height: 43px;
    }

  }
`,D=a=>{const e=a.conf,{name:i}=a,{dispatch:f}=a,c=h.exports.useContext(E),[x,p]=h.exports.useState([]),[m,r]=h.exports.useState("\u3000");function o(s,t){return v(this,null,function*(){let l=[];if(t.relationType)l=a[s][t.relationType];else if(t.url){const u=yield f({type:"common/requestData",url:t.url,method:"GET",payload:N({},t.params)});t.keyName&&u.map(function(d,F){d.name=d[t.keyName],d.id=d[t.idName]}),l=u}else l=t.options;p(l),g(l,e.defaultValue)})}function g(s,t){if(Number(t)){const l=s.find(function(u){return Number(u.id)===Number(t)});r(l.name)}}return h.exports.useEffect(()=>{o("select",e)},[]),c.event$.useSubscription(s=>{const t=s.relateNames.indexOf(i);if(t>=0)switch(s.type){case"onChange":if(!e.params)return;console.log("useSubscription data",s),e.params[s.relatekeys[t]]=s.value,c.form.setFieldsValue({[i]:[]}),e.optionsKeyName?e.optionsList.map((l,u)=>{l[e.keyName]===s.value&&p(l[e.optionsKeyName])}):o("select",e);break}}),n.createElement(E.Consumer,null,s=>{switch(s.state){case"default":return n.createElement(L,null,m);case"edit":case"new":case"disabled":return n.createElement(V,null,n.createElement("div",{className:"display-box"},n.createElement(A,{style:{width:"100%"},col:3,className:"contentItem-name"},n.createElement("span",{className:"required"},"*"),"\u7C7B\u578B"),n.createElement("div",{className:"display-right-side-box"},n.createElement(k.Item,{rules:a.rules},n.createElement(B,{placeholder:e.placeholder,showSearch:!0,disabled:s.state==="disabled",onChange:t=>{},filterOption:(t,l)=>l.children.toLowerCase().indexOf(t.toLowerCase())>=0},x.map((t,l)=>n.createElement(T,{title:t.name,value:t.id},t.name)))))))}})};var W=_(({select:a})=>({select:a}))(D);export{W as default};
