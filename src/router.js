import { createRouter, createWebHistory } from 'vue-router'
import Authentication from './components/Authentication.vue'
import Dashboard from './components/Dashboard.vue'

const routes = [
  { path: '/', component: Authentication },
  { path: '/dashboard', component: Dashboard },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})