import React, { useState, useEffect } from "react";
import "../../index.css";
import { EmojisModal } from "./emojis-modal";
import { isSubmitted } from "./chat";
const emoji = require("node-emoji");

var emojiArray = [];

/**
 * ChatInput functional component.
 * @author [Satoshi Ishida]
 */
export const ChatInput = () => {
  const [isOpen, setIsOpen] = useState(false),
    [clicked, setClicked] = useState(1),
    [userInput, setUserInput] = useState(""),
    [emojisIcon, setEmojisIcon] = useState(""),
    [openClose, setOpenClose] = useState("openEmojis");

  /**
   * useEffect -> processes to happen on component did mount.
   */
  useEffect(() => {
    update();
  });

  function update() {
    if (isOpen === false) {
      // If emojis keyboard is not open.
      setEmojisIcon(emoji.get("slightly_smiling_face"));
      setOpenClose("openEmojis");
    } else {
      // Else it is opened for the user to select an emoji.
      setEmojisIcon(emoji.get("x"));
      setOpenClose("opened");
    }
    // On message submission it's nicer to empty and close the popup container.
    if (isSubmitted === true) {
      setUserInput("");
      setIsOpen(false);
      setClicked(1);
      emojiArray = [];
    }
  }

  /**
   * handleChange -> when the user is inputting a message in real-time.
   * @param {Object} value - user input.
   */
  function handleChange(value) {
    try {
      setUserInput(value);
      return;
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * getEmojis -> get the emojis from the library (saves time instead of manually coding every emoji code sequence).
   */
  function getEmojis() {
    for (let i in emoji.emoji) {
      emojiArray.push(emoji.emoji[i]);
    }
    emojiArray.sort();
    emojiArray = emojiArray.slice(1282, 1399); // only get the main emojis, this could be turned into a scroll box to have all emojis.

    setClicked(clicked + 1);
    if (clicked === 1) {
      setIsOpen(true);
      return;
    } else if (clicked === 2) {
      setIsOpen(false);
      setClicked(1);
      emojiArray = [];
      return;
    }
  }

  /**
   * The emoji modal containing the selection of emojis.
   * An emoji is a sequence of characters in Unicode representing a Unicode character.
   * They can be displayed as images, or by code, which then displays them as images when interpreted.
   * @returns {Object} div - emoji modal div container.
   */
  function emojiContainer() {
    return (
      <div id="emojiModal">
        {emojiArray.map((el, i) => {
          return (
            <div key={i} className="emojiContainer">
              <input
                key={i}
                type="button"
                className="emojiBtn"
                onClick={() => displayEmoji(el)}
                value={el}
              ></input>
            </div>
          );
        })}
      </div>
    );
  }

  /**
   * displayEmoji -> put the emoji into the user input.
   * @param {string} el - emoji.
   */
  function displayEmoji(el) {
    if (el) {
      setUserInput(userInput + el);
      return;
    }
  }

  return (
    <React.Fragment>
      <input
        key="emojiBtn"
        type="button"
        id="emojis"
        value={emojisIcon}
        className={openClose}
        onClick={getEmojis}
        data-testid="emojis"
      ></input>
      <EmojisModal key="emojisModal" show={isOpen}>
        {emojiContainer()}
      </EmojisModal>
      <input
        key="chatInput"
        placeholder="Type a message"
        type="text"
        id="inputText"
        value={userInput}
        onChange={(e) => handleChange(e.target.value)}
        autoComplete="off"
      />
    </React.Fragment>
  );
};
