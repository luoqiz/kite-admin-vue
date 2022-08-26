import { CTableColumn } from "#/table";
import { useI18n } from "vue-i18n";

export interface SysDictDataModel {
  id: number; //ID
  name: string; //字典名称
  description?: string; //描述
  tenantId?: number; //租户id
  createBy?: string; //创建者
  updateBy?: string; //更新者
  createTime?: Date; //创建日期
  updateTime?: Date; //更新时间
}

export const url: Partial<UrlListType> = {
  list: "/v1/sysDicts:search",
  add: "/v1/sysDicts",
  batchDelete: "/v1/sysDicts:delete",
  delete: "/v1/sysDicts",
  edit: "/v1/sysDicts"
};

export const setupAttributes = () => {
  const { t } = useI18n();
  const searchFilterOptions = computed(() => {
    return [
      {
        label: t("page.common.system.dict.package.column.name"),
        name: "name",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.system.dict.package.column.name_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.system.dict.package.column.tenantId"),
        name: "tenantId",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.system.dict.package.column.tenantId_placeholder"),
          maxLength: "24"
        }
      }
    ];
  });

  const tableColumns = computed<CTableColumn<SysDictDataModel>[]>(() => {
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
        label: t("page.common.system.dict.package.column.id")
      },
      {
        prop: "name",
        show: true,
        label: t("page.common.system.dict.package.column.name")
      },
      {
        prop: "description",
        show: true,
        label: t("page.common.system.dict.package.column.description")
      },
      {
        prop: "tenantId",
        show: true,
        label: t("page.common.system.dict.package.column.tenantId")
      },
      {
        prop: "createBy",
        show: true,
        label: t("page.common.system.dict.package.column.createBy")
      },
      {
        prop: "updateBy",
        show: true,
        label: t("page.common.system.dict.package.column.updateBy")
      },
      {
        prop: "createTime",
        show: true,
        label: t("page.common.system.dict.package.column.createTime")
      },
      {
        prop: "updateTime",
        show: true,
        label: t("page.common.system.dict.package.column.updateTime")
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
