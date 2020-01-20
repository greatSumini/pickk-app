type ItemDescriptionProps = {
  brandId?: number;
  brandKor: string;
  brandEng: string;
  id?: number;
  groupId?: number;
  originalPrice: number;
  salePrice: number;
  imageUrl: string;
  purchaseUrl?: string;
  averageScore: string;
  pickCount: number;
  itemMinorType?: string;
  itemMajorType?: string;
  itemFinalType?: string;
  name: string;
};

export default ItemDescriptionProps;
