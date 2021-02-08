import {
  ItemOption,
  ListResponse,
  ListRequestParams,
  ItemDiscountsInfo,
} from '@src/types';
import {ItemListRequestParams, IItem, ILook, IReview} from '@src/interfaces';

import useRequest from './api/useRequest';
import {
  isFollowingConfig,
  optionsConfig,
  listConfig,
  looksConfig,
  reviewsConfig,
  discountsConfig,
  postsConfig,
  readConfig,
} from '@src/services/Item/config';

export const useItemIsFollowing = (id: number, initialData?: any) =>
  useRequest<{isFollowing: boolean; followersCount: number}>(
    isFollowingConfig(id),
    {initialData},
  );

export const useItemOptions = (id: number, initialData?: any) =>
  useRequest<ItemOption>(optionsConfig(id), {initialData});

export const useItemList = (params: ItemListRequestParams, initialData?: any) =>
  useRequest<ListResponse<IItem>>(listConfig(params), {initialData});

export const useItem = (id: number, initialData?: any) =>
  useRequest<IItem>(readConfig(id), {initialData});

export const useItemLookList = (
  params: ListRequestParams & {o?: 'popular'},
  id,
  initialData?: any,
) => useRequest<ListResponse<ILook>>(looksConfig(params, id), {initialData});

export const useItemReviewList = (
  params: ListRequestParams & {o?: 'popular'},
  id,
  initialData?: any,
) =>
  useRequest<ListResponse<IReview>>(reviewsConfig(params, id), {initialData});

export const useItemPostList = (
  params: ListRequestParams & {o?: 'popular'},
  id,
  initialData?: any,
) =>
  useRequest<ListResponse<IReview | ILook>>(postsConfig(params, id), {
    initialData,
  });

export const useItemDiscountInfo = (id, initialData?: any) =>
  useRequest<ItemDiscountsInfo>(discountsConfig(id), {initialData});
