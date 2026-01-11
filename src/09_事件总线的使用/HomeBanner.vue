<template>
  <div class="banner">
    <button @click="bannerBtnClick">banner按钮</button>
    <hr>
  </div>
</template>

<script>
import eventBus from './utils/event-bus';
export default {
  methods: {
    bannerBtnClick() {
      console.log('banner');
      eventBus.emit('xyzEvent','xyz', 18, '男');
    }
  }
}
</script>

<style>

</style>