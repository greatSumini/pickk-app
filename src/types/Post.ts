export enum PostType {
  Review = 'REVIEW',
  Look = 'LOOK',
}

export enum ThumbnailType {
  Youtube = 'YOUTUBE',
  Image = 'IMAGE',
}

export type PostItemImage = {
  id: number;
  order: number;
  image: string;
  createdAt: string;
  updatedAt: string;
};

export enum StyleTag {
  Design = 'DESIGN',
  Price = 'PRICE',
  Texture = 'TEXTURE',
  Individuality = 'INDIVIDUALITY',
}

export enum PostItemType {
  ReviewItem = 'REVIEW_ITEM',
  LookItem = 'LOOK_ITEM',
}
