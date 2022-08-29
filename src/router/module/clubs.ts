import { RouteRecordRaw } from "vue-router";

export default {
  name: "clubs",
  path: "/clubs",
  component: () => import("@/layouts/common-page.vue"),
  meta: { auth: true, menu: { title: "router.club", icon: "Lock" } },
  children: [
    {
      name: "club_staff",
      path: "club_staff",
      component: () => import("@/views/club/staff/index.vue"),
      meta: { menu: { title: "router.club.staff" }, keepAlive: true }
    }
  ]
} as RouteRecordRaw;
