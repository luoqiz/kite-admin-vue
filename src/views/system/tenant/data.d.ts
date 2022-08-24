import { CTableColumn } from "#/table";
import { useI18n } from "vue-i18n";

export interface SysTenantDataModel {
  id: number; //租户编号
  name: string; //租户名
  contactUserId?: number; //联系人的用户编号
  contactName: string; //联系人
  contactMobile?: string; //联系手机
  status: boolean; //租户状态（0正常 1停用）
  domain?: string; //绑定域名
  packageId: number; //租户套餐编号
  expireTime: Date; //过期时间
  accountCount: number; //账号数量
  creator: string; //创建者
  createTime: Date; //创建时间
  updater?: string; //更新者
  updateTime: Date; //更新时间
  deleted: boolean; //是否删除
}

export const url: Partial<UrlListType> = {
  list: "/v1/sysTenants:search",
  add: "/v1/sysTenants",
  batchDelete: "/v1/sysTenants:delete",
  delete: "/v1/sysTenants",
  edit: "/v1/sysTenants"
};

export const setupAttributes = () => {
  const { t } = useI18n();
  const searchFilterOptions = computed(() => {
    return [
      {
        label: t("page.common.system.tenant.column.name"),
        name: "name",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.system.tenant.column.name_placeholder"),
          maxLength: "50"
        }
      },
      {
        label: t("page.common.system.tenant.column.contactMobile"),
        name: "contactMobile",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.system.tenant.column.contactMobile_placeholder"),
          maxLength: "50"
        }
      },
      {
        label: t("page.common.system.tenant.column.status"),
        name: "status",
        type: "select",
        props: {
          placeholder: t("page.common.system.tenant.column.status_placeholder")
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
      },
      {
        label: t("page.common.system.tenant.column.packageId"),
        name: "packageId",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.system.tenant.column.packageId_placeholder"),
          maxLength: "24"
        }
      }
    ];
  });

  const tableColumns = computed<CTableColumn<SysTenantDataModel>[]>(() => {
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
        label: t("page.common.system.tenant.column.id")
      },
      {
        prop: "name",
        show: true,
        label: t("page.common.system.tenant.column.name")
      },
      {
        prop: "contactUserId",
        show: true,
        label: t("page.common.system.tenant.column.contactUserId")
      },
      {
        prop: "contactName",
        show: true,
        label: t("page.common.system.tenant.column.contactName")
      },
      {
        prop: "contactMobile",
        show: true,
        label: t("page.common.system.tenant.column.contactMobile")
      },
      {
        prop: "status",
        show: true,
        label: t("page.common.system.tenant.column.status")
      },
      {
        prop: "domain",
        show: true,
        label: t("page.common.system.tenant.column.domain")
      },
      {
        prop: "packageId",
        show: true,
        label: t("page.common.system.tenant.column.packageId")
      },
      {
        prop: "expireTime",
        show: true,
        label: t("page.common.system.tenant.column.expireTime")
      },
      {
        prop: "accountCount",
        show: true,
        label: t("page.common.system.tenant.column.accountCount")
      },
      {
        prop: "creator",
        show: true,
        label: t("page.common.system.tenant.column.creator")
      },
      {
        prop: "createTime",
        show: true,
        label: t("page.common.system.tenant.column.createTime")
      },
      {
        prop: "updater",
        show: true,
        label: t("page.common.system.tenant.column.updater")
      },
      {
        prop: "updateTime",
        show: true,
        label: t("page.common.system.tenant.column.updateTime")
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
