import { RouteRecordRaw } from "vue-router";

export default {
  name: "clubs",
  path: "/clubs",
  component: () => import("@/layouts/common-page.vue"),
  meta: { auth: true, menu: { title: "router.club", icon: "Lock" } },
  children: [
    {
      name: "staff",
      path: "staff",
      component: () => import("@/views/club/staff/index.vue"),
      meta: { menu: { title: "router.club.staff" }, keepAlive: true }
    },
    {
      name: "activity",
      path: "activity",
      component: () => import("@/views/club/activity/index.vue"),
      meta: { menu: { title: "router.club.activity" }, keepAlive: true }
    },
    {
      name: "activity_edit",
      path: "activity_edit",
      component: () => import("@/views/club/activity/EditPage.vue"),
      meta: { menu: { title: "router.club.activity.edit" }, keepAlive: true, hidden: true }
    },
    {
      name: "activity_label",
      path: "activity_label",
      component: () => import("@/views/club/activity_label/index.vue"),
      meta: { menu: { title: "router.club.activity.label" }, keepAlive: true }
    }
  ]
} as RouteRecordRaw;
