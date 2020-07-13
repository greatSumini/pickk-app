import React from 'react';
import styled from 'styled-components/native';
import {ImageSourcePropType} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Text, Line, Space, Touchable} from '@src/modules/atoms';

import {width, colors, rem} from '@src/constants';

export type HomeCarouselCardProps = {
  source: ImageSourcePropType;
  title: string;
  description: string;
  postId: number;
};

export default function HomeCarouselCard({
  source,
  title,
  description,
  postId,
}: HomeCarouselCardProps) {
  const navigation = useNavigation();

  return (
    <Touchable onPress={() => navigation.navigate('PostView', {id: postId})}>
      <StyledImageBackground source={source}>
        <Text color={colors.white} level={2}>
          {title}
        </Text>
        <Text color={colors.white} level={10} fontWeight='medium'>
          {description}
        </Text>
        <Space />
        <Line length={40} style={{marginLeft: rem(2)}} />
      </StyledImageBackground>
    </Touchable>
  );
}

const StyledImageBackground = styled.ImageBackground({
  width,
  height: (width / 3) * 2,
  paddingTop: rem(110),
  paddingLeft: rem(20),
});
