import React from "react";
import { screen, fireEvent, waitFor, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PasswordResetScreen from "../views/password-reset-screen";

// This one needs another render.
const root = document.createElement("root");
beforeEach(() => {
  document.body.appendChild(root);

  const content = (
    <React.StrictMode>
      <PasswordResetScreen />
    </React.StrictMode>
  );

  render(content, root);
});

test("Unit: Input fields register change.", () => {
  const inputId = screen.getByLabelText(/Enter User ID:/i);
  fireEvent.change(inputId, { target: { value: "testingID" } });
  expect(inputId.value).toBe("testingID");

  const inputPassword = screen.getByLabelText(/Enter new password:/i);
  fireEvent.change(inputPassword, { target: { value: "testingPassword" } });
  expect(inputPassword.value).toBe("testingPassword");

  const inputPassword2 = screen.getByLabelText(/Repeat new password:/i);
  fireEvent.change(inputPassword2, { target: { value: "testingPassword2" } });
  expect(inputPassword2.value).toBe("testingPassword2");
});

test("Unit: 'Reset' button works.", () => {
  screen.getByText("Reset"),
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
  const button = screen.getByText("Reset");

  /*
   * Using correct upper and lower case letters, numbers and a symbol.
   * 7 characters long (must be at least 8).
   */
  fireEvent.change(screen.getByLabelText(/Enter new password:/i), {
    target: { value: "1234Wq-" },
  });
  fireEvent.click(button);
  await waitFor(() => {
    screen.findByLabelText(
      // removing breakpoints <br> within the text.
      "Password must be between 8-50 characters.Containing upper and lower case letters,numbers and a symbol."
    );
  });

  // 51 characters long (must be 8-50).
  fireEvent.change(screen.getByLabelText(/Enter new password:/i), {
    target: { value: "12345678901234567890123456789012345678901234567-Wq1" },
  });
  fireEvent.click(button);
  await waitFor(() => {
    screen.findByLabelText(
      "Password must be between 8-50 characters.Containing upper and lower case letters,numbers and a symbol."
    );
  });

  // no numbers or upper case letters or symbols.
  fireEvent.change(screen.getByLabelText(/Enter new password:/i), {
    target: { value: "qqqqqqqqqqqqqqqq" },
  });
  fireEvent.click(button);
  await waitFor(() => {
    screen.findByLabelText(
      "Password must be between 8-50 characters.Containing upper and lower case letters,numbers and a symbol."
    );
  });

  // no numbers or lower case letters or symbols.
  fireEvent.change(screen.getByLabelText(/Enter new password:/i), {
    target: { value: "QQQQQQQQQQQQQQQQQ" },
  });
  fireEvent.click(button);
  await waitFor(() => {
    screen.findByLabelText(
      "Password must be between 8-50 characters.Containing upper and lower case letters,numbers and a symbol."
    );
  });

  // no upper or lower case letters or symbols.
  fireEvent.change(screen.getByLabelText(/Enter new password:/i), {
    target: { value: "1111111111111111" },
  });
  fireEvent.click(button);
  await waitFor(() => {
    screen.findByLabelText(
      "Password must be between 8-50 characters.Containing upper and lower case letters,numbers and a symbol."
    );
  });

  // no symbols.
  fireEvent.change(screen.getByLabelText(/Enter new password:/i), {
    target: { value: "1234QQwwrghfdghfg" },
  });
  fireEvent.click(button);
  await waitFor(() => {
    screen.findByLabelText(
      "Password must be between 8-50 characters.Containing upper and lower case letters,numbers and a symbol."
    );
  });

  /*
   * Tests for 2nd password input.
   * Using correct upper and lower case letters, numbers and a symbol.
   * 7 characters long (must be at least 8).
   */
  fireEvent.change(screen.getByLabelText(/Repeat new password:/i), {
    target: { value: "1234Wq-" },
  });
  fireEvent.click(button);
  await waitFor(() => {
    screen.findByLabelText(
      // removing breakpoints <br> within the text.
      "Password must be between 8-50 characters.Containing upper and lower case letters,numbers and a symbol."
    );
  });

  // 51 characters long (must be 8-50).
  fireEvent.change(screen.getByLabelText(/Repeat new password:/i), {
    target: { value: "12345678901234567890123456789012345678901234567-Wq1" },
  });
  fireEvent.click(button);
  await waitFor(() => {
    screen.findByLabelText(
      "Password must be between 8-50 characters.Containing upper and lower case letters,numbers and a symbol."
    );
  });

  // no numbers or upper case letters or symbols.
  fireEvent.change(screen.getByLabelText(/Repeat new password:/i), {
    target: { value: "qqqqqqqqqqqqqqqq" },
  });
  fireEvent.click(button);
  await waitFor(() => {
    screen.findByLabelText(
      "Password must be between 8-50 characters.Containing upper and lower case letters,numbers and a symbol."
    );
  });

  // no numbers or lower case letters or symbols.
  fireEvent.change(screen.getByLabelText(/Repeat new password:/i), {
    target: { value: "QQQQQQQQQQQQQQQQQ" },
  });
  fireEvent.click(button);
  await waitFor(() => {
    screen.findByLabelText(
      "Password must be between 8-50 characters.Containing upper and lower case letters,numbers and a symbol."
    );
  });

  // no upper or lower case letters or symbols.
  fireEvent.change(screen.getByLabelText(/Repeat new password:/i), {
    target: { value: "1111111111111111" },
  });
  fireEvent.click(button);
  await waitFor(() => {
    screen.findByLabelText(
      "Password must be between 8-50 characters.Containing upper and lower case letters,numbers and a symbol."
    );
  });

  // no symbols.
  fireEvent.change(screen.getByLabelText(/Repeat new password:/i), {
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
  const button = screen.getByText("Reset");

  fireEvent.change(screen.getByLabelText(/Enter new password:/i), {
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

  fireEvent.change(screen.getByLabelText(/Repeat new password:/i), {
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
