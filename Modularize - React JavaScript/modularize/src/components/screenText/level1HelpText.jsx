import React from "react";
import Popup from "reactjs-popup";
import "../../css/style.css";

/**
 * Level 1 Help Text
 */
export default class Level1HelpText extends React.Component {
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
              Help
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
              <div className="h4">
                Level 1 is based on a Restaurant Food Delivery Microservice
                Architecture
              </div>
            </div>
            <div className="modal-content">
              <div className="text">
                <p>
                  In this level, the user must move and arrange the modules into
                  their correct positions, satisfying the semantics of the
                  system.
                </p>

                <p>
                  A ‘socket’ is represented as a colored rectangle and it must
                  connect to a module with an ‘arrow’ of the same color.
                </p>

                <p>
                  Once the pieces are in their correct positions, they will also
                  match the lines that complete the connections for a finished
                  system.
                </p>

                <p>
                  See the 'Tips' menu to understand what each module does and to
                  understand what certain technical terms mean.
                </p>

                <p>
                  See the 'Concepts' menu to understand Modularity concepts that
                  are applied in the module graphics.
                </p>
              </div>
            </div>
          </div>
        )}
      </Popup>
    );
  }
}
