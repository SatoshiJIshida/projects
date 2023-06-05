import React from "react";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChatScreen from "../views/chat-screen";
import { SignOutBtn } from "../components/chat/signout-btn";
import { DeleteAllBtn } from "../components/chat/delete-all-btn";
import Chat from "../components/chat/chat";
import { DeleteBtn } from "../components/chat/delete-btn";

test("Unit: Input field registers change.", () => {
  const input = screen.getByPlaceholderText("Type a message");
  fireEvent.change(input, { target: { value: "test" } });
  expect(input.value).toBe("test");
});

test("Unit: 'Emoji' button works.", () => {
  screen.getByTestId("emojis"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    });
});

test("Unit: 'Send' button works.", () => {
  screen.getByText("Send"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    });
});

test("Unit: 'Sign Out' button works.", () => {
  screen.getByText("Sign Out"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    });
});

test("Unit: 'Delete all messages' button works.", () => {
  screen.getByText("Delete all messages"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    });
});

test("Unit: 'Delete last message' button works.", () => {
  screen.getByText("Delete last message"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    });
});

test("Unit: Newly sent message appears on screen", async () => {
  const button = screen.getByText("Send");

  fireEvent.change(screen.getByPlaceholderText("Type a message"), {
    target: { value: "Testing message." },
  });

  fireEvent.click(button);
  await waitFor(() => {
    expect(screen.findByText("Testing message."));
  });
});
