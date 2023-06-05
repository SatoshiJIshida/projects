import React from "react";
import { render } from "@testing-library/react";
import "regenerator-runtime";
import LevelTransition1 from "../../views/levelTransition1";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library React Testing Library taken from source https://testing-library.com/docs/react-testing-library/intro/
 */

describe("LevelTransition1 screen integration", () => {
  it("should be defined", async () => {
    expect(LevelTransition1).toBeDefined();
  });

  it("should render all elements correctly", async () => {
    render(<LevelTransition1 />);
  });
});
