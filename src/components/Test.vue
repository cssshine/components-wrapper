<script>
import {ref} from 'vue'

export default {
  setup(props, {emit}){
    const tClick = ()=>{
      emit('do-cc', 'tt')
      console.log("tClick")
    }
    return {
      tClick
    }
  }
}
</script>

<template>
  <el-button @click="tClick">ttt</el-button>
</template>

<style scoped>
</style>
