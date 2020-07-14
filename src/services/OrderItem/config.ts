import {IncomingMessage} from 'http';
import {baseConfig} from '../Api';

export const listConfig = (req?: IncomingMessage) =>
  baseConfig(true, req).get('/order_items/');

export const confirmConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).post(`/order_items/${id}/confirm/`);
