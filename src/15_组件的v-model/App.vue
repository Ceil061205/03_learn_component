<template>
  <div class="app">
    <!-- <input :value="msg"  @input="msg = $event.target.value"> -->
    <!-- <input v-model="msg"> -->

    <!-- 组件的v-model -->
    <!-- <Counter v-bind:modelValue="appCounter" @update:modelValue="appCounter = $event"></Counter> -->
    <Counter v-model="appCounter"></Counter>

    <!-- v-model自定义名称:counter -->
    <Counter2 v-model:counter="appCounter" v-model:xyz="appXyz"></Counter2>

  </div>
</template>

<script>
import Counter from './Counter.vue';
import Counter2 from './Counter2.vue';
export default {
  data() {
    return {
      msg: 'hello',
      appCounter: 100,
      appXyz: 'xyz'
    }
  },
  components: {
    Counter,
    Counter2
  }
};
</script>

<style>
  .app {
    width: 100%;
  }
  .tabs {
    display: flex;
  }
  .tab {
    padding: 10px;
  }
  .active {
    color: red;
  }
</style>