import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AppStack from './stacks/app';

const AppNavigator = createSwitchNavigator(
  {
    /*
    Loading: {
      screen: LoadingScreen,
    },*/
    App: {
      screen: AppStack,
    },
  },
  {
    initialRouteName: 'App',
  },
);

export default createAppContainer(AppNavigator);
