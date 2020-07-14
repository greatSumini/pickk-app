import {addLeadingZeros} from './number-parser';

export const stringifyPassedTime = (input) => {
  const howmuch = [
    [60, '초'],
    [60, '분'],
    [24, '시간'],
    [31, '일'],
    [12, '개월'],
  ];

  const nowTime: number = Date.now();
  const inputTime = new Date(input).getTime();
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

const isToday = (inputDate: Date) => {
  const nowDate = new Date(Date.now());

  return (
    nowDate.getFullYear() === inputDate.getFullYear() &&
    nowDate.getMonth() === inputDate.getMonth() &&
    nowDate.getDate() === inputDate.getDate()
  );
};

export const parseTime = (input, onlyDate?: boolean) => {
  const inputDate = new Date(input);

  const year = inputDate.getFullYear();
  const month = addLeadingZeros(inputDate.getMonth() + 1, 2);
  const date = addLeadingZeros(inputDate.getDate(), 2);
  const hours = addLeadingZeros(inputDate.getHours(), 2);
  const minutes = addLeadingZeros(inputDate.getMinutes(), 2);

  if (isToday(inputDate) && !onlyDate) {
    return `${hours}:${minutes}`;
  }
  return `${year}.${month}.${date}`;
};

export const parseISODate = (input: string, onlyDate?: boolean) => {
  if (input) {
    const date = input.substring(0, 10).split('-').join('.');

    const time = input.split('T')[1].substring(0, 5);

    if (onlyDate) return date;

    return date + '. ' + time;
  } else {
    return null;
  }
};

export const getDateTimeNumbers = (input?: number) => {
  const date = new Date(input);
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
};

export const getDateTimeStrings = (input?: number) => {
  const date = new Date(input);
  const parse = (num: number) => addLeadingZeros(num, 2);
  return {
    year: date.getFullYear().toString(),
    month: parse(date.getMonth() + 1),
    day: parse(date.getDate()),
    hours: parse(date.getHours()),
    minutes: parse(date.getMinutes()),
    seconds: parse(date.getSeconds()),
  };
};

export const addDashToDate = (value: string) => {
  const number = value.toString().replace(/[^0-9]/g, '');

  const result = [number.slice(0, 4), number.slice(4, 6), number.slice(6, 8)]
    .filter((value) => value != '')
    .join('-');
  return result.slice(0, 10);
};
