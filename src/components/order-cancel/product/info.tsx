import React from 'react';

import {OrderItem} from '@src/types';
import OrderCancelProductDescription, {
  OrderCancelProductDescriptionProps,
} from './card/description';
import {rem} from '@src/constants';
import {Space, Image} from '@src/modules/atoms';

export type OrderCancelProductInfoProps = Pick<OrderItem, 'imageUrl'> &
  OrderCancelProductDescriptionProps;

function OrderCancelProductInfo(props: OrderCancelProductInfoProps) {
  return (
    <>
      <Image
        src={props.imageUrl}
        size={50}
        imgWidth={rem(50)}
        imgHeight={rem(60.6)}
      />
      <Space direction='ROW' size={8} />
      <OrderCancelProductDescription
        {...(props as OrderCancelProductDescriptionProps)}
      />
    </>
  );
}

export default React.memo(OrderCancelProductInfo);
