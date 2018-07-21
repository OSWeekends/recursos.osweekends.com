// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import Notifications from 'vue-notification'
import VueAxios from 'vue-axios'
import axios from 'axios'
import Vuetify from 'vuetify'
import store from './store'
import 'vuetify/dist/vuetify.min.css'
import 'firebase/firestore'
import config from '../firebase.config'
import filters from './filters'

Vue.use(Notifications)
Vue.use(Vuetify)
Vue.use(VueAxios, axios)

filters.forEach(f => {
  Vue.filter(f.name, f.execute)
})

firebase.initializeApp(config)

Vue.config.productionTip = false

// Check if there is any active sessions when you init the app
let app
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      el: '#app',
      store,
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
