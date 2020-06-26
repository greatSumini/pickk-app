import { IUserReadDTO } from '../User/IUser';
import { Reply } from '@src/types';

export interface IComment {
  id: number;
  user: IUserReadDTO;
  replies: Reply[];
  mentionedUser?: IUserReadDTO;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export type ICommentInputDTO = Pick<IComment, 'content'> & {
  parentId: number;
  mentionedUserId: number;
};
