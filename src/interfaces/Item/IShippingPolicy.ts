import { IBrand } from '..';

export interface IShippingPolicy {
  id: number;
  defaultFee: number;
  minimumForFree?: number;
  description?: string;
  createdAt: string;
  updatedAt: string;
  brand: IBrand;
}
