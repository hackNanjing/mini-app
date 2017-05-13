
export const generateMinutes = time => {
  let { hour, minute } = time;
  return hour * 60 + minute;
};
