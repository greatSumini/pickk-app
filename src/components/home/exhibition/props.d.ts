import HeaderProps from './header/props';
import RecommenLookProps from './recommend-look/props';
import NewPostProps from './new-post/props';

type WithExhibitionProps = {
  header: HeaderProps;
  content: RecommenLookProps | NewPostProps;
};

export default WithExhibitionProps;
