import { CTableColumn } from "#/table";
import { useI18n } from "vue-i18n";

export interface OccuClubStaffDataModel {
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
  list: "/v1/occuClubStaffs:search",
  add: "/v1/occuClubStaffs",
  batchDelete: "/v1/occuClubStaffs:delete",
  delete: "/v1/occuClubStaffs",
  edit: "/v1/occuClubStaffs"
};

export const setupAttributes = () => {
  const { t } = useI18n();
  const searchFilterOptions = computed(() => {
    return [
      {
        label: t("page.common.occu.club.staff.package.column.clubId"),
        name: "clubId",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.occu.club.staff.package.column.clubId_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.occu.club.staff.package.column.userId"),
        name: "userId",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.occu.club.staff.package.column.userId_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.occu.club.staff.package.column.categories"),
        name: "categories",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.occu.club.staff.package.column.categories_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.occu.club.staff.package.column.auditState"),
        name: "auditState",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.occu.club.staff.package.column.auditState_placeholder"),
          maxLength: "24"
        }
      }
    ];
  });

  const tableColumns = computed<CTableColumn<OccuClubStaffDataModel>[]>(() => {
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
        label: t("page.common.occu.club.staff.package.column.id")
      },
      {
        prop: "clubId",
        show: true,
        label: t("page.common.occu.club.staff.package.column.clubId")
      },
      {
        prop: "userId",
        show: true,
        label: t("page.common.occu.club.staff.package.column.userId")
      },
      {
        prop: "categories",
        show: true,
        label: t("page.common.occu.club.staff.package.column.categories")
      },
      {
        prop: "auditState",
        show: true,
        label: t("page.common.occu.club.staff.package.column.auditState")
      },
      {
        prop: "createBy",
        show: true,
        label: t("page.common.occu.club.staff.package.column.createBy")
      },
      {
        prop: "updateBy",
        show: true,
        label: t("page.common.occu.club.staff.package.column.updateBy")
      },
      {
        prop: "createAt",
        show: true,
        label: t("page.common.occu.club.staff.package.column.createAt")
      },
      {
        prop: "updateAt",
        show: true,
        label: t("page.common.occu.club.staff.package.column.updateAt")
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
