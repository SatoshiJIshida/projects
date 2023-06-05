import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChatScreen from "../views/chat-screen";
import { SignOutBtn } from "../components/chat/signout-btn";
import { DeleteAllBtn } from "../components/chat/delete-all-btn";
import Chat from "../components/chat/chat";
import { DeleteBtn } from "../components/chat/delete-btn";

test("Integration: Chat Screen and integrated components render.", () => {
  render(<ChatScreen />);
  render(<SignOutBtn />);
  render(<DeleteAllBtn />);
  render(<Chat />);
  render(<DeleteBtn />);
});

test("Integration: All buttons work together.", () => {
  screen.getByText("Sign Out"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    });

  screen.getByText("Delete all messages"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    });

  screen.getByTestId("emojis"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    });

  screen.getByText("Send"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    });

  screen.getByText("Delete last message"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    });
});
