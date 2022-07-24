/**
 * 登录时获取的用户信息model
 */
export interface LoginUserInfoModel {
  password: string;
  username: string;
  authorities: any[];
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  enabled: boolean;
  userId: string;
  nickName: string;
  avatarPath: string;
  deptId: string;
  tokenInfo: TokenInfo;
}

interface TokenInfo {
  token: string;
  userId: string;
  userName: string;
  expired: number;
  authorities: any[];
}

/**
 * 根据token获取的用户信息model
 */
export interface UserInfoTokenModel {
  userId: string;
  permission: string; // 暂未知作用
  deptId: string;
  username: string;
  nickName: string;
  gender: string;
  phone: string;
  email: string;
  avatarName: string;
  avatarPath: string;
  isAdmin: boolean;
  enabled: boolean;
  expireTime: string;
  nonLocked: boolean;
  createBy: string;
  updateBy: string;
  pwdResetTime: string;
  createTime: number;
  updateTime: number;
  userExtend: string;
  roles: string[];
  menus: Menus[];
}

interface Menus {
  menuId: string;
  pid: string;
  icon: string;
  title: string;
  path: string;
  redirect: string;
  component: string;
  children: Menus[];
}

export interface UserInfoModel {
  avatar: string;
  permission: string;
  id: number;
  name: string;
  sex: number;
  email: string;
  real_name?: any;
  home?: any;
  weibo?: any;
  wechat?: any;
  github?: any;
  qq?: any;
  wakatime?: any;
  email_verified_at: string;
  mobile_verified_at?: any;
  created_at: string;
  updated_at: string;
  lock?: any;
  credit1?: any;
  credit2?: any;
  credit3?: any;
  credit4?: any;
  credit5?: any;
  credit6?: any;
  favour_count: number;
  favorite_count: number;
  roles: IRole[];
}

interface IRole {
  id: number;
  name: string;
  title: string;
  guard_name: string;
  created_at: string;
  updated_at: string;
  permissions: IPermission[];
}

interface IPermission {
  id: number;
  name: string;
  title: string;
  module: string;
  guard_name: string;
  created_at: string;
  updated_at: string;
}
