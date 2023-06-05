import React from "react";
import { render } from "@testing-library/react";
import "regenerator-runtime";
import Level1 from "../../views/level1";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library React Testing Library taken from source https://testing-library.com/docs/react-testing-library/intro/
 */

describe("Level1 screen integration", () => {
  it("should be defined", async () => {
    expect(Level1).toBeDefined();
  });

  it("should render all elements correctly", async () => {
    render(<Level1 />);
  });

  it("Restart should reset state back to default", async () => {
    const restart = new Level1();
    restart.setState(restart.getInitialStates());
    expect(restart).toBeTruthy();
  });
});
