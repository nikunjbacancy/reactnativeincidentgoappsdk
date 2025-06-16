declare const getTimeAgo: (date: Date) => number;
declare const getLocalTime: (dateString: string) => Date;
/**
 * Formats a UTC date string to a local date string in the format "MMM DD, hh:mm a".
 * Also calculates the relative time in days ago.
 * @param utcDateString The UTC date string to format.
 * @returns An object containing the formatted date and the relative time in days ago.
 */
declare function formatUTCtoLocalDate(utcDateString: string): {
    formattedDate: string;
    daysAgo: string;
};
export { formatUTCtoLocalDate, getTimeAgo, getLocalTime };
