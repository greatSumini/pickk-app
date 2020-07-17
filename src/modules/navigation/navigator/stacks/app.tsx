import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StackNavigationProp} from '@react-navigation/stack';

import MainTab from './main';
import PostViewScreen from '@src/components/post-view';
import ChannelScreen from '@src/components/channel';
import SearchScreen from '@src/components/search/index';
import LoginScreen from '@src/components/login';
import OrderListScreen from '@src/components/order-list';
import OrderCancelScreen from '@src/components/order-cancel';
import ClaimCompleteScreen from '@src/components/order-claim/complete';

export type AppStackParams = {
  Search: undefined;
  PostView: {id: number};
  Channel: {id: number};
  OrderCancel: {id: number};
  ClaimComplete: {type: 'cancel' | 'exchange' | 'refund'};
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
    <AppStack.Screen name='OrderCancel' component={OrderCancelScreen} />
    <AppStack.Screen name='ClaimComplete' component={ClaimCompleteScreen} />
  </AppStack.Navigator>
);
