import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import AboutView from '@/views/AboutView.vue'

import ComputorV1Page from '../projects/computorv1/App.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    },
    {
      path: '/computorv1',
      name: 'computorv1',
      component: ComputorV1Page,
      meta: {
        title: 'Computorv1 | Home'
      }
    },
    {
      path: '/computorv1/learn-math',
      name: 'computorv1/learn-math',
      component: ComputorV1Page,
      meta: {
        title: 'Computorv1 | Learn the Math'
      }
    },
    {
      path: '/computorv1/playground',
      name: 'computorv1/playground',
      component: ComputorV1Page,
      meta: {
        title: 'Computorv1 | Playground'
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
