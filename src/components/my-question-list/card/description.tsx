import React from 'react';
import styled from 'styled-components/native';

import {QuestionTypeKor} from '@src/types';
import {IQuestion} from '@src/interfaces';
import {BLACK, DELIVERY_BLUE, rem, MIDDLE_GREY} from '@src/constants';
import {Text, Col, Row, Space} from '@src/modules/atoms';
import SecretIcon from '@src/assets/icons/secret';

export type MyQuestionCardDescriptionProps = Pick<
  IQuestion,
  'type' | 'content' | 'item' | 'answers'
>;

export default function MyQuestionCardDescription({
  type,
  content,
  item,
  answers,
}: MyQuestionCardDescriptionProps) {
  const [answerState, answerStateColor] =
    answers.length === 0 ? ['답변대기', BLACK] : ['답변완료', DELIVERY_BLUE];
  return (
    <Wrapper>
      <StyledRow>
        <IconTextWrapper>
          <SecretIcon />
          <Space direction='ROW' />
          <Text color={BLACK} fontWeight='medium'>
            [{`${QuestionTypeKor[type]}문의`}]
          </Text>
        </IconTextWrapper>
        <Text level={1} color={answerStateColor} fontWeight='medium'>
          {answerState}
        </Text>
      </StyledRow>
      <Space size={4} />
      <Text color={MIDDLE_GREY}>
        <Text color={MIDDLE_GREY} fontWeight='bold'>
          {item.brandName}{' '}
        </Text>
        {item.name}
      </Text>
      <Space size={4} />
      <Text level={1} lines={100}>
        {content}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled(Col)({
  alignItems: 'flex-start',
  width: rem(280),
  minHeight: rem(50),
});

const StyledRow = styled(Row)({
  justifyContent: 'space-between',
});

const IconTextWrapper = styled.View({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});
