import {NavigationStackProp} from 'react-navigation-stack';

type postCardNarrowReviewProps = {
  id: number;
  title: string;
  name: string;
  time: number;
  viewCount: number;
  pickCount: number;
  titleType: string;
  titleImageUrl: string;
  titleYoutubeUrl: string;
  navigation: NavigationStackProp;
};

export default postCardNarrowReviewProps;
