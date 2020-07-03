import { ListRequestParams } from '.';

export type ItemTypes = {
  id: number;
  name: string;
  enum?: string;
};
export type ItemFinalTypes = ItemTypes;
export type ItemMinorTypes = ItemTypes & { itemFinalTypes: ItemTypes[] };
export type ItemMajorTypes = ItemMinorTypes & {
  itemMinorTypes: ItemMinorTypes[];
};
export type ItemTypeListRequestParams = ListRequestParams & {
  name: string;
  enum: string;
};
