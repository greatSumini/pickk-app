export type ItemStore = {
  Cart: CartStore;
  OrderSheet: OrderSheetStore;
};

export type CartStore = {
  [brandId: string]: Array<StoreProduct>;
};

export type OrderSheetStore = {
  [brandId: string]: Array<StoreProduct>;
};

export type StoreProduct = {
  itemId: number;
  productId: number;
  quantity: number;
  reviewerId: number;
};

export type Options = {
  [optionName: string]: string;
};

export type storeType = 'Cart' | 'OrderSheet';
