import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import './plugins/vue-constants';
import App from './App.vue';
import router from './router';
import store from './store';
import './quasar';
import { fasFont } from '@quasar/extras/fontawesome-v5';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
