import React from "react";
import { shallow } from "enzyme";
import Level2Tips from "../../components/levelTips/level2Tips";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 */

describe("Level2Tips modals", () => {
  it("should be defined", () => {
    expect(Level2Tips).toBeDefined();
  });

  it("should render correctly", () => {
    const modal = shallow(<Level2Tips name="modal-test" />);
    expect(modal).toMatchSnapshot();
  });
});
