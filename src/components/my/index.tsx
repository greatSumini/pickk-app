import React from 'react';
import {ScrollView} from 'react-native';

import {Space} from '@src/modules/atoms';
import ScreenNavigationProps from '@src/modules/types/screen-navigation-props';

export type MyScreenProps = ScreenNavigationProps;

export default function MyScreen(props: MyScreenProps) {
  return (
    <ScrollView>
      <Space level={2} />
    </ScrollView>
  );
}
