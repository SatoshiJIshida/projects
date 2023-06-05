import React from "react";
import ChatScreen from "../views/chat-screen";
import { root } from "../index";

/**
 * Enter Chat Screen function.
 * @author [Satoshi Ishida]
 */
export function enterChat() {
  root.render(
    <React.StrictMode>
      <ChatScreen />
    </React.StrictMode>
  );
}
