import axios from 'axios';
import {mutate} from 'swr';
import {IncomingMessage} from 'http';

import {
  meReadConfig,
  mePartialUpdateConfig,
  meFollowingFeedLooksConfig,
  meFollowingFeedReviewsConfig,
  readConfig,
  followConfig,
  unfollowConfig,
  isFollowingConfig,
  meFollowingFeedItemsConfig,
  mePointsConfig,
  meItemPointsConfig,
} from './config';

import {
  IUser,
  IUserInputDTO,
  IUserReadDTO,
  IReview,
  ILook,
  IItem,
} from '@src/interfaces';
import {ListRequestParams, ListResponse} from '@src/types';
import {IPoint} from '@src/interfaces/User/IPoint';
import {IItemPoints} from '@src/interfaces/User/IItemPoints';

const meRead = async (req?: IncomingMessage): Promise<IUser> =>
  axios(meReadConfig(req))
    .then((res) => {
      return {...res.data, isLoggedIn: true};
    })
    .catch(() => {
      return {isLoggedIn: false};
    });

const mePoints = async (req?: IncomingMessage): Promise<ListResponse<IPoint>> =>
  axios(mePointsConfig(req)).then((res) => {
    return res.data;
  });

const meItemPoints = async (
  req?: IncomingMessage,
): Promise<ListResponse<IItemPoints>> =>
  axios(meItemPointsConfig(req)).then((res) => {
    return res.data;
  });

const mePartialUpdate = async (
  updated: Partial<IUserInputDTO>,
): Promise<IUser> =>
  axios(mePartialUpdateConfig(updated)).then((res) => {
    let userId: number;
    mutate(JSON.stringify(meReadConfig()), async (me) => {
      if (!me) return;
      userId = me.id;
      return {...me, ...updated};
    });
    if (!userId) return;
    mutate(JSON.stringify(readConfig(userId)), async (me) => {
      return {...me, ...updated};
    });
    return res.data;
  });

export const meFollowingFeedItems = async (
  params: ListRequestParams,
): Promise<ListResponse<IItem>> =>
  axios(meFollowingFeedItemsConfig(params)).then((res) => res.data);

export const meFollowingFeedLooks = async (
  params: ListRequestParams,
): Promise<ListResponse<ILook>> =>
  axios(meFollowingFeedLooksConfig(params)).then((res) => res.data);

export const meFollowingFeedReviews = async (
  params: ListRequestParams,
): Promise<ListResponse<IReview>> =>
  axios(meFollowingFeedReviewsConfig(params)).then((res) => res.data);

const read = async (id: number, req?: IncomingMessage): Promise<IUserReadDTO> =>
  axios(readConfig(id, req)).then((res) => res.data);

const follow = async (id: number, req?: IncomingMessage): Promise<void> =>
  axios(followConfig(id, req)).then((res) => {
    mutate(JSON.stringify(isFollowingConfig(id, req)), {
      data: {
        followersCount: res?.data.followersCount,
        isFollowing: true,
      },
    });
  });

const unfollow = async (id: number, req?: IncomingMessage): Promise<void> =>
  axios(unfollowConfig(id, req)).then((res) => {
    mutate(JSON.stringify(isFollowingConfig(id, req)), {
      data: {
        followersCount: res?.data.followersCount - 1,
        isFollowing: false,
      },
    });
  });

const isFollowing = async (
  id: number,
  req?: IncomingMessage,
): Promise<IUserReadDTO> =>
  axios(isFollowingConfig(id, req)).then((res) => res.data);

const UserService = {
  meRead,
  mePartialUpdate,
  meFollowingFeedLooks,
  meFollowingFeedReviews,
  mePoints,
  meItemPoints,
  read,
  follow,
  unfollow,
  isFollowing,
};

export default UserService;
