import HeaderThumbnailProps from './thumbnail/props';
import HeaderTitleProps from './title/props';
import {ProfileNodeProps} from '@src/modules/molecules/buttons/profile-node';

type PostViewHeaderProps = HeaderThumbnailProps &
  HeaderTitleProps &
  ProfileNodeProps;

export default PostViewHeaderProps;
