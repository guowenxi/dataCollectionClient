import"./index.353dd2ef.js";const i=function(t){const r=window.location.href.split("?")[1];let a=new URLSearchParams(`?${r}`).get(t);return a?(a.indexOf("#/")>=0&&(a=a.split("#/")[0]),a):""},u=function(t,e){return t.indexOf(e)>=0?t.split(e)[1]:t},c=()=>{let t=new Date,e=t.getFullYear()+"-",r=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",n=t.getDate()+" ",a=t.getHours()+":",o=t.getMinutes()+":",l=t.getSeconds();return e+r+n+a+o+l},g=t=>{for(var e=new ArrayBuffer(t.length),r=new Uint8Array(e),n=0;n<t.length;++n)r[n]=t[n];return e},f=t=>String.fromCharCode.apply(null,new Uint8Array(t)),p=t=>{var e=Array.prototype.slice.call(t);return e.map(r=>Number(r).toString(16))};export{f as a,p as b,i as c,u as f,c as g,g as t};
