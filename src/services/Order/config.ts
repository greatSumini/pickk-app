import {IncomingMessage} from 'http';
import {baseConfig} from '../Api';

export const readConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).get(`/orders/${id}/`);
