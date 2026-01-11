<template>
  <div>
    <h2 ref="titleRef">{{ msg }}</h2>
    <button ref="btnRef" @click="changeTitle">修改标题</button>
    <Home ref="homeRef"></Home>
  </div>
</template>

<script>
import Home from "./Home.vue";
// 不要主动去获取dom修改dom
export default {
  data() {
    return {
      msg: "Hello Vue",
    };
  },
  components: {
    Home,
  },
  methods: {
    changeTitle() {
      // 获取标题元素引用
      console.log(this.$refs.titleRef);
      // 获取按钮元素引用
      console.log(this.$refs.btnRef);
      // 获取Home组件引用
      console.log(this.$refs.homeRef);
      // 调用Home组件的方法
      this.$refs.homeRef.say();
      // 获取Home组件的根DOM元素
      console.log(this.$refs.homeRef.$el);
      // 获取Home组件根元素的下一个兄弟元素（不推荐有多个根）
      console.log(this.$refs.homeRef.$el.nextElementSibling);

      // 获取根组件实例
      console.log(this.$root);
      // 获取父组件实例
      console.log(this.$parent);
    },
  },
  // mounted() {
  //   console.log(this.$refs);
  // },
};
</script>

<style>
</style>