import React from "react";
import Popup from "reactjs-popup";
import "../../css/style.css";

/**
 * Level 2 System Image In A Modal
 * Library "reactjs-popup" taken from source https://www.npmjs.com/package/reactjs-popup
 */
export default class Level2SystemModal extends React.Component {
  render() {
    return (
      <Popup
        trigger={<button className="menu-btn">View Level 2 System</button>}
        modal
        nested
      >
        {(close) => (
          <div className="modal-contain">
            <button className="modal-close" onClick={close}>
              &times;
            </button>
            <div className="modal-header2">
              <div className="h4">Level 2 Completed System</div>
            </div>
            <div className="imgContain2">
              <img
                src="./img/items/level2Complete.png"
                alt="Level2 Completed System"
                name="Level2 diagram"
                width="800px"
              />
            </div>
          </div>
        )}
      </Popup>
    );
  }
}
