import React from 'react';
import {Animated} from 'react-native';
import styled from 'styled-components/native';

import HeaderProps from './props';
import Icons from './header-icons';
import colors from '@src/constants/colors';
import rem from '@src/constants/rem';

export default function Header({
  title,
  icons,
  style,
  height,
  titlePadding,
  titleSize,
  children,
}: HeaderProps) {
  return (
    <AnimatedHeader style={{height, ...(style as object)}}>
      <TopContent>
        <AnimatedText style={{fontSize: titleSize, paddingTop: titlePadding}}>
          {title}
        </AnimatedText>
        <IconWrapper>{Icons(icons)}</IconWrapper>
      </TopContent>
      {children && children}
    </AnimatedHeader>
  );
}

const IconWrapper = styled.View({
  paddingTop: rem(12),
  flexDirection: 'row',
});

const Title = styled.Text({
  fontWeight: 'bold',
});

const TopContent = styled.View({
  width: '100%',
  paddingHorizontal: rem(20),
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const Wrapper = styled.View({
  width: '100%',
  justifyContent: 'space-between',
  backgroundColor: colors.white,
  zIndex: 1,
});

const AnimatedHeader = Animated.createAnimatedComponent(Wrapper);
const AnimatedText = Animated.createAnimatedComponent(Title);
