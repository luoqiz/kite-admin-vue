import { RouteRecordRaw } from "vue-router";

export default {
  name: "occu",
  path: "/occu",
  component: () => import("@/layouts/common-page.vue"),
  meta: { auth: true, menu: { title: "router.occu", icon: "Lock" } },
  children: [
    {
      name: "club",
      path: "club",
      component: () => import("@/views/occu/club/index.vue"),
      meta: { menu: { title: "router.occu.club" }, keepAlive: true }
    },
    {
      name: "leader",
      path: "leader",
      component: () => import("@/views/occu/leader/index.vue"),
      meta: { menu: { title: "router.occu.leader" }, keepAlive: true }
    },
    {
      name: "club_staff",
      path: "club_staff",
      component: () => import("@/views/occu/club_staff/index.vue"),
      meta: { menu: { title: "router.occu.club_staff" }, keepAlive: true }
    }
  ]
} as RouteRecordRaw;
