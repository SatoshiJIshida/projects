import React from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebase-api/firebase";
import { getDatabase, ref, update } from "firebase/database";
import "../../index.css";
import { newSessionId, lineKey } from "./chat";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

/**
 * Delete Button functional component to delete the last message sent.
 * @author [Satoshi Ishida]
 */
export const DeleteBtn = () => {
  /**
   * handleDelete -> delete the last message sent.
   * @returns {Object} button - delete button.
   */
  function handleDelete() {
    try {
      const reference = "chatLog/" + newSessionId + "/" + lineKey,
        updates = {};
      updates[reference] = null;
      return update(ref(db), updates);
    } catch (err) {
      console.log("Server unavailable: " + err);
      alert("Server unavailable. Please try again.");
    }
  }

  return (
    <button id="delete" onClick={handleDelete}>
      Delete last message
    </button>
  );
};
