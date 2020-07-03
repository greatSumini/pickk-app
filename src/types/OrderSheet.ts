export type OrderSheet = {
  [brandId: string]: Array<OrderSheetItem>;
};

export type OrderSheetItem = {
  itemId: number;
  color: string;
  size: string;
  options: string[];
  quantity: number;
  reviewerId: number;
};

export type OrderSheetPrice = {
  totalItemPrice: number;
  totalShippingFee: number;
  totalSubscribeDiscountPrice: number;
  paidPoint: number;
  totalPaymentPrice: number;
};

export type OrderSheetReviewers = OrderSheetReviewer[];

export type OrderSheetReviewer = {
  reviewerId: number;
  orderItemId: number;
};

export type RefundAccount = {
  bankName: string;
  number: string;
  holder: string;
};

export type BuyerInfo = {
  name: string;
  phone: string;
  email: string;
};
