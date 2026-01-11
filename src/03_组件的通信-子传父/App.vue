<template>
  <div>
    <h2>{{ counter }}</h2>
    <!-- 自定义add方法并监听事件 -->
    <AddCounter @add="addBtn"></AddCounter>
    <SubCounter @sub="subBtn"></SubCounter>
  </div>
</template>

<script>
import AddCounter from './AddCounter.vue';
import SubCounter from './SubCounter.vue';
  export default {  
    components: {
      AddCounter,
      SubCounter
    },
    data() {
      return {
        counter: 0,
      }
  },
    methods: {
      addBtn(count) {
        this.counter += count;
      },
      subBtn(count) {
        this.counter -= count;
      }
    }

  }
</script>

<style>

</style>