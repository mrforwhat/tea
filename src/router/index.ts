import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import {cssDemoRouters,cssDaysRouters,cssToolsRouters} from './css-demo/index'
import AuthEventEmitter from "@/utils/AuthEventEmitter";
let routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "主页",
    },
    component: ()=> import('@/pages/Home.vue'),
  },
  {
    path: "/Mine",
    name: "mine",
    meta: {
      title: "我的",
    },
    component: ()=> import('@/pages/Mine.vue'),
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录",
    },
    component: ()=> import('@/pages/login/index.vue'),
  },
  {
    path: "/test",
    name: "test",
    meta: {
      title: "测试",
    },
    component: ()=> import('@/pages/js-demo/test.vue'),
  },
  ...cssDemoRouters,
  ...cssDaysRouters,
  ...cssToolsRouters
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
router.beforeEach((to,from,next)=>{
    if(to.meta.title == 'login'){
        AuthEventEmitter.emit('API:UN_AUTH')
    }
    next()
})
export default router;
