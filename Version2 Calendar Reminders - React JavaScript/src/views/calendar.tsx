import React from "react";
import { year } from "../custom/date-pattern";
import "../index.css";

import { YearView } from "../components/year-view";

/**
 * Calendar Main View.
 * @author [Satoshi Ishida]
 */
class Calendar extends React.Component {
  render() {
    return [
      <div className="titleContainer">
        <div className="h4">{year()}</div>
      </div>,
      <div className="container">
        <YearView />
      </div>,
    ];
  }
}

export default Calendar;
