import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MainTab from './main';
import PostViewScreen from '@src/components/post-view';
import ChannelScreen from '@src/components/channel';
import SearchScreen from '@src/components/search/index';
import {StackNavigationProp} from '@react-navigation/stack';

export type AppStackParams = {
  Search: undefined;
  PostView: {id: number};
  Channel: {id: number};
};

export type AppStackNavigationProps = StackNavigationProp<AppStackParams>;

const AppStack = createStackNavigator();

export default () => (
  <AppStack.Navigator initialRouteName='Main' headerMode='none'>
    <AppStack.Screen name='Main' component={MainTab} />
    <AppStack.Screen name='PostView' component={PostViewScreen} />
    <AppStack.Screen name='Channel' component={ChannelScreen} />
    <AppStack.Screen name='Search' component={SearchScreen} />
  </AppStack.Navigator>
);
