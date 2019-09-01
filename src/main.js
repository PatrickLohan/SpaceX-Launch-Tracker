import Vue from 'vue';
import App from './App.vue';
import {router} from './router.js'
import { format, fromNow } from './filters/date.js'

Vue.config.productionTip = false;
Vue.filter('format',format);
Vue.filter('fromNow',fromNow);

export const eventBus = new Vue();
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
