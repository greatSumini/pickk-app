import React, {useEffect} from 'react';
import styled from 'styled-components/native';

import Text from '@src/modules/atoms/text';
import LogoIcon from '@src/assets/icons/logo';
import ScreenNavigationProps from '@src/modules/types/screen-navigation-props';
import {WHITE} from '@src/constants/colors';

import rem from '@src/constants/rem';
import {useNavigation} from '@react-navigation/native';

export type SplashScreenProps = ScreenNavigationProps;

export default function SplashScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'App'}],
      });
    }, 3000);
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
