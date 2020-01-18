import React from 'react';

import HomeScreenProps from './props';
import HomeHeader from './header';
import HomeCarousel from './carousel';

export default function HomeScreen(props: HomeScreenProps) {
  return (
    <>
      <HomeHeader toggleDrawer={props.navigation.toggleDrawer} />
      <HomeCarousel />
    </>
  );
}
