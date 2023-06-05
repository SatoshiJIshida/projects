import React from "react";
import "../../index.css";
import { enterLogin } from "../../helpers/enter-login";

/**
 * SignOut button functional component.
 * @author [Satoshi Ishida]
 */
export const SignOutBtn = () => {
  /**
   * handleRequest -> calls enterLogin() screen.
   */
  function handleRequest() {
    window.location.reload();
    enterLogin();
  }

  return (
    <button value="Sign Out" id="signout" onClick={handleRequest}>
      Sign Out
    </button>
  );
};
