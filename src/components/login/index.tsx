import React from 'react';
import {ScrollView} from 'react-native';

import ScreenNavigationProps from '@src/modules/types/screen-navigation-props';
import {Space, Text} from '@src/modules/atoms';

export type MyScreenProps = ScreenNavigationProps;

export default function LoginScreen(props: MyScreenProps) {
  return (
    <ScrollView>
      <Text>로그인을 하자</Text>
      <Space level={2} />
    </ScrollView>
  );
}
