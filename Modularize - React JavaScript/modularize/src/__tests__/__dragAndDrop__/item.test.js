import React from "react";
import Item from "../../components/dragAndDrop/item";

// Library Jest taken from source https://jestjs.io/

describe("Draggable items", () => {
  it("should be defined", () => {
    expect(Item).toBeDefined();
  });

  it("should render correctly", () => {
    const item = <Item name="item-test" />;
    expect(item).toMatchSnapshot();
  });
});
