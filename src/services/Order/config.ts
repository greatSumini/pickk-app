import {IncomingMessage} from 'http';
import {baseConfig} from '../Api';
import {Shipment} from '@src/types';

export const readConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).get(`/orders/${id}/`);

export const cancelConfig = (
  orderItemIds: number[],
  reason: string,
  req?: IncomingMessage,
) =>
  baseConfig(true, req).post('/cancel/', {
    orderItemIds,
    reason,
  });

export const refundConfig = (
  orderItemIds: number[],
  shipment: Shipment,
  reason: string,
  req?: IncomingMessage,
) =>
  baseConfig(true, req).post('/refund/', {
    orderItemIds,
    shipment,
    reason,
  });
