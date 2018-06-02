import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/LAyout/Home'
import ListResources from '@/components/Resources/ListResources'
import AddResources from '@/components/Resources/AddResources'
import AddResources2 from '@/components/Resources/AddResources2'
import firebase from 'firebase'
import PageNotFound from '@/components/Layout/404'
import Resource from '@/components/Resources/Resource'

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
      path: '/resources/:id',
      name: 'resource',
      component: Resource,
      props: true
    },
    {
      path: '/resources/new',
      name: 'AddResources',
      component: AddResources,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/resources/new2',
      name: 'AddResources2',
      component: AddResources2,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/pageNotFound',
      name: 'PageNotFound',
      component: PageNotFound
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
