import Vue from 'vue'
import App from './App.vue'

// 控制台给一些关键提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
