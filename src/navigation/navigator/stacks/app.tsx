import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeStack from './home';
import PostStack from './post';

const AppStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    Post: {
      screen: PostStack,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default AppStack;
