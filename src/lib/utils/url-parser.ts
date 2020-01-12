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

export const addSizeToFilename = (filename, size) => {
  if (!filename) {
    return filename;
  }
  const _fileLen = filename.length;
  const _lastDot = filename.lastIndexOf('.');

  const _fileName = filename.substring(0, _lastDot);
  const _fileExt = filename.substring(_lastDot, _fileLen);

  return `${_fileName}_${size}${_fileExt}`;
};

export const xsmall = 'xsmall';
export const small = 'small';
export const medium = 'medium';
export const large = 'large';
