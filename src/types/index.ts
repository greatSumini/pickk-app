export * from './OrderSheet';
export * from './Order';
export * from './Item';
export * from './Api';
export * from './OrderItem';
export * from './ItemStore';
export * from './Payment';
export * from './Cart';
export * from './ShopDrawer';
export * from './Question';
export * from './Brand';
export * from './User';
export * from './Auth';
export * from './ItemType';
export * from './Post';
export * from './Comment';

export type RequiredLiteralKeys<T> = {
  [K in keyof T]-?: string extends K
    ? never
    : number extends K
    ? never
    : {} extends Pick<T, K>
    ? never
    : K;
} extends { [_ in keyof T]-?: infer U }
  ? U extends keyof T
    ? U
    : never
  : never;

export type OptionalLiteralKeys<T> = {
  [K in keyof T]-?: string extends K
    ? never
    : number extends K
    ? never
    : {} extends Pick<T, K>
    ? K
    : never;
} extends { [_ in keyof T]-?: infer U }
  ? U extends keyof T
    ? U
    : never
  : never;

export type IndexKeys<T> = string extends keyof T
  ? string
  : number extends keyof T
  ? number
  : never;

export type ListRequestParams = {
  limit: number;
  offset: number;
};

export type ListResponse<T> = {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
};
