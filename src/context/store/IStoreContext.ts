import {
  StoreType,
  CartStore,
  OrderSheetStore,
  SelectedProduct,
  StoreProduct,
} from '@src/types';

export interface IStoreContext {
  state: {
    cart: CartStore;
    orderSheet: OrderSheetStore;
  };
  action: {
    setItem: (
      type: StoreType,
      itemId: number,
      brandId: number,
      produrId: number,
      quantity: number,
      postItem: StoreProduct['postItem'],
    ) => void;
    setItems: (
      type: StoreType,
      items: Array<{brandId: number} & StoreProduct>,
    ) => void;
    getItemList: (type: StoreType) => StoreProduct[];
    removeItem: (
      type: StoreType,
      itemId: number,
      brandId: number,
      productId: number,
    ) => void;
    removeItems: (
      type: StoreType,
      items: Array<
        Pick<StoreProduct, 'itemId' | 'productId'> & {brandId: number}
      >,
    ) => void;
    clear: (type: StoreType) => void;
    orderProducts: (
      items: Array<
        SelectedProduct & {
          postItem: StoreProduct['postItem'];
        }
      >,
    ) => void;
  };
}
