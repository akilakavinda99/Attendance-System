import moment from 'moment';

export const formatTime = timestamp => {
  const date = moment.unix(timestamp.seconds);

  // Format time as 'hh:mm A' (A for AM/PM)
  return date.format('hh:mm A');
};
