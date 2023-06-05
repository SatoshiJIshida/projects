const monthTitles: Array<string> = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/**
 * date -> get system date and create the same pattern as our dateItem to be used in the calendar.
 * @author [Satoshi Ishida]
 *
 * @returns {string} getDate - e.g. January1
 */
function date(): string {
  const date: any = new Date();
  const getDate: string = monthTitles[date.getMonth()] + date.getDate();
  return getDate;
}

/**
 * fullDate
 * @returns {string} getDate - e.g. Monday 1 January.
 */
function fullDate(): string {
  const date: any = new Date();
  const dayTitles: Array<string> = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const getDate: string =
    dayTitles[date.getDay()] +
    " " +
    date.getDate() +
    " " +
    monthTitles[date.getMonth()];
  return getDate;
}

/**
 * year -> get the current year.
 * @returns {string} getDate - year e.g. 2021
 */
function year(): string {
  const date: any = new Date();
  const getDate: string = date.getFullYear();
  return getDate;
}

export { date, fullDate, year };
