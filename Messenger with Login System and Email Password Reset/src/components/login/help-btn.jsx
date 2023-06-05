import React from "react";
import "../../index.css";
import { enterRequest } from "../../helpers/enter-request";

/**
 * Help Button functional component.
 * @author [Satoshi Ishida]
 */
export const HelpBtn = () => {
  /**
   * handleRequest -> calls enterRequest() screen to request user credentials.
   */
  function handleRequest() {
    enterRequest();
  }

  return (
    <input
      type="button"
      value="Need help logging in?"
      id="request"
      onClick={handleRequest}
    />
  );
};
