import { StoreProduct } from './ItemStore';

export type SelectedProduct = Pick<
  StoreProduct,
  'itemId' | 'productId' | 'quantity'
>;
