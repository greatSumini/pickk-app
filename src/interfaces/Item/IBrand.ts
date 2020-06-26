import { ExchangePolicy, ShippingPolicy } from '@src/types';

export interface IBrand {
  id: number;
  nameKor: string;
  nameEng?: string;
  isPartner: true;
  profileImageUrl: string;
  bannerImageUrl: string;
  siteUrl?: string;
  description?: string;
  defaultDiscountRate: number;
  maxDiscountRate?: number;
  minDiscountRate?: number;
  csNumber?: string;
  csEmail?: string;
  createdAt: string;
  updatedAt: string;
  exchangePolicy: ExchangePolicy;
  shippingPolicy: ShippingPolicy;
}
