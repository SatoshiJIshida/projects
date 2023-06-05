import React from "react";
import Popup from "reactjs-popup";
import "../../css/style.css";

/**
 * Cohesion Text In A Modal
 */
export default class LevelCohesion extends React.Component {
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
              Cohesion
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
              <div className="h4">Modularity Concepts: Cohesion</div>
            </div>
            <div className="modal-content">
              <div className="text">
                <p>
                  Cohesion refers to what the modules can do, more specifically
                  modularity uses 'high cohesion', which specifies that the
                  module is focused on only the single intention of what it
                  needs to do.
                </p>

                <p>
                  Low cohesion means that there is variety in what the module
                  does, and it is therefore broad and not focused. Modularity
                  therefore requires high cohesion, for modules to be focused on
                  themselves to have their own independent functions.
                </p>
              </div>
            </div>
          </div>
        )}
      </Popup>
    );
  }
}
