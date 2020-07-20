import useRequest from './api/useRequest';
import {OrderItemType, ExchangePolicy} from '@src/types';
import {readConfig, exchangePolicyConfig} from '@src/services/OrderItem/config';

export const useOrderItem = (
  id: number,
  generateConfig?: any,
  initialData?: any,
) =>
  useRequest<OrderItemType>(generateConfig(readConfig(id), true), {
    initialData,
  });

export const useExchangePolicy = (
  id: number,
  generateConfig?: any,
  initialData?: any,
) =>
  useRequest<ExchangePolicy>(generateConfig(exchangePolicyConfig(id), true), {
    initialData,
  });
