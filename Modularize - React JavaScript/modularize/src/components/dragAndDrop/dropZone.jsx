import React from "react";
import { Droppable } from "react-beautiful-dnd";
import "../../css/style.css";
import Item from "./item";

/**
 * Inner List Component
 * Library "react-beautiful-dnd" taken from source https://github.com/atlassian/react-beautiful-dnd
 * Based on Library "react-beautiful-dnd"
 */
class InnerList extends React.Component {
  /**
   * Checks if component should update.
   * @param {props} nextProps
   */
  shouldComponentUpdate(nextProps) {
    if (nextProps.items === this.props.items) {
      return false; // We skip a render if the new items array shares referential equality with the existing items array.
    } else {
      return true; // Otherwise we only render the change, this optimizes the performance of rendering.
    }
  }

  /**
   * Render Items
   */
  render() {
    /**
     * Map holds key-value pairs, we provide variables 'item' and 'index' mapped to 'items' for item and index of each datum.
     * We then call the Item class that is imported and provide as arguments for draggable key/item/index.
     */
    return this.props.items.map((item, index) => (
      <Item key={item.id} item={item} index={index} />
    ));
  }
}

/**
 * DropZone Component
 * Library "react-beautiful-dnd" taken from source https://github.com/atlassian/react-beautiful-dnd
 * Based on Library "react-beautiful-dnd"
 */
export default class DropZone extends React.Component {
  render() {
    return (
      <div className="dropZone">
        <Droppable
          key={this.props.dropZone.id}
          droppableId={this.props.dropZone.id}
        >
          {(provided) => (
            <div
              className={"itemList"}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <InnerList key={this.props.items.id} items={this.props.items} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}
