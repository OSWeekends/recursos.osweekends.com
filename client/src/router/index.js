import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/LAyout/Home'
import Resources from '@/components/Resources/Resources'

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
      name: 'Resources',
      component: Resources
    }
  ]
})
