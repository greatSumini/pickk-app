import { Options } from './ItemStore';

export type Cart = CartBrand[];

export type CartBrand = {
  brandName: string;
  brandImageUrl: string;
  shippingPolicy: {
    defaultFee: number;
    minimumForFree: number;
  };
  cartItems: CartItem[];
};

export type CartItem = {
  itemId: number;
  productId: number;
  productName: string;
  name: string;
  options: Options;
  salePrice: number;
  quantity: number;
  imageUrl: string;
  isSubsDiscountable: boolean;
  discountRate: number;
  reviewerId: number;
};

export type CartPrice = {
  brand: {
    [brandId: string]: {
      totalItemPrice: number;
      shippingFee: number;
      subscribeDiscountAmount: number;
    };
  };
  totalItemPrice: number;
  totalShippingFee: number;
  totalSubscribeDiscountAmount: number;
  totalPaidAmount: number;
};
