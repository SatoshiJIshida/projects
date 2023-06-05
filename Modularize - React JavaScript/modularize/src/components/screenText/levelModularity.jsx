import React from "react";
import Popup from "reactjs-popup";
import "../../css/style.css";

/**
 * Modularity Text In A Modal
 * Library "reactjs-popup" taken from source https://www.npmjs.com/package/reactjs-popup
 */
export default class LevelModularity extends React.Component {
  render() {
    return (
      <Popup
        trigger={<button className="side-btn">Modularity</button>}
        modal
        nested
      >
        {(close) => (
          <div>
            <button className="modal-close" onClick={close}>
              &times;
            </button>
            <div className="modal-header">
              <div className="h4">Modularity</div>
            </div>
            <div className="modal-content">
              <div className="text">
                <p>
                  Modularity in software engineering is the separation of a
                  system’s different functions into separate independent
                  modules, which are then combined together into a unified
                  system. This allows complex systems to be broken down into
                  independent modules that can be updated separately and
                  efficiently. Moreover, this allows new modules to easily be
                  added to a system for expansion in adding new functionality.
                </p>

                <p>
                  The example used here is Microservices, which is one of the
                  ways that Modularity is applied to software. The Microservice
                  architecture is an architectural style that structures an
                  application as a collection of services. Each service is a
                  loosely coupled module, meaning that each module has little or
                  no knowledge of the definitions of other separate modules.
                  Therefore, each module is independent for efficient updating,
                  testing and expansion and is independently deployable.
                  Furthermore, new services can be added to a system with ease,
                  to extend its functionality by adding new modules.
                </p>
              </div>
            </div>
          </div>
        )}
      </Popup>
    );
  }
}
