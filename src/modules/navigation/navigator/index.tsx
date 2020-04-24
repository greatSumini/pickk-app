import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AppStack from './stacks/app';
import SplashScreen from '@src/components/splash';

const AppNavigator = createSwitchNavigator(
  {
    Splash: {
      screen: SplashScreen,
    },
    App: {
      screen: AppStack,
    },
  },
  {
    initialRouteName: 'Splash',
  },
);

export default createAppContainer(AppNavigator);
