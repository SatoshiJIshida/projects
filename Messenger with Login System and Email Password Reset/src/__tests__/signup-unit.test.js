import React from "react";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignupScreen from "../views/signup-screen";

test("Unit: Input fields register change.", () => {
  const inputId = screen.getByLabelText(/user id:/i);
  fireEvent.change(inputId, { target: { value: "testingID" } });
  expect(inputId.value).toBe("testingID");

  const inputName = screen.getByLabelText(/name:/i);
  fireEvent.change(inputName, { target: { value: "testingName" } });
  expect(inputName.value).toBe("testingName");

  const inputEmail = screen.getByLabelText(/email:/i);
  fireEvent.change(inputEmail, { target: { value: "testingEmail@mail.com" } });
  expect(inputEmail.value).toBe("testingEmail@mail.com");

  const inputPassword = screen.getByLabelText(/password:/i);
  fireEvent.change(inputPassword, { target: { value: "testingPassword" } });
  expect(inputPassword.value).toBe("testingPassword");
});

test("Unit: 'Sign Up' button works.", () => {
  screen.getByText("Sign Up"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    });
});

test("Unit: 'Or Login' button works.", () => {
  screen.getByText("Or Login"),
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
  const button = screen.getByText("Sign Up");

  fireEvent.change(screen.getByLabelText(/name:/i), {
    target: { value: "123_name" },
  });
  fireEvent.click(button);
  await waitFor(() => {
    expect(
      screen.findByLabelText("Only letters, space and underscore allowed.")
    );
  });

  fireEvent.change(screen.getByLabelText(/email:/i), {
    target: { value: "123_email" },
  });
  fireEvent.click(button);
  await waitFor(() => {
    screen.findByLabelText("Only valid email address allowed.");
  });

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
  const button = screen.getByText("Sign Up");

  fireEvent.change(screen.getByLabelText(/name:/i), {
    target: { value: "one" },
  });
  fireEvent.click(button);
  await waitFor(() => {
    expect(
      screen.queryByLabelText("Only letters, space and underscore allowed.")
    ).not.toBeInTheDocument();
  });

  fireEvent.change(screen.getByLabelText(/email:/i), {
    target: { value: "one@mail.com" },
  });
  fireEvent.click(button);
  await waitFor(() => {
    expect(
      screen.queryByLabelText("Only valid email address allowed.")
    ).not.toBeInTheDocument();
  });

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

test("Unit: Input validation checks if a user already exists.", async () => {
  const button = screen.getByText("Sign Up");

  fireEvent.change(screen.getByLabelText(/user id:/i), {
    target: { value: "person" },
  });

  fireEvent.change(screen.getByLabelText(/name:/i), {
    target: { value: "Person" },
  });

  fireEvent.change(screen.getByLabelText(/email:/i), {
    target: { value: "person@mail.com" },
  });

  fireEvent.change(screen.getByLabelText(/password:/i), {
    target: { value: "12345qW-" },
  });

  fireEvent.click(button);
  await waitFor(() => {
    expect(
      screen.findByLabelText(
        "User already exists. Click 'Or Login' and 'Need help logging in?'"
      )
    );
  });
});
