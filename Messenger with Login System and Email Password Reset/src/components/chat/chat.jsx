import React from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebase-api/firebase";
import { getDatabase, onValue, set, ref } from "firebase/database";
import "../../index.css";
import { signUpId } from "../login/signup";
import { loginId } from "../login/login";
import { ChatInput } from "./chatInput";
import { sessionId } from "../contacts/contacts";
import { DeleteBtn } from "./delete-btn";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

var lineKey = 0,
  comparison = "",
  newSessionId = "",
  isSubmitted = false,
  logDate = String(new Date());

/**
 * Chat class component for the Messaging App.
 * @author [Satoshi Ishida]
 */
export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      textChat: "",
      introText: "",
      collectDisplay: [],
    };
  }

  /**
   * Initialise what we need first.
   */
  componentDidMount() {
    this.processIds();
    this.getSession();

    console.log("sessionId: " + sessionId);
    console.log("comparison: " + comparison);
  }

  /**
   * processIds -> get the id from either signup or login screen.
   */
  processIds = () => {
    if (loginId) {
      this.setState({ userId: loginId });
      return;
    } else {
      this.setState({ userId: signUpId });
      return;
    }
  };

  /**
   * getSession -> get chat session on login for chat log history.
   * If it doesn't exist, then create a new session.
   */
  getSession = () => {
    let left = "",
      right = "";
    for (let i = 0; i < sessionId.length; i++) {
      if (sessionId[i] === "-") {
        left = sessionId.slice(0, i);
        right = sessionId.slice(i + 1, sessionId.length);
        comparison = right + "-" + left; // The reverse session ID.
      }
    }

    try {
      /**
       * First we create the chatLog folder with a dummy subfolder,
       * for the directory to always persist on deleting all messages from a session.
       */
      set(ref(db, "chatLog/" + 0), {
        line: "Initialised.", // Initialise.
      });
      // Then we create the session folder if it doesn't exist yet.
      set(ref(db, "chatLog/" + sessionId + "/" + 0), {
        line: "Welcome, type to begin:",
      });
    } catch (err) {
      console.log("Server unavailable: " + err);
      alert("Server unavailable.");
    }

    try {
      const checkSession = ref(db, "chatLog/");
      onValue(checkSession, (snapshot) => {
        const sessionData = snapshot.val(),
          sessionKey = Object.keys(sessionData);
        let err = "";
        /**
         * Check if the sessionKey array includes the current sessionId and the reverse sessionId.
         * If this is the case, then 2 nodes have already communicated.
         */
        if (sessionKey.includes(sessionId) && sessionKey.includes(comparison)) {
          this.checkLogs(sessionData, err);
          return;
        } else {
          // Else this is 1 node starting the chat.
          newSessionId = sessionId;
          this.checkLogs(sessionData, err);
          return;
        }
      });
    } catch (err) {
      console.log("Server unavailable: " + err);
      alert("Server unavailable. Please refresh the page and try again.");
    }
  };

  /**
   * checkLogs -> check chat logs for which sessionId we need to use.
   * @param {Object} data - chatLog data.
   * @param {string} err - an empty string to use for the error message.
   */
  checkLogs = (data, err) => {
    new Promise((resolve, reject) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
      .then((data) => {
        let size1 = 0,
          size2 = 0;
        for (let i in data) {
          // i - sessionId, data[i] - chat's nested key/value pairs.
          if (i === sessionId) {
            size1 = Object.keys(data[i]).length; // number of lines in the chat log.
          }
          if (i === comparison) {
            size2 = Object.keys(data[i]).length;
          }
          const max = Math.max(size1, size2);
          /**
           * The id with the longest chat log history is always the initiator of the chat,
           * so we always use this id for the chat log history.
           */
          if ((i === sessionId || i === comparison) && data[i].length === max) {
            newSessionId = i;
            this.getLogs();
          } else {
            this.getLogs();
          }
        }
      })
      .catch((err) => {
        throw err;
      });
  };

  /**
   * getLogs -> get the chat logs.
   */
  getLogs = () => {
    try {
      const data = ref(db, "chatLog/" + newSessionId);
      onValue(data, (snapshot) => {
        const logsData = snapshot.val();
        let err = "";
        this.extractLogs(logsData, err);
        return;
      });
    } catch (err) {
      console.log("Server unavailable: " + err);
      alert("Server unavailable. Please refresh the page and try again.");
    }
  };

  /**
   * extractLogs -> extract the chat logs.
   * @param {Object} data - chat log data.
   * @param {string} err - empty string for the error message.
   */
  extractLogs = (data, err) => {
    new Promise((resolve, reject) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
      .then((data) => {
        const collectUsers = [],
          collectLines = [],
          collectDates = [];
        for (let i in data) {
          // data - sessionId, i - line number, data[i] - line's nested key/value pair.
          for (let j in data[i]) {
            // j - line's nested keys, data[i][j] - line's nested key/value pairs.
            if (j === "user") {
              // get user ID.
              collectUsers.push(
                <p className="displayId">{Object.values(data[i][j])}</p>
              );
            }
            if (j === "line") {
              // get intro of chat.
              if (
                data[i][j] === "Welcome, type to begin:" ||
                data[i][j] === "Chat was emptied, start chat again:"
              ) {
                this.setState({
                  introText: <p className="lines">{data[i][j]}</p>,
                });
              } else {
                // get logs.
                lineKey = i; // keep track of the latest line number.
                collectLines.push(
                  <p className="lines">{Object.values(data[i][j])}</p>
                );
              }
            }
            if (j === "date") {
              // get date of chat log.
              collectDates.push(
                <p className="date">{Object.values(data[i][j])}</p>
              );
            }
          }
        }

        const collectDisplay = [];
        // make the display of user/line/date.
        for (let i = 0; i < collectLines.length; i++) {
          collectDisplay.push(
            collectUsers[i],
            collectLines[i],
            collectDates[i]
          );
        }
        this.setState({ collectDisplay: collectDisplay });
        return;
      })
      .catch((err) => {
        throw err;
      });
  };

  /**
   * handleSubmit -> on sending a message, we need to write it to the database.
   * @param {Object} e - event.
   */
  handleSubmit = (e) => {
    e.preventDefault();

    this.setState(
      {
        textChat: document.getElementById("inputText").value,
      },
      () => {
        logDate = String(new Date());
        this.processDate();
        return;
      }
    );
  };

  /**
   * processDate -> process the date for the chat logs.
   */
  processDate = () => {
    for (let i = 0; i < logDate.length; i++) {
      if (logDate[i] === ":") {
        logDate = logDate.slice(0, i + 6);
      }
    }
    this.setSubmit();
    return;
  };

  /**
   * setSubmit - set isSubmitted to true to clear input and emoji container, then false again. Calls write().
   */
  setSubmit = () => {
    this.write();
    isSubmitted = true;
    setTimeout(() => {
      isSubmitted = false;
      return;
    }, 10);
  };

  /**
   * write -> write data to the database.
   */
  write = () => {
    try {
      if (this.state.textChat) {
        lineKey++;
        set(ref(db, "chatLog/" + newSessionId + "/" + lineKey), {
          user: this.state.userId,
          line: this.state.textChat,
          date: logDate,
        });
        return;
      }
    } catch (err) {
      console.log("Server unavailable: " + err);
      alert("Server unavailable. Please try again.");
    }
  };

  /**
   * onKeyPress -> allows the user to hit the 'Enter' key to send a message.
   * @param {Object} e - event.
   */
  onKeyPress = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      e.preventDefault();
      e.stopPropagation();
      this.handleSubmit();
      return;
    }
  };

  /**
   * render -> render the Chat component.
   * @returns Chat component.
   */
  render() {
    return (
      <React.Fragment>
        <div key="chatContainer" id="chatContainer">
          <h4>Messenger</h4>
          <div key="chatGroup" className="chatGroup">
            {this.state.introText}
            {this.state.collectDisplay.map((el, i) => {
              return <div key={i}>{el}</div>;
            })}
          </div>

          <form
            key="sendForm"
            id="submitContainer"
            onSubmit={this.handleSubmit}
          >
            <ChatInput />
            <button
              key="submit"
              type="submit"
              id="submit"
              onKeyPress={(e) => this.onKeyPress(e)}
            >
              Send
            </button>
          </form>
          <DeleteBtn />
        </div>
      </React.Fragment>
    );
  }
}

export { newSessionId, lineKey, isSubmitted };
