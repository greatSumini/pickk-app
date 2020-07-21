import React from 'react';
import styled from 'styled-components/native';
import {useRoute, RouteProp} from '@react-navigation/native';
import {AppStackParams} from '@src/modules/navigation/navigator/stacks/app';
import {useAppContext} from '@src/context/app';

import {useQuestion} from '@src/hooks';
import QuestionDetailItemCard, {QuestionDetailItemCardProps} from './card/item';
import QuestionDetailQuestionCard, {
  QuestionDetailQuestionCardProps,
} from './card/question';
import BackHeader from '@src/modules/molecules/header/back';
import {rem, WHITE} from '@src/constants';
import {Space, Line, Col} from '@src/modules/atoms';
import QuestionDetailAnswerCard, {
  QuestionDetailAnswerCardProps,
} from './card/answer';

export default function QuestionDetailScreen() {
  const {generateConfig} = useAppContext().action;
  const route = useRoute<RouteProp<AppStackParams, 'QuestionDetail'>>();
  const {id} = route.params;
  const {data: question} = useQuestion(id, generateConfig);

  if (!question) return <></>;

  const questionDetailItemCardProps: QuestionDetailItemCardProps =
    question.item;
  const questionDetailQuestionCardProps: QuestionDetailQuestionCardProps = question;

  const questionDetailAnswerCardProps: QuestionDetailAnswerCardProps = question;

  return (
    <Wrapper>
      <BackHeader title='문의상세' />
      <Line />
      <QuestionDetailItemCard {...questionDetailItemCardProps} />
      <Line level={1} />
      <QnAWrapper>
        <QuestionDetailQuestionCard {...questionDetailQuestionCardProps} />
        <Space level={1} />
        <Line />
        <QuestionDetailAnswerCard {...questionDetailAnswerCardProps} />
      </QnAWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.ScrollView({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: '100%',
  backgroundColor: WHITE,
});

const QnAWrapper = styled(Col)({
  alignItems: 'flex-start',
  paddingVertical: rem(12),
});
