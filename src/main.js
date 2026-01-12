import { createApp } from 'vue'
// import App from './01_组件的嵌套使用/App.vue'
// import App from './02_组件的通信-父传子/App.vue'
// import App from './03_组件的通信-子传父/App.vue'
// import App from './04_组件间通信-案例练习/App.vue'
// import App from './05_组件的插槽-基本使用/App.vue'
// import App from './06_组件的插槽-具名插槽/App.vue'
// import App from './07_组件的插槽-作用域插槽/App.vue'
// import App from './08_Provide和Inject/App.vue'
// import App from './09_事件总线的使用/App.vue'
// import App from './10_生命周期函数演练/App.vue'
// import App from './11_ref获取元素组件/App.vue'
// import App from './12_动态组件的使用/App.vue'
// import App from './13_Keep-Alive的使用/App.vue'

// import函数可以让webpack对到导入文件进行分包处理
// import('./utils/test').then(({ sum }) => {
//   console.log(sum(1, 2))
// })
// import App from './14_异步组件的使用/App.vue'

// import App from './15_组件的v-model/App.vue'

import App from './16_组件的混入/App.vue'
// const app = createApp(App)
// app.mixin({
//   created() {
//     console.log('我是全局混入')
//   }
// })
// app.mount('#app')

createApp(App).mount('#app')
