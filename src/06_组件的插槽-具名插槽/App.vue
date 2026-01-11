<template>
  <div>
    <show-message>
      <template v-slot:left>
        <h3>{{ text }}</h3>
      </template>
      <!-- <template #right>
        <h3>这里是right</h3>
      </template>
      <template v-slot:center>
        <h3>center</h3>
      </template> -->
    </show-message>
    <show-message>
      <template v-slot:[position]>
        <h3>这里是动态的</h3>
      </template>
    </show-message>
    <button @click=" position= 'left' ">左边</button>
    <button @click=" position= 'right' ">右边</button>
    <button @click=" position= 'center' ">中间</button>
  </div>
</template>

<script>
import showMessage from './showMessage.vue';
export default {
  components: {
    showMessage
  },
  data() {
    return {
      position: 'left',
      text: '这里是左边'
    }
  },

}
</script>

<style>

</style>