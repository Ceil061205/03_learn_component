<template>
  <div>
    home
    <h2>{{ counter }}</h2>
    <button @click="counter++">点击++</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      counter: 0
    }
  },
  created() {
    console.log('home created')
  },
  unmounted() {
    console.log('home unmounted')
  },
  activated() {
    console.log('home activated')
  },
  deactivated() {
    console.log('home deactivated')
  }
}
</script>

<style>

</style>