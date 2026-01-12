<template>
  <h2>about</h2>
</template>

<script>
import messageMixin from "../mixins/message-mixin"

export default {
  mixins: [messageMixin]
  // 与混入相关的生命周期钩子会先于组件自身的被调用
  // 例如，混入包含一个created钩子而组件也有一个，那么两者都会被调用。
  // 混入的钩子的执行顺序在组件自身的钩子之前。
  // 与混入冲突的数据会优先使用组件自身的数据。
}
</script>

<style>

</style>