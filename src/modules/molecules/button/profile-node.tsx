import React from 'react';
import styled from 'styled-components/native';

import {ProfileImg} from '@src/components/post-list/card/wide/header';
import {Text, Space} from '@src/modules/atoms';
import {REGULAR_GREY} from '@src/constants/colors';

import {width} from '@src/constants/dimensions';
import rem from '@src/constants/rem';
import {TouchableCmp} from '@src/modules/atoms';
import {useNavigation} from '@react-navigation/native';

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
      <ProfileImg source={{uri: profileImageUrl}} />
      <Space direction='ROW' size={8} />
      <Text level={1} fontWeight='medium'>
        {name}
      </Text>
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
