import React from 'react';
import styled from 'styled-components/native';

import {IQuestion} from '@src/interfaces';
import {Text, Space, Col} from '@src/modules/atoms';
import {rem, DELIVERY_BLUE} from '@src/constants';

export type QuestionDetailAnswerCardProps = Pick<IQuestion, 'answers'>;

export default function QuestionDetailAnswerCard({
  answers,
}: QuestionDetailAnswerCardProps) {
  const isAnswered = answers.length > 0;

  return (
    <>
      {isAnswered && (
        <Wrapper>
          <Text level={2} color={DELIVERY_BLUE} fontWeight='bold'>
            답변완료
          </Text>
          <Space level={1} />
          <Text level={1}>{answers[0].content}</Text>
        </Wrapper>
      )}
      {!isAnswered && (
        <Col>
          <Space level={2} />
          <Text level={2} fontWeight='bold'>
            판매자가 문의를 확인하는 중입니다.
          </Text>
          <Space />
          <Text level={1}>답변 등록 시 카카오톡으로 알람을 보내드립니다.</Text>
        </Col>
      )}
    </>
  );
}

const Wrapper = styled(Col)({
  paddingVertical: rem(12),
  paddingHorizontal: rem(16),
  alignItems: 'flex-start',
});
