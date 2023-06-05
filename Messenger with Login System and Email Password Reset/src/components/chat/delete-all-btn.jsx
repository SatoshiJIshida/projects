import React from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebase-api/firebase";
import { getDatabase, ref, set, update } from "firebase/database";
import "../../index.css";
import { newSessionId } from "./chat";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

/**
 * Delete All Button functional component to delete all messages.
 * @author [Satoshi Ishida]
 */
export const DeleteAllBtn = () => {
  /**
   * handleDeleteAll -> deletes all messages from a session.
   * @returns updates the database and calls initAgain().
   */
  function handleDeleteAll() {
    try {
      const reference = "chatLog/" + newSessionId,
        deleteAll = {};
      deleteAll[reference] = null;
      return update(ref(db), deleteAll) + initAgain();
    } catch (err) {
      console.log("Server unavailable: " + err);
      alert("Server unavailable. Please try again.");
    }
  }

  /**
   * initAgain -> We must create the session directory again so that both nodes
   * can continue communicating correctly from line 0 incrementing.
   * @returns {Object} button - delete button.
   */
  function initAgain() {
    try {
      set(ref(db, "chatLog/" + newSessionId + "/" + 0), {
        line: "Chat was emptied, start chat again:",
      });
    } catch (err) {
      console.log("Server unavailable: " + err);
      alert("Server unavailable.");
    }
  }

  return (
    <button id="deleteAll" onClick={handleDeleteAll}>
      Delete all messages
    </button>
  );
};
