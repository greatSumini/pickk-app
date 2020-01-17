import React from 'react';
import styled from 'styled-components/native';
import {StyleProp, ViewStyle} from 'react-native';

import Text from '@src/modules/atoms/text';
import colors from '@src/constants/colors';

export type CarouselIndicatorProps = {
  style?: StyleProp<ViewStyle>;
  current: number;
  length: number;
};

export default function CarouselIndicator({
  style,
  current,
  length,
}: CarouselIndicatorProps) {
  return (
    <Wrapper style={style}>
      <Text color={colors.white}>{`${current + 1}/${length}`}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.View({
  alignSelf: 'center',
  paddingVertical: 3,
  paddingHorizontal: 10,
  borderRadius: 9999,
  backgroundColor: 'rgba(51, 51, 51, 0.5)',
});
