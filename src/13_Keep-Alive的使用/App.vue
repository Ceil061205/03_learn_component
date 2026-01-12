<template>
  <div class="app">
    <div class="tabs">
      <template v-for="(item, index) in tabs" :key="index">
        <button class="tab" :class="{ active: index === currentIndex }"
          @click="currentIndex = index">{{ item }}</button>
      </template>
    </div>
    <div class="view">
      <!-- 被包裹的组件都有缓存 -->
      <!-- include:组件的名称来自于组件定义时候的name选项,大小写敏感 -->
      <keep-alive include="home,cat">
        <component :is="tabs[currentIndex]" ></component>
      </keep-alive>
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