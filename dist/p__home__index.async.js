"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[512],{68609:function(Ee,D,n){n.r(D),n.d(D,{default:function(){return ne}});var $=n(15009),v=n.n($),U=n(99289),N=n.n(U),K=n(5574),d=n.n(K),u=n(62435),Q=n(27790),V=n(58720),B=n(60974),W=n(3363),c=n(71230),g=n(71577),f=n(15746),F=n(85813),X=n(96738),x=n(89580),Y=n(24969),S=n(82188),b=n(1798),w=n.n(b),q=n(97173),p=n(85440),_=n(10167),e=n(86074),ee=function(){var I=(0,S.TH)(),ae=Q.ZP.useMessage(),A=d()(ae,2),te=A[0],se=A[1],re=(0,u.useState)(1),O=d()(re,2),Ne=O[0],ie=O[1],le=(0,u.useState)(!1),z=d()(le,2),oe=z[0],Z=z[1],de=(0,u.useState)(-1),M=d()(de,2),m=M[0],P=M[1],ue=(0,u.useState)(""),T=d()(ue,2),J=T[0],ce=T[1],me=(0,u.useState)([]),R=d()(me,2),y=R[0],ge=R[1],fe=(0,u.useState)([]),k=d()(fe,2),he=k[0],je=k[1];(0,u.useEffect)(function(){var t=localStorage.getItem("token");if((0,_.Z)(t),I){var a;(a=I.state)!==null&&a!==void 0&&a.isLogin&&te.success("\u767B\u5F55\u6210\u529F")}ve()},[]);var ve=function(){var t=N()(v()().mark(function a(){var r,h,s,i,j,E;return v()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,p.jA)();case 2:for(r=o.sent,h=[],s=0;s<r.data.dataSize;s++)h.push({id:r.data.data[s].demoId,title:r.data.data[s].demoName,content:r.data.data[s].demoDesc,images:JSON.parse(r.data.data[s].dataJson).steps});return ge(h),o.next=8,(0,p.FD)();case 8:return i=o.sent,w().publish("setUser",{email:i.data.email,name:i.data.name,avatar:i.data.avatar}),o.next=12,(0,p.Rr)();case 12:for(j=o.sent,E=[],s=0;s<j.data.dataSize;s++)E.push({id:j.data.data[s].projectId,name:j.data.data[s].projectName,image:j.data.data[s].projectImg});je(E);case 16:case"end":return o.stop()}},a)}));return function(){return t.apply(this,arguments)}}(),xe=function(){Z(!0)},pe=function(){var t=N()(v()().mark(function a(){var r,h;return v()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return Z(!1),r={projectId:0,projectName:J},i.next=4,(0,p.bN)(JSON.stringify(r));case 4:h=i.sent,S.m8.push({pathname:"/file?name=".concat(J,"?id=").concat(h.data.projectId)});case 6:case"end":return i.stop()}},a)}));return function(){return t.apply(this,arguments)}}(),ye=function(){Z(!1)},Fe=function(a){P(a-1)},Se=function(){P(-1),C(0)},Ze=function(){P(-1)},Pe=(0,u.useState)(0),G=d()(Pe,2),l=G[0],C=G[1],H=function(){C(l+1)},L=function(){C(l-1)},Be=function(a){ie(a)},Ce=function(a){S.m8.push({pathname:"/file?name=".concat(a.name,"?id=").concat(a.id)})};return(0,e.jsx)(V.ZP,{children:(0,e.jsxs)("div",{className:"home_ctn",children:[(0,e.jsx)(q.Z,{}),(0,e.jsxs)(B.Z,{style:{fontFamily:"PingFang"},width:"800px",title:"\u66F4\u591A\u8BBE\u7F6E",open:m>=0,onCancel:Ze,footer:null,children:[(0,e.jsx)(W.Z,{current:l,items:[{title:"\u6B65\u9AA4\u4E00"},{title:"\u6B65\u9AA4\u4E8C"},{title:"\u6B65\u9AA4\u4E09"}],style:{fontFamily:"PingFang"}}),(0,e.jsxs)("div",{style:{marginTop:24},children:[l===0&&(0,e.jsxs)("div",{children:[(0,e.jsx)(c.Z,{justify:"space-around",align:"middle",children:(0,e.jsx)("div",{className:"demo_img_ctn",children:(0,e.jsx)("img",{className:"demo_img",src:m>=0?y[m].images[l].step:""})})}),(0,e.jsx)("br",{}),(0,e.jsx)("br",{}),(0,e.jsx)(c.Z,{children:(0,e.jsx)(g.ZP,{onClick:function(){return H()},style:{fontFamily:"PingFang"},children:"\u4E0B\u4E00\u6B65"})})]}),l===1&&(0,e.jsxs)("div",{children:[(0,e.jsx)(c.Z,{justify:"space-around",align:"middle",children:(0,e.jsx)("div",{className:"demo_img_ctn",children:(0,e.jsx)("img",{className:"demo_img",src:m>=0?y[m].images[l].step:""})})}),(0,e.jsx)("br",{}),(0,e.jsx)("br",{}),(0,e.jsxs)(c.Z,{children:[(0,e.jsx)(f.Z,{span:2,children:(0,e.jsx)(g.ZP,{onClick:function(){return L()},style:{fontFamily:"PingFang"},children:"\u4E0A\u4E00\u6B65"})}),(0,e.jsx)(f.Z,{offset:2,span:2,children:(0,e.jsx)(g.ZP,{onClick:function(){return H()},style:{fontFamily:"PingFang"},children:"\u4E0B\u4E00\u6B65"})})]})]}),l===2&&(0,e.jsxs)("div",{children:[(0,e.jsx)(c.Z,{justify:"space-around",align:"middle",children:(0,e.jsx)("div",{className:"demo_img_ctn",children:(0,e.jsx)("img",{className:"demo_img",src:m>=0?y[m].images[l].step:""})})}),(0,e.jsx)("br",{}),(0,e.jsx)("br",{}),(0,e.jsxs)(c.Z,{children:[(0,e.jsx)(f.Z,{span:4,children:(0,e.jsx)(g.ZP,{style:{margin:"0 8px",fontFamily:"PingFang"},onClick:function(){return L()},children:"\u4E0A\u4E00\u6B65"})}),(0,e.jsx)(f.Z,{offset:18,span:2,children:(0,e.jsx)(g.ZP,{type:"primary",onClick:Se,style:{fontFamily:"PingFang"},children:"\u597D\u7684"},"submit")})]})]})]})]}),se,(0,e.jsxs)("div",{className:"home_core_ctn",children:[(0,e.jsx)(F.Z,{hoverable:!0,onClick:xe,children:(0,e.jsxs)("p",{style:{fontSize:"20px",fontFamily:"PingFang",margin:"0px"},children:[(0,e.jsx)(Y.Z,{})," \u65B0\u5EFA\u9879\u76EE"]})}),(0,e.jsx)(B.Z,{style:{fontFamily:"PingFang"},title:"\u65B0\u5EFA\u9879\u76EE",open:oe,onCancel:ye,footer:[(0,e.jsx)(g.ZP,{type:"primary",onClick:pe,children:"\u5F00\u59CB"},"submit")],children:(0,e.jsxs)(c.Z,{align:"middle",justify:"space-between",children:[(0,e.jsx)(f.Z,{span:4,children:(0,e.jsx)("p",{style:{fontFamily:"PingFang",fontSize:"16px"},children:"\u9879\u76EE\u540D\u79F0"})}),(0,e.jsx)(f.Z,{span:20,children:(0,e.jsx)(X.Z,{placeholder:"demo",style:{fontFamily:"PingFang"},onChange:function(a){return ce(a.target.value)}})})]})}),(0,e.jsx)("p",{style:{fontSize:"20px",fontFamily:"PingFang",margin:"0px"},children:"\u8BBE\u8BA1\u6848\u4F8B"}),(0,e.jsx)(x.ZP,{grid:{gutter:16,column:4},dataSource:y,renderItem:function(a){return(0,e.jsx)(x.ZP.Item,{children:(0,e.jsxs)(F.Z,{hoverable:!0,onClick:function(){Fe(a.id)},children:[(0,e.jsx)("p",{style:{fontFamily:"PingFang",fontSize:"20px"},children:a.title}),(0,e.jsx)("p",{style:{fontFamily:"PingFang",fontSize:"16px"},children:a.content})]})})}}),(0,e.jsx)("p",{style:{fontSize:"20px",fontFamily:"PingFang",margin:"0px"},children:"\u5386\u53F2\u9879\u76EE"}),(0,e.jsx)(x.ZP,{className:"history_list",grid:{gutter:16,column:6},dataSource:he,pagination:{pageSize:6},renderItem:function(a){return(0,e.jsx)(x.ZP.Item,{children:(0,e.jsx)(F.Z,{hoverable:!0,bordered:!1,cover:(0,e.jsx)("img",{src:a.image}),onClick:function(){return Ce(a)},children:(0,e.jsx)(c.Z,{justify:"center",gutter:30,children:(0,e.jsx)("p",{style:{fontFamily:"PingFang",fontSize:"20px",margin:"8px",textAlign:"center"},children:a.name})})})})}})]})]})})},ne=ee}}]);