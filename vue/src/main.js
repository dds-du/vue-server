// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//使ie支持Promise语法
require('native-promise-only')

//引入css文件
require('./assets/css/commen.less')

import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

//全局引入自定义组件
import table from './components/table'
Vue.component('dds-table',table)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
