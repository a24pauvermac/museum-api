
import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '../components/HomePage.vue'
import SearchPage from '../components/SearchPage.vue'
import FavoritePage from '../components/FavoritesPage.vue'
import ItemDetailPage from '../components/ItemDetailPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/search', component: SearchPage },
  { path: '/favorite', component: FavoritePage },
  { path: '/item/:id', component: ItemDetailPage },

]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})