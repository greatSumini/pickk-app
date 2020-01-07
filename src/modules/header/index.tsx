import React from 'react';
import {Animated} from 'react-native';
import styled from 'styled-components/native';

import FilterIcon from '@src/assets/icons/filter';
import ThumsUpIcon from '@src/assets/icons/thums-up';
import WideIcon from '@src/assets/icons/wide';
import NarrowLookIcon from '@src/assets/icons/narrow-look';
import NarrowReviewIcon from '@src/assets/icons/narrow-review';
import {WIDE, NARROW, REVIEW} from '@src/components/post-list/index';
import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import IconButton from '@src/modules/atoms/buttons/icons/index';
import Space from '@src/modules/atoms/space';
import Text from '@src/modules/atoms/text';
import TouchableCmp from '@src/modules/atoms/touchable-component';
import IconText from '@src/modules/molecules/icon-text';
import HeaderProps from './props';
import {HeaderControlType} from './props';

export default function Header({
  title,
  items,
  icons,
  style,
  height,
  titlePadding,
  titleSize,
  viewControl,
  postTypeControl,
  filterControl,
  recommendControl,
}: HeaderProps) {
  const filterColor = filterControl.value ? colors.white : colors.primary;
  const filterBackgroundColor = filterControl.value
    ? colors.primary
    : colors.white;
  const recommedIconColor = recommendControl.value
    ? colors.primary
    : colors.white;
  const recommedTextColor = recommendControl.value
    ? colors.white
    : colors.primary;
  const ViewFilterIcon =
    viewControl.value === WIDE
      ? WideIcon
      : postTypeControl.value === REVIEW
      ? NarrowReviewIcon
      : NarrowLookIcon;

  return (
    <AnimatedHeader style={{height, ...(style as object)}}>
      <TopContent>
        <AnimatedText style={{fontSize: titleSize, paddingTop: titlePadding}}>
          {title}
        </AnimatedText>
        <IconWrapper>{Icons(icons)}</IconWrapper>
      </TopContent>
      <NavLabel>{LabelItem(items, postTypeControl)}</NavLabel>
      <FilterWrapper>
        <FilterItem
          onPress={() => {
            filterControl.setValue(prev => !prev);
          }}
          style={{backgroundColor: filterBackgroundColor}}>
          <IconText
            Icon={FilterIcon}
            width={rem(11)}
            height={rem(9)}
            content="필터"
            fill={filterColor}
            textColor={filterColor}
            level={0}
          />
        </FilterItem>
        <Space direction="ROW" />
        <FilterItem
          onPress={() => {
            recommendControl.setValue(prev => !prev);
          }}
          style={{
            backgroundColor: recommedIconColor,
          }}>
          <IconText
            Icon={ThumsUpIcon}
            width={rem(12)}
            height={rem(12)}
            content="10추글"
            fillOut={recommedTextColor}
            fillLeft={recommedIconColor}
            fillRight={recommedIconColor}
            textColor={recommedTextColor}
            level={0}
          />
          <Space direction="ROW" />
          <Text color={recommedTextColor}>
            {recommendControl.value ? 'OFF' : 'ON'}
          </Text>
        </FilterItem>
        <IconButton
          Icon={ViewFilterIcon}
          size={rem(18)}
          onPress={() => {
            viewControl.setValue(viewControl.value === WIDE ? NARROW : WIDE);
          }}
          fill={colors.viewFilter}
          style={{position: 'absolute', right: rem(20)}}
        />
      </FilterWrapper>
    </AnimatedHeader>
  );
}

const FilterWrapper = styled.View({
  width: '100%',
  height: rem(36),
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: rem(12),
  paddingRight: rem(16),
  backgroundColor: colors.white,
  borderBottomWidth: rem(1),
  borderBottomColor: colors.lightGrey,
});

const FilterItem = styled.TouchableOpacity({
  paddingVertical: rem(4),
  paddingHorizontal: rem(8),
  borderRadius: rem(20),
  borderWidth: rem(1),
  borderColor: colors.lightGrey,
  flexDirection: 'row',
  alignItems: 'center',
});

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
  position: 'absolute',
  top: 0,
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
