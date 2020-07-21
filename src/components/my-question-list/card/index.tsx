import React from 'react';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

import {IQuestion} from '@src/interfaces';
import MyQuestionCardDescription from './description';
import {Touchable, Image, Space} from '@src/modules/atoms';
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
  id,
}: MyQuestionCardProps) {
  const navigation = useNavigation();
  const {imageUrl} = item;
  return (
    <Wrapper onPress={() => navigation.navigate('QuestionDetail', {id})}>
      <Image size={50} src={imageUrl} imgWidth={rem(40)} imgHeight={rem(50)} />
      <Space direction='ROW' size={8} />
      <MyQuestionCardDescription {...{item, type, title, content, answers}} />
    </Wrapper>
  );
}
const Wrapper = styled(Touchable)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  width: '100%',
  paddingVertical: rem(12),
  paddingHorizontal: rem(16),
});
