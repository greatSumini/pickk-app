import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MainTab from './main';
import PostViewScreen from '@src/components/post-view';
import ChannelScreen from '@src/components/channel';
import SearchScreen from '@src/components/search/index';
import LoginScreen from '@src/components/login';
import OrderListScreen from '@src/components/order-list';
import OrderScreen from '@src/components/order';

import {StackNavigationProp} from '@react-navigation/stack';

export type AppStackParams = {
  Search: undefined;
  PostView: {id: number};
  Channel: {id: number};
  Order: {id: number};
};

export type AppStackNavigationProps = StackNavigationProp<AppStackParams>;

const AppStack = createStackNavigator();

export default () => (
  <AppStack.Navigator initialRouteName='Main' headerMode='none'>
    <AppStack.Screen name='Main' component={MainTab} />
    <AppStack.Screen name='PostView' component={PostViewScreen} />
    <AppStack.Screen name='Channel' component={ChannelScreen} />
    <AppStack.Screen name='Search' component={SearchScreen} />
    <AppStack.Screen name='Login' component={LoginScreen} />
    <AppStack.Screen name='OrderList' component={OrderListScreen} />
    <AppStack.Screen name='Order' component={OrderScreen} />
  </AppStack.Navigator>
);
