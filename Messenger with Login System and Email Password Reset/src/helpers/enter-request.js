import React from "react";
import RequestScreen from "../views/request-screen";
import { root } from "../index";

/**
 * Enter Request Screen function.
 * @author [Satoshi Ishida]
 */
export function enterRequest() {
  root.render(
    <React.StrictMode>
      <RequestScreen />
    </React.StrictMode>
  );
}
