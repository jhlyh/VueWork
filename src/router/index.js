import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/LoginView.vue'

import Main from '../views/MainView.vue'
import Goods from '../views/GoodsView.vue'
import ShopCar from '../views/ShopCarView.vue'
import OrderView from '../views/OrderView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/main',
    name: 'main',
    component: Main,
    children: [
      {
        path: 'goods',
        name: 'goods',
        component: Goods,
      },
      {
        path: 'shopcar',
        name: 'shopcar',
        component: ShopCar,
      },
      {
        path: 'order',
        name: 'order',
        component: OrderView,
      },
    ],
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
