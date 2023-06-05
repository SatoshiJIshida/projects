import React from "react";
import "../../index.css";

/**
 * EmojisModal functional component.
 * @param {boolean} show - if true, this modal opens.
 * @param {Object} children - the modal div to be put within this div container.
 * @returns {Object} div container with the modal if show === true.
 * @author [Satoshi Ishida]
 */
export const EmojisModal = ({ show, children }) => {
  const showHideClass = show ? "display" : "display-none";
  return (
    <div key="emojiModalContainer" className={showHideClass}>
      <section key="modal">{children}</section>
    </div>
  );
};
