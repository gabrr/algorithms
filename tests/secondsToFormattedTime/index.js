/**
 *
 * @param { number } milliseconds
 * @returns { string | null } Period of time user friendly formatted.
 */
const formatTime = (milliseconds) => {
  const normalizedInput = Number(milliseconds);

  if (!normalizedInput) {
    return null;
  }

  const hourBase = 3_600_000;
  const minuteBase = 60_000;
  const secondsBase = 1_000;

  const hour = milliseconds / hourBase;
  const hourRemaining = hour % 1;
  const hourInt = Math.floor(hour);

  const minute = (hourRemaining / minuteBase) * hourBase;
  const minuteRemaining = minute % 1;
  const minuteInt = Math.floor(minute);

  const secondRounded = Math.floor(
    (minuteRemaining / secondsBase) * minuteBase
  );
  const secondInt = secondRounded >= 60 ? 0 : secondRounded;

  const result = {};

  if (hourInt) result.hour = hourInt + "h";
  if (minuteInt) result.minute = minuteInt + "m";
  if (!result.hour) result.second = secondInt + "s";

  return Object.values(result).join(" ");
};

module.exports = { formatTime };
