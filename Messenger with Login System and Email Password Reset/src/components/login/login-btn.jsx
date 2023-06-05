import React from "react";
import "../../index.css";
import { enterLogin } from "../../helpers/enter-login";

/**
 * Login Button functional component.
 * @author [Satoshi Ishida]
 */
export const LoginBtn = () => {
  /**
   * handleRequest -> calls enterLogin() screen.
   */
  function handleRequest() {
    enterLogin();
  }

  return (
    <button id="loginBtn" onClick={handleRequest}>
      Or Login
    </button>
  );
};
