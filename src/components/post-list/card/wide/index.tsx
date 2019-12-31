import React from 'react';
import styled from 'styled-components/native';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

import PostCardWideProps from './props';
import PostCardWideHeader from './header';
import PostCardWideThumnail from './card-thumnail';
import PostCardWideItemRow from './item-row';
import PostCardWideFooter from './footer';
import PostCardWideHeaderProps from './header/props';
import PostCardWideThumnailProps from './card-thumnail/props';
import PostCardWideItemRowProps from './item-row/props';
import PostCardWideFooterProps from './footer/props';
import rem from '@src/constants/rem';

export default function PostCardWide(props: PostCardWideProps) {
  const {
    // accountId,
    name,
    title,
    // content,
    time,
    profileImageUrl,
    pickCount,
    simpleItemList,
    commentCount,
    // id,
    titleType,
    titleImageUrl,
    titleYoutubeUrl,
    viewCount,
    // postType,
    // styleType,
    // saleEndDate,
  } = props;
  const headerProps: PostCardWideHeaderProps = {
    title,
    time,
    name,
    profileImageUrl,
  };
  const thumnailProps: PostCardWideThumnailProps = {
    titleImageUrl,
    titleType,
    titleYoutubeUrl,
  };
  const itemRowProps: PostCardWideItemRowProps = {
    simpleItemList,
  };
  const footerProps: PostCardWideFooterProps = {
    viewCount,
    pickCount,
    commentCount,
  };
  return (
    <Touchable>
      <Wrapper>
        <PostCardWideHeader {...headerProps} />
        <PostCardWideThumnail {...thumnailProps} />
        <PostCardWideItemRow {...itemRowProps} />
        <PostCardWideFooter {...footerProps} />
      </Wrapper>
    </Touchable>
  );
}

const TouchableCmp =
  Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

const Wrapper = styled.View({
  width: '100%',
  height: rem(390),
  backgroundColor: 'white',
  marginBottom: rem(4),
});

const Touchable = styled(TouchableCmp)({width: '100%', height: rem(390)});
