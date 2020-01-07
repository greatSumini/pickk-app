import {NavigationDrawerProp} from 'react-navigation-drawer';
import {NavigationTabProp} from 'react-navigation-tabs';

type HomeScreenProps = {
  navigation: NavigationDrawerProp & NavigationTabProp;
};

export default HomeScreenProps;
