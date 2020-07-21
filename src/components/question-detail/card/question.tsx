import React from 'react';
import styled from 'styled-components/native';

import {QuestionTypeKor} from '@src/types';
import {IQuestion} from '@src/interfaces';
import {Text, Space, Col, Row} from '@src/modules/atoms';
import {rem} from '@src/constants';
import SecretIcon from '@src/assets/icons/secret';

export type QuestionDetailQuestionCardProps = Pick<
  IQuestion,
  'type' | 'content'
>;

export default function QuestionDetailQuestionCard({
  type,
  content,
}: QuestionDetailQuestionCardProps) {
  return (
    <Wrapper>
      <Row>
        <SecretIcon />
        <Space direction='ROW' />
        <Text level={2} fontWeight='bold'>
          [{`${QuestionTypeKor[type]} 문의`}]
        </Text>
      </Row>
      <Space level={1} />
      <Text level={1} lines={100}>
        {content}
      </Text>
      <Space level={1} />
    </Wrapper>
  );
}

const Wrapper = styled(Col)({
  paddingHorizontal: rem(16),
  alignItems: 'flex-start',
});
