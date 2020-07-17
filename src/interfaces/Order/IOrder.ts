import {
  ShippingPolicy,
  Address,
  OrderState as OrderStatus,
  Vbank,
  OrderPayment,
  OrderItemType,
} from '@src/types';

export interface IOrder {
  id: number;
  merchantUid: string;
  createdAt: string;
  order: Array<{
    brandName: string;
    brandImageUrl: string;
    shippingFee: number;
    shippingPolicy: ShippingPolicy;
    orderItems: OrderItemType[];
  }>;
  address: Address;
  payment: OrderPayment;
  status: OrderStatus;
  vbank: Vbank;
}
