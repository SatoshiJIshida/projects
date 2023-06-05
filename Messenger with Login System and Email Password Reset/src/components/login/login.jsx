import React from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebase-api/firebase";
import { getDatabase, onValue, ref } from "firebase/database";
import "../../index.css";
import { enterContacts } from "../../helpers/enter-contacts";
import { InputValidation } from "../../helpers/input-validation";
import { LoadingIcon } from "../loading-icon";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const bcrypt = require("bcryptjs");

var loginId = "";

/**
 * Login class component for the Messaging App.
 * @author [Satoshi Ishida]
 */
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      password: "",
      passwordShown: "password",
      passwordIcon: "bi-eye-slash",
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
   * handleLogin -> on clicking 'Login' validate password.
   * @param {Object} e - event.
   */
  handleLogin = (e) => {
    e.preventDefault();
    const newValidation = new InputValidation();
    if (newValidation.onlyValidatePassword()) {
      this.setState(
        {
          userId: document.getElementById("loginID").value,
          password: document.getElementById("password").value,
        },
        () => {
          loginId = this.state.userId; // store the login id for the contacts screen.
          this.setState({ isLoading: true });
          this.connectToDB();
          return;
        }
      );
    } else {
      const inputFields = document.getElementsByTagName("input");
      for (let i = 0; i < inputFields.length; i++) {
        if (
          inputFields[i].type === "text" ||
          inputFields[i].type === "password"
        ) {
          inputFields[i].value = "";
        }
      }
      return;
    }
  };

  /**
   * connectToDB -> check the database for the loginId.
   */
  connectToDB = () => {
    try {
      const data = ref(db, "users/" + loginId);
      onValue(data, (snapshot) => {
        const userData = snapshot.val();
        let err = "";
        this.processLogin(userData, err);
        return;
      });
    } catch (err) {
      console.log("Server unavailable: " + err);
      alert("Server unavailable. Please refresh this page and try again.");
    }
  };

  /**
   * processLogin -> process the data from the database.
   * @param {Object} data - loginId data i.e. name/email/password.
   * @param {string} err - empty string for error message.
   */
  processLogin = (data, err) => {
    new Promise((resolve, reject) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
      .then((data) => {
        let plaintext = this.state.password,
          databaseHash = "",
          isMatch = false;

        if (data) {
          for (let i in data) {
            // i: nothing typed - parent key (user), id typed - nested key/value pairs.
            if (i === "password") {
              databaseHash = data[i];
            }
          }
          console.log(loginId);
          console.log(plaintext);
          console.log(databaseHash); // 12345qW-
          try {
            bcrypt.compare(plaintext, databaseHash).then((res) => {
              if (res) {
                console.log(res);
                isMatch = res;
              }
            });
          } catch (err) {
            console.log("Error comparing hashes: " + err);
          }
          // needs time for the hashes to be compared.
          setTimeout(() => {
            if (isMatch === true) {
              this.setState({
                password: "",
                isLoading: false,
              });
              enterContacts();
              return;
            } else {
              document.getElementById("loginError").innerHTML =
                "Incorrect user ID and/or password was entered.";
              this.setState({
                password: "",
                isLoading: false,
              });
              const inputFields = document.getElementsByTagName("input");
              // Algorithm running time 0.09ms. Map was 0.2ms.
              for (let i = 0; i < inputFields.length; i++) {
                if (
                  inputFields[i].type === "text" ||
                  inputFields[i].type === "password"
                ) {
                  inputFields[i].value = "";
                }
              }
              return;
            }
          }, 100);
        } else {
          document.getElementById("loginError").innerHTML =
            "User does not exist. Please try again.";
          this.setState({ isLoading: false });
          return;
        }
      })
      .catch((err) => {
        throw err;
      });
  };

  /**
   * render -> render the Login component.
   * @returns Login component.
   */
  render() {
    return (
      <div key="loginContainer">
        <h4>Login:</h4>
        <label key="loginError" className="errorText" id="loginError"></label>
        <label htmlFor="loginID">User ID:</label>
        <label key="idError" className="errorText" id="idError"></label>
        <input type="text" id="loginID" />

        <label htmlFor="password">Password:</label>
        <label
          key="passwordError"
          htmlFor="password"
          className="errorText"
          id="passwordError"
        ></label>
        <input type={this.state.passwordShown} id="password" />
        <span
          key="eyeIcon"
          className={this.state.passwordIcon}
          onClick={this.togglePassword}
          data-testid="eyeIcon"
        />

        <div key="loginBtnContainer" id="signup-container">
          <button
            key="loginBtn"
            type="button"
            value="Login"
            id="login"
            onClick={this.handleLogin}
          >
            Login
          </button>
          {this.loading()}
        </div>
      </div>
    );
  }
}

export { loginId };
