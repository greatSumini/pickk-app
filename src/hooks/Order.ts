import {readConfig} from '@src/services/Order/config';
import useRequest from './api/useRequest';
import {IOrder} from '@src/interfaces/Order/IOrder';

import {OrderState} from '@src/types';

export const useOrder = (id: number, generateConfig?: any, initialData?: any) =>
  useRequest<IOrder>(generateConfig(readConfig(id), true), {initialData});

export const useOrderCancel = (
  id: number,
  generateConfig?: any,
  initialData?: any,
) => {
  const {data, error} = useRequest<IOrder>(
    generateConfig(readConfig(id), true),
    {initialData},
  );
  if (!data) {
    return {
      data,
      error,
    };
  }

  const newOrder = data.order
    .filter(
      (brand) =>
        brand.orderItems.filter(
          (item) =>
            item.status === OrderState.PaymentFinished ||
            item.status === OrderState.Pending,
        ).length !== 0,
    )
    .map((brand) => {
      return {
        ...brand,
        orderItems: brand.orderItems.filter(
          (item) =>
            item.status === OrderState.PaymentFinished ||
            item.status === OrderState.Pending,
        ),
      };
    });

  return {
    data: {...data, order: newOrder},
    error,
  };
};
