import React from 'react';
import styled from 'styled-components/native';

import ScreenNavigationProps from '@src/modules/types/screen-navigation-props';
import MyQuestionListScreen from '../my-question-list';
import {WHITE} from '@src/constants';

export type MyScreenProps = ScreenNavigationProps;

export default function MyScreen(props: MyScreenProps) {
  return (
    <Wrapper>
      <MyQuestionListScreen />
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
