import React from "react";
import firebase from "firebase/app";
import "../index.css";
import months from "../custom/months";
import { WriteModal2 } from "./write-modal";
import { ReadModal2 } from "./read-modal";
import { Notification2 } from "./notification";
import { date, fullDate, year } from "../custom/date-pattern";
import { monthSelected, savedDays, title, dbDate } from "./year-view";
import { enterYearView } from "../helpers/enter-year-view";

const currentDate = date(), // e.g. January1.
      curFullDate = fullDate(); // e.g. Monday 1 January for titles.

var isTurnedOn = false, // show notification.
    userSelect = "", // current date user selected.
    title2 = title, // full date title for specific selected date, not system date.
    dbDate2 = dbDate; // reminder date e.g. January1 used in logic to get data from database.

/**
 * Month View Component.
 * @author [Satoshi Ishida]
 */
export default class MonthView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      months: months, // get months data.
      month: null, // selected month index.
      selected: null, // selected date.
      isOpen: false, // show/hide reminder input modal.
      isShowReminder: false, // show/hide reminder.
      isTurnedOff: false, // close notification.
      dateItem: [], // dateItem e.g. January1.
      value: [], // reminder text from text area.
      getReminder: [], // get database data.
    };
  }

  /**
   * dynamicClass -> colour change for reminders being saved.
   * @param   {object}  month        - Month of the year
   * @param   {string}  j            - Date in a month e.g. 1-31
   * @returns {string}  dynamicClass - CSS className
   */
  dynamicClass = (month, j) => {
    let dynamicClass = "";
    // imported savedDays array keeping track of saved reminder dates.
    if (savedDays.includes(month.title + j)) { // if it includes e.g. January1.
      dynamicClass = "colourBtn2"; // colour change for saved reminder.
      return dynamicClass;
    } else {
      dynamicClass = "dateBtn2"; // default.
      return dynamicClass;
    }
  };

  /**
   * disabledClass -> color change for days not in use in each month.
   * @param   {object} disabledDays1 - days not in use in row1
   * @param   {object} disabledDays2 - days not in use in final rows
   * @returns {string} dynamicClass  - CSS className
   */
  disabledClass = (disabledDays1, disabledDays2) => {
    let dynamicClass = "";

    if (disabledDays1 || disabledDays2) {
      dynamicClass = "disabled2"; // stop interactivity.
      return dynamicClass;
    } else {
      dynamicClass = "dateBtn2"; // default.
      return dynamicClass;
    }
  };

  /**
   * selectedDate -> date in a month that user selects.
   * @param {object} month - Month in a year
   * @param {string} j     - Date in a month e.g. 1-31
   */
  selectedDate = (month, j) => {
    this.setState({ month: month, selected: j, isOpen: true }); // set month and date selected and input reminder modal opens.
    userSelect = j; // also store selected date here to use elsewhere.

    if (savedDays.includes(month.title + j)) { // if we already have a reminder for the selected date.
      this.setState({ isOpen: false, isShowReminder: true }); // instead show the reminder modal.
      this.makeTitles(month, j); // make title to use for the reminder selected date.
      this.getReminder(month.title + j); // send date reference parameter to getReminder().
    } else {
      return;
    }
  };

  /**
   * function to make day and date titles to concatenate into reminder title e.g. Monday 1 January.
   * @param {object} month - Month in a year
   * @param {string} j     - Date in a month e.g. 1-31
   */
  makeTitles = (month, j) => {
    let makeDate = "";
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
  };

  /**
   * setupReminder -> for notifications, get the data from database calling getReminder();
   */
  setupReminder = () => {
    if (savedDays.includes(currentDate)) {
      title2 = curFullDate; // make full title for it using system date.
      this.setState({
        isShowReminder: true, // show the reminder modal.
        isTurnedOff: true, // hide the notification modal.
        dateItem: currentDate, // set dateItem as currentDate pattern taken from system date (not user selected date).
      });
      this.getReminder(currentDate); // get the reminder with the current system date.
    } else {
      return;
    }
  };

  /**
   * getReminder -> get reminder text data from database.
   * @param {string} dateItem - month.title + j e.g. January1
   */
  getReminder = (dateItem) => {
    const reminder = firebase.database().ref("reminders/" + dateItem + "/text");
    let err;
    reminder.on("value", (snapshot) => {
      const data = snapshot.val();
      this.extractReminder(err, data);
    });
  };

  /**
   * extractReminder -> after getting the reminder data object, we need to store it.
   * @param {object} err  - empty variable to use for error catch
   * @param {object} data - reminder data from database
   */
  extractReminder = (err, data) => {
    new Promise((resolve, reject) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
      .then((data) => {
        this.setState({ getReminder: data }); // set the data in getReminder state.
      })
      .catch((err) => {
        throw err; // otherwise, there was an error and terminate.
      });
  };

  /**
   * displayReminder -> setting up the reminder modal.
   * @returns {object} title2 + year()         - day + date + month + year e.g. Monday 1 January 2021
   * @returns {object} this.state.getReminder  - reminder text
   * @returns {object} button                  - delete reminder button
   * @returns {object} button                  - close the reminder modal
   */
  displayReminder = () => {
    return (
      <div>
        <div className="reminderTitle2">{title2 + " " + year()}</div>
        <div className="reminderText2">{this.state.getReminder}</div>
        <button
          className="deleteReminder2"
          onClick={() => this.removeReminder()}
        >
          Delete Reminder
        </button>
        <button
          className="reminderClose2"
          onClick={() => this.setState({ isShowReminder: false })}
        >
          &times;
        </button>
      </div>
    );
  };

  /**
   * removeReminder -> remove the reminder from the savedDays array and the database.
   */
  removeReminder = () => {
    if (this.state.month) { // if month state exists because user clicked a date.
      dbDate2 = this.state.month.title + this.state.selected; // e.g. if you clicked on January1 then that is what will be deleted.
      const i = savedDays.indexOf(dbDate2);
      savedDays.splice(i, 1); // remove 1 element from index where our selected date is.
      firebase // also remove from firebase database.
        .database()
        .ref("reminders/" + dbDate2)
        .remove(); // remove reminder.
      firebase
        .database()
        .ref("dateItem/" + dbDate2)
        .remove(); // remove reminder date.
      this.setState({ isShowReminder: false }); // close reminder after removing it.
    } else {
      dbDate2 = this.state.dateItem; // else user didn't click a date and we remove a loaded notification reminder -> in setupReminder() we set it as currentDate.
      const i = savedDays.indexOf(dbDate2);
      savedDays.splice(i, 1); // remove 1 element from index where our selected date is.
      firebase // also remove from firebase database.
        .database()
        .ref("reminders/" + dbDate2)
        .remove(); // remove reminder.
      firebase
        .database()
        .ref("dateItem/" + dbDate2)
        .remove(); // remove reminder date.
      this.setState({ isShowReminder: false }); // close reminder after removing it.
    }
  };

  /**
   * displayInputModal -> setup the input reminder modal.
   * @returns {string} title
   * @returns {object} text area - input reminder text area
   * @returns {object} button    - submit reminder button
   * @returns {object} button    - close input reminder modal
   */
  displayInputModal = () => {
    if (this.state.isOpen === false) {
      return null;
    } else {
      return (
        <div>
          <form key={this.state.selected} className="form">
            <div className="reminderTitle2">Enter Reminder:</div>
            <textarea
              className="textArea2"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button className="submit" onClick={this.handleSubmit}>
              Submit
            </button>
          </form>
          <button
            className="inputClose"
            onClick={() => this.setState({ isOpen: false })}
          >
            &times;
          </button>
        </div>
      );
    }
  };

  /**
   * handleChange -> reminder text input.
   * @param {event} event
   */
  handleChange = (event) => {
    this.setState({ value: event.target.value }); // reminder text stored in 'value' state.
  };

  /**
   * handleSubmit -> submission of reminders.
   * @param {event} event
   */
  handleSubmit = (event) => {
    event.preventDefault();
    const dateItem = this.state.month.title + this.state.selected; // e.g. January1.

    savedDays.push(dateItem); // push date of reminder to savedDays array.
    this.writeUserData(dateItem); // and to firebase database.
    this.setState({ isOpen: false, value: "" }); // After submission, hide input reminder modal and clear text area.
  };

  /**
   * writeUserData -> write reminder to database.
   * @param {string} dateItem - this.state.month.title + this.state.selected e.g. January1
   */
  writeUserData = (dateItem) => {
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
        text: this.state.value, // save that dateItem's text reminder value.
      });
  };

  /**
   * notification -> check if current date is stored and open the notification.
   */
  notification = () => {
    /**
     * You need to also check that isTurnedOff (notification checker) is false, otherwise the notification will always stay on screen
     * because notification() is in the render and will constantly check for a reminder on the current day.
     * This is also why isTurnedOn is a boolean global variable, because you can't constantly call to setState from render().
     */
    if (savedDays.includes(currentDate) && this.state.isTurnedOff === false) {
      isTurnedOn = true; // open notification modal if today has a reminder.
    } else {
      isTurnedOn = false; // else there is no reminder today.
    }
  };

  /**
   * displayNotification -> modal for notification, if current day has a reminder.
   * @returns {object} string + curFullDate + year() - title of notification
   * @returns {object} button                        - view reminder button calls this.setupReminder()
   * @returns {object} button                        - to close the notification
   */
  displayNotification = () => {
    return (
      <div>
        <div className="reminderTitle2">
          {"You have a reminder: " + curFullDate + " " + year()}
        </div>
        <button className="viewReminder" onClick={() => this.setupReminder()}>
          View Reminder
        </button>
        <button
          className="notifClose"
          onClick={() => this.setState({ isTurnedOff: true })}
        >
          &times;
        </button>
      </div>
    );
  };

  /**
   * Class Render.
   * @returns {object} button                - month title with year e.g. January 2021
   * @returns {string} dayLetter             - day letters for the date numbers in each month
   * @returns {object} button                - disabledDays1 buttons (greyed out)
   * @returns {object} button                - days buttons (dates in use)
   * @returns {object} button                - disabledDays2 buttons (greyed out)
   * @returns {object} button                - go back to year view
   * @returns {function} this.notification() - check to display notification
   * @returns {function} WriteModal          - reminder input modal
   * @returns {function} ReadModal           - reminder read modal
   * @returns {function} Notification        - notification modal
   */
  render() {
    return this.state.months.outputMonth.map((i) => { // use index of outputMonth array that contains month objects.
      const month = this.state.months.month[i], // get data from /custom/months.js
            singleMonth = [];

      let dayLetters = [],
          days = [],
          disabledDays1 = [],
          disabledDays2 = [];

      if (month.id === monthSelected) { // if month[i] id is the same as month[i] id selected in Year View.
        singleMonth.push(month); // push that selected month the user clicked in the Year View to be rendered here as a single Month View.
        dayLetters = singleMonth[0].dayLetters;
        days = singleMonth[0].days;
        disabledDays1 = singleMonth[0].disabledDays1;
        disabledDays2 = singleMonth[0].disabledDays2;

        return [
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
                {disabledDays1.map((j) => {
                  return (
                    <button
                      key={j}
                      className={this.disabledClass(disabledDays1)}
                    >
                      {j}
                    </button>
                  );
                })}

                {days.map((j) => {
                  return (
                    <button
                      key={j}
                      className={this.dynamicClass(month, j)}
                      onClick={() => this.selectedDate(month, j)}
                    >
                      {j}
                    </button>
                  );
                })}

                {disabledDays2.map((j) => {
                  return (
                    <button
                      key={j}
                      className={this.disabledClass(disabledDays2)}
                    >
                      {j}
                    </button>
                  );
                })}
              </div>
              <button className={"retBtn2"} onClick={() => enterYearView()}>
                Return
              </button>
            </div>
          </div>,

          this.notification(),
          <WriteModal2 show={this.state.isOpen}>
            {this.displayInputModal()}
          </WriteModal2>,
          <ReadModal2 show={this.state.isShowReminder}>
            {this.displayReminder()}
          </ReadModal2>,
          <Notification2 show={isTurnedOn}>
            {this.displayNotification()}
          </Notification2>,
        ];
      }
      return singleMonth;
    });
  }
}

export { title2, dbDate2 };
