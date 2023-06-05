import React from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebase-api/firebase";
import { getDatabase, onValue, ref, update } from "firebase/database";
import "../../index.css";
import { InputValidation } from "../../helpers/input-validation";
import { LoadingIcon } from "../loading-icon";
import { nanoid } from "nanoid";
import axios from "axios";
import URLSearchParams from "@ungap/url-search-params/cjs";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const bcrypt = require("bcryptjs");

var isExecuted = false,
  userId = "";

/**
 * Request login details class component for the Messaging App.
 * @author [Satoshi Ishida]
 */
export default class Request extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailSearch: "",
      isLoading: false,
    };
  }

  /**
   * loading -> loading icon when waiting.
   * @returns {component} LoadingIcon - loading icon component.
   */
  loading = () => {
    if (this.state.isLoading === true) {
      return <LoadingIcon />;
    }
  };

  /**
   * handleSubmit -> on pushing send, we validate the email and call to search for the email in the database.
   * @param {Object} e - event.
   */
  handleSubmit = (e) => {
    e.preventDefault();
    const newValidation = new InputValidation();
    if (newValidation.onlyValidateEmail()) {
      this.setState(
        {
          emailSearch: document.getElementById("email").value,
        },
        () => {
          this.setState({ isLoading: true });
          this.connectToDB();
          return;
        }
      );
    } else {
      const input = document.getElementById("email");
      input.value = "";
      return;
    }
  };

  /**
   * connectToDB -> search the database for users.
   */
  connectToDB = () => {
    try {
      const data = ref(db, "users/");
      onValue(data, (snapshot) => {
        const usersData = snapshot.val();
        let err = "";

        // Stops infinite loop.
        if (isExecuted === false) {
          isExecuted = true;
          this.extractData(usersData, err);
          return;
        }
      });
    } catch (err) {
      console.log("Server unavailable: " + err);
      alert("Server unavailable please refresh the page and try again.");
    }
  };

  /**
   * extractData-> extract the data from the database.
   * @param {Object} data - data from the database.
   * @param {string} err - empty string for the error message.
   */
  extractData = (data, err) => {
    new Promise((resolve, reject) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
      .then((data) => {
        let emails = [],
          emailSearch = this.state.emailSearch,
          email = "",
          id = "",
          isMatch = false;
        for (let i in data) {
          // i - user, data[i] - user's nested key/value pairs.
          for (let j in data[i]) {
            // j - user's nested keys, data[i][j] - user's nested key/value pairs.
            if (j === "email") {
              email = data[i][j];
              emails.push({ [i]: email });
            }
          }
        }
        console.log(emails);

        try {
          for (let i in emails) {
            for (let j in emails[i]) {
              /**
               * function within loops because we are running this compare function
               * on every element in the array until result is true.
               */
              // eslint-disable-next-line
              bcrypt.compare(emailSearch, emails[i][j]).then((res) => {
                if (res) {
                  console.log(res);
                  isMatch = res;
                  id = j;
                }
              });
            }
          }
        } catch (err) {
          console.log("Error comparing hashes: " + err);
        }

        setTimeout(() => {
          if (isMatch === true) {
            this.updateDatabase(id, emailSearch);
            return;
          } else {
            document.getElementById("emailError").innerHTML =
              "User not registered. Please try again.";
            isExecuted = false;
            document.getElementById("email").innerHTML = "";
            this.setState({ isLoading: false });
            return;
          }
        }, 2000);
      })
      .catch((err) => {
        alert("Server too busy. Please refresh this page and try again.");
        throw err;
      });
  };

  /**
   * updateDatabase -> makes a token and calls the emailServer.
   * @param {string} userId - user Id.
   * @param {string} userEmail - user email.
   */
  updateDatabase = (userId, userEmail) => {
    const token = nanoid(36);
    try {
      update(ref(db, "users/" + userId), {
        resetPasswordToken: token,
        resetPasswordExpires: Date.now() + 3600000, // 3600000 - (date now as int plus 1 hour).
      });
    } catch (err) {
      console.log("Server unavailable: " + err);
      alert("Server unavailable. Please refresh this page and try again.");
    }
    setTimeout(() => {
      this.sendEmail(token, userId, userEmail);
      return;
    }, 1000);
  };

  /**
   * sendEmail -> sets up the email data and post request to the node.js backend.
   * @param {string} token - unique hash token for a password reset session.
   * @param {string} userId - user Id.
   * @param {string} userEmail - email address to send the password reset link email to.
   */
  sendEmail = (token, userId, userEmail) => {
    try {
      console.log("token: " + token);
      console.log("userId: " + userId);
      console.log("userEmail: " + userEmail);
      console.log("env email: " + process.env.REACT_APP_ADDRESS);
      console.log("env password: " + process.env.REACT_APP_PASSWORD);

      let data = {
        token: token,
        userId: userId,
        userEmail: userEmail,
      };

      const params = new URLSearchParams(data);
      console.log(params.toString());

      axios.post("http://localhost:9000/email-server", params).then((res) => {
        console.log(res);
        this.setState({ isLoading: false });
        data = {};
        document.getElementById("emailError").innerHTML =
          "Email successfully sent.";
        isExecuted = false;
        return;
      });
    } catch (err) {
      console.log("Server unavailable: " + err);
      alert("Server too busy. Please refresh this page and try again.");
    }
  };

  /**
   * render -> render the request component.
   * @returns request component.
   */
  render() {
    return [
      <div key="requestContainer">
        <p>
          Enter email address and click send.<br></br>If you are registered you
          will receive<br></br>your ID and a password reset link in an email.
        </p>
        <label
          key="emailError"
          htmlFor="email"
          className="errorText"
          id="emailError"
        ></label>
        <input
          key="emailSearch"
          type="text"
          id="email"
          placeholder="Enter email address here"
        />

        <div key="sendBtnContainer" id="signup-container">
          <button key="send" value="Send" id="send" onClick={this.handleSubmit}>
            Send
          </button>
          {this.loading()}
        </div>
      </div>,
    ];
  }
}

export { userId };
