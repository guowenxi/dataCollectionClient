var _=Object.defineProperty,N=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var h=(a,r,t)=>r in a?_(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t,F=(a,r)=>{for(var t in r||(r={}))v.call(r,t)&&h(a,t,r[t]);if(T)for(var t of T(r))O.call(r,t)&&h(a,t,r[t]);return a},x=(a,r)=>N(a,k(r));var L=(a,r,t)=>new Promise((m,d)=>{var I=l=>{try{c(t.next(l))}catch(f){d(f)}},E=l=>{try{c(t.throw(l))}catch(f){d(f)}},c=l=>l.done?m(l.value):Promise.resolve(l.value).then(I,E);c((t=t.apply(a,r)).next())});import{c as j,_ as u,m as D,R as p}from"./index.8d62fabd.js";import{s as C}from"./SearchMore.60d61241.js";import{w as S}from"./index.f74872f6.js";import{G as M}from"./global.69e01385.js";import{A as R}from"./index.9114c83a.js";import{F as $}from"./index.6214eb92.js";import{M as V}from"./index.773d2a64.js";import"./index.d4ab65ae.js";import"./index.e6c9f47e.js";import"./index.adc43817.js";import"./index.8a2ef8d3.js";import"./Table.2da81800.js";import"./Pagination.2e94c1c8.js";import"./_baseIsEqual.8d7f74ca.js";import"./index.23997226.js";import"./index.bd6b171c.js";import"./Portal.8cf5a27d.js";import"./utils.79d6154c.js";import"./DeleteOutlined.7f5b7bfb.js";const{rootUrl:w,rbacToken:A}=M,W=C(R)`
  .ant-upload-select-picture-card {
    display: ${a=>a.disabled?"none":"table"};
  }
`,G=C.div`
  && {
    height: 100%;
    padding: 1vh;
    border: 1px solid #d9d9d9;
  }
`,B=a=>{const r=a.conf,{name:t}=a,[m,d]=u.exports.useState([]),[I,E]=u.exports.useState({}),[c,l]=u.exports.useState(!1),[f,b]=u.exports.useState(""),y=u.exports.useContext(S),U=function(s){let o=[];switch(typeof s){case"string":o==""?o=[]:o=s.split(",");break;case"object":o=s;break;default:o=[];break}return o===null?[]:o.length>0?o.map(function(e){return x(F({},e),{uid:e.fileId?e.fileId:e,fileId:e.fileId?e.fileId:"",name:e.fileName?e.fileName:"",status:"done",fileType:e.contentType?e.contentType:"",url:`${w}/fyHome/file/download?id=${e.fileId?e.fileId:e}&rbacToken=${A}`})}):o};function P(s){return new Promise((o,e)=>{const n=new FileReader;n.readAsDataURL(s),n.onload=()=>o(n.result),n.onerror=g=>e(g)})}return u.exports.useMemo(()=>{const s=y.form.getFieldValue(t),o=U(s);d(o),E({name:"file",action:w+r.uploadUrl,listType:"picture-card",headers:{},data:{rbacToken:A},beforeUpload:e=>{const n=e.type==="image/jpeg"||e.type==="image/jpg"||e.type==="image/png";return n||D.warning("\u53EA\u80FD\u4E0A\u4F20jpg/png\u683C\u5F0F\u7684\u56FE\u7247"),n||R.LIST_IGNORE},onRemove(){},onChange(e){const n=e.fileList;let g=[];e.file.status,e.file.status==="done"||e.file.status==="removed"?(console.log(e.fileList),e.fileList.map(i=>{g.push({fileName:i.fileName?i.fileName:i.response.data.fileName,fileId:i.fileId?i.fileId:i.response.data.fileId,fileUrl:i.fileUrl?i.fileUrl:i.response.data.fileUrl})}),y.form.setFieldsValue({[t]:g})):e.file.status,d([...n])},progress:{strokeColor:{"0%":"#108ee9","100%":"#87d068"},strokeWidth:3,format:e=>`${parseFloat(e.toFixed(2))}%`}})},[]),p.createElement(S.Consumer,null,s=>p.createElement($.Item,{name:t,rules:a.rules},p.createElement(G,null,p.createElement(W,x(F({listType:"picture"},I),{fileList:m,disabled:s.state==="disabled",accept:"image/*",maxCount:r.maxCount,onPreview:o=>L(void 0,null,function*(){l(!0),o.originFileObj?b(yield P(o.originFileObj)):b(o.url)})}),m.length>=r.maxCount?null:"\u4E0A\u4F20\u56FE\u7247"),p.createElement(V,{visible:c,title:null,footer:null,onCancel:()=>l(!1)},p.createElement("img",{alt:"example",style:{width:"100%"},src:f})))))};var de=j(({})=>({}))(B);export{de as default};
//# sourceMappingURL=uploadImage.bfd1ce25.js.map
