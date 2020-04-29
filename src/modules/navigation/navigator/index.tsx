import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AppStack from './stacks/app';
import SplashScreen from '@src/components/splash';

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='App' headerMode='none'>
      <Stack.Screen name='Splash' component={SplashScreen} />
      <Stack.Screen name='App' component={AppStack} />
    </Stack.Navigator>
  </NavigationContainer>
);
