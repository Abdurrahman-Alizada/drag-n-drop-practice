<template>

      <div class=' flex h-screen justify-center items-center'>
        <div class='group text-xl'>
          <strong v-if="condition" @click="condition1()" class='group-hover:text-red-500 group-hover:hidden'>Hover on me </strong>
          <strong class='group-hover:text-green-500'>the texts will be </strong>
          <strong class='group-hover:text-blue-500'>of different colors</strong>
        </div>
      </div>
</template>

<script>
export default {
  data(){
    return{
      condition : true
    }
  },
  methods:{
    condition1(){
      this.condition = !this.condition
    }
  }
}
</script>

<style>

</style>