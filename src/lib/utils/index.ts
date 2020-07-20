export * from './image-size-parser';
export * from './price-parser';
export * from './time-parser';
export * from './url-parser';
export * from './PhoneNumberParser';

export const isEqualObject = (a, b): boolean => {
  if (!a && !b) return true;
  if (!a || !b) return false;
  return (
    Object.keys(a).length === Object.keys(b).length &&
    Object.keys(a).every((key) => a[key] === b[key])
  );
};

export const isEqualObjectLower = (a, b): boolean => {
  if (!a && !b) return true;
  if (!a || !b) return false;
  const newA = getLowerObject(a);
  const newB = getLowerObject(b);
  return (
    Object.keys(newA).length === Object.keys(newB).length &&
    Object.keys(newA).every((key) => newA[key] === newB[key])
  );
};

export const isEqualSizeObject = (a, b): boolean => {
  if (!a && !b) return true;
  if (!a || !b) return false;
  return Object.keys(a).length === Object.keys(b).length;
};

export const isEqualArray = (a: any[], b: any[], compare?): boolean => {
  if (!a && !b) return true;
  if (!a || !b) return false;
  if (a.length !== b.length) {
    return false;
  }
  return a.every((_, i) => (compare ? compare(a[i], b[i]) : a[i] === b[i]));
};

export const getLowerObject = (obj: {[propName: string]: any}) => {
  if (!obj) return {};
  return Object.keys(obj).reduce((acc, key) => {
    return {...acc, [key.toLowerCase()]: obj[key]};
  }, {});
};

const Util = {
  isEqualObject,
  isEqualObjectLower,
  isEqualSizeObject,
  isEqualArray,
};

export default Util;
