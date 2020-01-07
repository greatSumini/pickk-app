import {NavigationTabProp} from 'react-navigation-tabs';

type TabBarButtonProps = {
  title: string;
  route: string;
  Icon: React.ElementType;
  navigation: NavigationTabProp;
  currentRouteName: string;
};

export default TabBarButtonProps;
