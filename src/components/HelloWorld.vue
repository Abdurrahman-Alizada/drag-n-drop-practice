<template>
<div class="flex">
 <!-- left side -->
  <div class="h-screen overflow-y-scroll top-0 sticky w-1/4">
    <!-- Note: add overflow-y-scroll if sidebar content is longer than page -->
    <div class="flex items-center h-12 bg-purple-400">
      <div class='flex-1 text-white font-mono text-center'>Your Brand Name</div>
    </div>

    <ul class="p-5 ">
      <li v-for="(element,index) in list1" :key="index" class="font-semibold list12 text-sm list-none bg-black ">
    <div  class="flex items-center justify-between mb-2 cursor-pointer" @click="toggleShow(index)">
          <div class="flex items-center p-3">
              <div class="flex items-center justify-around w-10 h-10">
                <img
                  class="w-full h-full rounded-full"
                  :src="element.Pic"
                  alt=""
                />
              </div>  
                            <span class="mx-4 text-lg">{{element.name}}</span>
          </div>
    
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" :class="{'rotate-90' : showMenu && element.sp}" class="dropdown-menu" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0V0z"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
      </svg>
   
    </div>
    <ul class=" overflow-hidden dropdown-menu font-normal" :class="showMenu && element.sp ? 'h-auto' : 'h-0'">
      <draggable
        class="flex flex-wrap items-center justify-between"
        :list="element.sublist"
        :group="{ name: 'people', pull: 'clone', put: false }"
        @change="log"
      >
          
        <li class="" v-for="(selement ,index1) in element.sublist" :key="index1">

            <td class="px-5 py-5 text-sm">
                      <div class="flex">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-full h-full rounded-full"
                            :src="selement.Pic"
                            alt=""
                          />
                          <span>{{selement.name}}</span>
                        </div>
                      
                      </div>
                    </td>
                

        </li>
      </draggable>
      </ul>
     </li>
    </ul>

<ul class="space-y-3 px-4 divide-y-2">

<li>
    <div class="w-100 flex flex-col md:flex-row items-center justify-between p-2">
      <div class="flex items-center justify-around">
      <div class="flex">
          <div class=" mr-8  text-lg font-normal">Color</div>
          <input type="color" v-model="color"/>
       </div>            
      </div>
    </div>
  </li>

<li>
    <div class="w-100 flex flex-col md:flex-row items-center justify-between p-2">
      <div class="flex items-center justify-around">
        <!-- <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg> -->
      <div class="flex">
          <div class=" mr-5 text-lg font-normal">Width</div>
          <input class="text-yellow-500 w-1/2" type="number" v-model.number="width">
      </div>

      <div class="flex">
          <div class=" mr-5 text-lg font-normal">Height</div>
          <input class="text-yellow-500 w-1/2" type="number" v-model.number="height">
      </div>
            
      </div>
    </div>
  </li>

<li>
    <div class="w-100 flex flex-col md:flex-row items-center justify-between p-2">
      <div class="flex items-center justify-around">
      <div class="flex">
          <div class=" mr-5 text-lg font-normal">Min Width</div>
          <input class="w-1/3 text-yellow-500" type="number" v-model.number="minW">
       </div>

      <div class="flex">
          <div class=" mr-5 text-lg font-normal">Min Height</div>
          <input class="w-1/2 text-yellow-500" type="number" v-model.number="minH">

      </div>
            
      </div>
    </div>
  </li>

<li>
    <div class="flex flex-col md:flex-row items-center justify-between p-2">
      <div class="flex items-center justify-around">
        <!-- <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg> -->
      <div class="flex">
          <div class=" mr-5 text-lg font-normal">Max Width</div>
          <input class="table-input text-yellow-500" type="number" v-model.number="maxW">
       </div>

      <div class="flex">
          <div class=" mr-5 text-lg font-normal">Max Height</div>
          <input class="table-input text-yellow-500" type="number" v-model.number="maxH">
      </div>
      </div>
    </div>
  </li>

  <li>
    <div class="w-80 flex flex-col md:flex-row items-center justify-between p-2">
      <div class="flex">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
      <div class=" mr-5 text-lg font-normal">Handler</div>
      </div>
      <div class="flex  text-yellow-500">
        <span class="ml-2" v-for="handler in ['r', 'rb', 'b', 'lb', 'l', 'lt', 't', 'rt']" :key="handler">
          {{handler}}:
          <input type="checkbox" v-model="handlers" :value="handler">
        </span>
      </div>
    </div>
  </li>


</ul>

  </div>
  <!-- right side -->
  <div class="flex-grow overflow-y-scroll bg-gray-300">   
          <button @click="toggleModal()" class="flex items-center float-right m-3 px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-purple-600 rounded-md hover:bg-purple-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </button>
            <!-- Modal -->
            <div v-if="showModal" class="border-0 rounded-lg overflow-scroll fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
              <div class="relative w-auto mx-auto ">
                <!--content-->
                <div class="border-0 mt-10 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <!--body-->
                  <div class="p-6 flex">
                    <div class=" mx-2 " >
                      <vue-resizable class=" rounded-lg" v-bind:style="{ backgroundColor: color}" :dragSelector="dragSelector" :active="[]"
                        :width="width" :height="height" >
                        <VueDragResize v-for="(element,index) in list2" :key="index" 
                             class="" :isDraggable="true" :x="element.left" :y="element.top"
                             :parentW="width" :parentH="height" :parentLimitation="true" 
                              @dragstop="onDragstop(index)"
                             :isActive="false" @clicked="onActivated(index, element.active)" 
                             :w="element.width" :h="element.height" 
                             v-on:resizing="resize" v-on:dragging="resize">
                  <div class=" w-full ">
                    <img class=""  :src="element.Pic"  alt=""/>
                  </div>
                </VueDragResize>
                   </vue-resizable>                   
               </div>

                    <div class="mx-2">
                    <h2 class="text-xl font-bold">KCG/KXG/KZG351</h2>
                    <p class="text-xl text-red-500">Note: this data will be dynamic after you provide name and other information</p>
                    <h4 class="text-lg pt-4">Features </h4>
                    <p class="text-md"> 
                      Be made of bending embossed stainless steel, with anti-fingerprint function bright chrome plated sealing heads ()
                    </p>
                    
                    <h4 class="text-lg pt-4">Measurement</h4>
<pre class="text-md">
COP: 1000 * 190 * 20 (2-8)
LOP: 310 * 100 * 20
Hall Call : 200 * 100 * 20
</pre>

                    <h4 class="text-lg pt-4">Display Module</h4>
<pre class="text-md">
COP : KVL272
LOP : KVL271
</pre>
    
                    <h4 class="text-lg pt-4">Button</h4>
                    <p class="text-md">
                      BA541
                    </p>
              
                    <h4 class="text-lg pt-4">Surface Treatment</h4>
                    <p class="text-md">
                        Sealing Head: Chrome Flash/Titarium plating
                    </p>
              
                    </div>
                  </div>
                  <!--footer-->
                  <div class="flex items-center justify-end ">
                    <button class="text-red-500 bg-transparent hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
                      Close
                    </button>
                    <button class="text-white border border-solid border-green-500 bg-green-500 hover:bg-green-800 active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
                      Send Us
                    </button>

                  </div>
                </div>
              </div>
            </div>
            <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div> 
            <!-- end Modal -->

      <vue-resizable class="overflow-hidden" v-bind:style="{ backgroundColor: color}" :dragSelector="dragSelector" :active="handlers"
        :fit-parent="fit" :max-width="maxW | checkEmpty" :max-height="maxH | checkEmpty" :min-width="minW | checkEmpty" :min-height="minH | checkEmpty"
        :width="width" :height="height" :left="left" :top="top" @mount="eHandler" @resize:move="eHandler"
        @resize:start="eHandler" @resize:end="eHandler" @drag:move="eHandler" @drag:start="eHandler" @drag:end="eHandler">

           <div class="drag-container1-1">
          </div> 
             
          <draggable  class="w-full h-full" :list="list2" group="people" @change="log">
              <VueDragResize v-for="(element,index) in list2" :key="index" 
                             class="" :isDraggable="true" :x="element.left" :y="element.top"
                             :parentW="width" :parentH="height" :parentLimitation="true" 
                              @dragstop="onDragstop(index)"
                             :isActive="element.active ? true : false" @clicked="onActivated(index, element.active)" 
                             :w="element.width" :h="element.height" 
                             v-on:resizing="resize" v-on:dragging="resize">
                  <div class=" w-full ">
                    <img class=""  :src="element.Pic"  alt=""/>
                  </div>
                </VueDragResize>
          </draggable> 
      </vue-resizable>
  </div>

</div>
</template>

<script>
import VueResizable from "vue-resizable";
import draggable from "vuedraggable";
import VueDragResize from 'vue-drag-resize';

import Twitter from '../assets/twitter.png'
import Facebook from '../assets/facebook.png'
import LinkedIn from '../assets/linkedin.png'
import SL from '../assets/logo.png'
import GitHub from '../assets/github.png'



export default {
  name: "App",
  display: "Custom Clone",
  order: 3,

components: { VueResizable, draggable, VueDragResize},
  data() {
    const tW = 250;
    const tH = 500;
    return {
      color: '#7C7981',
      showModal: false,
      showMenu: false,
      showcondition: true,
      //for element 
      width1: 50,
      height1: 50,
      top1: 50,
      left1: 50,
      
      // for editor 
      handlers: ["r", "rb", "b", "lb", "l", "lt", "t", "rt"],
      left: `calc( 50% - ${tW / 2}px)`,
      top: `calc(50% - ${tH / 1.7}px)`,
      height: tH,
      width: tW,
      maxW: 1200,
      maxH: 700,
      minW: 100,
      minH: 100,
      fit: true,
      event: "",
      dragSelector: ".drag-container1-1",
          list1: [
        { name: "Ttr", id: 1, sp : false, Pic : Twitter, 
          sublist : [
            {name: "Ttr 1", id: 1, Pic : Twitter, active : true, top : 50, left : 50, width : 100, height : 100,},
            {name: "Ttr 2", id: 2, Pic : Twitter, active : true, top : 50, left : 50, width : 50, height : 50,},
            {name: "Ttr 3", id: 3, Pic : Twitter, active : true, top : 50, left : 50, width : 50, height : 50,},
            {name: "Ttr 4", id: 4, Pic : Twitter, active : true, top : 50, left : 50, width : 50, height : 50,},
            {name: "Ttr 5", id: 5, Pic : Twitter, active : true, top : 50, left : 50, width : 50, height : 50,}
            ]
         },
        { name: "LinkedIn", id: 2, sp : false, Pic : LinkedIn,
        sublist : [
            {name: "LIn 1", id: 1, Pic : LinkedIn, active : true, top : 50, left : 50, width : 50, height : 50,},
            {name: "LIn 2", id: 2, Pic : LinkedIn, active : true, top : 50, left : 50, width : 50, height : 50,},
            {name: "LIn 3", id: 3, Pic : LinkedIn, active : true, top : 50, left : 50, width : 50, height : 50,},
            {name: "LIn 4", id: 4, Pic : LinkedIn, active : true, top : 50, left : 50, width : 50, height : 50,},
            {name: "LIn 5", id: 5, Pic : LinkedIn, active : true, top : 50, left : 50, width : 50, height : 50,}
            ]
        },
        { name: "Fb", id: 3, sp : false, Pic : Facebook,
                sublist : [
            {name: "Fb 1", id: 1, Pic : Facebook, active : true, top : 50, left : 50, width : 50, height : 50,},
            {name: "Fb 2", id: 2, Pic : Facebook, active : true, top : 50, left : 50, width : 50, height : 50,},
            {name: "Fb 3", id: 3, Pic : Facebook, active : true, top : 50, left : 50, width : 50, height : 50,},
            {name: "Fb 2", id: 4, Pic : Facebook, active : true, top : 50, left : 50, width : 50, height : 50,},
            {name: "Fb 3", id: 5, Pic : Facebook, active : true, top : 50, left : 50, width : 50, height : 50,},
            {name: "Fb 2", id: 6, Pic : Facebook, active : true, top : 50, left : 50, width : 50, height : 50,},
            {name: "Fb 3", id: 7, Pic : Facebook, active : true, top : 50, left : 50, width : 50, height : 50,},
            {name: "Fb 4", id: 8, Pic : Facebook, active : true, top : 50, left : 50, width : 50, height : 50,},
            {name: "Fb 5", id: 9, Pic : Facebook, active : true, top : 50, left : 50, width : 50, height : 50,}
            ]
        },
        { name: "GHub", id: 4, sp : false, Pic : GitHub,
                sublist : [
            {name: "GHub 1", id: 1, Pic : GitHub, active : true, top : 50, left : 50, width : 50, height : 50,},
            {name: "GHub 2", id: 2, Pic : GitHub, active : true, top : 50, left : 50, width : 50, height : 50,},
            ]
        
        },
        { name: "Sl ", id: 5, sp : false, Pic : SL, 
                sublist : [
            {name: "SL 1", id: 1, Pic : SL, active : true, top : 50, left : 50, width : 50, height : 50,},
            {name: "SL 2", id: 2, Pic : SL, active : true, top : 50, left : 50, width : 50, height : 50,},
            {name: "SL 3", id: 3, Pic : SL, active : true, top : 50, left : 50, width : 50, height : 50,},
            {name: "SL 2", id: 4, Pic : SL, active : true, top : 50, left : 50, width : 50, height : 50,},
            {name: "SL 3", id: 5, Pic : SL, active : true, top : 50, left : 50, width : 50, height : 50,},
            {name: "SL 2", id: 6, Pic : SL, active : true, top : 50, left : 50, width : 50, height : 50,},
            {name: "SL 3", id: 7, Pic : SL, active : true, top : 50, left : 50, width : 50, height : 50,},
            {name: "SL 4", id: 8, Pic : SL, active : true, top : 50, left : 50, width : 50, height : 50,},
            {name: "SL 5", id: 9, Pic : SL, active : true, top : 50, left : 50, width : 50, height : 50,}
            ]
        
        },
        
      ],
      list2: [
        // { name: "Ttr 2", id: 1, showcondition : false, Pic : Twitter },
        // { name: "Fb 2", id: 2, showcondition : false, Pic : Facebook },
        // { name: "SL 2", id: 3, showcondition : false, Pic : SL }
      ]
    }
  },
  methods: {

        resize(newRect) {
          this.width1 = newRect.width;
          this.height1 = newRect.height;
          this.top1 = newRect.top;
          this.left1 = newRect.left;
        },
        onDragstop(index) {
          this.list2[index].width = this.width1 
          this.list2[index].height = this.height1 
          this.list2[index].top = this.top1 
          this.list2[index].left = this.left1
        },
          
        onActivated(index){
          for(var i=0; i<this.list2.length; i++){
           this.list2[i].active = false  
          } 
          this.list2[index].active = !this.list2[index].active 
          this.list2[index].width = this.width1 
          this.list2[index].height = this.height1 
          this.list2[index].top = this.top1 
          this.list2[index].left = this.left1
          // console.log(this.top1);
        },
        toggleModal: function(){
        this.showModal = !this.showModal;
      },
      controlshowcondition(id){
          // console.log(id)
        this.list2[id].showcondition = !this.list2[id].showcondition;
      },
      toggleShow(id) {
           for(var i=0; i<5; i++){
             this.list1[i].sp = false
           }
          this.showMenu = !this.showMenu;
          this.list1[id].sp = !this.list1[id].sp;
    },
    eHandler(data) {
      this.width = data.width;
      this.height = data.height;
      this.left = data.left;
      this.top = data.top;
      this.event = data.eventName;
    },
        log(evt) {
      window.console.log(evt);
      // console.log('list 2 is ', this.list2)
    },
  },

    computed: {
    class() {
      return this.showMenu ? this.height : "h-0";
    }
  },
  filters: {
    checkEmpty(value) {
      return typeof value !== "number" ? 0 : value;
    }
  }
};
</script>

<style scoped>
.block {
  height: 100%;
  width: 100%;
  background-color: aqua;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

body,
html {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
}

.container1 {
  width: 75%;
  display: flex;
  height: 700px;
  border: 1px solid #dddddd;
  background: #ffffff;
  color: #333333;
  float: left;
  overflow: hidden;

}
.container2 {
  width: 25%;
  height: 700px;
  display: flex;
  border: 1px solid #dddddd;
  background: #ffffff;
  color: #333333;
  float: left;
  overflow: scroll;
}


#block1 {
  border: solid black 1px;
  height: 300px;
  width: 20%;
  display: inline-block;
  float: left;
}

.resizable {
overflow: hidden;
  height: auto;
  padding: 0;
  border: 1px solid #003eff;
  background: #b954b0;
  font-weight: normal;
  color: #ffffff;
  position: relative;
}

.table-block {
  display: table;
}

.table-row {
  display: table-row;
  text-align: center;
}

.table-cell {
  width: 50%;
  display: inline-block;
}

.table-input {
  width: 50px;
}

.drag-container1-1 {
  width: 100%;
  /* margin-top: -22px; */
  height: 12px;
  /* padding: 2px; */
  color: white;
  /* background-color: #333333; */
  text-align: center;
  cursor:move;
}

.table-container1 {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.dropdown-menu {
  transition: 300ms;
}
svg.rotate-90 {
  transform: rotate(90deg);
}
.list12{
  background-color: #fff !important;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #eeedf7;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #9c8dcf;
  border-radius: 100vh;
  border: 3px solid #edf2f7;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}
</style>
