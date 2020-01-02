import React from 'react';
import styled from 'styled-components/native';

import Text from '../atoms/text';
import rem from '@src/constants/rem';
import colors from '@src/constants/colors';

type IconTextProps = {
  Icon: any;
  children: number;
  style?: any;
  width: number;
  height: number;
  fill?: string;
  fillIn?: string;
  fillOut?: string;
  fillLeft?: string;
  fillRight?: string;
  textColor?: string;
};

export default function IconText({
  Icon,
  children,
  style,
  width,
  height,
  fill,
  fillIn,
  fillOut,
  fillLeft,
  fillRight,
  textColor,
}: IconTextProps) {
  return (
    <IconTextWrapper style={style}>
      <Icon
        style={{width: width, height: height, marginRight: rem(5)}}
        fill={fill}
        fillIn={fillIn}
        fillOut={fillOut}
        fillLeft={fillLeft}
        fillRight={fillRight}
      />

      <Text color={textColor} level={1} ellipsis={true}>
        {children}
      </Text>
    </IconTextWrapper>
  );
}

const IconTextWrapper = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
});

IconText.defaultProps = {
  textColor: colors.primary,
};
