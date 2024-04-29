import { RouteRecordRaw } from "vue-router";
const cssDayModules = import.meta.glob('@/pages/css-100days/modules/*.vue');
export const cssDemoRouters: RouteRecordRaw[] = [
  {
    path: "/css-demo/advanced",
    name: "advanced",
    component: () => import("@/pages/css-demo/index.vue"),
    children: [
      {
        path: "/css-demo/advanced/cube",
        name: "cube",
        component: () => import("@/pages/css-demo/advanced/Cube.vue"),
      },
      {
        path: "/css-demo/advanced/planet",
        name: "planet",
        component: () => import("@/pages/css-demo/advanced/Planet.vue"),
      },
      {
        path: "/css-demo/advanced/typed",
        name: "typed",
        component: () => import("@/pages/css-demo/advanced/Typed.vue"),
      },
      {
        path: "/css-demo/advanced/water",
        name: "water",
        component: () => import("@/pages/css-demo/advanced/Water.vue"),
      },
    ],
  },
  {
    path: "/css-demo/menus",
    name: "menus",
    component: () => import("@/pages/css-demo/index.vue"),
    children: [
      {
        path: "plus",
        name: "plus",
        component: () => import("@/pages/css-demo/menus/Plus.vue"),
      },
    ],
  },
  {
    path: "/css-demo/svg",
    name: "menus",
    component: () => import("@/pages/css-demo/index.vue"),
    children: [
      {
        path: "base",
        name: "base",
        component: () => import("@/pages/css-demo/svg/Base.vue"),
      },
    ],
  },
];

export const cssDaysRouters: RouteRecordRaw[] = [
  {
    path: "/css-100days/day",
    name: "css100day",
    component: () => import("@/pages/css-100days/index.vue"),
    children: []
  },
];

export const cssToolsRouters: RouteRecordRaw[] = [
  {
    path: "/css-tools/triangle",
    name: "triangle",
    component: () => import("@/pages/css-tools/triangle.vue"),
    children: []
  },
];


for(const path in cssDayModules) {
  const component = cssDayModules[path]
  const routeName = path.match(/day\d+/)![0] // ts中！用在赋值内容后，使null和undefined类型可以赋值给其他类型
  const routePath = routeName.match(/\d+/)![0]
  const css100DayRoutes = cssDaysRouters[0]
   //   {
    //     path: "12",
    //     name: "day12",
    //     component: () => import("@/pages/css-100days/modules/day12.vue"),
    //   },
  css100DayRoutes.children!.push({
    path: routePath,
    name: routeName,
    component: component
  })
}