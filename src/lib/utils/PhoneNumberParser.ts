export const addDashToPhoneNumber = (value: string | number) => {
  const numString = value.toString().replace(/[^0-9]/g, '');

  const secondIndex = numString.length > 10 ? 7 : 6;
  const result = [
    numString.slice(0, 3),
    numString.slice(3, secondIndex),
    numString.slice(secondIndex, numString.length),
  ]
    .filter((v) => v !== '')
    .join('-');
  return result.slice(0, 13);
};

export const removeCountryCode = (value: string | number) => {
  const number = value.toString().replace(/[^0-9]/g, '');

  if (number.slice(0, 2) !== '82') {
    return value.toString();
  }
  return addDashToPhoneNumber('0' + number.slice(2, number.length));
};
