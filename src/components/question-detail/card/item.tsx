import React from 'react';
import styled from 'styled-components/native';

import {IItem} from '@src/interfaces';
import {rem, MIDDLE_GREY} from '@src/constants';
import {Text, Space, Col, Row, Image} from '@src/modules/atoms';

export type QuestionDetailItemCardProps = Pick<
  IItem,
  'imageUrl' | 'name' | 'brand'
>;

export default function QuestionDetailItemCard({
  imageUrl,
  brand,
  name,
}: QuestionDetailItemCardProps) {
  return (
    <Wrapper>
      <Image src={imageUrl} size={50} imgWidth={rem(40)} imgHeight={rem(50)} />
      <Space direction='ROW' size={8} />
      <ItemDescription>
        <Text level={1} fontWeight='medium'>
          {brand.nameKor}
        </Text>
        <Space />
        <Text color={MIDDLE_GREY}>{name}</Text>
      </ItemDescription>
    </Wrapper>
  );
}

const Wrapperr = styled(Row)`
  height: fit-content;
  padding: 0.17rem 0.16rem 0.12rem;
  align-items: flex-start;
`;

const Wrapper = styled(Row)({
  paddingTop: rem(16),
  paddingHorizontal: rem(16),
  paddingBottom: rem(12),
});

const ItemDescription = styled(Col)({
  width: rem(280),
  minHeight: rem(50),
  alignItems: 'flex-start',
});
