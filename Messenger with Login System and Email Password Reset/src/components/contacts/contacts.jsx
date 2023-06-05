import React from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebase-api/firebase";
import { getDatabase, onValue, ref } from "firebase/database";
import "../../index.css";
import { enterChat } from "../../helpers/enter-chat";
import { signUpId } from "../login/signup";
import { loginId } from "../login/login";
import { InputValidation } from "../../helpers/input-validation";
import { LoadingIcon } from "../loading-icon";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const bcrypt = require("bcryptjs");

var sessionId = "",
  userId = "";

/**
 * Contacts class component for the Messaging App.
 * @author [Satoshi Ishida]
 */
export default class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailSearch: "",
      isLoading: false,
    };
  }

  /**
   * Initialise what we need first.
   */
  componentDidMount() {
    this.processIds();
  }

  /**
   * processIds -> get the id from either signup or login screen.
   * @returns {string} userId - user Id.
   */
  processIds = () => {
    if (loginId) {
      userId = loginId;
      return userId;
    } else {
      userId = signUpId;
      return userId;
    }
  };

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
   * handleSubmit -> on pressing 'Start Chat', we check if the contact email exists.
   * @param {Object} e - event.
   */
  handleSubmit = (e) => {
    e.preventDefault();
    const newValidation = new InputValidation();

    if (newValidation.onlyValidateEmail()) {
      this.setState({
        emailSearch: document.getElementById("email").value,
        isLoading: true,
      });
      this.connectToDB();
      return;
    } else {
      const input = document.getElementById("email");
      input.value = "";
      return;
    }
  };

  /**
   * connectToDB -> connect to database and get data.
   */
  connectToDB = () => {
    try {
      const data = ref(db, "users/");
      onValue(data, (snapshot) => {
        const usersData = snapshot.val();
        let err = "";
        this.extractContact(usersData, err);
        return;
      });
    } catch (err) {
      console.log("Server unavailable: " + err);
      alert("Server unavailable. Please refresh this page and try again.");
    }
  };

  /**
   * extractContact -> process the data.
   * @param {Object} data - data from the database.
   * @param {string} err - empty string for error message.
   */
  extractContact = (data, err) => {
    new Promise((resolve, reject) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
      .then((data) => {
        const emails = [];
        let emailSearch = this.state.emailSearch,
          email = "",
          id = "",
          isMatch = false;

        for (let i in data) {
          // i - user, data[i] - user's nested key/value pairs.
          for (let j in data[i]) {
            // j - user's nested keys, data[i][j] - user's nested key/value pairs.
            if (j === "email") {
              email = data[i][j];
              emails.push({ [i]: email }); // assign email to user Id key.
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
            sessionId = userId + "-" + id; // current user, -, contacted user.
            enterChat();
            emailSearch = "";
            return;
          } else {
            document.getElementById("emailError").innerHTML =
              "User not registered. Please try again.";
            document.getElementById("email").innerHTML = "";
            this.setState({ isLoading: false });
            return;
          }
        }, 1000);
      })
      .catch((err) => {
        alert("Server too busy. Please refresh this page and try again.");
        throw err;
      });
  };

  /**
   * render -> render the Contacts component.
   * @returns Contacts component.
   */
  render() {
    return [
      <div key="searchContainer">
        <h4>Search for contact using email:</h4>
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

        <div key="startContainer" id="signup-container">
          <button
            key="startChat"
            type="button"
            value="Start Chat"
            id="startChat"
            onClick={this.handleSubmit}
          >
            Start Chat
          </button>
          {this.loading()}
        </div>
      </div>,
    ];
  }
}

export { sessionId };
