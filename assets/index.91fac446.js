var te=Object.defineProperty,ae=Object.defineProperties;var ue=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable;var U=(d,l,s)=>l in d?te(d,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):d[l]=s,c=(d,l)=>{for(var s in l||(l={}))re.call(l,s)&&U(d,s,l[s]);if(M)for(var s of M(l))le.call(l,s)&&U(d,s,l[s]);return d},i=(d,l)=>ae(d,ue(l));import{c as ne,_ as E,R as e,B as y,m as oe}from"./index.3b0f1d22.js";import{d as ce}from"./default-shebei.09b3eaa3.js";import{F as n}from"./index.956cef20.js";import{I as N,A as g,a as B,E as se,b as me}from"./index.465b72ea.js";import{T as ie}from"./index.09976468.js";import{P as de}from"./Pagination.8e24f235.js";import{M as j}from"./index.562b58ba.js";import{A as Ee}from"./index.62eb6faf.js";import{P as pe}from"./PlusCircleOutlined.862433d9.js";import{D as fe}from"./DeleteOutlined.d5f3a609.js";const ge="style-module__interfaceManage___IUEMS",be="style-module__search___aGn3K",ye="style-module__left___ZvHLe",_e="style-module__content___asmlW",he="style-module__banner___z4D0t",Ce="style-module__row1___XeqUi",Ne="style-module__row2___cI6l5",Fe="style-module__row3___E2vJE",ve="style-module__row4___N-MUh",Be="style-module__footer___ZC1jh";var r={interfaceManage:ge,search:be,left:ye,content:_e,banner:he,row1:Ce,row2:Ne,row3:Fe,row4:ve,footer:Be,"m-box":"style-module__m-box___un974","mb-row2":"style-module__mb-row2___hvkBo","mbr-left":"style-module__mbr-left___iKPAh","mbr-right":"style-module__mbr-right___PidUV","mb-biaoshi":"style-module__mb-biaoshi___hJlDi"};const{TextArea:q}=N,{Option:f}=g,qe=d=>{var P,R;const{dispatch:l,select:s}=d,[k]=n.useForm();E.exports.useState({}),E.exports.useState([]);const[v,x]=E.exports.useState(""),[G,F]=E.exports.useState(!1),[a,m]=E.exports.useState({}),[I,V]=E.exports.useState([]),[S,_]=E.exports.useState({pageNo:1}),[J,z]=E.exports.useState(0),[w,L]=E.exports.useState([]),[D,K]=E.exports.useState([]),[T,Z]=E.exports.useState([]),[A,H]=E.exports.useState([]);E.exports.useEffect(()=>{_({pageNo:1}),h(null),b(0,1)},[]);const h=(t,u=1,o=10)=>{l({type:"common/getRequestData",method:"GET",url:"/data-acquisition/interface-info",payload:c({current:S.pageNo,pageSize:o,rbacToken:"7ed6a62261854a4eb27d844ff4df1885"},t),callback:C=>{if(C.success){let p=C.data.list,ee=C.data.total;z(ee),V(p)}}})},W=t=>{console.log(t),_({pageNo:1}),h(t)},X=()=>{m({}),x("\u65B0\u589E\u63A5\u53E3"),F(!0)},Q=t=>{l({type:"common/getRequestData",method:"GET",url:"/data-acquisition/interface-info/"+t,payload:{},callback:u=>{var o,C;if(console.log(u),u.success){let p=u.data;p.brandCode&&b(p.brandCode,2),p.brandCode&&b(p.versionNumber,3),p.brandCode&&b(p.functionType,4),m(i(c({},p),{requestMode:(o=p.request)==null?void 0:o.requestMode,requestUrl:(C=p.request)==null?void 0:C.requestUrl})),x("\u7F16\u8F91\u63A5\u53E3"),F(!0)}}})},O=t=>{j.confirm({title:"\u5220\u9664",icon:"",content:"\u786E\u5B9A\u8981\u5220\u9664\u5F53\u524D\u63A5\u53E3\u5417",onOk(){l({type:"common/getRequestData",method:"delete",url:"/data-acquisition/interface-info/"+t,payload:{},callback:u=>{u.success&&(_({pageNo:1}),h(null))}})},onCancel(){console.log("Cancel")}})},Y=()=>{if(!(!a.serviceIp||!a.requestUrl||!a.servicePort))try{let t=a.jsonCode,u={};t&&(u=JSON.parse(t)),l({type:"common/getRequestData",method:"post",url:"http://"+a.serviceIp+":"+a.servicePort+a.requestUrl,payload:c({},u),callback:o=>{console.log(o),o.success&&m(i(c({},a),{interfaceStatus:1,debugResult:JSON.stringify(o)}))}})}catch(t){oe.error("\u8BF7\u8F93\u5165\u5982\u6B63\u786E\u7684\uFF0C\u8BF7\u6C42\u53C2\u6570(json) ")}},$=()=>{let t="",u={};a.id?(t="/data-acquisition/interface-info/update",delete a.request,delete a.requestMode,delete a.requestUrl,u=c({},a)):(t="/data-acquisition/interface-info/create",u=c({},a)),l({type:"common/getRequestData",method:"post",url:t,payload:c({},u),callback:o=>{console.log(o),o.success&&(F(!1),_({pageNo:1}),h(null))}})},b=(t,u)=>{l({type:"common/getRequestData",method:"GET",url:"/data-acquisition/interface-type-info/findAllByType",payload:{parentId:t,typeLevel:u},callback:o=>{o.success&&(u===1&&L(o.data),u===2&&K(o.data),u===3&&Z(o.data),u===4&&H(o.data))}})};return e.createElement("div",{className:r.interfaceManage},e.createElement("div",{className:r.search},e.createElement("div",{className:r.left},e.createElement(y,{onClick:()=>{X()},type:"primary",icon:e.createElement(pe,null)},"\u65B0\u589E\u63A5\u53E3"),e.createElement(y,{onClick:()=>{O()},type:"primary",icon:e.createElement(fe,null),danger:!0},"\u6279\u91CF\u5220\u9664")),e.createElement("div",{className:r.right},e.createElement(n,{layout:"inline",form:k,onFinish:W},e.createElement(n.Item,{label:"\u63A5\u53E3\u540D\u79F0",name:"interfaceName"},e.createElement(N,{placeholder:"\u8BF7\u8F93\u5165\u63A5\u53E3\u540D\u79F0"})),e.createElement(n.Item,{label:"\u63A5\u53E3\u7C7B\u578B",name:"interfaceType"},e.createElement(g,{placeholder:"\u8BF7\u9009\u62E9\u63A5\u53E3\u7C7B\u578B",style:{width:"170px"}},(P=s==null?void 0:s.interface_type)==null?void 0:P.map(t=>e.createElement(f,{key:t.typeCode,value:t.typeCode},t.typeName)))),e.createElement(n.Item,{label:"\u72B6\u6001",name:"interfaceStatus"},e.createElement(B.Group,{value:0,defaultValue:0},e.createElement(B,{value:0},"\u5168\u90E8"),e.createElement(B,{value:1},"\u6709\u6548"),e.createElement(B,{value:2},"\u65E0\u6548"))),e.createElement(n.Item,null,e.createElement(y,{type:"primary",htmlType:"submit"},"\u67E5\u8BE2"),e.createElement(y,{htmlType:"button",onClick:()=>{k.resetFields(),_({pageNo:1}),h(null)},style:{marginLeft:"10px"}},"\u91CD\u7F6E"))))),e.createElement("div",{className:r.content},I.length===0?e.createElement("div",{style:{margin:"40px auto"}},e.createElement(se,null)):I.map((t,u)=>{var o;return e.createElement("div",{key:u,className:r.banner},e.createElement("div",{className:r.row1},e.createElement("div",null,e.createElement("img",{src:ce})),e.createElement("div",null,t.name),e.createElement("div",null,e.createElement(me,{onChange:()=>{}}))),e.createElement("div",{className:r.row2},e.createElement("div",null,"\u72B6\u6001"),e.createElement("div",null,"\u63A5\u53E3\u7C7B\u578B")),e.createElement("div",{className:r.row3},e.createElement("div",null,e.createElement(ie,{color:t.interfaceStatus===1?"success":"error"},t.interfaceStatus===1?"\u6709\u6548":"\u65E0\u6548")),e.createElement("div",null,(o=t==null?void 0:t.interfaceType)==null?void 0:o.typeName)),e.createElement("div",{className:r.row4},e.createElement("div",{onClick:()=>{Q(t.id)}},"\u7F16\u8F91"),e.createElement("div",{onClick:()=>{O(t.id)}},"\u5220\u9664")))})),e.createElement("div",{className:r.footer},I.length===0?"":e.createElement(de,{pageSize:10,total:J,onChange:(t,u)=>{S.pageNo=t,_({pageNo:t}),h(null)}})),e.createElement(j,{title:v,visible:G,onCancel:()=>{F(!1)},footer:[e.createElement(y,{key:"back",onClick:()=>{F(!1)}},"\u53D6\u6D88"),e.createElement(y,{onClick:()=>{Y()},type:"primary",ghost:!0},"\u6D4B\u8BD5"),e.createElement(y,{onClick:()=>{$()},type:"primary"},"\u786E\u5B9A")],width:600},e.createElement(n,{layout:"vertical"},v==="\u65B0\u589E\u63A5\u53E3"||v==="\u7F16\u8F91\u63A5\u53E3"?e.createElement("div",{className:r["m-box"]},e.createElement("div",{className:r["mb-row2"]},e.createElement("div",{className:r["mbr-left"]},e.createElement(n.Item,{required:!0,label:"\u63A5\u53E3\u540D\u79F0"},e.createElement(N,{value:a.name,onChange:t=>{m(i(c({},a),{name:t.target?t.target.value:t}))},placeholder:"\u8BF7\u8F93\u5165\u63A5\u53E3\u540D\u79F0"}))),e.createElement("div",{className:r["mbr-right"]},e.createElement(n.Item,{required:!0,label:"\u63A5\u53E3\u7C7B\u578B"},e.createElement(g,{value:a.interfaceType,onChange:(t,u)=>{m(i(c({},a),{interfaceType:t.target?t.target.value:t,interfaceTypeName:u.children,debugResult:""}))},style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u63A5\u53E3\u7C7B\u578B"},(R=s==null?void 0:s.interface_type)==null?void 0:R.map(t=>e.createElement(f,{key:t.typeCode,value:t.typeCode},t.typeName)))))),a.interfaceType===2?e.createElement(e.Fragment,null,e.createElement("div",{className:r["mb-row1"]},e.createElement(n.Item,{required:!0,label:"\u8BF7\u6C42"},e.createElement(N,{addonBefore:e.createElement(g,{defaultValue:"1",className:"select-before"},e.createElement(f,{value:"1"},"GET"),e.createElement(f,{value:"2"},"POST"))})),e.createElement(n.Item,{required:!0,label:"\u8F6E\u8BE2(ms)"},e.createElement(Ee,{min:1,max:10,onChange:t=>{},style:{width:"100%"}})))):e.createElement(e.Fragment,null,e.createElement("div",{className:r["mb-row2"]},e.createElement("div",{className:r["mbr-left"]},e.createElement(n.Item,{required:!0,label:"IP\u5730\u5740"},e.createElement(N,{value:a.serviceIp,onChange:t=>{m(i(c({},a),{serviceIp:t.target?t.target.value:t}))},placeholder:"\u8BF7\u8F93\u5165IP\u5730\u5740"}))),e.createElement("div",{className:r["mbr-right"]},e.createElement(n.Item,{required:!0,label:"\u7AEF\u53E3\u53F7"},e.createElement(N,{value:a.servicePort,onChange:t=>{m(i(c({},a),{servicePort:t.target?t.target.value:t}))},placeholder:"\u8BF7\u8F93\u5165\u7AEF\u53E3\u53F7"})))),e.createElement("div",{className:r["mb-row2"]},e.createElement("div",{className:r["mbr-left"]},e.createElement(n.Item,{required:!0,label:"\u54C1\u724C"},e.createElement(g,{value:a.brandCode,onChange:(t,u)=>{b(t,2),m(i(c({},a),{brandCode:t.target?t.target.value:t,brandName:u.children,versionNumber:null,versionNumberName:null,functionType:null,functionTypeName:null,functionOption:null,functionOptionName:null}))},style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u54C1\u724C"},w==null?void 0:w.map(t=>e.createElement(f,{key:t.id,value:t.id},t.typeName))))),e.createElement("div",{className:r["mbr-right"]},e.createElement(n.Item,{required:!0,label:"\u7248\u672C\u53F7"},e.createElement(g,{value:a.versionNumber,onChange:(t,u)=>{b(t,3),m(i(c({},a),{versionNumber:t.target?t.target.value:t,versionNumberName:u.children,functionType:null,functionTypeName:null,functionOption:null,functionOptionName:null}))},style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u7248\u672C\u53F7"},D==null?void 0:D.map(t=>e.createElement(f,{key:t.id,value:t.id},t.typeName)))))),e.createElement("div",{className:r["mb-row2"]},e.createElement("div",{className:r["mbr-left"]},e.createElement(n.Item,{required:!0,label:"\u529F\u80FD\u7C7B\u522B"},e.createElement(g,{value:a.functionType,onChange:(t,u)=>{b(t,4),m(i(c({},a),{functionType:t.target?t.target.value:t,functionTypeName:u.children,functionOption:null,functionOptionName:null}))},style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u529F\u80FD\u7C7B\u522B"},T==null?void 0:T.map(t=>e.createElement(f,{key:t.id,value:t.id},t.typeName))))),e.createElement("div",{className:r["mbr-right"]},e.createElement(n.Item,{required:!0,label:"\u529F\u80FD\u9009\u9879"},e.createElement(g,{value:a.functionOption,onChange:(t,u)=>{console.log(u),m(i(c({},a),{functionOption:t.target?t.target.value:t,functionOptionName:u.children,requestMode:"POST",requestUrl:u.requestUrl}))},style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u529F\u80FD\u9009\u9879"},A==null?void 0:A.map(t=>e.createElement(f,{key:t.id,requestUrl:t.requestUrl,value:t.id},t.typeName))))))),e.createElement("div",{className:r["mb-row1"]},e.createElement(n.Item,{required:!0,label:"\u8BF7\u6C42\u53C2\u6570(json)"},e.createElement(q,{value:a.jsonCode,onChange:t=>{m(i(c({},a),{jsonCode:t.target?t.target.value:t}))},placeholder:'\u4F8B\u5982: { "name": "\u5F20\u4E09\u4E09", "age": 18 }',rows:4}))),a.debugResult?e.createElement("div",{className:r["mb-row1"]},e.createElement(n.Item,{required:!0,label:"\u8BF7\u6C42\u7ED3\u679C"},e.createElement(q,{value:a.debugResult,disabled:!0,onChange:t=>{m(i(c({},a),{debugResult:t.target?t.target.value:t}))},readOnly:!0,rows:4}))):null):"",v==="\u8C03\u8BD5\u63A5\u53E3"?e.createElement("div",{className:r["m-box"]},e.createElement("div",{className:r["mb-row1"]},e.createElement(n.Item,{required:!0,label:"\u8BF7\u6C42\u53C2\u6570(json)"},e.createElement(q,{value:a.jsonCode,onChange:t=>{m(i(c({},a),{jsonCode:t.target?t.target.value:t}))},placeholder:'\u4F8B\u5982: { "name": "\u5F20\u4E09\u4E09", "age": 18 }',rows:4}))),e.createElement("div",{className:r["mb-row1"]},e.createElement(n.Item,{required:!0,label:"\u8BF7\u6C42\u7ED3\u679C"},e.createElement(q,{value:a.debugResult,onChange:t=>{m(i(c({},a),{debugResult:t.target?t.target.value:t}))},readOnly:!0,rows:4})))):"")))};var Me=ne(({common:d,select:l})=>({common:d,select:l}))(qe);export{Me as default};
//# sourceMappingURL=index.91fac446.js.map
