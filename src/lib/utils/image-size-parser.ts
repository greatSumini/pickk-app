export const addSizeToImagePath = (url: string, size: ImageSize): string => {
  if (!url || !size) {
    return url;
  }
  const _urlLen = url.length;
  const _lastSlash = url.lastIndexOf('/');

  const _path = url.substring(0, _lastSlash);
  const _filename = url.substring(_lastSlash + 1, _urlLen);

  return `${_path}/${size}/${_filename}`;
};

export type ImageSize = 'avatar' | 50 | 128 | 160 | 256 | 512 | 1024 | 1600;
