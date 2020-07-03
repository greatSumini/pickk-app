import axios from 'axios';
import { IncomingMessage } from 'http';
import { mutate } from 'swr';

import {
  listConfig,
  createConfig,
  readConfig,
  partialUpdateConfig,
  deleteConfig,
  followConfig,
  unfollowConfig,
  commentsListConfig,
  commentsCreateConfig,
  reviewItemsListConfig,
  reviewItemsCreateConfig,
  isFollowingConfig
} from './config';
import {
  IReview,
  IReviewInputDTO,
  IComment,
  ICommentInputDTO,
  IReviewItemInputDTO,
  IReviewItem
} from '@src/interfaces';
import { ListRequestParams, ListResponse } from '@src/types';

export const list = async (
  params: ListRequestParams & { userId?: number; o?:'popular' }
): Promise<ListResponse<IReview>> =>
  axios(listConfig(params)).then(res => res.data);

export const create = async (
  reviewInputDTO: IReviewInputDTO,
  req?: IncomingMessage
): Promise<IReview> =>
  axios(createConfig(reviewInputDTO, req)).then(res => {
    mutate(JSON.stringify(listConfig({offset:0, limit:20})));
    return res.data;
  });

export const read = async (
  id: number,
): Promise<IReview> => axios(readConfig(id)).then(res => res.data);

export const partialUpdate = async (
    id: number,
    updated: Partial<IReviewInputDTO>,
  req?: IncomingMessage
): Promise<IReview> =>
  axios(partialUpdateConfig(id, updated, req)).then(res => {
    mutate(JSON.stringify(readConfig(id)), async (review: IReview) => {
      return { ...review, ...updated };
    });
    return res.data;
  });

export const deleteReview = async (
  id: number,
  req?: IncomingMessage
): Promise<void> => axios(deleteConfig(id, req)).then();

export const follow = async (
  id: number,
  req?: IncomingMessage
): Promise<void> => {
  axios(followConfig(id, req)).then(res => {
    mutate(JSON.stringify(isFollowingConfig(id, req)),  {
      data: {
        followersCount: res?.data.followersCount,
        isFollowing: true
      }
    });
  });
};

export const isFollowing = async (
  id: number,
  req?: IncomingMessage
): Promise<{ isFollowing: boolean }> =>
  axios(isFollowingConfig(id, req)).then(res => res.data);

export const unfollow = async (
  id: number,
  req?: IncomingMessage
): Promise<void> =>
  axios(unfollowConfig(id, req)).then(res =>
    mutate(JSON.stringify(isFollowingConfig(id, req)),{
      data: {
        followersCount: res?.data.followersCount,
        isFollowing: false
      }
    })
  );

export const commentsList = async (
  reviewPk: number,
  params: ListRequestParams
): Promise<ListResponse<IComment>> =>
  axios(commentsListConfig( params, reviewPk)).then(res => res.data);

export const commentsCreate = async (
  reviewPk: number,
  commentInputDTO: ICommentInputDTO,
  req?: IncomingMessage
): Promise<IComment> =>
  axios(commentsCreateConfig(reviewPk, commentInputDTO, req)).then(
    res => res.data
  );

export const reviewItemsList = async (
  reviewPk: number,
  params: ListRequestParams
): Promise<IReviewItem> =>
  axios(reviewItemsListConfig(reviewPk, params)).then(res => res.data);

export const reviewItemsCreate = async (
  reviewPk: number,
  reviewItemInputDTO: Omit<IReviewItemInputDTO, 'images'>,
  req?: IncomingMessage
): Promise<IReviewItem> =>
  axios(reviewItemsCreateConfig(reviewPk, reviewItemInputDTO, req)).then(
    res => res.data
  );

const ReviewService = {
  list,
  create,
  read,
  partialUpdate,
  deleteReview,
  follow,
  unfollow,
  commentsList,
  commentsCreate,
  reviewItemsList,
  reviewItemsCreate
};

export default ReviewService;
