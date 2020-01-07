import React from 'react';
import {Button} from 'react-native';

import Text from '@src/modules/atoms/text';
import HomeScreenProps from './props';

export default function HomeScreen(props: HomeScreenProps) {
  return (
    <Button
      title="Drawer"
      onPress={() => {
        props.navigation.toggleDrawer();
      }}
    />
  );
}
