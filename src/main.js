import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import axios from 'axios'

Vue.prototype.axios = axios;

Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg)
})

Vue.config.productionTip = false

//全局组件
import Scroller from '@/components/Scroller'
import Loading from '@/components/Loading'
Vue.component('Scroller', Scroller)
Vue.component('Loading', Loading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
