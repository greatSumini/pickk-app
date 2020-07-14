import React from 'react';
import styled from 'styled-components/native';

import {Row, Text, Space} from '@src/modules/atoms';
import {rem} from '@src/constants';

export type OrderListFooterContentProps = {
  title: string;
  desc: string;
};

export default function OrderListFooterContent({
  title,
  desc,
}: OrderListFooterContentProps) {
  return (
    <Wrapper>
      <Text level={1} fontWeight='medium' width={rem(61)}>
        {title}
      </Text>
      <Space direction='ROW' level={1} />
      <Text level={1} width={rem(250)} preWrap>
        {desc}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled(Row)({
  paddingTop: rem(12),
  alignItems: 'flex-start',
});
