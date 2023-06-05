import React from "react";
import "../index.css";

interface Props {
  show: boolean;
  children: object;
}

/**
 * Notification Component.
 * @author [Satoshi Ishida]
 *
 * @param   {boolean} show          - true or false to show the modal
 * @param   {object}  children      - to show child elements
 * @returns {string}  showHideClass - CSS classes chosen based on boolean value to show or hide the modal
 * @returns {object}  children      - child elements in modal
 */
const Notification: React.FC<Props> = (props: Props): any => {
  const showHideClass: string = props.show
    ? "animateUp modal display-block"
    : "modal display-none";
  return (
    <div className={showHideClass}>
      <section>{props.children}</section>
    </div>
  );
};

// For single month view.
const Notification2: React.FC<Props> = (props: Props): any => {
  const showHideClass: string = props.show
    ? "animateUp modal2 display-block"
    : "modal2 display-none";
  return (
    <div className={showHideClass}>
      <section>{props.children}</section>
    </div>
  );
};

export { Notification, Notification2 };
