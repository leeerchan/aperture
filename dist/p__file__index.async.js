"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[413],{72574:function(qt,Re,r){r.r(Re),r.d(Re,{default:function(){return Kt}});var d=r(62435),Qe=r(97173),He=r(15009),T=r.n(He),ke=r(99289),ne=r.n(ke),Te=r(5574),m=r.n(Te),fe=r(45605),Ke=r(54811),Oe=r(45742),Ye=r(50067),Ue=r(6171),Xe=r(68795),se=r(85813),U=r(89580),re=r(71230),Q=r(15746),ve=r(74627),Ge=r(92783),Ie=r(96738),pe=r(71577),We=r(72673),Le=r(1798),j=r.n(Le),Ve=r(85440),Je=r(10167),t=r(86074),_t=se.Z.Meta,$e=function(){var u=(0,d.useState)(!1),b=m()(u,2),x=b[0],e=b[1],a=(0,d.useState)(0),n=m()(a,2),i=n[0],s=n[1],c=(0,d.useState)("library"),g=m()(c,2),C=g[0],A=g[1],v=(0,d.useState)([]),w=m()(v,2),P=w[0],F=w[1],B=(0,d.useState)([]),k=m()(B,2),G=k[0],O=k[1],W=(0,d.useState)([]),ee=m()(W,2),L=ee[0],V=ee[1],J=(0,d.useState)([]),te=m()(J,2),Ae=te[0],X=te[1],ie=(0,d.useState)([]),ae=m()(ie,2),oe=ae[0],xe=ae[1],le=(0,d.useState)([]),$=m()(le,2),z=$[0],R=$[1],De=[{key:"1",label:"\u98CE\u683C",children:(0,t.jsx)("div",{style:{width:"324px"},children:(0,t.jsx)(U.ZP,{grid:{gutter:16,column:1},dataSource:Ae,renderItem:function(l){return(0,t.jsx)(U.ZP.Item,{children:(0,t.jsx)(se.Z,{hoverable:!0,bordered:!1,cover:(0,t.jsx)("img",{src:l.image,onClick:function(){ce(l.name)}}),children:(0,t.jsxs)(re.Z,{justify:"space-between",align:"middle",children:[(0,t.jsx)(Q.Z,{children:(0,t.jsx)("p",{style:{fontFamily:"PingFang",fontSize:"12px",margin:"0px",textAlign:"left"},children:l.name})}),(0,t.jsx)(Q.Z,{children:(0,t.jsx)(ve.Z,{placement:"right",title:l.name,content:(0,t.jsx)("div",{children:(0,t.jsx)("p",{children:l.desc})}),trigger:"click",children:(0,t.jsx)(fe.Z,{})})})]})})})}})})},{key:"2",label:"\u8BBE\u8BA1\u5E08",children:(0,t.jsx)("div",{style:{width:"324px"},children:(0,t.jsx)(U.ZP,{grid:{gutter:16,column:1},dataSource:oe,renderItem:function(l){return(0,t.jsx)(U.ZP.Item,{children:(0,t.jsx)(se.Z,{hoverable:!0,bordered:!1,cover:(0,t.jsx)("img",{src:l.image,onClick:function(){ce(l.name)}}),children:(0,t.jsxs)(re.Z,{justify:"space-between",align:"middle",children:[(0,t.jsx)(Q.Z,{children:(0,t.jsx)("p",{style:{fontFamily:"PingFang",fontSize:"12px",margin:"0px",textAlign:"left"},children:l.name})}),(0,t.jsx)(Q.Z,{children:(0,t.jsx)(ve.Z,{placement:"right",title:l.name,content:(0,t.jsx)("div",{children:(0,t.jsx)("p",{children:l.desc})}),trigger:"click",children:(0,t.jsx)(fe.Z,{})})})]})})})}})})},{key:"3",label:"\u6750\u8D28",children:(0,t.jsx)("div",{style:{width:"324px"},children:(0,t.jsx)(U.ZP,{grid:{gutter:16,column:2},dataSource:z,renderItem:function(l){return(0,t.jsx)(U.ZP.Item,{children:(0,t.jsx)(se.Z,{hoverable:!0,bordered:!1,cover:(0,t.jsx)("img",{src:l.image,onClick:function(){ce(l.name)}}),children:(0,t.jsxs)(re.Z,{justify:"space-between",align:"middle",children:[(0,t.jsx)(Q.Z,{children:(0,t.jsx)("p",{style:{fontFamily:"PingFang",fontSize:"12px",margin:"0px",textAlign:"left"},children:l.name})}),(0,t.jsx)(Q.Z,{children:(0,t.jsx)(ve.Z,{placement:"right",title:l.name,content:(0,t.jsx)("div",{children:(0,t.jsx)("p",{children:l.desc})}),trigger:"click",children:(0,t.jsx)(fe.Z,{})})})]})})})}})})}];(0,d.useEffect)(function(){var N=localStorage.getItem("token");(0,Je.Z)(N),Be()},[]);var Be=function(){var N=ne()(T()().mark(function l(){var y,ue,f,me,he,ye,ge;return T()().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,(0,Ve.fZ)();case 2:for(y=q.sent,ue=[],f=0;f<y.data.data[0].lists.length;f++)ue.push({name:y.data.data[0].lists[f].name,image:y.data.data[0].lists[f].imgUrl,desc:y.data.data[0].lists[f].description});for(O(ue),me=[],f=0;f<y.data.data[1].lists.length;f++)me.push({name:y.data.data[1].lists[f].name,image:y.data.data[1].lists[f].imgUrl,desc:y.data.data[1].lists[f].description});for(V(me),he=[],f=0;f<y.data.data[2].lists.length;f++)he.push({name:y.data.data[2].lists[f].name,image:y.data.data[2].lists[f].imgUrl,desc:y.data.data[2].lists[f].description});for(X(he),ye=[],f=0;f<y.data.data[3].lists.length;f++)ye.push({name:y.data.data[3].lists[f].name,image:y.data.data[3].lists[f].imgUrl,desc:y.data.data[3].lists[f].description});for(xe(ye),ge=[],f=0;f<y.data.data[4].lists.length;f++)ge.push({name:y.data.data[4].lists[f].name,image:y.data.data[4].lists[f].imgUrl,desc:y.data.data[4].lists[f].description});R(ge);case 18:case"end":return q.stop()}},l)}));return function(){return N.apply(this,arguments)}}(),ce=function(l){j().publish("addTag",l)},de=function(l){j().publish("setModel",l)};return(0,t.jsxs)("div",{className:"select_ctn",style:{width:x?48:400},children:[(0,t.jsxs)("div",{className:"select_bar_ctn",children:[(0,t.jsxs)("div",{className:"tab_bar",children:[(0,t.jsxs)("div",{className:"option_btn ".concat(i==0?"option_btn-focused":""),onClick:function(){return s(0)},children:[(0,t.jsx)(Ke.Z,{}),(0,t.jsx)("p",{style:{fontFamily:"PingFang",fontSize:"10px"},children:"\u6A21\u578B"})]}),(0,t.jsxs)("div",{className:"option_btn ".concat(i==1?"option_btn-focused":""),onClick:function(){return s(1)},children:[(0,t.jsx)(Oe.Z,{}),(0,t.jsx)("p",{style:{fontFamily:"PingFang",fontSize:"10px"},children:"\u4EA7\u54C1"})]}),(0,t.jsxs)("div",{className:"option_btn ".concat(i==2?"option_btn-focused":""),onClick:function(){return s(2)},children:[(0,t.jsx)(Ye.Z,{}),(0,t.jsx)("p",{style:{fontFamily:"PingFang",fontSize:"10px"},children:"\u5173\u952E\u8BCD"})]})]}),(0,t.jsx)("div",{className:"option_btn",onClick:function(){e(!x)},children:(0,t.jsx)(Ue.Z,{style:{transform:"rotate(".concat(x?180:0,"deg")}})})]}),(0,t.jsxs)("div",{className:"select_list_ctn",style:{transform:"translateX(".concat(x?-352:0,"px)")},children:[(0,t.jsx)("div",{className:"select_blank_box"}),(0,t.jsxs)("div",{className:"select_list",children:[(0,t.jsx)("div",{className:"top_menu",children:(0,t.jsx)(Ge.Z,{style:{fontFamily:"PingFang",fontSize:"14px"},block:!0,options:["\u516C\u5171\u8D44\u6E90","\u6211\u7684\u6536\u85CF"]})}),(0,t.jsx)("div",{className:"search_input",children:(0,t.jsx)(Ie.Z,{size:"small",placeholder:"\u641C\u7D22",suffix:(0,t.jsx)(pe.ZP,{type:"text",icon:(0,t.jsx)(Xe.Z,{})})})}),i==0&&(0,t.jsx)("div",{className:"select_list_grid-one",children:(0,t.jsx)(U.ZP,{grid:{gutter:16,column:1},dataSource:G,renderItem:function(l){return(0,t.jsx)(U.ZP.Item,{children:(0,t.jsx)(se.Z,{hoverable:!0,bordered:!1,style:{width:"100%"},cover:(0,t.jsx)("img",{src:l.image,onClick:function(){de(l.name)}}),children:(0,t.jsxs)(re.Z,{justify:"space-between",align:"middle",children:[(0,t.jsx)(Q.Z,{children:(0,t.jsx)("p",{style:{fontFamily:"PingFang",fontSize:"12px",margin:"0px",textAlign:"left"},children:l.name})}),(0,t.jsx)(Q.Z,{children:(0,t.jsx)(ve.Z,{placement:"right",title:l.name,content:(0,t.jsx)("div",{children:(0,t.jsx)("p",{children:l.desc})}),trigger:"click",children:(0,t.jsx)(fe.Z,{})})})]})})})}})}),i==1&&(0,t.jsx)("div",{className:"select_list_grid-one",children:(0,t.jsx)(U.ZP,{grid:{gutter:16,column:2},dataSource:L,renderItem:function(l){return(0,t.jsx)(U.ZP.Item,{children:(0,t.jsx)(se.Z,{bordered:!1,style:{width:"100%"},cover:(0,t.jsx)("img",{src:l.image}),children:(0,t.jsxs)(re.Z,{justify:"space-between",align:"middle",children:[(0,t.jsx)(Q.Z,{children:(0,t.jsx)("p",{style:{fontFamily:"PingFang",fontSize:"12px",margin:"0px",textAlign:"left"},children:l.name})}),(0,t.jsx)(Q.Z,{children:(0,t.jsx)(ve.Z,{placement:"right",title:l.name,overlayStyle:{width:"300px"},content:(0,t.jsx)("div",{children:(0,t.jsx)("p",{children:l.desc})}),trigger:"click",children:(0,t.jsx)(fe.Z,{})})})]})})})}})}),i==2&&(0,t.jsx)("div",{className:"select_list_grid-two",children:(0,t.jsx)(We.Z,{style:{fontFamily:"PingFang"},defaultActiveKey:"1",items:De})}),(0,t.jsx)("div",{className:"bottom_blank_box"})]})]})]})},qe=$e,_e=r(88484),Ce=r(82188),Me=r(15045),je=r(31365),be=r(27790),et=r(60974),tt=r(46020),at=r.n(tt),Se=r(96120),nt=r.n(Se),ea=r(8179),st=r(71484),rt=Math.PI/180;function it(S,u,b){return we.apply(this,arguments)}function we(){return we=ne()(T()().mark(function S(u,b,x){var e,a,n,i,s,c,g,C,A,v,w,P=arguments;return T()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:if(e=P.length>3&&P[3]!==void 0?P[3]:1,a=P.length>4&&P[4]!==void 0?P[4]:0,n=b.getContext("2d"),n){B.next=5;break}throw new Error("No 2d context");case 5:i=u.naturalWidth/u.width,s=u.naturalHeight/u.height,c=window.devicePixelRatio,b.width=Math.floor(x.width*i*c),b.height=Math.floor(x.height*s*c),n.scale(c,c),n.imageSmoothingQuality="high",g=x.x*i,C=x.y*s,A=a*rt,v=u.naturalWidth/2,w=u.naturalHeight/2,n.save(),n.translate(-g,-C),n.translate(v,w),n.rotate(A),n.scale(e,e),n.translate(-v,-w),n.drawImage(u,0,0,u.naturalWidth,u.naturalHeight,0,0,u.naturalWidth,u.naturalHeight),n.restore();case 25:case"end":return B.stop()}},S)})),we.apply(this,arguments)}function ot(S,u,b){(0,d.useEffect)(function(){var x=setTimeout(function(){S.apply(void 0,b)},u);return function(){clearTimeout(x)}},b)}var lt=r(19632),ct=r.n(lt),dt=r(96695),ut=r.n(dt),ht=r(97857),_=r.n(ht),gt=r(12444),ft=r.n(gt),vt=r(72004),pt=r.n(vt),At=r(25098),Z=r.n(At),mt=r(31996),yt=r.n(mt),xt=r(26037),Ct=r.n(xt),jt=r(9783),D=r.n(jt),bt=r(45697),I=r.n(bt),St=r(41227),wt=r(14301),Pt=r(91033);function Dt(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},u=S.ctx,b=S.img,x=S.x,e=S.y,a=S.w,n=S.h,i=S.offsetX,s=S.offsetY;typeof x!="number"&&(x=0),typeof e!="number"&&(e=0),typeof a!="number"&&(a=u.canvas.width),typeof n!="number"&&(n=u.canvas.height),typeof i!="number"&&(i=.5),typeof s!="number"&&(s=.5),i<0&&(i=0),s<0&&(s=0),i>1&&(i=1),s>1&&(s=1);var c=b.width,g=b.height,C=Math.min(a/c,n/g),A=c*C,v=g*C,w,P,F,B,k=1;A<a&&(k=a/A),Math.abs(k-1)<1e-14&&v<n&&(k=n/v),A*=k,v*=k,F=c/(A/a),B=g/(v/n),w=(c-F)*i,P=(g-B)*s,w<0&&(w=0),P<0&&(P=0),F>c&&(F=c),B>g&&(B=g),u.drawImage(b,w,P,F,B,x,e,a,n)}function Bt(S,u){return{x:S.x+(u.x-S.x)/2,y:S.y+(u.y-S.y)/2}}var Zt={display:"block",position:"absolute"},Rt=[{name:"interface",zIndex:15},{name:"drawing",zIndex:11},{name:"temp",zIndex:12},{name:"grid",zIndex:10}],Fe=I().oneOfType([I().number,I().string]),Pe=function(S){yt()(b,S);var u=Ct()(b);function b(x){var e;return ft()(this,b),e=u.call(this,x),D()(Z()(e),"componentWillUnmount",function(){e.canvasObserver.unobserve(e.canvasContainer)}),D()(Z()(e),"drawImage",function(){e.props.imgSrc&&(e.image=new Image,e.image.src=e.props.imgSrc,e.image.onload=function(){return Dt({ctx:e.ctx.grid,img:e.image})})}),D()(Z()(e),"undo",function(){var a=e.lines.slice(0,-1);e.clear(),e.simulateDrawingLines({lines:a,immediate:!0}),e.triggerOnChange()}),D()(Z()(e),"getSaveData",function(){return JSON.stringify({lines:e.lines,width:e.props.canvasWidth,height:e.props.canvasHeight})}),D()(Z()(e),"loadSaveData",function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.props.immediateLoading;if(typeof a!="string")throw new Error("saveData needs to be of type string!");var i=JSON.parse(a),s=i.lines,c=i.width,g=i.height;if(!s||typeof s.push!="function")throw new Error("saveData.lines needs to be an array!");if(e.clear(),c===e.props.canvasWidth&&g===e.props.canvasHeight)e.simulateDrawingLines({lines:s,immediate:n});else{var C=e.props.canvasWidth/c,A=e.props.canvasHeight/g,v=(C+A)/2;e.simulateDrawingLines({lines:s.map(function(w){return _()(_()({},w),{},{points:w.points.map(function(P){return{x:P.x*C,y:P.y*A}}),brushRadius:w.brushRadius*v})}),immediate:n})}}),D()(Z()(e),"simulateDrawingLines",function(a){var n=a.lines,i=a.immediate,s=0,c=i?0:e.props.loadTimeOffset;n.forEach(function(g){var C=g.points,A=g.brushColor,v=g.brushRadius;if(i){e.drawPoints({points:C,brushColor:A,brushRadius:v}),e.points=C,e.saveLine({brushColor:A,brushRadius:v});return}for(var w=function(B){s+=c,window.setTimeout(function(){e.drawPoints({points:C.slice(0,B+1),brushColor:A,brushRadius:v})},s)},P=1;P<C.length;P++)w(P);s+=c,window.setTimeout(function(){e.points=C,e.saveLine({brushColor:A,brushRadius:v})},s)})}),D()(Z()(e),"handleDrawStart",function(a){a.preventDefault(),e.isPressing=!0;var n=e.getPointerPos(a),i=n.x,s=n.y;a.touches&&a.touches.length>0&&e.lazy.update({x:i,y:s},{both:!0}),e.handlePointerMove(i,s)}),D()(Z()(e),"handleDrawMove",function(a){a.preventDefault();var n=e.getPointerPos(a),i=n.x,s=n.y;e.handlePointerMove(i,s)}),D()(Z()(e),"handleDrawEnd",function(a){a.preventDefault(),e.handleDrawMove(a),e.isDrawing=!1,e.isPressing=!1,e.saveLine()}),D()(Z()(e),"handleCanvasResize",function(a,n){var i=e.getSaveData(),s=ut()(a),c;try{for(s.s();!(c=s.n()).done;){var g=c.value,C=g.contentRect,A=C.width,v=C.height;e.setCanvasSize(e.canvas.interface,A,v),e.setCanvasSize(e.canvas.drawing,A,v),e.setCanvasSize(e.canvas.temp,A,v),e.setCanvasSize(e.canvas.grid,A,v),e.drawGrid(e.ctx.grid),e.loop({once:!0})}}catch(w){s.e(w)}finally{s.f()}e.loadSaveData(i,!0)}),D()(Z()(e),"setCanvasSize",function(a,n,i){a.width=n,a.height=i,a.style.width=n,a.style.height=i}),D()(Z()(e),"getPointerPos",function(a){var n=e.canvas.interface.getBoundingClientRect(),i=a.clientX,s=a.clientY;return a.changedTouches&&a.changedTouches.length>0&&(i=a.changedTouches[0].clientX,s=a.changedTouches[0].clientY),{x:i-n.left,y:s-n.top}}),D()(Z()(e),"handlePointerMove",function(a,n){if(!e.props.disabled){e.lazy.update({x:a,y:n});var i=!e.lazy.isEnabled(),s=e.props.erase?_()(_()({},e.lazy.brush.toObject()),{},{erase:!0}):e.lazy.brush.toObject();(e.isPressing&&!e.isDrawing||i&&e.isPressing)&&(e.isDrawing=!0,e.points.push(s)),e.isDrawing&&(e.points.push(e.lazy.brush.toObject()),e.drawPoints({points:e.points,brushColor:s.erase?"erase":e.props.brushColor,brushRadius:e.props.brushRadius})),e.mouseHasMoved=!0}}),D()(Z()(e),"drawPoints",function(a){var n=a.points,i=a.brushColor,s=a.brushRadius;e.ctx.temp.lineJoin="round",e.ctx.temp.lineCap="round",e.ctx.temp.strokeStyle=i==="erase"?"#dbb7bb":i,e.ctx.drawing.globalCompositeOperation=i==="erase"?"destination-out":"source-over",e.ctx.temp.clearRect(0,0,e.ctx.temp.canvas.width,e.ctx.temp.canvas.height),e.ctx.temp.lineWidth=s*2;var c=n[0],g=n[1];e.ctx.temp.moveTo(g.x,g.y),e.ctx.temp.beginPath();for(var C=1,A=n.length;C<A;C++){var v=Bt(c,g);e.ctx.temp.quadraticCurveTo(c.x,c.y,v.x,v.y),c=n[C],g=n[C+1]}e.ctx.temp.lineTo(c.x,c.y),e.ctx.temp.stroke()}),D()(Z()(e),"saveLine",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=a.brushColor,i=a.brushRadius;if(!(e.points.length<2)){e.points[0].erase&&(n="erase"),e.lines.push({points:ct()(e.points),brushColor:n||e.props.brushColor,brushRadius:i||e.props.brushRadius}),e.points.length=0;var s=e.canvas.temp.width,c=e.canvas.temp.height;e.ctx.drawing.drawImage(e.canvas.temp,0,0,s,c),e.ctx.temp.clearRect(0,0,s,c),e.triggerOnChange()}}),D()(Z()(e),"triggerOnChange",function(){e.props.onChange&&e.props.onChange(Z()(e))}),D()(Z()(e),"clear",function(){e.lines=[],e.valuesChanged=!0,e.ctx.drawing.clearRect(0,0,e.canvas.drawing.width,e.canvas.drawing.height),e.ctx.temp.clearRect(0,0,e.canvas.temp.width,e.canvas.temp.height)}),D()(Z()(e),"loop",function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=a.once,i=n===void 0?!1:n;if(e.mouseHasMoved||e.valuesChanged){var s=e.lazy.getPointerCoordinates(),c=e.lazy.getBrushCoordinates();e.drawInterface(e.ctx.interface,s,c),e.mouseHasMoved=!1,e.valuesChanged=!1}i||window.requestAnimationFrame(function(){e.loop()})}),D()(Z()(e),"drawGrid",function(a){if(!e.props.hideGrid){a.clearRect(0,0,a.canvas.width,a.canvas.height),a.beginPath(),a.setLineDash([5,1]),a.setLineDash([]),a.strokeStyle=e.props.gridColor,a.lineWidth=.5;for(var n=25,i=0;i<a.canvas.width;)i+=n,a.moveTo(i,0),a.lineTo(i,a.canvas.height);a.stroke();for(var s=0;s<a.canvas.height;)s+=n,a.moveTo(0,s),a.lineTo(a.canvas.width,s);a.stroke()}}),D()(Z()(e),"drawInterface",function(a,n,i){if(!e.props.hideInterface){a.clearRect(0,0,a.canvas.width,a.canvas.height);var s=e.props.erase?"#dbb7bb":e.props.brushColor;a.beginPath(),a.fillStyle=s,a.arc(i.x,i.y,e.props.brushRadius,0,Math.PI*2,!0),a.fill(),a.beginPath(),a.fillStyle=e.props.catenaryColor,a.arc(n.x,n.y,4,0,Math.PI*2,!0),a.fill(),e.lazy.isEnabled()&&(a.beginPath(),a.lineWidth=2,a.lineCap="round",a.setLineDash([2,4]),a.strokeStyle=e.props.catenaryColor,e.catenary.drawToCanvas(e.ctx.interface,i,n,e.chainLength),a.stroke()),a.beginPath(),a.fillStyle=e.props.catenaryColor,a.arc(i.x,i.y,2,0,Math.PI*2,!0),a.fill()}}),e.canvas={},e.ctx={},e.catenary=new wt.oT,e.points=[],e.lines=[],e.mouseHasMoved=!0,e.valuesChanged=!0,e.isDrawing=!1,e.isPressing=!1,e}return pt()(b,[{key:"componentDidMount",value:function(){var e=this;this.lazy=new St.xv({radius:this.props.lazyRadius*window.devicePixelRatio,enabled:!0,initialPoint:{x:window.innerWidth/2,y:window.innerHeight/2}}),this.chainLength=this.props.lazyRadius*window.devicePixelRatio,this.canvasObserver=new Pt.Z(function(a,n){return e.handleCanvasResize(a,n)}),this.canvasObserver.observe(this.canvasContainer),this.drawImage(),this.loop(),window.setTimeout(function(){var a=window.innerWidth/2,n=window.innerHeight/2;e.lazy.update({x:a-e.chainLength/4,y:n},{both:!0}),e.lazy.update({x:a+e.chainLength/4,y:n},{both:!1}),e.mouseHasMoved=!0,e.valuesChanged=!0,e.clear(),e.props.saveData&&e.loadSaveData(e.props.saveData)},100)}},{key:"componentDidUpdate",value:function(e){e.lazyRadius!==this.props.lazyRadius&&(this.chainLength=this.props.lazyRadius*window.devicePixelRatio,this.lazy.setRadius(this.props.lazyRadius*window.devicePixelRatio)),e.saveData!==this.props.saveData&&this.loadSaveData(this.props.saveData),JSON.stringify(e)!==JSON.stringify(this.props)&&(this.valuesChanged=!0)}},{key:"render",value:function(){var e=this;return(0,t.jsx)("div",{className:this.props.className,style:_()({display:"block",background:this.props.backgroundColor,touchAction:"none",width:this.props.canvasWidth,height:this.props.canvasHeight},this.props.style),ref:function(n){n&&(e.canvasContainer=n)},children:Rt.map(function(a){var n=a.name,i=a.zIndex,s=n==="interface";return(0,t.jsx)("canvas",{ref:function(g){g&&(e.canvas[n]=g,e.ctx[n]=g.getContext("2d"))},style:_()(_()({},Zt),{},{zIndex:i}),onMouseDown:s?e.handleDrawStart:void 0,onMouseMove:s?e.handleDrawMove:void 0,onMouseUp:s?e.handleDrawEnd:void 0,onMouseOut:s?e.handleDrawEnd:void 0,onTouchStart:s?e.handleDrawStart:void 0,onTouchMove:s?e.handleDrawMove:void 0,onTouchEnd:s?e.handleDrawEnd:void 0,onTouchCancel:s?e.handleDrawEnd:void 0},n)})})}}]),b}(d.PureComponent);D()(Pe,"propTypes",{onChange:I().func,loadTimeOffset:I().number,lazyRadius:I().number,brushRadius:I().number,brushColor:I().string,catenaryColor:I().string,gridColor:I().string,backgroundColor:I().string,hideGrid:I().bool,canvasWidth:Fe,canvasHeight:Fe,disabled:I().bool,imgSrc:I().string,saveData:I().string,immediateLoading:I().bool,hideInterface:I().bool,erase:I().bool}),D()(Pe,"defaultProps",{onChange:null,loadTimeOffset:5,lazyRadius:12,brushRadius:10,brushColor:"#444",catenaryColor:"#0a0302",gridColor:"rgba(150,150,150,0.17)",backgroundColor:"#FFF",hideGrid:!1,canvasWidth:400,canvasHeight:400,disabled:!1,imgSrc:"",saveData:"",immediateLoading:!1,hideInterface:!1,erase:!1});var It=r(82826),Mt=r(48689),Ft="data:image/png;base64,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";function Nt(S){var u=(0,d.useState)("#000000"),b=m()(u,2),x=b[0],e=b[1],a=(0,d.useState)(""),n=m()(a,2),i=n[0],s=n[1],c=(0,d.useState)(10),g=m()(c,2),C=g[0],A=g[1],v=(0,d.useState)(!1),w=m()(v,2),P=w[0],F=w[1],B=(0,d.useState)(512),k=m()(B,2),G=k[0],O=k[1],W=(0,d.useState)(512),ee=m()(W,2),L=ee[0],V=ee[1],J=(0,d.useState)(!1),te=m()(J,2),Ae=te[0],X=te[1],ie=(0,d.useState)(0),ae=m()(ie,2),oe=ae[0],xe=ae[1],le=(0,d.useRef)(null),$=(0,d.useRef)([]);return window.onbeforeunload=function(z){return z&&(z.returnValue="\u5173\u95ED\u63D0\u793A"),!1},j().subscribe("beginEdit",function(z,R){O(R[0]),V(R[1])}),j().unsubscribe("changeBrushColor"),j().subscribe("changeBrushColor",function(z,R){e(R)}),j().unsubscribe("changeBrushSize"),j().subscribe("changeBrushSize",function(z,R){A(R)}),j().unsubscribe("changeIsEraser"),j().subscribe("changeIsEraser",function(z,R){F(R)}),j().unsubscribe("zoom"),j().subscribe("zoom",function(z,R){O(Math.round(G*R)),V(Math.round(L*R))}),(0,t.jsxs)("div",{className:"sketchCtn",ref:le,style:{width:G,height:L},children:[(0,t.jsx)("div",{className:"canvas-container",onMouseDown:function(){X(!1)},children:(0,t.jsx)("div",{id:"canvas0",className:"canvas_wrap",style:{zIndex:501},children:(0,t.jsx)(Pe,{enablePanAndZoom:!0,clampLinesToDocument:!0,ref:$,brushColor:x,brushRadius:C/10,catenaryColor:x,gridColor:"#ccc",lazyRadius:0,hideGrid:!0,erase:P,canvasWidth:G,canvasHeight:L,backgroundColor:"#00000000"})})}),(0,t.jsxs)("div",{className:"rightUp-ctn",children:[(0,t.jsx)("div",{className:"picker-btn",onClick:function(R){$.current.undo(),X(!1),R.stopPropagation()},children:(0,t.jsx)(It.Z,{})}),(0,t.jsx)("div",{className:"picker-btn",onClick:function(R){oe||s(Ft),$.current.clear(),X(!1),R.stopPropagation()},children:(0,t.jsx)(Mt.Z,{})})]})]})}var zt=Nt,Et=Me.Z.Panel,ta=Ie.Z.TextArea,Qt=je.Z.Dragger,Ne=function(u){return new Promise(function(b,x){var e=new FileReader;e.readAsDataURL(u),e.onload=function(){return b(e.result)},e.onerror=function(a){return x(a)}})},Ht=function(){var u=(0,Ce.TH)(),b=(0,d.useState)(0),x=m()(b,2),e=x[0],a=x[1],n=(0,d.useState)(""),i=m()(n,2),s=i[0],c=i[1],g=(0,d.useState)("start"),C=m()(g,2),A=C[0],v=C[1],w=(0,d.useState)(""),P=m()(w,2),F=P[0],B=P[1],k=(0,d.useState)(""),G=m()(k,2),O=G[0],W=G[1],ee=(0,d.useState)(!1),L=m()(ee,2),V=L[0],J=L[1],te=(0,d.useState)(1),Ae=m()(te,2),X=Ae[0],ie=Ae[1],ae=(0,d.useState)(!1),oe=m()(ae,2),xe=oe[0],le=oe[1],$=(0,d.useState)(""),z=m()($,2),R=z[0],De=z[1],Be=(0,d.useState)(Array),ce=m()(Be,2),de=ce[0],N=ce[1],l=(0,d.useRef)(null),y=(0,d.useRef)(null),ue=(0,d.useRef)(null),f=(0,d.useRef)(""),me=(0,d.useState)(),he=m()(me,2),ye=he[0],ge=he[1],ze=(0,d.useState)(),q=m()(ze,2),Y=q[0],Ot=q[1];(0,d.useEffect)(function(){var p=window.location.search.slice(1).split("?")[0].split("=")[1],h=parseInt(window.location.search.slice(1).split("?")[1].split("=")[1]);if(a(h),c(p),u&&u.state){v("edit"),B(u.state.img),W(u.state.img);var o=new Image;o.src=u.state.img,o.onload=function(){j().publish("beginEdit",[400,Math.round(o.height/o.width*400)])}}},[]),j().unsubscribe("addTag"),j().subscribe("addTag",function(p,h){de.push(h)});var Yt=function(h){h.deltaY<-10?(j().publish("zoom",5/4),ie(X*5/4)):h.deltaY>10&&(j().publish("zoom",4/5),ie(X*4/5))},Ut=function(){J(!0)},Xt=function(){J(!1),O!==""?$t():B(""),v("edit")},Ze=function(){J(!1)},Gt=function(){W("")};j().unsubscribe("changeGenerationMode"),j().subscribe("changeGenerationMode",function(p,h){if(A==="start"){v("edit");var o=new Image;o.src=F,o.onload=function(){j().publish("beginEdit",[400,Math.round(o.height/o.width*400)])}}else A==="edit"&&v("start")}),j().unsubscribe("changeToEditImgMode"),j().subscribe("changeToEditImgMode",function(p,h){V?Ze():Ut(),J(!V)}),j().unsubscribe("goResult"),j().subscribe("goResult",function(p,h){var o=document.querySelector(".container");o?at()(o).then(function(M){var E=M.toDataURL("image/jpeg");Ce.m8.push({pathname:"/result?name=".concat(s,"?id=").concat(e)},{img:E,txt:R,tags:de})}):Ce.m8.push({pathname:"/result?name=".concat(s,"?id=").concat(e)},{img:"",txt:R,tags:de})});var Wt=function(){var p=ne()(T()().mark(function h(o){var M,E;return T()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:if(M=o.file.status,M!=="done"){K.next=13;break}return K.next=4,Ne(o.file.originFileObj);case 4:o.file.preview=K.sent,B(o.file.preview),W(o.file.preview),v("edit"),E=new Image,E.src=o.file.preview,E.onload=function(){j().publish("beginEdit",[400,Math.round(E.height/E.width*400)])},K.next=14;break;case 13:M==="error"&&be.ZP.error("".concat(o.file.name," \u6587\u4EF6\u4E0A\u4F20\u5931\u8D25"));case 14:case"end":return K.stop()}},h)}));return function(o){return p.apply(this,arguments)}}(),Lt=function(){var p=ne()(T()().mark(function h(o){var M;return T()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:if(M=o.file.status,M!=="done"){H.next=8;break}return H.next=4,Ne(o.file.originFileObj);case 4:o.file.preview=H.sent,W(o.file.preview),H.next=9;break;case 8:M==="error"&&be.ZP.error("".concat(o.file.name," \u6587\u4EF6\u4E0A\u4F20\u5931\u8D25"));case 9:case"end":return H.stop()}},h)}));return function(o){return p.apply(this,arguments)}}(),Ee=function(){var p=ne()(T()().mark(function h(o){var M,E;return T()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return M=o.type==="image/png",E=o.type==="image/jpeg",M||E||be.ZP.error("".concat(o.name," \u4E0D\u662F png/jpg/jpeg \u6587\u4EF6")),K.abrupt("return",M||E||je.Z.LIST_IGNORE);case 4:case"end":return K.stop()}},h)}));return function(o){return p.apply(this,arguments)}}();function Vt(p,h,o){return(0,Se.centerCrop)((0,Se.makeAspectCrop)({unit:"%",width:100},o,p,h),p,h)}ot(ne()(T()().mark(function p(){return T()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:Y!=null&&Y.width&&Y!==null&&Y!==void 0&&Y.height&&y.current&&l.current&&it(y.current,l.current,Y,1,0);case 1:case"end":return o.stop()}},p)})),100,[Y,1,0]);function Jt(p){var h=p.currentTarget,o=h.width,M=h.height;ge(Vt(o,M,o/M)),le(!1)}function $t(){if(xe){if(!l.current)throw new Error("Crop canvas does not exist");l.current.toBlob(function(h){if(!h)throw new Error("Failed to create blob");f.current&&URL.revokeObjectURL(f.current),f.current=URL.createObjectURL(h),ue.current.href=f.current;var o=new FileReader;o.readAsDataURL(h),o.onload=function(M){var E=M.target.result;B(E);var H=new Image;H.src=E,H.onload=function(){j().publish("beginEdit",[400,Math.round(H.height/H.width*400)])}}})}else{B(O);var p=new Image;p.src=O,p.onload=function(){j().publish("beginEdit",[400,Math.round(p.height/p.width*400)])}}}return(0,t.jsxs)("div",{className:"operate_ctn",children:[(0,t.jsxs)(et.Z,{style:{fontFamily:"PingFang"},title:"\u7F16\u8F91\u56FE\u7247",open:V,onCancel:Ze,footer:[(0,t.jsx)("div",{children:(0,t.jsxs)(re.Z,{gutter:16,justify:"space-between",children:[(0,t.jsx)(Q.Z,{span:5,children:(0,t.jsx)(je.Z,{onChange:Lt,beforeUpload:Ee,showUploadList:!1,children:(0,t.jsx)(pe.ZP,{children:F===""?"\u4E0A\u4F20\u56FE\u7247":"\u66F4\u6362\u56FE\u7247"})})}),(0,t.jsx)(Q.Z,{span:5,children:(0,t.jsx)(pe.ZP,{disabled:O==="",onClick:Gt,children:"\u5220\u9664\u56FE\u7247"})}),(0,t.jsxs)(Q.Z,{offset:6,span:4,children:[(0,t.jsx)(pe.ZP,{type:"primary",onClick:Xt,children:"\u786E\u8BA4"},"submit"),(0,t.jsx)("a",{ref:ue,download:!0,style:{position:"absolute",top:"-200vh",visibility:"hidden"},children:"Hidden download"})]}),(0,t.jsx)(Q.Z,{span:4,children:(0,t.jsx)(pe.ZP,{onClick:Ze,children:"\u53D6\u6D88"},"submit")})]})})],children:[O!==""&&(0,t.jsx)(nt(),{crop:ye,onChange:function(h,o){return ge(o)},onComplete:function(h){Ot(h),le(!0)},aspect:void 0,children:(0,t.jsx)("img",{ref:y,alt:"Crop me",src:O,onLoad:Jt})}),!!Y&&(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{children:(0,t.jsx)("canvas",{ref:l,style:{border:"1px solid black",objectFit:"contain",width:Y.width,height:Y.height,display:"none"}})})})]}),A==="start"&&(0,t.jsxs)("div",{className:"start_ctn",children:[(0,t.jsx)("div",{className:"upload_ctn",children:(0,t.jsxs)(Qt,{beforeUpload:Ee,onChange:Wt,multiple:!1,children:[(0,t.jsx)(_e.Z,{style:{fontSize:"24px",color:"var(--dark-color)"}}),(0,t.jsx)("p",{style:{fontFamily:"PingFang",fontSize:"16px",color:"var(--dark-color)"},children:"\u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216\u70B9\u51FB\u4E0A\u4F20"}),(0,t.jsx)("p",{style:{fontFamily:"PingFang",fontSize:"12px",color:"var(--dark-color)"},children:"\u652F\u6301 png/jpg/jpeg \u683C\u5F0F\uFF1B\u5927\u5C0F\u4E0D\u8D85\u8FC75M"})]})}),(0,t.jsx)("button",{className:"start_paint_btn",onClick:function(){v("edit"),j().publish("beginEdit",[400,400])},children:(0,t.jsx)("p",{style:{fontFamily:"PingFang",fontSize:"16px",color:"var(--dark-color)"},children:"\u76F4\u63A5\u5F00\u59CB\u7ED8\u753B"})})]}),A==="edit"&&(0,t.jsxs)("div",{className:"container",id:"container",onWheel:Yt,children:[(0,t.jsx)(zt,{imgSrc:F,editMode:A}),(0,t.jsx)("div",{className:"target",children:(0,t.jsx)("img",{className:"img",width:400*X,height:400*X,src:F===""?void 0:F})})]}),(0,t.jsx)("div",{className:"prompt_ctn",children:(0,t.jsx)(Me.Z,{collapsible:"header",defaultActiveKey:["1"],size:"small",children:(0,t.jsx)(Et,{header:"\u6587\u5B57\u5173\u952E\u8BCD",children:(0,t.jsx)(st.EG,{style:{resize:"none",fontFamily:"PingFang",fontSize:"12px"},showClear:!0,allowDuplicates:!1,value:de,onChange:function(h){N(h)},onInputChange:function(h,o){De(h)},placeholder:"product design of a handheld work light, soft lighting, redshift render, digital art, hyper-detailed, ultra-realistic, 8k post-production"})},"1")})})]})},kt=Ht,Tt=function(){var u=100;return(0,t.jsxs)("div",{className:"file_ctn",children:[(0,t.jsx)(Qe.Z,{}),(0,t.jsxs)("div",{className:"core_ctn",children:[(0,t.jsx)(qe,{}),(0,t.jsx)(kt,{})]})]})},Kt=Tt}}]);
