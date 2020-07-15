export type NodeUserInfo = {
  id: number;
  name: string;
  email: string;
  age: number;
  height: number;
  weight: number;
  profileImageUrl: string;
  phoneNum: string;
  address: string;
  rank: number;
  channel_titleImageUrl: string;
  channel_description: string;
  channel_snsUrl: string;
  channel_pickCount: number;
  channel_totalViewCount: number;
};

// legacy end

export enum ProviderType {
  Facebook = 'FB',
  Kakao = 'KK',
  Apple = 'AP',
}

export enum PointSign {
  Plus = 'PLUS',
  Minus = 'MINUS',
}

export enum PointType {
  General = 'GENERAL',
  Reward = 'REWARD',
}
