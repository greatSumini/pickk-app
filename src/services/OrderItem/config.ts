import {IncomingMessage} from 'http';
import {baseConfig} from '../Api';

export const listConfig = (req?: IncomingMessage) =>
  baseConfig(true, req).get('/order_items/');
