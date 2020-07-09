import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';

import {Image as CustomImage} from '@src/modules/atoms';
import {width} from '@src/constants/dimensions';
import {rem} from '@src/constants';

import {imageUriHandler} from '@src/lib/utils/url-parser';
import {IReview} from '@src/interfaces';

export type PostCardWideThumbnailProps = Pick<
  IReview,
  'thumbnail' | 'thumbnailType' | 'youtubeVideoId'
>;

export default function PostCardWideThumbnail({
  thumbnailType,
  thumbnail,
  youtubeVideoId,
}: PostCardWideThumbnailProps) {
  const [imageHeight, setImageHeight] = useState((rem(360) * 9) / 16);
  const imageUrl = imageUriHandler(
    thumbnailType,
    thumbnail,
    youtubeVideoId,
    512,
  );

  useEffect(() => {
    Image.getSize(
      imageUrl,
      (_width, _height) => {
        if (thumbnailType !== 'YOUTUBE') {
          setImageHeight(Math.min(width, (_height / _width) * width));
        }
      },
      () => {},
    );
  }, []);

  return (
    <Thumbnail
      source={{
        uri: imageUrl,
      }}
      style={{width: rem(360), maxHeight: rem(360), height: imageHeight}}
      over={thumbnailType === 'YOUTUBE'}
    />
  );
}

const Thumbnail = styled(CustomImage)((props) => ({
  width: rem(360),
  height: rem(360),
  maxHeight: rem(360),
  overflow: 'hidden',
}));
