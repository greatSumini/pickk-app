import {NavigationTabProp} from 'react-navigation-tabs';
import {NavigationDrawerProp} from 'react-navigation-drawer';

type ScreenNavigationProps = {
  navigation: NavigationTabProp & NavigationDrawerProp;
};

export default ScreenNavigationProps;
