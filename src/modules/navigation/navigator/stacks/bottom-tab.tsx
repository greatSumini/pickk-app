import {createBottomTabNavigator} from 'react-navigation-tabs';

import PostStack from './post';
import RankingListStack from './ranking-list';
import TabBar from '../../tab-bar/index';
import HomeScreen from '@src/components/home/index';

const BottomTab = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
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
    tabBarComponent: TabBar,
  },
);

export default BottomTab;
