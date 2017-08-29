import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import 'babel-polyfill'

import 'common/less/index.less'
Vue.config.productionTip = false

fastclick.attach(document.body) // 解决300毫秒延迟问题

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
