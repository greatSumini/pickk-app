import {StackNavigationProp} from '@react-navigation/stack';

export type AppStackParams = {
  Search: undefined;
  PostView: {id: number};
  Channel: {id: number};
};

export type AppStackNavigation = StackNavigationProp<AppStackParams>;
