import { IPost } from '..';
import { ILookItem, ILookItemInputDTO } from './ILookItem';

export interface ILook extends IPost {
  lookItems: Omit<ILookItem, 'review'>[];
}

export type ILookInputDTO = Pick<
  ILook,
  'title' | 'isVisible' | 'thumbnail' | 'content'
> & {
  lookItems: ILookItemInputDTO[];
};
