import { IPost } from '..';
import { ThumbnailType } from '@src/types';
import { IReviewItem, IReviewItemInputDTO } from './IReviewItem';

export interface IReview extends IPost {
  reviewItems: Omit<IReviewItem, 'review'>[];
  thumbnailType: ThumbnailType;
  youtubeVideoId?: string;
}

export type IReviewInputDTO = Pick<
  IReview,
  'title' | 'thumbnailType' | 'isVisible'
> & {
  reviewItems: IReviewItemInputDTO[];
  thumbnail?: string;
  content?: string;
  youtubeVideoId?: string;
};
