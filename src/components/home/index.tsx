import React from 'react';
import {NavigationDrawerProp} from 'react-navigation-drawer';
import {NavigationTabProp} from 'react-navigation-tabs';

import HomeHeader from './header';
import HomeCarousel from './carousel';
import HomeExhibition from './exhibition';
import QuickMenu from './exhibition/quick-menu';

export type HomeScreenProps = {
  navigation: NavigationDrawerProp & NavigationTabProp;
};

export default function HomeScreen(props: HomeScreenProps) {
  return (
    <>
      <HomeHeader toggleDrawer={props.navigation.toggleDrawer} />
      <HomeCarousel />
      <HomeExhibition
        title='핔 200프로 이용하기'
        description='핵심만 모았다!'
        route={null}>
        <QuickMenu />
      </HomeExhibition>
    </>
  );
}
