// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import VueMaterial from 'vue-material'
import 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)

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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
