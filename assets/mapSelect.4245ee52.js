import{c as F,_ as o,R as t}from"./index.f93312c7.js";import{s as n}from"./SearchMore.4899ea4e.js";import{w as S,S as k}from"./index.c4c63bae.js";import{_ as z,E as _,M as R}from"./index.05275da8.js";import{f as V}from"./utils.db131452.js";import{G as N}from"./global.1ef67184.js";import{I as v}from"./index.ec6ab6c1.js";import{M as O}from"./index.e677a258.js";import{F as M}from"./index.c802a758.js";import"./index.8ec8c198.js";import"./index.e947031a.js";import"./index.d1220381.js";import"./Table.7058c2c1.js";import"./Pagination.b9ae5048.js";import"./index.de78d9fa.js";import"./index.9add2654.js";const{amapkey:P,mapCenter:T}=N,B=n(v)`
  position: relative;
  && {
    padding: 1vh;
  }
`,G=n(v)`
  position: relative;
  && {
    padding: 1vh;
  }
`,L=n(O)`
  && {
    width: 70vw !important;
    .ant-modal {
    }
  }
`,W=n.div`
  position: relative;
  width: 100%;
  height: 60vh;
`,Z=n(z)`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
`,A=n(_)`
  color: #ccc;
  cursor: pointer;
  position: absolute;
  right: 10px;
  font-size: 20px;
  top: 10px;
`;let E={};const j=c=>{const s=c.conf,{name:r}=c,p=o.exports.useContext(S),[x,m]=o.exports.useState(!1),[u,d]=o.exports.useState([]),[C,I]=o.exports.useState(T),[f,i]=o.exports.useState(""),[g,w]=o.exports.useState({});o.exports.useState({}),o.exports.useMemo(()=>{},[]);const D={created:e=>{E=e,AMap.plugin("AMap.Geocoder",()=>{w(new AMap.Geocoder({city:"010"}))}),AMap.plugin(["AMap.Autocomplete","AMap.PlaceSearch","AMap.CitySearch"],()=>{const l=new AMap.PlaceSearch({pageSize:10,pageIndex:1,city:"\u6E29\u5DDE",citylimit:!0,map:E});AMap.event.addListener(new AMap.Autocomplete({city:"\u6E29\u5DDE",input:"amapInput"}),"select",a=>{l.setCity(a.poi.adcode),l.search(a.poi.name),i(a.poi.name),d([a.poi.location.lng,a.poi.location.lat]),E.setZoomAndCenter([a.poi.location.lng,a.poi.location.lat])})})},click:e=>{g&&g.getAddress(e.lnglat,(l,a)=>{console.log(a.regeocode),i(V(a.regeocode.formattedAddress,"\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02")),d([e.lnglat.lng,e.lnglat.lat])})}},h=()=>{const e=p.form.getFieldsValue();e[r]!=""&&e.lnglat&&(d(e.lnglat),i(e[r]),I(e.lnglat)),m(!0)},y=()=>{p.form.setFieldsValue({[r]:f}),p.form.setFields([{name:"lnglat",value:u}]),m(!1)},b=()=>{m(!1)};return t.createElement(S.Consumer,null,e=>{switch(e.state){case"default":return t.createElement(k,null,s.defaultValue||"\u3000",t.createElement(A,{onClick:h}));case"edit":case"new":case"disabled":return t.createElement("div",null,t.createElement(M.Item,{name:r,rules:c.rules},t.createElement(B,{autoComplete:"off",disabled:e.state==="disabled",placeholder:s.placeholder,size:s.size})),t.createElement(M.Item,{name:"lnglat",noStyle:!0}),t.createElement(A,{onClick:h}),t.createElement(L,{title:"\u5730\u5740",visible:x,onOk:y,onCancel:b},t.createElement(G,{autocomplete:"off",id:"amapInput",disabled:e.state==="disabled",placeholder:"\u8BF7\u9009\u62E9\u5730\u5740",value:f,onChange:l=>{i(l.target.value)},size:s.size}),t.createElement(W,null,t.createElement(Z,{events:D,center:C,zoom:13,amapkey:P},u[0]?t.createElement(R,{position:u}):null))))}})};var re=F(({})=>({}))(j);export{re as default};
//# sourceMappingURL=mapSelect.4245ee52.js.map
