import{_ as s,Y as T,a3 as j,h as K,g as I,f,X as S,C as $,S as R,D as M,aQ as W,e as A,G}from"./index.8d62fabd.js";var O=s.exports.forwardRef(function(e,c){var t,a=e.prefixCls,n=a===void 0?"rc-switch":a,i=e.className,d=e.checked,m=e.defaultChecked,C=e.disabled,b=e.loadingIcon,v=e.checkedChildren,k=e.unCheckedChildren,h=e.onClick,u=e.onChange,p=e.onKeyDown,w=T(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),r=j(!1,{value:d,defaultValue:m}),x=K(r,2),l=x[0],E=x[1];function y(o,N){var g=l;return C||(g=o,E(g),u==null||u(g,N)),g}function P(o){o.which===S.LEFT?y(!1,o):o.which===S.RIGHT&&y(!0,o),p==null||p(o)}function _(o){var N=y(!l,o);h==null||h(N,o)}var z=I(n,i,(t={},f(t,"".concat(n,"-checked"),l),f(t,"".concat(n,"-disabled"),C),t));return s.exports.createElement("button",Object.assign({},w,{type:"button",role:"switch","aria-checked":l,disabled:C,className:z,ref:c,onKeyDown:P,onClick:_}),b,s.exports.createElement("span",{className:"".concat(n,"-inner")},l?v:k))});O.displayName="Switch";var H=globalThis&&globalThis.__rest||function(e,c){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&c.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)c.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t},D=s.exports.forwardRef(function(e,c){var t,a=e.prefixCls,n=e.size,i=e.disabled,d=e.loading,m=e.className,C=m===void 0?"":m,b=H(e,["prefixCls","size","disabled","loading","className"]),v=s.exports.useContext($),k=v.getPrefixCls,h=v.direction,u=s.exports.useContext(R),p=s.exports.useContext(M),w=(i!=null?i:p)||d,r=k("switch",a),x=s.exports.createElement("div",{className:"".concat(r,"-handle")},d&&s.exports.createElement(G,{className:"".concat(r,"-loading-icon")})),l=I((t={},f(t,"".concat(r,"-small"),(n||u)==="small"),f(t,"".concat(r,"-loading"),d),f(t,"".concat(r,"-rtl"),h==="rtl"),t),C);return s.exports.createElement(W,{insertExtraNode:!0},s.exports.createElement(O,A({},b,{prefixCls:r,className:l,disabled:w,ref:c,loadingIcon:x})))});D.__ANT_SWITCH=!0;var F=D;export{F as S};
//# sourceMappingURL=index.158b3d17.js.map