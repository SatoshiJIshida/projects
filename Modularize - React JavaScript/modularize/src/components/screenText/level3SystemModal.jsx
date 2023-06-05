import React from "react";
import Popup from "reactjs-popup";
import "../../css/style.css";

/**
 * Level 3 System Image In A Modal
 * Library "reactjs-popup" taken from source https://www.npmjs.com/package/reactjs-popup
 */
export default class Level3SystemModal extends React.Component {
  render() {
    return (
      <Popup
        trigger={<button className="menu-btn">View Level 3 System</button>}
        modal
        nested
      >
        {(close) => (
          <div className="modal-contain">
            <button className="modal-close" onClick={close}>
              &times;
            </button>
            <div className="modal-header2">
              <div className="h4">Level 3 Completed System</div>
            </div>
            <div className="imgContain3">
              <img
                src="./img/items/level3Complete.png"
                alt="Level3 Completed System"
                name="Level3 diagram"
                width="800px"
              />
            </div>
          </div>
        )}
      </Popup>
    );
  }
}
