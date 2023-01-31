import{_ as c,R as e}from"./index.8d62fabd.js";import{s as f}from"./SearchMore.60d61241.js";import{w as p,S as g}from"./index.f74872f6.js";import{A as b}from"./index.e6c9f47e.js";import{A as h}from"./index.d4ab65ae.js";import{F as w}from"./index.6214eb92.js";import{P as y}from"./PlusCircleOutlined.55641b66.js";import{M as x}from"./MinusCircleOutlined.32e3a131.js";import"./index.adc43817.js";import"./index.8a2ef8d3.js";import"./Table.2da81800.js";import"./Pagination.2e94c1c8.js";import"./_baseIsEqual.8d7f74ca.js";import"./index.23997226.js";import"./index.bd6b171c.js";import"./Portal.8cf5a27d.js";const{Option:v}=h,E=f(b)`
  .ant-input-number-input {
    height: auto;
    padding: 0 11px 0 0;
  }
  && {
    width: 100%;
    padding: 1vh;
  }
  // .contentItem_twoInput_main{
  //   display:flex;
  //   width:100%;
  // }
  // .contentItem_twoInput{
  //   padding:0 1vw;
  //   position:relative;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  // }
`,I=f(h)`
  .ant-select-selector {
    height: 100% !important;
    padding: 0 11px 0 0;
  }
  && {
    width: 100%;
    /* padding: 1vh; */
  }
`,D=d=>{const[t,o]=c.exports.useState([{name:"",num:""}]),u=c.exports.useContext(p);c.exports.useState([]);const s=d.conf,{name:m}=d;return c.exports.useEffect(()=>{const l=u.form.getFieldValue([m])||t;o(l)},[]),e.createElement(p.Consumer,null,l=>{switch(l.state){case"default":return e.createElement(g,null,s.defaultValue||"\u3000");case"edit":case"new":case"disabled":return e.createElement(w.Item,{name:m,rules:[()=>({validator(i,a,n){if(d.rules[0].required){for(let r=0;r<a.length;r++)if(a[r].name==""||!a[r].num||a[r].num=="")return Promise.reject(d.rules[0].message)}n()}})]},t.map((i,a)=>e.createElement("div",{key:a,style:{display:"flex",border:"1px solid #d9d9d9",padding:"1vh 0"},className:"contentItem_twoInput_main"},e.createElement("div",{style:{width:"100%"}},e.createElement("div",{style:{display:"flex"}},e.createElement("span",{style:{width:"7vw",textAlign:"center",background:"#ebebeb",padding:"1vh 0"}},"\u8F66\u961F\u5173\u952E\u5B57"),e.createElement(I,{disabled:l.state==="disabled",placeholder:s.placeholder,size:s.size,value:i.name,onChange:(n,r)=>{i.name=r.title,i.id=n,o([...t]),u.form.setFieldsValue({[m]:t})}},s.options.map((n,r)=>e.createElement(v,{title:n.name,value:n.id,key:r.toString()},n.name)))),e.createElement("div",{style:{display:"flex"}},e.createElement("span",{style:{width:"7vw",textAlign:"center",background:"#ebebeb",padding:"1vh 0"}},"\u7535\u5B50\u7968\u6570\u91CF"),l.state==="disabled"?e.createElement("div",{style:{width:"100%",padding:"1vh 0",border:"1px solid #d9d9d9",paddingLeft:"18px",color:"rgba(0, 0, 0, 0.25)"}},i.num):e.createElement(E,{disabled:l.state==="disabled",placeholder:s.placeholderTwo,size:s.size,value:i.num,onChange:n=>{i.num=n,o([...t]),u.form.setFieldsValue({[m]:t})}}))),l.state==="disabled"?null:e.createElement("div",{style:{padding:"0 1vw",display:"flex",justifyContent:"center",alignItems:"center"},className:"contentItem_twoInput"},t.length==a+1?e.createElement(y,{onClick:()=>{o(t.concat([{name:"",num:""}]))},style:{fontSize:"30px",color:"#08c",cursor:"pointer"}}):e.createElement(x,{onClick:()=>{t.splice(a,1),o([...t])},style:{fontSize:"30px",color:"#08c",cursor:"pointer"}})))))}})};export{D as default};
//# sourceMappingURL=twoInput.c8a41b1a.js.map
