import { CTableColumn } from "#/table";
import { useI18n } from "vue-i18n";

export interface OccuLeaderDataModel {
  id: number; //ID
  userId: number; //用户id
  legalName: string; //真实姓名
  idCard: string; //身份证号
  phone: string; //手机号
  idCardFront: string; //身份证正面
  idCardBack: string; //身份证反面
  idCardHolding: string; //手持身份证正面
  auditState: string; //审核状态
  createBy?: string; //创建者
  updateBy?: string; //更新者
  createAt?: Date; //创建日期
  updateAt: Date; //更新时间
}

export const url: Partial<UrlListType> = {
  list: "/v1/occuLeaders:search",
  add: "/v1/occuLeaders",
  batchDelete: "/v1/occuLeaders:delete",
  delete: "/v1/occuLeaders",
  edit: "/v1/occuLeaders"
};

export const setupAttributes = () => {
  const { t } = useI18n();
  const searchFilterOptions = computed(() => {
    return [
      {
        label: t("page.common.occu.leader.package.column.userId"),
        name: "userId",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.occu.leader.package.column.userId_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.occu.leader.package.column.legalName"),
        name: "legalName",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.occu.leader.package.column.legalName_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.occu.leader.package.column.idCard"),
        name: "idCard",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.occu.leader.package.column.idCard_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.occu.leader.package.column.phone"),
        name: "phone",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.occu.leader.package.column.phone_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.occu.leader.package.column.auditState"),
        name: "auditState",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.occu.leader.package.column.auditState_placeholder"),
          maxLength: "24"
        }
      }
    ];
  });

  const tableColumns = computed<CTableColumn<OccuLeaderDataModel>[]>(() => {
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
        label: t("page.common.occu.leader.package.column.id")
      },
      {
        prop: "userId",
        show: true,
        label: t("page.common.occu.leader.package.column.userId")
      },
      {
        prop: "legalName",
        show: true,
        label: t("page.common.occu.leader.package.column.legalName")
      },
      {
        prop: "idCard",
        show: true,
        label: t("page.common.occu.leader.package.column.idCard")
      },
      {
        prop: "phone",
        show: true,
        label: t("page.common.occu.leader.package.column.phone")
      },
      {
        prop: "idCardFront",
        show: true,
        label: t("page.common.occu.leader.package.column.idCardFront")
      },
      {
        prop: "idCardBack",
        show: true,
        label: t("page.common.occu.leader.package.column.idCardBack")
      },
      {
        prop: "idCardHolding",
        show: true,
        label: t("page.common.occu.leader.package.column.idCardHolding")
      },
      {
        prop: "auditState",
        show: true,
        label: t("page.common.occu.leader.package.column.auditState")
      },
      {
        prop: "createBy",
        show: true,
        label: t("page.common.occu.leader.package.column.createBy")
      },
      {
        prop: "updateBy",
        show: true,
        label: t("page.common.occu.leader.package.column.updateBy")
      },
      {
        prop: "createAt",
        show: true,
        label: t("page.common.occu.leader.package.column.createAt")
      },
      {
        prop: "updateAt",
        show: true,
        label: t("page.common.occu.leader.package.column.updateAt")
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
