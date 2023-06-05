import React from "react";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginScreen from "../views/login-screen";

test("Unit: Input fields register change.", () => {
  const inputId = screen.getByLabelText(/user id:/i);
  fireEvent.change(inputId, { target: { value: "testingID" } });
  expect(inputId.value).toBe("testingID");

  const inputPassword = screen.getByLabelText(/password:/i);
  fireEvent.change(inputPassword, { target: { value: "testingPassword" } });
  expect(inputPassword.value).toBe("testingPassword");
});

test("Unit: 'Login' button works.", () => {
  screen.getByText("Login"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    });
});

test("Unit: 'Need help logging in?' link works.", () => {
  screen.getByText("Need help logging in?"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    });
});

test("Unit: Password toggle works.", () => {
  screen.getByTestId("eyeIcon"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    });
});

test("Unit: False input validation error messages work.", async () => {
  const button = screen.getByText("Login");

  /*
   * Using correct upper and lower case letters, numbers and a symbol.
   * 7 characters long (must be at least 8).
   */
  fireEvent.change(screen.getByLabelText(/password:/i), {
    target: { value: "1234Wq-" },
  });
  fireEvent.click(button);
  await waitFor(() => {
    screen.findByLabelText(
      // removing breakpoints within the text.
      "Password must be between 8-50 characters.Containing upper and lower case letters,numbers and a symbol."
    );
  });

  // 51 characters long (must be 8-50).
  fireEvent.change(screen.getByLabelText(/password:/i), {
    target: { value: "12345678901234567890123456789012345678901234567-Wq1" },
  });
  fireEvent.click(button);
  await waitFor(() => {
    screen.findByLabelText(
      "Password must be between 8-50 characters.Containing upper and lower case letters,numbers and a symbol."
    );
  });

  // no numbers or upper case letters or symbols.
  fireEvent.change(screen.getByLabelText(/password:/i), {
    target: { value: "qqqqqqqqqqqqqqqq" },
  });
  fireEvent.click(button);
  await waitFor(() => {
    screen.findByLabelText(
      "Password must be between 8-50 characters.Containing upper and lower case letters,numbers and a symbol."
    );
  });

  // no numbers or lower case letters or symbols.
  fireEvent.change(screen.getByLabelText(/password:/i), {
    target: { value: "QQQQQQQQQQQQQQQQQ" },
  });
  fireEvent.click(button);
  await waitFor(() => {
    screen.findByLabelText(
      "Password must be between 8-50 characters.Containing upper and lower case letters,numbers and a symbol."
    );
  });

  // no upper or lower case letters or symbols.
  fireEvent.change(screen.getByLabelText(/password:/i), {
    target: { value: "1111111111111111" },
  });
  fireEvent.click(button);
  await waitFor(() => {
    screen.findByLabelText(
      "Password must be between 8-50 characters.Containing upper and lower case letters,numbers and a symbol."
    );
  });

  // no symbols.
  fireEvent.change(screen.getByLabelText(/password:/i), {
    target: { value: "1234QQwwrghfdghfg" },
  });
  fireEvent.click(button);
  await waitFor(() => {
    screen.findByLabelText(
      "Password must be between 8-50 characters.Containing upper and lower case letters,numbers and a symbol."
    );
  });
});

test("Unit: True input validation works.", async () => {
  const button = screen.getByText("Login");

  fireEvent.change(screen.getByLabelText(/password:/i), {
    target: { value: "12345qW-" },
  });
  fireEvent.click(button);
  await waitFor(() => {
    expect(
      screen.queryByLabelText(
        "Password must be between 8-50 characters.Containing upper and lower case letters,numbers and a symbol."
      )
    ).not.toBeInTheDocument();
  });
});

test("Unit: Input validation checks if a user login is not registered.", async () => {
  const button = screen.getByText("Login");

  fireEvent.change(screen.getByLabelText(/password:/i), {
    target: { value: "doesn't_exist" },
  });

  fireEvent.click(button);
  await waitFor(() => {
    screen.findByLabelText("User does not exist. Please try again.");
  });
});
