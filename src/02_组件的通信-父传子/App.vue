<template>
  <div class="app">
    <!-- 没有被子组件定义的props是非prop的attribute属性,会默认添加到子组件的根元素上(如class style id) -->
    <showInfo name="xyz" :age="22" height="1.90" address="江苏"></showInfo>
    <hr>
    <!-- sM 或者s-m -->
    <showInfo name="xyz1" showMessage="msg"></showInfo>
  </div>
</template>

<script>
  import showInfo from './showInfo.vue';
  export default {
    name: 'App',
    components: {
      showInfo
    }

  }
</script>

<style>

</style>
