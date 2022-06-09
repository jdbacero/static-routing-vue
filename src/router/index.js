import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '../views/TodoList.vue'
// import About from '../views/AboutView.vue'
import TodoDetails from '@/views/TodoDetails.vue'

const routes = [
  {
    path: '/',
    name: 'TodoList',
    component: TodoList
  },
  {
    path:'/todo/:id',
    name: 'TodoDetails',
    component: TodoDetails,
    props: true
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
