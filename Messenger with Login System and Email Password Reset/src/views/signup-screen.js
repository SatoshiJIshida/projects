import React from "react";
import Signup from "../components/login/signup";
import { LoginBtn } from "../components/login/login-btn";

/**
 * Signup Screen.
 * @author [Satoshi Ishida]
 */
export default class SignupScreen extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="innerContainer">
          <React.Fragment>
            <Signup />
            <LoginBtn />
          </React.Fragment>
        </div>
      </div>
    );
  }
}
