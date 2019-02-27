import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: (resolve)=>require(['../pages/home.vue'],resolve)
    },
    {
      path: '/order',
      name: 'order',
      component: (resolve)=>require(['../pages/order.vue'],resolve)
    },
    {
      path: '/find',
      name: 'find',
      component: (resolve)=>require(['../pages/find.vue'],resolve)
    },
    {
      path: '/mine',
      name: 'mine',
      component: (resolve)=>require(['../pages/mine.vue'],resolve)
    },
    {
      path: '*',
      redirect:'/'
    }
  ]
})
