/*
 * @Author: Pan Jingyi
 * @Date: 2022-08-30 14:41:13
 * @LastEditTime: 2022-08-30 15:13:15
 */
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/column/:id',
    name: 'column',
    component: () => import('@/views/ColumnDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
