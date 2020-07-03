import { OrderState, ClaimStatus } from './Order';

export type OrderItemType = {
  id: number;
  orderId: number;
  order: string;
  itemId: number;
  imageUrl: string;
  name: string;
  merchantUid: string;
  brandName: string;
  brandImageUrl: string;
  productId: number;
  productName: string;
  status: OrderState;
  claimStatus: ClaimStatus;
  paidAmount: number;
  quantity: number;
  createdAt: string;
  paidAt: string;
  placedAt: string;
  shippedAt: string;
  deliveredAt: string;
  cancelledAt: string;

  salePrice: number;
  discountAmount: number;
  isSubsDiscountable: boolean;
  subsDiscount: number;
  discountRate: number;
  isRefundable: boolean;
  isExchangeable: boolean;
};

export type OrderItemList = {
  count: number;
  next: string;
  previous: string;
  results: OrderItemType[];
};

export type Shipment = {
  courier: string;
  trackingCode: string;
};

export type PackagePrice = {
  shippingFee: number;
  totalPaidAmount: number;
  claimedAmount: number;
};

export enum OrderItemAction {
  Cancel = '구매 취소',
  Inquire = '문의 하기',
  Delivery = '배송 조회',
  Confirm = '구매 확정',
  Refund = '반품 신청',
  Exchange = '교환 신청'
}
