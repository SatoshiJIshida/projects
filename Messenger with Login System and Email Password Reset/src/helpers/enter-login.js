import React from "react";
import LoginScreen from "../views/login-screen";
import { root } from "../index";

/**
 * Enter Login Screen function.
 * @author [Satoshi Ishida]
 */
export function enterLogin() {
  root.render(
    <React.StrictMode>
      <LoginScreen />
    </React.StrictMode>
  );
}
