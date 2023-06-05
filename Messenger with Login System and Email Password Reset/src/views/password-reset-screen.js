import React from "react";
import PasswordReset from "../components/password-reset/password-reset";

/**
 * Password Reset Screen.
 * @author [Satoshi Ishida]
 */
export default class PasswordResetScreen extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="innerContainer">
          <PasswordReset />
        </div>
      </div>
    );
  }
}
