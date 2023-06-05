import React from "react";
import Popup from "reactjs-popup";
import "../../css/style.css";
import tips from "../../custom/tips";

/**
 * Level 2 Tips Component
 */
export default class Level2Tips extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tipsData: tips,
      open: false,
      selected: null,
    };
    this.openModal = this.openModal.bind(this);
  }

  /**
   * Open Modal
   * @param {string} i
   */
  openModal = (i) => {
    this.setState({ open: true, selected: i });
  };

  /**
   * Render Tips
   */
  renderTips = () => {
    return this.state.tipsData.level2TipOrder.map((i) => {
      const tip = this.state.tipsData.level2Tips[i];
      return (
        <div>
          <button
            key={i}
            className="tip2-btn"
            onClick={() => this.openModal(i)}
          >
            {tip.id}
          </button>
        </div>
      );
    });
  };

  /**
   * Render Modals
   */
  renderModal = () => {
    if (this.state.selected !== null) {
      const selectedTip = this.state.tipsData.level2Tips[this.state.selected];
      return (
        <div>
          <div className="modal-header">
            <div className="h4">{selectedTip.id}</div>
          </div>
          <div className="modal-tip">
            <div className="text">{selectedTip.text}</div>
          </div>
        </div>
      );
    }
  };

  /**
   * Render
   * Library "reactjs-popup" taken from source https://www.npmjs.com/package/reactjs-popup
   */
  render() {
    return (
      <Popup trigger={<div>{this.renderTips()}</div>} modal nested>
        {(close) => (
          <div>
            <button className="modal-close" onClick={close}>
              &times;
            </button>
            <div>{this.renderModal()}</div>
          </div>
        )}
      </Popup>
    );
  }
}
