<template>
  <div class="app">
    <div class="tabs">
      <template v-for="(item, index) in tabs" :key="index">
        <button class="tab" :class="{ active: index === currentIndex }"
          @click="currentIndex = index">{{ item }}</button>
      </template>
    </div>
    <div class="view">
      <keep-alive include="home,cat">
        <component :is="tabs[currentIndex]" ></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
// 会自动拆分打包
const AsyncCat = defineAsyncComponent(() => import('./views/Cat.vue'));
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
    Cat: AsyncCat,
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