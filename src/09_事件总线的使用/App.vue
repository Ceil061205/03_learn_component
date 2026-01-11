<template>
  <div>
    <Home></Home>
    <h3>{{ message }}</h3>
    <button @click="isShowCat = false">切换显示</button>
    <Category v-if="isShowCat"></Category>
  </div>
</template>

<script>
import eventBus from './utils/event-bus';
import Home from './Home.vue';
import Category from './Category.vue';
export default {
  components: {
    Home,
    Category
  },
  data() {
    return {
      message: '111',
      isShowCat: true
    }
  },
  created() {
    // 监听事件总线中事件
    eventBus.on('xyzEvent', (name, age, sex) => {
      console.log(name, age, sex);
      this.message = `${name} - ${age} - ${sex}`;
    })
  }
}
</script>

<style>

</style>