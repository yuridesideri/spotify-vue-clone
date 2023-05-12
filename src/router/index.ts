import MainLayout from '@/layouts/MainLayout.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainLayout',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'search',
          name: 'search',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/views/SearchView.vue')
        },
        {
          path: 'genre',
          name: 'genre',
          component: () => import('@/views/GenreView.vue')
        },
        {
          path: 'playlist',
          name: 'playlist',
          component: () => import('@/views/PlaylistView.vue')
        },
        {
          path: 'artist',
          name: 'artist',
          component: () => import('@/views/ArtistView.vue')
        },
        {
          path: 'album',
          name: 'album',
          component: () => import('@/views/AlbumView.vue')
        },
        {
          path: 'track',
          name: 'track',
          component: () => import('@/views/TrackView.vue')
        },
        {
          path: 'user',
          name: 'user',
          component: () => import('@/views/UserView.vue')
        },
        {
          path: 'show',
          name: 'show',
          component: () => import('@/views/ShowView.vue')
        }
      ]
    }
  ]
})

export default router
