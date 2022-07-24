// export interface BasicGetResult<T> {
//   code: number;
//   message: string;
//   status: string;
//   total?: number;
//   data: T;
// }

export interface BasicGetResult<T> {
  code: number;
  msg: string;
  success: boolean;
  total?: number;
  data: T;
}
