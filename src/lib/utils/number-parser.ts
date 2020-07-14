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
    return 0;
  }
  return result;
};

export const addWonToNumber = (num: number) => {
  return addCommaToNumber(num) + '원';
};

export const addLeadingZeros = (num: number, length: number) => {
  const result = num.toString();
  if (result.length >= length) {
    return result;
  }
  return new Array(length - result.length).fill('0').toString() + result;
};

export const getDiscountRate = (
  originalPrice: number | string,
  salePrice: number | string,
) => {
  if (Number(originalPrice) === 0) {
    return null;
  }
  const result = (
    (1 - Number(salePrice) / Number(originalPrice)) *
    100
  ).toFixed(0);
  return result !== '0' ? result : null;
};

export const formatNumber = (num) => {
  if (num < 1000) {
    return num;
  }
  if (num < 10000) {
    return (num / 1000).toFixed(1) + '천';
  }
  return (num / 10000).toFixed(Math.max(0, 7 - Math.log10(num))) + '만';
};
