import React from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebase-api/firebase";
import { getDatabase, onValue, ref, update } from "firebase/database";
import "../../index.css";
import { enterContacts } from "../../helpers/enter-contacts";
import { InputValidation } from "../../helpers/input-validation";
import { LoadingIcon } from "../loading-icon";
import axios from "axios";
import URLSearchParams from "@ungap/url-search-params/cjs";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

var signUpId = "";

/**
 * SignUp class component for the Messaging App.
 * @author [Satoshi Ishida]
 */
export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      name: "",
      email: "",
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
   * handleSignUp -> on clicking 'Sign Up', we validate user input and call the database.
   * @param {Object} e - event.
   */
  handleSignUp = (e) => {
    e.preventDefault();
    const newValidation = new InputValidation();

    if (newValidation.validation()) {
      this.setState(
        {
          userId: document.getElementById("userId").value,
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          password: document.getElementById("password").value,
        },
        () => {
          signUpId = this.state.userId;
          this.setState({ isLoading: true });
          this.connectToDB();
          return;
        }
      );
    } else {
      const inputFields = document.getElementsByTagName("input");
      // Algorithm running time 0.09ms. Map was 0.2ms.
      for (let i = 0; i < inputFields.length; i++) {
        if (
          inputFields[i].type === "text" ||
          inputFields[i].type === "password"
        ) {
          inputFields[i].value = "";
        }
        return;
      }
    }
  };

  /**
   * connectToDB -> check the database for user.
   */
  connectToDB = () => {
    try {
      const data = ref(db, "users/" + signUpId);
      onValue(data, (snapshot) => {
        const userData = snapshot.val();
        if (userData) {
          document.getElementById("userExistsError").innerHTML =
            "User already exists. Click 'Or Login' and 'Need help logging in?'";
          this.setState({ isLoading: false });
          return;
        } else if (this.state.userId.length === 0) {
          document.getElementById("userExistsError").innerHTML =
            "Nothing entered. Please try again.";
          this.setState({ isLoading: false });
          return;
        } else {
          this.hash();
          return;
        }
      });
    } catch (err) {
      console.log("Server unavailable: " + err);
      alert("Server unavailable, please refresh this page and try again.");
    }
  };

  /**
   * hash -> hash the user name / email / password.
   */
  hash = () => {
    try {
      let data = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      };
      const params = new URLSearchParams(data);
      console.log(params.toString());

      axios.post("http://localhost:9000/hashing", params).then((res) => {
        if (res) {
          console.log(res.data);
          this.write(res.data);
          data = {};
          return;
        }
      });
    } catch (err) {
      console.log("Hashing did not work: " + err);
      alert("Server unavailable, please refresh this page and try again.");
    }
  };

  /**
   * write -> write the hashes to the database.
   * @param {Object} data - hashing data.
   */
  write = (data) => {
    let name = "",
      email = "",
      pass = "";

    for (let i in data) {
      for (let j in data[i]) {
        if (j === "name") {
          name = data[i][j];
        }
        if (j === "email") {
          email = data[i][j];
        }
        if (j === "pass") {
          pass = data[i][j];
        }
      }
    }

    try {
      update(ref(db, "users/" + signUpId), {
        name: name,
        email: email,
        password: pass,
      });
      this.setState({ isLoading: false });
    } catch (err) {
      console.log(
        "Writing user credentials to the database didn't work: " + err
      );
    }
    enterContacts();
    return;
  };

  /**
   * render -> render SignUp component.
   * @returns SignUp component.
   */
  render() {
    return (
      <form key="signupContainer">
        <h4>Sign up:</h4>
        <label htmlFor="userId">User ID:</label>
        <label
          key="idError"
          htmlFor="userId"
          className="errorText"
          id="idError"
        ></label>
        <input type="text" id="userId" />

        <label htmlFor="name">Name:</label>
        <label
          key="nameError"
          htmlFor="name"
          className="errorText"
          id="nameError"
        ></label>
        <input type="text" id="name" />

        <label htmlFor="email">Email:</label>
        <label
          key="emailError"
          htmlFor="email"
          className="errorText"
          id="emailError"
        ></label>
        <input type="text" id="email" />

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

        <div key="signupBtnContainer" id="signup-container">
          <button
            key="signupBtn"
            type="button"
            value="Sign Up"
            id="signup"
            onClick={this.handleSignUp}
          >
            Sign Up
          </button>
          {this.loading()}
        </div>
        <label
          key="userExistsError"
          htmlFor="password"
          className="errorText"
          id="userExistsError"
        ></label>
      </form>
    );
  }
}

export { signUpId };
