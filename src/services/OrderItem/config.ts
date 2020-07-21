import {IncomingMessage} from 'http';
import {baseConfig} from '../Api';
import {Shipment} from '@src/types';

export const listConfig = (req?: IncomingMessage) =>
  baseConfig(true, req).get('/order_items/');

export const confirmConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).post(`/order_items/${id}/confirm/`);

export const exchangeConfig = (
  id: number,
  changeTo: number,
  shipment: Shipment,
  reason: string,
  req?: IncomingMessage,
) =>
  baseConfig(true, req).post(`/order_items/${id}/exchange/`, {
    changeTo,
    shipment,
    reason,
  });

export const readConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).get(`/order_items/${id}/`);

export const exchangePolicyConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).get(`/order_items/${id}/exchange_policy/`);

export const getPackageConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).get(`/order_items/${id}/package/`);
