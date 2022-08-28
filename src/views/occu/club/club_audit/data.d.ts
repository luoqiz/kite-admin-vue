import { CTableColumn } from "#/table";
import { useI18n } from "vue-i18n";

export interface OccuClubAuditDataModel {
  id: number; //ID
  occuClubId: string; //俱乐部认证ID
  auditState: string; //审核状态
  mark?: string; //备注
  createBy?: string; //创建者
  updateBy?: string; //更新者
  createAt?: Date; //创建日期
  updateAt: Date; //更新时间
}

export const url: Partial<UrlListType> = {
  list: "/v1/occuClubAudits:search",
  add: "/v1/occuClubAudits",
  batchDelete: "/v1/occuClubAudits:delete",
  delete: "/v1/occuClubAudits",
  edit: "/v1/occuClubAudits"
};

export const setupAttributes = () => {
  const { t } = useI18n();
  const searchFilterOptions = computed(() => {
    return [
      {
        label: t("page.common.occu.club.audit.package.column.occuClubId"),
        name: "occuClubId",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.occu.club.audit.package.column.occuClubId_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.occu.club.audit.package.column.auditState"),
        name: "auditState",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.occu.club.audit.package.column.auditState_placeholder"),
          maxLength: "24"
        }
      }
    ];
  });

  const tableColumns = computed<CTableColumn<OccuClubAuditDataModel>[]>(() => {
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
        label: t("page.common.occu.club.audit.package.column.id")
      },
      {
        prop: "occuClubId",
        show: true,
        label: t("page.common.occu.club.audit.package.column.occuClubId")
      },
      {
        prop: "auditState",
        show: true,
        label: t("page.common.occu.club.audit.package.column.auditState")
      },
      {
        prop: "mark",
        show: true,
        label: t("page.common.occu.club.audit.package.column.mark")
      },
      {
        prop: "createBy",
        show: true,
        label: t("page.common.occu.club.audit.package.column.createBy")
      },
      {
        prop: "updateBy",
        show: true,
        label: t("page.common.occu.club.audit.package.column.updateBy")
      },
      {
        prop: "createAt",
        show: true,
        label: t("page.common.occu.club.audit.package.column.createAt")
      },
      {
        prop: "updateAt",
        show: true,
        label: t("page.common.occu.club.audit.package.column.updateAt")
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
