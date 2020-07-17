import {readConfig} from '@src/services/Order/config';
import useRequest from './api/useRequest';
import {IOrder} from '@src/interfaces/Order/IOrder';

export const useOrder = (id: number, generateConfig?: any, initialData?: any) =>
  useRequest<IOrder>(generateConfig(readConfig(id), true), {initialData});
