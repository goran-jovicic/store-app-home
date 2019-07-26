import Vue from 'vue'
import Router from 'vue-router'
import AppCustomers from './components/AppCustomers'
import AppProducts from './components/AppProducts'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/customers',
      name: 'customers',
      component: AppCustomers
    },
    {
      path: '/products',
      name: 'products',
      component: AppProducts
    }
  ]
})
