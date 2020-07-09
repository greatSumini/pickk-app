import {addSizeToImagePath, ImageSize} from './image-size-parser';

export const imageUriHandler = (
  thumbnailType: string,
  thumbnail: string,
  youtubeVideoId: string,
  size: ImageSize,
) => {
  if (thumbnailType === 'IMAGE') {
    return addSizeToImagePath(thumbnail, size);
  } else {
    return `https://img.youtube.com/vi/${youtubeVideoId}/sddefault.jpg`;
  }
};
