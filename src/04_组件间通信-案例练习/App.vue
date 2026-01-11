<template>
  <div class="app">
    <TabControl :title="['鞋子', '看样子', '衣服']" @tab-click="tabClick"></TabControl>
  </div>
  <div class="content">{{ pageContents[currentIndex] }}</div>
</template>

<script>
import TabControl from './TabControl.vue';
export default {
  components: {
    TabControl
  },
  data() {
    return {
      pageContents: ['鞋子', '看起来', '衣服'],
      currentIndex: 0
    }
  },
  methods: {
    tabClick(index) {
      // console.log('子组件传来的索引', index);
      this.currentIndex = index;
    }
  }
}
</script>

<style>

</style>