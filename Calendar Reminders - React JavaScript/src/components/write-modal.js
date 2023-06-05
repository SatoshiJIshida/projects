import React from "react";
import "../index.css";

/**
 * Write Modal Component.
 * @author  [Satoshi Ishida]
 *
 * @param   {boolean} show          - true or false to show the modal
 * @param   {object}  children      - to show child elements
 * @returns {string}  showHideClass - CSS classes chosen based on boolean value to show or hide the modal
 * @returns {object}  children      - child elements in modal
 */
const WriteModal = ({ show, children }) => {
  const showHideClass = show
    ? "animateUp modal display-block"
    : "modal display-none";
  return (
    <div className={showHideClass}>
      <section>{children}</section>
    </div>
  );
};

// For single month view.
const WriteModal2 = ({ show, children }) => {
  const showHideClass = show
    ? "animateUp modal2 display-block"
    : "modal2 display-none";
  return (
    <div className={showHideClass}>
      <section>{children}</section>
    </div>
  );
};

export { WriteModal, WriteModal2 };
