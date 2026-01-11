<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left">l</slot>
    </div>
    <div class="center">
      <slot name="center">center</slot>
    </div>
    <div class="right">
      <slot name="right">r</slot>
    </div>
  </div>
  <div class="other">
    <slot name="default">o</slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .nav-bar {
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .left, .center, .right {
    flex: 1;
  }
</style>