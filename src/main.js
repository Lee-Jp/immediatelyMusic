// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 有赞组件库
import Vant from 'vant'
import 'vant/lib/index.css'
// 解决点击300ms延迟问题
import FastClick from 'fastclick'
// 引入css基本样式
import '@/assets/css/reset.css'
// 解决移动端一像素问题
import '@/assets/css/border.css'
import '@/assets/font/iconfont.css'
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.use(Vant)
// 使用FastClick监听dom点击事件
FastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
