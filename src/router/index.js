import Vue from 'vue'
import Router from 'vue-router'
import login from '../login.vue'
import home from '../home.vue'
import userinfo from '../components/userinfo'
import rolelist from '../components/rolelist'
import payed from '../components/payed'
import paying from '../components/paying'
import finished from '../components/finished'
import user from '../components/user'
import repair from '../components/repair'
import welcome from '../components/welcome'

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/',
      redirect: '/login'
    },
    {path: '/login',
      component: login
    },
    {path: '/home',
      component: home,
      redirect: '/welcome',
      children: [{
        path: '/userinfo',
        component: userinfo
      },
      {
        path: '/welcome',
        component: welcome
      },
      {
        path: '/rolelist',
        component: rolelist
      },
      {
        path: '/payed',
        component: payed
      },
      {
        path: '/paying',
        component: paying
      },
      {
        path: '/finished',
        component: finished
      },
      {
        path: '/user',
        component: user
      },
      {
        path: '/repair',
        component: repair
      }
      ]}
  ]
})

// 导航守卫
router.beforeEach((to, from, next) => { // to 去哪里 from从哪来 next放行 next('/login')强制跳转
  if (to.path === '/login') {
    return next()
  }
  const store = sessionStorage.getItem('name')
  if (!store) {
    return next('/login')
  }
  next()
})

export default router
