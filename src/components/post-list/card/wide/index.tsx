import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import TouchableCmp from '@src/modules/atoms/touchable-component';
import PostCardWideProps from './props';
import PostCardWideHeader from './header';
import PostCardWideThumbnail from './card-thumbnail';
import PostCardWideItemRow from './item-row';
import PostCardWideFooter from './footer';
import PostCardWideHeaderProps from './header/props';
import PostCardWideThumbnailProps from './card-thumbnail/props';
import PostCardWideItemRowProps from './item-row/props';
import PostCardWideFooterProps from './footer/props';

function PostCardWide(props: PostCardWideProps) {
  const headerProps: PostCardWideHeaderProps = props;
  const thumbnailProps: PostCardWideThumbnailProps = props;
  const itemRowProps: PostCardWideItemRowProps = props;
  const footerProps: PostCardWideFooterProps = props;

  const navigation = useNavigation();

  return (
    <Touchable
      onPress={() =>
        navigation.navigate('PostView', {
          id: props.id,
        })
      }>
      <Wrapper>
        <PostCardWideHeader {...headerProps} />
        <PostCardWideThumbnail {...thumbnailProps} />
        <PostCardWideItemRow {...itemRowProps} />
        <PostCardWideFooter {...footerProps} />
      </Wrapper>
    </Touchable>
  );
}

export default React.memo(PostCardWide, (prev, next) => prev.id === next.id);

const Wrapper = styled.View({
  width: '100%',
  backgroundColor: 'white',
  borderBottomWidth: rem(4),
  borderBottomColor: colors.lightGrey,
});

const Touchable = styled(TouchableCmp)({flex: 1, minHeight: rem(200)});
