import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginScreen from "../views/login-screen";
import Login from "../components/login/login";
import { HelpBtn } from "../components/login/help-btn";

test("Integration: Login Screen and integrated components render.", () => {
  render(<LoginScreen />);
  render(<Login />);
  render(<HelpBtn />);
});

test("Integration: All buttons work together.", () => {
  screen.getByText("Login"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    });

  screen.getByText("Need help logging in?"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    });

  screen.getByTestId("eyeIcon"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    });
});
