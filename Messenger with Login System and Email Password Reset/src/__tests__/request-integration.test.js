import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RequestScreen from "../views/request-screen";
import Request from "../components/login/request";
import { BackBtn } from "../components/login/back-btn";

test("Integration: Request Screen and integrated components render.", () => {
  render(<RequestScreen />);
  render(<Request />);
  render(<BackBtn />);
});

test("Integration: All buttons work together.", () => {
  screen.getByText("Send"),
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
