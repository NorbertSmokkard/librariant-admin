import Vue from 'vue'
import App from './App.vue'
import router from './components/router/index'
import vuetify from './plugins/vuetify';
import VueApexCharts from 'vue-apexcharts'

Vue.config.productionTip = false
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

new Vue({
  vuetify,
  router,
  VueApexCharts,
  render: h => h(App)
}).$mount('#app')
