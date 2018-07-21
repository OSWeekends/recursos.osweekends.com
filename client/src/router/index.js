import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import About from '@/components/Layout/About'
import Resource from '@/components/Resources/Resource'
import ListResources from '@/components/Resources/ListResources'
import PageNotFound from '@/components/Layout/404'
import UserPage from '@/components/Layout/UserPage'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'ListResources',
      component: ListResources
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/resource/:id',
      name: 'resource',
      component: Resource,
      props: true
    },
    {
      path: '/pageNotFound',
      name: 'PageNotFound',
      component: PageNotFound
    },
    {
      path: '/:name',
      name: 'UserPage',
      component: UserPage
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

  // Check for undefinded route 404
  // TODO create a nice 404 component, and redirect there, until that redirect to home ;)

  if (!to.matched.length) {
    next('/pageNotFound')
  } else {
    next()
  }
})

export default router
