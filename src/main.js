import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './util/registerServiceWorker'
import './util/MyStorage.js'
import Notification from './components/Notification'

Vue.config.productionTip = false

Vue.use(Notification)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
