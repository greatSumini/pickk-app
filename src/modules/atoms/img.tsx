import React from 'react';
import {
  StyleProp,
  ImageStyle,
  ImageSourcePropType,
  ImageResizeMode,
} from 'react-native';
import styled from 'styled-components/native';

import colors from '@src/constants/colors';
import rem from '@src/constants/rem';

type ImageProps = {
  source: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
  children?: any;
} & ImageStyleProps;

type ImageStyleProps = {
  imgWidth?: string | number;
  imgHeight?: string | number;
  circle?: boolean;
  over?: boolean;
  border?: boolean;
  resizeMode?: ImageResizeMode;
};

export default function Image(props: ImageProps) {
  const {source, style, children, over, resizeMode} = props;
  const styleProps: ImageStyleProps = props;

  return (
    <Img
      source={source}
      style={style}
      {...styleProps}
      resizeMode={resizeMode || over ? 'cover' : 'contain'}
      resizeMethod='resize'>
      {children}
    </Img>
  );
}

const Img = styled.Image<ImageStyleProps>((props: ImageStyleProps) => ({
  width: props.imgWidth || '100%',
  borderWidth: props.border && rem(1),
  borderColor: props.border && colors.lightGrey,
  borderRadius: props.circle && 9999,
  maxHeight: (props.over && props.imgHeight) || '100%',
  overflow: props.over && 'hidden',
  height: props.imgHeight || '100%',
}));
