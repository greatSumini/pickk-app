import axios from 'axios';
import {IncomingMessage} from 'http';

import {
  OrderItemType,
  ListResponse,
  Shipment,
  ExchangePolicy,
  OrderBrand,
} from '@src/types';
import {
  listConfig,
  confirmConfig,
  exchangeConfig,
  readConfig,
  exchangePolicyConfig,
  getPackageConfig,
} from './config';

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

const exchange = async (
  id: number,
  changeTo: number,
  shipment: Shipment,
  reason: string,
  generateConfig?: any,
  req?: IncomingMessage,
): Promise<void> =>
  axios(
    generateConfig(exchangeConfig(id, changeTo, shipment, reason, req), true),
  ).then(() => {});

const read = async (
  id: number,
  req?: IncomingMessage,
): Promise<OrderItemType> => axios(readConfig(id, req)).then((res) => res.data);

const exchangePolicy = async (
  id: number,
  req?: IncomingMessage,
): Promise<ExchangePolicy> =>
  axios(exchangePolicyConfig(id, req)).then((res) => res.data);

const getPackage = async (
  id: number,
  req?: IncomingMessage,
): Promise<OrderBrand> =>
  axios(getPackageConfig(id, req)).then((res) => res.data);

const OrderItemService = {
  list,
  confirm,
  exchange,
  read,
  exchangePolicy,
  getPackage,
};

export default OrderItemService;
