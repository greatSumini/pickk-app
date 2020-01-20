import {createStackNavigator} from 'react-navigation-stack';

import PostScreen from '@src/components/post-list';
import ChannelScreen from '@src/components/channel';

const PostStack = createStackNavigator(
  {
    Post: {
      screen: PostScreen,
    },
    Channel: {
      screen: ChannelScreen,
    },
  },
  {
    initialRouteName: 'Post',
    headerMode: 'none',
  },
);
PostStack.navigationOptions = navigation => {
  if (navigation.navigation.state.index === 1) {
    return {tabBarVisible: false};
  }
};
export default PostStack;
