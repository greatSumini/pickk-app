export const stringifyPassedTime = input => {
  const timeUnits = [
    {amount: 60, name: '초'},
    {amount: 60, name: '분'},
    {amount: 24, name: '시간'},
    {amount: 31, name: '일'},
    {amount: 12, name: '개월'},
  ];

  const nowTime: number = Date.now();
  const inputTime = new Date(Number(input)).getTime();
  let passedSecond: number = (nowTime - inputTime) / 1000;
  passedSecond.toFixed(0);

  for (const timeUnit of timeUnits) {
    const {amount, name} = timeUnit;
    if (passedSecond < amount) {
      return passedSecond.toFixed(0) + name + ' 전';
    }
    passedSecond /= amount;
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

export const addLeadingZeros = (num: number, length: number) => {
  const numString = num.toString();
  if (numString.length >= length) {
    return numString;
  }
  return new Array(length - numString.length).fill('0').toString() + numString;
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
