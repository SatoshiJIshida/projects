import React from "react";
import "../../css/style.css";

/**
 * Home Text
 */
export default class HomeText extends React.Component {
  render() {
    return (
      <div>
        <div className="title">
          <img
            src="./img/items/title.svg"
            alt="Modularize Title"
            width="700px"
          />
        </div>
        <div className="name">
          <div className="text">Satoshi Ishida</div>
        </div>
      </div>
    );
  }
}
