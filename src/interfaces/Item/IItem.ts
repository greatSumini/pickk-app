import {IBrand} from './IBrand';
import {
  ItemImage,
  ItemMajorType,
  ItemMinorType,
  ItemFinalType,
  ListRequestParams,
  Digest,
} from '@src/types';

export interface IItem {
  id: number;
  followersCount: number;
  itemImages: ItemImage[];
  subsDiscountRate: number;
  subsDiscountAmount: number;
  brand: IBrand;
  popularDigest: Digest;
  name: string;
  code?: string;
  skuPrefix?: string;
  originalPk: number;
  groupId?: number;
  sizeImage?: string;
  originalPrice: number;
  salePrice: number;
  imageUrl: string;
  purchaseUrl?: string;
  isSoldout: boolean;
  averageScore: string;
  pickCount: number;
  isInternalized: boolean;
  isActive: boolean;
  doNotCrawl: boolean;
  isSubsDiscountable: boolean;
  isStockManaged: boolean;
  isReviewed: boolean;
  noticeMessage?: string;
  createdAt: string;
  updatedAt: string;
  itemMajorType?: ItemMajorType;
  itemMinorType?: ItemMinorType;
  itemFinalType?: ItemFinalType;
}

export type IItemCustomInputDTO = Pick<
  IItem,
  'name' | 'originalPrice' | 'salePrice' | 'imageUrl' | 'purchaseUrl'
> & {
  brand: {
    nameKor: string;
    nameEng?: string;
  };
  itemMajorTypeId?: number;
  itemMinorTypeId?: number;
  itemFinalTypeId?: number;
};

export type ItemListRequestParams = ListRequestParams &
  Partial<{
    brandId: number;
    isAnswered: boolean;
    isReviewed: boolean;
    keyword: string;
    url: string;
    ids: number[];
    o:
      | 'created_at'
      | '-created_at'
      | 'updated_at'
      | 'newly_reviewed'
      | '-updated_at'
      | 'random'
      | 'popular';
    reviewedBy: number;
    itemMajorTypeId: number;
    itemMinorTypeId: number;
    itemFinalTypeId: number;
  }>;
