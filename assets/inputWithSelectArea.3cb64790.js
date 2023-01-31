var M=(d,n,i)=>new Promise((x,r)=>{var g=s=>{try{c(i.next(s))}catch(u){r(u)}},w=s=>{try{c(i.throw(s))}catch(u){r(u)}},c=s=>s.done?x(s.value):Promise.resolve(s.value).then(g,w);c((i=i.apply(d,n)).next())});import{c as T,B as z,_ as p,R as a}from"./index.1744db00.js";import{s as m}from"./SearchMore.b58ad9fc.js";import{w as v,S as R}from"./index.2cf55c0b.js";import{E as V,_ as G}from"./index.c32b17e5.js";import{G as W}from"./global.00e9e87c.js";import{I as O}from"./index.94ba65ab.js";import{M as q}from"./index.7d5874b6.js";import{F as A}from"./index.a10c21c4.js";import"./index.0b2062c9.js";import"./index.ba1b5373.js";import"./index.2f265e7d.js";import"./Table.e070c8af.js";import"./Pagination.88552979.js";import"./index.54246283.js";import"./index.4d18e0ae.js";import"./utils.e0cd641f.js";const{amapkey:j,mapCenter:H}=W,J=m(O)`
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
`;let l={},e,h;const Z=d=>{const n=d.conf,i=p.exports.useContext(v),{name:x}=d,[r,g]=p.exports.useState(""),[w,c]=p.exports.useState(!1),[s,u]=p.exports.useState("edit"),[P,F]=p.exports.useState([]),[I]=p.exports.useState(H),[,C]=p.exports.useState({}),k=t=>({created:E=>{l=E,AMap.plugin("AMap.Geocoder",()=>{C(new AMap.Geocoder({city:"010"}))}),AMap.plugin("AMap.PolygonEditor",()=>{e=new AMap.PolygonEditor(l);const b=i.form.getFieldValue([n.areaName]),y=[];Array.isArray(b)&&b.map(f=>{y.push([Number(f.x),Number(f.y)])});let o=new AMap.Polygon({path:y});l.clearMap(),l.add(o),t!="disabled"?(t==="edit"?(h=o,g(o),e.setTarget(o)):e.setTarget(),e.open()):(g(o),h=o),e.on("add",function(f){console.log(f),o=f.target,e.addAdsorbPolygons(o),h=o})})},click:()=>{}}),N=t=>M(void 0,null,function*(){c(!0),u("edit"),r&&l.add(r),t!=="disabled"&&e&&(e?e.setTarget(r):e.setTarget(),e.open())}),B=()=>{const t=h;if(t){const E=t.getPath(),b=[];Array.isArray(E)&&E.map(o=>{b.push({x:o.lng,y:o.lat})});const y=P;F(y),i.form.setFields([{name:[n.areaName],value:y}])}g(t),l.clearMap(),c(!1)},D=()=>{e.removeAdsorbPolygons(r),l.clearMap(),c(!1)},L=()=>{if(!!e){switch(s){case"edit":e.close();break;case"disabled":e.open();break}u(s=="edit"?"disabled":"edit")}},_=()=>{h="",e.removeAdsorbPolygons(r),l.clearMap(),e.setTarget(),e.open()};return a.createElement(v.Consumer,null,t=>{switch(t.state){case"default":return a.createElement(R,null,n.defaultValue||"\u3000");case"edit":case"new":case"disabled":return a.createElement(Y,null,a.createElement(A.Item,{name:x,rules:d.rules,className:"row-item"},a.createElement(J,{style:n.style,disabled:t.state==="disabled",placeholder:n.placeholder,size:n.size})),a.createElement(A.Item,{name:n.areaName,rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u533A\u57DF"}],className:"row-map-item"},a.createElement(K,{onClick:()=>{N(t.state)},style:{position:"absolute",color:" #ccc",cursor:"pointer",right:"10px",fontSize:"20px",top:"10px"}})),a.createElement(Q,{title:"\u533A\u57DF",visible:w,onOk:B,onCancel:D},t.state==="disabled"?null:a.createElement(S,{type:"primary",onClick:()=>{L()}},s==="disabled"?"\u5F00\u59CB\u7F16\u8F91":"\u7ED3\u675F\u7F16\u8F91"),t.state==="disabled"?null:a.createElement(S,{type:"primary",onClick:()=>{_()}},"\u5220\u9664"),a.createElement(U,null,a.createElement(X,{version:"2.0",events:k(t.state),center:I,zoom:13,amapkey:j}))))}})};var fe=T(({})=>({}))(Z);export{fe as default};
