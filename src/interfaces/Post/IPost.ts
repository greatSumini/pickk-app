import { IUserReadDTO } from '../User/IUser';

export interface IPost {
  id: number;
  viewCount: number;
  followersCount: number;
  commentsCount: number;
  title: string;
  content?: string;
  thumbnail?: string;
  isVisible: boolean;
  createdAt: string;
  updatedAt: string;
  user: IUserReadDTO;
}
