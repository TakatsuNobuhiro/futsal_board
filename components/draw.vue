<template>
  <div>
    <div id="canvas-area">
      <canvas id="myCanvas" v-bind:class="{eraser: canvasMode === 'eraser'}" width="1440px" height="800px" @mousedown="dragStart" @mouseup="dragEnd" @mouseout="dragEnd" @mousemove="draw"></canvas>
    </div>
    <div id="tool-area">
        <button id="pen-black-button" @click="dragMode" class="btn btn-sm btn-secondary" v-shortkey="['ctrl','d']" @shortkey="dragMode">ドラッグモード</button>
        <button id="pen-black-button" @click="penBlack" class="btn btn-sm btn-dark" v-shortkey="['ctrl','a']" @shortkey="penBlack">ペン（黒）</button>
        <button id="pen-red-button" @click="penRed" class="btn btn-sm btn-danger" v-shortkey="['ctrl','r']" @shortkey="penRed">ペン（赤）</button>
        <button id="pen-blue-button" @click="penBlue" class="btn btn-sm btn-primary" v-shortkey="['ctrl','b']" @shortkey="penBlue">ペン（青）</button>
        <button id="eraser-button" @click="penGreen" class="btn btn-sm btn-success" v-shortkey="['ctrl','g']" @shortkey="penGreen">ペン（緑）</button>
        <button id="clear-button" @click="clear" class="btn btn-sm btn-light" v-shortkey="['ctrl','c']" @shortkey="clear">クリア</button>
    </div>
  </div>
</template>

<style scoped>
.canvas-area{
  position: absolute;
}

#myCanvas {
 /* border: 1px solid #000000; */
 z-index: 100;


}


</style>

<script>

export default {
  name: "DrawTool",
  data() {
    return {
        canvasMode: 'drag',
        canvas: null,
        context: null,
        isDrag: false
    };
  },
  mounted(){
      this.canvas = document.querySelector('#myCanvas')
    // 　this.canvas.setAttribute('width',window.innerWidth)
    // 　this.canvas.setAttribute('height',window.innerHeight)
      this.context = this.canvas.getContext('2d')
      this.context.lineCap = 'round';
      this.context.lineJoin = 'round';
      this.context.lineWidth = 5;
      this.context.strokeStyle = '#000000';


  },
  methods: {
    // 描画
    draw :function(e) {
      let x = e.layerX
      let y = e.layerY

      if(!this.isDrag) {
        return;
      }
 
      this.context.lineTo(x, y);
      this.context.stroke();
    },
    // 描画開始（mousedown）
    dragStart:function(e) {
      if(this.canvasMode==="drag") {
        return;
      }
 
      let x = e.layerX
      let y = e.layerY
 
      this.context.beginPath();
      this.context.lineTo(x, y);
      this.context.stroke();
   
      this.isDrag = true;
    },
    // 描画終了（mouseup, mouseout）
    dragEnd: function() {
      this.context.closePath();
      this.isDrag = false;
    },
    clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    
    },

    dragMode: function(){
      this.canvasMode = 'drag'
    },
    penBlack: function(){
      // カーソル変更
      this.canvasMode = 'penBlack'
  
      // 描画設定
      this.context.lineCap = 'round';
      this.context.lineJoin = 'round';
      this.context.lineWidth = 5;
      this.context.strokeStyle = '#000000';
    },
    // ペンモード（赤）
    penRed: function(){
      // カーソル変更
      this.canvasMode = 'penRed'
  
      // 描画設定
      this.context.lineCap = 'round';
      this.context.lineJoin = 'round';
      this.context.lineWidth = 5;
      this.context.strokeStyle = '#ed230c';
    },
    // ペンモード（青）
    penBlue: function(){
      // カーソル変更
      this.canvasMode = 'penBlue'
  
      // 描画設定
      this.context.lineCap = 'round';
      this.context.lineJoin = 'round';
      this.context.lineWidth = 5;
      this.context.strokeStyle = '#09a1ff';
    },
    // ペンモード（緑)
    penGreen: function() {
      // カーソル変更
      this.canvasMode = 'penGreen'
 
      // 描画設定
      this.context.lineCap = 'round';
      this.context.lineJoin = 'round';
      this.context.lineWidth = 5;
      this.context.strokeStyle = '#b5e28a';
    }
  }
};
</script>