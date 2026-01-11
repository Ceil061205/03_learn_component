<template>
  <div>
    <h2>cat</h2>
  </div>
</template>

<script>
import eventBus from './utils/event-bus'
export default {
  methods: {
    handleClick() {
      console.log('移除');
    },
    // ✅ 新增：把监听的回调写成具名函数，放到methods里
    catEventHandler() {
      console.log('cat')
    }
  },
  created() {
    // ✅ 修改：监听时传入 具名函数(this.catEventHandler)
    eventBus.on('xyzEvent', this.catEventHandler)
  },
  // ✅ 修改：Vue2的组件销毁钩子，必须用 beforeDestroy
  beforeDestroy() {
    // ✅ 正确：解绑时传入「同一个函数」，完美解绑
    eventBus.off('xyzEvent', this.catEventHandler)
    console.log('cat组件销毁，事件解绑成功');
  }
}
</script>

<style>
</style>