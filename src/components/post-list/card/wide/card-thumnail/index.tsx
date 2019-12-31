import React from 'react';
import styled from 'styled-components/native';

import PostCardWideThumnailProps from './props';
import rem from '@src/constants/rem';

export default function PostCardWideThumnail(props: PostCardWideThumnailProps) {
  const {titleType, titleImageUrl, titleYoutubeUrl} = props;

  return (
    <Wrapper>
      {titleType === 'IMAGE' ? (
        <Thumnail source={{uri: titleImageUrl}} />
      ) : (
        <Thumnail
          source={{
            uri: `https://img.youtube.com/vi/${titleYoutubeUrl}/sddefault.jpg`,
          }}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.View({
  width: '100%',
  height: rem(203),
});

const Thumnail = styled.Image({
  width: '100%',
  height: '100%',
});
