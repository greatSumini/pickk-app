import React from 'react';
import {ScrollView} from 'react-native';

import HomeHeader from './header';
import HomeCarousel from './carousel';
import RecommendLook from './exhibition/recommend-look';
import HomeScreenProps from './props';
import {Space} from '@src/modules/atoms';
import Section from '@src/modules/molecules/section';

export default function HomeScreen(props: HomeScreenProps) {
  return (
    <ScrollView>
      <HomeHeader
        toggleDrawer={props.navigation.toggleDrawer}
        routeToSearch={() => {
          props.navigation.navigate('Search');
        }}
      />
      <HomeCarousel />
      {/*<HomeExhibition title='핔 200프로 이용하기' description='핵심만 모았다!'>
        <QuickMenu />
      </HomeExhibition>*/}
      <Section title='오늘의 추천 LOOK' route={'OrderList'}>
        <RecommendLook />
      </Section>
      <Space level={2} />
    </ScrollView>
  );
}
