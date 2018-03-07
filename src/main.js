// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入vue
import Vue from 'vue'
// 引入入口文件
import App from './App'
// 引入路由
import router from './router'
// 引入vuex store
import store from './store/index.js'
// 引入全局样式表
import './assets/global.css'
// 引入element-ui
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// 引入全局过滤
// import { currency } from './filter/currency'
// Vue.filter('currency', currency)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

