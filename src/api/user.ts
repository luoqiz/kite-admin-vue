import { BasicGetResult } from "#/resultType";
import { LoginUserInfoModel, UserInfoModel, UserInfoTokenModel } from "@/model/user";
import { http } from "@/utils/http";

enum API {
  FETCH_USER_INFO = "/user/info",
  FETCH_EDITOR_INFO = "/user/editor",
  FETCH_ROUTER_INFO = "/user/route",
  USER_LOGIN = "/user/login"
}

export interface ILoginForm {
  account: string;
  password: string;
}
/**
 *
 * @description 获取用户信息（权限为管理员）
 */
export const fetchAdminInfo = () => {
  return new Promise<BasicGetResult<UserInfoModel>>(async (resolve, reject) => {
    try {
      const res = await http.get<{}, BasicGetResult<UserInfoModel>>(API.FETCH_USER_INFO);
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 *
 * @description 获取用户信息（权限为管理员）
 */
export const fetchUserInfoByToken = () => {
  return new Promise<BasicGetResult<UserInfoTokenModel>>(async (resolve, reject) => {
    try {
      const res = await http.get<{}, BasicGetResult<UserInfoTokenModel>>(API.FETCH_USER_INFO);
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 *
 * @description 获取用户信息（权限为普通）
 */
export const fetchEditorInfo = () => {
  return new Promise<BasicGetResult<UserInfoModel>>(async (resolve, reject) => {
    try {
      const res = await http.get<{}, BasicGetResult<UserInfoModel>>(API.FETCH_EDITOR_INFO);
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 *
 * @description 登录
 */
export const userLogin = (data: ILoginForm) => {
  return new Promise<BasicGetResult<LoginUserInfoModel>>(async (resolve, reject) => {
    try {
      const res = await http.post<{}, BasicGetResult<LoginUserInfoModel>>(API.USER_LOGIN, {
        data: {
          username: data.account,
          password: data.password
        }
      });
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};
