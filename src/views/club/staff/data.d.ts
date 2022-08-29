import { CTableColumn } from "#/table";
import { useI18n } from "vue-i18n";

export interface ClubStaffDataModel {
  id: number; //ID
  clubId: number; //俱乐部id
  userId: number; //用户id
  categories: string; //工作类别
  auditState: string; //申请状态
  createBy?: string; //创建者
  updateBy?: string; //更新者
  createAt?: Date; //创建日期
  updateAt: Date; //更新时间
}

export const url: Partial<UrlListType> = {
  list: "/v1/clubStaffs:search",
  add: "/v1/clubStaffs",
  batchDelete: "/v1/clubStaffs:delete",
  delete: "/v1/clubStaffs",
  edit: "/v1/clubStaffs"
};

export const setupAttributes = () => {
  const { t } = useI18n();
  const searchFilterOptions = computed(() => {
    return [];
  });

  const tableColumns = computed<CTableColumn<ClubStaffDataModel>[]>(() => {
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
        label: t("page.common.club.staff.package.column.id")
      },
      {
        prop: "clubId",
        show: true,
        label: t("page.common.club.staff.package.column.clubId")
      },
      {
        prop: "userId",
        show: true,
        label: t("page.common.club.staff.package.column.userId")
      },
      {
        prop: "categories",
        show: true,
        label: t("page.common.club.staff.package.column.categories")
      },
      {
        prop: "auditState",
        show: true,
        label: t("page.common.club.staff.package.column.auditState")
      },
      {
        prop: "createBy",
        show: true,
        label: t("page.common.club.staff.package.column.createBy")
      },
      {
        prop: "updateBy",
        show: true,
        label: t("page.common.club.staff.package.column.updateBy")
      },
      {
        prop: "createAt",
        show: true,
        label: t("page.common.club.staff.package.column.createAt")
      },
      {
        prop: "updateAt",
        show: true,
        label: t("page.common.club.staff.package.column.updateAt")
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
