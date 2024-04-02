import { createRouter, createWebHistory } from 'vue-router'
import ErrorPage from "../temp/Error.vue"
import MyProfile from "../temp/MyProfile.vue"
const routes = [
  {
    path: '/',
    name: 'cover',
    component: MyProfile
  },
  {
    path: '/err',
    name: 'error',
    component: ErrorPage
  },
  
]

const BASE_URL = '/'

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes
})

export default router
