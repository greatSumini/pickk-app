import {createStackNavigator} from 'react-navigation-stack';

import RankingListScreen from '@src/components/ranking-list/index';

const RankingListStack = createStackNavigator(
  {
    Rank: {
      screen: RankingListScreen,
    },
  },
  {
    initialRouteName: 'Rank',
    headerMode: 'none',
  },
);

export default RankingListStack;
