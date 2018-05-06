import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/LAyout/Home'
import ListResources from '@/components/Resources/ListResources'
import AddResources from '@/components/Resources/AddResources'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
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
      component: AddResources,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

// Nav guards
router.beforeEach((to, from, next) => {
  // Check for required Auth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if the user is logged
    if (!firebase.auth().currentUser) {
      // If is not logged, redirect to home
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      // If is logged proceed to the route
      next()
    }
  } else {
    // proceed to the route
    next()
  }
})

export default router
