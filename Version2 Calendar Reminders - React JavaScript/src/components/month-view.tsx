import React, { useState } from "react";
import firebase from "firebase/app";
import "../index.css";
import months from "../custom/months";
import { WriteModal2 } from "./write-modal";
import { ReadModal2 } from "./read-modal";
import { Notification2 } from "./notification";
import { date, fullDate, year } from "../custom/date-pattern";
import { monthSelected, savedDays, title, dbDate } from "./year-view";
import { enterYearView } from "../helpers/enter-year-view";

const currentDate: string = date(), // e.g. January1.
  curFullDate: string = fullDate(); // e.g. Monday 1 January for titles.

var isTurnedOn: boolean = false, // show notification.
  title2: string = title, // full date title for specific selected date, not system date.
  dbDate2: string = dbDate, // reminder date e.g. January1 used in logic to get data from database.
  userSelect: string = "";

/**
 * MonthView
 * @author [Satoshi Ishida]
 */
const MonthView = () => {
  let i: number = 0,
    result: number = 0;
  for (i; i < months.month.length; i++) {
    result = i;
  }

  const [dateItem, setDateItem] = useState(""), // dateItem e.g. January1.
    [month, setMonth] = useState(months.month[result]), // selected month index.
    [selected, setSelected] = useState(null), // selected date.
    [isOpen, setIsOpen] = useState(false), // show/hide reminder input modal.
    [isShowReminder, setIsShowReminder] = useState(false), // show/hide reminder.
    [isTurnedOff, setIsTurnedOff] = useState(false), // made true to close notification. false whilst we check for notification.
    [reminder, setReminder] = useState([]), // get database data.
    [value, setValue] = useState(""); // reminder text from text area.

  /**
   * dynamicClass -> colour change for reminders being saved.
   * @param   {object}  month        - Month of the year
   * @param   {string}  j            - Date in a month e.g. 1-31
   * @returns {string}  dynamicClass - CSS className
   */
  function dynamicClass(month: any, j: any): string {
    let dynamicClass: string = "";
    // imported savedDays array keeping track of saved reminder dates.
    if (savedDays.includes(month.title + j)) {
      // if it includes e.g. January1.
      dynamicClass = "colourBtn2"; // colour change for saved reminder.
      return dynamicClass;
    } else {
      dynamicClass = "dateBtn2"; // default.
      return dynamicClass;
    }
  }

  /**
   * disabledClass -> color change for days not in use in each month.
   * @param   {object} disabledDays - days not in use in rows
   * @returns {string} dynamicClass - CSS className
   */
  function disabledClass(disabledDays: any): string {
    let dynamicClass: string = "";

    if (disabledDays) {
      dynamicClass = "disabled2"; // stop interactivity.
      return dynamicClass;
    } else {
      dynamicClass = "dateBtn2"; // default.
      return dynamicClass;
    }
  }

  /**
   * selectedDate -> date in a month that user selects.
   * @param {object} month - Month in a year
   * @param {string} j     - Date in a month e.g. 1-31
   */
  function selectedDate(month: any, j: any) {
    setMonth(month);
    setSelected(j);
    setIsOpen(true); // open input modal.
    userSelect = j; // also store selected date here to use elsewhere.

    if (savedDays.includes(month.title + j)) {
      // if we already have a reminder for the selected date.
      setIsOpen(false); // don't show the input modal.
      setIsShowReminder(true); // instead show the reminder modal.
      makeTitles(month, j); // make title to use for the reminder selected date.
      getReminder(month.title + j); // send date reference parameter to getReminder().
    } else {
      return;
    }
  }

  /**
   * function to make day and date titles to concatenate into reminder title e.g. Monday 1 January.
   * @param {object} month - Month in a year
   * @param {string} j     - Date in a month e.g. 1-31
   */
  function makeTitles(month: any, j: any) {
    let makeDate: string = "";
    /**
     * Getting data ->
     * index0 is the day title e.g. Monday.
     * index1 is the array of dates that occur on a Monday that selected month.
     */
    if (month.monday[1].includes(userSelect)) {
      // if month's Monday dates array includes current selected date.
      makeDate = month.monday[0] + " " + j + " " + month.title; // extract the Monday title to concatenate with j and month title -> to produce e.g. Monday 1 January.
      title2 = makeDate; // store the selected title to use.
    } else if (month.tuesday[1].includes(userSelect)) {
      makeDate = month.tuesday[0] + " " + j + " " + month.title;
      title2 = makeDate;
    } else if (month.wednesday[1].includes(userSelect)) {
      makeDate = month.wednesday[0] + " " + j + " " + month.title;
      title2 = makeDate;
    } else if (month.thursday[1].includes(userSelect)) {
      makeDate = month.thursday[0] + " " + j + " " + month.title;
      title2 = makeDate;
    } else if (month.friday[1].includes(userSelect)) {
      makeDate = month.friday[0] + " " + j + " " + month.title;
      title2 = makeDate;
    } else if (month.saturday[1].includes(userSelect)) {
      makeDate = month.saturday[0] + " " + j + " " + month.title;
      title2 = makeDate;
    } else if (month.sunday[1].includes(userSelect)) {
      makeDate = month.sunday[0] + " " + j + " " + month.title;
      title2 = makeDate;
    } else {
      return;
    }
  }

  /**
   * setupReminder -> for notifications, get the data from database calling getReminder();
   */
  function setupReminder() {
    if (savedDays.includes(currentDate)) {
      title2 = curFullDate; // make full title for it using system date.
      setIsShowReminder(true); // show the reminder modal.
      setIsTurnedOff(true); // hide the notification modal.
      setDateItem(currentDate); // set dateItem as currentDate pattern taken from system date (not user selected date).
      getReminder(currentDate); // get the reminder with the current system date.
    } else {
      return;
    }
  }

  /**
   * getReminder -> get reminder text data from database.
   * @param {string} dateItem - month.title + j e.g. January1
   */
  function getReminder(dateItem: string) {
    const reminder: any = firebase
      .database()
      .ref("reminders/" + dateItem + "/text"); // any because of third-party api.
    let err: any; // any because it is an empty variable for error catch.
    reminder.on("value", (snapshot: any) => {
      const data: Array<string> = snapshot.val();
      extractReminder(err, data);
    });
  }

  /**
   * extractReminder -> after getting the reminder data object, we need to store it.
   * @param {object} err  - empty variable to use for error catch
   * @param {object} data - reminder data from database
   */
  function extractReminder(err: any, data: Array<string>) {
    new Promise((resolve, reject) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
      .then((data: any) => {
        setReminder(data); // set the data in reminder state.
      })
      .catch((err) => {
        throw err; // otherwise, there was an error and terminate.
      });
  }

  /**
   * displayReminder -> setting up the reminder modal.
   * @returns {object} title2 + year() - day + date + month + year e.g. Monday 1 January 2021
   * @returns {object} reminder        - reminder text
   * @returns {object} button          - delete reminder button
   * @returns {object} button          - close the reminder modal
   */
  function displayReminder(): JSX.Element {
    return (
      <div>
        <div className="reminderTitle2">{title2 + " " + year()}</div>
        <div className="reminderText2">{reminder}</div>
        <button className="deleteReminder2" onClick={() => removeReminder()}>
          Delete Reminder
        </button>
        <button
          className="reminderClose2"
          onClick={() => setIsShowReminder(false)}
        >
          &times;
        </button>
      </div>
    );
  }

  /**
   * removeReminder -> remove the reminder from the savedDays array and the database.
   */
  function removeReminder() {
    if (month) {
      // if month state exists because user clicked a date.
      dbDate2 = month.title + selected; // e.g. if you clicked on January1 then that is what will be deleted.
      const i: number = savedDays.indexOf(dbDate2);
      savedDays.splice(i, 1); // remove 1 element from index where our selected date is.
      firebase // also remove from firebase database.
        .database()
        .ref("reminders/" + dbDate2)
        .remove(); // remove reminder.
      firebase
        .database()
        .ref("dateItem/" + dbDate2)
        .remove(); // remove reminder date.
      setIsShowReminder(false); // close reminder after removing it.
    } else {
      dbDate2 = dateItem; // else user didn't click a date and we remove a loaded notification reminder -> in setupReminder() we set it as currentDate.
      const i: number = savedDays.indexOf(dbDate2);
      savedDays.splice(i, 1); // remove 1 element from index where our selected date is.
      firebase // also remove from firebase database.
        .database()
        .ref("reminders/" + dbDate2)
        .remove(); // remove reminder.
      firebase
        .database()
        .ref("dateItem/" + dbDate2)
        .remove(); // remove reminder date.
      setIsShowReminder(false); // close reminder after removing it.
    }
  }

  /**
   * displayInputModal -> setup the input reminder modal.
   * @returns {string} title
   * @returns {object} text area - input reminder text area
   * @returns {object} button    - submit reminder button
   * @returns {object} button    - close input reminder modal
   */
  function displayInputModal(): JSX.Element {
    return (
      <div>
        <form key={selected} className="form">
          <div className="reminderTitle2">Enter Reminder:</div>
          <textarea
            className="textArea2"
            value={value}
            onChange={handleChange}
          />
          <button className="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        <button className="inputClose" onClick={() => setIsOpen(false)}>
          &times;
        </button>
      </div>
    );
  }

  /**
   * handleChange -> reminder text input.
   * @param {event} event
   */
  function handleChange(event: any) {
    setValue(event.target.value); // reminder text stored in 'value' state.
  }

  /**
   * handleSubmit -> submission of reminders.
   * @param {event} event
   */
  function handleSubmit() {
    const dateItem: string = month.title + selected; // e.g. January1.

    savedDays.push(dateItem); // push date of reminder to savedDays array.
    writeUserData(dateItem); // and to firebase database.
    setIsOpen(false);
    setValue(""); // After submission, hide input reminder modal and clear text area.
  }

  /**
   * writeUserData -> write reminder to database.
   * @param {string} dateItem - month.title + selected e.g. January1
   */
  function writeUserData(dateItem: string) {
    firebase
      .database()
      .ref("dateItem/" + dateItem)
      .set({
        dateItem, // save dateItem.
      });
    firebase
      .database()
      .ref("reminders/" + dateItem)
      .set({
        text: value, // save that dateItem's text reminder value.
      });
  }

  /**
   * notification -> check if current date is stored and open the notification.
   */
  function notification() {
    /**
     * You need to also check that isTurnedOff (notification checker) is false, otherwise the notification will always stay on screen
     * because notification() is in the render and will constantly check for a reminder on the current day.
     * This is also why isTurnedOn is a boolean global variable, because you can't constantly call to setState from render().
     */
    if (savedDays.includes(currentDate) && isTurnedOff === false) {
      isTurnedOn = true; // open notification modal if today has a reminder.
    } else {
      isTurnedOn = false; // else there is no reminder today.
    }
  }

  /**
   * displayNotification -> modal for notification, if current day has a reminder.
   * @returns {object} string + curFullDate + year() - title of notification
   * @returns {object} button                        - view reminder button calls setupReminder()
   * @returns {object} button                        - to close the notification
   */
  function displayNotification(): JSX.Element {
    return (
      <div>
        <div className="reminderTitle2">
          {"You have a reminder: " + curFullDate + " " + year()}
        </div>
        <button className="viewReminder" onClick={() => setupReminder()}>
          View Reminder
        </button>
        <button className="notifClose" onClick={() => setIsTurnedOff(true)}>
          &times;
        </button>
      </div>
    );
  }

  /**
   * @returns {object} button           - month title with year e.g. January 2021
   * @returns {string} dayLetter        - day letters for the date numbers in each month
   * @returns {object} button           - disabledDays1 buttons (greyed out)
   * @returns {object} button           - days buttons (dates in use)
   * @returns {object} button           - disabledDays2 buttons (greyed out)
   * @returns {object} button           - go back to year view
   * @returns {function} notification() - check to display notification
   * @returns {function} WriteModal2    - reminder input modal
   * @returns {function} ReadModal2     - reminder read modal
   * @returns {function} Notification2  - notification modal
   */
  return months.outputMonth.map((i: number) => {
    // use index of outputMonth array that contains month objects.
    const month: any = months.month[i], // get data from /custom/months.js
      singleMonth: any = [];

    let dayLetters: Array<string> = [],
      days: Array<string> = [],
      disabledDays1: Array<string> = [],
      disabledDays2: Array<string> = [];

    if (month.id === monthSelected) {
      // if month[i] id is the same as month[i] id selected in Year View.
      singleMonth.push(month); // push that selected month the user clicked in the Year View to be rendered here as a single Month View.
      dayLetters = singleMonth[0].dayLetters;
      days = singleMonth[0].days;
      disabledDays1 = singleMonth[0].disabledDays1;
      disabledDays2 = singleMonth[0].disabledDays2;

      return [
        <React.Fragment>
          <div>
            <div className="titleContainer2">
              <button className={"monthTitle2"}>
                {month.title + " " + year()}
              </button>
            </div>

            <div className="singleMonthContainer">
              <div className="dayLetterTwo1">{dayLetters[0]}</div>
              <div className="dayLetterTwo2">{dayLetters[1]}</div>
              <div className="dayLetterTwo3">{dayLetters[2]}</div>
              <div className="dayLetterTwo4">{dayLetters[3]}</div>
              <div className="dayLetterTwo5">{dayLetters[4]}</div>
              <div className="dayLetterTwo6">{dayLetters[5]}</div>
              <div className="dayLetterTwo7">{dayLetters[6]}</div>

              <div className="daysContainer2">
                {disabledDays1.map((j: string) => {
                  return (
                    <button key={j} className={disabledClass(disabledDays1)}>
                      {j}
                    </button>
                  );
                })}

                {days.map((j: string) => {
                  return (
                    <button
                      key={j}
                      className={dynamicClass(month, j)}
                      onClick={() => selectedDate(month, j)}
                    >
                      {j}
                    </button>
                  );
                })}

                {disabledDays2.map((j: string) => {
                  return (
                    <button key={j} className={disabledClass(disabledDays2)}>
                      {j}
                    </button>
                  );
                })}
              </div>
              <button className={"retBtn2"} onClick={() => enterYearView()}>
                Return
              </button>
            </div>
          </div>
          {notification()}
          <WriteModal2 show={isOpen}>{displayInputModal()}</WriteModal2>
          <ReadModal2 show={isShowReminder}>{displayReminder()}</ReadModal2>
          <Notification2 show={isTurnedOn}>
            {displayNotification()}
          </Notification2>
        </React.Fragment>
      ];
    }
  });
};

export default MonthView;

export { title2, dbDate2 };
