import { IncomingMessage } from 'http';

import { baseConfig } from '../Api';
import {
  IReviewInputDTO,
  ICommentInputDTO,
  IReviewItemInputDTO
} from '@src/interfaces';
import { ListRequestParams } from '@src/types';

export const listConfig = (params: ListRequestParams & { userId?: number }) =>
  baseConfig().get('/reviews/', { params });

export const createConfig = (
  reviewInputDTO: IReviewInputDTO,
  req?: IncomingMessage
) => baseConfig(true, req).post('/reviews/', reviewInputDTO);

export const readConfig = (id: number) =>
  baseConfig(true).get(`/reviews/${id}/`);

export const partialUpdateConfig = (
  id: number,
  updated: Partial<IReviewInputDTO>,
  req?: IncomingMessage
) => baseConfig(true, req).patch(`/reviews/${id}/`, updated);

export const deleteConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).delete(`/reviews/${id}/`);

export const followConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).post(`/reviews/${id}/follow/`);

export const isFollowingConfig = (id: number, req?: IncomingMessage) =>
  !!id ? baseConfig(true, req).get(`/reviews/${id}/is_following/`) : null;

export const unfollowConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).post(`/reviews/${id}/unfollow/`);

export const commentsListConfig = (
  params: ListRequestParams,
  reviewPk: number
) => baseConfig().get(`/reviews/${reviewPk}/comments/`, { params });

export const commentsCreateConfig = (
  reviewPk: number,
  commentInputDTO: ICommentInputDTO,
  req?: IncomingMessage
) =>
  baseConfig(true, req).post(`/reviews/${reviewPk}/comments/`, commentInputDTO);

export const reviewItemsListConfig = (
  reviewPk: number,
  params: ListRequestParams
) => baseConfig().get(`/reviews/${reviewPk}/review_items/`, { params });

export const reviewItemsCreateConfig = (
  reviewPk: number,
  reviewItemInputDTO: Omit<IReviewItemInputDTO, 'images'>,
  req?: IncomingMessage
) =>
  baseConfig(true, req).post(
    `/reviews/${reviewPk}/review_items/`,
    reviewItemInputDTO
  );
