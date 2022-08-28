import { CTableColumn } from "#/table";
import { useI18n } from "vue-i18n";
import { formatTime } from "@/utils/common";

export interface OccuClubDataModel {
  id: number; //ID
  tenantId?: number; //租户id
  name: string; //名称
  legalName: string; //法人姓名
  legalIdCard: string; //法人身份证号
  legalPhone: string; //法人手机号
  businessLicense: string; //营业执照照片地址
  businessNo: string; //营业执照编号
  website?: string; //官网地址
  auditState: string; //审核状态
  createAt?: Date; //
  updateAt: Date; //
}

export const url: Partial<UrlListType> = {
  list: "/v1/occuClubs:search",
  add: "/v1/occuClubs",
  batchDelete: "/v1/occuClubs:delete",
  delete: "/v1/occuClubs",
  edit: "/v1/occuClubs"
};

export const setupAttributes = () => {
  const { t } = useI18n();
  const searchFilterOptions = computed(() => {
    return [
      {
        label: t("page.common.occu.club.package.column.tenantId"),
        name: "tenantId",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.occu.club.package.column.tenantId_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.occu.club.package.column.name"),
        name: "name",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.occu.club.package.column.name_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.occu.club.package.column.legalName"),
        name: "legalName",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.occu.club.package.column.legalName_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.occu.club.package.column.legalPhone"),
        name: "legalPhone",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.occu.club.package.column.legalPhone_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.occu.club.package.column.auditState"),
        name: "auditState",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.occu.club.package.column.auditState_placeholder"),
          maxLength: "24"
        }
      }
    ];
  });

  const tableColumns = computed<CTableColumn<OccuClubDataModel>[]>(() => {
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
        label: t("page.common.occu.club.package.column.id"),
        fixed: "left",
        width: "180"
      },
      {
        prop: "tenantId",
        show: true,
        label: t("page.common.occu.club.package.column.tenantId"),
        width: "180"
      },
      {
        prop: "name",
        show: true,
        label: t("page.common.occu.club.package.column.name"),
        width: "150"
      },
      {
        prop: "legalName",
        show: true,
        label: t("page.common.occu.club.package.column.legalName"),
        width: "120"
      },
      {
        prop: "legalIdCard",
        show: true,
        label: t("page.common.occu.club.package.column.legalIdCard"),
        width: "180"
      },
      {
        prop: "legalPhone",
        show: true,
        label: t("page.common.occu.club.package.column.legalPhone"),
        width: "120"
      },
      {
        prop: "businessLicense",
        show: true,
        label: t("page.common.occu.club.package.column.businessLicense"),
        width: "100"
      },
      {
        prop: "businessNo",
        show: true,
        label: t("page.common.occu.club.package.column.businessNo"),
        width: "100"
      },
      {
        prop: "website",
        show: true,
        label: t("page.common.occu.club.package.column.website")
      },
      {
        prop: "auditState",
        show: true,
        label: t("page.common.occu.club.package.column.auditState")
      },
      {
        prop: "createAt",
        show: true,
        label: t("page.common.occu.club.package.column.createAt"),
        formatter: formatTime
      },
      {
        prop: "updateAt",
        show: true,
        label: t("page.common.occu.club.package.column.updateAt"),
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
