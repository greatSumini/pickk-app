import {NavigationStackProp} from 'react-navigation-stack';

type PostCardNarrowLookProps = {
  id: number;
  title: string;
  name: string;
  time: number;
  titleType: string;
  titleImageUrl: string;
  titleYoutubeUrl: string;
  profileImageUrl: string;
  navigation: NavigationStackProp;
};

export default PostCardNarrowLookProps;
