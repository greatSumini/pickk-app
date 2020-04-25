import {ItemInfo, ItemInfoInput} from './ItemInfo';
import {UserInfo} from './UserInfo';

export type ItemReview = {
  id: number;
  postId: number;
  recommendReason: RecommendReason;
  shortReview: string;
  review: string;
  score: number;
  images: ItemReviewImg[];
  itemInfo: ItemInfo;
  userInfo: UserInfo;
};

export enum RecommendReason {
  Design = 'DESIGN',
  Price = 'PRICE',
  Texture = 'TEXTURE',
  Individuality = 'INDIVIDUALITY',
}

export type ItemReviewImg = {
  id: number;
  reviewId: number;
  imageUrl: string;
};

export type ItemReviewInput = {
  reviewId?: number;
  recommendReason: RecommendReason;
  shortReview: string;
  review: string;
  score: number;
  item: ItemInfoInput;
  images: ItemReviewImgInput[];
};

export type ItemReviewImgInput = {
  id: number;
  imageUrl: string;
};
