import { IPostItem } from '..';
import { PostItemImage } from '@src/types';

export interface ILookItem extends IPostItem {
  look: number;
}

export type ILookItemInputDTO = Pick<
  ILookItem,
  | 'description'
  | 'shortDescription'
  | 'score'
  | 'styleTag'
  | 'size'
  | 'isPurchasable'
  | 'itemId'
> & {
  images: Array<Pick<PostItemImage, 'image'> & { id?: number }>;
};
