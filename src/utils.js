
export const generateMinutes = time => {
  let { hour, minute, second } = time;
  return hour * 60 * 60 + minute * 60 + second;
};
