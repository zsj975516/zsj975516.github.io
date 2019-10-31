import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import( '../views/Home.vue'),
    meta: {
      title: '首页',
      isNeedLogin: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/Login.vue'),
    meta: {
      title: '登录',
      isNeedLogin: false
    }
  },
  {
    path: '/myprojectlist',
    name: 'myprojectlist',
    component: () => import( '../views/MyProjectList.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import( '../views/404.vue'),
    meta: {
      title: '页面找不到',
      isNeedLogin: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to, from)
  if (to.meta.isNeedLogin) {
    let isLogin = myStorage.getItem('isLogin', false)
    if (isLogin) next()
    else next('/login')
  } else {
    document.title = to.meta.title
    next()
  }
})

export default router
