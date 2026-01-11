<template>
  <div>
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
    <h1>{{ height }}</h1>
    <h1>{{ showMessage }}</h1>
    <!-- 通过$attrs访问非prop的attribute -->
    <!-- 与 inheritAttrs: false,搭配使用继承父组件传递过来的属性到指定元素上 -->
    <h2 :class="$attrs.address">1</h2>

  </div>
  <!-- 有多个根用v-bind="$attrs"手动指定绑定 -->
  <div class="other" v-bind="$attrs"></div>
</template>

<script>
export default {
  name: 'showInfo',
  // 接受父组件传递过来的数据
  // 弊端: 不能对类型进行校验, 不能指定默认值等
  // props: ['name', 'age', 'height']

  // 接受父组件传递过来的数据
  props: {
    name: {
      type: String,
      required: true, // 必须传递
    },
    age: {
      type: Number,
      default: 18, // 默认值
      validator(value) {
        return value >= 0 && value <= 120;
      }
    },
    height: [Number, String],
    friend: {
      // 类型是对象或者数组时, 需要提供一个函数返回默认值
      type: Object,
      default: () => ({ name: '张三', age: 18 })
    },
    hobbies: {
      type: Array,
      default: () => ['吃饭', '睡觉']
    },
    showMessage: {
      type: String,
      default: '我是一个默认值'
    }
  },
  // inheritAttrs: false, // 关闭自动继承属性到根元素上
}
</script>

<style>

</style>