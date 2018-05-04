import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/LAyout/Home'
import ListResources from '@/components/Resources/ListResources'
import AddResources from '@/components/Resources/AddResources'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/resources',
      name: 'ListResources',
      component: ListResources
    },
    {
      path: '/resources/new',
      name: 'AddResources',
      component: AddResources
    }
  ]
})
