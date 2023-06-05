import React from "react";
import Request from "../components/login/request";
import { BackBtn } from "../components/login/back-btn";

/**
 * Request Screen.
 * @author [Satoshi Ishida]
 */
export default class RequestScreen extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="innerContainer">
          <React.Fragment>
            <Request />
            <BackBtn />
          </React.Fragment>
        </div>
      </div>
    );
  }
}
