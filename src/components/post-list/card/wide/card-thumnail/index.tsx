import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';

import PostCardWideThumnailProps from './props';
import {width} from '@src/constants/dimensions';
import {imageUriHandler} from '@src/lib/utils/url-parser';
import {ImageSize} from '@src/lib/utils/image-size-parser';
import CustomImage from '@src/modules/atoms/img';

export default function PostCardWideThumnail({
  titleType,
  titleImageUrl,
  titleYoutubeUrl,
}: PostCardWideThumnailProps) {
  const [ratio, setRatio] = useState(0);
  const imageUrl = imageUriHandler(
    titleType,
    titleImageUrl,
    titleYoutubeUrl,
    ImageSize.Raw,
  );

  useEffect(() => {
    Image.getSize(
      imageUrl,
      (width, height) => {
        setRatio(height / width);
      },
      err => {
        console.log(err);
      },
    );
  }, []);

  const imgHeightHandler = () => {
    if (titleType === 'YOUTUBE') {
      return (width * 9) / 16;
    } else {
      return ratio === 0 ? width * 0.75 : width * ratio;
    }
  };

  return (
    <Thumnail
      source={{
        uri: imageUrl,
      }}
      imgWidth={width}
      imgHeight={imgHeightHandler()}
      over={titleType === 'YOUTUBE'}
    />
  );
}

const Thumnail = styled(CustomImage)({});
