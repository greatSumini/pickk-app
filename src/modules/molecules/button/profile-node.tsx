import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

import {ProfileImg} from '@src/components/post-list/card/wide/header';
import {Text, Space, TouchableCmp} from '@src/modules/atoms';
import {REGULAR_GREY, BLACK, WHITE} from '@src/constants/colors';

import {width, rem} from '@src/constants';
import {ImageSize} from '@src/lib/utils/image-size-parser';

export type ProfileNodeProps = {
  accountId: number;
  profileImageUrl: string;
  name: string;
};

export default function ProfileNode({
  profileImageUrl,
  name,
  accountId,
}: ProfileNodeProps) {
  const navigation = useNavigation();
  return (
    <Wrapper
      onPress={() =>
        navigation.navigate('Channel', {
          id: accountId,
        })
      }>
      <ProfileImg src={profileImageUrl} size={ImageSize.Small} />
      <Space direction='ROW' size={8} />
      <Text level={1} fontWeight='medium'>
        {name}
      </Text>
      <View
        style={{
          marginLeft: 'auto',
          paddingVertical: rem(3),
          paddingHorizontal: rem(12),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 9999,
          backgroundColor: BLACK,
        }}>
        <Text level={1} fontWeight='medium' color={WHITE}>
          다른 리뷰 더보기
        </Text>
      </View>
    </Wrapper>
  );
}

const Wrapper = styled(TouchableCmp)({
  marginHorizontal: rem(16),
  paddingVertical: rem(8),
  paddingHorizontal: rem(12),
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: rem(1),
  borderColor: REGULAR_GREY,
  borderRadius: rem(8),
  width: width - rem(32),
});
