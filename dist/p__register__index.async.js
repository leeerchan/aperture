"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[934],{76933:function(I,l,r){r.r(l),r.d(l,{default:function(){return P}});var t=r(15009),d=r.n(t),o=r(99289),f=r.n(o),g=r(5574),p=r.n(g),m=r(27790),a=r(80442),u=r(96738),h=r(71577),j=r(62435),v=r(82188),x=r(85440),n={bg:"bg___Gj77j",register_card:"register_card___pTdHR"},e=r(86074),s=function(){var B=m.ZP.useMessage(),C=p()(B,2),F=C[0],D=C[1],b=function(){var w=f()(d()().mark(function Z(c){var y;return d()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(c.password===c.confirmPassword){i.next=4;break}F.error("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u7B26"),i.next=8;break;case 4:return i.next=6,(0,x.a$)(c.email,c.password);case 6:y=i.sent,y.data.code==="500"?v.m8.push("/login",{register:!0}):y.data.code==="401"&&F.error("\u90AE\u7BB1\u5DF2\u88AB\u6CE8\u518C");case 8:case"end":return i.stop()}},Z)}));return function(c){return w.apply(this,arguments)}}();return(0,e.jsxs)("div",{className:n.bg,children:[(0,e.jsx)("br",{}),(0,e.jsx)("br",{}),(0,e.jsx)("br",{}),(0,e.jsx)("br",{}),(0,e.jsx)("br",{}),(0,e.jsx)("br",{}),(0,e.jsxs)("div",{className:n.register_card,children:[(0,e.jsx)("p",{style:{fontFamily:"PingFang",fontSize:"20px",color:"var(--color-theme)"},children:"\u6CE8 \u518C"}),(0,e.jsx)("br",{}),(0,e.jsxs)(a.Z,{name:"register",className:"register-form",initialValues:{remember:!0},onFinish:b,children:[(0,e.jsx)(a.Z.Item,{name:"email",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1"}],style:{borderBottom:"1px solid var(--color-border)"},children:(0,e.jsx)(u.Z,{placeholder:"\u90AE\u7BB1",bordered:!1,style:{fontFamily:"PingFang",fontSize:"16px"}})}),(0,e.jsx)(a.Z.Item,{name:"password",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}],style:{borderBottom:"1px solid var(--color-border)"},children:(0,e.jsx)(u.Z,{bordered:!1,type:"password",placeholder:"\u5BC6\u7801",style:{fontFamily:"PingFang",fontSize:"16px"}})}),(0,e.jsx)(a.Z.Item,{name:"confirmPassword",rules:[{required:!0,message:"\u8BF7\u786E\u8BA4\u5BC6\u7801"}],style:{borderBottom:"1px solid var(--color-border)"},children:(0,e.jsx)(u.Z,{bordered:!1,type:"password",placeholder:"\u786E\u8BA4\u5BC6\u7801",style:{fontFamily:"PingFang",fontSize:"16px"}})}),(0,e.jsx)("br",{}),(0,e.jsxs)(a.Z.Item,{children:[D,(0,e.jsx)(h.ZP,{type:"primary",htmlType:"submit",block:!0,style:{fontFamily:"PingFang",fontSize:"20px",height:"50px"},children:"\u6CE8\u518C"})]})]}),(0,e.jsx)("a",{style:{color:"#8C8D9B",fontFamily:"PingFang",fontSize:"16px"},href:"/login",children:"\u5DF2\u6709\u8D26\u53F7\uFF1F\u7ACB\u5373\u767B\u5F55\uFF01"})]})]})},P=s},85440:function(I,l,r){r.d(l,{FD:function(){return m},QJ:function(){return x},Rr:function(){return h},Ti:function(){return p},a$:function(){return f},bN:function(){return v},fZ:function(){return j},gS:function(){return a},jA:function(){return u},n$:function(){return g}});var t=r(6154),d=function(){return axios.get("/api/resource")},o="http://110.42.214.206:9090/DataBase/V1/",f=function(e,s){return t.Z.post("".concat(o,"registerUser"),{userEmail:e,userPwd:s},{headers:{"Content-Type":"application/x-www-form-urlencoded"}})},g=function(e,s){return t.Z.post("".concat(o,"userLogin"),{userEmail:e,userPwd:s},{headers:{"Content-Type":"application/x-www-form-urlencoded"}})},p=function(e,s){return t.Z.post("".concat(o,"uploadFile"),{file:e,fileType:s},{headers:{"Content-Type":"application/x-www-form-urlencoded"}})},m=function(){return t.Z.get("".concat(o,"queryUserInfo"),{headers:{Accept:"application/json","Cache-Control":"no-cache"}})},a=function(e,s){return t.Z.post("".concat(o,"updateUserInfo"),{avatarUrl:e,userName:s},{headers:{"Content-Type":"application/x-www-form-urlencoded"}})},u=function(){return t.Z.get("".concat(o,"getDemoList"),{headers:{Accept:"application/json","Cache-Control":"no-cache"}})},h=function(){return t.Z.get("".concat(o,"getMyProject"),{headers:{Accept:"application/json","Cache-Control":"no-cache"}})},j=function(){return t.Z.get("".concat(o,"getModelList"),{headers:{Accept:"application/json","Cache-Control":"no-cache"}})},v=function(e){return t.Z.post("".concat(o,"saveDesignInfo"),{dataJson:e},{headers:{"Content-Type":"application/x-www-form-urlencoded"}})},x=function(e){return t.Z.get("".concat(o,"getDesignByProjectId"),{params:{projectId:e},headers:{Accept:"application/json","Cache-Control":"no-cache"}})}}}]);