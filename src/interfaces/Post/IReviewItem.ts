import { IPostItem } from '..';
import { PostItemImage } from '@src/types';

export interface IReviewItem extends IPostItem {
  review: number;
  youtubeStartSeconds?: number;
  youtubeEndSeconds?: number;
}

export type IReviewItemInputDTO = Pick<
  IReviewItem,
  | 'description'
  | 'shortDescription'
  | 'score'
  | 'styleTag'
  | 'size'
  | 'isPurchasable'
  | 'itemId'
  | 'youtubeStartSeconds'
  | 'youtubeEndSeconds'
> & {
  images: Array<Pick<PostItemImage, 'image'> & { id?: number }>;
};
