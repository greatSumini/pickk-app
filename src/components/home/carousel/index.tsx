import React, {useState} from 'react';
import styled from 'styled-components/native';
import Carousel from 'react-native-snap-carousel';

import HomeCarouselCard, {HomeCarouselCardProps} from './card';
import CarouselIndicator from '@src/modules/carousel/indicator';
import {width} from '@src/constants/dimensions';
import rem from '@src/constants/rem';

export default function HomeCarousel() {
  const [current, setCurrent] = useState(0);

  return (
    <Wrapper>
      <Carousel
        loop
        data={entries}
        renderItem={({item, index}) => (
          <HomeCarouselCard key={index} {...item} />
        )}
        sliderWidth={width}
        itemWidth={width}
        inactiveSlideOpacity={0.6}
        inactiveSlideScale={1}
        onSnapToItem={setCurrent}
        autoplay
        autoplayDelay={10000}
        autoplayInterval={5000}
      />
      <CarouselIndicator
        current={current}
        length={entries.length}
        style={{position: 'absolute', right: rem(20), bottom: rem(12)}}
      />
    </Wrapper>
  );
}

const entries: HomeCarouselCardProps[] = [
  {
    source: require('@src/assets/images/homeCarousel/0.jpg'),
    title: `한번 사면 매일입는`,
    description: `진진호의 인생팬츠는?`,
  },
  {
    source: require('@src/assets/images/homeCarousel/1.jpg'),
    title: `롱패딩은 이제 그만`,
    description: `숏패딩 전격비교`,
  },
  {
    source: require('@src/assets/images/homeCarousel/2.jpg'),
    title: `옷 잘입는 애들은 다 있는`,
    description: `나만의 포인트 바지 고르기`,
  },
  {
    source: require('@src/assets/images/homeCarousel/3.jpg'),
    title: `아직도 인생니트를 못찾은 너,`,
    description: `헤비니트 끝판왕`,
  },
];

const Wrapper = styled.View({
  width: '100%',
  position: 'relative',
});
