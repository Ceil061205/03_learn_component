<template>
  <div>{{ name }}</div>
  <button @click=" name ='1'">更新</button>
  <Home v-if="isShow"></Home>
  <button @click="isShow = !isShow">切换</button>
</template>

<script>
import Home from './Home.vue';
export default {
  data() {
    return {
      name: "App",
      isShow: true,
    };
  },
  components: {
    Home,
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    // 发送网络请求，获取数据
    // 监听事件,监听watch
    console.log("created");
  },
  beforeMount() {
    // 组件template模板编译完成，但是没有挂载到DOM上
    console.log("beforeMount");
  },
  mounted() {
    // 组件挂载到DOM上，可以操作DOM元素
    // 获取使用DOM
    console.log("mounted");
  },
  beforeUpdate() {
    // 数据发生改变
    // 准备更新DOM
    console.log("beforeUpdate");
  },
  updated() {
    // DOM更新
    console.log("updated");
  },
  beforeUnmount() {
    // 准备卸载VNode -> DOM元素
    // 组件卸载前，可以执行清理工作
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>

<style>
</style>