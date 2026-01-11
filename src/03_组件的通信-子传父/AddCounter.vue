<template>
    <div class="add">
    <button @click="add(1)">+1</button>
    <button @click="add(10)">+10</button>
  </div>
</template>

<script>
export default {
    // emits的作用是声明子组件可以发出的事件名，如果不声明，父组件也可以监听到这个事件
    // emits: ['add'],
    emits: {
      // add: null, // 声明了事件名，但没有校验函数
      // 对事件进行校验
        add: (count) => {
            // 校验传递的数据是否合法，如果不合法会抛出警告
            if (count < 0) {
              console.warn(`${count} is invalid`)
              return false // 不合法的数据返回false
            }
            return true // 验证通过返回true
          }
      },
    methods: {
      add(count) {
          // 子组件发出一个自定义事件 第一个参数是事件名，第二个参数是要传递的数据
          this.$emit('add', count)
        }
    }
  }
</script>

<style>

</style>