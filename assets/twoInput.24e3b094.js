import{_ as m,R as e}from"./index.1744db00.js";import{s as f}from"./SearchMore.b58ad9fc.js";import{w as p,S as g}from"./index.2cf55c0b.js";import{A as b}from"./index.0b2062c9.js";import{A as h}from"./index.94ba65ab.js";import{F as w}from"./index.a10c21c4.js";import{P as y}from"./PlusCircleOutlined.8ffa080f.js";import{M as x}from"./MinusCircleOutlined.ae8e1f9a.js";import"./index.ba1b5373.js";import"./index.2f265e7d.js";import"./Table.e070c8af.js";import"./Pagination.88552979.js";import"./index.54246283.js";import"./index.4d18e0ae.js";const{Option:v}=h,E=f(b)`
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
`,R=d=>{const[t,o]=m.exports.useState([{name:"",num:""}]),u=m.exports.useContext(p);m.exports.useState([]);const s=d.conf,{name:c}=d;return m.exports.useEffect(()=>{const l=u.form.getFieldValue([c])||t;o(l)},[]),e.createElement(p.Consumer,null,l=>{switch(l.state){case"default":return e.createElement(g,null,s.defaultValue||"\u3000");case"edit":case"new":case"disabled":return e.createElement(w.Item,{name:c,rules:[()=>({validator(i,a,n){if(d.rules[0].required){for(let r=0;r<a.length;r++)if(a[r].name==""||!a[r].num||a[r].num=="")return Promise.reject(d.rules[0].message)}n()}})]},t.map((i,a)=>e.createElement("div",{key:a,style:{display:"flex",border:"1px solid #d9d9d9",padding:"1vh 0"},className:"contentItem_twoInput_main"},e.createElement("div",{style:{width:"100%"}},e.createElement("div",{style:{display:"flex"}},e.createElement("span",{style:{width:"7vw",textAlign:"center",background:"#ebebeb",padding:"1vh 0"}},"\u8F66\u961F\u5173\u952E\u5B57"),e.createElement(I,{disabled:l.state==="disabled",placeholder:s.placeholder,size:s.size,value:i.name,onChange:(n,r)=>{i.name=r.title,i.id=n,o([...t]),u.form.setFieldsValue({[c]:t})}},s.options.map((n,r)=>e.createElement(v,{title:n.name,value:n.id,key:r.toString()},n.name)))),e.createElement("div",{style:{display:"flex"}},e.createElement("span",{style:{width:"7vw",textAlign:"center",background:"#ebebeb",padding:"1vh 0"}},"\u7535\u5B50\u7968\u6570\u91CF"),l.state==="disabled"?e.createElement("div",{style:{width:"100%",padding:"1vh 0",border:"1px solid #d9d9d9",paddingLeft:"18px",color:"rgba(0, 0, 0, 0.25)"}},i.num):e.createElement(E,{disabled:l.state==="disabled",placeholder:s.placeholderTwo,size:s.size,value:i.num,onChange:n=>{i.num=n,o([...t]),u.form.setFieldsValue({[c]:t})}}))),l.state==="disabled"?null:e.createElement("div",{style:{padding:"0 1vw",display:"flex",justifyContent:"center",alignItems:"center"},className:"contentItem_twoInput"},t.length==a+1?e.createElement(y,{onClick:()=>{o(t.concat([{name:"",num:""}]))},style:{fontSize:"30px",color:"#08c",cursor:"pointer"}}):e.createElement(x,{onClick:()=>{t.splice(a,1),o([...t])},style:{fontSize:"30px",color:"#08c",cursor:"pointer"}})))))}})};export{R as default};
