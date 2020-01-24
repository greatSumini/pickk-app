import FooterProps from './footer/props';
import HeaderProps from './header/props';
import ItemRowProps from './item-row/props';
import ThumbnailProps from './card-thumbnail/props';
import {NavigationStackProp} from 'react-navigation-stack';

type PostCardWideProps = FooterProps &
  HeaderProps &
  ItemRowProps &
  ThumbnailProps & {id: number; navigation: NavigationStackProp};

export default PostCardWideProps;
