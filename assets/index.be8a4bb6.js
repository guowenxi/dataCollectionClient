var c=Object.defineProperty;var i=(s,e,t)=>e in s?c(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var o=(s,e,t)=>(i(s,typeof e!="symbol"?e+"":e,t),t);import{_ as r,R as n,B as l}from"./index.f93312c7.js";class m extends r.exports.Component{constructor(t){super(t);o(this,"handleClick",()=>{const{history:t}=this.props;t.push("/")});this.state={width:600,lineWidth:1}}componentDidMount(){this.props,console.log(this.props)}componentWillUnmount(){}render(){const{width:t,lineWidth:a}=this.state;return n.createElement("div",{className:"common-page test-page"},n.createElement("div",{className:"common-chart-container"},t,a,n.createElement(l,{onClick:this.handleClick},"\u56DE\u9996\u9875")))}}export{m as default};
//# sourceMappingURL=index.be8a4bb6.js.map
