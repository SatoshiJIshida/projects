import React from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebase-api/firebase";
import { getDatabase, onValue, ref, update } from "firebase/database";
import "../../index.css";
import { InputValidation } from "../../helpers/input-validation";
import { LoadingIcon } from "../loading-icon";
import axios from "axios";
import URLSearchParams from "@ungap/url-search-params/cjs";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

var isExecuted = false;

/**
 * PasswordReset class component for the Messaging App.
 * @author [Satoshi Ishida]
 */
export default class PasswordReset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      passwordShown: "password",
      passwordIcon: "bi-eye-slash",
      isLoading: false,
      userIdNew: "",
    };
  }

  /**
   * getUserId -> get the userID.
   */
  setUserId = () => {
    this.setState({ userIdNew: document.getElementById("userId").value });
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
   * togglePassword -> show or hide password on entry.
   */
  togglePassword = () => {
    if (this.state.passwordShown === "password") {
      this.setState({
        passwordShown: "text",
        passwordIcon: "bi-eye",
      });
    } else {
      this.setState({
        passwordShown: "password",
        passwordIcon: "bi-eye-slash",
      });
    }
  };

  /**
   * handleReset -> on clicking 'Reset' validate password and update the database.
   * @param {Object} e - event.
   */
  handleReset = (e) => {
    e.preventDefault();
    const passOne = document.getElementById("password").value,
      passTwo = document.getElementById("password2").value;
    if (passOne !== passTwo) {
      return;
    }
    const newValidation = new InputValidation();

    if (newValidation.onlyValidatePassword()) {
      this.setState({ password: document.getElementById("password").value });
      this.connectToDB();
      return;
    }
  };

  /**
   * connectToDB -> check the database for the login Id.
   */
  connectToDB = () => {
    try {
      const data = ref(db, "users/" + this.state.userIdNew);
      onValue(data, (snapshot) => {
        const userData = snapshot.val();
        let err = "";

        // Stops infinite loop because it is in a callback function.
        if (isExecuted === false) {
          isExecuted = true;
          this.extractData(userData, err);
          return;
        }
      });
    } catch (err) {
      console.log("Server unavailable: " + err);
      alert("Server unavailable, please refresh the page and try again.");
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
        let expiry = "",
          dbToken = "",
          id = "";

        if (data) {
          for (let i in data) {
            if (i === "resetPasswordExpires") {
              expiry = data[i];
            }
            if (i === "resetPasswordToken") {
              dbToken = data[i];
              console.log("dbToken: " + dbToken);
              id = this.state.userIdNew;
            }
          }
        }

        if (id === this.state.userIdNew) {
          console.log(id);
          this.setState({ isLoading: true });
          this.getUrlToken(expiry, dbToken, id);
          return;
        } else {
          this.setState({ isLoading: false });
          document.getElementById("passwordError").innerHTML =
            "User is not registered.<br>Please enter a correct User ID.";
          isExecuted = false;
          return;
        }
      })
      .catch((err) => {
        throw err;
      });
  };

  /**
   * getUrlToken -> get the token from the address bar to compare with the user token in the database.
   * This ensures that the user is using the authorised link to reset their password.
   * @param {string} expiry - token expiry date as an int.
   * @param {string} dbToken - unique token tied to the unique user.
   * @param {string} id - user id.
   */
  getUrlToken = (expiry, dbToken, id) => {
    let urlToken = window.location.href,
      ref = 0;
    for (let i = 0; i < urlToken.length; i++) {
      if (urlToken[i] === "/") {
        ref = i;
      }
    }
    urlToken = urlToken.slice(ref + 1, urlToken.length);
    console.log("urlToken: " + urlToken);
    this.validate(expiry, dbToken, id, urlToken);
    return;
  };

  /**
   * validate -> check that password reset link hasn't expired,
   * check that token is for a valid session.
   * @param {string} expiry - token expiry date as an int.
   * @param {string} dbToken - unique token tied to the unique user.
   * @param {string} id - user id.
   * @param {string} urlToken - the token from the address bar url link.
   */
  validate = (expiry, dbToken, id, urlToken) => {
    if (expiry < Date.now() && id === this.state.userIdNew) {
      this.setState({ isLoading: false });
      document.getElementById("passwordError").innerHTML =
        "This password reset link has expired.<br>Please request a new password reset link and try again.";
      isExecuted = false;
      return;
    }
    if (dbToken !== urlToken && id === this.state.userIdNew) {
      this.setState({ isLoading: false });
      document.getElementById("passwordError").innerHTML =
        "Unauthorised session.<br>If you requested a password reset,<br>please repeat the previous stages again.";
      isExecuted = false;
      return;
    }

    if (Date.now() < expiry && id === this.state.userIdNew) {
      console.log("date now: " + Date.now());
      console.log("expiry: " + expiry);
      if (dbToken === urlToken) {
        this.hash();
        return;
      }
    }
  };

  /**
   * hash -> hash user password for database write.
   */
  hash = () => {
    try {
      let data = {
        pass: this.state.password,
      };
      const params = new URLSearchParams(data);
      console.log(params.toString());

      axios.post("http://localhost:9000/pass-hashing", params).then((res) => {
        if (res) {
          this.write(res.data);
          data = {};
          return;
        }
      });
    } catch (err) {
      console.log("Hashing did not work: " + err);
      alert("Server too busy. Please refresh the page and try again.");
    }
  };

  /**
   * write -> write the hash to the database.
   * @param {Object} data - password hashing data.
   * @returns {Object} update to firebase database.
   */
  write = (data) => {
    let pass = "";

    for (let i in data) {
      for (let j in data[i]) {
        if (j === "pass") {
          pass = data[i][j];
        }
      }
    }

    try {
      if (pass) {
        update(ref(db, "users/" + this.state.userIdNew), {
          password: pass,
        });
        this.setState({ isLoading: false });
        document.getElementById("passwordError").innerHTML =
          "Password successfully updated.<br>Please refresh this page to return<br>to the Login Screen and sign in.";

        const reference1 =
          "users/" + this.state.userIdNew + "resetPasswordExpires";
        const reference2 =
          "users/" + this.state.userIdNew + "resetPasswordToken";
        const updates = {};
        updates[(reference1, reference2)] = null;
        return update(ref(db), updates);
      }
    } catch (err) {
      console.log(
        "Writing user credentials to the database didn't work: " + err
      );
    }
  };

  /**
   * checkPasswords -> check that both password inputs are the same.
   */
  checkPasswords = () => {
    const passOne = document.getElementById("password").value,
      passTwo = document.getElementById("password2").value;
    if (passOne !== passTwo) {
      document.getElementById("passwordError").innerHTML =
        "Both passwords do not match.";
      return;
    } else {
      document.getElementById("passwordError").innerHTML = "";
      return;
    }
  };

  /**
   * render -> render the PasswordReset component.
   * @returns PasswordReset component.
   */
  render() {
    return (
      <div key="loginContainer">
        <h4>Password Reset:</h4>
        <label
          key="passwordError"
          className="errorText"
          id="passwordError"
        ></label>

        <label htmlFor="userId">Enter User ID:</label>
        <label key="userIdLabel" className="errorText" id="userIdLabel"></label>
        <input
          key="userId"
          onChange={(e) => this.setUserId(e.target.value)}
          type="text"
          id="userId"
        />

        <label htmlFor="password" className="resetText">
          Enter new password:
        </label>
        <input
          onChange={(e) => this.checkPasswords(e.target.value)}
          type={this.state.passwordShown}
          id="password"
        />
        <span
          key="eyeIcon"
          className={this.state.passwordIcon}
          onClick={this.togglePassword}
          data-testid="eyeIcon"
        />
        <label htmlFor="password2" className="resetText">
          Repeat new password:
        </label>
        <input
          onChange={(e) => this.checkPasswords(e.target.value)}
          type={this.state.passwordShown}
          id="password2"
        />

        <div key="loginBtnContainer" id="signup-container">
          <button
            key="loginBtn"
            type="button"
            value="Login"
            id="login"
            onClick={this.handleReset}
          >
            Reset
          </button>
          {this.loading()}
        </div>
      </div>
    );
  }
}
