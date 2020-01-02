import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeStack from './home';
import PostStack from './post';
import RankingListStack from './ranking-list';

const AppStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    Post: {
      screen: PostStack,
    },
    Rank: {
      screen: RankingListStack,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default AppStack;
