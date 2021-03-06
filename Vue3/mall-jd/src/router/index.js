import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Home from '@/views/Home.vue'
const routes = [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/Cart.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('@/views/Order.vue')
  }, {
    path: '/my',
    name: 'My',
    component: () => import('@/views/My.vue')
  },{
    path: '/test',
    name: 'Test',
    component: () => import('@/views/test.vue')
  }, {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Login.vue'),
    beforeEnter(to, form, next) {
      let { loginFlag } = localStorage
      loginFlag ? next({ name: 'Home' }) : next();
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// 全局守卫
router.beforeEach((to, form, next) => {
  let loginFlag = localStorage.loginFlag
  if (loginFlag || to.name == 'Login') {
    next()
  } else {
    next({
      name: 'Login'
    })
  }
})
export default router