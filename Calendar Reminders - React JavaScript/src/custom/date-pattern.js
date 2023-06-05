/**
 * date -> get system date and create the same pattern as our dateItem to be used in the calendar.
 * @author [Satoshi Ishida]
 *
 * @returns {string} getDate - e.g. January1
 */
function date() {
  const date = new Date();
  const monthTitles = [
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
  const getDate = monthTitles[date.getMonth()] + date.getDate();
  return getDate;
}

/**
 * fullDate
 * @returns {string} getDate - e.g. Monday 1 January.
 */
function fullDate() {
  const date = new Date();
  const dayTitles = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthTitles = [
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
  const getDate =
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
function year() {
  const date = new Date();
  const getDate = date.getFullYear();
  return getDate;
}

export { date, fullDate, year };
