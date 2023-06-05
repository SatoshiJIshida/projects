import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PasswordResetScreen from "../views/password-reset-screen";

test("Integration: Password Reset Screen renders.", () => {
  render(<PasswordResetScreen />);
});
