import { CTableColumn } from "#/table";
import { useI18n } from "vue-i18n";
import { formatTime } from "@/utils/common";

export interface ClubActivityLabelDataModel {
  id: number; //ID
  name: string; //名称
  tenantId?: number; //租户id
  createBy?: string; //创建者
  updateBy?: string; //更新者
  createAt?: Date; //创建日期
  updateAt: Date; //更新时间
}

export const url: Partial<UrlListType> = {
  list: "/v1/clubActivityLabels:search",
  add: "/v1/clubActivityLabels",
  batchDelete: "/v1/clubActivityLabels:delete",
  delete: "/v1/clubActivityLabels",
  edit: "/v1/clubActivityLabels"
};

export const setupAttributes = () => {
  const { t } = useI18n();
  const searchFilterOptions = computed(() => {
    return [
      {
        label: t("page.common.club.activity.label.package.column.name"),
        name: "name",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.club.activity.label.package.column.name_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.club.activity.label.package.column.tenantId"),
        name: "tenantId",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.club.activity.label.package.column.tenantId_placeholder"),
          maxLength: "24"
        }
      }
    ];
  });

  const tableColumns = computed<CTableColumn<ClubActivityLabelDataModel>[]>(() => {
    return [
      {
        type: "selection",
        show: true,
        fixed: "left",
        width: "55"
      },
      {
        prop: "id", ///ID
        show: true,
        label: t("page.common.club.activity.label.package.column.id"),
        fixed: "left",
        width: "100"
      },
      {
        prop: "name", ///名称
        show: true,
        label: t("page.common.club.activity.label.package.column.name"),
        width: "180"
      },
      {
        prop: "tenantId", ///租户id
        show: true,
        label: t("page.common.club.activity.label.package.column.tenantId"),
        width: "100"
      },
      {
        prop: "createBy", ///创建者
        show: true,
        label: t("page.common.club.activity.label.package.column.createBy"),
        width: "180"
      },
      {
        prop: "updateBy", ///更新者
        show: true,
        label: t("page.common.club.activity.label.package.column.updateBy"),
        width: "180"
      },
      {
        prop: "createAt", ///创建日期
        show: true,
        label: t("page.common.club.activity.label.package.column.createAt"),
        width: "180",
        formatter: formatTime
      },
      {
        prop: "updateAt", ///更新时间
        show: true,
        label: t("page.common.club.activity.label.package.column.updateAt"),
        width: "180",
        formatter: formatTime
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
