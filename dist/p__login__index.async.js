"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[939],{41963:function(F,s,n){n.r(s),n.d(s,{default:function(){return D}});var r=n(15009),c=n.n(r),t=n(99289),i=n.n(t),p=n(5574),h=n.n(p),v=n(62435),x=n(27790),u=n(80442),g=n(96738),y=n(71577),m=n(82188),j=n(85440),o={bg:"bg___N4159",login_card:"login_card___vpa2l"},a=n(10167),e=n(86074),T=function(){var Z=(0,m.TH)(),B=x.ZP.useMessage(),I=h()(B,2),A=I[0],L=I[1];(0,v.useEffect)(function(){if(Z){var l;(l=Z.state)!==null&&l!==void 0&&l.register&&A.success("\u6CE8\u518C\u6210\u529F\uFF0C\u8BF7\u767B\u5F55")}},[]);var M=function(){var l=i()(c()().mark(function P(C){var d;return c()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,(0,j.n$)(C.email,C.password);case 2:d=f.sent,localStorage.setItem("token",d.data.token),(0,a.Z)(d.data.token),d.data.result===0?m.m8.push("/home",{isLogin:!0}):d.data.result===402&&A.error("\u90AE\u7BB1\u6216\u5BC6\u7801\u9519\u8BEF");case 6:case"end":return f.stop()}},P)}));return function(C){return l.apply(this,arguments)}}();return(0,e.jsxs)("div",{className:o.bg,children:[(0,e.jsx)("br",{}),(0,e.jsx)("br",{}),(0,e.jsx)("br",{}),(0,e.jsx)("br",{}),(0,e.jsx)("br",{}),(0,e.jsx)("br",{}),(0,e.jsxs)("div",{className:o.login_card,children:[(0,e.jsx)("p",{style:{fontFamily:"PingFang",fontSize:"20px",color:"var(--color-theme)"},children:"\u767B \u5F55"}),(0,e.jsx)("br",{}),(0,e.jsxs)(u.Z,{name:"login",className:"login-form",initialValues:{remember:!0},onFinish:M,children:[(0,e.jsx)(u.Z.Item,{name:"email",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1"}],style:{borderBottom:"1px solid var(--color-border)"},children:(0,e.jsx)(g.Z,{placeholder:"\u90AE\u7BB1",bordered:!1,style:{fontFamily:"PingFang",fontSize:"16px"}})}),(0,e.jsx)(u.Z.Item,{name:"password",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}],style:{borderBottom:"1px solid var(--color-border)"},children:(0,e.jsx)(g.Z,{bordered:!1,type:"password",placeholder:"\u5BC6\u7801",style:{fontFamily:"PingFang",fontSize:"16px"}})}),(0,e.jsx)("br",{}),(0,e.jsxs)(u.Z.Item,{children:[L,(0,e.jsx)(y.ZP,{type:"primary",htmlType:"submit",block:!0,style:{fontFamily:"PingFang",fontSize:"20px",height:"50px"},children:"\u767B\u5F55"})]})]}),(0,e.jsx)("a",{style:{color:"#8C8D9B",fontFamily:"PingFang",fontSize:"16px"},href:"/register",children:"\u6CA1\u6709\u8D26\u53F7\uFF1F\u7ACB\u5373\u6CE8\u518C\uFF01"})]})]})},D=T},85440:function(F,s,n){n.d(s,{FD:function(){return v},QJ:function(){return j},Rr:function(){return g},Ti:function(){return h},a$:function(){return i},bN:function(){return m},fZ:function(){return y},gS:function(){return x},jA:function(){return u},n$:function(){return p}});var r=n(6154),c=function(){return axios.get("/api/resource")},t="http://110.42.214.206:9090/DataBase/V1/",i=function(a,e){return r.Z.post("".concat(t,"registerUser"),{userEmail:a,userPwd:e},{headers:{"Content-Type":"application/x-www-form-urlencoded"}})},p=function(a,e){return r.Z.post("".concat(t,"userLogin"),{userEmail:a,userPwd:e},{headers:{"Content-Type":"application/x-www-form-urlencoded"}})},h=function(a,e){return r.Z.post("".concat(t,"uploadFile"),{file:a,fileType:e},{headers:{"Content-Type":"application/x-www-form-urlencoded"}})},v=function(){return r.Z.get("".concat(t,"queryUserInfo"),{headers:{Accept:"application/json","Cache-Control":"no-cache"}})},x=function(a,e){return r.Z.post("".concat(t,"updateUserInfo"),{avatarUrl:a,userName:e},{headers:{"Content-Type":"application/x-www-form-urlencoded"}})},u=function(){return r.Z.get("".concat(t,"getDemoList"),{headers:{Accept:"application/json","Cache-Control":"no-cache"}})},g=function(){return r.Z.get("".concat(t,"getMyProject"),{headers:{Accept:"application/json","Cache-Control":"no-cache"}})},y=function(){return r.Z.get("".concat(t,"getModelList"),{headers:{Accept:"application/json","Cache-Control":"no-cache"}})},m=function(a){return r.Z.post("".concat(t,"saveDesignInfo"),{dataJson:a},{headers:{"Content-Type":"application/x-www-form-urlencoded"}})},j=function(a){return r.Z.get("".concat(t,"getDesignByProjectId"),{params:{projectId:a},headers:{Accept:"application/json","Cache-Control":"no-cache"}})}},10167:function(F,s,n){var r=n(6154),c=function(i){i?r.Z.defaults.headers.common.Authorization=i:delete r.Z.defaults.headers.common.Authorization};s.Z=c}}]);
