import React from "react";
import Chat from "../components/chat/chat";
import { DeleteAllBtn } from "../components/chat/delete-all-btn";
import { SignOutBtn } from "../components/chat/signout-btn";

/**
 * Chat Screen.
 * @author [Satoshi Ishida]
 */
export default class ChatScreen extends React.Component {
  render() {
    return (
      <div id="moveUp">
        <div className="container">
          <div className="innerContainer">
            <React.Fragment>
              <SignOutBtn />
              <DeleteAllBtn />
              <Chat />
            </React.Fragment>
          </div>
        </div>
      </div>
    );
  }
}
