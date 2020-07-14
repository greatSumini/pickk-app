import React from 'react';
import {ScrollView} from 'react-native';

import {Space, Button} from '@src/modules/atoms';
import ScreenNavigationProps from '@src/modules/types/screen-navigation-props';
import {useNavigation} from '@react-navigation/native';

export type MyScreenProps = ScreenNavigationProps;

export default function MyScreen(props: MyScreenProps) {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Space level={2} />
      <Button
        title='로그인하기'
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </ScrollView>
  );
}
