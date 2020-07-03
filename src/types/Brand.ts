// legacy end

export type ExchangePolicy = {
  fee: number;
  description: string;
  name: string;
  phone: string;
  bankAccount: string;
  courier: string;
  address: string;
  csNumber: string;
  csEmail: string;
  transRequired: boolean;
  courierUrl: string;
  courierContactNumber: string;
};

export type ShippingPolicy = {
  id: number;
  defaultFee: number;
  minimumForFree: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  brand: number;
};
