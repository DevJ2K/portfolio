import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'DevJ2K | Home'
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
      meta: {
        title: 'DevJ2K | Projects'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        title: 'DevJ2K | About'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // document.title = `${to.params.country ? `${to.params.country}, ${to.params.city}`
  //   : to.meta.title
  // } | The Local Weather`;
  document.title = to.meta.title;
  next();
})

export default router
