import {createStackNavigator} from 'react-navigation-stack';

import PostScreen from '@src/components/post-list';
import PostViewScreen from '@src/components/post-view';

const PostStack = createStackNavigator(
  {
    Post: {
      screen: PostScreen,
    },
    PostView: {
      screen: PostViewScreen,
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
