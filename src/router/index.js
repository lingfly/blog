import { createRouter, createWebHistory } from 'vue-router'

import ArchiveView from "@/views/ArchiveView";
import Blog from "@/components/blog/Blog";
import Archive from "@/components/blog/Archive";
import HomeView from "@/views/HomeView";
import BlogHome from "@/components/blog/BlogHome";

const routes = [
  {
    path: '/',
    name: 'default',
    component: HomeView
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
    children: [
      {
        path: 'home',
        component: BlogHome
      },
      {
        path: 'archive',
        component: Archive
      },
    ]
  },
  {
    path: '/archive',
    name: 'archive',
    component: Archive
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
