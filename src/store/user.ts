import {
  fetchAdminInfo,
  fetchEditorInfo,
  fetchUserInfoByToken,
  ILoginForm,
  userLogin
} from "@/api/user";
import permissionService from "@/hooks/usePermission";
import { UserInfoModel, UserInfoTokenModel } from "@/model/user";
import { setToken } from "@/utils/auth";
import { defineStore } from "pinia";

export const userStore = defineStore("user", () => {
  const info = ref<Partial<UserInfoTokenModel>>({});

  const name = computed(() => {
    return info.value!.nickName;
  });
  const avatar = computed(() => {
    return info.value!.avatarPath;
  });
  const isEmpty = computed(() => {
    return Object.keys(info.value!).length === 0;
  });
  const permission = computed(() => {
    return info.value?.roles;
  });
  const roleList = computed(() => {
    return info.value?.roleList;
  });

  async function getUserInfo() {
    let data;
    // const permissions = permissionService.defaultPermission;
    // if (permissions.value === "admin") {
    //   ({ data } = await fetchAdminInfo());
    // } else {
    //   ({ data } = await fetchEditorInfo());
    // }
    ({ data } = await fetchUserInfoByToken());
    if (data) {
      info.value = data;
    }
  }

  async function login(loginParam: ILoginForm, success: () => void, error: (err: any) => void) {
    try {
      const {
        data: { tokenInfo }
      } = await userLogin(loginParam);
      if (tokenInfo) {
        setToken(tokenInfo.token);
        await getUserInfo();
        success();
      } else {
        throw "获取token失败";
      }
    } catch (err) {
      error(err);
    }
  }

  return {
    info,
    name,
    avatar,
    isEmpty,
    permission,
    roleList,
    login,
    getUserInfo
  };
});
