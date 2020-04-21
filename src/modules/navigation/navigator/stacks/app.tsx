import {createDrawerNavigator} from 'react-navigation-drawer';

import Drawer from '../../drawer/main/index';
import BottomTab from './bottom-tab';
import rem from '@src/constants/rem';

import SearchScreen from '@src/components/search/index';

const AppStack = createDrawerNavigator(
  {
    Home: {
      screen: BottomTab,
    },
    Search: {
      screen: SearchScreen,
    },
  },
  {
    contentComponent: Drawer,
    drawerWidth: rem(260),
  },
);

export default AppStack;
