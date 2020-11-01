import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueCountryRegionSelect from 'vue-country-region-select'
import VueFormulate from '@braid/vue-formulate'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)
Vue.use(VueFormulate)
Vue.use(vueCountryRegionSelect)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
