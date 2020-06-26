import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '@src/components/home/index';
import PostScreen from '@src/components/post-list';
import RankingListScreen from '@src/components/ranking-list/index';
import MyScreen from '@src/components/my';
import TabBar from '../../tab-bar/index';

const MainTab = createBottomTabNavigator();

export default () => {
  return (
    <MainTab.Navigator
      initialRouteName='Home'
      tabBar={(props) => <TabBar {...(props as any)} />}>
      <MainTab.Screen name='Home' component={HomeScreen} />
      <MainTab.Screen name='Post' component={PostScreen} />
      <MainTab.Screen name='Rank' component={RankingListScreen} />
      <MainTab.Screen name='My' component={MyScreen} />
    </MainTab.Navigator>
  );
};
