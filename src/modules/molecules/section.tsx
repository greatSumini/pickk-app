import React from 'react';
import styled from 'styled-components/native';
import {StyleProp, ViewStyle} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import ChevronRightIcon from '@src/assets/icons/chevron/right';
import {Text, Row, Col, Space, Line, Touchable} from '@src/modules/atoms';
import {MIDDLE_GREY, rem} from '@src/constants';

export enum SectionSize {
  Small = 'SMALL',
  Medium = 'MEDIUM',
  Large = 'LARGE',
}

const TITLE_LEVEL = {
  [SectionSize.Small]: 2,
  [SectionSize.Medium]: 4,
  [SectionSize.Large]: 6,
};

export type SectionProps = {
  children: any;
  title: string;
  route?: string;
  style?: StyleProp<ViewStyle>;
  space?: number;
  noLine?: boolean;
  size?: SectionSize;
};

export default function Section({
  title,
  children,
  route,
  style,
  space,
  noLine = true,
  size = SectionSize.Large,
}: SectionProps) {
  const navigation = useNavigation();
  const titleLevel = TITLE_LEVEL[size];

  return (
    <>
      <Wrapper style={style}>
        <TitleWrapper>
          <Text level={titleLevel} fontWeight='bold'>
            {title}
          </Text>
          {route && (
            <RouteWrapper
              onPress={() => {
                navigation.navigate(route);
              }}>
              <>
                <Text level={1} fontWeight='medium' color={MIDDLE_GREY}>
                  전체보기
                </Text>
                <ChevronRightIcon />
              </>
            </RouteWrapper>
          )}
        </TitleWrapper>
        <Space level={1} size={space} />
      </Wrapper>
      {children}
      <Space size={8} />
      {!noLine && <Line level={1} />}
    </>
  );
}

const Wrapper = styled(Col)({
  alignItems: 'center',
  maxWidth: rem(360),
  paddingVertical: rem(8),
  paddingHorizontal: rem(16),
});

const TitleWrapper = styled(Row)`
  justify-content: space-between;
  width: ${rem(328)};
  align-items: flex-end;
`;

const RouteWrapper = styled(Touchable)`
  flex-direction: row;
`;
