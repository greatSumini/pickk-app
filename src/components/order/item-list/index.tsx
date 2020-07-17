import React, {Fragment} from 'react';

import OrderBrandHeader, {OrderBrandHeaderProps} from './brand-header';
import OrderListItem from '@src/components/order-list/item';
import {Labeled, Line} from '@src/modules/atoms';

import {IOrder} from '@src/interfaces/Order/IOrder';

export type OrderScreenItemListProps = Pick<IOrder, 'order'>;

export default function OrderScreenItemList({order}: OrderScreenItemListProps) {
  return (
    <>
      {order.map((orderBrand, index) => {
        const {brand, orderItems, shippingFee} = orderBrand;
        return (
          <Fragment key={brand?.nameKor}>
            <OrderBrandHeader {...(brand as OrderBrandHeaderProps)} />
            {orderItems.map((orderItem) => {
              return (
                <Fragment key={orderItem.id}>
                  <OrderListItem {...orderItem} hasHeader={false} />
                  {orderItems.length - 1 !== index && <Line />}
                </Fragment>
              );
            })}
            <Line />
            <Labeled label='배송비' text={`${shippingFee}원`} hasMargin />
          </Fragment>
        );
      })}
    </>
  );
}
