import React from "react";
import { render } from "@testing-library/react";
import "regenerator-runtime";
import Score from "../../views/score";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library React Testing Library taken from source https://testing-library.com/docs/react-testing-library/intro/
 */

describe("Score screen integration", () => {
  it("should be defined", async () => {
    expect(Score).toBeDefined();
  });

  it("should render all elements correctly", async () => {
    render(<Score />);
  });
});
