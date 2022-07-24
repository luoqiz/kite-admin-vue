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

export const userStore = defineStore("user", {
  state: () => {
    return {
      info: {} as null | UserInfoTokenModel
    };
  },
  getters: {
    name: (state) => {
      return state.info?.nickName;
    },
    avatar: (state) => {
      return state.info?.avatarPath;
    },
    isEmpty: (state) => {
      return Object.keys(state.info!).length === 0;
    },
    permission: (state) => {
      return state.info?.roles;
    }
  },
  actions: {
    async getUserInfo() {
      let data;
      // const permissions = permissionService.defaultPermission;
      // if (permissions.value === "admin") {
      //   ({ data } = await fetchAdminInfo());
      // } else {
      //   ({ data } = await fetchEditorInfo());
      // }
      ({ data } = await fetchUserInfoByToken());
      if (data) {
        this.$state.info = data;
      }
    },
    async login(loginParam: ILoginForm, success: () => void, error: (err: any) => void) {
      try {
        const {
          data: { tokenInfo }
        } = await userLogin(loginParam);
        console.log(tokenInfo);
        if (tokenInfo) {
          setToken(tokenInfo.token);
          await this.getUserInfo();
          success();
        } else {
          throw "获取token失败";
        }
      } catch (err) {
        error(err);
      }
    }
  }
});
