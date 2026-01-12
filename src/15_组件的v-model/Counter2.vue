<template>
  <div>2Counter:{{ counter }}</div>
  <button @click="changeCounter">++</button>
  <div>xyz:{{ xyz }}</div>
  <button @click="onChangeXyz">改变xyz</button>
</template>

<script>
export default {
  props: {
    counter: {
      type: Number,
      default: 0
    },
    xyz: {
      type: String,
      default: 'abc'
    }
  },
  emits: ['update:counter', 'update:xyz'],
  methods: {
    changeCounter() {
      this.$emit('update:counter', this.counter + 1)
    },
    onChangeXyz() {
      this.$emit('update:xyz', 'xyz1234567890')
    }
  }
}
</script>

<style>

</style>