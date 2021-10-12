<template>

<div class="flex">
 <!-- left side -->
  <div class="h-screen overflow-y-scroll top-0 sticky w-1/4">
    <!-- Note: add overflow-y-scroll if sidebar content is longer than page -->
    <div class="flex items-center h-12 bg-red-200">
      <div class='flex-1 text-red-700 font-mono text-center'>Your Brand Name</div>
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

<li>
    <div class="w-100 flex flex-col md:flex-row items-center justify-between p-4">
      <div class="flex items-center justify-around">
        <!-- <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg> -->
      <div class="flex">
          <div class=" mr-5 text-lg font-normal">Width</div>
          <input class="text-yellow-500 table-input" type="number" v-model.number="width">
      </div>

      <div class="flex">
          <div class=" mr-5 text-lg font-normal">Height</div>
          <input class="text-yellow-500 table-input" type="number" v-model.number="height">
      </div>
            
      </div>
    </div>
  </li>

<li>
    <div class="w-100 flex flex-col md:flex-row items-center justify-between p-4">
      <div class="flex items-center justify-around">
        <!-- <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg> -->
      <div class="flex">
          <div class=" mr-5 text-lg font-normal">Min Width</div>
          <input class="table-input" type="number" v-model.number="minW">
       </div>

      <div class="flex">
          <div class=" mr-5 text-lg font-normal">Min Height</div>
          <input class="table-input" type="number" v-model.number="minH">

      </div>
            
      </div>
    </div>
  </li>


<li>
    <div class="w-100 flex flex-col md:flex-row items-center justify-between p-4">
      <div class="flex items-center justify-around">
        <!-- <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg> -->
      <div class="flex">
          <div class=" mr-5 text-lg font-normal">Max Width</div>
          <input class="table-input" type="number" v-model.number="maxW">
       </div>

      <div class="flex">
          <div class=" mr-5 text-lg font-normal">Max Height</div>
          <input class="table-input" type="number" v-model.number="maxH">
      </div>
            
      </div>
    </div>
  </li>

<li>
    <div class="w-100 flex flex-col md:flex-row items-center justify-between p-4">
      <div class="flex items-center justify-around">
        <!-- <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg> -->
      <div class="flex">
          <div class=" mr-8 text-lg font-normal">Color</div>
          <input type="color" v-model="color"/>
       </div>

      <div class="flex">
          <div class=" mx-5 text-lg font-normal">Fit Parent</div>
          <input type="checkbox" v-model.number="fit">

      </div>
            
      </div>
    </div>
  </li>

<li>
    <div class="w-100 flex flex-col md:flex-row items-center justify-between p-4">
      <div class="flex items-center justify-around">
        <!-- <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg> -->
      <div class="flex">
          <div class=" mr-8 text-lg font-normal">Left</div>
          <input class="table-input" type="number" v-model.number="left">
       </div>

      <div class="flex">
          <div class=" mx-5 text-lg font-normal">Top</div>
          <input class="table-input" type="number" v-model.number="top">

      </div>
            
      </div>
    </div>
  </li>

<li>
    <div class="w-100 flex flex-col md:flex-row items-center justify-between p-4">
      <div class="flex items-center justify-around">
        <!-- <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg> -->
      <div class="flex">
          <div class=" mr-8 text-lg font-normal">lastEvent: {{event}}</div>

       </div>

            
      </div>
    </div>
  </li>


</ul>

  </div>
  <!-- right side -->
  <div class="flex-grow overflow-y-scroll bg-gray-300">
    
      <vue-resizable
        class="overflow-hidden"
        v-bind:style="{ backgroundColor: color}"
       
        :dragSelector="dragSelector"
        :active="handlers"
        :fit-parent="fit"
        :max-width="maxW | checkEmpty"
        :max-height="maxH | checkEmpty"
        :min-width="minW | checkEmpty"
        :min-height="minH | checkEmpty"
        :width="width"
        :height="height"
        :left="left"
        :top="top"
        @mount="eHandler"
        @resize:move="eHandler"
        @resize:start="eHandler"
        @resize:end="eHandler"
        @drag:move="eHandler"
        @drag:start="eHandler"
        @drag:end="eHandler"
      >
          <div class="drag-container1-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
          </div>

                 <!-- sECOND -->
         <div class="flex flex-col items-center justify-center ">
      <draggable
        class=""
        :list="list2"
        group="people"
        @change="log"
      >
      
          <tr class="w-full "  @click="controlshowcondition(index)" v-for="(element,index) in list2" :key="index">
         <td class="p-5 text-sm ">
                
                      <button v-if="element.showcondition"  class="float-right -m-4">X</button>
                  <div class="flex">
                    <div class="flex-shrink-0 w-full h-full">
                      <img
                        class="w-10 h-10 "
                        :src="element.Pic"
                        alt=""
                      />
                      <!-- <span class="text-black">{{element.name}}</span> -->
                    </div>
                </div>
                </td>
             
          </tr>
      </draggable> 
         </div>


      </vue-resizable>
    

  </div>

</div>





</template>

<script>
import VueResizable from "vue-resizable";
import draggable from "vuedraggable";

import Twitter from '../assets/twitter.png'
import Facebook from '../assets/facebook.png'
import LinkedIn from '../assets/linkedin.png'
import SL from '../assets/logo.png'
import GitHub from '../assets/github.png'



export default {
  name: "App",
  display: "Custom Clone",
  order: 3,

components: { VueResizable, draggable },
  data() {
    const tW = 300;
    const tH = 600;
    return {
      color: '#673AB7',
      showMenu: false,
      showcondition: true,
      handlers: ["r", "rb", "b", "lb", "l", "lt", "t", "rt"],
      left: `calc( 50% - ${tW / 2}px)`,
      top: `calc(50% - ${tH / 2}px)`,
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
            {name: "Ttr 1", id: 1, Pic : Twitter,},
            {name: "Ttr 2", id: 2, Pic : Twitter,},
            {name: "Ttr 3", id: 3, Pic : Twitter,},
            {name: "Ttr 4", id: 4, Pic : Twitter,},
            {name: "Ttr 5", id: 5, Pic : Twitter,}
            ]
         },
        { name: "LinkedIn", id: 2, sp : false, Pic : LinkedIn, 
        sublist : [
            {name: "LIn 1", id: 1, Pic : LinkedIn,},
            {name: "LIn 2", id: 2, Pic : LinkedIn,},
            {name: "LIn 3", id: 3, Pic : LinkedIn,},
            {name: "LIn 4", id: 4, Pic : LinkedIn,},
            {name: "LIn 5", id: 5, Pic : LinkedIn,}
            ]
        },
        { name: "Fb", id: 3, sp : false, Pic : Facebook, 
                sublist : [
            {name: "Fb 1", id: 1, Pic : Facebook,},
            {name: "Fb 2", id: 2, Pic : Facebook,},
            {name: "Fb 3", id: 3, Pic : Facebook,},
            {name: "Fb 2", id: 4, Pic : Facebook,},
            {name: "Fb 3", id: 5, Pic : Facebook,},
            {name: "Fb 2", id: 6, Pic : Facebook,},
            {name: "Fb 3", id: 7, Pic : Facebook,},
            {name: "Fb 4", id: 8, Pic : Facebook,},
            {name: "Fb 5", id: 9, Pic : Facebook,}
            ]
        },
        { name: "GHub", id: 4, sp : false, Pic : GitHub, 
                sublist : [
            {name: "GHub 1", id: 1, Pic : GitHub,},
            {name: "GHub 2", id: 2, Pic : GitHub,},
            ]
        
        },
        { name: "Sl ", id: 5, sp : false, Pic : SL, 
                sublist : [
            {name: "SL 1", id: 1, Pic : SL,},
            {name: "SL 2", id: 2, Pic : SL,},
            {name: "SL 3", id: 3, Pic : SL,},
            {name: "SL 2", id: 4, Pic : SL,},
            {name: "SL 3", id: 5, Pic : SL,},
            {name: "SL 2", id: 6, Pic : SL,},
            {name: "SL 3", id: 7, Pic : SL,},
            {name: "SL 4", id: 8, Pic : SL,},
            {name: "SL 5", id: 9, Pic : SL,}
            ]
        
        },
        
      ],
      list2: [
        { name: "Ttr 2", id: 1, showcondition : false, Pic : Twitter },
        { name: "Fb 2", id: 2, showcondition : false, Pic : Facebook },
        { name: "SL 2", id: 3, showcondition : false, Pic : SL }
      ]
    }
  },
  methods: {
      controlshowcondition(id){
          console.log(id)
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
      console.log('list 2 is ', this.list2)
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

.drag-container1-1,
.drag-container1-2 {
  width: 10%;
  /* margin-top: -22px; */
  height: 20px;
  padding: 2px;
  color: white;
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
</style>
