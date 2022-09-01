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
  data: T;
}

export interface PageBasicResult<T> extends BasicResult {
  data: PageEntity<T>;
}

interface PageEntity<T> {
  total?: number;
  data: T;
}
