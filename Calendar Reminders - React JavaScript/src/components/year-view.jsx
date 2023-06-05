import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import firebaseConfig from "../firebase-api/firebase";
import "firebase/analytics";
import "firebase/database";
import "../index.css";
import months from "../custom/months";
import { WriteModal } from "./write-modal";
import { ReadModal } from "./read-modal";
import { Notification } from "./notification";
import { date, fullDate, year } from "../custom/date-pattern";
import MonthView, { title2, dbDate2 } from "./month-view";

firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.database();

const savedDays = [], // store saved dates.
      currentDate = date(), // e.g. January1.
      curFullDate = fullDate(); // e.g. Monday 1 January for titles.

var isTurnedOn = false, // show notification.
    monthSelected = "", // current month user selected.
    userSelect = "", // current date user selected.
    title = title2, // full date title for specific selected date, not system date.
    dbDate = dbDate2, // reminder date e.g. January1 used in logic to get data from database.
    getKeys = []; // for storing object keys from firebase database on component mount.

/**
 * Year View Component.
 * @author [Satoshi Ishida]
 */
export default class YearView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      months: months, // get months data.
      month: null, // selected month index.
      selected: null, // selected date.
      isOpen: false, // show/hide reminder input modal.
      isShowReminder: false, // show/hide reminder.
      isTurnedOff: false, // made true to close notification. false whilst we check for notification.
      dateItem: [], // dateItem e.g. January1.
      value: [], // reminder text from text area.
      getReminder: [], // get database data.
    };
  }

  /**
   * Init Persistent Storage -> get date data from database and call loadReminders(data).
   */
  componentDidMount() {
    const reminders = firebase.database().ref("dateItem/"); // we get the dateItems, which are later used to get the reminders.
    reminders.on("value", (snapshot) => {
      const data = snapshot.val();
      this.loadReminders(data);
    });
  }

  /**
   * loadReminders -> if we have data then extract the dateItems.
   * @param {object} data - dateItems that need extracting
   */
  loadReminders = (data) => {
    if (data) { // we must check if we have data, otherwise if there are no reminders to load, the program terminates.
      getKeys = Object.keys(data);
      for (let i = 0; i < getKeys.length; i++) {
        if (!savedDays.includes(getKeys[i])) {
          savedDays.push(getKeys[i]); // then push them into savedDays array.
          this.setState({ dateItem: currentDate }); // re-render to show stored reminders.
        } else {
          return;
        }
      }
    }
  };

  /**
   * dynamicClass -> colour change for reminders being saved.
   * @param   {object} month        - Month of the year
   * @param   {string} j            - Date in a month e.g. 1-31
   * @returns {string} dynamicClass - CSS className
   */
  dynamicClass = (month, j) => {
    let dynamicClass = "";
    // if we have selected and stored reminders or reminders from database...
    if (savedDays.includes(month.title + j) || savedDays.includes(getKeys)) {
      dynamicClass = "colourBtn"; // colour change for saved reminder.
      return dynamicClass;
    } else {
      dynamicClass = "dateBtn"; // default.
      return dynamicClass;
    }
  };

  /**
   * disabledClass -> color change for days not in use in each month.
   * @param   {object} disabledDays1 - days not in use in row1
   * @param   {object} disabledDays2 - days not in use in final rows
   * @returns {string} dynamicClass  - CSS className
   */
  disabledClass = (disabledDays) => {
    let dynamicClass = "";

    if (disabledDays) {
      dynamicClass = "disabled"; // stop interactivity.
      return dynamicClass;
    } else {
      dynamicClass = "dateBtn"; // default.
      return dynamicClass;
    }
  };

  /**
   * selectedDate -> day in a month that user selects.
   * @param {object} month - Month in a year
   * @param {string} j     - Date in a month e.g. 1-31
   */
  selectedDate = (month, j) => {
    this.setState({ month: month, selected: j, isOpen: true }); // set month and date selected and input reminder modal opens.
    userSelect = j; // also store selected date here to use elsewhere.

    if (savedDays.includes(month.title + j)) { // if we already have a reminder for the selected date.
      this.setState({ isOpen: false, isShowReminder: true }); // instead show the reminder modal.
      this.makeTitles(month, j); // make titles to use for the reminder selected date.
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
    if (month.monday[1].includes(userSelect)) { // if month's Monday dates array includes current selected date.
      makeDate = month.monday[0] + " " + j + " " + month.title; // extract the Monday title to concatenate with j and month title -> to produce e.g. Monday 1 January.
      title = makeDate; // store the selected title to use.
    } else if (month.tuesday[1].includes(userSelect)) {
      makeDate = month.tuesday[0] + " " + j + " " + month.title;
      title = makeDate;
    } else if (month.wednesday[1].includes(userSelect)) {
      makeDate = month.wednesday[0] + " " + j + " " + month.title;
      title = makeDate;
    } else if (month.thursday[1].includes(userSelect)) {
      makeDate = month.thursday[0] + " " + j + " " + month.title;
      title = makeDate;
    } else if (month.friday[1].includes(userSelect)) {
      makeDate = month.friday[0] + " " + j + " " + month.title;
      title = makeDate;
    } else if (month.saturday[1].includes(userSelect)) {
      makeDate = month.saturday[0] + " " + j + " " + month.title;
      title = makeDate;
    } else if (month.sunday[1].includes(userSelect)) {
      makeDate = month.sunday[0] + " " + j + " " + month.title;
      title = makeDate;
    } else {
      return;
    }
  };

  /**
   * setupReminder -> for notifications, get the data from database calling getReminder();
   */
  setupReminder = () => {
    if (savedDays.includes(currentDate)) {
      title = curFullDate; // make full title for it using system date.
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
   * @returns {object} title + year           - day + date + month + year e.g. Monday 1 January 2021
   * @returns {object} this.state.getReminder - reminder text
   * @returns {object} button                 - delete reminder button
   * @returns {object} button                 - close the reminder modal
   */
  displayReminder = () => {
    return (
      <div>
        <div className="reminderTitle">{title + " " + year()}</div>
        <div className="reminderText">{this.state.getReminder}</div>
        <button
          className="deleteReminder"
          onClick={() => this.removeReminder()}
        >
          Delete Reminder
        </button>
        <button
          className="reminderClose"
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
      dbDate = this.state.month.title + this.state.selected; // e.g. if you clicked on January1 then that is what will be deleted.
      const i = savedDays.indexOf(dbDate);
      savedDays.splice(i, 1); // remove 1 element from index where our selected date is.
      firebase // also remove from firebase database.
        .database()
        .ref("reminders/" + dbDate)
        .remove(); // remove reminder.
      firebase
        .database()
        .ref("dateItem/" + dbDate)
        .remove(); // remove reminder date.
      this.setState({ isShowReminder: false }); // close reminder after removing it.
    } else {
      dbDate = this.state.dateItem; // else user didn't click a date and we remove a loaded notification reminder -> in setupReminder() we set it as currentDate.
      const i = savedDays.indexOf(dbDate);
      savedDays.splice(i, 1); // remove 1 element from index where our selected date is.
      firebase // also remove from firebase database.
        .database()
        .ref("reminders/" + dbDate)
        .remove(); // remove reminder.
      firebase
        .database()
        .ref("dateItem/" + dbDate)
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
            <div className="reminderTitle">Enter Reminder:</div>
            <textarea
              className="textArea"
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
        <div className="reminderTitle">
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
   * enterMonthView -> on selecting a month.
   * @param {object} month - month[i] from /custom/months
   */
  enterMonthView = (month) => {
    monthSelected = month.id; // the current selected month is stored in monthSelected, which is exported.

    ReactDOM.render(
      <React.StrictMode>
        <div className="singleMonthOuter">
          <MonthView />
        </div>
      </React.StrictMode>,
      document.getElementById("root")
    );
  };

  /**
   * Class Render.
   * @returns {object} button                - month title button e.g. January
   * @returns {object} dayLetter             - day letters for the date numbers in each month
   * @returns {object} button                - disabledDays1 buttons (greyed out)
   * @returns {object} button                - days buttons (dates in use)
   * @returns {object} button                - disabledDays2 buttons (greyed out)
   * @returns {function} this.notification() - check to display notification.
   * @returns {function} WriteModal          - reminder input modal
   * @returns {function} ReadModal           - reminder read modal
   * @returns {function} Notification        - notification modal
   */
  render() {
    return this.state.months.outputMonth.map((i) => { // use index of outputMonth array that contains month objects.
      const month = this.state.months.month[i], // get data from /custom/months.js
            dayLetter = month.dayLetter,
            days = month.days,
            disabledDays1 = month.disabledDays1,
            disabledDays2 = month.disabledDays2;

      return [
        <div className="monthContainer">
          <div>
            <button
              className={"monthTitle"}
              onClick={() => this.enterMonthView(month)}
            >
              {month.title}
            </button>
          </div>

          <div className="dayLetter">{dayLetter}</div>

          <div className="daysContainer">
            {disabledDays1.map((j) => {
              return (
                <button 
                  key={j} className={this.disabledClass(disabledDays1)}>
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
                <button key={j} className={this.disabledClass(disabledDays2)}>
                  {j}
                </button>
              );
            })}
          </div>
        </div>,

        this.notification(),
        <WriteModal show={this.state.isOpen}>
          {this.displayInputModal()}
        </WriteModal>,
        <ReadModal show={this.state.isShowReminder}>
          {this.displayReminder()}
        </ReadModal>,
        <Notification show={isTurnedOn}>
          {this.displayNotification()}
        </Notification>,
      ];
    });
  }
}

export { monthSelected, savedDays, title, dbDate };
