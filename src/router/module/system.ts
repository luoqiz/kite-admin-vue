import { RouteRecordRaw } from "vue-router";

export default {
  name: "system",
  path: "/system",
  component: () => import("@/layouts/common-page.vue"),
  meta: { auth: true, menu: { title: "router.system", icon: "Lock" } },
  children: [
    {
      name: "user",
      path: "user",
      component: () => import("@/views/system/user/index.vue"),
      meta: { menu: { title: "router.system.user" } }
    }
  ]
} as RouteRecordRaw;
