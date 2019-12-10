import {createStackNavigator} from 'react-navigation-stack';

import PostScreen from '../../../components/screens/post';

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
