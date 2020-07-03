import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'
import VeeValidate from 'vee-validate';
import validator from 'vee-validate';
import store from './store';

Vue.use(VeeValidate);
new Vue({// eslint-disable-line no-new
  el: '#app',
  router: router,
  store: store,
  validator: validator,
  render: h => h(App)
});

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format("MMMM Do, YYYY")
  }
});
