export type ItemOptionsResponse = {
  id: number;
  options: {
    values: {
      [valueName: string]: string[];
    };
    isSoldout: number[][];
    optionPriceVariants: PriceVariant[];
    productPriceVariants: PriceVariant[];
  };
};

export type PriceVariant = {
  option: number[];
  price: number;
};

export type UnansweredItemsByBrandIdResponse = {
  count: number;
  next: string;
  previous: string;
  results: ItemType[];
};

export type ItemInfo = {
  brandId: number;
  brandKor: string;
  brandEng: string;
  id: number;
  groupId: number;
  name: string;
  originalPrice: string;
  salePrice: string;
  itemMinorType: string;
  itemMajorType: string;
  itemFinalType: string;
  imageUrl: string;
  purchaseUrl: string;
  averageScore: number;
  pickCount: number;
};

export type ItemInfoInput = {
  createItemLevel: 'GROUP';
  groupInfo: GroupInfo;
  variationInfo: VariationInfo;
};

export type GroupInfo = {
  brandId: number;
  brand: string;
  isNewBrand: boolean;
  originalPrice: string;
  itemMinorType: string;
  itemMajorType: string;
  itemFinalType: string;
  sourceWebsite: string;
  groupId: number;
};

export type VariationInfo = {
  itemId: number;
  name: string;
  salePrice: string;
  imageUrl: string;
  purchaseUrl: string;
};

export type ItemType = {
  id: number;
  itemImages: string;
  subsDiscountRate: number;
  subsDiscountAmount: number;
  name: string;
  code: string;
  skuPrefix: string;
  originalPk: number;
  groupId: number;
  originalPrice: number;
  salePrice: number;
  imageUrl: string;
  purchaseUrl: string;
  isSoldout: boolean;
  averageScore: number;
  pickCount: number;
  isInternalized: boolean;
  images: Array<{type: string; imageUrl: string}>;
  isActive: boolean;
  doNotCrawl: boolean;
  isSubsDiscountable: boolean;
  createdAt: string;
  updatedAt: string;
  brand: Brand;
  brandName: string;
  itemMajorType: string;
  itemMinorType: string;
  itemFinalType: string;
  sizeImage: string;
  detailImageUrls: string[];
};

export type Brand = {
  id: number;
  nameKor: string;
  nameEng: string;
  isPartner: boolean;
  profileImage: string;
  bannerImage: string;
  siteUrl: string;
  defaultDiscountRate: number;
  csNumber: string;
  csEmail: string;
  createdAt: string;
  updatedAt: string;
};

export enum BenefitState {
  recommendSub = '구독 요청',
  lowestPrice = '온라인 최저가',
  applyingSubDiscount = '구독 할인 적용중',
  noBenefit = '혜택없음',
}
