(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5],{260:function(t,e,n){var content=n(262);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("019f0088",content,!0,{sourceMap:!1})},261:function(t,e,n){"use strict";n(260)},262:function(t,e,n){var o=n(69)(!1);o.push([t.i,".canvas-area[data-v-0c08a694]{position:absolute}#myCanvas[data-v-0c08a694]{z-index:100}",""]),t.exports=o},263:function(t,e,n){"use strict";n.r(e);var o={name:"DrawTool",data:function(){return{canvasMode:"penBlack",canvas:null,context:null,isDrag:!1}},mounted:function(){this.canvas=document.querySelector("#myCanvas"),this.context=this.canvas.getContext("2d"),this.context.lineCap="round",this.context.lineJoin="round",this.context.lineWidth=5,this.context.strokeStyle="#000000"},methods:{draw:function(t){var e=t.layerX,n=t.layerY;this.isDrag&&(this.context.lineTo(e,n),this.context.stroke())},dragStart:function(t){var e=t.layerX,n=t.layerY;this.context.beginPath(),this.context.lineTo(e,n),this.context.stroke(),this.isDrag=!0},dragEnd:function(){this.context.closePath(),this.isDrag=!1},clear:function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)},penBlack:function(){this.canvasMode="penBlack",this.context.lineCap="round",this.context.lineJoin="round",this.context.lineWidth=5,this.context.strokeStyle="#000000"},penRed:function(){this.canvasMode="penRed",this.context.lineCap="round",this.context.lineJoin="round",this.context.lineWidth=5,this.context.strokeStyle="#ed230c"},penBlue:function(){this.canvasMode="penBlue",this.context.lineCap="round",this.context.lineJoin="round",this.context.lineWidth=5,this.context.strokeStyle="#09a1ff"},penGreen:function(){this.canvasMode="penGreen",this.context.lineCap="round",this.context.lineJoin="round",this.context.lineWidth=5,this.context.strokeStyle="#b5e28a"}}},r=(n(261),n(44)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"canvas-area"}},[n("canvas",{class:{eraser:"eraser"===t.canvasMode},attrs:{id:"myCanvas",width:"1440px",height:"700px"},on:{mousedown:t.dragStart,mouseup:t.dragEnd,mouseout:t.dragEnd,mousemove:t.draw}})]),t._v(" "),n("div",{attrs:{id:"tool-area"}},[n("button",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["ctrl","a"],expression:"['ctrl','a']"}],staticClass:"btn btn-sm btn-dark",attrs:{id:"pen-black-button"},on:{click:t.penBlack,shortkey:t.penBlack}},[t._v("ペン（黒）")]),t._v(" "),n("button",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["ctrl","r"],expression:"['ctrl','r']"}],staticClass:"btn btn-sm btn-danger",attrs:{id:"pen-red-button"},on:{click:t.penRed,shortkey:t.penRed}},[t._v("ペン（赤）")]),t._v(" "),n("button",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["ctrl","b"],expression:"['ctrl','b']"}],staticClass:"btn btn-sm btn-primary",attrs:{id:"pen-blue-button"},on:{click:t.penBlue,shortkey:t.penBlue}},[t._v("ペン（青）")]),t._v(" "),n("button",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["ctrl","g"],expression:"['ctrl','g']"}],staticClass:"btn btn-sm btn-success",attrs:{id:"eraser-button"},on:{click:t.penGreen,shortkey:t.penGreen}},[t._v("ペン（緑）")]),t._v(" "),n("button",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["ctrl","c"],expression:"['ctrl','c']"}],staticClass:"btn btn-sm btn-light",attrs:{id:"clear-button"},on:{click:t.clear,shortkey:t.clear}},[t._v("クリア")])])])}),[],!1,null,"0c08a694",null);e.default=component.exports},265:function(t,e,n){var content=n(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("091323f2",content,!0,{sourceMap:!1})},269:function(t,e,n){"use strict";n(265)},270:function(t,e,n){var o=n(69)(!1);o.push([t.i,".of[data-v-6e375408]{background-color:#ed230c}.df[data-v-6e375408]{background-color:#09a1ff}.circle[data-v-6e375408]{font-size:24px;width:100%;height:100%;color:#fff;text-align:center;font-weight:700;border-radius:50%}.object[data-v-6e375408]{cursor:move}#board[data-v-6e375408]{width:1440px;height:900px;position:absolute;top:0;background-repeat:no-repeat;background-size:contain;background-image:url(/image/board.png)}",""]),t.exports=o},277:function(t,e,n){"use strict";n.r(e);var o=n(147),r={data:function(){return{red_objects:{red_1:{index:"r1",name:"1",x:330,y:460},red_2:{index:"r2",name:"2",x:330,y:250},red_3:{index:"r3",name:"3",x:450,y:620},red_4:{index:"r4",name:"4",x:450,y:100},red_g:{index:"rG",name:"G",x:100,y:355}},blue_objects:{blue_1:{index:"b1",name:"1",x:450,y:460},blue_2:{index:"b2",name:"2",x:450,y:250},blue_3:{index:"b3",name:"3",x:600,y:570},blue_4:{index:"b4",name:"4",x:600,y:150},blue_g:{index:"bG",name:"G",x:1200,y:355}},ball:{x:370,y:385}}},components:{VueDragResize:n.n(o).a},mounted:function(){console.log(window.innerWidth)}},c=(n(269),n(44)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"board"}},[n("VueDragResize",{attrs:{aspectRatio:!0,isResizable:!1,isDraggable:!1,preventActiveBehavior:!0}},[t._l(t.red_objects,(function(e){return n("VueDragResize",{key:e.id,attrs:{aspectRatio:!0,isResizable:!1,w:37.7,h:37.5,x:e.x,y:e.y}},[n("div",{staticClass:"of circle object"},[t._v(t._s(e.name))])])})),t._v(" "),t._l(t.blue_objects,(function(e){return n("VueDragResize",{key:e.index,attrs:{aspectRatio:!0,isResizable:!1,w:37.5,h:37.5,x:e.x,y:e.y}},[n("div",{staticClass:"df circle object"},[t._v(t._s(e.name))])])})),t._v(" "),n("VueDragResize",{attrs:{aspectRatio:!0,isResizable:!1,w:30,h:30,x:t.ball.x,y:t.ball.y}},[n("font-awesome-icon",{staticClass:"object",attrs:{icon:["fas","futbol"],size:"2x"}})],1)],2),t._v(" "),n("Draw")],1)}),[],!1,null,"6e375408",null);e.default=component.exports;installComponents(component,{Draw:n(263).default})}}]);