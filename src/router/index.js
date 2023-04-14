import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import CategoriesView from '@/views/CategoriesView.vue'
import ContactView from '@/views/ContactView.vue'
import ErrorView from '@/views/ErrorView'
import TurisforView from '@/views/TurisforView.vue'
import CityInfo from '@/components/cards/CityInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path:'/about',
    name:'About',
    component:AboutView,
  },
  {
    path:'/categories',
    name:'Categories',
    component:CategoriesView,
  },
  {
    path:'/info',
    name:'Turisfor',
    component:TurisforView,
  },
  {
   path:'/contact',
   name:'Contact',
   component:ContactView
  },
  {
    path:'/city/:carName',
    name:'CityInfo',
    component:CityInfo
   },
  {
    path:'/:catchAll(.*)',
    name:"ErrorView",
    component:ErrorView
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// router.beforeEach((to) => {
// console.log(to);
// document.title = `${to.name}`
// });


export default router
