import React from 'react';
import styled from 'styled-components/native';

import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import TouchableCmp from '@src/modules/atoms/touchable-component';
import PostCardWideProps from './props';
import PostCardWideHeader from './header';
import PostCardWideThumnail from './card-thumnail';
import PostCardWideItemRow from './item-row';
import PostCardWideFooter from './footer';
import PostCardWideHeaderProps from './header/props';
import PostCardWideThumnailProps from './card-thumnail/props';
import PostCardWideItemRowProps from './item-row/props';
import PostCardWideFooterProps from './footer/props';

export default function PostCardWide(props: PostCardWideProps) {
  const headerProps: PostCardWideHeaderProps = props;
  const thumnailProps: PostCardWideThumnailProps = props;
  const itemRowProps: PostCardWideItemRowProps = props;
  const footerProps: PostCardWideFooterProps = props;

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

const Wrapper = styled.View({
  width: '100%',
  height: rem(390),
  backgroundColor: 'white',
  marginBottom: rem(4),
  borderBottomWidth: rem(4),
  borderBottomColor: colors.notify,
});

const Touchable = styled(TouchableCmp)({width: '100%', height: rem(390)});
