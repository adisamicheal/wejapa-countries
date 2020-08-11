// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import VueResource from 'vue-resource';
import axios from 'axios';

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(axios);

new Vue({
  render: h => h(App),
}).$mount('#app')