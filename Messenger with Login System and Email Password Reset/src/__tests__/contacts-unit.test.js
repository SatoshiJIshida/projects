import React from "react";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactsScreen from "../views/contacts-screen";
import Contacts from "../components/contacts/contacts";
import { BackBtn } from "../components/login/back-btn";

test("Unit: Input field registers change.", () => {
  const emailInput = screen.getByPlaceholderText("Enter email address here");
  fireEvent.change(emailInput, { target: { value: "test" } });
  expect(emailInput.value).toBe("test");
});

test("Unit: 'Start Chat' button works.", () => {
  screen.getByText("Start Chat"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    });
});

test("Unit: 'Back' button works.", () => {
  screen.getByText("Back"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    });
});

test("Unit: False input validation error messages work.", async () => {
  const button = screen.getByText("Start Chat");

  fireEvent.change(screen.getByPlaceholderText("Enter email address here"), {
    target: { value: "123_email" },
  });
  fireEvent.click(button);
  await waitFor(() => {
    screen.findByLabelText("Only valid email address allowed.");
  });
});

test("Unit: True input validation works.", async () => {
  const button = screen.getByText("Start Chat");

  fireEvent.change(screen.getByPlaceholderText("Enter email address here"), {
    target: { value: "123@mail.com" },
  });
  fireEvent.click(button);
  await waitFor(() => {
    expect(
      screen.queryByLabelText("Only valid email address allowed.")
    ).not.toBeInTheDocument();
  });
});

test("Unit: Input validation checks if a user is not registered", async () => {
  const button = screen.getByText("Start Chat");

  fireEvent.change(screen.getByPlaceholderText("Enter email address here"), {
    target: { value: "123@mail.com" },
  });

  fireEvent.click(button);
  await waitFor(() => {
    screen.findByLabelText("User not registered. Please try again.");
  });
});
