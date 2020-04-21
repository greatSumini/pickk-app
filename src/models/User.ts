import {IUserInfo} from '../types/IUserInfo';

export class User implements IUserInfo {
  public id: number;
  public name: string;
  public rank: string;
  public profileImageUrl: string;

  constructor(id: number, name: string, rank: string, profileImageUrl: string) {
    this.id = id;
    this.name = name;
    this.rank = rank;
    this.profileImageUrl = profileImageUrl;
  }
}
