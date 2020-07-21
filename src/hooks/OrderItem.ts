import useRequest from './api/useRequest';
import {
  OrderItemType,
  ExchangePolicy,
  OrderBrand,
  OrderState,
} from '@src/types';
import {
  readConfig,
  exchangePolicyConfig,
  getPackageConfig,
} from '@src/services/OrderItem/config';

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

export const useOrderRefund = (
  id: number,
  generateConfig?: any,
  initialData?: any,
) => {
  const {data, error} = useRequest<OrderBrand>(
    generateConfig(getPackageConfig(id), true),
    {initialData},
  );
  if (!data) return {data, error};

  const newOrderItems = data.orderItems.filter(
    (item) =>
      item.claimStatus === null && item.status !== OrderState.PurchaseConfirmed,
  );

  return {
    data: {...data, orderItems: newOrderItems},
    error,
  };
};
