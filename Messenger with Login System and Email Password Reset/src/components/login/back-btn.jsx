import React from "react";
import "../../index.css";
import { enterLogin } from "../../helpers/enter-login";

/**
 * Back to Login Screen Button functional component.
 * @author [Satoshi Ishida]
 */
export const BackBtn = () => {
  /**
   * handleRequest -> calls enterLogin() screen.
   */
  function handleRequest() {
    enterLogin();
  }

  return (
    <button value="Back" id="return" onClick={handleRequest}>
      Back
    </button>
  );
};
