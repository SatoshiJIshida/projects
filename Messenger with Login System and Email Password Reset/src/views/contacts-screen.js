import React from "react";
import Contacts from "../components/contacts/contacts";
import { BackBtn } from "../components/login/back-btn";

/**
 * Contacts Screen.
 * @author [Satoshi Ishida]
 */
export default class ContactsScreen extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="innerContainer">
          <React.Fragment>
            <Contacts />
            <BackBtn />
          </React.Fragment>
        </div>
      </div>
    );
  }
}
