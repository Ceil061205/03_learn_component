<template>
  <div class="banner">
    banner
    <h1>{{ name }}</h1>
    <h2>{{ age }}</h2>
    <h3>{{ message }}</h3>
    <hr>
  </div>
</template>

<script>
export default {
  inject: ['name', 'age', 'message'],

}
</script>

<style>

</style>