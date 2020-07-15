import React from 'react';
import {ScrollView, Platform} from 'react-native';

import ScreenNavigationProps from '@src/modules/types/screen-navigation-props';
import FacebookLoginButton from './facebook-login-button';
import KakaoLoginButton from './kakao-login-button';
import AppleLoginButton from './apple-login-button';
import {Space, Text} from '@src/modules/atoms';

export type MyScreenProps = ScreenNavigationProps;

export default function LoginScreen(props: MyScreenProps) {
  return (
    <ScrollView>
      <Text>로그인을 하자</Text>
      <Space level={2} />
      <FacebookLoginButton />
      <KakaoLoginButton />
      {Platform.OS === 'ios' && <AppleLoginButton />}
    </ScrollView>
  );
}
