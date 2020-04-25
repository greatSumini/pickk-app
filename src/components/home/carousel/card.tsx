import React from 'react';
import styled from 'styled-components/native';
import {ImageSourcePropType} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Text from '@src/modules/atoms/text';
import colors from '@src/constants/colors';
import Space from '@src/modules/atoms/space';
import Line from '@src/modules/atoms/line';
import TouchableCmp from '@src/modules/atoms/touchable-component';

import {width} from '@src/constants/dimensions';
import rem from '@src/constants/rem';

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

const Touchable = styled(TouchableCmp)({});

const StyledImageBackground = styled.ImageBackground({
  width,
  height: (width / 3) * 2,
  paddingTop: rem(110),
  paddingLeft: rem(20),
});
