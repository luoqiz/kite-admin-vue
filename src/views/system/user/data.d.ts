import { CTableColumn } from "#/table";
import { formatTime, parseDate2Str } from "@/utils/common";
import { useI18n } from "vue-i18n";

export interface SysUserDataModel {
  id: number; //ID
  deptId?: number; //部门名称
  username?: string; //用户名
  nickName?: string; //昵称
  gender?: string; //性别
  phone?: string; //手机号码
  email?: string; //邮箱
  avatarName?: string; //头像地址
  avatarPath?: string; //头像真实路径
  password?: string; //密码
  isAdmin?: boolean; //是否为admin账号
  enabled?: boolean; //状态：1启用、0禁用
  expireTime?: Date; //账号到期时间
  nonLocked?: boolean; //账号是否未锁定
  createBy?: string; //创建者
  updateBy?: string; //更新者
  pwdResetTime?: Date; //修改密码的时间
  createTime?: Date; //创建日期
  updateTime?: Date; //更新时间
  jobIds?: string[]; //岗位id列表
  roleIds?: string[]; //角色id列表
}

export const url: Partial<UrlListType> = {
  list: "/v1/sysUser:search",
  add: "/v1/sysUser",
  batchDelete: "/v1/sysUser",
  delete: "/v1/sysUser",
  edit: "/v1/sysUser"
};

export const setupUserAttributes = () => {
  const { t } = useI18n();

  const searchFilterOptions = computed(() => {
    return [
      {
        label: t("page.common.system.user.username"),
        name: "username",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.system.user.username_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.system.user.nickName"),
        name: "nickName",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.system.user.nickName_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.system.user.phone"),
        name: "phone",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.system.user.phone_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.system.user.enabled"),
        name: "enabled",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.system.user.enabled_placeholder"),
          maxLength: "24"
        }
      },
      {
        label: t("page.common.system.user.expireTime"),
        name: "expireTime",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.system.user.expireTime_placeholder"),
          maxLength: "24"
        }
      }
      // {
      //   label: t("page.common.design.article.search.type"),
      //   name: "type",
      //   tagName: "async-select",
      //   props: {
      //     placeholder: t("page.common.design.article.search.type_placeholder"),
      //     url: "/article/type",
      //     size: "default",
      //     style: {
      //       width: "100%"
      //     }
      //   }
      // }
    ];
  });

  const tableColumns = computed<CTableColumn<SysUserDataModel>[]>(() => {
    return [
      {
        type: "selection",
        show: true,
        fixed: "left",
        width: "55"
      },
      {
        prop: "username",
        show: true,
        label: t("page.common.system.user.column.username"),
        fixed: "left",
        locked: true
      },
      {
        prop: "nickName",
        show: true,
        label: t("page.common.system.user.column.nickName"),
        width: "180"
      },
      {
        prop: "deptId",
        show: true,
        label: t("page.common.system.user.column.deptId"),
        width: "180"
      },
      {
        prop: "gender",
        show: true,
        label: t("page.common.system.user.column.gender"),
        width: "180"
      },
      {
        prop: "phone",
        show: true,
        label: t("page.common.system.user.column.phone"),
        width: "180"
      },
      {
        prop: "email",
        show: true,
        label: t("page.common.system.user.column.email"),
        width: "180"
      },
      {
        prop: "avatarPath",
        show: true,
        label: t("page.common.system.user.column.avatar"),
        width: "180",
        scoped: "avatar"
      },
      {
        prop: "enabled",
        show: true,
        label: t("page.common.system.user.column.enabled"),
        width: "180"
      },
      {
        prop: "expireTime",
        show: true,
        label: t("page.common.system.user.column.expireTime"),
        width: "180",
        formatter: formatTime
      },
      {
        prop: "nonLocked",
        label: t("page.common.system.user.column.nonLocked"),
        width: "180"
      },
      {
        prop: "createTime",
        label: t("page.common.system.user.column.createTime"),
        width: "180",
        formatter: formatTime
      },
      {
        prop: "updateTime",
        label: t("page.common.system.user.column.updateTime"),
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
