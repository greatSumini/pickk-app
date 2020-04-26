import React from 'react';
import styled from 'styled-components/native';

import ChevronRightIcon from '@src/assets/icons/chevron/right';
import {Text} from '@src/modules/atoms';

import {colors, rem} from '@src/constants';

export type ExhibitionHeaderProps = {
  title: string;
  description: string;
  route?: string;
};

export default function ExhibitionHeader({
  title,
  description,
  route,
}: ExhibitionHeaderProps) {
  return (
    <Wrapper>
      <TextWrapper>
        <Text level={3} fontWeight='bold'>
          {title}
        </Text>
        <Text level={1} color={colors.secondary}>
          {description}
        </Text>
      </TextWrapper>
      {route && (
        <ChevronRightIcon
          style={{width: rem(20), height: rem(20)}}
          fill={colors.primary}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.View({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
});

const TextWrapper = styled.View({
  display: 'flex',
  flexDirection: 'column',
});
