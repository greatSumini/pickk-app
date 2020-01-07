import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import styled from 'styled-components/native';

import Text from '@src/modules/atoms/text';
import colors from '@src/constants/colors';
import rem from '@src/constants/rem';

type IconTextProps = {
  Icon: React.ElementType;
  style?: StyleProp<ViewStyle>;
  content: number | string;
  width: number;
  height: number;
  fill?: string;
  fillIn?: string;
  fillOut?: string;
  fillLeft?: string;
  fillRight?: string;
  textColor?: string;
  level?: number;
  space?: number;
  order?: 'Icon' | 'Text';
};

export default function IconText({
  Icon,
  content,
  style,
  width,
  height,
  fill,
  fillIn,
  fillOut,
  fillLeft,
  fillRight,
  textColor,
  level = 1,
  space = rem(4),
  order = 'Icon',
}: IconTextProps) {
  if (order === 'Icon') {
    return (
      <IconTextWrapper style={style}>
        <Icon
          style={{width: width, height: height, marginRight: space}}
          fill={fill}
          fillIn={fillIn}
          fillOut={fillOut}
          fillLeft={fillLeft}
          fillRight={fillRight}
        />
        <Text color={textColor} level={level} ellipsis={true}>
          {content}
        </Text>
      </IconTextWrapper>
    );
  } else {
    return (
      <IconTextWrapper style={style}>
        <Text color={textColor} level={level} ellipsis={true}>
          {content}
        </Text>
        <Icon
          style={{width: width, height: height, marginLeft: space}}
          fill={fill}
          fillIn={fillIn}
          fillOut={fillOut}
          fillLeft={fillLeft}
          fillRight={fillRight}
        />
      </IconTextWrapper>
    );
  }
}

const IconTextWrapper = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
});

IconText.defaultProps = {
  textColor: colors.primary,
};
