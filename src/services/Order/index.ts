import axios from 'axios';
import {IncomingMessage} from 'http';

import {readConfig, cancelConfig, refundConfig} from './config';
import {IOrder} from '@src/interfaces/Order/IOrder';
import {Shipment} from '@src/types';

const read = async (id: number, req?: IncomingMessage): Promise<IOrder> =>
  axios(readConfig(id, req)).then((res) => res.data);

const cancel = async (
  orderItemIds: number[],
  reason: string,
  generateConfig?: any,
  req?: IncomingMessage,
): Promise<void> =>
  axios(
    generateConfig(cancelConfig(orderItemIds, reason, req), true),
  ).then(() => {});

const refund = async (
  orderItemIds: number[],
  shipment: Shipment,
  reason: string,
  generateConfig?: any,
  req?: IncomingMessage,
): Promise<void> =>
  axios(
    generateConfig(refundConfig(orderItemIds, shipment, reason, req), true),
  ).then(() => {});

const OrderService = {
  read,
  cancel,
  refund,
};

export default OrderService;
