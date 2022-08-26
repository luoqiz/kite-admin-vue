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
    },
    {
      name: "tenant",
      path: "tenant",
      component: () => import("@/views/system/tenant/index.vue"),
      meta: { menu: { title: "router.system.tenant" } }
    },
    {
      name: "tenant_package",
      path: "tenant_package",
      component: () => import("@/views/system/tenantPackage/index.vue"),
      meta: { menu: { title: "router.system.tenant_package" } }
    },
    {
      name: "dict",
      path: "dict",
      component: () => import("@/views/system/dict/index.vue"),
      meta: { menu: { title: "router.system.dict" } }
    },
    {
      name: "dict_detail",
      path: "dict_detail",
      component: () => import("@/views/system/dict_detail/index.vue"),
      meta: { menu: { title: "router.system.dict_detail" } }
    }
  ]
} as RouteRecordRaw;
