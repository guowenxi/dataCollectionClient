import{_ as r}from"./index.1744db00.js";const S=(i=[])=>{const k=r.exports.useRef(-1),c=r.exports.useRef([]),a=r.exports.useCallback(e=>{k.current+=1,c.current.splice(e,0,k.current)},[]),[h,n]=r.exports.useState(()=>(i.forEach((e,t)=>{a(t)}),i)),b=r.exports.useCallback(e=>{c.current=[],n(()=>(e.forEach((t,s)=>{a(s)}),e))},[]),f=r.exports.useCallback((e,t)=>{n(s=>{const o=[...s];return o.splice(e,0,t),a(e),o})},[]),C=r.exports.useCallback(e=>c.current[e],[]),l=r.exports.useCallback(e=>c.current.findIndex(t=>t===e),[]),y=r.exports.useCallback((e,t)=>{n(s=>{const o=[...s];return t.forEach((p,u)=>{a(e+u)}),o.splice(e,0,...t),o})},[]),x=r.exports.useCallback((e,t)=>{n(s=>{const o=[...s];return o[e]=t,o})},[]),_=r.exports.useCallback(e=>{n(t=>{const s=[...t];s.splice(e,1);try{c.current.splice(e,1)}catch(o){console.error(o)}return s})},[]),g=r.exports.useCallback((e,t)=>{e!==t&&n(s=>{const o=[...s],p=o.filter((u,m)=>m!==e);p.splice(t,0,o[e]);try{const u=c.current.filter((m,K)=>K!==e);u.splice(t,0,c.current[e]),c.current=u}catch(u){console.error(u)}return p})},[]),L=r.exports.useCallback(e=>{n(t=>(a(t.length),t.concat([e])))},[]),v=r.exports.useCallback(()=>{try{c.current=c.current.slice(0,c.current.length-1)}catch(e){console.error(e)}n(e=>e.slice(0,e.length-1))},[]),E=r.exports.useCallback(e=>{n(t=>(a(0),[e].concat(t)))},[]),R=r.exports.useCallback(()=>{try{c.current=c.current.slice(1,c.current.length)}catch(e){console.error(e)}n(e=>e.slice(1,e.length))},[]),D=r.exports.useCallback(e=>e.map((t,s)=>({key:s,item:t})).sort((t,s)=>l(t.key)-l(s.key)).filter(t=>!!t.item).map(t=>t.item),[]);return{list:h,insert:f,merge:y,replace:x,remove:_,getKey:C,getIndex:l,move:g,push:L,pop:v,unshift:E,shift:R,sortList:D,resetList:b}};var $=S;export{$ as u};
