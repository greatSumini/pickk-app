import {PostItemType} from '.';

export type ItemStore = {
  Cart: CartStore;
  OrderSheet: OrderSheetStore;
};

export type CartStore = {
  [brandId: string]: StoreProduct[];
};

export type OrderSheetStore = {
  [brandId: string]: StoreProduct[];
};

export type StoreProduct = {
  itemId: number;
  productId: number;
  quantity: number;
  postItem: {
    type: PostItemType;
    id: number;
  };
};

export type Options = {
  [optionName: string]: string;
};

export enum StoreType {
  Cart = 'Cart',
  OrderSheet = 'OrderSheet',
}
