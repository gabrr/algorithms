import moment from 'moment

export const isEmpty = value =>
  value === null || typeof value === 'undefined' || value === '';

export const get = (object, property, fallback) => {
  if (!isEmpty(object)) {
    return Object.prototype.hasOwnProperty.call(object, property) &&
      !isEmpty(object[property])
      ? object[property]
      : fallback;
  }

  return fallback;
};

export const has = (object, property) => property in object && object[property];

export const objectHasLength = object =>
  !isEmpty(object) && Object.keys(object).length > 0;

export const mergeProps = (...args) => Object.assign({}, ...args);

export const objectIncludes = (object, included) => {
  if (object !== Object(object)) {
    return false;
  }
  for (let prop in included) {
    if (!object.hasOwnProperty(prop) || included[prop] !== object[prop]) {
      return false;
    }
  }
  return true;
};

export const hasStyle = (element, style) =>
  element.props.style &&
  element.props.style
    .flat(Infinity)
    .some(elementStyle => objectIncludes(elementStyle, style));

export const getHours = timeStr => (timeStr ? timeStr.slice(0, 2) : null);

export const getMinutes = timeStr => (timeStr ? timeStr.slice(3, 5) : null);

export const getTime = time =>
  time ? `${shiftTime(time.getHours())}:${shiftTime(time.getMinutes())}` : null;

export const getHourMinutesSeconds = time =>
  time
    ? `${shiftTime(time.getHours())}:${shiftTime(
        time.getMinutes(),
      )}:${shiftTime(time.getSeconds())}`
    : null;

export const shiftTime = time => `0${time}`.slice(-2);

export const secondsToTimeStr = seconds => {
  const h = ('0' + Math.floor(seconds / 3600)).slice(-2);
  const m = ('0' + Math.floor((seconds % 3600) / 60)).slice(-2);
  return `${h}h${m}`;
};

export const forceDigitsSize = (value, n = 2) =>
  (
    Array(n)
      .fill('0')
      .join('') + value
  ).slice(-n);

export const formatFullDate = date =>
  moment(date).format('DD/MM/YYYY [às] HH[h]mm');

export const getLocalTime = date => {
  const offset = moment().utcOffset()
  return formatFullDate(moment.parseZone(date).utcOffset(offset).format())
}
