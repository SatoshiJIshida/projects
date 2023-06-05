import React from "react";
import "../index.css";

/**
 * Notification Component.
 * @author  [Satoshi Ishida]
 *
 * @param   {boolean} show          - true or false to show the modal
 * @param   {object}  children      - to show child elements
 * @returns {string}  showHideClass - CSS classes chosen based on boolean value to show or hide the modal
 * @returns {object}  children      - child elements in modal
 */
const Notification = ({ show, children }) => {
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
const Notification2 = ({ show, children }) => {
  const showHideClass = show
    ? "animateUp modal2 display-block"
    : "modal2 display-none";
  return (
    <div className={showHideClass}>
      <section>{children}</section>
    </div>
  );
};

export { Notification, Notification2 };
