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
import 'vuetify/dist/vuetify.min.css'
import 'firebase/firestore'
import {store} from './components/store/store'

Vue.use(Notifications)
Vue.use(Vuetify)
Vue.use(VueAxios, axios)

var config = {
  apiKey: 'AIzaSyCV1oei0T8oUoYEy3Uv__wQwLvev5pJ_Jc',
  authDomain: 'recursos-osw.firebaseapp.com',
  databaseURL: 'https://recursos-osw.firebaseio.com',
  projectId: 'recursos-osw',
  storageBucket: 'recursos-osw.appspot.com',
  messagingSenderId: '566044748794'
}

firebase.initializeApp(config)

Vue.config.productionTip = false

// Check if there is any active sessions when you init the app
let app
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      el: '#app',
      store: store,
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
