import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'

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
