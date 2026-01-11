// src/09_事件总线的使用/utils/event-bus.js 【最终完整版，永久无错】
class HYEventBus {
  constructor() {
    this.events = Object.create(null)
  }

  // ✅ 重点修改：适配 多参数传递 emit(eventName, 参数1, 参数2, 参数3...)
  emit(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(fn => {
        fn.apply(this, args) // 把所有参数传递给回调函数
      })
    }
  }

  // 监听事件
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }
    this.events[eventName].push(callback)
  }

  // 解绑事件，防止内存泄漏
  off(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(fn => fn !== callback)
    }
  }
}

const eventBus = new HYEventBus()
export default eventBus