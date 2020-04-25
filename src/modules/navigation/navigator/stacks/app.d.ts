import {StackNavigationProp} from '@react-navigation/stack';

export type AppStackParams = {
  Search: undefined;
  PostView: {id: number};
  Channel: undefined;
};

export type AppStackNavigation = StackNavigationProp<AppStackParams>;
