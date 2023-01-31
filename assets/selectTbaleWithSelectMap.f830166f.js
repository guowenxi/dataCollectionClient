var ae=Object.defineProperty,ne=Object.defineProperties;var re=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var K=(l,e,i)=>e in l?ae(l,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):l[e]=i,z=(l,e)=>{for(var i in e||(e={}))le.call(e,i)&&K(l,i,e[i]);if(_)for(var i of _(e))ie.call(e,i)&&K(l,i,e[i]);return l},R=(l,e)=>ne(l,re(e));var j=(l,e,i)=>new Promise((M,w)=>{var g=p=>{try{S(i.next(p))}catch(E){w(E)}},C=p=>{try{S(i.throw(p))}catch(E){w(E)}},S=p=>p.done?M(p.value):Promise.resolve(p.value).then(g,C);S((i=i.apply(l,e)).next())});import{B as ce,_ as c,R as o}from"./index.1744db00.js";import{s as b}from"./SearchMore.b58ad9fc.js";import{w as q,S as ue}from"./index.2cf55c0b.js";import{_ as me,E as pe}from"./index.c32b17e5.js";import{M as de}from"./MixinTable.d417ea62.js";import{u as ge}from"./index.18a69498.js";import{G as fe}from"./global.00e9e87c.js";import{M as ye}from"./index.7d5874b6.js";import{F as A}from"./index.a10c21c4.js";import{I as be}from"./index.94ba65ab.js";import{T as Ee}from"./index.2f265e7d.js";import{P as xe}from"./PlusCircleOutlined.8ffa080f.js";import{M as he}from"./MinusCircleOutlined.ae8e1f9a.js";import"./index.0b2062c9.js";import"./index.ba1b5373.js";import"./Table.e070c8af.js";import"./Pagination.88552979.js";import"./index.54246283.js";import"./index.4d18e0ae.js";import"./utils.e0cd641f.js";const{amapkey:we,mapCenter:Ae}=fe,$=b(ye)`
  && {
    width: 70vw !important;
    .ant-modal {
    }
  }
`,Se=b.div`
  position: relative;
  width: 100%;
  height: 60vh;
`,ve=b(me)`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
`,Fe=b(pe)`
  color: #ccc;
  cursor: pointer;
  position: absolute;
  right: 10px;
  font-size: 20px;
  top: 10px;
`,Ie=b.div`
  /* border: 1px solid #ccc; */
  display: flex;
  align-items: center;
  width: 100%;
  .select-main-box {
    display: flex;
    flex-flow: row wrap;
    .select-item-box {
      margin: 1vh;
    }
  }
`,D=b(ce)`
  margin: 1vh;
`,Me=b.div`
  padding: 2vh 2vh !important;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin: 0 auto !important;
  display: flex;
  align-items: center;
  .left-side-box {
    width: 90%;
  }
  .right-side-box {
    flex: 1;
  }
  .row-select-item-box {
    .ant-form-item-control-input-content {
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;
    }
  }
`,G=b(A.Item)`
  display: flex;
  .ant-form-item-control-input-content {
    display: flex;
  }
  .row-item {
    flex: 1;
  }
  .ant-form-item-label {
    width: 7vw;
    background: #ebebeb;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #ccc;
  }
  .row-select-item {
  }
  .ant-input {
    padding: 1vh;
  }
  .row-select-item {
    .ant-form-item-control-input-content{
      border:none;
    }
  }
`;let y={},n,u=0,I=[];const Je=l=>{const[e,i,M,w]=ge([{option:[],wgName:"\u7247\u533A1",points:[],unit:[]}]),g=c.exports.useContext(q),[C,S]=c.exports.useState([]),[p,E]=c.exports.useState(!1),[W]=c.exports.useState(Ae),[,Y]=c.exports.useState({}),[k,v]=c.exports.useState(!1),[H,J]=c.exports.useState(),[Q,U]=c.exports.useState([]),[N,T]=c.exports.useState("edit"),[f,P]=c.exports.useState([]),[B,L]=c.exports.useState(0),F=l.conf,{name:x}=l;let m;F.tableSetting&&(m=F.tableSetting),c.exports.useEffect(()=>{const r=g.form.getFieldValue([x])||e;w(r)},[]);const X=r=>({created:s=>{y=s,AMap.plugin("AMap.Geocoder",()=>{Y(new AMap.Geocoder({city:"010"}))}),AMap.plugin("AMap.PolygonEditor",()=>{let a;n=new AMap.PolygonEditor(y),n.on("add",function(d){console.log(d),a=d.target,n.addAdsorbPolygons(a),I[u]=a});const t=e,h=[];Array.isArray(t)&&t.map(d=>{const V=[];Array.isArray(d.points)&&d.points.length&&(d.points.map(O=>{V.push([Number(O.x),Number(O.y)])}),e.push(new AMap.Polygon({path:V})))}),y.clearMap(),h.length&&y.add(h),P(h),I=h,r!="disabled"&&(r==="edit"?n.setTarget(h[u]):n.setTarget(),n.open())})},click:()=>{}}),Z=r=>j(void 0,null,function*(){u=r,E(!0),T("edit"),f&&f.map(function(s){y.add(s)}),n&&(n&&f.length>u?n.setTarget(f[u]):n.setTarget(),n.open())}),ee=()=>{const r=f;if(r[u]=I[u],r[u]){const s=r[u].getPath(),a=[];Array.isArray(s)&&s.map(t=>{a.push({x:t.lng,y:t.lat})}),e[B].points=a,g.form.setFieldsValue({[x]:e})}n.close(),setTimeout(()=>{P(r),y.clearMap(),E(!1),v(!1)},500)},te=()=>{n.removeAdsorbPolygons(f[u]),y.clearMap(),E(!1),v(!1)},oe=()=>{if(!!n){switch(N){case"edit":n.close();break;case"disabled":n.open();break}T(N=="edit"?"disabled":"edit")}},se=()=>{I[u]="",n.removeAdsorbPolygons(f[u]),y.clearMap(),n.setTarget(),n.open()};return o.createElement(q.Consumer,null,r=>{switch(r.state){case"default":return o.createElement(ue,null,F.defaultValue||"\u3000");case"edit":case"new":case"disabled":return o.createElement(A.Item,{name:x,rules:[()=>({validator(s,a){if(l.rules[0].required){for(let t=0;t<s.length;t++)if(s[t].wgName==""||!s[t].points.length||!s[t].option.length)return Promise.reject(l.rules[0].message);if(!s.length)return Promise.reject(l.rules[0].message)}a()}})]},e.map((s,a)=>o.createElement(Me,null,o.createElement("div",{className:"left-side-box"},o.createElement(G,null,o.createElement(A.Item,{rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5206\u533A\u540D"}],className:"row-item",label:`\u5206\u533A${a+1}\u540D\u79F0`},o.createElement(be,{style:F.style,disabled:r.state==="disabled",placeholder:`\u8BF7\u8F93\u5165${a+1}\u540D\u79F0`,size:F.size,value:s.wgName,onChange:t=>{s.wgName=t.target?t.target.value:t.target,w(e),g.form.setFieldsValue({[x]:e})}})),o.createElement(A.Item,{rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u533A\u57DF"}],className:"row-map-item",key:String(s.points)},o.createElement(Fe,{onClick:()=>{Z(a),L(a)},style:{position:"absolute",color:" #ccc",cursor:"pointer",right:"10px",fontSize:"20px",top:"10px"}}))),o.createElement(G,{className:"row-select-item-box"},o.createElement(A.Item,{rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5206\u533A\u4FDD\u6D01\u4EBA\u5458"}],className:"row-select-item",label:`\u5206\u533A${a+1}\u4FDD\u6D01\u4EBA\u5458`,key:String(s.unit)},o.createElement(Ie,null,o.createElement("div",{className:"select-main-box"},Array.isArray(s.option)?s.option.map(t=>o.createElement(Ee,{className:"select-item-box"},t.name)):""))),o.createElement(D,{type:"primary",onClick:()=>{v(!0),S(s.option),L(a),J(s.unit)}},"\u9009\u62E9"))),o.createElement(A.Item,{className:"right-side-box"},r.state==="disabled"?null:o.createElement("div",{style:{padding:"0 1vw",display:"flex",justifyContent:"center",alignItems:"center"},className:"contentItem_twoInput"},e.length==a+1?o.createElement(xe,{onClick:()=>{M({option:[],wgName:`\u7247\u533A${e.length+1}`,points:[]}),g.form.setFieldsValue({[x]:e})},style:{fontSize:"30px",color:"#08c",cursor:"pointer"}}):o.createElement(he,{onClick:()=>{i(a);const t=f;t.splice(a,1),P(t),g.form.setFieldsValue({[x]:e})},style:{fontSize:"30px",color:"#08c",cursor:"pointer"}}))))),o.createElement($,{title:"\u533A\u57DF",visible:p,onOk:ee,onCancel:te,destroyOnClose:!0},r.state==="disabled"?null:o.createElement(D,{type:"primary",onClick:()=>{oe()}},N==="disabled"?"\u5F00\u59CB\u7F16\u8F91":"\u7ED3\u675F\u7F16\u8F91"),r.state==="disabled"?null:o.createElement(D,{type:"primary",onClick:()=>{se()}},"\u5220\u9664"),o.createElement(Se,null,o.createElement(ve,{version:"2.0",events:X(r.state),center:W,zoom:13,amapkey:we}))),o.createElement($,{title:"\u4EBA\u5458\u9009\u62E9",visible:k,onOk:()=>{const s=[],a=Q.map(t=>(s.push(m.idKey?t[m.idKey]:t.id),R(z({},t),{name:m.nameKey?t[m.nameKey]:t.name,id:m.idKey?t[m.idKey]:t.id})));e[B].option=a,e[B].unit=s,w(e),g.form.setFieldsValue({[x]:e}),v(!1)},onCancel:()=>v(!1)},o.createElement(de,{url:m.url,changeKey:k,params:m.params,columns:m.columnsList,rowSelection:(s,a)=>{s.map((t,h)=>{C.map(d=>{t===d.id&&(a[h]=d)})}),U(a)},rowKey:"item",defaultValue:H})))}})};export{Je as default};
