import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 创建router 根实例
// 把 router 配置到实例中
// 通过render 方法把App 根组件渲染到#app 入口节点
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
