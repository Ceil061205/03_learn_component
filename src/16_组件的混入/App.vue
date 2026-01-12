<template>
  <div>
    <home></home>
    <about></about>
    <cat></cat>
  </div>
</template>

<script>
import About from './views/About.vue';
import Home from './views/Home.vue';
import Cat from './views/Cat.vue';
export default {  
  components: {
    About,
    Home,
    Cat
  }
}
</script>

<style>

</style>