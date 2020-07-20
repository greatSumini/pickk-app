import axios from 'axios';
import {IncomingMessage} from 'http';

import {readConfig, cancelConfig} from './config';
import {IOrder} from '@src/interfaces/Order/IOrder';

const read = async (id: number, req?: IncomingMessage): Promise<IOrder> =>
  axios(readConfig(id, req)).then((res) => res.data);

const cancel = async (
  orderItemIds: number[],
  reason: string,
  req?: IncomingMessage,
): Promise<void> =>
  axios(cancelConfig(orderItemIds, reason, req)).then(() => {});

const OrderService = {
  read,
  cancel,
};

export default OrderService;
