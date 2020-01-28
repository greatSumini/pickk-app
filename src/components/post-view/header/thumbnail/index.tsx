import React, {useState} from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';
import Youtube from 'react-native-youtube';
import env from 'react-native-config';

import HeaderThumbnailProps from './props';
import {width} from '@src/constants/dimensions';
import CustomImage from '@src/modules/atoms/img';

export default function HeaderThumbnail({
  type,
  src,
  videoId,
}: HeaderThumbnailProps) {
  const [height, setHeight] = useState((width * 9) / 16);

  if (type === 'IMAGE') {
    Image.getSize(
      src,
      (imgWidth, imgHeight) => {
        setHeight((width * imgHeight) / imgWidth);
      },
      err => {
        console.log(err);
      },
    );
  }

  return (
    <Wrapper>
      {type === 'YOUTUBE' && (
        <YoutubeWrapper>
          <Youtube
            videoId={videoId}
            style={{width, height}}
            apiKey={env.YOUTUBE_API_KEY}
          />
        </YoutubeWrapper>
      )}
      {type === 'IMAGE' && (
        <CustomImage source={{uri: src}} imgHeight={height} imgWidth={width} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.View({
  width: '100%',
  minHeight: (width * 9) / 16,
});
const YoutubeWrapper = styled.View({
  flex: 1,
  backgroundColor: 'red',
});
