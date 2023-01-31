import{c as F,_ as a,R as t}from"./index.8d62fabd.js";import{s as n}from"./SearchMore.60d61241.js";import{w as S,S as k}from"./index.f74872f6.js";import{_ as z,E as _,M as R}from"./index.c8072de2.js";import{f as V}from"./utils.79d6154c.js";import{G as N}from"./global.69e01385.js";import{I as v}from"./index.d4ab65ae.js";import{M as O}from"./index.773d2a64.js";import{F as M}from"./index.6214eb92.js";import"./index.e6c9f47e.js";import"./index.adc43817.js";import"./index.8a2ef8d3.js";import"./Table.2da81800.js";import"./Pagination.2e94c1c8.js";import"./_baseIsEqual.8d7f74ca.js";import"./index.23997226.js";import"./index.bd6b171c.js";import"./Portal.8cf5a27d.js";const{amapkey:P,mapCenter:T}=N,B=n(v)`
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
`;let E={};const j=c=>{const s=c.conf,{name:r}=c,p=a.exports.useContext(S),[x,m]=a.exports.useState(!1),[u,d]=a.exports.useState([]),[C,I]=a.exports.useState(T),[f,i]=a.exports.useState(""),[g,w]=a.exports.useState({});a.exports.useState({}),a.exports.useMemo(()=>{},[]);const D={created:e=>{E=e,AMap.plugin("AMap.Geocoder",()=>{w(new AMap.Geocoder({city:"010"}))}),AMap.plugin(["AMap.Autocomplete","AMap.PlaceSearch","AMap.CitySearch"],()=>{const l=new AMap.PlaceSearch({pageSize:10,pageIndex:1,city:"\u6E29\u5DDE",citylimit:!0,map:E});AMap.event.addListener(new AMap.Autocomplete({city:"\u6E29\u5DDE",input:"amapInput"}),"select",o=>{l.setCity(o.poi.adcode),l.search(o.poi.name),i(o.poi.name),d([o.poi.location.lng,o.poi.location.lat]),E.setZoomAndCenter([o.poi.location.lng,o.poi.location.lat])})})},click:e=>{g&&g.getAddress(e.lnglat,(l,o)=>{console.log(o.regeocode),i(V(o.regeocode.formattedAddress,"\u6D59\u6C5F\u7701\u6E29\u5DDE\u5E02")),d([e.lnglat.lng,e.lnglat.lat])})}},h=()=>{const e=p.form.getFieldsValue();e[r]!=""&&e.lnglat&&(d(e.lnglat),i(e[r]),I(e.lnglat)),m(!0)},y=()=>{p.form.setFieldsValue({[r]:f}),p.form.setFields([{name:"lnglat",value:u}]),m(!1)},b=()=>{m(!1)};return t.createElement(S.Consumer,null,e=>{switch(e.state){case"default":return t.createElement(k,null,s.defaultValue||"\u3000",t.createElement(A,{onClick:h}));case"edit":case"new":case"disabled":return t.createElement("div",null,t.createElement(M.Item,{name:r,rules:c.rules},t.createElement(B,{autoComplete:"off",disabled:e.state==="disabled",placeholder:s.placeholder,size:s.size})),t.createElement(M.Item,{name:"lnglat",noStyle:!0}),t.createElement(A,{onClick:h}),t.createElement(L,{title:"\u5730\u5740",visible:x,onOk:y,onCancel:b},t.createElement(G,{autocomplete:"off",id:"amapInput",disabled:e.state==="disabled",placeholder:"\u8BF7\u9009\u62E9\u5730\u5740",value:f,onChange:l=>{i(l.target.value)},size:s.size}),t.createElement(W,null,t.createElement(Z,{events:D,center:C,zoom:13,amapkey:P},u[0]?t.createElement(R,{position:u}):null))))}})};var ce=F(({})=>({}))(j);export{ce as default};
//# sourceMappingURL=mapSelect.791c9f6e.js.map
