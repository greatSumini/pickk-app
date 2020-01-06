import {createDrawerNavigator} from 'react-navigation-drawer';

import Drawer from '../../drawer/main/index';
import rem from '@src/constants/rem';
import BottomTab from './bottom-tab';

const AppStack = createDrawerNavigator(
  {
    Home: {
      screen: BottomTab,
    },
  },
  {
    contentComponent: Drawer,
    drawerWidth: rem(260),
  },
);

export default AppStack;
