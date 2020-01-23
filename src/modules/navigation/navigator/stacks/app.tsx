import {createDrawerNavigator} from 'react-navigation-drawer';

import Drawer from '../../drawer/main/index';
import BottomTab from './bottom-tab';
import rem from '@src/constants/rem';

import SearchScreen from '@src/components/search';
import ChannelScreen from '@src/components/channel';

const AppStack = createDrawerNavigator(
  {
    Home: {
      screen: BottomTab,
    },
    Search: {
      screen: SearchScreen,
    },
    Channel: {
      screen: ChannelScreen,
    },
  },
  {
    contentComponent: Drawer,
    drawerWidth: rem(260),
  },
);

export default AppStack;
