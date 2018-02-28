import Vue from 'vue'
import Router from 'vue-router'
// import NProgress from 'nprogress'
// import 
Vue.use(Router)

import HelloWorld from '@/components/HelloWorld'
import ShoppingCart from '../views/shopping-cart/index.vue'


import Common from '../views/common.vue'



const router = new Router({
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld,
    children :[ 
      {path: '/a', name: 'HelloWorld', component: HelloWorld},
      {path: '/b', name: 'HelloWorld', component: HelloWorld}
    ]
    },
    { path: '/qwe', name: 'HelloWorld', component: HelloWorld,
      beforeEnter: (to, from, next) => {
        console.log("beforeEnter--HelloWorld");
        next();
      }
    },
    { path: '/ShoppingCart', name: 'ShoppingCart', component: ShoppingCart,meta: { needLogin : true },
      beforeEnter: (to, from, next) => {
        console.log("beforeenter--shoppingCart");
        console.log(to)
        next();
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log("beforeEach")
  console.log(to);
  
  //判断路由记录是否需要验证登录
  // if(to.matched.some(current => current.meta.needLogin)){
  //       //只要记录上需要登录 我们就得验证
  //       /*
  //        * 自己封装方法判断登录 sessionstorage localstorage cookie啥的自行决定
  //        */
  //        let isLogin = getLoginStatus();//自己定义的判断登录的方法
  //        if(!isLogin) {
  //            next({
  //                path: '/login', //跳转到登录页
  //                query: {
  //                    redirect: to.fullPath //登录页需要知道从哪跳过来的，方便登录成功后回到原页面
  //                }
  //            });
  //        } else {
  //            next();
  //        }
  //   } else {
  //       next();
  //   }
  next();
})

router.afterEach((to, from) => {
  console.log("afterEach")
})



export default router

