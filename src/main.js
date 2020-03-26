import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// Uncomment for performance
// Vue.config.performance = true

new Vue({
  render: h => h(App),
}).$mount('#app')
