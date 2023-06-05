import React from "react";
import { render } from "@testing-library/react";
import "regenerator-runtime";
import LevelTransition2 from "../../views/levelTransition2";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library React Testing Library taken from source https://testing-library.com/docs/react-testing-library/intro/
 */

describe("LevelTransition2 screen integration", () => {
  it("should be defined", async () => {
    expect(LevelTransition2).toBeDefined();
  });

  it("should render all elements correctly", async () => {
    render(<LevelTransition2 />);
  });
});
