import React from 'react';
import styled from 'styled-components/native';

import {Text} from '@src/modules/atoms';
import {rem, LIGHT_GREY} from '@src/constants';

export type MyQuestionListDateHeaderProps = {
  date: string;
};

export default function MyQuestionListDateHeader({
  date,
}: MyQuestionListDateHeaderProps) {
  return (
    <Wrapper>
      <Text level={1} fontWeight='bold'>
        {date}
      </Text>
    </Wrapper>
  );
}
const Wrapper = styled.View({
  width: '100%',
  paddingVertical: rem(8),
  paddingHorizontal: rem(16),
  backgroundColor: LIGHT_GREY,
});
