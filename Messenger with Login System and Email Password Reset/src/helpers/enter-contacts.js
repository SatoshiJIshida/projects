import React from "react";
import ContactsScreen from "../views/contacts-screen";
import { root } from "../index";

/**
 * Enter Contacts Screen function.
 * @author [Satoshi Ishida]
 */
export function enterContacts() {
  root.render(
    <React.StrictMode>
      <ContactsScreen />
    </React.StrictMode>
  );
}
