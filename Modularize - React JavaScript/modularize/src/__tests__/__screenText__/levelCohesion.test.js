import React from "react";
import { shallow } from "enzyme";
import LevelCohesion from "../../components/screenText/levelCohesion";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 */

describe("Level Cohesion modal", () => {
  it("should be defined", () => {
    expect(LevelCohesion).toBeDefined();
  });

  it("should render correctly", () => {
    const modal = shallow(<LevelCohesion name="modal-test" />);
    expect(modal).toMatchSnapshot();
  });
});
