import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "../../css/style.css";
import sync from "css-animation-sync";

/**
 * Item Component
 * Library "react-beautiful-dnd" taken from source https://github.com/atlassian/react-beautiful-dnd
 * Based on Library "react-beautiful-dnd"
 */
export default class Item extends React.Component {
  render() {
    sync("bounce");
    return (
      <Draggable
        key={this.props.item.id}
        draggableId={this.props.item.id}
        index={this.props.index}
      >
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <img
              src={`./img/items/${this.props.item.id}.svg`}
              alt={this.props.item.id}
              name="item"
              width="200px"
              // className="bounce"
            />
          </div>
        )}
      </Draggable>
    );
  }
}
