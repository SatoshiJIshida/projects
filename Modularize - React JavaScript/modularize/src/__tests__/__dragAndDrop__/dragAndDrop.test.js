import React from "react";
import helper from "../../helpers/dragAndDrop_helper";
import data from "../../custom/data";

// Library Jest taken from source https://jestjs.io/

describe("mock of 'react-beautiful-dnd' library", () => {
  jest.mock("../../helpers/dragAndDrop_helper");

  it("should be defined", () => {
    expect(helper.Droppable).toBeDefined();
    expect(helper.Draggable).toBeDefined();
    expect(helper.DragDropContext).toBeDefined();
  });

  it("should be truthy", () => {
    expect(helper.Droppable).toBeTruthy();
    expect(helper.Draggable).toBeTruthy();
    expect(helper.DragDropContext).toBeTruthy();
  });

  test("a Droppable dropZone can contain an item", () => {
    const item = data.items["item-1"]; // get 1 of my data items.
    // put my item into a Droppable dropZone.
    <helper.Droppable>return ({item});</helper.Droppable>;
    // expect received object to have properties of expected object.
    expect.objectContaining(item);
  });

  test("a Draggable object can contain an element", () => {
    const item = data.items["item-1"]; // get 1 of my data items.
    // put my item into a Draggable object.
    <helper.Draggable>return ({item});</helper.Draggable>;
    // expect received object to have properties of expected object.
    expect.objectContaining(item);
  });

  test("DragDropContext: Droppable contains Draggable", () => {
    const item = data.items["item-1"]; // get 1 of my data items.
    <helper.DragDropContext>
      <helper.Droppable>
        return (<helper.Draggable>{item}</helper.Draggable>
        );
      </helper.Droppable>
    </helper.DragDropContext>;
  });
});
