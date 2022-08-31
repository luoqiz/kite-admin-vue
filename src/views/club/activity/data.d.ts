import { CTableColumn } from "#/table";
import { useI18n } from "vue-i18n";
import { formatTime } from "@/utils/common";

export interface ClubActivityDataModel {
  id: number; //ID
  title: string; //标题
  cover: string; //封面
  labelId: string; //标签
  leaderId: string; //领队id
  startTime: Date; //活动开始时间
  endTime: Date; //活动结束时间
  postingTime: Date; //发布时间
  regisTime: Date; //报名截止时间
  refundTime: Date; //退款截止时间
  quota: number; //名额
  publisherId: number; //发布人id
  clubId: number; //所属俱乐部
  provinceCode: string; //省份code
  cityCode: string; //城市code
  addr: string; //详细地址
  strengthLevel: number; //强度等级
  mileage?: number; //活动里程(公里)
  rise?: number; //累计上升(米)
  decline?: number; //累计下降(米)
  gatheringTime: Date; //集合时间
  gatheringAddr: string; //集合地点
  visits: number; //浏览量
  details: string; //活动详情
  itinerary: string; //行程安排
  tripRequirements: string; //行程要求
  equipment: string; //装备要求
  notes: string; //报名须知
  insurance: string; //保险
  price: number; //价格
  activeFeeDetail?: string; //价格详情
  reservation: boolean; //是否分预定
  reservationPrice: number; //预定价格
  state: string; //状态（招募中、已成型、待启动、进行中、已结束）
  wxLink?: string; //微信群链接
  url?: string; //引入链接
  autoCreateGroup?: boolean; //自动建群
  viewTimes?: number; //浏览次数
  tenantId?: number; //租户id
  createBy?: string; //创建者
  updateBy?: string; //更新者
  createAt?: Date; //创建日期
  updateAt: Date; //更新时间
}

export const url: Partial<UrlListType> = {
  list: "/v1/clubActivitys:search",
  add: "/v1/clubActivitys",
  batchDelete: "/v1/clubActivitys:delete",
  delete: "/v1/clubActivitys",
  edit: "/v1/clubActivitys"
};

export const setupAttributes = () => {
  const { t } = useI18n();
  const searchFilterOptions = computed(() => {
    return [
      {
        label: t("page.common.club.activity.package.column.title"),
        name: "title",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.club.activity.package.column.title_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.club.activity.package.column.labelId"),
        name: "labelId",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.club.activity.package.column.labelId_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.club.activity.package.column.leaderId"),
        name: "leaderId",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.club.activity.package.column.leaderId_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.club.activity.package.column.startTime"),
        name: "startTime",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.club.activity.package.column.startTime_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.club.activity.package.column.endTime"),
        name: "endTime",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.club.activity.package.column.endTime_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.club.activity.package.column.postingTime"),
        name: "postingTime",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.club.activity.package.column.postingTime_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.club.activity.package.column.regisTime"),
        name: "regisTime",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.club.activity.package.column.regisTime_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.club.activity.package.column.refundTime"),
        name: "refundTime",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.club.activity.package.column.refundTime_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.club.activity.package.column.publisherId"),
        name: "publisherId",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.club.activity.package.column.publisherId_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.club.activity.package.column.clubId"),
        name: "clubId",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.club.activity.package.column.clubId_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.club.activity.package.column.provinceCode"),
        name: "provinceCode",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.club.activity.package.column.provinceCode_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.club.activity.package.column.cityCode"),
        name: "cityCode",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.club.activity.package.column.cityCode_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.club.activity.package.column.addr"),
        name: "addr",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.club.activity.package.column.addr_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.club.activity.package.column.strengthLevel"),
        name: "strengthLevel",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.club.activity.package.column.strengthLevel_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.club.activity.package.column.gatheringTime"),
        name: "gatheringTime",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.club.activity.package.column.gatheringTime_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.club.activity.package.column.gatheringAddr"),
        name: "gatheringAddr",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.club.activity.package.column.gatheringAddr_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.club.activity.package.column.insurance"),
        name: "insurance",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.club.activity.package.column.insurance_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.club.activity.package.column.reservation"),
        name: "reservation",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.club.activity.package.column.reservation_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.club.activity.package.column.state"),
        name: "state",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.club.activity.package.column.state_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.club.activity.package.column.autoCreateGroup"),
        name: "autoCreateGroup",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.club.activity.package.column.autoCreateGroup_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.club.activity.package.column.tenantId"),
        name: "tenantId",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.club.activity.package.column.tenantId_placeholder"),
          maxLength: "24"
        }
      }
    ];
  });

  const tableColumns = computed<CTableColumn<ClubActivityDataModel>[]>(() => {
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
        label: t("page.common.club.activity.package.column.id"),
        fixed: "left",
        width: "100"
      },
      {
        prop: "title", ///标题
        show: true,
        label: t("page.common.club.activity.package.column.title"),
        width: "180"
      },
      {
        prop: "cover", ///封面
        show: true,
        label: t("page.common.club.activity.package.column.cover"),
        width: "180"
      },
      {
        prop: "labelId", ///标签
        show: true,
        label: t("page.common.club.activity.package.column.labelId"),
        width: "180"
      },
      {
        prop: "leaderId", ///领队id
        show: true,
        label: t("page.common.club.activity.package.column.leaderId"),
        width: "180"
      },
      {
        prop: "startTime", ///活动开始时间
        show: true,
        label: t("page.common.club.activity.package.column.startTime"),
        width: "180",
        formatter: formatTime
      },
      {
        prop: "endTime", ///活动结束时间
        show: true,
        label: t("page.common.club.activity.package.column.endTime"),
        width: "180",
        formatter: formatTime
      },
      {
        prop: "postingTime", ///发布时间
        show: true,
        label: t("page.common.club.activity.package.column.postingTime"),
        width: "180",
        formatter: formatTime
      },
      {
        prop: "regisTime", ///报名截止时间
        show: true,
        label: t("page.common.club.activity.package.column.regisTime"),
        width: "180",
        formatter: formatTime
      },
      {
        prop: "refundTime", ///退款截止时间
        show: true,
        label: t("page.common.club.activity.package.column.refundTime"),
        width: "180",
        formatter: formatTime
      },
      {
        prop: "quota", ///名额
        show: true,
        label: t("page.common.club.activity.package.column.quota"),
        width: "100"
      },
      {
        prop: "publisherId", ///发布人id
        show: true,
        label: t("page.common.club.activity.package.column.publisherId"),
        width: "100"
      },
      {
        prop: "clubId", ///所属俱乐部
        show: true,
        label: t("page.common.club.activity.package.column.clubId"),
        width: "100"
      },
      {
        prop: "provinceCode", ///省份code
        show: true,
        label: t("page.common.club.activity.package.column.provinceCode"),
        width: "180"
      },
      {
        prop: "cityCode", ///城市code
        show: true,
        label: t("page.common.club.activity.package.column.cityCode"),
        width: "180"
      },
      {
        prop: "addr", ///详细地址
        show: true,
        label: t("page.common.club.activity.package.column.addr"),
        width: "180"
      },
      {
        prop: "strengthLevel", ///强度等级
        show: true,
        label: t("page.common.club.activity.package.column.strengthLevel"),
        width: "100"
      },
      {
        prop: "mileage", ///活动里程(公里)
        show: true,
        label: t("page.common.club.activity.package.column.mileage"),
        width: "100"
      },
      {
        prop: "rise", ///累计上升(米)
        show: true,
        label: t("page.common.club.activity.package.column.rise"),
        width: "100"
      },
      {
        prop: "decline", ///累计下降(米)
        show: true,
        label: t("page.common.club.activity.package.column.decline"),
        width: "100"
      },
      {
        prop: "gatheringTime", ///集合时间
        show: true,
        label: t("page.common.club.activity.package.column.gatheringTime"),
        width: "180",
        formatter: formatTime
      },
      {
        prop: "gatheringAddr", ///集合地点
        show: true,
        label: t("page.common.club.activity.package.column.gatheringAddr"),
        width: "180"
      },
      {
        prop: "visits", ///浏览量
        show: true,
        label: t("page.common.club.activity.package.column.visits"),
        width: "100"
      },
      {
        prop: "details", ///活动详情
        show: true,
        label: t("page.common.club.activity.package.column.details"),
        width: "180"
      },
      {
        prop: "itinerary", ///行程安排
        show: true,
        label: t("page.common.club.activity.package.column.itinerary"),
        width: "180"
      },
      {
        prop: "tripRequirements", ///行程要求
        show: true,
        label: t("page.common.club.activity.package.column.tripRequirements"),
        width: "180"
      },
      {
        prop: "equipment", ///装备要求
        show: true,
        label: t("page.common.club.activity.package.column.equipment"),
        width: "180"
      },
      {
        prop: "notes", ///报名须知
        show: true,
        label: t("page.common.club.activity.package.column.notes"),
        width: "180"
      },
      {
        prop: "insurance", ///保险
        show: true,
        label: t("page.common.club.activity.package.column.insurance"),
        width: "180"
      },
      {
        prop: "price", ///价格
        show: true,
        label: t("page.common.club.activity.package.column.price"),
        width: "100"
      },
      {
        prop: "activeFeeDetail", ///价格详情
        show: true,
        label: t("page.common.club.activity.package.column.activeFeeDetail"),
        width: "180"
      },
      {
        prop: "reservation", ///是否分预定
        show: true,
        label: t("page.common.club.activity.package.column.reservation"),
        width: "100",
        scoped: "reservation"
      },
      {
        prop: "reservationPrice", ///预定价格
        show: true,
        label: t("page.common.club.activity.package.column.reservationPrice"),
        width: "100"
      },
      {
        prop: "state", ///状态（招募中、已成型、待启动、进行中、已结束）
        show: true,
        label: t("page.common.club.activity.package.column.state"),
        width: "180"
      },
      {
        prop: "wxLink", ///微信群链接
        show: true,
        label: t("page.common.club.activity.package.column.wxLink"),
        width: "180"
      },
      {
        prop: "url", ///引入链接
        show: true,
        label: t("page.common.club.activity.package.column.url"),
        width: "180"
      },
      {
        prop: "autoCreateGroup", ///自动建群
        show: true,
        label: t("page.common.club.activity.package.column.autoCreateGroup"),
        width: "100",
        scoped: "autoCreateGroup"
      },
      {
        prop: "viewTimes", ///浏览次数
        show: true,
        label: t("page.common.club.activity.package.column.viewTimes"),
        width: "100"
      },
      {
        prop: "tenantId", ///租户id
        show: true,
        label: t("page.common.club.activity.package.column.tenantId"),
        width: "100"
      },
      {
        prop: "createBy", ///创建者
        show: true,
        label: t("page.common.club.activity.package.column.createBy"),
        width: "180"
      },
      {
        prop: "updateBy", ///更新者
        show: true,
        label: t("page.common.club.activity.package.column.updateBy"),
        width: "180"
      },
      {
        prop: "createAt", ///创建日期
        show: true,
        label: t("page.common.club.activity.package.column.createAt"),
        width: "180",
        formatter: formatTime
      },
      {
        prop: "updateAt", ///更新时间
        show: true,
        label: t("page.common.club.activity.package.column.updateAt"),
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
