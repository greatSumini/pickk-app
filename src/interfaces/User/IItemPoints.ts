import { PostType } from '@src/types';
import { IItem } from '..';
import { IPoint } from './IPoint';

export interface IItemPoints {
  id: number;
  type: PostType;
  item: Pick<IItem, 'id' | 'brand' | 'name' | 'imageUrl'>;
  title: string;
  viewCount: number;
  points: IPoint[];
  createdAt: string;
  revenue: number;
}
