import React from 'react';
import styled from 'styled-components/native';

import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import ArrowLeftIcon from '@src/assets/icons/arrow/left';
import LogoIcon from '@src/assets/icons/logo';
import rem from '@src/constants/rem';
import {Text, Touchable} from '@src/modules/atoms';
import {BLACK} from '@src/constants';

export type BackHeaderProps = {
  title?: string;
  cartVisible?: boolean;
  backIconColor?: string;
};

export default function BackHeader({
  title,
  cartVisible,
  backIconColor = BLACK,
}: BackHeaderProps) {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <Touchable
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.goBack()}>
        <ArrowLeftIcon
          style={{width: rem(20), height: rem(20)}}
          fill={backIconColor}
        />
      </Touchable>
      {title && (
        <Text level={3} color={BLACK} fontWeight='medium'>
          {title}
        </Text>
      )}
      {!title && (
        <Touchable
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Main')}>
          <LogoIcon style={{width: rem(32), height: rem(20)}} />
        </Touchable>
      )}
      <View style={{width: rem(20), height: rem(20)}}></View>
    </Wrapper>
  );
}

const Wrapper = styled.View({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: rem(44),
  paddingHorizontal: rem(16),
});
