import React from 'react';
import styled from 'styled-components/native';

import {Row, Image, Text} from '@src/modules/atoms';
import {rem, LIGHT_GREY} from '@src/constants';

import {IBrand} from '@src/interfaces';

export type OrderBrandHeaderProps = Pick<IBrand, 'nameKor' | 'profileImageUrl'>;

export default function OrderBrandHeader({
  nameKor,
  profileImageUrl,
}: OrderBrandHeaderProps) {
  return (
    <Wrapper>
      <Image
        src={profileImageUrl}
        size='avatar'
        style={{
          width: rem(24),
          height: rem(24),
          borderRadius: rem(12),
          marginRight: rem(8),
        }}
      />
      <Text level={2} fontWeight='bold'>
        {nameKor}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled(Row)({
  width: '100%',
  paddingVertical: rem(8),
  paddingHorizontal: rem(16),
  borderBottomColor: LIGHT_GREY,
  borderBottomWidth: rem(1),
});
