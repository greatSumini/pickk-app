export const addSizeToImagePath = (path: string, size: ImageSize) => {
  if (!path) {
    return path;
  }
  const _fileLen = path.length;
  const _lastDot = path.lastIndexOf('.');

  const _path = path.substring(0, _lastDot);
  const _fileExt = path.substring(_lastDot, _fileLen);

  return `${_path}${size}${_fileExt}`;
};

export enum ImageSize {
  Xsmall = '_xsmall',
  Small = '_small',
  Medium = '_medium',
  Large = '_large',
  Raw = '',
}
