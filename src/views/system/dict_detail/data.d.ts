import { CTableColumn } from "#/table";
import { useI18n } from "vue-i18n";

export interface SysDictDetailDataModel {
  id: number; //ID
  dictId?: number; //字典id
  label: string; //字典标签
  value: string; //字典值
  dictSort?: number; //排序
  tenantId?: number; //租户id
  createBy?: string; //创建者
  updateBy?: string; //更新者
  createTime?: Date; //创建日期
  updateTime?: Date; //更新时间
  dictName?: string; //
}

export const url: Partial<UrlListType> = {
  list: "/v1/sysDictDetails:search",
  add: "/v1/sysDictDetails",
  batchDelete: "/v1/sysDictDetails:delete",
  delete: "/v1/sysDictDetails",
  edit: "/v1/sysDictDetails"
};

export const setupAttributes = () => {
  const { t } = useI18n();
  const searchFilterOptions = computed(() => {
    return [
      {
        label: t("page.common.system.dict.detail.package.column.dictId"),
        name: "dictId",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.system.dict.detail.package.column.dictId_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.system.dict.detail.package.column.value"),
        name: "value",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.system.dict.detail.package.column.value_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.system.dict.detail.package.column.tenantId"),
        name: "tenantId",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.system.dict.detail.package.column.tenantId_placeholder"),
          maxLength: "24"
        }
      }
    ];
  });

  const tableColumns = computed<CTableColumn<SysDictDetailDataModel>[]>(() => {
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
        label: t("page.common.system.dict.detail.package.column.id")
      },
      {
        prop: "dictId",
        show: true,
        label: t("page.common.system.dict.detail.package.column.dictId")
      },
      {
        prop: "label",
        show: true,
        label: t("page.common.system.dict.detail.package.column.label")
      },
      {
        prop: "value",
        show: true,
        label: t("page.common.system.dict.detail.package.column.value")
      },
      {
        prop: "dictSort",
        show: true,
        label: t("page.common.system.dict.detail.package.column.dictSort")
      },
      {
        prop: "tenantId",
        show: true,
        label: t("page.common.system.dict.detail.package.column.tenantId")
      },
      {
        prop: "createBy",
        show: true,
        label: t("page.common.system.dict.detail.package.column.createBy")
      },
      {
        prop: "updateBy",
        show: true,
        label: t("page.common.system.dict.detail.package.column.updateBy")
      },
      {
        prop: "createTime",
        show: true,
        label: t("page.common.system.dict.detail.package.column.createTime")
      },
      {
        prop: "updateTime",
        show: true,
        label: t("page.common.system.dict.detail.package.column.updateTime")
      },
      {
        prop: "dictName",
        show: true,
        label: t("page.common.system.dict.detail.package.column.dictName")
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
