import React from "react";
import Popup from "reactjs-popup";
import "../../css/style.css";

/**
 * Encapsulation Text In A Modal
 */
export default class LevelEncapsulation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * Handle Click
   */
  handleClick() {
    this.setState({ clicked: true });
  }

  /**
   * Dynamic Style Class (changes the css class to stop the animation)
   */
  dynamicClass() {
    const className = this.state.clicked ? "stopAnimation" : "pulse-btn";
    return className;
  }

  /**
   * Render
   * Library "reactjs-popup" taken from source https://www.npmjs.com/package/reactjs-popup
   */
  render() {
    return (
      <Popup
        trigger={
          <div>
            <button className={this.dynamicClass()} onClick={this.handleClick}>
              Encapsulation
            </button>
          </div>
        }
        modal
        nested
      >
        {(close) => (
          <div>
            <button className="modal-close" onClick={close}>
              &times;
            </button>
            <div className="modal-header">
              <div className="h4">Modularity Concepts: Encapsulation</div>
            </div>
            <div className="modal-content">
              <div className="text">
                <p>
                  Encapsulation is protecting the modules from unauthorised
                  access and maintaining integrity. Therefore, the module’s data
                  and its functions that operate on its own data, are their own
                  separate module.
                </p>

                <p>
                  This is important because each module must be focused on a
                  single function e.g. payments module deals with currency
                  payments, notifications module deals with only sending
                  notifications. This is why modularity is a powerful system
                  architecture that allows easy maintenance, testing and
                  extendibility of adding new modules (new functions).
                </p>
              </div>
            </div>
          </div>
        )}
      </Popup>
    );
  }
}
