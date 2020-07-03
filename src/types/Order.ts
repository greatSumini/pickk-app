import { OrderItemType } from './OrderItem';

export type Order = OrderBrand[];

export type OrderResponse = {
  id: number;
  merchantUid: string;
  createdAt: string;
  order: OrderBrand[];
  address: Address;
  payment: OrderPayment;
  status: string;
  vbank: Vbank;
};

export type OrderBrand = {
  brandName: string;
  brandImageUrl: string;
  shippingFee: number;
  shippingPolicy: {
    defaultFee: number;
    minimumForFree: number;
  };
  orderItems: OrderItemType[];
};

export type Address = {
  name: string;
  phone: string;
  postCode: string;
  baseAddress: string;
  detailAddress: string;
  message?: string;
};

export type OrderPayment = {
  totalItemPrice: number;
  totalShippingFee: number;
  totalSubscribeDiscountAmount: number;
  usedPoint: number;
  totalPaidAmount: number;
};

export enum OrderState {
  Pending = '결제 대기',
  PaymentFinished = '결제 완료',
  ShipReady = '발송 준비',
  ShipFinished = '발송 완료',
  DeliveryFinished = '배송 완료',
  CancelFinished = '취소 완료',
  OrderFail = '주문 실패',
  PurchaseConfirmed = '구매 확정'
}

export enum OrderAction {
  Cancel = '주문 취소',
  Delivery = '배송 조회',
  Confirm = '구매 확정',
  Refund = '환불 신청',
  Exchange = '교환 신청',
  Question = '문의하기'
}

export type Vbank = {
  bankName: string;
  number: string;
  holder: string;
  dueDate: string;
};

export type OrderItem = OrderItemType;

export enum ClaimStatus {
  RefundReqested = '반품 요청',
  RefundFinished = '반품 완료',
  ExchangeRequested = '교환 요청',
  ExchangeFinished = '교환 완료',
  CancelRequested = '취소 요청',
  CancelFinished = '취소 완료'
}
