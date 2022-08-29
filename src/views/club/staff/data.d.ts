import { CTableColumn } from "#/table";
import { useI18n } from "vue-i18n";
import { formatTime } from "@/utils/common";

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
    return [
      {
        label: t("page.common.club.staff.package.column.clubId"),
        name: "clubId",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.club.staff.package.column.clubId_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.club.staff.package.column.categories"),
        name: "categories",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.club.staff.package.column.categories_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.club.staff.package.column.auditState"),
        name: "auditState",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.club.staff.package.column.auditState_placeholder"),
          maxLength: "24"
        }
      }
    ];
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
        prop: "id", ///ID
        show: true,
        label: t("page.common.club.staff.package.column.id"),
        fixed: "left",
        width: "100"
      },
      {
        prop: "clubId", ///俱乐部id
        show: true,
        label: t("page.common.club.staff.package.column.clubId"),
        width: "100"
      },
      {
        prop: "userId", ///用户id
        show: true,
        label: t("page.common.club.staff.package.column.userId"),
        width: "100"
      },
      {
        prop: "categories", ///工作类别
        show: true,
        label: t("page.common.club.staff.package.column.categories"),
        width: "180"
      },
      {
        prop: "auditState", ///申请状态
        show: true,
        label: t("page.common.club.staff.package.column.auditState"),
        width: "180"
      },
      {
        prop: "createBy", ///创建者
        show: true,
        label: t("page.common.club.staff.package.column.createBy"),
        width: "180"
      },
      {
        prop: "updateBy", ///更新者
        show: true,
        label: t("page.common.club.staff.package.column.updateBy"),
        width: "180"
      },
      {
        prop: "createAt", ///创建日期
        show: true,
        label: t("page.common.club.staff.package.column.createAt"),
        width: "180",
        formatter: formatTime
      },
      {
        prop: "updateAt", ///更新时间
        show: true,
        label: t("page.common.club.staff.package.column.updateAt"),
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
