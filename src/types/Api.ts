export type AxiosQueryResponse<DataType> = {
  loading: boolean;
  error: boolean;
  data: DataType;
  fetchMore?: (option: any) => void;
  count?: number;
};

export type AxiosStateResponse<DataType> = {
  data: DataType;
  setData: React.Dispatch<React.SetStateAction<DataType>>;
};

export type OffsetListResponse<T> = {
  count: number;
  next: string;
  previous: string;
  results: T[];
};
