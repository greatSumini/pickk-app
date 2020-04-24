import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';

import PostCardWideThumbnailProps from './props';
import {width} from '@src/constants/dimensions';
import {imageUriHandler} from '@src/lib/utils/url-parser';
import {ImageSize} from '@src/lib/utils/image-size-parser';
import CustomImage from '@src/modules/atoms/img';

export default function PostCardWideThumbnail({
  titleType,
  titleImageUrl,
  titleYoutubeUrl,
}: PostCardWideThumbnailProps) {
  const imageUrl = imageUriHandler(
    titleType,
    titleImageUrl,
    titleYoutubeUrl,
    ImageSize.Medium,
  );

  return (
    <Thumbnail
      source={{
        uri: imageUrl,
      }}
      imgWidth={width}
      style={{
        height: titleType === 'YOUTUBE' ? (width * 9) / 16 : null,
        maxHeight: width,
      }}
      over={titleType === 'YOUTUBE'}
    />
  );
}

const Thumbnail = styled(CustomImage)({});
