import {IncomingMessage} from 'http';
import {baseConfig} from '../Api';

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
