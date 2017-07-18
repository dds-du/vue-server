// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//引入jquery
require('jquery')

//require('@lib/css/bootstrap.min.css')
//require('@lib/css/bootstrap-theme.min.css')
//require('@lib/js/bootstrap.min.js')
require('native-promise-only')

require('./assets/css/commen.less')

import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
