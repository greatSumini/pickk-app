import { IComment, IUserReadDTO } from '@src/interfaces';

export enum CommentPostType {
  Review = 'REVIEW',
  Look = 'LOOK'
}

export type Reply = Pick<
  IComment,
  'id' | 'user' | 'content' | 'createdAt' | 'updatedAt'
> & {
  mentionedUser: IUserReadDTO;
};
