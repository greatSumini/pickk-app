import {createDrawerNavigator} from 'react-navigation-drawer';

import HomeScreen from '@src/components/home';

import Drawer from '../../drawer';

const HomeStack = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
  },
  {
    contentComponent: Drawer,
  },
);

export default HomeStack;