var Xe=Object.defineProperty,Ze=Object.defineProperties;var je=Object.getOwnPropertyDescriptors;var be=Object.getOwnPropertySymbols;var $e=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable;var Be=(d,i,r)=>i in d?Xe(d,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):d[i]=r,o=(d,i)=>{for(var r in i||(i={}))$e.call(i,r)&&Be(d,r,i[r]);if(be)for(var r of be(i))et.call(i,r)&&Be(d,r,i[r]);return d},m=(d,i)=>Ze(d,je(i));import{_ as F,A as _e,a as U,c as tt,W as at,R as t,B as _,m as I}from"./index.353dd2ef.js";import{d as ye}from"./default-shebei.09b3eaa3.js";import{F as s}from"./index.66f418cc.js";import{P as Ce}from"./PlusCircleOutlined.c71d6d7a.js";import{D as ve}from"./DeleteOutlined.a973045b.js";import{I as E,A,a as M,E as ut,b as lt}from"./index.4897d79a.js";import{P as rt}from"./Pagination.79d24ff3.js";import{D as nt}from"./index.713bae6c.js";import{E as ot}from"./EditOutlined.98c50555.js";import{A as it}from"./index.16270b28.js";import{T as we,S as st}from"./Table.84915985.js";import{M as G}from"./index.9307a5cf.js";import{S as mt}from"./index.698de9d8.js";var ct={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M925.9 804l-24-199.2c-.8-6.6-8.9-9.4-13.6-4.7L829 659.5 557.7 388.3c-6.3-6.2-16.4-6.2-22.6 0L433.3 490 156.6 213.3a8.03 8.03 0 00-11.3 0l-45 45.2a8.03 8.03 0 000 11.3L422 591.7c6.2 6.3 16.4 6.3 22.6 0L546.4 490l226.1 226-59.3 59.3a8.01 8.01 0 004.7 13.6l199.2 24c5.1.7 9.5-3.7 8.8-8.9z"}}]},name:"fall",theme:"outlined"},dt=ct,De=function(i,r){return F.exports.createElement(_e,U(U({},i),{},{ref:r,icon:dt}))};De.displayName="FallOutlined";var Et=F.exports.forwardRef(De),pt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M917 211.1l-199.2 24c-6.6.8-9.4 8.9-4.7 13.6l59.3 59.3-226 226-101.8-101.7c-6.3-6.3-16.4-6.2-22.6 0L100.3 754.1a8.03 8.03 0 000 11.3l45 45.2c3.1 3.1 8.2 3.1 11.3 0L433.3 534 535 635.7c6.3 6.2 16.4 6.2 22.6 0L829 364.5l59.3 59.3a8.01 8.01 0 0013.6-4.7l24-199.2c.7-5.1-3.7-9.5-8.9-8.8z"}}]},name:"rise",theme:"outlined"},gt=pt,qe=function(i,r){return F.exports.createElement(_e,U(U({},i),{},{ref:r,icon:gt}))};qe.displayName="RiseOutlined";var Ft=F.exports.forwardRef(qe);const ht="style-module__modularManage___hwm37",bt="style-module__search___AkQak",Bt="style-module__left___rom4O",yt="style-module__right___X-Bs0",Ct="style-module__content___4j6-H",vt="style-module__banner___RMdfA",At="style-module__row1___EVimg",ft="style-module__row2___4LQW3",Nt="style-module__row3___PaxBF",_t="style-module__row4___7QHYZ",wt="style-module__footer___f1cWb",Dt="style-module__detail___HA1GA",qt="style-module__header___2EWYD",xt="style-module__box___ysgfL",kt="style-module__body___vPVcX";var a={modularManage:ht,search:bt,left:Bt,right:yt,content:Ct,banner:vt,row1:At,row2:ft,row3:Nt,row4:_t,footer:wt,detail:Dt,header:qt,"h-left":"style-module__h-left___JUWCQ","h-right":"style-module__h-right___Pfk32",box:xt,body:kt,"b-search":"style-module__b-search___5qdZ0","bs-left":"style-module__bs-left___ojTdv","bs-right":"style-module__bs-right___a09rz","m-box":"style-module__m-box___NKqEB","mb-row2":"style-module__mb-row2___DLOFH","mbr-left":"style-module__mbr-left___-1ipt","mbr-right":"style-module__mbr-right___dfoIF","mb-biaoshi":"style-module__mb-biaoshi___pI3dR"};const R={url:"/api/point-position",params:{},checkBox:!0,operation:d=>{var r,C;let i=[];return((r=d==null?void 0:d.pointType)==null?void 0:r.typeCode)===2||((C=d==null?void 0:d.pointType)==null?void 0:C.typeCode)===4?i=[{name:"\u7F16\u8F91",type:"disabled",drawerWidth:"50"},{name:"\u4E0B\u53D1",type:"disabled",drawerWidth:"50"}]:i=[{name:"\u7F16\u8F91",type:"disabled",drawerWidth:"50"}],i},searchListType:"multipleQuery",searchList:[{title:"\u8BBE\u5907\u540D\u79F0",type:"input",key:"name",placeholder:"\u8BF7\u8F93\u5165\u8BBE\u5907\u540D\u79F0"},{title:"\u534F\u8BAE\u7C7B\u578B",type:"select",key:"isReport",placeholder:"\u8BF7\u9009\u62E9\u534F\u8BAE\u7C7B\u578B",filterList:"listReport",sendType:"id"},{title:"\u534F\u8BAE\u7C7B\u578B",type:"radio",key:"radioValue",filterList:"listReport",sendType:"id"}],tableColumns:()=>[{title:"\u70B9\u4F4D\u540D\u79F0",key:"name",dataIndex:"name",width:"15%",align:"center"},{title:"\u70B9\u4F4D\u7C7B\u578B",width:"5%",align:"center",render:(d,i,r)=>{var C;return i.pointType?(C=i.pointType)==null?void 0:C.typeName:""}},{title:"\u5BC4\u5B58\u5668\u7C7B\u578B",width:"15%",align:"center",render:(d,i,r)=>{var C;return i.registerType?(C=i.registerType)==null?void 0:C.typeName:""}},{title:"\u5730\u5740",key:"address",dataIndex:"address",width:"5%",align:"center"},{title:"\u6570\u636E\u7C7B\u578B",className:"no-flex",width:"5%",align:"center",render:(d,i,r)=>{var C;return i.dataType?(C=i.dataType)==null?void 0:C.typeName:""}},{title:"\u503C",dataIndex:"value",key:"value",width:"5%",align:"center"},{title:"\u8D28\u91CF\u6233",key:"stampOfMass",dataIndex:"stampOfMass",width:"5%",align:"center",render:d=>d=="1"?"good":"-bad"},{title:"\u65F6\u95F4\u6233",dataIndex:"timeStamp",key:"timeStamp",width:"10%",align:"center"},{title:"\u70B9\u4F4D\u8BF4\u660E",key:"explain",dataIndex:"explain",width:"30%",align:"left"}]};var Ae="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAARVJREFUOE+lkk0vA1EUhp/3ioVY+kj8A00bG1t2rY8lP8KuKcks2bFUHcLfIBYkrAh/QDpUYm2lFiLSTMqRNumYqpoRd3fvOc99z8cr/nHUj/VsarhJOBbing50+/pTXg9ctNycwzyg0AEMuxAq+wqO4590wSXLrgHlftUIrVdU3erEI7hombzDnSeNQHwsVXR31MqL4JJlT4DFJBi48hXMRvCKTQ8O0QhTgO0UByM7Cp7byquWmTDcY1oYBiZ93dy34b8qN3kf3VetHu/5FFhIoX7tK5j5NrBcAewsCTa0vKvqYRfcuiTtGdjwFWz27LnzULLsvGGeUP6rCrsEbf/qsHjJLW83YFy81ff08JLK20k9x+OfbqJWELOsnG0AAAAASUVORK5CYII=",fe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAARdJREFUOE+lkrtKBDEUhv8TcBiw9AK+gZAumTBTaLfrpdQ3ESy109J9lV22UNBK0SpJMaUvYOVaiDAgQ0ZmYYYM65pZTJec/8u5/YR/HFrG5nm+7pzbiqLonXP+9ZtuATbGHAA4J6KhBzw650ZKqan/SQe21p4BGP3RyYWU8rqJt7DWesAYewiNoKqqkyRJJrWuha21twCOQzCAZynlfgsbY9aI6LsHOJfEcbzBOf+YZzbG7BDRW1/YOberlHpt4JUyl2W5mabpzO/5DsBRKDsRvQgh9joD01oPGWP3IRjAqZRy3IHrS2jPRHQphLha2HPzYK09rB0GYOBV8UREN0KI5Q7zS669DWC7KIpZlmWfvbzdo+dW8gMKBlUQWSkQOwAAAABJRU5ErkJggg==";const{TextArea:It}=E,{Search:St}=E,{Option:N}=A,{Column:Ne}=we,Rt=d=>{var te,ae,ue,le,re,ne,oe,ie,se,me,ce,de,Ee,pe,ge;const{dispatch:i,select:r}=d,[C]=s.useForm(),[Q,W]=F.exports.useState(!1),[c,H]=F.exports.useState({}),[Y,K]=F.exports.useState({}),[f,P]=F.exports.useState(""),[xe,w]=F.exports.useState(!1),[l,b]=F.exports.useState({}),[u,p]=F.exports.useState({}),[z,X]=F.exports.useState([]),[Z,D]=F.exports.useState({pageNo:1}),[ke,Ie]=F.exports.useState(0),[Se,j]=F.exports.useState([]),[$,Re]=F.exports.useState({pageNo:1}),[Pe,Te]=F.exports.useState(0),[T,ee]=F.exports.useState([]);F.exports.useEffect(()=>{D({pageNo:1}),q(null)},[]);const Oe=e=>{console.log(e),D({pageNo:1}),q(e)},q=(e,n=1,g=10)=>{i({type:"common/getRequestData",method:"GET",url:"/data-acquisition/module-info",payload:o({current:Z.pageNo,pageSize:10,rbacToken:"7ed6a62261854a4eb27d844ff4df1885"},e),callback:B=>{if(B.success){let v=B.data.list,y=B.data.total;Ie(y);const h=v.map(S=>S.id);X(v),V("",h,[],{list:v})}}})},O=(e,n=1,g=10)=>{i({type:"common/getRequestData",method:"GET",url:"/data-acquisition/point-position",payload:o({current:$.pageNo,pageSize:g,rbacToken:"7ed6a62261854a4eb27d844ff4df1885"},e),callback:B=>{if(B.success){let v=B.data.list,y=B.data.total;j(v),Te(y);const h=v.map(S=>S.id);V("getModuleAndPoint",[e.moduleId],h,{list:v})}}})},V=(e,n,g,B)=>{const v=new WebSocket(`ws://${at}:15420/ws/socket`);v.onmessage=y=>{var Fe,he;if(console.log("\u5BA2\u6237\u7AEF\u63A5\u6536\u670D\u52A1\u7AEF\u6570\u636E\u65F6\u89E6\u53D1",y),!y.data||e==="postPointDeleted")return;let h=JSON.parse(y==null?void 0:y.data);console.log("\u53CD",h),h==null||h.moduleData.sort(function(x,k){return k.id-x.id});let S=h==null?void 0:h.moduleData;h.pointData.sort(function(x,k){return k.id-x.id});let He=h==null?void 0:h.pointData;if(n.length>0)if(e&&e==="getModuleAndPoint")K({status:(Fe=S[0])==null?void 0:Fe.status});else{let x=(he=B==null?void 0:B.list)==null?void 0:he.map((k,J)=>o(o({},k),S[J]));X(x)}if(g.length>0){const x=B.list.map((k,J)=>o(o({},k),He[J]));j(x)}},v.onopen=y=>{console.log("\u5EFA\u7ACB\u8FDE\u63A5\u65F6\u89E6\u53D1",y);const h={moduleIds:n,pointIds:g,type:e};console.log("\u63A8",h),v.send(JSON.stringify(h))},v.onclose=y=>{console.log("\u8FDE\u63A5\u9519\u8BEF\u65F6\u89E6\u53D1",y)},v.onerror=y=>{console.log("\u901A\u4FE1\u9519\u8BEF\u65F6\u89E6\u53D1",y)}},Le=()=>{b({}),p({}),P("\u65B0\u589E\u6A21\u5757"),w(!0)},L=e=>{i({type:"common/getRequestData",method:"GET",url:"/data-acquisition/module-info/"+e.id,payload:{},callback:n=>{var g;console.log(n),n.success&&(Q||W(!0),H(o({pointPositionCount:(g=n.data.pointPosition)==null?void 0:g.length},n.data)),O({moduleId:e.id}))}})},Me=e=>{i({type:"common/getRequestData",method:"GET",url:"/data-acquisition/module-info/"+e,payload:{},callback:n=>{n.success&&(b(n.data),p(n.data.agreementInfo),P("\u7F16\u8F91\u6A21\u5757"),w(!0))}})},Ue=e=>{G.confirm({title:"\u5220\u9664",icon:"",content:"\u786E\u5B9A\u8981\u5220\u9664\u5F53\u524D\u6A21\u5757\u5417",onOk(){i({type:"common/getRequestData",method:"post",url:"/data-acquisition/module-info/delete",payload:{id:e},callback:n=>{n.success&&(D({pageNo:1}),q(null))}})},onCancel(){console.log("Cancel")}})},We=()=>{P("\u65B0\u589E\u70B9\u4F4D"),b({convertRatio:1,convertBenchmark:0}),w(!0)},Ye=e=>{i({type:"common/getRequestData",method:"GET",url:"/data-acquisition/point-position/"+e,payload:{},callback:n=>{console.log(n),n.success&&(b(n.data),P("\u7F16\u8F91\u70B9\u4F4D"),w(!0))}})},Ke=()=>{if(!T.length){I.warning("\u8BF7\u9009\u62E9\u5220\u9664\u9879");return}G.confirm({title:"\u5220\u9664",icon:"",content:"\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E9B\u6570\u636E\u5417",onOk(){i({type:"common/getRequestData",method:"post",url:"/data-acquisition/point-position/delete",payload:{ids:T},callback:e=>{e.success&&(V("postPointDeleted",[],T,null),ee([]),O({moduleId:c.id}))}})},onCancel(){console.log("Cancel")}})},ze=()=>{let e="",n={};if(f.includes("\u6A21\u5757")){if(!l.name){I.warning("\u8BF7\u8F93\u5165\u6A21\u5757\u540D\u79F0");return}if(!l.agreementCode){I.warning("\u8BF7\u9009\u62E9\u901A\u8BAF\u534F\u8BAE");return}l.id?(e="/data-acquisition/module-info/update",n={updateModuleInfoDto:{id:l.id,name:l.name},updateAgreementInfoDto:u}):(e="/data-acquisition/module-info/create",n={createModuleInfoDto:l,createAgreementInfoDto:u})}f.includes("\u70B9\u4F4D")&&(l.id?(e="/data-acquisition/point-position/update",n=m(o({},l),{moduleId:c.id})):(e="/data-acquisition/point-position/create",n=m(o({},l),{moduleId:c.id}))),f.includes("\u4E0B\u53D1")&&(e="/dataCollect/point/issuedPoint",n={value:l.value,rbacToken:"d123456789",pointId:l.pointId}),i({type:"common/getRequestData",method:"post",url:e,payload:o({},n),callback:g=>{console.log(g),g.success&&(w(!1),f.includes("\u6A21\u5757")&&(l.id?L({id:l.id}):(D({pageNo:1}),q(null))),f.includes("\u70B9\u4F4D")&&L({id:c.id}))}})},Ve=e=>{P("\u70B9\u4F4D\u4E0B\u53D1"),b({pointId:e}),w(!0)},Je=e=>{e.file.status,e.file.status==="done"?e.file.response.success?(O({moduleId:c.id}),I.success("\u5BFC\u5165\u6210\u529F\uFF01")):I.error(e.file.response.message):e.file.status==="error"&&I.error("\u4E0A\u4F20\u5931\u8D25")},Ge=()=>{if(T.length<=0){I.warning("\u8BF7\u9009\u62E9\u70B9\u4F4D");return}const e=`/data-acquisition/xlsx/exportXlsx?moduleName=${c.name}&ids=${T}`;window.open(e)},Qe={onChange:(e,n)=>{console.log(`selectedRowKeys: ${e}`,"selectedRows: ",n);const g=n.map(B=>B.id);console.log(g),ee(g)},getCheckboxProps:e=>({disabled:e.name==="Disabled User",name:e.name})};return t.createElement("div",{className:a.modularManage},t.createElement("div",{className:a.search},t.createElement("div",{className:a.left},t.createElement(_,{onClick:()=>{Le()},type:"primary",icon:t.createElement(Ce,null)},"\u65B0\u589E\u6A21\u5757"),t.createElement(_,{onClick:()=>{},type:"primary",icon:t.createElement(ve,null),danger:!0},"\u6279\u91CF\u5220\u9664")),t.createElement("div",{className:a.right},t.createElement(s,{layout:"inline",form:C,onFinish:Oe},t.createElement(s.Item,{label:"\u6A21\u5757\u540D\u79F0",name:"moduleName"},t.createElement(E,{placeholder:"\u8BF7\u8F93\u5165\u6A21\u5757\u540D\u79F0"})),t.createElement(s.Item,{label:"\u534F\u8BAE\u7C7B\u578B",name:"agreementCode"},t.createElement(A,{placeholder:"\u8BF7\u9009\u62E9\u534F\u8BAE\u7C7B\u578B",onChange:()=>{},allowClear:!0,style:{width:"170px"}},(te=r==null?void 0:r.agreement_type)==null?void 0:te.map(e=>t.createElement(N,{key:e.typeCode,value:e.typeCode},e.typeName)))),t.createElement(s.Item,{label:"\u72B6\u6001",name:"status"},t.createElement(M.Group,{value:0,defaultValue:0},t.createElement(M,{value:0},"\u5168\u90E8"),t.createElement(M,{value:1},"\u5728\u7EBF"),t.createElement(M,{value:2},"\u79BB\u7EBF"))),t.createElement(s.Item,null,t.createElement(_,{type:"primary",htmlType:"submit"},"\u67E5\u8BE2"),t.createElement(_,{htmlType:"button",onClick:()=>{C.resetFields(),D({pageNo:1}),q(null)},style:{marginLeft:"10px"}},"\u91CD\u7F6E"))))),t.createElement("div",{className:a.content},z.length===0?t.createElement("div",{style:{margin:"40px auto"}},t.createElement(ut,null)):z.map((e,n)=>{var g;return t.createElement("div",{key:n,className:a.banner},t.createElement("div",{className:a.row1},t.createElement("div",null,t.createElement("img",{src:ye})),t.createElement("div",null,e.name),t.createElement("div",null,t.createElement(lt,{onChange:()=>{}}))),t.createElement("div",{className:a.row2},t.createElement("div",null,"\u72B6\u6001"),t.createElement("div",null,"\u70B9\u4F4D\u6570\u91CF"),t.createElement("div",null,"\u534F\u8BAE\u7C7B\u578B")),t.createElement("div",{className:a.row3},t.createElement("div",null,t.createElement("img",{src:(e==null?void 0:e.status)===1?Ae:fe})),t.createElement("div",null,e==null?void 0:e.pointPositionCount),t.createElement("div",null,(g=e==null?void 0:e.agreementCode)==null?void 0:g.typeName)),t.createElement("div",{className:a.row4},t.createElement("div",{onClick:()=>{L(e)}},"\u67E5\u770B"),t.createElement("div",{onClick:()=>{L(e)}},"\u7F16\u8F91"),t.createElement("div",{onClick:()=>{Ue(e.id)}},"\u5220\u9664")))})),t.createElement("div",{className:a.footer},z.length===0?"":t.createElement(rt,{pageSize:10,total:ke,onChange:(e,n)=>{Z.pageNo=e,D({pageNo:e}),q(null)}})),t.createElement(nt,{title:c.name,placement:"right",onClose:()=>{K({}),H({}),D({pageNo:1}),q(null),W(!1)},visible:Q,width:"87vw",zIndex:2},t.createElement("div",{className:a.detail},t.createElement("div",{className:a.header},t.createElement("div",{className:a["h-left"]},t.createElement("div",null,t.createElement("img",{src:ye})),t.createElement("div",null,c.name),t.createElement("div",null,t.createElement(ot,{onClick:()=>{Me(c.id)}}))),t.createElement("div",{className:a["h-right"]},t.createElement("div",{className:a.box},t.createElement("div",null,"\u72B6\u6001"),t.createElement("div",null,t.createElement("img",{src:(Y==null?void 0:Y.status)===1?Ae:fe}))),t.createElement("div",{className:a.box},t.createElement("div",null,"\u70B9\u4F4D\u6570\u91CF"),t.createElement("div",null,c.pointPositionCount)),t.createElement("div",{className:a.box},t.createElement("div",null,"\u534F\u8BAE\u7C7B\u578B"),t.createElement("div",null,(ae=c==null?void 0:c.agreementInfo)==null?void 0:ae.name)),t.createElement("div",{className:a.box},t.createElement("div",null,"IP\u5730\u5740:",(ue=c==null?void 0:c.agreementInfo)==null?void 0:ue.ipAddress),t.createElement("div",null,"\u7AD9\u53F7: ",(le=c==null?void 0:c.agreementInfo)==null?void 0:le.stationNumber)),t.createElement("div",{className:a.box},t.createElement("div",null,"\u7AEF\u53E3\u53F7: ",(re=c==null?void 0:c.agreementInfo)==null?void 0:re.portNumber),t.createElement("div",null,"\u91C7\u96C6\u9891\u7387: ",(ne=c==null?void 0:c.agreementInfo)==null?void 0:ne.acquisitionFreq)))),t.createElement("div",{className:a.body},t.createElement("div",{className:a["b-search"]},t.createElement("div",{className:a["bs-left"]},t.createElement(_,{onClick:()=>{We()},type:"primary",icon:t.createElement(Ce,null)},"\u65B0\u589E\u70B9\u4F4D"),t.createElement(_,{onClick:()=>{Ke()},type:"primary",icon:t.createElement(ve,null),danger:!0},"\u6279\u91CF\u5220\u9664"),t.createElement(it,{name:"files",action:"/data-acquisition/xlsx/importXlsx",accept:".xlsx,.xls",data:{moduleId:c.id},onChange:e=>Je(e),showUploadList:!1},t.createElement(_,{type:"primary",icon:t.createElement(Et,null)},"\u5BFC\u5165")),t.createElement(_,{onClick:()=>{Ge()},type:"primary",icon:t.createElement(Ft,null)},"\u5BFC\u51FA")),t.createElement("div",{className:a["bs-right"]},t.createElement("div",null,"\u5173\u952E\u5B57"),t.createElement("div",null,t.createElement(St,{placeholder:"\u8BF7\u8F93\u5165",onSearch:e=>{O({id:c.id,name:e})},enterButton:!0})))),t.createElement(we,{rowKey:"id",scroll:{x:2e3},dataSource:Se,pagination:{pageSize:10,total:Pe,onChange:(e,n)=>{$.pageNo=e,Re({pageNo:e}),O({moduleId:c.id})}},rowSelection:o({type:"checkbox",fixed:!0},Qe)},R.tableColumns?R.tableColumns().map((e,n)=>t.createElement(Ne,m(o({key:n},e),{onCell:()=>({width:e.width}),onHeaderCell:()=>({width:e.width})}))):null,R.operation&&!!R.operation.length?t.createElement(Ne,{title:"\u64CD\u4F5C",width:"10%",align:"center",fixed:"right",render:(e,n)=>t.createElement(st,null,!!R.operation.length&&R.operation(n).map((g,B)=>t.createElement("a",{key:B,onClick:()=>{console.log(n),K(n),W(!0),g.name==="\u4E0B\u53D1"&&Ve(n.id),g.name==="\u7F16\u8F91"&&Ye(n.id)}},g.name)))}):null)))),t.createElement(G,{title:f,visible:xe,onOk:()=>{ze()},onCancel:()=>{w(!1)},width:600},t.createElement(s,{layout:"vertical"},f.includes("\u6A21\u5757")?t.createElement("div",{className:a["m-box"]},t.createElement("div",{className:a["mb-row2"]},t.createElement("div",{className:a["mbr-left"]},t.createElement(s.Item,{required:!0,label:"\u6A21\u5757\u540D\u79F0"},t.createElement(E,{value:l.name,onChange:e=>{b(m(o({},l),{name:e.target?e.target.value:e}))},placeholder:"\u8BF7\u8F93\u5165\u6A21\u5757\u540D\u79F0"}))),t.createElement("div",{className:a["mbr-right"]},t.createElement(s.Item,{required:!0,label:"\u901A\u8BAF\u534F\u8BAE"},t.createElement(A,{value:l.agreementCode,onChange:(e,n)=>{b(m(o({},l),{agreementCode:e.target?e.target.value:e,agreementName:n.children}))},style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u901A\u8BAF\u534F\u8BAE"},(oe=r==null?void 0:r.agreement_type)==null?void 0:oe.map(e=>t.createElement(N,{key:e.typeCode,value:e.typeCode},e.typeName)))))),t.createElement("div",{className:a["mb-biaoshi"]},t.createElement("hr",null),t.createElement("div",null,u.agreementName?u.agreementName:"Modbus-TCP")),l!=null&&l.agreementCode?t.createElement(t.Fragment,null,(l==null?void 0:l.agreementCode)===1||(l==null?void 0:l.agreementCode)===3||(l==null?void 0:l.agreementCode)===4?t.createElement(t.Fragment,null,t.createElement("div",{className:a["mb-row2"]},t.createElement("div",{className:a["mbr-left"]},t.createElement(s.Item,{required:!0,label:"IP\u5730\u5740"},t.createElement(E,{value:u.ipAddress,onChange:e=>{p(m(o({},u),{ipAddress:e.target?e.target.value:e}))},placeholder:"\u8BF7\u8F93\u5165IP\u5730\u5740"}))),t.createElement("div",{className:a["mbr-right"]},t.createElement(s.Item,{required:!0,label:"\u7AEF\u53E3\u53F7"},t.createElement(E,{value:u==null?void 0:u.portNumber,onChange:e=>{p(m(o({},u),{portNumber:e.target?e.target.value:e}))},placeholder:"\u8BF7\u8F93\u5165\u7AEF\u53E3\u53F7"})))),t.createElement("div",{className:a["mb-row2"]},t.createElement("div",{className:a["mbr-left"]},t.createElement(s.Item,{required:!0,label:"\u7AD9\u53F7"},t.createElement(E,{value:u==null?void 0:u.stationNumber,onChange:e=>{p(m(o({},u),{stationNumber:e.target?e.target.value:e}))},placeholder:"\u8BF7\u8F93\u5165\u7AD9\u53F7"}))),t.createElement("div",{className:a["mbr-right"]},t.createElement(s.Item,{required:!0,label:"\u91C7\u96C6\u9891\u7387"},t.createElement(E,{value:u==null?void 0:u.acquisitionFreq,onChange:e=>{p(m(o({},u),{acquisitionFreq:e.target?e.target.value:e}))},placeholder:"\u8BF7\u8F93\u91C7\u96C6\u9891\u7387",suffix:"ms"}))))):t.createElement(t.Fragment,null),(l==null?void 0:l.agreementCode)===2?t.createElement(t.Fragment,null,t.createElement("div",{className:a["mb-row2"]},t.createElement("div",{className:a["mbr-left"]},t.createElement(s.Item,{required:!0,label:"\u4E32\u53E3\u53F7"},t.createElement(A,{value:u.serialPort,onChange:(e,n)=>{p(m(o({},u),{serialPort:e.target?e.target.value:e}))},style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u4E32\u53E3\u53F7"},(ie=r==null?void 0:r.serial_port)==null?void 0:ie.map(e=>t.createElement(N,{key:e.typeCode,value:e.typeCode},e.typeName))))),t.createElement("div",{className:a["mbr-right"]},t.createElement(s.Item,{required:!0,label:"\u6CE2\u7279\u7387"},t.createElement(A,{value:u==null?void 0:u.baudRate,onChange:(e,n)=>{p(m(o({},u),{baudRate:e.target?e.target.value:e}))},style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u6CE2\u7279\u7387"},(se=r==null?void 0:r.baud_rate)==null?void 0:se.map(e=>t.createElement(N,{key:e.typeCode,value:e.typeCode},e.typeName)))))),t.createElement("div",{className:a["mb-row2"]},t.createElement("div",{className:a["mbr-left"]},t.createElement(s.Item,{required:!0,label:"\u6821\u9A8C\u4F4D"},t.createElement(A,{value:u==null?void 0:u.checkBit,onChange:(e,n)=>{p(m(o({},u),{checkBit:e.target?e.target.value:e}))},style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u6CE2\u7279\u7387"},(me=r==null?void 0:r.check_bit)==null?void 0:me.map(e=>t.createElement(N,{key:e.typeCode,value:e.typeCode},e.typeName))))),t.createElement("div",{className:a["mbr-right"]},t.createElement(s.Item,{required:!0,label:"\u6570\u636E\u4F4D"},t.createElement(A,{value:u==null?void 0:u.dataBit,onChange:(e,n)=>{p(m(o({},u),{dataBit:e.target?e.target.value:e}))},style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u6570\u636E\u4F4D"},(ce=r==null?void 0:r.data_bit)==null?void 0:ce.map(e=>t.createElement(N,{key:e.typeCode,value:e.typeCode},e.typeName)))))),t.createElement("div",{className:a["mb-row2"]},t.createElement("div",{className:a["mbr-left"]},t.createElement(s.Item,{required:!0,label:"\u505C\u6B62\u4F4D"},t.createElement(A,{value:u==null?void 0:u.stopBit,onChange:(e,n)=>{p(m(o({},u),{stopBit:e.target?e.target.value:e}))},style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u505C\u6B62\u4F4D"},(de=r==null?void 0:r.stop_bit)==null?void 0:de.map(e=>t.createElement(N,{key:e.typeCode,value:e.typeCode},e.typeName))))),t.createElement("div",{className:a["mbr-right"]},t.createElement(s.Item,{required:!0,label:"\u7AD9\u53F7"},t.createElement(E,{value:u==null?void 0:u.stationNumber,onChange:e=>{p(m(o({},u),{stationNumber:e.target?e.target.value:e}))},placeholder:"\u8BF7\u8F93\u7AD9\u53F7"}))))):t.createElement(t.Fragment,null),(l==null?void 0:l.agreementCode)===5?t.createElement(t.Fragment,null,t.createElement("div",{className:a["mb-row2"]},t.createElement("div",{className:a["mbr-left"]},t.createElement(s.Item,{required:!0,label:"\u540D\u79F0"},t.createElement(E,{value:u.ipAddress,onChange:e=>{p(m(o({},u),{ipAddress:e.target?e.target.value:e}))},placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"}))),t.createElement("div",{className:a["mbr-right"]},t.createElement(s.Item,{required:!0,label:"Client ID"},t.createElement(E,{value:u.portNumber,onChange:e=>{p(m(o({},u),{portNumber:e.target?e.target.value:e}))},placeholder:"\u8BF7\u8F93\u5165Client ID"})))),t.createElement("div",{className:a["mb-row2"]},t.createElement("div",{className:a["mbr-left"]},t.createElement(s.Item,{required:!0,label:"\u670D\u52A1\u5668\u5730\u5740"},t.createElement(E,{value:u.stationNumber,onChange:e=>{p(m(o({},u),{stationNumber:e.target?e.target.value:e}))},placeholder:"\u8BF7\u8F93\u5165\u670D\u52A1\u5668\u5730\u5740"}))),t.createElement("div",{className:a["mbr-right"]},t.createElement(s.Item,{required:!0,label:"\u7AEF\u53E3\u53F7"},t.createElement(E,{value:u.acquisitionFreq,onChange:e=>{p(m(o({},u),{acquisitionFreq:e.target?e.target.value:e}))},placeholder:"\u8BF7\u8F93\u7AEF\u53E3\u53F7"})))),t.createElement("div",{className:a["mb-row2"]},t.createElement("div",{className:a["mbr-left"]},t.createElement(s.Item,{required:!0,label:"\u7528\u6237\u540D"},t.createElement(E,{value:u.stationNumber,onChange:e=>{p(m(o({},u),{stationNumber:e.target?e.target.value:e}))},placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}))),t.createElement("div",{className:a["mbr-right"]},t.createElement(s.Item,{required:!0,label:"\u5BC6\u7801"},t.createElement(E,{value:u.acquisitionFreq,onChange:e=>{p(m(o({},u),{acquisitionFreq:e.target?e.target.value:e}))},placeholder:"\u8BF7\u8F93\u5BC6\u7801"})))),t.createElement("div",{className:a["mb-row2"]},t.createElement("div",{className:a["mbr-left"]},t.createElement(s.Item,{required:!0,label:"SSL/TSL"},t.createElement(mt,{defaultChecked:!0,onChange:e=>{console.log(e)}}))),t.createElement("div",{className:a["mbr-right"]}))):t.createElement(t.Fragment,null)):t.createElement(t.Fragment,null,t.createElement("div",{className:a["mb-row2"]},t.createElement("div",{className:a["mbr-left"]},t.createElement(s.Item,{required:!0,label:"IP\u5730\u5740"},t.createElement(E,{value:u.ipAddress,onChange:e=>{p(m(o({},u),{ipAddress:e.target?e.target.value:e}))},placeholder:"\u8BF7\u8F93\u5165IP\u5730\u5740"}))),t.createElement("div",{className:a["mbr-right"]},t.createElement(s.Item,{required:!0,label:"\u7AEF\u53E3\u53F7"},t.createElement(E,{value:u==null?void 0:u.portNumber,onChange:e=>{p(m(o({},u),{portNumber:e.target?e.target.value:e}))},placeholder:"\u8BF7\u8F93\u5165\u7AEF\u53E3\u53F7"})))),t.createElement("div",{className:a["mb-row2"]},t.createElement("div",{className:a["mbr-left"]},t.createElement(s.Item,{required:!0,label:"\u7AD9\u53F7"},t.createElement(E,{value:u==null?void 0:u.stationNumber,onChange:e=>{p(m(o({},u),{stationNumber:e.target?e.target.value:e}))},placeholder:"\u8BF7\u8F93\u5165\u7AD9\u53F7"}))),t.createElement("div",{className:a["mbr-right"]},t.createElement(s.Item,{required:!0,label:"\u91C7\u96C6\u9891\u7387"},t.createElement(E,{value:u==null?void 0:u.acquisitionFreq,onChange:e=>{p(m(o({},u),{acquisitionFreq:e.target?e.target.value:e}))},placeholder:"\u8BF7\u8F93\u91C7\u96C6\u9891\u7387",suffix:"ms"})))))):"",f.includes("\u7F16\u8F91\u70B9\u4F4D")||f.includes("\u65B0\u589E\u70B9\u4F4D")?t.createElement("div",{className:a["m-box"]},t.createElement("div",{className:a["mb-row2"]},t.createElement("div",{className:a["mbr-left"]},t.createElement(s.Item,{required:!0,label:"\u70B9\u4F4D\u540D"},t.createElement(E,{value:l.name,onChange:e=>{b(m(o({},l),{name:e.target?e.target.value:e}))},placeholder:"\u8BF7\u8F93\u5165\u70B9\u4F4D\u540D"}))),t.createElement("div",{className:a["mbr-right"]},t.createElement(s.Item,{required:!0,label:"\u70B9\u4F4D\u7C7B\u578B"},t.createElement(A,{value:l.pointType,onChange:e=>{b(m(o({},l),{pointType:e.target?e.target.value:e}))},style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u70B9\u4F4D\u7C7B\u578B"},(Ee=r==null?void 0:r.point_type)==null?void 0:Ee.map(e=>t.createElement(N,{key:e.typeCode,value:e.typeCode},e.typeName)))))),t.createElement("div",{className:a["mb-row2"]},t.createElement("div",{className:a["mbr-left"]},t.createElement(s.Item,{required:!0,label:"\u5BC4\u5B58\u5668\u7C7B\u578B"},t.createElement(A,{value:l.registerType,onChange:e=>{b(m(o({},l),{registerType:e.target?e.target.value:e}))},style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u5BC4\u5B58\u5668\u7C7B\u578B"},(pe=r==null?void 0:r.register_type)==null?void 0:pe.map(e=>t.createElement(N,{key:e.typeCode,value:e.typeCode},e.typeName))))),t.createElement("div",{className:a["mbr-right"]},t.createElement(s.Item,{required:!0,label:"\u7EBF\u6027\u8F6C\u6362"},t.createElement("div",{style:{display:"flex"}},t.createElement("div",{style:{flex:1}},t.createElement(E,{value:l.convertRatio,onChange:e=>{b(m(o({},l),{convertRatio:e.target?e.target.value:e}))},placeholder:"",prefix:"\u6BD4\u7387"})),t.createElement("div",{style:{flex:1}},t.createElement(E,{value:l.convertBenchmark,onChange:e=>{b(m(o({},l),{convertBenchmark:e.target?e.target.value:e}))},placeholder:"",prefix:"\u57FA\u51C6"})))))),t.createElement("div",{className:a["mb-row2"]},t.createElement("div",{className:a["mbr-left"]},t.createElement(s.Item,{required:!0,label:"\u5730\u5740"},t.createElement(E,{value:l.address,onChange:e=>{b(m(o({},l),{address:e.target?e.target.value:e}))},placeholder:"\u8BF7\u8F93\u5165\u5730\u5740"}))),t.createElement("div",{className:a["mbr-right"]},t.createElement(s.Item,{required:!0,label:"\u6570\u636E\u7C7B\u578B"},t.createElement(A,{value:l.dataType,onChange:e=>{b(m(o({},l),{dataType:e.target?e.target.value:e}))},style:{width:"100%"},placeholder:"\u8BF7\u9009\u62E9\u6570\u636E\u7C7B\u578B"},(ge=r==null?void 0:r.data_type)==null?void 0:ge.map(e=>t.createElement(N,{key:e.typeCode,value:e.typeCode},e.typeName)))))),t.createElement("div",{className:a["mb-row1"]},t.createElement(s.Item,{required:!1,label:"\u70B9\u4F4D\u8BF4\u660E"},t.createElement(It,{value:l.explain,onChange:e=>{b(m(o({},l),{explain:e.target?e.target.value:e}))},placeholder:"\u8BF7\u8F93\u5165\u70B9\u4F4D\u8BF4\u660E",rows:3}))),t.createElement("div",{className:a["mb-row1"]},t.createElement(s.Item,{required:!1,label:"\u5355\u4F4D"},t.createElement(E,{value:l.unit,onChange:e=>{b(m(o({},l),{unit:e.target?e.target.value:e}))},placeholder:"\u8BF7\u8F93\u5165\u5355\u4F4D"})))):"",f.includes("\u70B9\u4F4D\u4E0B\u53D1")?t.createElement("div",{className:a["m-box"]},t.createElement("div",{className:a["mb-row1"]},t.createElement(s.Item,{required:!0,label:"\u4E0B\u53D1\u6570\u503C"},t.createElement(E,{value:l.value,onChange:e=>{b(m(o({},l),{value:e.target?e.target.value:e}))},placeholder:"\u8BF7\u8F93\u5165\u4E0B\u53D1\u6570\u503C"})))):"")))};var Ht=tt(({common:d,select:i})=>({common:d,select:i}))(Rt);export{Ht as default};