import React from 'react';
import styled from 'styled-components/native';

import Text from '@src/modules/atoms/text';
import ButtonTextProps from './props';
import colors from '@src/constants/colors';

export default function ButtonText({
  onPress,
  content,
  level = 0,
  color = colors.primary,
}: ButtonTextProps) {
  return (
    <Touchable onPress={onPress}>
      <Text level={level} color={color}>
        {content}
      </Text>
    </Touchable>
  );
}

const Touchable = styled.TouchableOpacity({});
