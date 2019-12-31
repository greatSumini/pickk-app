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
