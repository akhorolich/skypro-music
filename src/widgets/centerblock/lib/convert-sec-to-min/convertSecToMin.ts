export const convertToMin = (sec: number = 0) => {
  if (sec === 0) return sec.toString();
  const min = Math.floor(sec / 60);
  const remainder = Math.floor(sec % 60);
  const outputSeconds = remainder < 10 ? `0${remainder}` : remainder;

  return `${min}:${outputSeconds}`;
};
