import{c as p,_ as o,R as a}from"./index.8d62fabd.js";import{s as d}from"./SearchMore.60d61241.js";import{w as u,S as f}from"./index.f74872f6.js";import{b as h}from"./index.d4ab65ae.js";import{F as y}from"./index.6214eb92.js";import"./index.e6c9f47e.js";import"./index.adc43817.js";import"./index.8a2ef8d3.js";import"./Table.2da81800.js";import"./Pagination.2e94c1c8.js";import"./_baseIsEqual.8d7f74ca.js";import"./index.23997226.js";import"./index.bd6b171c.js";import"./Portal.8cf5a27d.js";const k=d(h)`
  && {
    padding: 1vh;
  }
`,x=s=>{const e=s.conf,{name:r}=s,c=o.exports.useContext(u),[l,m]=o.exports.useState("");return o.exports.useEffect(()=>{const t=c.form.getFieldValue(r);m(t)},[]),a.createElement(u.Consumer,null,t=>{switch(t.state){case"default":return a.createElement(f,null,e.defaultValue||"\u3000");case"edit":case"new":case"disabled":return a.createElement(y.Item,{name:r,rules:s.rules},a.createElement(k,{style:e.style,disabled:t.state==="disabled",placeholder:e.placeholder,size:e.size,value:l,checked:l,onChange:n=>{const i=n.target.checked;c.form.setFieldsValue({[r]:i}),m(i),e.relateNames&&t.focus$.emit({relateNames:e.relateNames,relatekeys:e.relatekeys,type:e.clickType?e.clickType:"onChange",value:n})}},e.displayName?e.displayName:""))}})};var R=p(({})=>({}))(x);export{R as default};
//# sourceMappingURL=checkBox.0cdeabc8.js.map
