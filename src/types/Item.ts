import { IPostItem, IUserReadDTO, IItem, IUser } from '@src/interfaces';
import { PostType } from './Post';

export type PriceVariant = {
  option: number[];
  price: number;
};

export type UnansweredItemsByBrandIdResponse = {
  count: number;
  next: string;
  previous: string;
  results: IItem[];
};

// legacy end

export type ItemListParams = {
  brand?: number;
  isAnswered?: boolean;
  isReviewd?: boolean;
  o?: 'created_at' | '-created_at' | 'updated_at' | '-updated_at' | 'random';
  limit?: number;
  offset?: number;
};

export type ItemImage = {
  type?: ItemImageType;
  imageUrl: string;
  order: number;
};

export type ItemReviewRequestParams = {
  userId?: number;
  snsLink: string;
  name: string;
  phone: string;
};

export type ItemMajorType = {
  id: number;
  name: string;
  code?: string;
};
export type ItemMinorType = ItemMajorType & { itemMajorType?: number };
export type ItemFinalType = ItemMinorType & { itemMinorType?: number };

export enum ItemImageType {
  Default = 'DEFAULT',
  Content = 'CONTENT',
  Preview = 'PREVIEW',
  Thumbnail = 'THUMBNAIL'
}

export type ItemReviewRequest = {
  snsLink: string;
  name: string;
  phone: string;
};

export type ItemOption = {
  itemIsSoldout: boolean;
  options: {
    values: {
      [valueName: string]: string[];
    };
    isSoldout: Array<number[]>;
    optionPriceVariants: PriceVariant[];
  };
  products: {
    [productName: string]: Product;
  };
};

export type Product = {
  priceVariant: number;
  values: string[];
};

export enum BenefitState {
  recommendSub = '구독 요청',
  lowestPrice = '온라인 최저가',
  applyingSubDiscount = '구독 할인 적용중',
  noBenefit = '혜택없음'
}

export type Digest = Pick<
  IPostItem,
  | 'score'
  | 'styleTag'
  | 'shortDescription'
  | 'createdAt'
  | 'description'
  | 'images'
  | 'isPurchasable'
> & {
  user: Pick<
    IUserReadDTO,
    'id' | 'name' | 'profileImageUrl' | 'followersCount'
  >;
  type: PostType;
  id: number;
};

export type ItemDiscountsInfo = {
  id: number;
  subsDiscountRate: number;
  subsDiscountAmount: number;
  itemDiscounts: Discount[];
};

export type Discount = {
  id: number;
  user: IUserReadDTO;
  subsDiscountRate: number;
  subsDiscountAmount: number;
  discountRate: number;
  startAt: string;
  endAt: string;
};

export type RecommendationItem = {
  user: IUser;
  items: IItem[];
  order: number;
  isActive: boolean;
};
