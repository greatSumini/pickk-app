import React from 'react';
import {ScrollView} from 'react-native';
import {NavigationDrawerProp} from 'react-navigation-drawer';
import {NavigationTabProp} from 'react-navigation-tabs';

import HomeHeader from './header';
import HomeCarousel from './carousel';
import HomeExhibition from './exhibition';
import QuickMenu from './exhibition/quick-menu';
import RecommendLook from './exhibition/recommend-look';
import Space from '@src/modules/atoms/space';

export type HomeScreenProps = {
  navigation: NavigationDrawerProp & NavigationTabProp;
};

export default function HomeScreen(props: HomeScreenProps) {
  return (
    <ScrollView>
      <HomeHeader toggleDrawer={props.navigation.toggleDrawer} />
      <HomeCarousel />
      <HomeExhibition title='핔 200프로 이용하기' description='핵심만 모았다!'>
        <QuickMenu />
      </HomeExhibition>
      <HomeExhibition
        title='오늘의 추천 LOOK'
        description='코디 꿀팁 대방출!'
        route={'sumin'}>
        <RecommendLook />
      </HomeExhibition>
      <Space level={2} />
    </ScrollView>
  );
}
