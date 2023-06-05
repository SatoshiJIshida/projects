import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignupScreen from "../views/signup-screen";
import SignUp from "../components/login/signup";
import { LoginBtn } from "../components/login/login-btn";

test("Integration: Signup Screen and integrated components render.", () => {
  render(<SignupScreen />);
  render(<SignUp />);
  render(<LoginBtn />);
});

test("Integration: All buttons work together.", () => {
  screen.getByText("Sign Up"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    });

  screen.getByText("Or Login"),
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
