import React from "react";
import { shallow } from "enzyme";
import LevelModularity from "../../components/screenText/levelModularity";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 */

describe("Level Modularity modal", () => {
  it("should be defined", () => {
    expect(LevelModularity).toBeDefined();
  });

  it("should render correctly", () => {
    const modal = shallow(<LevelModularity name="modal-test" />);
    expect(modal).toMatchSnapshot();
  });
});
