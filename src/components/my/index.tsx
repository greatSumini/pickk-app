import React from 'react';
import {ScrollView} from 'react-native';

import ScreenNavigationProps from '@src/modules/types/screen-navigation-props';
import OrderListScreen from '../order-list';
import {Space} from '@src/modules/atoms';

export type MyScreenProps = ScreenNavigationProps;

export default function MyScreen(props: MyScreenProps) {
  return (
    <ScrollView>
      <OrderListScreen navigation={props.navigation} />
    </ScrollView>
  );
}
