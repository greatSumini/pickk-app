import {createStackNavigator} from 'react-navigation-stack';

import PostScreen from '@src/components/post-list';

const PostStack = createStackNavigator(
  {
    Post: {
      screen: PostScreen,
    },
  },
  {
    initialRouteName: 'Post',
    headerMode: 'none',
  },
);

export default PostStack;
