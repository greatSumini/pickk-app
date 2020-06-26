import { IItem } from '..';
import { PostItemImage, StyleTag } from '@src/types';

export interface IPostItem {
  id: number;
  followersCount: number;
  itemId: number;
  order: number;
  images: PostItemImage[];
  description?: string;
  shortDescription?: string;
  purchaseUrl?: string;
  score: number;
  styleTag?: StyleTag;
  size?: string;
  isPurchasable: boolean;
  createdAt: string;
  updatedAt: string;
  item: IItem;
}
