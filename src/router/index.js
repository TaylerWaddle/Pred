import { createRouter, createWebHistory } from 'vue-router'

const Builds = () => import('@/views/BuildListView.vue')
const Items = () => import('@/views/ItemListView.vue')
const Heroes = () => import('@/views/HeroesListView.vue')
const Profile = () => import('@/views/ProfileView.vue')
const Item = () => import('@/views/ItemView.vue')
const Hero = () => import('@/views/HeroView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'builds',
      component: Builds
    },
    {
      path: '/items',
      name: 'items',
      component: Items
    },
    {
      path: '/heroes',
      name: 'heroes',
      component: Heroes
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/items/:id',
      name: 'item',
      component: Item
    },
    {
      path: '/heroes/:id',
      name: 'hero',
      component: Hero
    }
  ],
  linkExactActiveClass:
    'bg-gradient-to-r from-predYellow to-predOrange inline-block text-transparent bg-clip-text'
})

export default router
