<script>
import {ref, watch} from 'vue'
import ElementCommonComp from './components/ElementCommonComp.vue'

export default {
  components:{
    ElementCommonComp,
  },
  setup(){
    const value1 = ref('')
    const value2 = ref('')
    const onChange = (v)=>{
      console.log("change>>>", v)
    }
    const onClear = ()=>{
      console.log("on clear")
    }
    const btnClick = (ev)=>{
      console.log("click @@@@@@@@@@ >>", ev)
    }
    watch(value1, (v)=>{
      console.log('value1-->',v)
    })
    return {
      value1,
      value2,
      onChange,
      onClear,
      btnClick,
    }
  }
}
</script>
<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
  </header>
  <main class="ly-main">
      <ElementCommonComp @click="btnClick" tag="el-button" type="primary">普通按钮</ElementCommonComp>
      <ElementCommonComp tag="el-tag" type="warning">I'm tag</ElementCommonComp>
      <ElementCommonComp tag="el-tag" type="success">I'm tag</ElementCommonComp>
      <ElementCommonComp tag="el-button">
        Edit
      </ElementCommonComp>
      <ElementCommonComp 
        tag="el-input" 
        type="text" 
        @change="onChange"
        v-model="value1" />
      <ElementCommonComp 
        clearable 
        tag="el-input" 
        type="text" 
        v-model="value2"
        @clear="onClear"
        />
    </main>

</template>


<style lang="less" scoped>
.ly-main{
  display: flex;
  flex-direction: column;
  >*{
    margin-bottom: 10px;
  }
}
</style>
