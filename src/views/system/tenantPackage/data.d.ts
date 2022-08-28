import { CTableColumn } from "#/table";
import { useI18n } from "vue-i18n";
import { formatTime } from "@/utils/common";

export interface SysTenantPackageDataModel {
  id: number; //套餐编号
  name: string; //套餐名
  status: number; //租户状态（0正常 1停用）
  remark?: string; //备注
  menuIds: string; //关联的菜单编号
  creator: string; //创建者
  createTime: Date; //创建时间
  updater?: string; //更新者
  updateTime: Date; //更新时间
  deleted: boolean; //是否删除
}

export const url: Partial<UrlListType> = {
  list: "/v1/sysTenantPackages:search",
  add: "/v1/sysTenantPackages",
  batchDelete: "/v1/sysTenantPackages:delete",
  delete: "/v1/sysTenantPackages",
  edit: "/v1/sysTenantPackages"
};

export const setupAttributes = () => {
  const { t } = useI18n();
  const searchFilterOptions = computed(() => {
    return [
      {
        label: t("page.common.system.tenant.package.column.name"),
        name: "name",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.system.tenant.package.column.name_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.system.tenant.package.column.status"),
        name: "status",
        type: "select",
        props: {
          placeholder: t("page.common.system.tenant.package.column.status_placeholder")
        },
        children: [
          {
            tagName: "el-option",
            props: {
              label: "全部",
              value: ""
            }
          },
          {
            tagName: "el-option",
            props: {
              label: "正常",
              value: "1"
            }
          },
          {
            tagName: "el-option",
            props: {
              label: "停用",
              value: "0"
            }
          }
        ]
      }
    ];
  });

  const tableColumns = computed<CTableColumn<SysTenantPackageDataModel>[]>(() => {
    return [
      {
        type: "selection",
        show: true,
        fixed: "left",
        width: "55"
      },
      {
        prop: "id",
        show: true,
        label: t("page.common.system.tenant.package.column.id")
      },
      {
        prop: "name",
        show: true,
        label: t("page.common.system.tenant.package.column.name")
      },
      {
        prop: "status",
        show: true,
        label: t("page.common.system.tenant.package.column.status"),
        scoped: "status"
      },
      {
        prop: "remark",
        show: true,
        label: t("page.common.system.tenant.package.column.remark")
      },
      {
        prop: "menuIds",
        show: true,
        label: t("page.common.system.tenant.package.column.menuIds")
      },
      {
        prop: "creator",
        show: true,
        label: t("page.common.system.tenant.package.column.creator")
      },
      {
        prop: "createTime",
        show: true,
        label: t("page.common.system.tenant.package.column.createTime"),
        width: "180",
        formatter: formatTime
      },
      {
        prop: "updater",
        show: true,
        label: t("page.common.system.tenant.package.column.updater")
      },
      {
        prop: "updateTime",
        show: true,
        label: t("page.common.system.tenant.package.column.updateTime"),
        width: "180",
        formatter: formatTime
      },
      {
        prop: "deleted",
        show: true,
        label: t("page.common.system.tenant.package.column.deleted")
      },
      {
        prop: "actions",
        show: true,
        label: t("page.common.design.article.column.action"),
        fixed: "right",
        scoped: "actions",
        width: "150"
      }
    ];
  });
  return {
    searchFilterOptions,
    tableColumns
  };
};
