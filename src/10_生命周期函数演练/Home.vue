<template>
  <div>
    home
  </div>
</template>

<script>
export default {
  beforeUnmount() {
    console.log('home组件即将卸载了')
  },
  unmounted() {
    console.log('home组件卸载了')
  }
}
</script>

<style>

</style>