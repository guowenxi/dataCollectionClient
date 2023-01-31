import{_ as n,K as Ce,h as I,B as V,e as u,aO as J,C as U,g as X,f as M,a9 as ve,aP as xe,a3 as j,V as ee,aQ as te,Z as ge,aR as ye,i as F,aS as ke,aT as Pe,aU as ne,aV as Te,aW as be,aX as he,aY as pe,x as Ee}from"./index.1744db00.js";import{i as we,f as Oe}from"./index.94ba65ab.js";function G(t){return!!(t&&!!t.then)}var Ne=function(e){var r=n.exports.useRef(!1),o=n.exports.useRef(null),a=Ce(!1),i=I(a,2),v=i[0],g=i[1],c=e.close,m=function(){c==null||c.apply(void 0,arguments)};n.exports.useEffect(function(){var f=null;return e.autoFocus&&(f=setTimeout(function(){var s;(s=o.current)===null||s===void 0||s.focus()})),function(){f&&clearTimeout(f)}},[]);var d=function(s){!G(s)||(g(!0),s.then(function(){g(!1,!0),m.apply(void 0,arguments),r.current=!1},function(k){console.error(k),g(!1,!0),r.current=!1}))},l=function(s){var k=e.actionFn;if(!r.current){if(r.current=!0,!k){m();return}var x;if(e.emitEvent){if(x=k(s),e.quitOnNullishReturnValue&&!G(x)){r.current=!1,m(s);return}}else if(k.length)x=k(c),r.current=!1;else if(x=k(),!x){m();return}d(x)}},C=e.type,y=e.children,T=e.prefixCls,b=e.buttonProps;return n.exports.createElement(V,u({},J(C),{onClick:l,loading:v,prefixCls:T},b,{ref:o}),y)},K=Ne,Se=globalThis&&globalThis.__rest||function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(t);a<o.length;a++)e.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(t,o[a])&&(r[o[a]]=t[o[a]]);return r},Y,_e=function(e){Y={x:e.pageX,y:e.pageY},setTimeout(function(){Y=null},100)};we()&&document.documentElement.addEventListener("click",_e,!0);var Re=function(e){var r,o,a=n.exports.useContext(U),i=a.getPopupContainer,v=a.getPrefixCls,g=a.direction,c=function(P){var p=e.onCancel;p==null||p(P)},m=function(P){var p=e.onOk;p==null||p(P)},d=e.prefixCls,l=e.footer,C=e.visible,y=e.open,T=y===void 0?!1:y,b=e.wrapClassName,f=e.centered,s=e.getContainer,k=e.closeIcon,x=e.focusTriggerAfterClose,O=x===void 0?!0:x,h=e.width,N=h===void 0?520:h,S=Se(e,["prefixCls","footer","visible","open","wrapClassName","centered","getContainer","closeIcon","focusTriggerAfterClose","width"]),E=v("modal",d),A=v(),L=n.exports.createElement(ee,{componentName:"Modal",defaultLocale:te()},function(_){var P=e.okText,p=e.okType,H=p===void 0?"primary":p,W=e.cancelText,B=e.confirmLoading,Q=B===void 0?!1:B;return n.exports.createElement(n.exports.Fragment,null,n.exports.createElement(V,u({onClick:c},e.cancelButtonProps),W||_.cancelText),n.exports.createElement(V,u({},J(H),{loading:Q,onClick:m},e.okButtonProps),P!=null?P:_.okText))}),z=n.exports.createElement("span",{className:"".concat(E,"-close-x")},k||n.exports.createElement(ge,{className:"".concat(E,"-close-icon")})),D=X(b,(r={},M(r,"".concat(E,"-centered"),!!f),M(r,"".concat(E,"-wrap-rtl"),g==="rtl"),r));return n.exports.createElement(ve,null,n.exports.createElement(Oe,{status:!0,override:!0},n.exports.createElement(xe,u({width:N},S,{getContainer:s===void 0?i:s,prefixCls:E,wrapClassName:D,footer:l===void 0?L:l,visible:T||C,mousePosition:(o=S.mousePosition)!==null&&o!==void 0?o:Y,onClose:c,closeIcon:z,focusTriggerAfterClose:O,transitionName:j(A,"zoom",e.transitionName),maskTransitionName:j(A,"fade",e.maskTransitionName)}))))},oe=Re,Fe=function(e){var r=e.icon,o=e.onCancel,a=e.onOk,i=e.close,v=e.zIndex,g=e.afterClose,c=e.visible,m=e.open,d=e.keyboard,l=e.centered,C=e.getContainer,y=e.maskStyle,T=e.okText,b=e.okButtonProps,f=e.cancelText,s=e.cancelButtonProps,k=e.direction,x=e.prefixCls,O=e.wrapClassName,h=e.rootPrefixCls,N=e.iconPrefixCls,S=e.bodyStyle,E=e.closable,A=E===void 0?!1:E,L=e.closeIcon,z=e.modalRender,D=e.focusTriggerAfterClose,_=e.okType||"primary",P="".concat(x,"-confirm"),p="okCancel"in e?e.okCancel:!0,H=e.width||416,W=e.style||{},B=e.mask===void 0?!0:e.mask,Q=e.maskClosable===void 0?!1:e.maskClosable,q=e.autoFocusButton===null?!1:e.autoFocusButton||"ok",de=X(P,"".concat(P,"-").concat(e.type),M({},"".concat(P,"-rtl"),k==="rtl"),e.className),me=p&&n.exports.createElement(K,{actionFn:o,close:i,autoFocus:q==="cancel",buttonProps:s,prefixCls:"".concat(h,"-btn")},f);return n.exports.createElement(ye,{prefixCls:h,iconPrefixCls:N,direction:k},n.exports.createElement(oe,{prefixCls:x,className:de,wrapClassName:X(M({},"".concat(P,"-centered"),!!e.centered),O),onCancel:function(){return i==null?void 0:i({triggerCancel:!0})},open:m||c,title:"",footer:"",transitionName:j(h,"zoom",e.transitionName),maskTransitionName:j(h,"fade",e.maskTransitionName),mask:B,maskClosable:Q,maskStyle:y,style:W,bodyStyle:S,width:H,zIndex:v,afterClose:g,keyboard:d,centered:l,getContainer:C,closable:A,closeIcon:L,modalRender:z,focusTriggerAfterClose:D},n.exports.createElement("div",{className:"".concat(P,"-body-wrapper")},n.exports.createElement("div",{className:"".concat(P,"-body")},r,e.title===void 0?null:n.exports.createElement("span",{className:"".concat(P,"-title")},e.title),n.exports.createElement("div",{className:"".concat(P,"-content")},e.content)),n.exports.createElement("div",{className:"".concat(P,"-btns")},me,n.exports.createElement(K,{type:_,actionFn:a,close:i,autoFocus:q==="ok",buttonProps:b,prefixCls:"".concat(h,"-btn")},T)))))},re=Fe,Ie=[],R=Ie,$e=globalThis&&globalThis.__rest||function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(t);a<o.length;a++)e.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(t,o[a])&&(r[o[a]]=t[o[a]]);return r},ae="";function Ae(){return ae}function $(t){var e=document.createDocumentFragment(),r=u(u({},t),{close:v,open:!0}),o;function a(){for(var c=arguments.length,m=new Array(c),d=0;d<c;d++)m[d]=arguments[d];var l=m.some(function(T){return T&&T.triggerCancel});t.onCancel&&l&&t.onCancel.apply(t,[function(){}].concat(F(m.slice(1))));for(var C=0;C<R.length;C++){var y=R[C];if(y===v){R.splice(C,1);break}}ke(e)}function i(c){var m=c.okText,d=c.cancelText,l=c.prefixCls,C=$e(c,["okText","cancelText","prefixCls"]);clearTimeout(o),o=setTimeout(function(){var y=te(),T=pe(),b=T.getPrefixCls,f=T.getIconPrefixCls,s=b(void 0,Ae()),k=l||"".concat(s,"-modal"),x=f();Pe(n.exports.createElement(re,u({},C,{prefixCls:k,rootPrefixCls:s,iconPrefixCls:x,okText:m||(C.okCancel?y.okText:y.justOkText),cancelText:d||y.cancelText})),e)})}function v(){for(var c=this,m=arguments.length,d=new Array(m),l=0;l<m;l++)d[l]=arguments[l];r=u(u({},r),{open:!1,afterClose:function(){typeof t.afterClose=="function"&&t.afterClose(),a.apply(c,d)}}),r.visible&&delete r.visible,i(r)}function g(c){typeof c=="function"?r=c(r):r=u(u({},r),c),i(r)}return i(r),R.push(v),{destroy:v,update:g}}function le(t){return u(u({icon:n.exports.createElement(ne,null),okCancel:!1},t),{type:"warning"})}function ce(t){return u(u({icon:n.exports.createElement(Te,null),okCancel:!1},t),{type:"info"})}function ie(t){return u(u({icon:n.exports.createElement(be,null),okCancel:!1},t),{type:"success"})}function se(t){return u(u({icon:n.exports.createElement(he,null),okCancel:!1},t),{type:"error"})}function ue(t){return u(u({icon:n.exports.createElement(ne,null),okCancel:!0},t),{type:"confirm"})}function Be(t){var e=t.rootPrefixCls;ae=e}function Me(){var t=n.exports.useState([]),e=I(t,2),r=e[0],o=e[1],a=n.exports.useCallback(function(i){return o(function(v){return[].concat(F(v),[i])}),function(){o(function(v){return v.filter(function(g){return g!==i})})}},[]);return[r,a]}var je=function(e,r){var o=e.afterClose,a=e.config,i=n.exports.useState(!0),v=I(i,2),g=v[0],c=v[1],m=n.exports.useState(a),d=I(m,2),l=d[0],C=d[1],y=n.exports.useContext(U),T=y.direction,b=y.getPrefixCls,f=b("modal"),s=b(),k=function(){c(!1);for(var O=arguments.length,h=new Array(O),N=0;N<O;N++)h[N]=arguments[N];var S=h.some(function(E){return E&&E.triggerCancel});l.onCancel&&S&&l.onCancel.apply(l,[function(){}].concat(F(h.slice(1))))};return n.exports.useImperativeHandle(r,function(){return{destroy:k,update:function(O){C(function(h){return u(u({},h),O)})}}}),n.exports.createElement(ee,{componentName:"Modal",defaultLocale:Ee.Modal},function(x){return n.exports.createElement(re,u({prefixCls:f,rootPrefixCls:s},l,{close:k,open:g,afterClose:o,okText:l.okText||(l.okCancel?x.okText:x.justOkText),direction:T,cancelText:l.cancelText||x.cancelText}))})},Le=n.exports.forwardRef(je),Z=0,ze=n.exports.memo(n.exports.forwardRef(function(t,e){var r=Me(),o=I(r,2),a=o[0],i=o[1];return n.exports.useImperativeHandle(e,function(){return{patchElement:i}},[]),n.exports.createElement(n.exports.Fragment,null,a)}));function De(){var t=n.exports.useRef(null),e=n.exports.useState([]),r=I(e,2),o=r[0],a=r[1];n.exports.useEffect(function(){if(o.length){var g=F(o);g.forEach(function(c){c()}),a([])}},[o]);var i=n.exports.useCallback(function(g){return function(m){var d;Z+=1;var l=n.exports.createRef(),C,y=n.exports.createElement(Le,{key:"modal-".concat(Z),config:g(m),ref:l,afterClose:function(){C==null||C()}});return C=(d=t.current)===null||d===void 0?void 0:d.patchElement(y),{destroy:function(){function b(){var f;(f=l.current)===null||f===void 0||f.destroy()}l.current?b():a(function(f){return[].concat(F(f),[b])})},update:function(b){function f(){var s;(s=l.current)===null||s===void 0||s.update(b)}l.current?f():a(function(s){return[].concat(F(s),[f])})}}}},[]),v=n.exports.useMemo(function(){return{info:i(ce),success:i(ie),error:i(se),warning:i(le),confirm:i(ue)}},[]);return[v,n.exports.createElement(ze,{ref:t})]}function fe(t){return $(le(t))}var w=oe;w.useModal=De;w.info=function(e){return $(ce(e))};w.success=function(e){return $(ie(e))};w.error=function(e){return $(se(e))};w.warning=fe;w.warn=fe;w.confirm=function(e){return $(ue(e))};w.destroyAll=function(){for(;R.length;){var e=R.pop();e&&e()}};w.config=Be;var Ve=w;export{K as A,Ve as M};