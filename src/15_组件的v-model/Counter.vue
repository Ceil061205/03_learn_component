<template>
  <div>Counter:{{ modelValue }}</div>
  <button @click="changeCounter">++</button>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Number,
      default: 0
    }
  },
  emits: ['update:modelValue'],
  methods: {
    changeCounter() {
      this.$emit('update:modelValue', this.modelValue + 1)
    }
  }
}
</script>

<style>

</style>