import { CTableColumn } from "#/table";
import { useI18n } from "vue-i18n";

export interface OccuLeaderAuditDataModel {
  id: number; //ID
  occuLeaderId: string; //个人认证领队表ID
  auditState: string; //审核状态
  mark?: string; //备注
  createBy?: string; //创建者
  updateBy?: string; //更新者
  createAt?: Date; //创建日期
  updateAt: Date; //更新时间
}

export const url: Partial<UrlListType> = {
  list: "/v1/occuLeaderAudits:search",
  add: "/v1/occuLeaderAudits",
  batchDelete: "/v1/occuLeaderAudits:delete",
  delete: "/v1/occuLeaderAudits",
  edit: "/v1/occuLeaderAudits"
};

export const setupAttributes = () => {
  const { t } = useI18n();
  const searchFilterOptions = computed(() => {
    return [
      {
        label: t("page.common.occu.leader.audit.package.column.occuLeaderId"),
        name: "occuLeaderId",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.occu.leader.audit.package.column.occuLeaderId_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.occu.leader.audit.package.column.auditState"),
        name: "auditState",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.occu.leader.audit.package.column.auditState_placeholder"),
          maxLength: "24"
        }
      }
    ];
  });

  const tableColumns = computed<CTableColumn<OccuLeaderAuditDataModel>[]>(() => {
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
        label: t("page.common.occu.leader.audit.package.column.id")
      },
      {
        prop: "occuLeaderId",
        show: true,
        label: t("page.common.occu.leader.audit.package.column.occuLeaderId")
      },
      {
        prop: "auditState",
        show: true,
        label: t("page.common.occu.leader.audit.package.column.auditState")
      },
      {
        prop: "mark",
        show: true,
        label: t("page.common.occu.leader.audit.package.column.mark")
      },
      {
        prop: "createBy",
        show: true,
        label: t("page.common.occu.leader.audit.package.column.createBy")
      },
      {
        prop: "updateBy",
        show: true,
        label: t("page.common.occu.leader.audit.package.column.updateBy")
      },
      {
        prop: "createAt",
        show: true,
        label: t("page.common.occu.leader.audit.package.column.createAt")
      },
      {
        prop: "updateAt",
        show: true,
        label: t("page.common.occu.leader.audit.package.column.updateAt")
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
