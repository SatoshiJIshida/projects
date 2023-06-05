/**
 * Days for the display.
 * @author [Satoshi Ishida]
 */
function day() {
  const days: Array<string> = [
    "Sunday", // 0
    "Monday", // 1
    "Tuesday", // 2
    "Wednesday", // 3
    "Thursday", // 4
    "Friday", // 5
    "Saturday", // 6
  ];

  const date: any = new Date();
  const output: Array<string> = [];

  // If we have a day for today, then add the next 5 days.
  if (days[date.getDay()] === "Sunday") {
    output.push(
      days[date.getDay()],
      days[1],
      days[2],
      days[3],
      days[4],
      days[5]
    );
  } else if (days[date.getDay()] === "Monday") {
    output.push(
      days[date.getDay()],
      days[2],
      days[3],
      days[4],
      days[5],
      days[6]
    );
  } else if (days[date.getDay()] === "Tuesday") {
    output.push(
      days[date.getDay()],
      days[3],
      days[4],
      days[5],
      days[6],
      days[0]
    );
  } else if (days[date.getDay()] === "Wednesday") {
    output.push(
      days[date.getDay()],
      days[4],
      days[5],
      days[6],
      days[0],
      days[1]
    );
  } else if (days[date.getDay()] === "Thursday") {
    output.push(
      days[date.getDay()],
      days[5],
      days[6],
      days[0],
      days[1],
      days[2]
    );
  } else if (days[date.getDay()] === "Friday") {
    output.push(
      days[date.getDay()],
      days[6],
      days[0],
      days[1],
      days[2],
      days[3]
    );
  } else {
    output.push(
      days[date.getDay()],
      days[0],
      days[1],
      days[2],
      days[3],
      days[4]
    );
  }

  return output;
}

export { day };
