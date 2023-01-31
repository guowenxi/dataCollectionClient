var M=(d,n,l)=>new Promise((x,r)=>{var g=s=>{try{p(l.next(s))}catch(u){r(u)}},w=s=>{try{p(l.throw(s))}catch(u){r(u)}},p=s=>s.done?x(s.value):Promise.resolve(s.value).then(g,w);p((l=l.apply(d,n)).next())});import{c as T,B as z,_ as c,R as a}from"./index.8d62fabd.js";import{s as m}from"./SearchMore.60d61241.js";import{w as v,S as R}from"./index.f74872f6.js";import{E as V,_ as G}from"./index.c8072de2.js";import{G as W}from"./global.69e01385.js";import{I as O}from"./index.d4ab65ae.js";import{M as q}from"./index.773d2a64.js";import{F as A}from"./index.6214eb92.js";import"./index.e6c9f47e.js";import"./index.adc43817.js";import"./index.8a2ef8d3.js";import"./Table.2da81800.js";import"./Pagination.2e94c1c8.js";import"./_baseIsEqual.8d7f74ca.js";import"./index.23997226.js";import"./index.bd6b171c.js";import"./Portal.8cf5a27d.js";import"./utils.79d6154c.js";const{amapkey:j,mapCenter:H}=W,J=m(O)`
  && {
    height: 100%;
    padding: 1vh;
  }
`,K=m(V)`
  color: #ccc;
  cursor: pointer;
  position: absolute;
  right: 10px;
  font-size: 20px;
  top: 10px;
`,Q=m(q)`
  && {
    width: 70vw !important;
    .ant-modal {
    }
  }
`,S=m(z)`
  margin: 0 1vh;
`,U=m.div`
  position: relative;
  width: 100%;
  height: 60vh;
`,X=m(G)`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
`,Y=m(A.Item)`
  .ant-form-item-control-input-content {
    display: flex;
  }
  .row-item {
    width: 100%;
    position: absolute;
  }
  .row-map-item {
    position: absolute;
    width: 100px;
    right: 0;
  }
`;let i={},e,h;const Z=d=>{const n=d.conf,l=c.exports.useContext(v),{name:x}=d,[r,g]=c.exports.useState(""),[w,p]=c.exports.useState(!1),[s,u]=c.exports.useState("edit"),[P,F]=c.exports.useState([]),[I]=c.exports.useState(H),[,C]=c.exports.useState({}),k=t=>({created:E=>{i=E,AMap.plugin("AMap.Geocoder",()=>{C(new AMap.Geocoder({city:"010"}))}),AMap.plugin("AMap.PolygonEditor",()=>{e=new AMap.PolygonEditor(i);const b=l.form.getFieldValue([n.areaName]),y=[];Array.isArray(b)&&b.map(f=>{y.push([Number(f.x),Number(f.y)])});let o=new AMap.Polygon({path:y});i.clearMap(),i.add(o),t!="disabled"?(t==="edit"?(h=o,g(o),e.setTarget(o)):e.setTarget(),e.open()):(g(o),h=o),e.on("add",function(f){console.log(f),o=f.target,e.addAdsorbPolygons(o),h=o})})},click:()=>{}}),N=t=>M(void 0,null,function*(){p(!0),u("edit"),r&&i.add(r),t!=="disabled"&&e&&(e?e.setTarget(r):e.setTarget(),e.open())}),B=()=>{const t=h;if(t){const E=t.getPath(),b=[];Array.isArray(E)&&E.map(o=>{b.push({x:o.lng,y:o.lat})});const y=P;F(y),l.form.setFields([{name:[n.areaName],value:y}])}g(t),i.clearMap(),p(!1)},D=()=>{e.removeAdsorbPolygons(r),i.clearMap(),p(!1)},L=()=>{if(!!e){switch(s){case"edit":e.close();break;case"disabled":e.open();break}u(s=="edit"?"disabled":"edit")}},_=()=>{h="",e.removeAdsorbPolygons(r),i.clearMap(),e.setTarget(),e.open()};return a.createElement(v.Consumer,null,t=>{switch(t.state){case"default":return a.createElement(R,null,n.defaultValue||"\u3000");case"edit":case"new":case"disabled":return a.createElement(Y,null,a.createElement(A.Item,{name:x,rules:d.rules,className:"row-item"},a.createElement(J,{style:n.style,disabled:t.state==="disabled",placeholder:n.placeholder,size:n.size})),a.createElement(A.Item,{name:n.areaName,rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u533A\u57DF"}],className:"row-map-item"},a.createElement(K,{onClick:()=>{N(t.state)},style:{position:"absolute",color:" #ccc",cursor:"pointer",right:"10px",fontSize:"20px",top:"10px"}})),a.createElement(Q,{title:"\u533A\u57DF",visible:w,onOk:B,onCancel:D},t.state==="disabled"?null:a.createElement(S,{type:"primary",onClick:()=>{L()}},s==="disabled"?"\u5F00\u59CB\u7F16\u8F91":"\u7ED3\u675F\u7F16\u8F91"),t.state==="disabled"?null:a.createElement(S,{type:"primary",onClick:()=>{_()}},"\u5220\u9664"),a.createElement(U,null,a.createElement(X,{version:"2.0",events:k(t.state),center:I,zoom:13,amapkey:j}))))}})};var Ee=T(({})=>({}))(Z);export{Ee as default};
//# sourceMappingURL=inputWithSelectArea.1a262904.js.map
