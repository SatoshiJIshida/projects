import React from "react";
import ReactDOM from "react-dom";
import YearView from "../components/year-view";
import { year } from "../custom/date-pattern";

/**
 * A function to enter the Year View.
 * @author [Satoshi Ishida]
 */
function enterYearView() {
  ReactDOM.render(
    <React.StrictMode>
      <div className="titleContainer">
        <div className="h4">{year()}</div>
      </div>
      <div className="container">
        <YearView />
      </div>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

export { enterYearView };
