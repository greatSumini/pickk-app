import React from 'react';
import {ImageBackground, ImageSourcePropType} from 'react-native';

import Text from '@src/modules/atoms/text';
import {width} from '@src/constants/dimensions';
import colors from '@src/constants/colors';
import Space from '@src/modules/atoms/space';
import rem from '@src/constants/rem';
import Line from '@src/modules/atoms/line';

export type HomeCarouselCardProps = {
  source: ImageSourcePropType;
  title: string;
  description: string;
};

export default function HomeCarouselCard({
  source,
  title,
  description,
}: HomeCarouselCardProps) {
  return (
    <ImageBackground
      source={source}
      style={{
        width,
        height: (width / 3) * 2,
        paddingTop: rem(110),
        paddingLeft: rem(20),
      }}>
      <Text color={colors.white} level={2}>
        {title}
      </Text>
      <Text color={colors.white} level={10} fontWeight='medium'>
        {description}
      </Text>
      <Space />
      <Line length={40} style={{marginLeft: rem(2)}} />
    </ImageBackground>
  );
}
