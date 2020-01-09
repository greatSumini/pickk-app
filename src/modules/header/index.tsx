import React from 'react';
import {Animated} from 'react-native';
import styled from 'styled-components/native';

import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import IconButton from '@src/modules/atoms/buttons/icons/index';
import Space from '@src/modules/atoms/space';
import Text from '@src/modules/atoms/text';
import TouchableCmp from '@src/modules/atoms/touchable-component';
import HeaderProps from './props';
import {HeaderControlType} from './props';
import PostListFilter from '@src/components/post-list/filter';

export default function Header({
  title,
  items,
  icons,
  style,
  height,
  titlePadding,
  titleSize,

  postTypeControl,
}: HeaderProps) {
  return (
    <AnimatedHeader style={{height, ...(style as object)}}>
      <TopContent>
        <AnimatedText style={{fontSize: titleSize, paddingTop: titlePadding}}>
          {title}
        </AnimatedText>
        <IconWrapper>{Icons(icons)}</IconWrapper>
      </TopContent>
      <NavLabel>{LabelItem(items, postTypeControl)}</NavLabel>
      <PostListFilter postType={postTypeControl.value} />
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

const NavLabel = styled.View({
  flexDirection: 'row',
  width: '100%',
  height: rem(37),
  borderBottomWidth: 1,
  borderBottomColor: colors.lightGrey,
});

const TouchableLabel = styled(TouchableCmp)({
  flex: 1,
});

const Label = styled.View((props: {selected: boolean}) => ({
  flex: 1,
  paddingTop: rem(7),
  paddingBottom: rem(10),
  alignItems: 'center',
  borderBottomWidth: 1,
  borderBottomColor: props.selected ? colors.primary : 'transparent',
}));
const Row = styled.View({
  flexDirection: 'row',
});
const LabelItem = (
  items: {label: string}[],
  postTypeControl: HeaderControlType<string>,
) => {
  return items.map((item, index) => {
    return (
      <TouchableLabel
        key={index}
        onPress={() => {
          postTypeControl.setValue(item.label);
        }}>
        <Label selected={item.label === postTypeControl.value}>
          <Text
            level={2}
            color={
              item.label === postTypeControl.value
                ? colors.primary
                : colors.secondary
            }>
            {item.label}
          </Text>
        </Label>
      </TouchableLabel>
    );
  });
};

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
