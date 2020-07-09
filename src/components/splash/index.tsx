import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

import LogoIcon from '@src/assets/icons/logo';
import ScreenNavigationProps from '@src/modules/types/screen-navigation-props';
import Text from '@src/modules/atoms/text';
import {WHITE} from '@src/constants/colors';
import rem from '@src/constants/rem';

import {useAppContext} from '@src/context/app';

export type SplashScreenProps = ScreenNavigationProps;

export default function SplashScreen() {
  const {getMe} = useAppContext().action;
  const navigation = useNavigation();

  const signIn = async () => {
    try {
      await getMe();
    } catch {}
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'App'}],
      });
    }, 100);
  };

  useEffect(() => {
    signIn();
  }, []);

  return (
    <Wrapper>
      <LogoIcon style={{width: rem(89), height: rem(52)}} fill={WHITE} />
      <Text color={WHITE}>당신의 패션선택지</Text>
    </Wrapper>
  );
}

const Wrapper = styled.View({
  flex: 1,
  backgroundColor: '#222',
  paddingTop: rem(220),
  paddingBottom: rem(42),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
});
