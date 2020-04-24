import FooterProps from './footer/props';
import HeaderProps from './header/props';
import ItemRowProps from './item-row/props';
import ThumbnailProps from './card-thumbnail/props';

type PostCardWideProps = FooterProps &
  HeaderProps &
  ItemRowProps &
  ThumbnailProps & {
    id: number;
  };

export default PostCardWideProps;
