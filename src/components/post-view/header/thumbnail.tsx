import React from 'react';
import {PixelRatio} from 'react-native';
import YouTube from 'react-native-youtube';

import {Image} from '@src/modules/atoms';

import {width} from '@src/constants';
import {addSizeToImagePath, ImageSize} from '@src/lib/utils/image-size-parser';
import {RecommendPost} from '@src/modules/types/RecommendPost';

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
