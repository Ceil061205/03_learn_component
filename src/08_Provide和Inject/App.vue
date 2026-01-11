<template>
  <div>
    <Home></Home>
    <h2>App:{{ message }}</h2>
    <button @click="message = 'xyz'">改msg</button>
  </div>
</template>

<script>
import {computed} from 'vue'
import Home from './Home.vue';
export default {
  components: {
    Home
  },
  // provide: {
  //   name: 'zhangsan',
  //   age: 18,
  // },
  provide() {
    return {
      name: 'zhangsan',
      age: 18,
      // 提供函数，才能获取当前data中的message值
      // message: this.message

      // 使用computed，可以获取到最新的message值,箭头函数this拿到data中的message值
      message: computed(() => this.message)
    }
  },
  data() {
    return {
      message: 'hello vue3'
    }
  }
}
</script>

<style>

</style>