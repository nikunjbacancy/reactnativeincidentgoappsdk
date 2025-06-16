import { format } from 'date-fns'; // Import format function from date-fns

const getOffsetHours = () => {
  const offsetMinutes = new Date().getTimezoneOffset();
  return -offsetMinutes / 60;
};
const getTimeAgo = date => {
  const offset = getOffsetHours();
  const nowUTC = new Date();
  const now = new Date(nowUTC.getTime() + offset * 60 * 60 * 1000);
  const then = new Date(date);
  const diffInMs = now - then;
  const minutesAgo = Math.round(diffInMs / (1000 * 60));
  return minutesAgo;
};
const getLocalTime = dateString => {
  const gmtDateStr = dateString;
  const offset = getOffsetHours();
  const date = new Date(gmtDateStr);
  const localTime = new Date(date.getTime() + offset * 60 * 60 * 1000);
  return localTime;
};

/**
 * Formats a UTC date string to a local date string in the format "MMM DD, hh:mm a".
 * Also calculates the relative time in days ago.
 * @param utcDateString The UTC date string to format.
 * @returns An object containing the formatted date and the relative time in days ago.
 */
function formatUTCtoLocalDate(utcDateString) {
  const gmtDateStr = utcDateString;
  const date = new Date(gmtDateStr);

  // Format the date to the desired format
  const formattedDate = format(date, 'MMM dd, hh:mm a');
  const now = new Date();
  const timeDiff = now.setHours(0, 0, 0, 0) - date.setHours(0, 0, 0, 0);
  const daysAgo = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  let relativeTime = "";
  if (daysAgo === 0) {
    relativeTime = "Today";
  } else if (daysAgo === 1) {
    relativeTime = "Yesterday";
  } else if (daysAgo < 7) {
    relativeTime = `${daysAgo} days ago`;
  } else if (daysAgo < 14) {
    relativeTime = "A week ago";
  } else if (daysAgo < 30) {
    relativeTime = `${Math.floor(daysAgo / 7)} weeks ago`;
  } else if (daysAgo < 60) {
    relativeTime = "A month ago";
  } else {
    relativeTime = `${Math.floor(daysAgo / 30)} months ago`;
  }
  return {
    formattedDate,
    daysAgo: relativeTime
  };
}
export { formatUTCtoLocalDate, getTimeAgo, getLocalTime };
//# sourceMappingURL=dateAndTime.js.map