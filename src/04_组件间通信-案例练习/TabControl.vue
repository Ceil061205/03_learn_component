<template>
  <div class="tab-control">
    <template v-for="(item, index) in title" :key="index">
      <div
        :class="{ active: index === currentIndex }"
        @click="itemClick(index)"
        class="tab-control-item"
      >
       <span> {{ item }}</span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    title: Array,
    default: () => [],
  },
  methods: {
    itemClick(index) {
      // 更新当前激活的标签索引
      this.currentIndex = index;
      // 触发父组件的tabClick事件，传递当前点击的标签索引
      this.$emit("tabClick", index);
    },
  },
  emits: ["tabClick"],
  data() {
    return {
      currentIndex: 0,
    };
  },
};
</script>

<style>
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.tab-control-item {
  flex: 1;
}
.active {
  color: red;
  font-weight: 700;
}
.active span {
  border-bottom: 2px solid red;
  padding: 5px;
}
</style>