export const imageUriHandler = (
  titleType: string,
  titleImageUrl: string,
  titleYoutubeUrl: string,
) => {
  if (titleType === 'IMAGE') {
    return titleImageUrl;
  } else {
    return `https://img.youtube.com/vi/${titleYoutubeUrl}/sddefault.jpg`;
  }
};
