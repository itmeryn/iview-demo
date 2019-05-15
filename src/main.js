import Vue from 'vue'
import App from './App.vue'
import './plugins/iview.js'
import router from './router'
import Vuex from 'vuex'
import store from './store'
Vue.use(Vuex)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
