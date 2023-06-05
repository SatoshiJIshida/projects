import React from "react";
import Popup from "reactjs-popup";
import "../../css/style.css";

/**
 * Coupling Text In A Modal
 */
export default class LevelCoupling extends React.Component {
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
              Coupling
            </button>
          </div>
        }
        modal
        nested
      >
        {(close) => (
          <div className="">
            <button className="modal-close" onClick={close}>
              &times;
            </button>
            <div className="modal-header">
              <div className="h4">Modularity Concepts: Coupling</div>
            </div>

            <div className="modal-content">
              <div className="text">
                <p>
                  Coupling is the indication of the relationships between two or
                  more modules. It is the degree of interdependence between
                  modules - the strength of the relationships between software
                  modules of how closely connected the modules are to each
                  other.
                </p>

                <p>
                  You will see in this level that each module has a relevant
                  relationship with other modules based on the function of each
                  module and how the system is supposed to work. Each module and
                  its relationships with other modules, represents how the
                  service works in the real world.
                </p>
              </div>
            </div>
          </div>
        )}
      </Popup>
    );
  }
}
