import {SetStateAction, ReactElement} from 'react';
import {ViewStyle, NativeSyntheticEvent, NativeScrollEvent} from 'react-native';

export type ListProps = {
  requestConfig: any;
  ListItem: React.FunctionComponent<any>;
  filter?: any;
  initialData?: any;
  Skeleton?: React.FunctionComponent<{style?: ViewStyle}>;
  NoResult?: React.FunctionComponent;
  listFilter?: (data: any) => boolean;
  listItemProp?: any;
  loading?: boolean;
  setLoading?: React.Dispatch<SetStateAction<boolean>>;
  style?: ViewStyle;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  ListHeaderComponent?: ReactElement;
};
