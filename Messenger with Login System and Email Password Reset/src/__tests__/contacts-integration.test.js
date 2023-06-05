import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactsScreen from "../views/contacts-screen";
import Contacts from "../components/contacts/contacts";
import { BackBtn } from "../components/login/back-btn";

test("Integration: Search Contacts Screen and integrated components render.", () => {
  render(<ContactsScreen />);
  render(<Contacts />);
  render(<BackBtn />);
});

test("Integration: All buttons work together.", () => {
  screen.getByText("Start Chat"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    });

  screen.getByText("Back"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    });
});
