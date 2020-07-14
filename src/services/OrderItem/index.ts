import axios from 'axios';
import {IncomingMessage} from 'http';

import {OrderItemType, ListResponse} from '@src/types';
import {listConfig, confirmConfig} from './config';

const list = async (
  req?: IncomingMessage,
): Promise<ListResponse<OrderItemType>> =>
  axios(listConfig(req)).then((res) => {
    return res.data;
  });

const confirm = async (id: number, req?: IncomingMessage): Promise<void> =>
  axios(confirmConfig(id, req))
    .then((res) => res.data)
    .catch((err) => console.log(err));

const OrderItemService = {
  list,
  confirm,
};

export default OrderItemService;
