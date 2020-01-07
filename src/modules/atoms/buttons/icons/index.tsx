import React from 'react';
import styled from 'styled-components/native';

import IconButtonProps from './props';

export default function IconBoutton({
  onPress,
  size,
  Icon,
  fill,
  fillIn,
  fillLeft,
  fillOut,
  fillRight,
  style,
}: IconButtonProps) {
  return (
    <Touchable onPress={onPress} style={style}>
      <Icon
        style={{width: size, height: size}}
        fill={fill}
        fillIn={fillIn}
        fillOut={fillOut}
        fillLeft={fillLeft}
        fillRight={fillRight}
      />
    </Touchable>
  );
}

const Touchable = styled.TouchableOpacity({});
