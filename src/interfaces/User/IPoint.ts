import { PointSign, PointType } from '@src/types';

export interface IPoint {
  id: number;
  sign: PointSign;
  type: PointType;
  amount: number;
  reason: string;
  isUsable: boolean;
  expiredAt: string;
  createdAt: string;
  updatedAt: string;
}
