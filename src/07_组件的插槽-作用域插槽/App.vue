<template>
  <div class="app">
    <TabControl :title="['鞋子', '看样子', '衣服']" @tab-click="tabClick"></TabControl>
  </div>
  <div class="content">{{ pageContents[currentIndex] }}</div>

   <TabControl :title="['鞋子', '看样子', '衣服']" @tab-click="tabClick">
    <!-- 
      作用域插槽:
        应用场景: 当插槽内容较为复杂, 或者是封装组件时, 需要子传递数据给父组件时.
    -->
    <template v-slot:default="props">
      <button>{{ props.item }}</button>
    </template>

    <!-- 独占默认插槽的简写形式 -->
     <!-- <template v-slot="props">
      <button>{{ props.item }}</button>
    </template> -->
   </TabControl>


    <!-- 如果只有一个默认插槽template可以省略 -->
   <TabControl :title="['鞋子', '看样子', '衣服']" @tab-click="tabClick" v-slot="props">
    <button>{{ props.item }}</button>
   </TabControl>
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