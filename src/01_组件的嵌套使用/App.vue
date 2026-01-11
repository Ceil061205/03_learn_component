<template>
  <div class="app">111
    <AppHeader></AppHeader>
    <AppContent></AppContent>
  </div>
</template>

<script>
import AppHeader from './component/AppHeader.vue';
import AppContent from './component/AppContent.vue';
export default {
  name: 'App',
  components: {
    AppHeader,
    AppContent
  }
}
</script>

<style>

</style>
