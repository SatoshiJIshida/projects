import React from "react";
import Login from "../components/login/login";
import { HelpBtn } from "../components/login/help-btn";

/**
 * Login Screen.
 * @author [Satoshi Ishida]
 */
export default class LoginScreen extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="innerContainer">
          <React.Fragment>
            <Login />
            <HelpBtn />
          </React.Fragment>
        </div>
      </div>
    );
  }
}
