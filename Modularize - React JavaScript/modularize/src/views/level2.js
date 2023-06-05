import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import "../styles.css";
import data from "../custom/data";
import DropZone from "../components/dragAndDrop/dropZone";
import Level2Tips from "../components/levelTips/level2Tips";
import Level2HelpText from "../components/screenText/level2HelpText";
import LevelModularity from "../components/screenText/levelModularity";
import LevelCoupling from "../components/screenText/levelCoupling";
import LevelCohesion from "../components/screenText/levelCohesion";
import LevelEncapsulation from "../components/screenText/levelEncapsulation";
import LevelExitBtn from "../components/buttons/levelExitBtn";
import { handleScoreLevel2 } from "../score/scoreSystem";

/**
 * Level 2 Screen
 */
class Level2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialStates();
    this.restart = this.restart.bind(this);
  }

  /**
   * Get Initial States
   */
  getInitialStates = () => ({
    newData: data,
  });

  /**
   * On Drag End For Drag And Drop
   * Library "react-beautiful-dnd" taken from source https://github.com/atlassian/react-beautiful-dnd
   * Based on Library "react-beautiful-dnd"
   * @param {Object} result
   */
  onDragEnd = (result) => {
    // This synchronously updates the drag and drop result.
    const { destination, source, draggableId } = result; // result object.

    if (!destination) {
      // if no destination, then return as is.
      return;
    }

    if (
      destination.droppableId === source.droppableId && // if 'destination' shares the exact same item id and index as 'source', that means item is still in source...
      destination.index === source.index
    ) {
      // so we don't do anything because user dropped item back in start position.
      return;
    }

    /**
     * Persist reordering within a drop zone.
     */
    const start = this.state.newData.dropZones2[source.droppableId]; // data.dropZones2 contains droppableIds for source/start.
    const finish = this.state.newData.dropZones2[destination.droppableId]; // data.dropZones2 contains droppableIds for destination/finish.
    // Below - Both drop zones contain the same ids when 1 moved to another.
    if (start === finish) {
      // We want to make a new array/objects to differentiate the changes of state.
      const newItemIds = Array.from(start.itemIds); // New array using the same items ids from start.
      newItemIds.splice(source.index, 1); // Remove 1 item from this source index.
      newItemIds.splice(destination.index, 0, draggableId); // In destination, don't remove anything (0) and insert new id into destination (the one from above).

      const newDropZone = {
        // New drop zone for the change state for start.
        ...start, // Using same properties as start drop zone. The 3 dots (shortcut) spreads out all properties of start.
        itemIds: newItemIds, // but, with the newItemIds array instead of the default itemIds array.
      };

      const newState = {
        // Now put the above into this new state
        ...this.state.newData, // Object spread to maintain the old properties of the default state.
        dropZones2: {
          ...this.state.newData.dropZones2, // Good-practise to keep this object spread of properties.
          [newDropZone.id]: newDropZone, // Insert new drop zone into this map, overrides existing drop zone.
        },
      };
      this.setState({
        newData: newState,
      }); // Set the new state and return.
      return;
    }

    /**
     * Move between drop zones.
     */
    const startItemIds = Array.from(start.itemIds); // New array containing the item ids at start position.
    startItemIds.splice(source.index, 1); // Remove 1 item from this source index.
    const newStart = {
      // A new start drop zone...
      ...start, // With the same properties as start.
      itemIds: startItemIds, // but, using the new ids array, which now has 1 item removed. (for updating state).
    };

    const finishItemIds = Array.from(finish.itemIds); // New array of item ids for finish.

    if (finishItemIds.length === 0) {
      finishItemIds.splice(destination.index, 0, draggableId); // In destination, don't remove anything (0) and insert new id into destination (the one from source).
    } else if (finishItemIds.length === 1) {
      // else if we have an item in a zone - we want to switch items between zones.
      finishItemIds.splice(destination.index, 0, draggableId); // add the item into the destination.
      startItemIds.splice(source.index, 0, finishItemIds[1]); // put what was already at destination into source, for the switch.
      finishItemIds.splice(destination.index + 1, 1); // remove what was already at destination to avoid duplication of items.
    } else {
      return; // else return as is because nothing changed.
    }

    const newFinish = {
      // New finish drop zone...
      ...finish, // With the same properties as finish.
      itemIds: finishItemIds, // but, using the new 'finish' item ids array for the updated finish dropZone. (for updating state).
    };

    // Sometimes there's a bug with 2 items in 1 zone, so ensure that only 1 item can render in a zone.
    if (newFinish.itemIds.length === 1) {
      const newState = {
        // New state for this change.
        ...this.state.newData, // Using properties from the original state.
        dropZones2: {
          ...this.state.newData.dropZones2, // Keep this object spread of properties.
          [newStart.id]: newStart, // insert new start drop zone.
          [newFinish.id]: newFinish, // insert new finish drop zone.
        },
      };
      this.setState(
        {
          newData: newState,
        },
        () => {
          this.handleChoices(); // Call this function whilst we have updated state.
        }
      );
    } else {
      return; // else leave as is.
    }
  };

  /**
   * Handle Choices For Completing the Level
   */
  handleChoices = () => {
    // Set correct choices.
    var dropZone1 = this.state.newData.dropZones2[
      "dropZone-1"
    ].itemIds.includes("level2-item-1");
    var dropZone2 = this.state.newData.dropZones2[
      "dropZone-2"
    ].itemIds.includes("level2-item-2");
    var dropZone3 = this.state.newData.dropZones2[
      "dropZone-3"
    ].itemIds.includes("level2-item-3");
    var dropZone4 = this.state.newData.dropZones2[
      "dropZone-4"
    ].itemIds.includes("level2-item-4");
    var dropZone5 = this.state.newData.dropZones2[
      "dropZone-5"
    ].itemIds.includes("level2-item-5");
    var dropZone6 = this.state.newData.dropZones2[
      "dropZone-6"
    ].itemIds.includes("level2-item-6");
    var dropZone7 = this.state.newData.dropZones2[
      "dropZone-7"
    ].itemIds.includes("level2-item-7");
    var dropZone8 = this.state.newData.dropZones2[
      "dropZone-8"
    ].itemIds.includes("level2-item-8");
    var dropZone9 = this.state.newData.dropZones2[
      "dropZone-9"
    ].itemIds.includes("level2-item-9");

    // Check for correct choices.
    if (
      dropZone1 &&
      dropZone2 &&
      dropZone3 &&
      dropZone4 &&
      dropZone5 &&
      dropZone6 &&
      dropZone7 &&
      dropZone8 &&
      dropZone9
    ) {
      new handleScoreLevel2(); // Call function to calculate the score.
    } else {
      return;
    }
  };

  /**
   * Restart Level To Initial States
   */
  restart = () => {
    this.setState(this.getInitialStates());
  };

  /**
   * Render
   * Library "react-beautiful-dnd" taken from source https://github.com/atlassian/react-beautiful-dnd
   * Based on Library "react-beautiful-dnd"
   */
  render() {
    return [
      <div className="page">
        <div className="base-bg">
          <div className="level-two-container">
            <div className="tip2-container">
              <div className="h4 fadeIn2">Level 2</div>
              <div className="tip-within">
                <div className="h5 fadeIn2">
                  <div className="fadeRepeat">Tips</div>
                </div>
                <div className="moveRight"><Level2Tips /></div>
              </div>
            </div>

            <DragDropContext key={this.onDragEnd.id} onDragEnd={this.onDragEnd}>
              <div className="dropZone2-bg moveUp1">
                <div className="dropZone-container2">
                  {this.state.newData.dropZoneOrder2.map((dropZoneId) => {
                    const dropZone2 = this.state.newData.dropZones2[dropZoneId];
                    const items = dropZone2.itemIds.map(
                      (itemId) => this.state.newData.items[itemId]
                    );
                    return (
                      <DropZone
                        key={dropZone2.id}
                        dropZone={dropZone2}
                        items={items}
                      />
                    );
                  })}
                </div>
              </div>
            </DragDropContext>

            <div className="menu-container moveLeft">
              <button className="side-btn" onClick={this.restart}>
                Restart
              </button>
              <Level2HelpText />
              <LevelExitBtn />
            </div>

            <div className="menu2-container moveLeft">
              <div className="h5 fadeRepeat">Concepts</div>
              <LevelModularity />
              <LevelCoupling />
              <LevelCohesion />
              <LevelEncapsulation />
            </div>
          </div>
        </div>
      </div>,
    ];
  }
}

export default Level2;
