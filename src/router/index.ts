import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    name: "App",
    path: "/",
    redirect: "/Comp1",
    component: () => import("../components/HelloWorld.vue"),
    meta: {
      keepAlive: true,
    },
    children: [
      {
        name: "Comp1",
        path: "/Comp1",
        component: () => import("../components/Comp1.vue"),
        redirect: "/Comp1/Comp11",
        meta: {
          keepAlive: true,
        },
        children: [
          {
            name: "Comp11",
            path: "/Comp1/Comp11",
            component: () => import("../components/Comp11.vue"),
            meta: {
              keepAlive: true,
            },
          },
          {
            name: "Comp12",
            path: "/Comp1/Comp12",
            component: () => import("../components/Comp12.vue"),
            meta: {
              keepAlive: true,
            },
          },
        ],
      },
      {
        name: "Comp2",
        path: "/Comp2",
        redirect: "/Comp2/Comp21",
        component: () => import("../components/Comp2.vue"),
        meta: {
          keepAlive: true,
        },
        children: [
          {
            name: "Comp21",
            path: "/Comp2/Comp21",
            component: () => import("../components/Comp21.vue"),
            meta: {
              keepAlive: true,
            },
          },
          {
            name: "Comp22",
            path: "/Comp2/Comp22",
            component: () => import("../components/Comp22.vue"),
            meta: {
              keepAlive: true,
            },
          },
        ],
      },
    ],
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
