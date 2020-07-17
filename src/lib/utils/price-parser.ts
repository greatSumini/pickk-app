export const addCommaToNumber = (num: number) => {
  const numString = num.toString();
  let result = '';
  let i = 0;
  for (; i < numString.length - 1; i++) {
    result += numString[i];
    if ((numString.length - i - 1) % 3 == 0) result += ',';
  }
  result += numString[i];
  return result;
};

export const getDiscountRate = (
  originalPrice: number | string,
  salePrice: number | string,
) => {
  const result = (
    (1 - Number(salePrice) / Number(originalPrice)) *
    100
  ).toFixed(0);
  return result !== '0' ? result : null;
};
