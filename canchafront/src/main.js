import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.config.productionTip = false
Vue.use(VueAxios, axios);
Vue.use(VueSweetalert2);
Vue.use(require("moment"));

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
