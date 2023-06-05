import React from "react";
import DropZone from "../../components/dragAndDrop/dropZone";

// Library Jest taken from source https://jestjs.io/

describe("Droppable dropZones", () => {
  it("should be defined", () => {
    expect(DropZone).toBeDefined();
  });

  it("should render correctly", () => {
    const dropZone = <DropZone name="dropZone-test" />;
    expect(dropZone).toMatchSnapshot();
  });
});
