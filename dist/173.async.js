"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[173],{97173:function(W,I,a){a.d(I,{Z:function(){return Ye}});var h=a(15009),g=a.n(h),p=a(99289),x=a.n(p),U=a(5574),o=a.n(U),r=a(62435),T=a(1798),d=a.n(T),O=a(51904),D=a(71338),F=a(82188),M=a(30780),m=a(96074),f=a(27790),j=a(31365),Oe=a(85265),Me=a(26713),C=a(71577),b=a(89580),Y=a(85813),q=a(71230),A=a(15746),Re=a(39778),Le=a(74627),He=a(60974),$e=a(96738),Ge=a(87784),Je=a(16801),_=a(51947),Ve=a(23919),ee=a(2830),Xe=a(18754),R=a(24019),Ke=a(80882),w=a(10167),B=a(85440),e=a(86074),Qe=function(y){return new Promise(function(L,k){var Z=new FileReader;Z.readAsDataURL(y),Z.onload=function(){return L(Z.result)},Z.onerror=function(H){return k(H)}})},We=function(){var y=(0,F.TH)(),L=(0,r.useState)(!1),k=o()(L,2),Z=k[0],H=k[1],_e=(0,r.useState)("start"),ne=o()(_e,2),z=ne[0],te=ne[1],en=(0,r.useState)(!1),ae=o()(en,2),se=ae[0],nn=ae[1],tn=(0,r.useState)("#000000"),re=o()(tn,2),ie=re[0],oe=re[1],an=(0,r.useState)(40),le=o()(an,2),$=le[0],sn=le[1],rn=(0,r.useState)(10),ce=o()(rn,2),G=ce[0],on=ce[1],ln=(0,r.useState)("#000000"),ue=o()(ln,2),J=ue[0],cn=ue[1],un=(0,r.useState)(""),de=o()(un,2),he=de[0],dn=de[1],hn=(0,r.useState)(""),ge=o()(hn,2),pe=ge[0],fe=ge[1],gn=(0,r.useState)(""),me=o()(gn,2),pn=me[0],ve=me[1],fn=(0,r.useState)(""),xe=o()(fn,2),je=xe[0],Ce=xe[1],mn=(0,r.useState)(""),Se=o()(mn,2),V=Se[0],Fe=Se[1],vn=(0,r.useState)(!1),ye=o()(vn,2),xn=ye[0],Ze=ye[1],jn=(0,r.useState)(!1),Pe=o()(jn,2),Cn=Pe[0],X=Pe[1],Sn=(0,r.useState)("stable diffusion v1.5"),Ne=o()(Sn,2),Fn=Ne[0],yn=Ne[1],Zn=(0,r.useState)(!1),Ie=o()(Zn,2),Pn=Ie[0],Ee=Ie[1],Nn=(0,r.useState)(!1),De=o()(Nn,2),N=De[0],be=De[1],In=(0,r.useState)(-1),Ae=o()(In,2),we=Ae[0],En=Ae[1],Dn=(0,r.useState)(""),Be=o()(Dn,2),K=Be[0],bn=Be[1],An=(0,r.useState)([]),ke=o()(An,2),wn=ke[0],Bn=ke[1],kn=(0,r.useState)([]),ze=o()(kn,2),zn=ze[0],Un=ze[1];(0,r.useEffect)(function(){var t=localStorage.getItem("token");if((0,w.Z)(t),y.pathname==="/file"||y.pathname==="/result"){var n=window.location.search.slice(1).split("?")[0].split("=")[1],s=parseInt(window.location.search.slice(1).split("?")[1].split("=")[1]);En(s),bn(n),Tn(s)}},[]);var Tn=function(){var t=x()(g()().mark(function n(s){var l,c,i;return g()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return Q(s),u.next=3,(0,B.Rr)();case 3:for(l=u.sent,c=[],i=0;i<l.data.dataSize;i++)c.push({id:l.data.data[i].projectId,name:l.data.data[i].projectName,image:l.data.data[i].projectImg});Un(c);case 7:case"end":return u.stop()}},n)}));return function(s){return t.apply(this,arguments)}}(),Q=function(){var t=x()(g()().mark(function n(s){var l,c,i,v,u;return g()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,(0,B.QJ)(s);case 2:for(l=E.sent,c=[],i=0;i<l.data.dataSize;i++)v=JSON.parse(l.data.data[i].argument),u=new Map(Object.entries(v)),c.push({reference_image:u.get("reference_image"),prompt:u.get("prompt"),width:u.get("width"),height:u.get("height"),seed:u.get("seed"),denoising:u.get("denoising_strength"),steps:u.get("steps"),cfg:u.get("cfg_scale"),x_label:u.get("x_label"),y_label:u.get("y_label")});Bn(c);case 6:case"end":return E.stop()}},n)}));return function(s){return t.apply(this,arguments)}}(),On=function(){var t=x()(g()().mark(function n(s){return g()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:Q(s.id),be(!1);case 2:case"end":return c.stop()}},n)}));return function(s){return t.apply(this,arguments)}}();d().subscribe("beginEdit",function(t,n){H(!0)}),d().unsubscribe("setUser"),d().subscribe("setUser",function(t,n){dn(n.email),fe(n.name),ve(n.avatar),Fe(n.avatar),Ce(n.name)}),d().unsubscribe("setModel"),d().subscribe("setModel",function(t,n){yn(n)});var Mn=function(){localStorage.setItem("token",""),(0,w.Z)(null),F.m8.push("./login")},Rn=function(){Ze(!1)},Ln=function(n){Ze(n)},Hn=function(){X(!0),Rn()},$n=function(){var t=x()(g()().mark(function n(){var s,l;return g()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return s=localStorage.getItem("token"),(0,w.Z)(s),i.next=4,(0,B.gS)(V,je);case 4:l=i.sent,ve(V),fe(je),X(!1);case 8:case"end":return i.stop()}},n)}));return function(){return t.apply(this,arguments)}}(),Gn=function(){X(!1)},Jn=(0,e.jsxs)("div",{className:"downItem",children:[(0,e.jsx)("p",{onClick:Hn,style:{margin:"5px"},children:"\u8D26\u53F7\u8BBE\u7F6E"}),(0,e.jsx)(m.Z,{style:{margin:"5px"}}),(0,e.jsx)("p",{onClick:Mn,style:{margin:"5px"},children:"\u767B\u51FA"})]}),Vn=function(n){Ce(n.target.value)},Xn=function(){var t=x()(g()().mark(function n(s){var l,c;return g()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return l=s.type==="image/png",c=s.type==="image/jpeg",l||c||f.ZP.error("".concat(s.name," \u4E0D\u662F png/jpg/jpeg \u6587\u4EF6")),v.abrupt("return",l||c||j.Z.LIST_IGNORE);case 4:case"end":return v.stop()}},n)}));return function(s){return t.apply(this,arguments)}}(),Kn=function(){var t=x()(g()().mark(function n(s){var l,c,i,v;return g()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:if(l=localStorage.getItem("token"),(0,w.Z)(l),c=s.file.status,c!=="done"){S.next=13;break}return S.next=6,Qe(s.file.originFileObj);case 6:return s.file.preview=S.sent,i=s.file.preview,S.next=10,(0,B.Ti)(i,"avatar");case 10:v=S.sent,console.log(v),Fe(v.data.fileUrl);case 13:case"end":return S.stop()}},n)}));return function(s){return t.apply(this,arguments)}}(),Ue=function(){Ee(!0)},Qn=function(){Ee(!1)},Wn=function(){N&&Q(we),be(!N)},Te=(0,e.jsxs)(Oe.Z,{title:N?"\u6240\u6709\u9879\u76EE":"\u5386\u53F2\u8BB0\u5F55",width:720,onClose:Qn,open:Pn,bodyStyle:{paddingBottom:40,fontFamily:"PingFang"},extra:(0,e.jsx)(Me.Z,{children:(0,e.jsx)(C.ZP,{onClick:Wn,style:{fontFamily:"PingFang"},children:N?"\u8FD4\u56DE\u5F53\u524D\u9879\u76EE":"\u5168\u90E8\u9879\u76EE"})}),children:[!N&&(0,e.jsx)(b.ZP,{grid:{gutter:16,column:1},dataSource:wn,renderItem:function(n){return(0,e.jsx)(b.ZP.Item,{children:(0,e.jsx)(Y.Z,{hoverable:!0,children:(0,e.jsxs)(q.Z,{justify:"space-between",children:[(0,e.jsx)(A.Z,{span:9,children:(0,e.jsx)("img",{className:"history_img",src:n.reference_image})}),(0,e.jsxs)(A.Z,{span:15,children:[(0,e.jsxs)("p",{style:{fontFamily:"PingFang",fontSize:"12px"},children:["\u5173\u952E\u8BCD\uFF1A",n.prompt]}),(0,e.jsxs)("p",{style:{fontFamily:"PingFang",fontSize:"12px"},children:["\u753B\u9762\u7CBE\u7EC6\u5EA6\uFF1A",n.steps]}),(0,e.jsxs)("p",{style:{fontFamily:"PingFang",fontSize:"12px"},children:["\u968F\u673A\u503C\uFF1A",n.seed]}),(0,e.jsxs)("p",{style:{fontFamily:"PingFang",fontSize:"12px"},children:["\u521B\u610F\u5EA6\uFF1A",n.denoising]}),(0,e.jsxs)("p",{style:{fontFamily:"PingFang",fontSize:"12px"},children:["\u5173\u952E\u8BCD\u7B26\u5408\u5EA6\uFF1A",n.cfg]}),(0,e.jsxs)("p",{style:{fontFamily:"PingFang",fontSize:"12px"},children:["X\u8F74\uFF1A",n.x_label,"\uFF0CY\u8F74\uFF1A",n.y_label]}),(0,e.jsxs)("p",{style:{fontFamily:"PingFang",fontSize:"12px"},children:["\u56FE\u7247\u5206\u8FA8\u7387\uFF1A",n.width,", ",n.height]})]})]})})})}}),N&&(0,e.jsx)(b.ZP,{grid:{gutter:16,column:2},dataSource:zn,pagination:{pageSize:6},renderItem:function(n){return(0,e.jsx)(b.ZP.Item,{children:(0,e.jsx)(Y.Z,{bordered:!1,children:(0,e.jsxs)(q.Z,{justify:"space-between",gutter:30,children:[(0,e.jsx)(A.Z,{span:14,children:(0,e.jsx)("img",{className:"design_img",src:n.image})}),(0,e.jsxs)(A.Z,{span:10,children:[(0,e.jsx)("p",{style:{fontFamily:"PingFang",fontSize:"16px",margin:"8px",textAlign:"center"},children:n.name}),(0,e.jsx)("br",{}),(0,e.jsx)("br",{}),(0,e.jsx)("br",{}),(0,e.jsx)("br",{}),(0,e.jsx)(C.ZP,{style:{fontFamily:"PingFang",fontSize:"12px"},onClick:function(){On(n)},children:"\u67E5\u770B\u9879\u76EE\u5386\u53F2"})]})]})})})}})]}),Yn=r.memo(function(t){var n=t.brushColor,s=t.handleColorChange;return(0,e.jsx)(M.xS,{width:"200px",color:n,onChangeComplete:s})}),qn=r.useCallback(function(t){var n=t.rgb,s=n.r,l=n.g,c=n.b,i=n.a;oe("rgba(".concat(s,", ").concat(l,", ").concat(c,",").concat(i,")")),cn("rgba(".concat(s,", ").concat(l,", ").concat(c,",").concat(i,")")),d().publish("changeBrushColor","rgba(".concat(s,", ").concat(l,", ").concat(c,",").concat(i,")"))},[]),P=r.useCallback(function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;t==="eraser"&&(sn(n),d().publish("changeIsEraser",!0),d().publish("changeBrushSize",n),te("eraser")),t==="pen"&&(on(n),oe(J),d().publish("changeIsEraser",!1),d().publish("changeBrushColor",J),d().publish("changeBrushSize",n),te("pen")),t==="editImg"&&d().publish("changeToEditImgMode")},[J]);return y.pathname==="/file"?(0,e.jsxs)("div",{className:"header",children:[(0,e.jsxs)("div",{className:"header_l_ctn",children:[(0,e.jsx)("div",{className:"logo",children:"REAI"}),(0,e.jsx)("img",{className:"avatar",onClick:function(){return F.m8.push("/home")},src:"https://s2.loli.net/2023/02/23/a8w7pVv4lXtgbH9.png"}),(0,e.jsx)("p",{style:{fontFamily:"PingFang",fontSize:"12px",margin:"0px"},children:K}),(0,e.jsxs)(O.Z,{style:{fontFamily:"PingFang",fontSize:"12px"},children:["\u6A21\u578B\uFF1A",Fn]})]}),(0,e.jsxs)("div",{className:"header_m_ctn",children:[(0,e.jsx)("div",{className:"picker-ctn",children:(0,e.jsx)(Re.Z,{placement:"bottom",title:"\u7981\u7528\u6216\u5F00\u542F\u53C2\u8003\u56FE\u7247\u529F\u80FD",children:(0,e.jsx)(Ge.Z,{onClick:function(){d().publish("changeGenerationMode")}})})}),(0,e.jsx)("div",{className:"picker-ctn",children:(0,e.jsx)(Je.Z,{onClick:function(){P("editImg")}})}),(0,e.jsxs)("div",{className:"picker-ctn",children:[(0,e.jsx)("div",{className:"picker-btn",style:{background:ie},onClick:function(){return nn(!se)}}),se&&(0,e.jsx)("div",{className:"setting-item",children:(0,e.jsx)(Yn,{brushColor:ie,handleColorChange:qn})})]}),(0,e.jsxs)("div",{className:"picker-ctn",children:[z!=="pen"&&(0,e.jsx)(_.Z,{onClick:function(){P("pen",G)}}),z==="pen"&&(0,e.jsx)(Ve.Z,{onClick:function(){P("pen",G)}}),Z&&(0,e.jsxs)("div",{className:"setting-item",style:{right:-665,top:100,padding:"10px 0",height:160,borderRadius:4},children:[(0,e.jsx)(_.Z,{style:{color:"var(--color-theme-light)"}}),(0,e.jsx)(D.Z,{vertical:!0,min:1,value:G,tooltip:{open:!1},onChange:function(n){return P("pen",n)}})]})]}),(0,e.jsxs)("div",{className:"picker-ctn",children:[z!=="eraser"&&(0,e.jsx)(ee.Z,{onClick:function(){P("eraser",$)}}),z==="eraser"&&(0,e.jsx)(Xe.Z,{onClick:function(){P("eraser",$)}}),Z&&(0,e.jsxs)("div",{className:"setting-item",style:{right:-680,top:100,padding:"10px 0",height:160,borderRadius:4},children:[(0,e.jsx)(ee.Z,{style:{color:"var(--color-theme-light)"}}),(0,e.jsx)(D.Z,{vertical:!0,min:1,value:$,tooltip:{open:!1},onChange:function(n){return P("eraser",n)}})]})]})]}),(0,e.jsxs)("div",{className:"header_r_ctn",children:[(0,e.jsxs)(C.ZP,{className:"header_btn",onClick:Ue,children:[(0,e.jsx)(R.Z,{}),"\u5386\u53F2\u8BB0\u5F55"]}),(0,e.jsx)(C.ZP,{type:"primary",className:"header_btn",onClick:function(){d().publish("goResult")},children:"\u5FEB\u901F\u751F\u6210"})]}),Te]}):y.pathname==="/result"?(0,e.jsxs)("div",{className:"header",children:[(0,e.jsxs)("div",{className:"header_l_ctn",children:[(0,e.jsx)("div",{className:"logo",children:"REAI"}),(0,e.jsx)("img",{className:"avatar",onClick:function(){return F.m8.push("/home")},src:"https://s2.loli.net/2023/02/23/a8w7pVv4lXtgbH9.png"}),(0,e.jsx)("p",{style:{fontFamily:"PingFang",fontSize:"12px",margin:"0px"},children:K})]}),(0,e.jsxs)("div",{className:"header_r_ctn",children:[(0,e.jsxs)(C.ZP,{className:"header_btn",onClick:Ue,children:[(0,e.jsx)(R.Z,{}),"\u5386\u53F2\u8BB0\u5F55"]}),(0,e.jsx)(C.ZP,{type:"primary",className:"header_btn",onClick:function(){return F.m8.push({pathname:"/file?name=".concat(K,"?id=").concat(we)})},children:"\u8FD4\u56DE\u8BBE\u8BA1"})]}),Te]}):y.pathname==="/home"?(0,e.jsxs)("div",{className:"header",children:[(0,e.jsx)("div",{className:"header_l_ctn",children:(0,e.jsx)("div",{className:"logo",children:"REAI"})}),(0,e.jsxs)("div",{className:"header_r_ctn",children:[(0,e.jsxs)("div",{className:"userInfo",children:[(0,e.jsx)("p",{style:{color:"#555555",fontSize:"6px",margin:"0px"},children:pe}),(0,e.jsx)("p",{style:{color:"#aaaaaa",fontSize:"2px",margin:"0px"},children:he})]}),(0,e.jsx)("img",{className:"avatar",src:pn}),(0,e.jsx)(Le.Z,{placement:"bottomRight",content:Jn,trigger:"click",arrow:!1,open:xn,onOpenChange:Ln,children:(0,e.jsx)(Ke.Z,{className:"downInfo",style:{fontSize:"12px"}})}),(0,e.jsx)(He.Z,{style:{fontFamily:"PingFang"},title:"\u8D26\u53F7\u8BBE\u7F6E",open:Cn,onCancel:Gn,footer:[(0,e.jsx)(C.ZP,{type:"primary",onClick:$n,children:"\u4FDD\u5B58"},"submit")],children:(0,e.jsxs)("div",{className:"modal",children:[(0,e.jsxs)("div",{className:"modal_col_left",children:[(0,e.jsx)("img",{className:"avatar_show",src:V}),(0,e.jsx)(j.Z,{onChange:Kn,beforeUpload:Xn,showUploadList:!1,children:(0,e.jsx)(C.ZP,{style:{fontFamily:"PingFang",fontSize:"16px"},children:"\u4E0A\u4F20\u5934\u50CF"})})]}),(0,e.jsxs)("div",{className:"modal_col",children:[(0,e.jsx)("p",{style:{fontFamily:"PingFang",fontSize:"16px"},children:"\u90AE\u7BB1"}),(0,e.jsx)("p",{style:{fontFamily:"PingFang",fontSize:"14px",color:"#aaaaaa"},children:he}),(0,e.jsx)("p",{style:{fontFamily:"PingFang",fontSize:"16px"},children:"\u7528\u6237\u540D"}),(0,e.jsx)($e.Z,{placeholder:pe,onChange:function(n){return Vn(n)}})]})]})})]})]}):(0,e.jsxs)("div",{className:"header",children:[(0,e.jsxs)("div",{className:"header_l_ctn",children:[(0,e.jsx)("div",{className:"logo",children:"REAI"}),(0,e.jsx)("p",{style:{fontFamily:"PingFang",fontSize:"12px"},children:"\u6211\u7684\u4F5C\u54C1-1\u526F\u672C"})]}),(0,e.jsxs)("div",{className:"header_r_ctn",children:[(0,e.jsxs)(C.ZP,{className:"header_btn",children:[(0,e.jsx)(R.Z,{}),"\u5386\u53F2\u8BB0\u5F55"]}),(0,e.jsx)(C.ZP,{type:"primary",className:"header_btn",onClick:function(){return F.m8.push("/file")},children:"\u8FD4\u56DE\u8BBE\u8BA1"})]})]})},Ye=We},85440:function(W,I,a){a.d(I,{FD:function(){return r},QJ:function(){return M},Rr:function(){return O},Ti:function(){return o},a$:function(){return x},bN:function(){return F},fZ:function(){return D},gS:function(){return T},jA:function(){return d},n$:function(){return U}});var h=a(6154),g=function(){return axios.get("/api/resource")},p="http://110.42.214.206:9090/DataBase/V1/",x=function(f,j){return h.Z.post("".concat(p,"registerUser"),{userEmail:f,userPwd:j},{headers:{"Content-Type":"application/x-www-form-urlencoded"}})},U=function(f,j){return h.Z.post("".concat(p,"userLogin"),{userEmail:f,userPwd:j},{headers:{"Content-Type":"application/x-www-form-urlencoded"}})},o=function(f,j){return h.Z.post("".concat(p,"uploadFile"),{file:f,fileType:j},{headers:{"Content-Type":"application/x-www-form-urlencoded"}})},r=function(){return h.Z.get("".concat(p,"queryUserInfo"),{headers:{Accept:"application/json","Cache-Control":"no-cache"}})},T=function(f,j){return h.Z.post("".concat(p,"updateUserInfo"),{avatarUrl:f,userName:j},{headers:{"Content-Type":"application/x-www-form-urlencoded"}})},d=function(){return h.Z.get("".concat(p,"getDemoList"),{headers:{Accept:"application/json","Cache-Control":"no-cache"}})},O=function(){return h.Z.get("".concat(p,"getMyProject"),{headers:{Accept:"application/json","Cache-Control":"no-cache"}})},D=function(){return h.Z.get("".concat(p,"getModelList"),{headers:{Accept:"application/json","Cache-Control":"no-cache"}})},F=function(f){return h.Z.post("".concat(p,"saveDesignInfo"),{dataJson:f},{headers:{"Content-Type":"application/x-www-form-urlencoded"}})},M=function(f){return h.Z.get("".concat(p,"getDesignByProjectId"),{params:{projectId:f},headers:{Accept:"application/json","Cache-Control":"no-cache"}})}},10167:function(W,I,a){var h=a(6154),g=function(x){x?h.Z.defaults.headers.common.Authorization=x:delete h.Z.defaults.headers.common.Authorization};I.Z=g}}]);