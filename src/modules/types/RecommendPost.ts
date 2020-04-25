import {ItemReview, ItemReviewInput} from './ItemReview';

export type RecommendPost = {
  accountId: number;
  name: string;
  profileImageUrl: string;
  pickCount: number;
  simpleItemList: SimpleItem[];
  commentCount: number;
  id: number;
  title: string;
  titleType: RecommendTitleType;
  titleImageUrl: string;
  titleYoutubeUrl: string;
  time: string;
  viewCount: number;
  content: string;
  reviews: ItemReview[];
  postType: RecommendPostType;
  styleType: StyleType;
  saleEndDate: Date;
};

export type SimpleItem = {
  brandKor: string;
  brandEng: string;
  imageUrl: string;
};

export enum RecommendTitleType {
  Youtube = 'YOUTUBE',
  Image = 'IMAGE',
}

export enum RecommendPostType {
  Review = 'REVIEW',
  Look = 'LOOK',
}

export enum StyleType {
  SimpleBasic = 'SIMPLEBASIC',
  Modern = 'MODERN',
  Minimal = 'MINIMAL',
  Casual = 'CASUAL',
  Street = 'STREET',
  Amekaji = 'AMEKAJI',
  None = 'NONE',
}

export type RecommendPostInput = {
  accountId: number;
  title: string;
  content: string;
  postType: RecommendPostType;
  titleType: RecommendTitleType;
  titleImageUrl: string;
  titleYoutubeUrl: string;
  reviews: ItemReviewInput[];
};
