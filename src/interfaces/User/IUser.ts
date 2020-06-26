import { ProviderType } from '@src/types/User';

export interface IUser {
  id: number;
  profileImageUrl: string;
  providerType: ProviderType;
  providerId: string;
  age?: number;
  height?: number;
  weight?: number;
  phoneNum?: string;
  channelTitleImageUrl?: string;
  channelDescription?: string;
  channelSnsUrl?: string;
  followersCount: number;
  totalViewCount: number;
  email: string;
  name: string;
  isActive: true;
  lastLogin: string;
  createdAt: string;
  updatedAt: string;
  isLoggedIn: boolean;
}

export type IUserInputDTO = Pick<
  IUser,
  | 'name'
  | 'providerType'
  | 'providerId'
  | 'age'
  | 'height'
  | 'weight'
  | 'phoneNum'
  | 'channelTitleImageUrl'
  | 'channelDescription'
  | 'channelSnsUrl'
  | 'email'
  | 'name'
> & {
  profileImageUrl?: string;
};

export const userInputDTORequiredKeys = [
  'providerType',
  'providerId',
  'email',
  'name'
];

export type IUserReadDTO = Pick<
  IUser,
  | 'id'
  | 'name'
  | 'profileImageUrl'
  | 'channelTitleImageUrl'
  | 'channelDescription'
  | 'channelSnsUrl'
  | 'followersCount'
  | 'totalViewCount'
  | 'height'
  | 'weight'
>;
