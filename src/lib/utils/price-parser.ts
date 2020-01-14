export const addCommaToNumber = (num: number) => {
  const numString = num.toString();
  let result = '';
  let i = 0;
  for (; i < numString.length - 1; i++) {
    result += numString[i];
    if ((numString.length - i - 1) % 3 == 0) result += ',';
  }
  result += numString[i];
  if (result === '0') {
    return null;
  }
  return result;
};
