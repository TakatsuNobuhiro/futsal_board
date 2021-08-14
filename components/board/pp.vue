<template>
    <div id="board">
        <VueDragResize  :aspectRatio="true" :isResizable="false" :isDraggable="false"  :preventActiveBehavior="true" >

            <!-- red -->
            <VueDragResize v-for="red_object in red_objects" :key="red_object.index"  :aspectRatio="true" :isResizable="false" :w="37.7" :h="37.5" :x=red_object.x :y=red_object.y>
                <div  class="of circle object">{{red_object.name}}</div>
            </VueDragResize>


            <!-- blue -->
            <VueDragResize v-for="blue_object in blue_objects" :key="blue_object.index" :aspectRatio="true" :isResizable="false" :w="37.5" :h="37.5" :x=blue_object.x :y=blue_object.y>
                <div class="df circle object">{{blue_object.name}}</div>
            </VueDragResize>

            <!-- ball -->
            <VueDragResize :aspectRatio="true" :isResizable="false" :w="30" :h="30" :x=ball.x :y=ball.y> 
                <font-awesome-icon :icon="['fas', 'futbol']" size="2x" class="object" />
            </VueDragResize>
            
        </VueDragResize>
            
        <Draw />
        <!-- <button class="btn btn-danger btn-sm" @click="addObject">赤選手を追加</button> -->


        
    </div>
</template>

<script>

    import VueDragResize from 'vue-drag-resize';


    

 export default {
        data(){
            return{
                red_objects:{
                    red_1:{
                        index:"r1",
                        name:"1",
                        x:800,
                        y:387,
                        z:1
                    },
                    red_2:{
                        index:"r2",
                        name:"2",
                        x:1000,
                        y:224,
                        z:1
                    },
                    red_3:{
                        index:"r3",
                        name:"3",
                        x:1300,
                        y:650,
                        z:1
                    },
                    red_4:{
                        index:"r4",
                        name:"4",
                        x:1300,
                        y:100,
                        z:1
                    },
                    red_g:{
                        index:"rG",
                        name:"G",
                        x:1000,
                        y:550,
                        z:1

                    }
                },
                blue_objects:{
                    blue_1:{
                        index:"b1",
                        name:"1",
                        x:1000,
                        y:387
                    },
                    blue_2:{
                        index:"b2",
                        name:"2",
                        x:1100,
                        y:274
                    },
                    blue_3:{
                        index:"b3",
                        name:"3",
                        x:1100,
                        y:500
                    },
                    blue_4:{
                        index:"b4",
                        name:"4",
                        x:1200,
                        y:387
                    },
                    blue_g:{
                        index:"bG",
                        name:"G",
                        x:1300,
                        y:387
                    },
                },
                ball:{
                    x:830,
                    y:420
                }
            
            }
            
        },
        components: {
      

            VueDragResize
        },methods: {
          addObject: function(){

            let index_number = String(Object.keys(this.red_objects).length)
            let object = {index: "r"+index_number,name: index_number,x:100,y:100}
            this.$set(this.red_objects,"red_"+index_number,object)
      
          }
        }


    }
</script>

<style scoped>
    .of{
        background-color:#ed230c;
    }
    .df{
        background-color:#09a1ff;
    }

    .circle{
        font-size:24px;
        width:100%;
        height:100%;
        color:white;
        text-align:center;
        font-weight:bold;
        border-radius:50%;

    }

    .object{
        cursor: move;
    }

    #board{
        width: 1440px;
        height:900px;
        position:absolute;
        top:0;
        background-repeat: no-repeat;
        background-size: contain;
        background-image: url("/image/board.png");
    
    }

</style>