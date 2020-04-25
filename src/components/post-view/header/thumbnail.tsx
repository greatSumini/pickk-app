import React from 'react';
import YouTube from 'react-native-youtube';

import {RecommendPost} from '@src/modules/types/RecommendPost';
import Image from '@src/modules/atoms/img';
import {addSizeToImagePath, ImageSize} from '@src/lib/utils/image-size-parser';
import {PixelRatio} from 'react-native';
import {width} from '@src/constants/dimensions';

export type PostViewThumbnailProps = Pick<
  RecommendPost,
  'titleType' | 'titleImageUrl' | 'titleYoutubeUrl'
>;

export default function PostViewThumbnail({
  titleType,
  titleImageUrl,
  titleYoutubeUrl,
}: PostViewThumbnailProps) {
  return (
    <>
      {titleType === 'IMAGE' && (
        <Image
          source={{uri: addSizeToImagePath(titleImageUrl, ImageSize.Medium)}}
          style={{
            height: width,
          }}
          over
        />
      )}
      {titleType === 'YOUTUBE' && (
        <YouTube
          videoId={titleYoutubeUrl}
          style={{
            width: '100%',
            height: PixelRatio.roundToNearestPixel(width / (16 / 9)),
            alignSelf: 'stretch',
          }}
          play
        />
      )}
    </>
  );
}
