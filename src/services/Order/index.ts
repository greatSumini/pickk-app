import axios from 'axios';
import { IncomingMessage } from 'http';

import { readConfig } from './config';
import { IOrder } from '@src/interfaces/Order/IOrder';

const read = async (id: number, req?: IncomingMessage): Promise<IOrder> =>
  axios(readConfig(id, req)).then(res => {
    return res.data;
  });

const OrderService = {
  read
};

export default OrderService;
