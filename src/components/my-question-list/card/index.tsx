import React from 'react';
import styled from 'styled-components';

import {IQuestion} from '@src/interfaces';
import MyQuestionCardDescription from './description';
import {Row, Image, Space} from '@src/modules/atoms';
import {rem} from '@src/constants';

export type MyQuestionCardProps = Pick<
  IQuestion,
  'item' | 'answers' | 'type' | 'title' | 'content' | 'id'
>;

export default function MyQuestionCard({
  item,
  answers,
  type,
  title,
  content,
}: MyQuestionCardProps) {
  const {imageUrl} = item;
  return (
    <Wrapper>
      <Image size={50} src={imageUrl} imgWidth={rem(40)} imgHeight={rem(50)} />
      <Space direction='ROW' size={8} />
      <MyQuestionCardDescription {...{item, type, title, content, answers}} />
    </Wrapper>
  );
}
const Wrapper = styled(Row)({
  alignItems: 'flex-start',
  paddingVertical: rem(12),
  paddingHorizontal: rem(16),
});
