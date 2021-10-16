<template>
  <div>
    <button class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
      {{ModalTitle}}
    </button>

         <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-6xl">
        <!--content-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <!--body-->
          <div class="relative p-6 flex">
            <div class="w-1/2">

            </div>
            <div class="w-1/2">
            <h2 class="text-xl font-bold">KCG/KXG/KZG351</h2>
            <h4 class="text-lg pt-4">Features</h4>
            <p class="text-md">
               Be made of bending embossed stainless steel, with anti-fingerprint function bright chrome plated sealing heads
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
          <div class="flex items-center justify-end   rounded-b">
            <button class="text-red-500 bg-transparent hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
              Close
            </button>
            <button class="text-white border border-solid border-green-500 bg-green-500 hover:text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
              Save
            </button>

          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
 
   </div>
</template>

<script>
export default {
  name: "large-modal",
  data() {
    return {
      showModal: false,
      ModalTitle : this.msg
    }
  },
  methods: {
    toggleModal: function(){
      this.showModal = !this.showModal;
    }
  },
  props:{
      msg:{
          type : String,
          require : true
      }
  }
}
</script>