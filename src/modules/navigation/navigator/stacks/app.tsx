import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StackNavigationProp} from '@react-navigation/stack';

import MainTab from './main';
import PostViewScreen from '@src/components/post-view';
import ChannelScreen from '@src/components/channel';
import SearchScreen from '@src/components/search/index';
import LoginScreen from '@src/components/login';
import OrderScreen from '@src/components/order';
import OrderListScreen from '@src/components/order-list';
import OrderCancelScreen from '@src/components/order-cancel';
import OrderClaimCompleteScreen from '@src/components/order-claim/complete';
import OrderExchangeScreen from '@src/components/order-exchange';
import OrderRefundScreen from '@src/components/order-refund';
import MyQuestionListScreen from '@src/components/my-question-list';
import QuestionDetailScreen from '@src/components/question-detail';

export type AppStackParams = {
  Search: undefined;
  PostView: {id: number};
  Channel: {id: number};
  OrderCancel: {id: number};
  OrderClaimComplete: {type: 'cancel' | 'exchange' | 'refund'};
  Order: {id: number};
  OrderExchange: {id: number};
  OrderRefund: {id: number};
  QuestionDetail: {id: number};
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
    <AppStack.Screen name='Order' component={OrderScreen} />
    <AppStack.Screen name='OrderList' component={OrderListScreen} />
    <AppStack.Screen name='OrderCancel' component={OrderCancelScreen} />
    <AppStack.Screen
      name='OrderClaimComplete'
      component={OrderClaimCompleteScreen}
    />
    <AppStack.Screen name='OrderExchange' component={OrderExchangeScreen} />
    <AppStack.Screen name='OrderRefund' component={OrderRefundScreen} />
    <AppStack.Screen name='MyQuestionList' component={MyQuestionListScreen} />
    <AppStack.Screen name='QuestionDetail' component={QuestionDetailScreen} />
  </AppStack.Navigator>
);
