var F=Object.defineProperty,_=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var b=(s,i,e)=>i in s?F(s,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[i]=e,w=(s,i)=>{for(var e in i||(i={}))R.call(i,e)&&b(s,e,i[e]);if(h)for(var e of h(i))S.call(i,e)&&b(s,e,i[e]);return s},y=(s,i)=>_(s,L(i));import{c as V,_ as p,R as l}from"./index.3b0f1d22.js";import{s as W}from"./SearchMore.ed23b912.js";import{w as N,S as D}from"./index.f9227d92.js";import{F as g}from"./index.956cef20.js";import{A as E}from"./index.62eb6faf.js";import{I as O}from"./index.465b72ea.js";import{P as j}from"./PlusCircleOutlined.862433d9.js";import{M as T}from"./MinusCircleOutlined.fe127abc.js";import"./index.5e38d70a.js";import"./index.09976468.js";import"./Table.3fbe1f2c.js";import"./Pagination.8e24f235.js";import"./index.b72b64bd.js";import"./index.dba719dc.js";const J=W.div`
  padding: 1vh;
  border: 1px solid #d9d9d9;
  .table-title-box {
    display: flex;
    flex-flow: row;
    margin: 0;
    padding: 0;
    line-height: 3.76vh;
    border: 1px solid #d9d9d9;
  }
  .title-item-option {
    flex: 1;
    text-align: center;
  }
  .title-item {
    box-shadow: 1px 1px 0 #d9d9d9;
    &::last-child {
      border-right: none;
    }
  }
  .option-btn-box {
    flex: 1;
    height: 4.3vh;
    box-shadow: 1px 1px 0 #d9d9d9;
    .ant-form-item-control-input-content {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1vw;
      .icon-item {
        margin-right: 1vw;
      }
    }
  }
  .input-item {
    height: 100%;
    text-align: center;
    border: none;
    border-right: 1px solid #d9d9d9;
    outline: none;
  }
  .ant-input-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-right: 1px solid #d9d9d9;
    .ant-input-number-input-wrap {
      width: 100%;
      input {
        text-align: center;
      }
    }
  }
  .input-content-box {
    border-left: 1px solid #d9d9d9;
  }
  .input-content-item {
    height: 4.3vh;
    border-bottom: 1px solid #d9d9d9;
  }
  .row-index-box {
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #d9d9d9;
  }
  .row-text-index {
    border-bottom: 1px solid #d9d9d9;
  }
  .count-box {
    display: flex;
    margin: 0;
    padding: 0;
    line-height: 3.76vh;
    .row-index-box {
      border: 1px solid #d9d9d9;
      border-top: none;
    }
  }
`,K=s=>{const i=p.exports.useContext(N),e=s.conf,{name:r}=s,[I,x]=p.exports.useState([]),[u,C]=p.exports.useState(e.columnList?e.columnList:[]),k=n=>{const d=i.form.getFieldsValue();let o=[];!d[r]||d[r].length===0?o=[{}]:o=d[r],x(o),i.form.setFields([{name:r,value:o}])};p.exports.useEffect(()=>{k()},[]),p.exports.useEffect(()=>{A()},[I]);const v=(n,d)=>{let o="";return n.type==="number"&&n.range?o=l.createElement(E,{min:n.range?n.range[0]:"",max:n.range?n.range[1]:"",className:"input-item",onChange:t=>{f(t,n.key,d)},disabled:!!n.disabled}):n.type==="number"?o=l.createElement(E,{className:"input-item",onChange:t=>{f(t,n.key,d)},disabled:!!n.disabled}):o=l.createElement(O,{className:"input-item",onChange:t=>{f(t,n.key,d)},disabled:!!n.disabled}),o},A=n=>{const o=i.form.getFieldsValue()[r];Array.isArray(o)&&u.map(c=>{c.type=="number"&&(c.countNum=0,o.map(a=>{for(const m in a)c.key===m&&a&&a[m]&&(c.countNum+=a[m])}))});const t=u;C(JSON.parse(JSON.stringify(t)))},f=(n,d,o)=>{const t=i.form.getFieldsValue();t[r][o][d]=n.target?n.target.value:n,x(t)};return l.createElement(N.Consumer,null,n=>{switch(n.state){case"default":return l.createElement(D,null);case"edit":case"new":case"disabled":return l.createElement(g.List,{name:r},(d,{add:o})=>l.createElement(J,null,l.createElement("ul",{className:"table-title-box"},e.isRowIndex?l.createElement("li",{className:"row-index-box",style:{width:e.rowIndexWidth?e.rowIndexWidth:"5%"}},e.isRowIndex):null,u.map((t,c)=>l.createElement("li",{key:c,style:{width:t.width,textAlign:t.align?t.align:"left"},className:"title-item"},t.title)),e.isNeedAdd?null:l.createElement("li",{className:"title-item title-item-option"},"\u64CD\u4F5C")),d.map((t,c)=>l.createElement("div",{key:c,style:{display:"flex"},className:"input-content-box"},e.isRowIndex?l.createElement("div",{className:"row-index-box row-text-index",style:{width:e.rowIndexWidth?e.rowIndexWidth:"5%"}},c+1):null,u.map(a=>l.createElement(g.Item,y(w({},t),{name:[t.name,a.key],fieldKey:[t.fieldKey,a.key],style:{width:a.width,textAlign:a.align?a.align:"left"},rules:s.rules,className:"input-content-item"}),v(a,c))),l.createElement(g.Item,{className:"option-btn-box"},e.isNeedAdd?null:l.createElement(j,{onClick:()=>{o();const a=i.form.getFieldsValue();x(a[r])},className:"icon-item"}),e.isNeedAdd?null:l.createElement(T,{onClick:()=>{const a=i.form.getFieldsValue();a[r].splice(t.name,1);let m=[];!a[r]||a[r].length===0?m=[{}]:m=a[r],x(m),i.form.setFields([{name:r,value:m}])}})))),e.isNeedTotal?null:l.createElement("ul",{className:"count-box"},e.isRowIndex?l.createElement("li",{className:"row-index-box",style:{width:e.rowIndexWidth?e.rowIndexWidth:"5%"}},"\u5408\u8BA1"):null,u.map((t,c)=>l.createElement("li",{key:c,style:{width:t.width,textAlign:t.align?t.align:"left"},className:"title-item"},t.countNum)),e.isNeedAdd?null:l.createElement("li",{className:"title-item title-item-option"}))))}})};var ne=V(({select:s})=>({select:s}))(K);export{ne as default};
//# sourceMappingURL=inputTableEdit.c90f90da.js.map
