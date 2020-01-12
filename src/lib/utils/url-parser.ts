import {addSizeToImagePath, ImageSize} from './image-size-parser';

export const imageUriHandler = (
  titleType: string,
  titleImageUrl: string,
  titleYoutubeUrl: string,
  size: ImageSize,
) => {
  if (titleType === 'IMAGE') {
    return addSizeToImagePath(titleImageUrl, size);
  } else {
    return `https://img.youtube.com/vi/${titleYoutubeUrl}/sddefault.jpg`;
  }
};
