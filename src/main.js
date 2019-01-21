import Vue from 'vue'
import App from './App.vue'
import { Carousel } from 'bootstrap-vue/es/components';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueCharts from 'vue-chartjs'
import router from './router.js'
Vue.use(require('vue-moment'));

import "chart.js";

import "hchs-vue-charts";

Vue.use(window.VueCharts);
Vue.component('Navbar', require('./components/Navbar.vue').default);

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(Carousel);
Vue.use(BootstrapVue);
Vue.use(VueCharts);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
