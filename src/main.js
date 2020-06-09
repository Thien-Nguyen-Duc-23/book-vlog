import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'

new Vue({// eslint-disable-line no-new
  el: '#app',
  router: router,
  render: h => h(App)
});

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format("MMMM Do, YYYY")
  }
});
