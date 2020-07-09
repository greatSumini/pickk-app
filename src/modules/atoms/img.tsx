import React from 'react';
import {
  StyleProp,
  ImageStyle,
  ImageSourcePropType,
  ImageResizeMode,
} from 'react-native';
import styled from 'styled-components/native';

import {colors, rem} from '@src/constants';
import {ImageSize, addSizeToImagePath} from '@src/lib/utils/image-size-parser';

type ImageProps = {
  size?: ImageSize;
  src?: string;
  source?: ImageSourcePropType;
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
  const {source, style, children, size = 256, src, ...styleProps} = props;

  return (
    <Img
      source={source || {uri: addSizeToImagePath(src, size)}}
      style={style}
      {...styleProps}
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
