import React from 'react';
import styled from 'styled-components/native';

import {ProfileImg} from '@src/components/post-list/card/wide/header';
import Text from '@src/modules/atoms/text';
import Space from '@src/modules/atoms/space';
import {REGULAR_GREY} from '@src/constants/colors';

import {width} from '@src/constants/dimensions';
import rem from '@src/constants/rem';

export type ProfileNodeProps = {
  profileImageUrl: string;
  name: string;
};

export default function ProfileNode({profileImageUrl, name}: ProfileNodeProps) {
  return (
    <Wrapper>
      <ProfileImg source={{uri: profileImageUrl}} />
      <Space direction='ROW' size={8} />
      <Text level={1} fontWeight='medium'>
        {name}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.View({
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
