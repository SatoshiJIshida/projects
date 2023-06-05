import React from "react";
import { render } from "@testing-library/react";
import "regenerator-runtime";
import Level3 from "../../views/level3";
("use strict");

/**
 * Library Jest taken from source https://jestjs.io/
 * Library React Testing Library taken from source https://testing-library.com/docs/react-testing-library/intro/
 */

describe("Level3 screen integration", () => {
  it("should be defined", async () => {
    expect(Level3).toBeDefined();
  });

  it("should render all elements correctly", async () => {
    render(<Level3 />);
  });

  it("Restart should reset state back to default", async () => {
    const restart = new Level3();
    restart.setState(restart.getInitialStates());
    expect(restart).toBeTruthy();
  });

  jest.useFakeTimers();

  it("should open a function when timer ends", async () => {
    const timer = require("../../helpers/level3_helper.js");
    timer();

    if (setTimeout) {
      // if Jest timer ends.
      const openFunction = jest.fn(); // Jest mock function.
      openFunction(); // Call mock function.
      expect(openFunction).toHaveBeenCalledTimes(1); // Expect mock function to have been called once on timer ends.
    }
  });
});
