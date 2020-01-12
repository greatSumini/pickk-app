import React from 'react';
import {Animated} from 'react-native';
import styled from 'styled-components/native';

import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import IconButton from '@src/modules/atoms/buttons/icons/index';
import Space from '@src/modules/atoms/space';
import HeaderProps from './props';
import ItemFilter from '@src/components/ranking-list/filter';

export default function Header({
  title,
  icons,
  style,
  height,
  titlePadding,
  titleSize,
}: HeaderProps) {
  return (
    <AnimatedHeader style={{height, ...(style as object)}}>
      <TopContent>
        <AnimatedText style={{fontSize: titleSize, paddingTop: titlePadding}}>
          {title}
        </AnimatedText>
        <IconWrapper>{Icons(icons)}</IconWrapper>
      </TopContent>
      <ItemFilter />
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

const Row = styled.View({
  flexDirection: 'row',
});

const Icons = (icons: {Icon: React.ElementType; fill?: string}[]) => {
  return icons.map((item, index) => (
    <Row key={index}>
      <Space direction="ROW" level={2} />
      <IconButton
        Icon={item.Icon}
        fill={item.fill}
        size={rem(20)}
        onPress={() => {}}
      />
    </Row>
  ));
};
