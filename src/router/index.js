import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import notFound from "@/views/NotFound";
// import Vue from 'vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/play/:gameName',
    name: 'play',
    component: ()=> import('../views/PlayGames'),
    props: true,
  },
  {
    path: '/video',
    name: 'videoList',
    component: ()=> import('../views/VideoList'),
    props: true,
  },
  {
    path: '/video/:videoName',
    name: 'videoDetail',
    component: ()=> import('../views/VideoDetail'),
    props: true,
  },
  { path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: notFound
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


// router.afterEach((to) => {
//   // Use next tick to handle router history correctly
//   // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
//   Vue.nextTick(() => {
//     document.title = to.meta.title || DEFAULT_TITLE;
//   });
// });

export default router
