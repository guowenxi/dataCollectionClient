import{aZ as me,_ as s,C as q,f as $,e as v,d as i,g as L,N as te,b as ve,i as pe}from"./index.353dd2ef.js";function Z(o){return me.includes(o)}var de=function(e){var n,t=e.className,r=e.prefixCls,p=e.style,a=e.color,d=e.children,x=e.text,l=e.placement,S=l===void 0?"end":l,m=s.exports.useContext(q),w=m.getPrefixCls,P=m.direction,u=w("ribbon",r),C=Z(a),b=$(u,"".concat(u,"-placement-").concat(S),(n={},v(n,"".concat(u,"-rtl"),P==="rtl"),v(n,"".concat(u,"-color-").concat(a),C),n),t),g={},y={};return a&&!C&&(g.background=a,y.color=a),s.exports.createElement("div",{className:"".concat(u,"-wrapper")},d,s.exports.createElement("div",{className:b,style:i(i({},g),p)},s.exports.createElement("span",{className:"".concat(u,"-text")},x),s.exports.createElement("div",{className:"".concat(u,"-corner"),style:y})))},xe=de;function ee(o){var e=o.prefixCls,n=o.value,t=o.current,r=o.offset,p=r===void 0?0:r,a;return p&&(a={position:"absolute",top:"".concat(p,"00%"),left:0}),s.exports.createElement("span",{style:a,className:$("".concat(e,"-only-unit"),{current:t})},n)}function Ce(o,e,n){for(var t=o,r=0;(t+10)%10!==e;)t+=n,r+=n;return r}function ye(o){var e=o.prefixCls,n=o.count,t=o.value,r=Number(t),p=Math.abs(n),a=s.exports.useState(r),d=L(a,2),x=d[0],l=d[1],S=s.exports.useState(p),m=L(S,2),w=m[0],P=m[1],u=function(){l(r),P(p)};s.exports.useEffect(function(){var N=setTimeout(function(){u()},1e3);return function(){clearTimeout(N)}},[r]);var C,b;if(x===r||Number.isNaN(r)||Number.isNaN(x))C=[s.exports.createElement(ee,i({},o,{key:r,current:!0}))],b={transition:"none"};else{C=[];for(var g=r+10,y=[],f=r;f<=g;f+=1)y.push(f);var E=y.findIndex(function(N){return N%10===x});C=y.map(function(N,R){var D=N%10;return s.exports.createElement(ee,i({},o,{key:N,value:D,offset:R-E,current:R===E}))});var _=w<p?1:-1;b={transform:"translateY(".concat(-Ce(x,r,_),"00%)")}}return s.exports.createElement("span",{className:"".concat(e,"-only"),style:b,onTransitionEnd:u},C)}var be=globalThis&&globalThis.__rest||function(o,e){var n={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&e.indexOf(t)<0&&(n[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(o);r<t.length;r++)e.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(o,t[r])&&(n[t[r]]=o[t[r]]);return n},Ne=function(e){var n=e.prefixCls,t=e.count,r=e.className,p=e.motionClassName,a=e.style,d=e.title,x=e.show,l=e.component,S=l===void 0?"sup":l,m=e.children,w=be(e,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),P=s.exports.useContext(q),u=P.getPrefixCls,C=u("scroll-number",n),b=i(i({},w),{"data-show":x,style:a,className:$(C,r,p),title:d}),g=t;if(t&&Number(t)%1===0){var y=String(t).split("");g=y.map(function(f,E){return s.exports.createElement(ye,{prefixCls:C,count:Number(t),value:f,key:y.length-E})})}return a&&a.borderColor&&(b.style=i(i({},a),{boxShadow:"0 0 0 1px ".concat(a.borderColor," inset")})),m?te(m,function(f){return{className:$("".concat(C,"-custom-component"),f==null?void 0:f.className,p)}}):s.exports.createElement(S,b,g)},ge=Ne,he=globalThis&&globalThis.__rest||function(o,e){var n={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&e.indexOf(t)<0&&(n[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(o);r<t.length;r++)e.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(o,t[r])&&(n[t[r]]=o[t[r]]);return n},re=function(e){var n,t,r=e.prefixCls,p=e.scrollNumberPrefixCls,a=e.children,d=e.status,x=e.text,l=e.color,S=e.count,m=S===void 0?null:S,w=e.overflowCount,P=w===void 0?99:w,u=e.dot,C=u===void 0?!1:u,b=e.size,g=b===void 0?"default":b,y=e.title,f=e.offset,E=e.style,_=e.className,N=e.showZero,R=N===void 0?!1:N,D=he(e,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),F=s.exports.useContext(q),G=F.getPrefixCls,A=F.direction,c=G("badge",r),V=m>P?"".concat(P,"+"):m,I=V==="0"||V===0,oe=m===null||I&&!R,U=(d!=null||l!=null)&&oe,k=C&&!I,T=k?"":V,j=s.exports.useMemo(function(){var h=T==null||T==="";return(h||I&&!R)&&!k},[T,I,R,k]),J=s.exports.useRef(m);j||(J.current=m);var z=J.current,K=s.exports.useRef(T);j||(K.current=T);var H=K.current,Q=s.exports.useRef(k);j||(Q.current=k);var B=s.exports.useMemo(function(){if(!f)return i({},E);var h={marginTop:f[1]};return A==="rtl"?h.left=parseInt(f[0],10):h.right=-parseInt(f[0],10),i(i({},h),E)},[A,f,E]),se=y!=null?y:typeof z=="string"||typeof z=="number"?z:void 0,ne=j||!x?null:s.exports.createElement("span",{className:"".concat(c,"-status-text")},x),ae=!z||ve(z)!=="object"?void 0:te(z,function(h){return{style:i(i({},B),h.style)}}),le=$((n={},v(n,"".concat(c,"-status-dot"),U),v(n,"".concat(c,"-status-").concat(d),!!d),v(n,"".concat(c,"-status-").concat(l),Z(l)),n)),W={};l&&!Z(l)&&(W.background=l);var X=$(c,(t={},v(t,"".concat(c,"-status"),U),v(t,"".concat(c,"-not-a-wrapper"),!a),v(t,"".concat(c,"-rtl"),A==="rtl"),t),_);if(!a&&U){var ce=B.color;return s.exports.createElement("span",i({},D,{className:X,style:B}),s.exports.createElement("span",{className:le,style:W}),x&&s.exports.createElement("span",{style:{color:ce},className:"".concat(c,"-status-text")},x))}return s.exports.createElement("span",i({},D,{className:X}),a,s.exports.createElement(pe,{visible:!j,motionName:"".concat(c,"-zoom"),motionAppear:!1,motionDeadline:1e3},function(h){var O,ie=h.className,ue=G("scroll-number",p),Y=Q.current,fe=$((O={},v(O,"".concat(c,"-dot"),Y),v(O,"".concat(c,"-count"),!Y),v(O,"".concat(c,"-count-sm"),g==="small"),v(O,"".concat(c,"-multiple-words"),!Y&&H&&H.toString().length>1),v(O,"".concat(c,"-status-").concat(d),!!d),v(O,"".concat(c,"-status-").concat(l),Z(l)),O)),M=i({},B);return l&&!Z(l)&&(M=M||{},M.background=l),s.exports.createElement(ge,{prefixCls:ue,show:!j,motionClassName:ie,className:fe,count:H,title:se,style:M,key:"scrollNumber"},ae)}),ne)};re.Ribbon=xe;var we=re;export{we as B};
