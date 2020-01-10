import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Galeria from '../views/Galeria.vue'
import Template from '../components/Template.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Template,
    children: [
      {
        path: '',
        alias: 'home',
        name: 'home',
        component: Index
      },
      {
        path: '/galeria',
        name: 'galeria',
        component: Galeria
      },

    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
  routes
})

export default router
