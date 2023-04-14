import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { library } from '@fortawesome/fontawesome-svg-core'

// import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import 'normalize.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
