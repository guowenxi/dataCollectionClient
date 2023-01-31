import{_ as f,ax as J,b9 as K}from"./index.3b0f1d22.js";const ee=t=>(e,n)=>{const r=f.exports.useRef(!1);t(()=>()=>{r.current=!1},[]),t(()=>{if(!r.current)r.current=!0;else return e()},n)};function D(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function te(t,e,n,r){function i(s){return s instanceof n?s:new n(function(c){c(s)})}return new(n||(n=Promise))(function(s,c){function l(o){try{d(r.next(o))}catch(a){c(a)}}function u(o){try{d(r.throw(o))}catch(a){c(a)}}function d(o){o.done?s(o.value):i(o.value).then(l,u)}d((r=r.apply(t,e||[])).next())})}const M=t=>typeof t=="function",ne=!1;var q=ne;function R(t){q&&(M(t)||console.error(`useMemoizedFn expected parameter is a function, got ${typeof t}`));const e=f.exports.useRef(t);e.current=f.exports.useMemo(()=>t,[t]);const n=f.exports.useRef();return n.current||(n.current=function(...r){return e.current.apply(this,r)}),n.current}var j=ee(f.exports.useEffect);const Q=(t,{manual:e,ready:n=!0,defaultParams:r=[],refreshDeps:i=[],refreshDepsAction:s})=>{const c=f.exports.useRef(!1);return c.current=!1,j(()=>{!e&&n&&(c.current=!0,t.run(...r))},[n]),j(()=>{c.current||e||(c.current=!0,s?s():t.refresh())},[...i]),{onBefore:()=>{if(!n)return{stopNow:!0}}}};Q.onInit=({ready:t=!0,manual:e})=>({loading:!e&&t});var re=Q;function se(t,e){if(t===e)return!0;for(let n=0;n<t.length;n++)if(!Object.is(t[n],e[n]))return!1;return!0}function Y(t,e){const{current:n}=f.exports.useRef({deps:e,obj:void 0,initialized:!1});return(n.initialized===!1||!se(n.deps,e))&&(n.deps=e,n.obj=t(),n.initialized=!0),n.obj}function Z(t){const e=f.exports.useRef(t);return e.current=t,e}const ie=t=>{q&&(M(t)||console.error(`useUnmount expected parameter is a function, got ${typeof t}`));const e=Z(t);f.exports.useEffect(()=>()=>{e.current()},[])};var L=ie;const $=new Map,ue=(t,e,n)=>{const r=$.get(t);r!=null&&r.timer&&clearTimeout(r.timer);let i;e>-1&&(i=setTimeout(()=>{$.delete(t)},e)),$.set(t,Object.assign(Object.assign({},n),{timer:i}))},oe=t=>$.get(t),z=new Map,ae=t=>z.get(t),ce=(t,e)=>{z.set(t,e),e.then(n=>(z.delete(t),n)).catch(()=>{z.delete(t)})},_={},le=(t,e)=>{_[t]&&_[t].forEach(n=>n(e))},N=(t,e)=>(_[t]||(_[t]=[]),_[t].push(e),function(){const r=_[t].indexOf(e);_[t].splice(r,1)}),fe=(t,{cacheKey:e,cacheTime:n=5*60*1e3,staleTime:r=0,setCache:i,getCache:s})=>{const c=f.exports.useRef(),l=f.exports.useRef(),u=(o,a)=>{i?i(a):ue(o,n,a),le(o,a.data)},d=(o,a=[])=>s?s(a):oe(o);return Y(()=>{if(!e)return;const o=d(e);o&&Object.hasOwnProperty.call(o,"data")&&(t.state.data=o.data,t.state.params=o.params,(r===-1||new Date().getTime()-o.time<=r)&&(t.state.loading=!1)),c.current=N(e,a=>{t.setState({data:a})})},[]),L(()=>{var o;(o=c.current)===null||o===void 0||o.call(c)}),e?{onBefore:o=>{const a=d(e,o);return!a||!Object.hasOwnProperty.call(a,"data")?{}:r===-1||new Date().getTime()-a.time<=r?{loading:!1,data:a==null?void 0:a.data,error:void 0,returnNow:!0}:{data:a==null?void 0:a.data,error:void 0}},onRequest:(o,a)=>{let g=ae(e);return g&&g!==l.current?{servicePromise:g}:(g=o(...a),l.current=g,ce(e,g),{servicePromise:g})},onSuccess:(o,a)=>{var g;e&&((g=c.current)===null||g===void 0||g.call(c),u(e,{data:o,params:a,time:new Date().getTime()}),c.current=N(e,b=>{t.setState({data:b})}))},onMutate:o=>{var a;e&&((a=c.current)===null||a===void 0||a.call(c),u(e,{data:o,params:t.state.params,time:new Date().getTime()}),c.current=N(e,g=>{t.setState({data:g})}))}}:{}};var de=fe;const ge=(t,{debounceWait:e,debounceLeading:n,debounceTrailing:r,debounceMaxWait:i})=>{const s=f.exports.useRef(),c=f.exports.useMemo(()=>{const l={};return n!==void 0&&(l.leading=n),r!==void 0&&(l.trailing=r),i!==void 0&&(l.maxWait=i),l},[n,r,i]);return f.exports.useEffect(()=>{if(e){const l=t.runAsync.bind(t);return s.current=J(u=>{u()},e,c),t.runAsync=(...u)=>new Promise((d,o)=>{var a;(a=s.current)===null||a===void 0||a.call(s,()=>{l(...u).then(d).catch(o)})}),()=>{var u;(u=s.current)===null||u===void 0||u.cancel(),t.runAsync=l}}},[e,c]),e?{onCancel:()=>{var l;(l=s.current)===null||l===void 0||l.cancel()}}:{}};var ve=ge;const pe=(t,{loadingDelay:e})=>{const n=f.exports.useRef();if(!e)return{};const r=()=>{n.current&&clearTimeout(n.current)};return{onBefore:()=>(r(),n.current=setTimeout(()=>{t.setState({loading:!0})},e),{loading:!1}),onFinally:()=>{r()},onCancel:()=>{r()}}};var me=pe;const he=!!(typeof window!="undefined"&&window.document&&window.document.createElement);var B=he;function X(){return B?document.visibilityState!=="hidden":!0}const S=[];function be(t){return S.push(t),function(){const n=S.indexOf(t);S.splice(n,1)}}if(B){const t=()=>{if(!!X())for(let e=0;e<S.length;e++){const n=S[e];n()}};window.addEventListener("visibilitychange",t,!1)}const Pe=(t,{pollingInterval:e,pollingWhenHidden:n=!0,pollingErrorRetryCount:r=-1})=>{const i=f.exports.useRef(),s=f.exports.useRef(),c=f.exports.useRef(0),l=()=>{var u;i.current&&clearTimeout(i.current),(u=s.current)===null||u===void 0||u.call(s)};return j(()=>{e||l()},[e]),e?{onBefore:()=>{l()},onError:()=>{c.current+=1},onSuccess:()=>{c.current=0},onFinally:()=>{r===-1||r!==-1&&c.current<=r?i.current=setTimeout(()=>{!n&&!X()?s.current=be(()=>{t.refresh()}):t.refresh()},e):c.current=0},onCancel:()=>{l()}}:{}};var Re=Pe;function Oe(t,e){let n=!1;return(...r)=>{n||(n=!0,t(...r),setTimeout(()=>{n=!1},e))}}function xe(){return B&&typeof navigator.onLine!="undefined"?navigator.onLine:!0}const F=[];function _e(t){return F.push(t),function(){const n=F.indexOf(t);n>-1&&F.splice(n,1)}}if(B){const t=()=>{if(!(!X()||!xe()))for(let e=0;e<F.length;e++){const n=F[e];n()}};window.addEventListener("visibilitychange",t,!1),window.addEventListener("focus",t,!1)}const we=(t,{refreshOnWindowFocus:e,focusTimespan:n=5e3})=>{const r=f.exports.useRef(),i=()=>{var s;(s=r.current)===null||s===void 0||s.call(r)};return f.exports.useEffect(()=>{if(e){const s=Oe(t.refresh.bind(t),n);r.current=_e(()=>{s()})}return()=>{i()}},[e,n]),L(()=>{i()}),{}};var je=we;const Se=(t,{retryInterval:e,retryCount:n})=>{const r=f.exports.useRef(),i=f.exports.useRef(0),s=f.exports.useRef(!1);return n?{onBefore:()=>{s.current||(i.current=0),s.current=!1,r.current&&clearTimeout(r.current)},onSuccess:()=>{i.current=0},onError:()=>{if(i.current+=1,n===-1||i.current<=n){const c=e!=null?e:Math.min(1e3*Math.pow(2,i.current),3e4);r.current=setTimeout(()=>{s.current=!0,t.refresh()},c)}else i.current=0},onCancel:()=>{i.current=0,r.current&&clearTimeout(r.current)}}:{}};var Fe=Se,ye=J,Ae=K,Ce="Expected a function";function Ee(t,e,n){var r=!0,i=!0;if(typeof t!="function")throw new TypeError(Ce);return Ae(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),ye(t,e,{leading:r,maxWait:e,trailing:i})}var Te=Ee;const $e=(t,{throttleWait:e,throttleLeading:n,throttleTrailing:r})=>{const i=f.exports.useRef(),s={};return n!==void 0&&(s.leading=n),r!==void 0&&(s.trailing=r),f.exports.useEffect(()=>{if(e){const c=t.runAsync.bind(t);return i.current=Te(l=>{l()},e,s),t.runAsync=(...l)=>new Promise((u,d)=>{var o;(o=i.current)===null||o===void 0||o.call(i,()=>{c(...l).then(u).catch(d)})}),()=>{var l;t.runAsync=c,(l=i.current)===null||l===void 0||l.cancel()}}},[e,n,r]),e?{onCancel:()=>{var c;(c=i.current)===null||c===void 0||c.cancel()}}:{}};var ze=$e;const De=t=>{q&&(M(t)||console.error(`useMount: parameter \`fn\` expected to be a function, but got "${typeof t}".`)),f.exports.useEffect(()=>{t==null||t()},[])};var Me=De;const Be=()=>{const[,t]=f.exports.useState({});return f.exports.useCallback(()=>t({}),[])};var Ve=Be;class He{constructor(e,n,r,i={}){this.serviceRef=e,this.options=n,this.subscribe=r,this.initState=i,this.count=0,this.state={loading:!1,params:void 0,data:void 0,error:void 0},this.state=Object.assign(Object.assign(Object.assign({},this.state),{loading:!n.manual}),i)}setState(e={}){this.state=Object.assign(Object.assign({},this.state),e),this.subscribe()}runPluginHandler(e,...n){const r=this.pluginImpls.map(i=>{var s;return(s=i[e])===null||s===void 0?void 0:s.call(i,...n)}).filter(Boolean);return Object.assign({},...r)}runAsync(...e){var n,r,i,s,c,l,u,d,o,a;return te(this,void 0,void 0,function*(){this.count+=1;const g=this.count,b=this.runPluginHandler("onBefore",e),{stopNow:O=!1,returnNow:w=!1}=b,m=D(b,["stopNow","returnNow"]);if(O)return new Promise(()=>{});if(this.setState(Object.assign({loading:!0,params:e},m)),w)return Promise.resolve(m.data);(r=(n=this.options).onBefore)===null||r===void 0||r.call(n,e);try{let{servicePromise:h}=this.runPluginHandler("onRequest",this.serviceRef.current,e);h||(h=this.serviceRef.current(...e));const P=yield h;return g!==this.count?new Promise(()=>{}):(this.setState({data:P,error:void 0,loading:!1}),(s=(i=this.options).onSuccess)===null||s===void 0||s.call(i,P,e),this.runPluginHandler("onSuccess",P,e),(l=(c=this.options).onFinally)===null||l===void 0||l.call(c,e,P,void 0),g===this.count&&this.runPluginHandler("onFinally",e,P,void 0),P)}catch(h){if(g!==this.count)return new Promise(()=>{});throw this.setState({error:h,loading:!1}),(d=(u=this.options).onError)===null||d===void 0||d.call(u,h,e),this.runPluginHandler("onError",h,e),(a=(o=this.options).onFinally)===null||a===void 0||a.call(o,e,void 0,h),g===this.count&&this.runPluginHandler("onFinally",e,void 0,h),h}})}run(...e){this.runAsync(...e).catch(n=>{this.options.onError||console.error(n)})}cancel(){this.count+=1,this.setState({loading:!1}),this.runPluginHandler("onCancel")}refresh(){this.run(...this.state.params||[])}refreshAsync(){return this.runAsync(...this.state.params||[])}mutate(e){const n=M(e)?e(this.state.data):e;this.runPluginHandler("onMutate",n),this.setState({data:n})}}function Ue(t,e={},n=[]){const{manual:r=!1}=e,i=D(e,["manual"]),s=Object.assign({manual:r},i),c=Z(t),l=Ve(),u=Y(()=>{const d=n.map(o=>{var a;return(a=o==null?void 0:o.onInit)===null||a===void 0?void 0:a.call(o,s)}).filter(Boolean);return new He(c,s,l,Object.assign({},...d))},[]);return u.options=s,u.pluginImpls=n.map(d=>d(u,s)),Me(()=>{if(!r){const d=u.state.params||e.defaultParams||[];u.run(...d)}}),L(()=>{u.cancel()}),{loading:u.state.loading,data:u.state.data,error:u.state.error,params:u.state.params||[],cancel:R(u.cancel.bind(u)),refresh:R(u.refresh.bind(u)),refreshAsync:R(u.refreshAsync.bind(u)),run:R(u.run.bind(u)),runAsync:R(u.runAsync.bind(u)),mutate:R(u.mutate.bind(u))}}function Ne(t,e,n){return Ue(t,e,[...n||[],ve,me,Re,je,ze,re,de,Fe])}const qe=(t,e={})=>{var n;const{defaultPageSize:r=10,defaultCurrent:i=1}=e,s=D(e,["defaultPageSize","defaultCurrent"]),c=Ne(t,Object.assign({defaultParams:[{current:i,pageSize:r}],refreshDepsAction:()=>{g(1)}},s)),{current:l=1,pageSize:u=r}=c.params[0]||{},d=((n=c.data)===null||n===void 0?void 0:n.total)||0,o=f.exports.useMemo(()=>Math.ceil(d/u),[u,d]),a=(O,w)=>{let m=O<=0?1:O;const h=w<=0?1:w,P=Math.ceil(d/h);m>P&&(m=Math.max(1,P));const[y={},...V]=c.params||[];c.run(Object.assign(Object.assign({},y),{current:m,pageSize:h}),...V)},g=O=>{a(O,u)},b=O=>{a(l,O)};return Object.assign(Object.assign({},c),{pagination:{current:l,pageSize:u,total:d,totalPage:o,onChange:R(a),changeCurrent:R(g),changePageSize:R(b)}})};var Le=qe;const Xe=(t,e={})=>{var n;const{form:r,defaultType:i="simple",defaultParams:s,manual:c=!1,refreshDeps:l=[],ready:u=!0}=e,d=D(e,["form","defaultType","defaultParams","manual","refreshDeps","ready"]),o=Le(t,Object.assign({manual:!0},d)),{params:a=[],run:g}=o,b=a[2]||{},[O,w]=f.exports.useState((b==null?void 0:b.type)||i),m=f.exports.useRef({}),h=f.exports.useRef([]),P=!!(r!=null&&r.getInternalHooks),y=()=>{if(!r)return{};if(P)return r.getFieldsValue(null,()=>!0);const p=r.getFieldsValue(),v={};return Object.keys(p).forEach(x=>{(!r.getFieldInstance||r.getFieldInstance(x))&&(v[x]=p[x])}),v},V=()=>{if(!r)return Promise.resolve({});const p=y(),v=Object.keys(p);return P?r.validateFields(v):new Promise((x,H)=>{r.validateFields(v,(T,U)=>{T?H(T):x(U)})})},A=()=>{if(!r)return;if(P)return r.setFieldsValue(m.current);const p={};Object.keys(m.current).forEach(v=>{(!r.getFieldInstance||r.getFieldInstance(v))&&(p[v]=m.current[v])}),r.setFieldsValue(p)},G=()=>{const p=y();m.current=Object.assign(Object.assign({},m.current),p),w(v=>v==="simple"?"advance":"simple")},C=p=>{!u||setTimeout(()=>{V().then((v={})=>{const x=p||Object.assign(Object.assign({pageSize:e.defaultPageSize||10},(a==null?void 0:a[0])||{}),{current:1});if(!r){g(x);return}m.current=Object.assign(Object.assign({},m.current),v),g(x,v,{allFormData:m.current,type:O})}).catch(v=>v)})},W=()=>{r&&r.resetFields(),C()},k=p=>{var v;(v=p==null?void 0:p.preventDefault)===null||v===void 0||v.call(p),C()},I=(p,v,x,H)=>{const[T,...U]=a||[];g(Object.assign(Object.assign({},T),{current:p.current,pageSize:p.pageSize,filters:v,sorter:x,extra:H}),...U)};f.exports.useEffect(()=>{if(a.length>0){m.current=(b==null?void 0:b.allFormData)||{},A(),g(...a);return}!c&&u&&(m.current=(s==null?void 0:s[1])||{},A(),C(s==null?void 0:s[0]))},[]),j(()=>{!u||A()},[O]);const E=f.exports.useRef(!1);return E.current=!1,j(()=>{!c&&u&&(E.current=!0,r&&r.resetFields(),m.current=(s==null?void 0:s[1])||{},A(),C(s==null?void 0:s[0]))},[u]),j(()=>{E.current||!u||c||(E.current=!0,o.pagination.changeCurrent(1))},[...l]),Object.assign(Object.assign({},o),{tableProps:{dataSource:((n=o.data)===null||n===void 0?void 0:n.list)||h.current,loading:o.loading,onChange:R(I),pagination:{current:o.pagination.current,pageSize:o.pagination.pageSize,total:o.pagination.total}},search:{submit:R(k),type:O,changeType:R(G),reset:R(W)}})};var Qe=Xe;export{j as a,Ve as b,Qe as u};
//# sourceMappingURL=index.b72b64bd.js.map