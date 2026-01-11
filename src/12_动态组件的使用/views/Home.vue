<template>
  <div>
    home
    {{ name }}
    {{ age }}
    <button @click="homeBtnClick">anniu</button>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '首页',
    },
    age: {
      type: Number,
      default: 18,
    }
  },
  emits: ['homeClick'],
  methods: {
    homeBtnClick() {
      this.$emit('homeClick', '首页按钮被点击了')
    }
  }
}
</script>

<style>

</style>