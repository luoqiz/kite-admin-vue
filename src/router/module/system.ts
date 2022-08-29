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
      meta: { menu: { title: "router.system.user" }, keepAlive: true }
    },
    {
      name: "tenant",
      path: "tenant",
      component: () => import("@/views/system/tenant/index.vue"),
      meta: { menu: { title: "router.system.tenant" }, keepAlive: true }
    },
    {
      name: "tenant_package",
      path: "tenant_package",
      component: () => import("@/views/system/tenantPackage/index.vue"),
      meta: { menu: { title: "router.system.tenant_package" }, keepAlive: true }
    },
    {
      name: "dict",
      path: "dict",
      component: () => import("@/views/system/dict/index.vue"),
      meta: { menu: { title: "router.system.dict" }, keepAlive: true }
    },
    {
      name: "dict_detail",
      path: "dict_detail",
      component: () => import("@/views/system/dict_detail/index.vue"),
      meta: { menu: { title: "router.system.dict_detail" }, keepAlive: true }
    }
  ]
} as RouteRecordRaw;
