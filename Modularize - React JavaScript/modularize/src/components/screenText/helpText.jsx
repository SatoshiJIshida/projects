import React from "react";
import "../../css/style.css";

/**
 * Help Text
 */
export default class HelpText extends React.Component {
  render() {
    return (
      <div>
        <div className="moveUp1">
          <div className="h1-container fadeIn2">
            <div className="h1">Help Information</div>
          </div>
        </div>
        <div className="moveUp2">
          <div className="text-two-container fadeIn2">
            <div className="text">
              <p>
                This is a learning game teaching Modularity concepts using
                Microservices as the example, the user will be tasked with solving
                puzzles by dragging and dropping items into their correct
                positions.
              </p>
              <p>
                In-order to progress to the next level. The user must understand
                and apply the correct knowledge of modularity whilst positioning
                the items.
              </p>
              <p>Each level will teach the user modularity concepts.</p>
              <p>Enjoy your learning adventure and have fun!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
