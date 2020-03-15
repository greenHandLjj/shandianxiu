import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Repair = () => import('views/repair/Repair')
const Profile = () => import('views/profile/Profile')
const Login = () => import('views/login/Login')
// Test

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/repair',
    component: Repair
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/login',
    component: Login
  }
]

let router = new VueRouter({
  mode: 'history',
  routes
})

export default router