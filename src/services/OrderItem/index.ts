import axios from 'axios';
import {IncomingMessage} from 'http';

import {OrderItemType, ListResponse} from '@src/types';
import {listConfig} from './config';

const list = async (
  req?: IncomingMessage,
): Promise<ListResponse<OrderItemType>> =>
  axios(listConfig(req)).then((res) => {
    return res.data;
  });

const OrderItemService = {
  list,
};

export default OrderItemService;
