(window.webpackJsonp=window.webpackJsonp||[]).push([[8,10],{276:function(t,e,n){var content=n(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(79).default)("fca5f1d4",content,!0,{sourceMap:!1})},277:function(t,e,n){"use strict";n(276)},278:function(t,e,n){var o=n(78)(!1);o.push([t.i,".canvas-area[data-v-d28b54d2]{position:absolute}#myCanvas[data-v-d28b54d2]{z-index:100}",""]),t.exports=o},279:function(t,e,n){"use strict";n.r(e);var o={name:"DrawTool",data:function(){return{canvasMode:"drag",canvas:null,context:null,isDrag:!1}},mounted:function(){this.canvas=document.querySelector("#myCanvas"),this.context=this.canvas.getContext("2d"),this.context.lineCap="round",this.context.lineJoin="round",this.context.lineWidth=5,this.context.strokeStyle="#000000"},methods:{draw:function(t){var e=t.layerX,n=t.layerY;this.isDrag&&(this.context.lineTo(e,n),this.context.stroke())},dragStart:function(t){if("drag"!==this.canvasMode){var e=t.layerX,n=t.layerY;this.context.beginPath(),this.context.lineTo(e,n),this.context.stroke(),this.isDrag=!0}},dragEnd:function(){this.context.closePath(),this.isDrag=!1},clear:function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)},dragMode:function(){this.canvasMode="drag"},penBlack:function(){this.canvasMode="penBlack",this.context.lineCap="round",this.context.lineJoin="round",this.context.lineWidth=5,this.context.strokeStyle="#000000"},penRed:function(){this.canvasMode="penRed",this.context.lineCap="round",this.context.lineJoin="round",this.context.lineWidth=5,this.context.strokeStyle="#ed230c"},penBlue:function(){this.canvasMode="penBlue",this.context.lineCap="round",this.context.lineJoin="round",this.context.lineWidth=5,this.context.strokeStyle="#09a1ff"},penGreen:function(){this.canvasMode="penGreen",this.context.lineCap="round",this.context.lineJoin="round",this.context.lineWidth=5,this.context.strokeStyle="#b5e28a"}}},r=(n(277),n(53)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"canvas-area"}},[n("canvas",{class:{eraser:"eraser"===t.canvasMode},attrs:{id:"myCanvas",width:"1440px",height:"800px"},on:{mousedown:t.dragStart,mouseup:t.dragEnd,mouseout:t.dragEnd,mousemove:t.draw}})]),t._v(" "),n("div",{attrs:{id:"tool-area"}},[n("button",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["ctrl","d"],expression:"['ctrl','d']"}],staticClass:"btn btn-sm btn-secondary",attrs:{id:"pen-black-button"},on:{click:t.dragMode,shortkey:t.dragMode}},[t._v("ドラッグモード")]),t._v(" "),n("button",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["ctrl","a"],expression:"['ctrl','a']"}],staticClass:"btn btn-sm btn-dark",attrs:{id:"pen-black-button"},on:{click:t.penBlack,shortkey:t.penBlack}},[t._v("ペン（黒）")]),t._v(" "),n("button",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["ctrl","r"],expression:"['ctrl','r']"}],staticClass:"btn btn-sm btn-danger",attrs:{id:"pen-red-button"},on:{click:t.penRed,shortkey:t.penRed}},[t._v("ペン（赤）")]),t._v(" "),n("button",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["ctrl","b"],expression:"['ctrl','b']"}],staticClass:"btn btn-sm btn-primary",attrs:{id:"pen-blue-button"},on:{click:t.penBlue,shortkey:t.penBlue}},[t._v("ペン（青）")]),t._v(" "),n("button",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["ctrl","g"],expression:"['ctrl','g']"}],staticClass:"btn btn-sm btn-success",attrs:{id:"eraser-button"},on:{click:t.penGreen,shortkey:t.penGreen}},[t._v("ペン（緑）")]),t._v(" "),n("button",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["ctrl","c"],expression:"['ctrl','c']"}],staticClass:"btn btn-sm btn-light",attrs:{id:"clear-button"},on:{click:t.clear,shortkey:t.clear}},[t._v("クリア")])])])}),[],!1,null,"d28b54d2",null);e.default=component.exports},292:function(t,e,n){var content=n(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(79).default)("bb973af4",content,!0,{sourceMap:!1})},303:function(t,e,n){"use strict";n(292)},304:function(t,e,n){var o=n(78)(!1);o.push([t.i,".of[data-v-fb29f74a]{background-color:#ed230c}.df[data-v-fb29f74a]{background-color:#09a1ff}.circle[data-v-fb29f74a]{font-size:24px;width:100%;height:100%;color:#fff;text-align:center;font-weight:700;border-radius:50%}.object[data-v-fb29f74a]{cursor:move}#board[data-v-fb29f74a]{width:1440px;height:900px;position:absolute;top:0;background-repeat:no-repeat;background-size:contain;background-image:url(/image/board.png)}",""]),t.exports=o},318:function(t,e,n){"use strict";n.r(e);var o=n(159),r={data:function(){return{red_objects:{red_1:{index:"r1",name:"1",x:330,y:387},red_2:{index:"r2",name:"2",x:410,y:150},red_3:{index:"r3",name:"3",x:410,y:620},red_4:{index:"r4",name:"4",x:975,y:385},red_g:{index:"rG",name:"G",x:100,y:387}},blue_objects:{blue_1:{index:"b1",name:"1",x:450,y:387},blue_2:{index:"b2",name:"2",x:550,y:230},blue_3:{index:"b3",name:"3",x:550,y:520},blue_4:{index:"b4",name:"4",x:1050,y:387},blue_g:{index:"bG",name:"G",x:1300,y:387}},ball:{x:370,y:410}}},components:{VueDragResize:n.n(o).a}},c=(n(303),n(53)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"board"}},[n("VueDragResize",{attrs:{aspectRatio:!0,isResizable:!1,isDraggable:!1,preventActiveBehavior:!0}},[t._l(t.red_objects,(function(e){return n("VueDragResize",{key:e.index,attrs:{aspectRatio:!0,isResizable:!1,w:37.7,h:37.5,x:e.x,y:e.y}},[n("div",{staticClass:"of circle object"},[t._v(t._s(e.name))])])})),t._v(" "),t._l(t.blue_objects,(function(e){return n("VueDragResize",{key:e.index,attrs:{aspectRatio:!0,isResizable:!1,w:37.5,h:37.5,x:e.x,y:e.y}},[n("div",{staticClass:"df circle object"},[t._v(t._s(e.name))])])})),t._v(" "),n("VueDragResize",{attrs:{aspectRatio:!0,isResizable:!1,w:30,h:30,x:t.ball.x,y:t.ball.y}},[n("font-awesome-icon",{staticClass:"object",attrs:{icon:["fas","futbol"],size:"2x"}})],1)],2),t._v(" "),n("Draw")],1)}),[],!1,null,"fb29f74a",null);e.default=component.exports;installComponents(component,{Draw:n(279).default})}}]);