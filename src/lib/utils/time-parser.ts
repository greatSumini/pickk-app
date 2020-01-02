export const stringifyPassedTime = input => {
  const howmuch = [
    [60, '초'],
    [60, '분'],
    [24, '시간'],
    [31, '일'],
    [12, '개월'],
  ];

  const nowTime: number = Date.now();
  const inputTime = new Date(Number(input)).getTime();
  let passedSecond: number = (nowTime - inputTime) / 1000;
  passedSecond.toFixed(0);

  for (let i = 0; i < howmuch.length; ++i) {
    if (passedSecond < Number(howmuch[i][0])) {
      return passedSecond.toFixed(0) + howmuch[i][1] + ' 전';
    }
    passedSecond /= Number(howmuch[i][0]);
  }
  return passedSecond.toFixed(0) + '년 전';
};

export const isToday = (inputDate: Date) => {
  const nowDate = new Date(Date.now());

  return (
    nowDate.getFullYear() === inputDate.getFullYear() &&
    nowDate.getMonth() === inputDate.getMonth() &&
    nowDate.getDate() === inputDate.getDate()
  );
};

export const addLeadingZeros = (num, length) => {
  let result = num.toString();
  if (result.length >= length) {
    return result;
  }
  return new Array(length - result.length).fill('0').toString() + result;
};

export const parseTime = input => {
  const inputDate = new Date(Number(input));

  const year = inputDate.getFullYear();
  const month = addLeadingZeros(inputDate.getMonth() + 1, 2);
  const date = addLeadingZeros(inputDate.getDate(), 2);
  const hours = addLeadingZeros(inputDate.getHours(), 2);
  const minutes = addLeadingZeros(inputDate.getMinutes(), 2);

  if (isToday(inputDate)) {
    return `${hours}:${minutes}`;
  }
  return `${year}.${month}.${date}`;
};
