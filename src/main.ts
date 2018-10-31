import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Buefy from 'buefy';
import VueApollo from 'vue-apollo';
import { createProvider } from './vue-apollo';

Vue.use(Buefy);
Vue.use(VueApollo);

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount('#app');
