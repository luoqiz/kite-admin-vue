// export interface BasicResult<T> {
//   code: number;
//   message: string;
//   status: string;
//   total?: number;
//   data: T;
// }

export interface BasicResult<T> {
  code: number;
  msg: string;
  success: boolean;
  total?: number;
  data: T;
}
