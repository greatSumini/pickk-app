import axios from 'axios';
import {mutate} from 'swr';
import {IncomingMessage} from 'http';

import {
  IItem,
  ItemListRequestParams,
  IShippingPolicy,
  IItemCustomInputDTO,
  ILook,
  IReview,
} from '@src/interfaces';
import {
  ListResponse,
  ItemReviewRequest,
  ItemOption,
  Digest,
  ListRequestParams,
  PostType,
} from '@src/types';
import {
  listConfig,
  readConfig,
  followConfig,
  isFollowingConfig,
  unfollowConfig,
  shippingPolicyConfig,
  optionsConfig,
  createConfig,
  reviewsConfig,
  digestsConfig,
  looksConfig,
  createCustomConfig,
  discountsConfig,
  postsConfig,
} from './config';

export const list = async (
  params: ItemListRequestParams,
): Promise<ListResponse<IItem>> =>
  axios(listConfig(params)).then((res) => res.data);

export const create = async (url: string): Promise<IItem> =>
  axios(createConfig(url)).then((res) => res.data);

export const createCustom = async (
  itemCustomInputDTO: IItemCustomInputDTO,
): Promise<IItem> =>
  axios(createCustomConfig(itemCustomInputDTO)).then((res) => res.data);

export const read = async (id: number): Promise<IItem> =>
  axios(readConfig(id)).then((res) => res.data);

export const options = async (id: number): Promise<ItemOption> =>
  axios(optionsConfig(id)).then((res) => res.data);

export const follow = async (
  id: number,
  req?: IncomingMessage,
): Promise<void> =>
  axios(followConfig(id, req)).then((res) => {
    mutate(JSON.stringify(isFollowingConfig(id, req)), {
      data: {
        followersCount: res.data.followersCount,
        isFollowing: true,
      },
    });
  });

export const isFollowing = async (
  id: number,
  req?: IncomingMessage,
): Promise<{isFollowing: boolean}> =>
  axios(isFollowingConfig(id, req)).then((res) => res.data);

export const unfollow = async (
  id: number,
  req?: IncomingMessage,
): Promise<void> =>
  axios(unfollowConfig(id, req)).then((res) => {
    mutate(JSON.stringify(isFollowingConfig(id, req)), {
      data: {
        followersCount: res?.data.followersCount,
        isFollowing: false,
      },
    });
  });

export const digests = async (
  params: ListRequestParams & {o?: 'popular'},
  id: number,
): Promise<ListResponse<Digest>> =>
  axios(digestsConfig(params, id)).then((res) => res.data);

export const looks = async (
  params: ListRequestParams & {o?: 'popular'},
  id: number,
): Promise<ListResponse<ILook>> =>
  axios(looksConfig(params, id)).then((res) => res.data);

export const reviews = async (
  params: ListRequestParams & {o?: 'popular'},
  id: number,
): Promise<ListResponse<IReview>> =>
  axios(reviewsConfig(params, id)).then((res) => res.data);

export const posts = async (
  params: ListRequestParams & {o?: 'popular'},
  id: number,
): Promise<ListResponse<IReview | ILook>> =>
  axios(postsConfig(params, id)).then((res) => res.data);

export const shippingPolicy = async (id: number): Promise<IShippingPolicy> =>
  axios(shippingPolicyConfig(id)).then((res) => res.data);

export const discounts = async (id: number) =>
  axios(discountsConfig(id)).then((res) => res.data);

const ItemService = {
  list,
  create,
  createCustom,
  read,
  follow,
  isFollowing,
  unfollow,
  digests,
  looks,
  reviews,
  shippingPolicy,
};

export default ItemService;
