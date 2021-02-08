import React from 'react';
import styled from 'styled-components/native';

import {rem, MIDDLE_GREY} from '@src/constants';
import {Text, Image, Row, Col, Space} from '@src/modules/atoms';

export type QuestionEditItemCardProps = {
  id: number;
  imageUrl: string;
  name: string;
  brandName: string;
};

function QuestionEditItemCard({
  id,
  imageUrl,
  name,
  brandName,
}: QuestionEditItemCardProps) {
  return (
    <Wrapper>
      <Image src={imageUrl} size={50} imgWidth={rem(40)} imgHeight={rem(50)} />
      <Space direction='ROW' size={8} />
      <Col style={{alignItems: 'flex-start'}}>
        <Text level={1} fontWeight='medium'>
          {brandName}
        </Text>
        <Text color={MIDDLE_GREY} fontWeight='regular' ellipsis lines={2}>
          {name}
        </Text>
      </Col>
    </Wrapper>
  );
}

export default React.memo(QuestionEditItemCard, () => true);

const Wrapper = styled(Row)({
  paddingTop: rem(16),
  paddingBottom: rem(12),
});
