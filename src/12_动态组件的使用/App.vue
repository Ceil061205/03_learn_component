<template>
  <div class="app">
    <div class="tabs">
      <template v-for="(item, index) in tabs" :key="index">
        <button class="tab" :class="{ active: index === currentIndex }"
          @click="currentIndex = index">{{ item }}</button>
      </template>
    </div>
    <div class="view">
      <!-- 1.逻辑判断 -->
      <!-- <Home v-if="currentIndex === 0"></Home>
      <Cat v-if="currentIndex === 1"></Cat>
      <About v-if="currentIndex === 2"></About> -->

      <!-- 2.动态组件 -->
      <!-- 来源:全局或者局部注册过的组件 -->
      <component :is="tabs[currentIndex]" name="xyz" :age="19" @homeClick="homeClick"></component>
    </div>
  </div>
</template>

<script>
import Home from './views/Home.vue';
import Cat from './views/Cat.vue';
import About from './views/About.vue';
export default {
  data() {
    return {
      tabs: ['home', 'about', 'cat'],
      currentIndex: 0,
      currentTab: 'home'
    }
  },
  components: {
    About,
    Cat,
    Home
  },
  methods: {
    handleTab(tab) {
      console.log(tab);
      this.currentTab = tab;
    },
    homeClick(payload) {
      console.log('home click', payload);
    }
  },
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