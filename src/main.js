import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueCountryRegionSelect from 'vue-country-region-select'
import VueFormulate from '@braid/vue-formulate'
Vue.use(VueFormulate)
Vue.use(vueCountryRegionSelect)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
