import React from 'react';
import styled from 'styled-components/native';

import {Text, Row} from '@src/modules/atoms';
import {BLACK, rem} from '@src/constants';

export type TitleHeaderProps = {
  title: string;
};

export default function TitleHeader({title}: TitleHeaderProps) {
  return (
    <Wrapper>
      <Text level={3} color={BLACK} fontWeight='medium'>
        {title}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled(Row)({
  height: rem(56),
  padding: rem(16),
  justifyContent: 'center',
});
